interface VerifyKeyResponse {
  valid: boolean;
  keyId: string;
  ownerId: string;
  permissions: string[];
  meta: Record<string, any>;
}