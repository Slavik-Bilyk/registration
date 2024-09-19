import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './auth/auth-slice'
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
  }
})


const persistor = persistStore(store);

export {store, persistor}