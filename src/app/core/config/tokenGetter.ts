import {LocalStorageService} from "../services/local-storage.service";

export const tokenGetter = () => {
  const localStorageService = new LocalStorageService();
  return localStorageService.getItem('token');
}
