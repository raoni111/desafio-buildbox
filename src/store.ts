import { configureStore } from "@reduxjs/toolkit";
import message from "./features/messages";

const store = configureStore({
    reducer: {
        message
    }
});

export default store;