import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const myContext = createContext();
function MainContainer() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="main-container">
        <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
          <Sidebar />
          <Outlet />
        </myContext.Provider>
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
    </div>
  );
}

export default MainContainer;