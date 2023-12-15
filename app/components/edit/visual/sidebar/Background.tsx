'use client';

import SelectInput from "../../../inputs/SelectInput";
import ColorInput from "../../../inputs/ColorInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";
import FileInput from "../../../inputs/FileInput";
import useThemeStore from "@/app/hooks/useThemeStore";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import themesService from "@/app/services/themes.service";
import toast from "react-hot-toast";
import { useState } from "react";

const Background = () => {
    const selectedTheme = useThemeStore((state) => state.selectedTheme);
    const setSelectedTheme = useThemeStore((state) => state.setSelectedTheme);
    const [selectedType, setSelectedType] = useState(1);

    const typeOptions = [
        { value: 1, label: "Background Color" },
        { value: 2, label: "Background Image" },
    ];

    const {
        register,
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
          background_color: selectedTheme?.background_color,
          secondary_color: selectedTheme?.secondary_color,
          type: 1,
        }
    })


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await themesService.update({
                id: selectedTheme?.id,
                background_color: data.background_color,
            });
            toast.success('Theme updated with success!');
            if (response.data) {
                setSelectedTheme(response.data);
            }
        } catch (error) {
            toast.error('Error updating the theme!');
        }
    }

    const handleTypeChange = (selectedType: any) => {
        setSelectedType(selectedType);
        console.log(selectedType);
    };

    return (
        <div>
            <SidebarTitle bigger label="Background" />
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <SelectInput id="type" label="Type" options={typeOptions} onChange={handleTypeChange}/>
                {selectedType == 1 ? (
                    <ColorInput
                        id="background_color"
                        label="Background Color"
                        default_value={selectedTheme?.background_color}
                        register={register}
                    />
                ) : (
                    <FileInput label="Background Image" />
                )}
                <div className="mt-3 w-2/3">
                    <Button onClick={handleSubmit(onSubmit)} small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default Background;