import { useSelector } from "react-redux";

import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from "../redux/auth/auth-selectors.js";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
