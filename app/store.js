import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import portfolioReducer from '../features/portfolio/portfolioSlice'

export const store = configureStore({
    reducer : {
        portfolio: portfolioReducer,
    },
});

export const wrapper = createWrapper(store)