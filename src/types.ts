export type AuthState = {
  user: { name: null | string; email: null | string };
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

// export type itemProps = {};
export type ContactType = {
  id: string;
  name: string;
  number: string;
};

export type ContactsState = {
  items: ContactType[];
  isLoading: boolean;
  isRefresh: boolean;
};
