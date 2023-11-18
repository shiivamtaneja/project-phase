import { configureStore } from '@reduxjs/toolkit'

import EBikeLeloReducer from './slice'

export const store = configureStore({
  reducer: {
    EbikeLelo: EBikeLeloReducer,
  },
})