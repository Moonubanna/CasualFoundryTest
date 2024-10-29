// Base URL for the API 
export const BASE_URL = 'https://dummyjson.com';
export const IMAGE_BASE_URL = 'https://picsum.photos/seed/';

// Endpoints for various features
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  POSTS: '/posts',
  POST_DETAILS: (id: string) => `/posts/${id}`,
  USER: (id: string) => `/users/${id}`,
  SEARCH_POST: (search: string) => `/posts/search?q=${search}`,
  LOGGER: 'http/200',
};