/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Home, Formations, Login, Admin } from './pages';
import { getUsersApi } from './services.api';

function AdminRoute({ isAuthorize, PageComponent }) {
  if(isAuthorize) {
    return (
      PageComponent
    );
  }

  return (
    <Navigate to="/login" />
  );
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');
  const [currentUserId, setCurrentUserId] = useState();
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onUserNameChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function getUsers() {
    setLoading(true);

    getUsersApi().then(response => {
      setLoading(false);
      setUsers(response.data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  }

  function checkIfIsAuthorize() {
    if(users && email && password) {
      users.forEach(user => {
        if(email === user.email && password === user.password) {
          console.log('connecté ! => email : ' + email + ' password : ' + password );
          setIsAuthorize(true);
          const id = user.id - 1;
          setCurrentUserId(id);
        }
      });
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    checkIfIsAuthorize();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/formations"
          element={
            <AdminRoute
              PageComponent={<Formations />}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute
              PageComponent={<Admin />}
            />
          }
        />
        <Route
          path="/login"
          element={isAuthorize ?
            <Admin /> : (
              <Login
                users={users}
                onSubmit={onSubmit}
                onUserNameChange={onUserNameChange}
                onPasswordChange={onPasswordChange}
                isAuthorize={isAuthorize}
                currentUserId={currentUserId}
                loading={loading}
                error={error}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
