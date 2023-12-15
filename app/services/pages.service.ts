import httpClient from "./http.service";
import IPage from "../interfaces/IPage";

const pagesService = {
  create(page: any) {
    return httpClient.post('pages', page)
  },
  get() {
    return httpClient.get(`pages`)
  },
  getQuestionsPerPage(pageId: number) {
    return httpClient.get(`page/questions-per-page?id=${pageId}`)
  },
  update(page: IPage) {
    return httpClient.put(`pages/${page.id}`, page)
  },
  delete(pageId: number) {
    return httpClient.delete(`pages/${pageId}`)
  }
};

export default pagesService;