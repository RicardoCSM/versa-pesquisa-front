import httpClient from "./http.service";
import IQuestionOption from "@/app/interfaces/IQuestionOption";

const questionOptionsService = {
  create(question_option: IQuestionOption) {
    return httpClient.post(`question-options`, question_option)
  },
  get(question_id: number) {
    return httpClient.get(`/question/question-options?question_id=${question_id}`)
  },
  update(question_option: IQuestionOption) {
    return httpClient.put(`question-options/${question_option.id}`, question_option)
  },
  delete(questionOptionId: number) {
    return httpClient.delete(`question-options/${questionOptionId}`)
  }
};

export default questionOptionsService;