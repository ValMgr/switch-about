/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Formations from './pages/Admin/Formations';
import Login from './pages/Login';
import AdminHome from './pages/Admin/AdminHome';
import FindFormations from './pages/FindFormations';
import Profiles from './pages/Admin/Profiles';
import Registration from './pages/Admin/Registration';
import { getUsersApi } from './services/users/users.services';

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
  const [authentificationFail, setAuthentificationFail] = useState(false);
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
        if(user.admin === 1) {
          if(email === user.email && password === user.password) {
            console.log('connecté ! => email : ' + email + ' password : ' + password );
            setIsAuthorize(true);
            const id = user.id - 1;
            setCurrentUserId(id);
          }

          setAuthentificationFail(true);
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
        <Route path="/trouver-une-formation" element={<FindFormations />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/creer-compte-membre" element={<Registration />} />
        {/* <Route
          path="/formations"
          element={
            <AdminRoute
              PageComponent={<Formations />}
            />
          }
        />
        <Route
          path="/registration"
          element={
            <AdminRoute
              PageComponent={<Registration />}
            />
          }
        /> */}
        <Route
          path="/admin"
          element={
            <AdminRoute
              PageComponent={<AdminHome />}
            />
          }
        />
        <Route
          path="/login"
          element={isAuthorize ?
            <AdminHome userName={users[currentUserId].firstname} /> : (
              <Login
                users={users}
                onSubmit={onSubmit}
                onUserNameChange={onUserNameChange}
                onPasswordChange={onPasswordChange}
                isAuthorize={isAuthorize}
                currentUserId={currentUserId}
                loading={loading}
                error={error}
                email={email}
                password={password}
                authentificationFail={authentificationFail}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
