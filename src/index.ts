class KeyforgeAPI {
  private static apiKey: string | null = null;
  private static accountToken: string | null = null;

  public static setCredentials(apiKey: string, accountToken?: string): void {
    KeyforgeAPI.apiKey = apiKey;
    KeyforgeAPI.accountToken = accountToken || null;
  }

  public static getCredentials(): {
    apiKey: string | null;
    accountToken: string | null;
  } {
    return {
      apiKey: KeyforgeAPI.apiKey,
      accountToken: KeyforgeAPI.accountToken,
    };
  }
}

export default KeyforgeAPI;
