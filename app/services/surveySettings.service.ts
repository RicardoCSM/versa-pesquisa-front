import httpClient from "./http.service";
import ISurveySetting from "@/app/interfaces/ISurveySetting";

const surveySettingsService = {
  create(survey_setting: ISurveySetting) {
    return httpClient.post(`survey-settings`, survey_setting)
  },
  get(survey_id: number) {
    return httpClient.get(`/survey/survey-settings?survey_id=${survey_id}`)
  },
  update(survey_setting: ISurveySetting) {
    return httpClient.put(`survey-settings/${survey_setting.id}`, survey_setting)
  },
  delete(surveySettingId: number) {
    return httpClient.delete(`survey-settings/${surveySettingId}`)
  }
};

export default surveySettingsService;