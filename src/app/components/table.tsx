import styled from "styled-components"
//Importo el componente que va a renderizar las filas de table row
import { TableData } from "../types/InterfaceProduct";
import TableRow from "./TableRow";
//Se importa la interfaz para definir los tipos de props que recibe el componente table


const TableContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;


const Title = styled.h3`
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;


const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;


const StyledTh = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;


const Table: React.FC<TableData> = ({ data}) => {//Define el componente `table` como un componente funcional de React con el tipo `TableData`
    return (
        <div>
            <h3>Tabla de produtos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ? (//Se realiza un condicional para verificar si hay datos en el array de data.
                        data.map((product) => (//Si hay datos recorre el array y va a renderizar los datos de cada fila.
                            <TableRow
                            key={product.id}//Esta propiedad actúa como un id de los productos de cada fila. 
                            product={product}//Se pasa el objeto 'product' como prop al componente de la TableRow.
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default Table;