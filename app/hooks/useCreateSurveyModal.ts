import { create } from "zustand";

interface CreateSurveyModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useCreateSurveyModal = create<CreateSurveyModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useCreateSurveyModal;