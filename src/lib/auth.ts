'use client';
import axios from 'axios';
import { setCookie, deleteCookie } from 'cookies-next';

interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
  message: string;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL // Use NEXT_PUBLIC_ prefix for client-side env vars
});

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post('/login', { email, password });

    if (response.data.token) {
      setCookie('isLoggedIn', 'true');
      setCookie('token', response.data.token);

    } else {
    }

    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw { needsSignup: true, message: error.response.data.message };
    }
    throw error;
  }
};

export const signup = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post('/signup', { email, password });

    if (response.data.token) {
      setCookie('isLoggedIn', 'true');
      setCookie('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const logout = async () => {
  try {
    deleteCookie('isLoggedIn');
    deleteCookie('token');
  } catch (error) {
    throw error;
  }
};