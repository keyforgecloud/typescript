export interface Key {
  id: string;
  name: string;
  enabled: boolean;
  ownerId: string;
  apiOwnerId: string;
  apiId: string;
  permissions: string[];
  meta: Record<string, any>;
  lastUsed: string;
  createdAt: string;
}
