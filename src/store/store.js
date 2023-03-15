import { configureStore } from '@reduxjs/toolkit'
import { todosAPI } from './api'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosAPI.reducerPath]: todosAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosAPI.middleware)
})