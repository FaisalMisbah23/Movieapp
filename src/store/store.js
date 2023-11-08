// import { configureStore } from '@reduxjs/toolkit'
// import { homeSlice } from './homeSlice'

// export const store = configureStore({
//   reducer: {
//     home: homeSlice,
//   },
// })

// export default store;

import { createStore } from '@reduxjs/toolkit';
import { homeSlice } from './homeSlice'
import rootReducer from './rootRducer';

export const store = createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store;