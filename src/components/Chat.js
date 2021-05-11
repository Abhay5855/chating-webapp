import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import Messages from "../components/Messages";
import db from "../Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, msg: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      msg: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  };

  return (
    <>
      <h2>Welcome {username}</h2>
      <Container>
        <form className="chat__app">
          <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <Button
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              Send Text
            </Button>
          </FormControl>
        </form>

        <FlipMove>
          {messages.map(({ id, msg }) => {
            return <Messages key={id} username={username} msg={msg} />;
          })}
        </FlipMove>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Chat;
