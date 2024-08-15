"use client";
import styled from "styled-components";
import React from "react";
import { MessageProps } from "../types/interfaceMessage";

const Message: React.FC<MessageProps> = ({ msg, bgColor }) => {
  const Box = styled.div<{ bgColor: string }>`
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.bgColor};
  `;

  return <Box bgColor={bgColor}>{msg}</Box>;
};

export default Message;