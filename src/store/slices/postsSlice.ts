import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination, Post } from 'helpers/types';

type PostsState = {
  data: Post[];
  pagination: Pagination;
  loading: boolean;
  error: string | null;
};
const initialPagination = {
  currentPage: 1,
  pageCount: 1,
  perPage: 10,
  totalCount: 0,
};

const initialState: PostsState = {
  data: [],
  pagination: initialPagination,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsRequest(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
      state.pagination.currentPage = action.payload;
    },
    getPostsSuccess(
      state,
      action: PayloadAction<{ posts: Post[]; pagination: Pagination }>
    ) {
      state.data = action.payload.posts;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    getPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearPosts: (state) => {
      state.data = null;
      state.pagination = initialPagination;
    },
  },
});

export const { getPostsRequest, getPostsSuccess, getPostsFailure, clearPosts } =
  postsSlice.actions;

export const postsReducer = postsSlice.reducer;
