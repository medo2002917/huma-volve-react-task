type AuthState = { isAuthenticated: boolean };

let state: AuthState = { isAuthenticated: false };

export const authStore = {
  getState: () => state,
  setAuthenticated: (value: boolean) => {
    state = { isAuthenticated: value };
  },
};
