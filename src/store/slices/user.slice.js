import { createSlice } from '@reduxjs/toolkit';

export const loginState = createSlice({
    name: 'user',
    initialState: false,
    reducers: {        
        setUser: (state, action) => action.payload
    }
})

export const { setUser } = loginState.actions;
export default loginState.reducer;


export const setUserThunk = ( state ) => ( dispatch ) => {
    dispatch(setUser(state))
}


