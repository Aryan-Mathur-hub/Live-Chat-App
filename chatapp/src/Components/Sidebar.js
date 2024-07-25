import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { urlContext } from "../App";

function Sidebar() {
  var toGourl;
  const url = useContext(urlContext)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const refresh = useSelector((state) => state.refreshKey);
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();


  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    toGourl = url + "/chat/"
    axios.get(toGourl, config).then((response) => {
      setConversations(response.data);
    });
  }, [refresh]);

  
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              nav("/app/welcome");
            }}
          >
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          if (conversation.users.length === 1 || conversation.isGroupChat == true) {
            return (
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  ease: "anticipate",
                  duration: "0.5",
                }}>
                <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        conversation.chatName
                    );
                  }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.chatName[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {conversation.chatName + " (Group)"}
                  </p>

                  <p className="con-lastMessage">
                  {(conversation.latestMessage)? conversation.latestMessage.content: "No previous Messages, click here to start a new chat"}
                  </p>
                </div>
              </div>
                </motion.div>
              </AnimatePresence>
            )
          }
          if (conversation.latestMessage === undefined) {
            return (
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  ease: "anticipate",
                  duration: "0.5",
                }}>
                <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        ((user.name == conversation.users[0].name)? conversation.users[1].name : conversation.users[0].name)
                    );
                  }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {(user.name == conversation.users[0].name)? conversation.users[1].name[0] : conversation.users[0].name[0] }
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {(user.name == conversation.users[0].name)? conversation.users[1].name : conversation.users[0].name}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>
                </div>
              </div>
                </motion.div>
              </AnimatePresence>
            );
          } else {
            return (
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  ease: "anticipate",
                  duration: "0.5",
                }}>
                <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        ((user.name == conversation.users[0].name)? conversation.users[1].name : conversation.users[0].name)
                    );
                  }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {(user.name == conversation.users[0].name)? conversation.users[1].name[0] : conversation.users[0].name[0] }
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {(user.name == conversation.users[0].name)? conversation.users[1].name : conversation.users[0].name}
                  </p>

                  <p className="con-lastMessage">
                    {conversation.latestMessage.content}
                  </p>
                </div>
              </div>
                </motion.div>
              </AnimatePresence>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;
