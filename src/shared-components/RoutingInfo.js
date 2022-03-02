import {
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Profile from '../main/Profile';
import NewUser from '../main/NewUser';
import HomePage from '../main/HomePage';

function RoutingInfo() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="/User/Profile/*" element={<Profile/>}></Route>
            <Route path="/User/NewUser/*" element={<NewUser/>}></Route>
            <Route exact path="/" element={<HomePage/>}></Route>
        </Routes>  
    </React.Fragment>
  );
}

export default RoutingInfo;
