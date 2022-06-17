import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Home, Formations, Login, Loader, Error } from './pages';
import { getUsersApi } from './services.api';
import { PageContainer } from './pages/styledComponents';

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

  const onSubmit = async (e) => {
    e.preventDefault();
    checkIfIsAuthorize();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/admin"
          element={isAuthorize ? (
            <Formations />
          ) : (
            <Login
              users={users}
              onSubmit={onSubmit}
              onUserNameChange={onUserNameChange}
              onPasswordChange={onPasswordChange}
              isAuthorize={isAuthorize}
              currentUserId={currentUserId}
              loading={loading}
              error={error}
            />)}></Route>
      </Routes>
    </Router>
  );
}

export default App;
