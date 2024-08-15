"use client"
import styled from "styled-components";
import { TableRowProducts } from "../types/interfaceProduct";

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

// Estilos para las imágenes en la tabla
const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

// Estilos para los botones de acción (Editar y Eliminar)
const ActionButton = styled.button`
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

const TableRow: React.FC<TableRowProducts> = ({ product}) => {
    let { title, description, price, image} = product;

    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td><img src={image} alt={title}/></td>

            <td>
                <button >Editar</button>
                <button >Eliminar</button>
            </td>
        </tr>
    );
};

export default TableRow;