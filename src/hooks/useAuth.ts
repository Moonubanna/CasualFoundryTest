import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { loginRequest as loginRequestAction, clearStore as clearUserStoreAction } from '../store/slices/userSlice';
import { clearStore as clearPostsStoreAction } from '../store/slices/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const error = useSelector((state: RootState) => state.user.error);
  const loading = useSelector((state: RootState) => state.user.loading);

  const login = async (username: string, password: string) => {
    dispatch(loginRequestAction({ username, password }));
  };

  const handleLogout = async () => {
    dispatch(clearUserStoreAction());
    dispatch(clearPostsStoreAction());
  };

  return {
    user,
    error,
    loading,
    login,
    logout: handleLogout,
  };
};