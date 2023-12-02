import { favoriteAPI } from "api/favoriteAPI";
import { useLoggedIn } from "./useLoggedIn";

export const useToggleFavorited = () => {
  const loggedIn = useLoggedIn();

  const toggleFavorited = async ({ id, isFavorited }) => {
    if (!loggedIn) {
      throw new Error();
    } else if (isFavorited) {
      await favoriteAPI.removeFavorited(id);
    } else {
      await favoriteAPI.addFavorited(id);
    }
  };

  return toggleFavorited;
};
