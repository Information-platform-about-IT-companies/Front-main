import { useMainContext } from "context/MainContext";
import { HTTP } from "api/http";

export const useLoggedIn = () => {
  const { data } = useMainContext();
  return HTTP.accessToken && Boolean(data?.currentUser);
};
