import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/appSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  keyPrefix: 'redux-',
  storage,
  whitelist: ['appUser'],
}

export const store = configureStore({
  reducer: {
    app: persistReducer(persistConfig, appSlice),
  },
})

export const persistor = persistStore(store)
