import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "../feature/auth/auth.slice"

// devtools redux
const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

// Display the new state in the console //
store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
});

export { store }



