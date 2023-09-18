export interface HttpResponse<DataResponse> {
  status: 200 | 400 | 500;
  data?: DataResponse;
  error?: string[] | string;
}
