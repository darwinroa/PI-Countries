import axios from "axios";
import { useState } from "react";
import validation from './formValidation';

export default function Activities() {
    // Creando el state para el formulario
    const [form, setForm] = useState({
        name: '',
        difficulty: '', 
        duration: '', 
        season: '', 
        countryID: ''
    });
    
    // Creando manejo de errores para el formulario
    const [errors, setErrors] = useState({
        name: '',
        difficulty: '', 
        duration: '', 
        season: '', 
        countryID: ''
    });

    // Actualizando el estado del formulario
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        // validate({
        //     ...form,
        //     [property]: value
        // });

        setForm({
            ...form,
            [property]: value
        });

        setErrors(validation({
            ...form,
            [property]: value
        })) 
    }

    //Validando que los campos del formulario sean correctos
    // const validate = (form) => {
    //     if ( form.name === '' ) setErrors({ ...errors, name:'Missing name' });
    //     else setErrors({ ...errors, email:'Debe ser un email' });
    //     if (form.email === '') setErrors({ ...errors, email:'Email vacío' })
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/activities', form)
            .then(res   => alert(res))
            .catch(err  => alert(err))
    }

    return (
        <div>
            <h1>Create a new Tour Activity</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={form.name} onChange={changeHandler} name='name' />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Difficulty: </label>
                    <input type="text" value={form.difficulty} onChange={changeHandler} name='difficulty' />
                    {errors.difficulty && <span>{errors.difficulty}</span>}
                </div>
                <div>
                    <label>Duration: </label>
                    <input type="text" value={form.duration} onChange={changeHandler} name='duration' />
                    {errors.duration && <span>{errors.duration}</span>}
                </div>
                <div>
                    <label>Season: </label>
                    <input type="text" value={form.season} onChange={changeHandler} name='season' />
                    {errors.season && <span>{errors.season}</span>}
                </div>
                <div>
                    <label>Country: </label>
                    <input type="text" value={form.countryID} onChange={changeHandler} name='countryID' />
                    {errors.countryID && <span>{errors.countryID}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
