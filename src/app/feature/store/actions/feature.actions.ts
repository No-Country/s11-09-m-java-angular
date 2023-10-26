import {createActionGroup, emptyProps, props} from "@ngrx/store";


export const FeatureActions = createActionGroup({
  source: 'feature-component',
  events: {
    'Load Data': emptyProps(),
    'Load Data Error': props<{ error: string }>(),
    'Load Data Success': emptyProps(),
  },
});

