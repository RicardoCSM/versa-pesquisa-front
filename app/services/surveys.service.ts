import httpClient from "./http.service";
import ISurvey from "../interfaces/ISurvey";

const surveysService = {
  create(survey: ISurvey) {
    return httpClient.post('surveys', survey)
  },
  get() {
    return httpClient.get('surveys?sort=-created_at')
  },
  update(survey: ISurvey) {
    return httpClient.put(`surveys/${survey.id}`, survey)
  },
  delete(surveyId: number) {
    return httpClient.delete(`surveys/${surveyId}`)
  }
};

export default surveysService;