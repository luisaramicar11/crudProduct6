import TableRow from "./TableRow";//Importo el componente que va a renderizar las filas de table row
import {TableData} from "../types/InterfaceProduct"//Se importa la interfaz para definir los tipos de props que recibe el componente table

const table: React.FC<TableData> = ({ data}) => {//Define el componente `table` como un componente funcional de React con el tipo `TableData`
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

export default table;