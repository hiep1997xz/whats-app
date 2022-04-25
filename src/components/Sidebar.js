import { Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className="sidebar__search"></div>

      <div className="sidebar__chats"></div>
    </div>
  );
};

export default Sidebar;
