import axios, { AxiosInstance } from 'axios';
import { GetAPIsResponse } from './types/getAPIs';

class KeyforgeAPI {
  private static apiKey: string | null = null;
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

  public static setCredentials(apiKey: string, accountToken?: string): void {
    KeyforgeAPI.apiKey = apiKey;
    KeyforgeAPI.accountToken = accountToken || null;
  }

  public static async getAPIs(page = 1, pageSize = 50): Promise<GetAPIsResponse> {
    const response = await KeyforgeAPI.getAxios().get('/apis', {
      params: {
        page,
        pageSize,
      },
    })
      .then(response => response.data as GetAPIsResponse)
      .catch(error => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        throw new Error(JSON.stringify(error.response.data));
      });

    return response;
  }
}

export default KeyforgeAPI;
