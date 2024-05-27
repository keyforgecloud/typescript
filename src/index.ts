import axios, { AxiosInstance } from 'axios';
import { GetAPIsResponse } from './types/getAPIs';
import { GetAPIResponse } from './types/GetAPI';
import { DeleteAPIResponse } from './types/DeleteAPI';
import { CreateKeyRequestBody, CreateKeyResponse } from './types/CreateKey';
import { GetKeysResponse } from './types/GetKeys';
import { DeleteKeyResponse } from './types/DeleteKey';
import { Credentials } from './types/Credentials';
import { VerifyKeyResponse } from "./types/VerifyKey";

class KeyforgeAPI {
  private static accountToken: string | null = null;
  static baseURL = 'https://api.keyforge.cloud/v0/';
  static apiId: string | null = null;

  private static getAxiosInstance(accountToken: string): AxiosInstance {
    return axios.create({
      baseURL: KeyforgeAPI.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accountToken,
      },
    });
  }

  public static setAccountToken(accountToken: string): void {
    KeyforgeAPI.accountToken = accountToken || null;
  }

  public static setDefaultAPI(apiId: string): void {
    KeyforgeAPI.apiId = apiId || null;
  }

  private static async request<T>(
    method: 'get' | 'post' | 'delete',
    endpoint: string,
    data: any = {},
    params: any = {},
    credentials?: Credentials
  ): Promise<T> {
    const accountToken = credentials?.accountToken || KeyforgeAPI.accountToken;

    if (!accountToken) {
      throw new Error('No account token provided.');
    }

    const axiosInstance = KeyforgeAPI.getAxiosInstance(accountToken);

    try {
      const response = await axiosInstance[method](endpoint, data, { params });
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response.data));
    }
  }

  public static async getAPIs(page = 1, pageSize = 50, credentials?: Credentials): Promise<GetAPIsResponse> {
    return await KeyforgeAPI.request<GetAPIsResponse>('get', '/apis', {}, { page, pageSize }, credentials);
  }

  public static async getAPI(apiId: string | null = KeyforgeAPI.apiId!, credentials?: Credentials): Promise<GetAPIResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<GetAPIResponse>('get', `/apis/${apiId}`, undefined, undefined, credentials);
  }

  public static async createAPI(name: string, credentials?: Credentials): Promise<GetAPIResponse> {
    return await KeyforgeAPI.request<GetAPIResponse>('post', '/apis', { name }, undefined, credentials);
  }

  public static async deleteAPI(apiId: string, credentials?: Credentials): Promise<DeleteAPIResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<DeleteAPIResponse>('delete', `/apis/${apiId}`, undefined, undefined, credentials);
  }

  public static async createKey(keyData: CreateKeyRequestBody | null, apiId: string | null = KeyforgeAPI.apiId!, credentials?: Credentials): Promise<CreateKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<CreateKeyResponse>('post', `/apis/${apiId}/keys`, keyData, undefined, credentials);
  }

  public static async getKeys(page = 1, pageSize = 10, apiId: string | null = KeyforgeAPI.apiId!, credentials?: Credentials): Promise<GetKeysResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<GetKeysResponse>('get', `/apis/${apiId}/keys`, {}, { page, pageSize }, credentials);
  }

  public static async deleteKey(keyId: string, apiId: string | null = KeyforgeAPI.apiId!, credentials?: Credentials): Promise<DeleteKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<DeleteKeyResponse>('delete', `/apis/${apiId}/keys/${keyId}`, undefined, undefined, credentials);
  }

  public static async verifyKey(token: string, apiId: string | null = KeyforgeAPI.apiId!, credentials?: Credentials): Promise<VerifyKeyResponse> {
    if (!apiId) {
      throw new Error('API ID is not specified.');
    }
    return await KeyforgeAPI.request<VerifyKeyResponse>('post', `/verify`, { apiId, token }, undefined, credentials);
  }
}

export default KeyforgeAPI;
