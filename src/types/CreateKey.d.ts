export interface CreateKeyResponse {
  keyId: string;
  key: string;
}

export interface CreateKeyRequestBody {
  ownerId?: string;
  name?: string;
  permissions?: string[];
  meta?: Record<string, any>;
}
