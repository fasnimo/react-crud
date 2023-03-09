import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import React from "react";
import { UserList } from "./features/users/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add-user" element={<AddUser/>} />
           
          <Route path="/edit-user" element={<EditUser/>}/>

          <Route path="/" element={<UserList/>}/>
            
        </Routes>
      </div>
    </Router>
  );
}
