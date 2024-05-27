import axios, { AxiosInstance } from 'axios';
import { GetAPIsResponse } from './types/getAPIs';
import { GetAPIResponse } from './types/GetAPI';
import { DeleteAPIResponse } from './types/DeleteAPI';
import { CreateKeyRequestBody, CreateKeyResponse } from './types/CreateKey';
import { GetKeysResponse } from './types/GetKeys';
import { DeleteKeyResponse } from './types/DeleteKey';

class KeyforgeAPI {
  private static accountToken: string | null = null;
  static baseURL = 'https://api.keyforge.cloud/v0/';
  static apiId: string | null = null;

  public static getAxios(): AxiosInstance {
    return axios.create({
      baseURL: KeyforgeAPI.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: KeyforgeAPI.accountToken,
      },
    });
  }

  public static setCredentials({apiId, accountToken}: {apiId?: string, accountToken?: string}): void {
    KeyforgeAPI.apiId = apiId || null;
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

  public static async getAPI(apiId: string | null = KeyforgeAPI.apiId): Promise<GetAPIResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }

    return await KeyforgeAPI.getAxios().get(`/apis/${apiId}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async createAPI(name: string): Promise<GetAPIResponse> {
    return await KeyforgeAPI.getAxios().post('/apis', {
      name,
    })
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async deleteAPI(apiId: string): Promise<DeleteAPIResponse> {
    return await KeyforgeAPI.getAxios().delete(`/apis/${apiId}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async createKey(keyData: CreateKeyRequestBody | null = null, apiId: string | null = KeyforgeAPI.apiId): Promise<CreateKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }

    return await KeyforgeAPI.getAxios().post(`/apis/${apiId}/keys`, keyData)
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async getKeys(page = 1, pageSize = 10, apiId: string | null = KeyforgeAPI.apiId): Promise<GetKeysResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }

    return await KeyforgeAPI.getAxios().get(`/apis/${apiId}/keys`, {
      params: {
        page,
        pageSize,
      },
    })
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async deleteKey(keyId: string, apiId: string | null = KeyforgeAPI.apiId): Promise<DeleteKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }

    return await KeyforgeAPI.getAxios().delete(`/apis/${apiId}/keys/${keyId}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

  public static async verifyKey(token: string, apiId: string | null = KeyforgeAPI.apiId): Promise<VerifyKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }

    return await KeyforgeAPI.getAxios().post(`/verify`, {
      apiId,
      token,
    })
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });
  }

}

export default KeyforgeAPI;
