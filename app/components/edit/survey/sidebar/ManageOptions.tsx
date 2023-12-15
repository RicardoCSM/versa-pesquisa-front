import { IoMdAdd } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import useQuestionStore from "@/app/hooks/useQuestionStore";
import toast from "react-hot-toast";
import questionOptionsService from "@/app/services/questionOptions.service";
import IQuestionOption from "@/app/interfaces/IQuestionOption";

interface ManageOptionsProps {
  refreshSurvey: () => void
}

const ManageOptions: React.FC<ManageOptionsProps> = ({refreshSurvey}) => {
  const selectedQuestion = useQuestionStore((state) => state.selectedQuestion);
  const [options, setOptions] = useState<IQuestionOption[]>([]);
  const [editingOptionId, setEditingOptionId] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetchOptions();
  }, []);

  const createOption = async () => {
    try {
      if (selectedQuestion) {
        await questionOptionsService.create({
          question_id: selectedQuestion.id,
        });
        toast.success("Option created with success!");
        fetchOptions();
        refreshSurvey();
      }
    } catch (error) {
      toast.error("Error creating the option!");
    }
  };

  const updateOption = async (option: IQuestionOption) => {
    try {
      await questionOptionsService.update({ id: option.id, option_text: option.option_text });
      toast.success("Option updated with success!");
      fetchOptions();
    } catch (error) {
      toast.error("Error updating the option!");
    }
  };

  const deleteOption = async (option_id?: number) => {
    try {
      if(option_id) {
        await questionOptionsService.delete(option_id);
        toast.success("Option deleted with success!");
        fetchOptions();
      }
    } catch (error) {
      toast.error("Error deleting the option!");
    }
  };

  const fetchOptions = async () => {
    try {
      if (selectedQuestion) {
        const response = await questionOptionsService.get(selectedQuestion.id);
        setOptions(response.data);
      }
    } catch (error) {
      toast.error("Error fetching the question options!");
    }
  };

  return (
    <div className="flex flex-col w-[200px] gap-2">
      <div className="flex w-full border-b border-gray-700 items-center justify-between" onClick={createOption}>
        <div className="text-gray-700">Options</div>
        <IoMdAdd className="text-gray-700 cursor-pointer" />
      </div>
      {options.map((option) => (
        <div key={option.id}>
          {editingOptionId === option.id ? (
            <input
              type="text"
              className="w-full bg-[#F8F2E2] border text-gray-900 text-sm rounded-lg outline-none transition focus:border-black p-1.5"
              value={option.option_text}
              onChange={(e) => {
                const updatedOptions = [...options];
                const index = updatedOptions.findIndex((o) => o.id === option.id);
                updatedOptions[index].option_text = e.target.value;
                setOptions(updatedOptions);
              }}
              onBlur={() => {
                setEditingOptionId(undefined);
                updateOption(option);
              }}
              autoFocus
            />
          ) : (
            <div className="flex w-full items-center justify-between">
                <div className="text-gray-700" onClick={() => setEditingOptionId(option.id)}>
                {option.option_text}
                </div>
                <div className="flex gap-1">
                  <BsTrash className="text-gray-700 cursor-pointer" onClick={() => deleteOption(option.id)}/>
                  <BsPencil className="text-gray-700 cursor-pointer" onClick={() => setEditingOptionId(option.id)} />
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageOptions;