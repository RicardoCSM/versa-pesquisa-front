import httpClient from "./http.service";

const questionsService = {
  create(question: any) {
    return httpClient.post(`questions`, question)
  },
  get() {
    return httpClient.get('questions')
  },
  getDetails(surveyId: number) {
    return httpClient.get(`question/details?survey_id=${surveyId}`)
  },
  update(question: any) {
    return httpClient.put(`questions/${question.id}`, question)
  },
  delete(questionId: number) {
    return httpClient.delete(`questions/${questionId}`)
  }
};

export default questionsService;