import { Avatar } from '@material-ui/core';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvide';
import { password } from './constants';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { actionsTypes } from "../reducer";
import "./SidebarChat.css";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ togglerState }, dispatch] = useStateValue();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      console.log(roomName);
      // do some clever database stuff....\
      console.log(1111);
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  const deleteRoom = () => {
    const passwordVerify = prompt("Enter Admin Password to delete Room");
    if (passwordVerify == password) {
      db.collection("rooms")
        .doc(id)
        .delete()
        .then(function () {
          // window.location = "/";
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    } else {
      alert("You are not authorised to delete rooms");
    }
  }

  const handleChat = () => {
    dispatch({
      type: actionsTypes.SET_TOGGLER,
      togglerState: togglerState + 1,
    });
  }

  return !addNewChat ? (
    <div className="sidebarChat">
    <Link to={`/rooms/${id}`} onClick={handleChat}>
      <div className="sidebarChat__wrapper">
        <Avatar src={messages[0]?.photoURL} />
        <div className="sidebarChat__info">
          <h2 className="room__name">{name}</h2>
          <p className="sidebar__lastmessages__color">
            <span className="sidebar__lastMessageName">
              {id != "" && messages.length > 0
                ? messages[0]?.name + ": "
                : "Loading: "}
            </span>
            {id != "" && messages.length > 0
              ? messages[0]?.message
              : "Start a new chat"}
          </p>
        </div>
      </div>
    </Link>
    <div className="sidebarChat__delete" onClick={deleteRoom}>
      <DeleteForeverIcon />
    </div>
  </div>
) : (
  <div onClick={createChat} className="sidebarChat addnew__chat">
    <h2>Add New Room</h2>
    <AddCircleIcon />
  </div>
  )
};

export default SidebarChat;
