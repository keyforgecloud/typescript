export interface Key {
  id: string;
  name: string;
  ownerId: string;
  apiOwnerId: string;
  apiId: string;
  permissions: string[];
  meta: Record<string, any>;
  lastUsed: string;
  timesUsed: number;
  createdAt: string;
}
