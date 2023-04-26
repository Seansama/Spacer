import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for logging in
export const loginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
    // Make API call to login endpoint
    const response = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        // Return the response data (token) if login is successful
        const data = await response.json();
        return data.token;
    } else {
        // Throw an error if login fails
        throw new Error('Invalid email or password');
    }
});

// Define the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        loggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle the fulfilled action from loginUser and update state with the token
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loggedIn = true;
            state.loading = false;
            state.error = null;
        });

        // Handle the rejected action from loginUser and update state with the error
        builder.addCase(loginUser.rejected, (state, action) => {
            state.token = null;
            state.loggedIn = false;
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

// Export the async thunk and the auth slice reducer
export const { reducer: authReducer } = authSlice;
export default authSlice;

