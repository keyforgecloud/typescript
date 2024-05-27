export interface CreateKeyResponse {
  keyId: string;
  token: string;
}

export interface CreateKeyRequestBody {
  ownerId?: string;
  name?: string;
  permissions?: string[];
  metadata?: Record<string, any>;
}
