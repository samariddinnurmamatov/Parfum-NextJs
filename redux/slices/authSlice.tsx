import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { TOKEN, USER } from "@/constants";
import { request } from "@/server/request";
import { RootState } from "../store"; // RootState import qilindi
import { User } from "@/types";

interface AuthState {
  isAuth: boolean;
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuth: !!getCookie(TOKEN),
  user: JSON.parse(localStorage.getItem(USER) || "null"),
  loading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ user: userData, router }: { user: User; router: any }) => {
    try {
      const {
        data: { accesstoken, user },
      } = await request.post("auth/login", userData);

      setCookie(TOKEN, accesstoken);
      localStorage.setItem(USER, JSON.stringify(user));

      if (user?.role) {
        router.push("/admin");
      } else {
        router.push("/");
      }

      request.defaults.headers.Authorization = `Bearer ${accesstoken}`;

      return user;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      const res = window.confirm("Do you want to log out of this account?");
      if (res) {
        deleteCookie(TOKEN);
        localStorage.removeItem(USER);
        state.isAuth = false;
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setAuth, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
