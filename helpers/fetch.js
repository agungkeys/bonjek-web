import env from "./constants/env";

export const getList = async (list) => {
  if(list) {
    const endpoint = `${env.CURRENT_API}/${list}`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
  }
  return null;
}