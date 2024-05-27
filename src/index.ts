import axios, { AxiosInstance } from 'axios';
import { GetAPIsResponse } from './types/getAPIs';
import { GetAPIResponse } from './types/GetAPI';

class KeyforgeAPI {
  private static apiId: string | null = null;
  private static accountToken: string | null = null;
  static baseURL = 'https://api.keyforge.cloud/v0/';

  public static getAxios(): AxiosInstance {
    return axios.create({
      baseURL: KeyforgeAPI.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: KeyforgeAPI.accountToken,
      },
    });
  }

  public static setCredentials(apiId: string, accountToken?: string): void {
    KeyforgeAPI.apiId = apiId;
    KeyforgeAPI.accountToken = accountToken || null;
  }

  public static async getAPIs(page = 1, pageSize = 50): Promise<GetAPIsResponse> {
    return await KeyforgeAPI.getAxios().get('/apis', {
      params: {
        page,
        pageSize,
      },
    })
      .then(response => response.data as GetAPIsResponse)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async getAPI(apiId: string): Promise<GetAPIResponse> {
    return await KeyforgeAPI.getAxios().get(`/apis/${apiId}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

}

export default KeyforgeAPI;
