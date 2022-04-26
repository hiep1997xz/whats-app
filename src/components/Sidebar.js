import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import { useStateValue } from "../StateProvide";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  useEffect(() => {
    const unsbuscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsbuscribe();
    };
  }, []);

  const onLogout = () => {
    window.location = "/";
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src={user?.photoURL} onClick={onLogout} />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new charater" type="text" />
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat addNewChat />
          {rooms.map((room) => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
