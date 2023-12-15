import httpClient from "./http.service";

const answersService = {
  create(answer: any) {
    return httpClient.post('answers', answer)
  },
  get() {
    return httpClient.get(`answers`)
  },
  update(answer: any) {
    return httpClient.put(`answers/${answer.id}`, answer)
  },
  delete(answerId: number) {
    return httpClient.delete(`answers/${answerId}`)
  }
};

export default answersService;