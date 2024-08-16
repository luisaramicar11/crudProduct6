'use client';
import styled from "styled-components"
import {useState} from "react"
import { setProduct } from "./SetProducts";
import Loader from "./Loader";
import { IProduct } from "../types/interfaceProduct";
import { CreateFormProps, IProductError } from "../types/interfaceProduct";
import Message from "./Message";

const Div = styled.div`
  margin: 15px;
    display: flex;
    justify-content: center;
  `
const Form = styled.form`
    padding: 15px;
    border-radius: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  `


const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  font-size: 15pt;
  `

const Inputs = styled.input`
    border-radius: 10px;
    border: 0.9px black solid;
    padding: 5px;
    font-size: small;
    color: black;
    `

const DivButton = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    width: 10%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: 1px black solid;
    cursor: pointer;
    background: none;
    padding: 3px;
    color: black;
`

const P = styled.p`
    color: red;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: "bold";
    `

const initialForm: IProduct = {
    id: Date.now(),    
    title: "",
    description: "",
    price: 0,
    image: "",
  };

  const CreateForm: React.FC<CreateFormProps> = ({ onAddProduct }) => {
    const [form, setForm] = useState<IProduct>(initialForm);
    const [errors, setErrors] = useState<IProductError>({} as IProductError);
    const [loading, setLoading] = useState(false);  
    const [success, setSuccess] = useState(false);


  const validationsForm = (form: IProduct): IProductError=> {
    let errors: IProductError  = {} as IProductError;
    let regexDescription = /^.{1,255}$/;

    if (!form.title.trim()) {
      errors.title = "El campo 'Nombre' es requerido";
    } 
    if (!form.description.trim()) {
      errors.description = "El campo 'Descripción' es requerido";
    } else if (!regexDescription.test(form.description.trim())) {
      errors.description = "El campo 'Descripción' no debe exceder los 255 comentarios";
    }

    if (!form.price) {
      errors.price = "El campo 'Precio' es requerido";
    } 

    if (!form.image.trim()) {
        errors.image = "El campo 'Imagen' es requerido";
      } 

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validationsForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setProduct(form);
      onAddProduct(form);
      setLoading(false);
      setSuccess(true);  // Mostrar mensaje de éxito
      setForm(initialForm);  // Reiniciar formulario
  

            // Ocultar el mensaje de éxito después de unos segundos
      setTimeout(() => setSuccess(false), 3000);
    } else {
      return;
    }
  };


  return (
    <main>

        <Title>Crear producto</Title>
    <Div>
      <Form onSubmit={handleSubmit}>
        <Inputs
          type="text"
          name="title"
          placeholder="Escribe el nombre del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.title}
          required
        />
        {errors.title && <P>{errors.title}</P>}
        <Inputs
          type="text"
          name="description"
          placeholder="Escribe la descripción del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.description}
          required
        />
        {errors.description && <P>{errors.description}</P>}
        <Inputs
          type="number"
          name="price"
          placeholder="Escribe el precio del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.price}
          required
        />
        {errors.price && <P>{errors.price}</P>}
        <Inputs
          type="text"
          name="image"
          placeholder="Carga la URL del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.image}
          required
        />
        {errors.image && <P>{errors.image}</P>}
        <DivButton>
            <Button type="submit">Enviar</Button>
        </DivButton>
      </Form>
      {loading && <Loader/>}
      {success && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
    </Div>
    </main>
  );
};

export default CreateForm;



