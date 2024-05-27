export interface VerifyKeyResponse {
  valid: boolean;
  keyId: string;
  ownerId: string;
  permissions: string[];
  metadata: Record<string, any>;
}