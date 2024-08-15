import { MessageProps } from "../types/interfaceMessage"; 
import React from "react";

// Define un componente funcional de React llamado 'Message' que acepta 'MessageProps' como propiedades.
const Message: React.FC<MessageProps> = ({ msg, bgColor }) => { 
    // Dentro del componente, se crea un objeto 'styles' para definir los estilos en línea.
    const styles: React.CSSProperties = {
      padding: "1rem",
      marginBottom: "1rem", 
      textAlign: "center",
      color: "#fff", 
      backgroundColor: bgColor,
      fontWeight: "bold",
    };

    // Retorna un div con los estilos en línea aplicados y el contenido del mensaje dentro de un párrafo.
    return (
      <div style={styles}> 
        <p>{msg}</p> {}
      </div>
    );
};

// Exporta el componente 'Message' para que pueda ser utilizado en otros archivos.
export default Message;