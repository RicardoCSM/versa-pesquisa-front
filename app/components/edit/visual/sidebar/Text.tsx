'use client';

import Button from "@/app/components/buttons/Button";
import ColorInput from "../../../inputs/ColorInput";
import SelectInput from "../../../inputs/SelectInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import themesService from "@/app/services/themes.service";
import toast from "react-hot-toast";
import useThemeStore from "@/app/hooks/useThemeStore";
import { useState } from "react";

const Text = () => {
    const setSelectedTheme = useThemeStore((state) => state.setSelectedTheme);
    const selectedTheme = useThemeStore((state) => state.selectedTheme);
    const [selectedFont, setSelectedFont] = useState(1);

    const fontOptions = [
        { value: 1, label: "Roboto" },
    ];

    const {
        register,
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
          primary_color: selectedTheme?.primary_color,
          secondary_color: selectedTheme?.secondary_color,
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await themesService.update({
                id: selectedTheme?.id,
                primary_color: data.primary_color,
                secondary_color: data.secondary_color
            });
            toast.success('Theme updated with success!');
            setSelectedTheme(response.data);
        } catch (error) {
            toast.error('Error updating the theme!');
        }
    }

    const handleFontChange = (selectedFont: any) => {
        setSelectedFont(selectedFont);
        console.log(selectedFont);
    };

    return (
        <div>
            <SidebarTitle bigger label="Text" />
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <ColorInput
                    id="primary_color"
                    label="Primary Color"
                    default_value={selectedTheme?.primary_color}
                    register={register}/>
                <ColorInput
                    id="secondary_color"
                    label="Secondary Color"
                    default_value={selectedTheme?.secondary_color}
                    register={register}/>
                <SelectInput
                    id="font"
                    onChange={handleFontChange}
                    label="Font"
                    options={fontOptions}/>
                <div className="mt-3 w-2/3">
                    <Button onClick={handleSubmit(onSubmit)} small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default Text;