import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Messages.css";
const Messages = forwardRef(({ msg, username }, ref) => {
  const isUser = username === msg.username;
  return (
    <div className="message__container">
      <div ref={ref} className={`msg ${isUser && "message_card"}`}>
        <Card className={isUser ? "message_userCard" : "message_guessCard"}>
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${msg.username || "unkonown user"}: `} {msg.msg}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default Messages;
