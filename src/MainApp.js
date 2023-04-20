import React from 'react'
import {  Routes , Route} from 'react-router-dom';
import Dashboard from './containers/dashboard/Dashboard';
import ClientContainer from './containers/client/ClientContainer'
import { Header } from "./component/header/Header";
import { Navbar } from "./component/navbar/Navbar";

function MainApp() {
  return (
    <div>
    <Header />
    <Navbar />
    <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} ></Route>
        <Route exact path='/addnewclient' element={<ClientContainer />} ></Route>
      </Routes>
    </div>
  )
}

export default MainApp
