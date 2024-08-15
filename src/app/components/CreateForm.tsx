'use client';
import {useState} from "react"
import Message from "./Message";
import { CreateFormProps, IProduct, IProductError } from "../types/interfaceProduct";
import { setProduct } from "./SetProducts";
import Loader from "./Loader";



const initialForm: IProduct = {
    id: 0,    
    title: "",
    description: "",
    price: 0,
    image: "",
  };

  const ContactForm: React.FC<CreateFormProps> = ({ onAddProduct }) => {
    const [form, setForm] = useState<IProduct>(initialForm);
    const [errors, setErrors] = useState<IProductError>({} as IProductError);
    const [loading, setLoading] = useState(false);  
    const [success, setSuccess] = useState(false);
    const [productCounter, setProductCounter] = useState(1);

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

  let styles = {
    fontWeight: "bold",
    color: "#de3545",
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
      setProductCounter(productCounter + 1);

            // Ocultar el mensaje de éxito después de unos segundos
      setTimeout(() => setSuccess(false), 3000);
    } else {
      return;
    }
  };


  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Escribe el nombre del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.title}
          required
        />
        {errors.title && <p style={styles}>{errors.title}</p>}
        <input
          type="text"
          name="description"
          placeholder="Escribe la descripción del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.description}
          required
        />
        {errors.description && <p style={styles}>{errors.description}</p>}
        <input
          type="number"
          name="price"
          placeholder="Escribe el precio del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.price}
          required
        />
        {errors.price && <p style={styles}>{errors.price}</p>}
        <input
          type="text"
          name="image"
          placeholder="Carga la URL del producto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.image}
          required
        />
        {errors.image && <p style={styles}>{errors.image}</p>}
        <button type="submit">Enviar</button>
      </form>
      {loading && <Loader/>}
      {success && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
    </div>
  );
};

export default ContactForm;