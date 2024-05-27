export interface APIErrorResponse {
  error: {
    statusCode: number;
    name: string;
    message: string;
  };
}
