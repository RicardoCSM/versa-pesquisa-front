import httpClient from "./http.service";
import ITheme from "../interfaces/ITheme";

const themesService = {
  create() {
    return httpClient.post('themes')
  },
  get() {
    return httpClient.get(`themes`)
  },
  update(theme: ITheme) {
    return httpClient.put(`themes/${theme.id}`, theme)
  },
  delete(themeId: number) {
    return httpClient.delete(`themes/${themeId}`)
  }
};

export default themesService;