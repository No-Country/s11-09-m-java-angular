import {RoleModel} from "../../core/model/role.model";
import {UserModel} from "../../core/model/user.model";

export interface AppState {
  isLoading: boolean;
  roles: RoleModel[];
  user: UserModel | null;
  roleSelected: RoleModel | null;
  error: string | null;
  renderGraph: boolean;
}


export const INITIAL_STATE: AppState = {
  isLoading: false,
  roles: [],
  user: null,
  roleSelected: null,
  error: null,
  renderGraph: false
}
