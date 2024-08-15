import styled from "styled-components";
import {MessageProps} from "../types/InterfaceMessage";
import React from "react";

const Message: React.FC<MessageProps> = ({ msg, bgColor }) => {
  const Box = styled.div<{ bgColor: string }>`//Función que me permite accerder a los props y asignar el bgcolor, 
    padding: 1rem; //a su vez defino el tipo de bgcolor, que recibe el componente 
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.bgColor};//Función que accede a los props del componente
    font-weight: bold;
  `;

  return <Box bgColor={bgColor}>{msg}</Box>;
};