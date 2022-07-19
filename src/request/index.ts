export default function request<T, TRes>(
  params: T,
  url: string,
  method: "GET" | "POST" | "DELETE" | "PUT"
): Promise<TRes> {
  const res = fetch(method == "GET" ? url : getNewUrl(url, params), {
    method: method,
    body: method == "GET" ? null : JSON.stringify(params),
  }).then((res) => {
    return res.json() as Promise<TRes>;
  });

  return res;
}

export function createFetch<REQ, RES>(url: any, method: any) {
  return (params: REQ): Promise<RES> => {
    return request(params, url, method);
  };
}

function getNewUrl(url: string, params: Record<string, any>) {
  let res = url;
  const keys = Object.keys(params);
  keys.map((k, i) => {
    const data = params[k];
    if (i === 0) {
      res += "?";
      res += `${k}=${data}`;
    } else if (i < keys.length) {
      res += `&${k}=${data}`;
    } else {
      res += `${k}=${data}`;
    }
  });

  return res;
}
