import httpClient from "./http.service";
import ISurvey from "../interfaces/ISurvey";

const surveysService = {
  create() {
    return httpClient.post('surveys')
  },
  get(page: number) {
    return httpClient.get(`surveys?page=${page}`)
  },
  getDetails(surveyId: number) {
    return httpClient.get(`survey/details?id=${surveyId}`)
  },
  update(survey: ISurvey) {
    return httpClient.put(`surveys/${survey.id}`, survey)
  },
  delete(surveyId: number) {
    return httpClient.delete(`surveys/${surveyId}`)
  }
};

export default surveysService;