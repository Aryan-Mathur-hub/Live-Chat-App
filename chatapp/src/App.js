import React, { createContext } from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import WorkArea from "./Components/WorkArea";
import Users from "./Components/Users";
import CreateGroups from "./Components/CreateGroup";
import Groups from "./Components/Groups";

export const urlContext = createContext()
function App() {
  
  return (
    <div className="App">
      <urlContext.Provider value={"https://live-chat-app-backend-u79g.onrender.com"}>
        {/* <MainContainer /> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />}></Route>
            <Route path="chat/:_id" element={<WorkArea />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="groups" element={<Groups />}></Route>
            <Route path="create-groups" element={<CreateGroups />}></Route>
          </Route>
        </Routes>
      </urlContext.Provider>
    </div>
  );
}

export default App;
