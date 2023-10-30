import {Token} from "../../core/ui/types/token.type";

export interface AuthState {
  isLoading: boolean;
  token: Token;
  error: string | null;
}


export const INITIAL_STATE: AuthState = {
  isLoading: false,
  token: null,
  error: null
}
