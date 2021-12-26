import { AxiosRequestConfig } from 'axios';
import { Api } from './api';

class MovieApi extends Api {
  private baseUrl: String;

  public constructor() {
    super(process.env.THE_MOVIE_DB_API_URL || "");
    this.baseUrl = "/movie/";
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _handleRequest = async (config: AxiosRequestConfig) => {
    config.headers = {
      Authorization: `Bearer ${process.env.THE_MOVIE_DB_ACCESS_TOKEN}`
    };

    return config;
  };

  public get(id: String) {
    return this.instance.get(`${this.baseUrl}${id}?append_to_response=videos,images`);
  }

  public credit(id: String) {
    return this.instance.get(`${this.baseUrl}${id}/credits`);
  }

}

export default new MovieApi();