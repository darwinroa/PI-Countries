import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useState, useEffect } from "react";
import validation from './formValidation';
import style from './Activities.module.css';
import { getCountriesAction } from '../../redux/actions';

export default function Activities() {
    const countries = useSelector(state => state.countriesOrigin);

    const dispatch =  useDispatch();

    useEffect(() => {   
        dispatch(getCountriesAction())
    }, [dispatch])

    // Creando el state para el formulario
    const [form, setForm] = useState({
        name: '',
        difficulty: '', 
        duration: '', 
        season: '', 
        countryID: []
    });

    const [countriesName, setCountriesName] = useState({ countries: [] });
    
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

        setForm({
            ...form,
            [property]: value
        });

        setErrors(validation({
            ...form,
            [property]: value
        })) 
    }

    function handleClick(e) {
        e.preventDefault();
        const { value } = e.target;
        const countryName = e.target.options[e.target.selectedIndex].text;
        const countryData = {
            id: value, 
            countryName
        }
        setForm({
            ...form,
            countryID: [...form.countryID, value]
        })
        setCountriesName({
            ...countriesName,
            countries: [...countriesName.countries, countryData]
        });
    }

    function handleDelete(idCountry) {
        setForm({
            ...form,
            countryID: form.countryID.filter((country) => country !== idCountry)

        })
        setCountriesName({
            ...countriesName,
            countries: countriesName.countries.filter((country) => country.id !== idCountry)
        });
        
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/activities', form)
            .then(res   => alert(res))
            .catch(err  => alert(err))
    }

    return (
        <div className={style.activity}>
            <h1>Create a new Tour Activity</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={form.name} onChange={changeHandler} name='name' />
                    {errors.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label>Difficulty: </label>
                    <select name="difficulty" defaultValue={'DEFAULT'} onChange={changeHandler}>
                        <option value="DEFAULT" disabled>Sort by name</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐ </option>
                        <option value="3">⭐⭐⭐ </option>
                        <option value="2">⭐⭐ </option>
                        <option value="1">⭐ </option>
                    </select>
                </div>

                <div>
                    <label>Duration: </label>
                    <input type="time" name="duration" step="2" value={form.duration} onChange={changeHandler}  />
                    {errors.duration && <span>{errors.duration}</span>}
                </div>

                <div>
                    <label>Season: </label>
                    <select name="season" onChange={changeHandler} >
                            <option value=''>Select Season</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                        </select>
                    {errors.season && <span>{errors.season}</span>}
                </div>

                <div>                    
                    <label>Country: </label>
                    <select id='country' name='countryID' defaultValue={'DEFAULT'} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Select countries...</option> 
                        {countries?.map(country => (
                        <option value={country.id} key={country.id}>{country.name}</option>
                        ))}
                    </select>
                    {errors.countryID && <span>{errors.countryID}</span>}
                </div>

                <div>
                {countriesName.countries?.map((country) => {
                return (
                    <div key={country.id} className={style.containerID}>
                        <h5 className={style.pais}>{country.countryName}</h5>
                        <button type='button' className={style.cruz} onClick={() => handleDelete(country.id)}>X</button>
                    </div>
                    );
                })}
                </div> 

                <button className="global_button" type="submit">Submit</button>
            </form>
        </div>
    )
}
