import { MessageProps } from "../types/interfaceMessage";
import React from "react"


const Message: React.FC<MessageProps> = ({ msg, bgColor }) => {
        const styles: React.CSSProperties = {
          padding: "1rem",
          marginBottom: "1rem",
          textAlign: "center",
          color: "#fff",
          backgroundColor: bgColor,
          fontWeight: "bold",
        };
      
        return (
          <div style={styles}>
            <p>{msg}</p>
          </div>
        );
      };
      
export default Message;