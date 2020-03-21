import axios from 'axios';

const BASE_API_URL = "https://api.github.com/";

export class GithubApi {
  constructor() {
    let service = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    console.error('There was an HTTP error: ', error);
    return Promise.reject(error)
  }

  getGistById (gistId: string) {
    return this.service.get(`gists/${gistId}`);
  }

  getUserGists(username: string) {
    return this.service.get(`users/${username}/gists`);
  }
}