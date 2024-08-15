import { TableRowProducts} from "../types/InterfaceProduct"

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