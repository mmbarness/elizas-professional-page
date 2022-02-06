import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeSlice from '../features/01-home/homeSlice';
import { sanityApi } from '../features/shared/sanityAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const configuredStore = () => configureStore({
  reducer: {
    home: homeSlice,
    [sanityApi.reducerPath]: sanityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.baseQueryMeta.request', 'meta.baseQueryMeta.response'],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }).concat(
      sanityApi.middleware
    )
});

export const store = configuredStore()

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
