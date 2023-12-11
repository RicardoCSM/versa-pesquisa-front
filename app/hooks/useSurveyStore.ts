import { create } from 'zustand';
import ISurvey from '../interfaces/ISurvey';

interface SurveyStore {
  selectedSurveyId: number | null;
  setSelectedSurveyId: (survey_id: number | null) => void;
  removeSelectedSurveyId: () => void,
}

const useSurveyStore = create<SurveyStore>((set) => ({
  selectedSurveyId: null,
  setSelectedSurveyId: (survey_id) => set({ selectedSurveyId: survey_id }),
  removeSelectedSurveyId: () => set({ selectedSurveyId: null }),
}));

export default useSurveyStore;
