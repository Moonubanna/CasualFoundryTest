import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface USER {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: 'admin' | 'moderator' | 'user';
}

interface PostState {
  posts: Post[];
  postDetails: null | Post;
  singleUser: null;
  searchPosts: [],
  loading: boolean;
  error: null | string;
  total: number;
}

const initialState: PostState = {
  posts: [],
  postDetails: null,
  singleUser: null,
  searchPosts: [],
  loading: false,
  error: null,
  total: 0, // Initialize total
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<{ page: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<{ posts: Post[]; total: number }>) => {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
      state.loading = false;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchPostDetails: (state, action: PayloadAction<{ postId: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostDetailsSuccess: (state, action: PayloadAction<Post>) => {
      state.postDetails = action.payload;
      state.loading = false;
    },
    fetchPostDetailsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchSingleUser: (state, action: PayloadAction<{ userId: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleUserSuccess: (state, action: PayloadAction<USER>) => {
      state.singleUser = action.payload;
      state.loading = false;
    },
    fetchSingleUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchSearchPosts: (state, action: PayloadAction<{ search: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSearchPostsSuccess: (state, action: PayloadAction<{ posts: Post[]; total: number }>) => {
      state.searchPosts = action.payload.posts;
      state.total = action.payload.total;
      state.loading = false;
    },
    fetchSearchPostsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Actions to clear posts and searchPosts
    clearPosts: (state) => {
      state.posts = [];
    },
    clearSearchPosts: (state) => {
      state.searchPosts = [];
    },
    clearStore: () => initialState,
  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostDetails,
  fetchPostDetailsSuccess,
  fetchPostDetailsFailure,
  fetchSingleUser,
  fetchSingleUserSuccess,
  fetchSingleUserFailure,
  fetchSearchPosts,
  fetchSearchPostsSuccess,
  fetchSearchPostsFailure,
  clearPosts,
  clearSearchPosts,
  clearStore
} = postSlice.actions;

export default postSlice.reducer;