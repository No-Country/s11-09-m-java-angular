import {AuthState} from "../../auth.state";

export const handleRequest = (state: AuthState): AuthState => {
  return {
    ...state,
    isLoading: true,
    error: null
  };

};

export const handleRequestSuccess = (state: AuthState, {token}: { token: string }): AuthState => {
  return {
    ...state,
    token: token,
    isLoading: false
  };

};

export const handleRequestFailure = (state: AuthState, {error}: { error: string }): AuthState => {
  return {
    ...state,
    token: null,
    isLoading: false,
    error
  };

};

export const handleLogout = (state: AuthState): AuthState => {
  return {
    isLoading: false,
    token: null,
    error: null
  };

};


