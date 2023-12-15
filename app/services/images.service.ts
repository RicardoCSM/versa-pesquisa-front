import axios from "axios";
import httpClient from "./http.service";
import authService from './auth.service';

const imagesService = {
  upload(image: any) {
    return axios.post('images/upload', {
        imageFile: image
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authService.getToken()}`
        }
    })
  },
  delete(image_id: number) {
    return httpClient.delete(`images/delete?id=${image_id}`)
  }
};

export default imagesService;