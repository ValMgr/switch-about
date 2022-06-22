/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Formations from './pages/Admin/Formations';
import Login from './pages/Login';
import AdminHome from './pages/Admin/AdminHome';
import FindFormations from './pages/FindFormations';
import Profils from './pages/Admin/Profils';
import Registration from './pages/Admin/Registration';
import ResultFormations from './pages/ResultFormations';
import { getUsersApi } from './services/users/users.services';
import {globalStateContext, globalState} from './store';


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
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('userId', id);

            globalState.isLoggedIn = localStorage.getItem('isLoggedIn');
            globalState.userId = localStorage.getItem('userId');

            // globalState.isLoggedIn = true;
            // globalState.userId = id;
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
    <globalStateContext.Provider value={globalState}>
      <Router>
        <Routes>
        

          <Route path="/" element={<Home />} />
          <Route path="/trouver-une-formation" element={<FindFormations />} />
          <Route
            path="/trouver-une-formation/resultats/:submissionId"
            element={<ResultFormations />}
          />
          <Route path="/profils" element={<Profils />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/creer-compte-membre" element={<Registration />} />
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
    </globalStateContext.Provider>

  );
}

export default App;
