import httpClient from "./http.service";

const responsesService = {
  create(response: any) {
    return httpClient.post('responses', response)
  },
  get() {
    return httpClient.get(`responses`)
  },
  getPerSurvey(survey_id: number) {
    return httpClient.get(`response/per-survey?survey_id=${survey_id}`)
  },
  update(response: any) {
    return httpClient.put(`responses/${response.id}`, response)
  },
  delete(responseId: number) {
    return httpClient.delete(`responses/${responseId}`)
  }
};

export default responsesService;