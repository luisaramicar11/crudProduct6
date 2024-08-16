"use client"
import styled from "styled-components";
import { TableRowProducts} from "../types/interfaceProduct";

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

// Estilos para las imágenes en la tabla
const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

// Estilos para los botones de acción (Editar y Eliminar)
const Button = styled.button`
  background-color: #4caf50; 
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:nth-child(2) {
    background-color: #f44336; 
  }

  &:nth-child(2):hover {
    background-color: #e53935;
  }
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const TableRow: React.FC<TableRowProducts> = ({ product}) => {
    let { title, description, price, image} = product;

    return (
        <Tr>
            <Td>{title}</Td>
            <Td>{description}</Td>
            <Td>{price}</Td>
            <Td><Img src={image} alt={title}/></Td>

            <Td>
                <Button>Editar</Button>
                <Button>Eliminar</Button>
            </Td>
        </Tr>
    );
};

export default TableRow;