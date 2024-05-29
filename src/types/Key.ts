export interface Key {
  id: string;
  name: string;
  enabled: boolean;
  ownerId: string;
  apiOwnerId: string;
  apiId: string;
  permissions: string[];
  metadata: Record<string, any>;
  lastUsed: string;
  createdAt: string;
}
