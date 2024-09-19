import React, { useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistarionPage'
import AppBar from './AppBar';
import Notes from '../pages/Notes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshihng = useSelector(authSelectors.isRefreshihng)

  useEffect(() => {
    dispatch(fetchCurrentUser()); 
  }, [dispatch]);

  return (
  !isRefreshihng && (
    <>
    <AppBar />
    <Routes>
      <Route 
        path='notes'
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Notes />
          </PrivateRoute>
        }
      />
      <Route 
      path='login'
      element={
        <PublicRoute restricted={true} isLoggedIn={isLoggedIn}>
          <LoginPage />
        </PublicRoute>
      }
      
      >
      </Route>
      <Route 
      path='registration'
      element={
        <PublicRoute restricted={true} isLoggedIn={isLoggedIn}>
          <RegistrationPage/>
        </PublicRoute>
      }
      
      >
      </Route>
    </Routes>
  </>
  )
  );
};

export default App;