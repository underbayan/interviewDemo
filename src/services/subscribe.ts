import { AbortableFetchResponse, abortableFetch, FetchDataType } from "../libs/request";

export type SendEmailResponse = {
  error: boolean;
  message?: string;
  data?: unknown;
  status: number;
};

export const sendEmail = (name: string, email: string): Promise<SendEmailResponse> => {
  const endPoint = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

  return abortableFetch(endPoint, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ name, email })
  }).then((r: AbortableFetchResponse) => {
    const { data } = r || {};
    return {
      error: r.status !== 200,
      message: r.status === 200 ? r.data : (r.data as FetchDataType)?.errorMessage,
      data,
      status: r.status
    };
  });
};
