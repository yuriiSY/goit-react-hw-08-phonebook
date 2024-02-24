import * as contactsApi from '../../api/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await contactsApi.requestContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.signupRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.loginRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await contactsApi.currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
// export const deleteContacts = createAsyncThunk(
//   'contacts/delete',
//   async (id, { rejectWithValue }) => {
//     try {
//       await contactsApi.requestDeleteContacts(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
