export interface FeatureState {
  isLoading: boolean;
  error: string | null;
}


export const INITIAL_STATE: FeatureState = {
  isLoading: false,
  error: null
}
