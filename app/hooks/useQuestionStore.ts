import { create } from 'zustand';
import IQuestion from '../interfaces/IQuestion';

interface QuestionStore {
  selectedQuestion: IQuestion | null;
  setSelectedQuestion: (question: IQuestion | null) => void;
  removeSelectedQuestion: () => void,
}

const useQuestionStore = create<QuestionStore>((set) => ({
  selectedQuestion: null,
  setSelectedQuestion: (question) => set({ selectedQuestion: question }),
  removeSelectedQuestion: () => set({ selectedQuestion: null }),
}));

export default useQuestionStore;
