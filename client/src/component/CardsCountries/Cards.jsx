import Card from "../CardCountry/Card";
import Paged from "../Paged/Paged";
import style from './Cards.module.css';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { orderByName, orderByPopulation, filterByContinent, filterByActivities, searchByName, reset } from "../../redux/actions";


export default function Cards() {
    const countries = useSelector(state => state.countries); //Obteniendo el estado de los países listados
    const activities = useSelector(state => state.activities); //Obteniendo el estado de las actividades listadas

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Creando los estados del paginado
     */

    const [currentPage, setCurentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paged = (pageNumber) => {
        setCurentPage(pageNumber);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Creando la barra de filtros y ordenamientos
     */
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'orderByName') dispatch(orderByName(value));
        if (name === 'orderByPopulation') dispatch(orderByPopulation(value));
        if (name === 'filterByContinent') dispatch(filterByContinent(value));
        if (name === 'filterByActivities') dispatch(filterByActivities(value));
        if (name === 'search') dispatch(searchByName(value));
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className={style.cards}>

            {/* //Creando la barra de filtros y ordenamientos */}
            <div>
                <div>
                    <select name='orderByName' defaultValue={'DEFAULT'} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Sort by name</option>
                        <option value="Ascendente">aA - zZ</option>
                        <option value="Descendente">zZ - aA</option>
                    </select>
                </div> 

                <div>
                    <select name='orderByPopulation' defaultValue={'DEFAULT'} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Population</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div> 

                <div>
                    <select name='filterByContinent' defaultValue={'DEFAULT'} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Continent</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>

                <div>
                    {(activities?.length === 0)? 
                        <select defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>No activities yet</option>
                        </select> 
                        :
                        <select name='filterByActivities' defaultValue={'DEFAULT'} onChange={handleClick}>
                            <option value="DEFAULT" disabled>Activities</option> 
                            {activities?.map(activity => (
                            <option value={activity.name} key={activity.id}>{activity.name}</option>
                            ))}
                        </select> 
                    }
                </div>

                <div>
                    <input type="text" name="search" placeholder="Search..." onChange={handleClick} />
                </div>

                <div>
                    <button onClick={() => dispatch(reset())}>
                        Reset filters
                    </button>
                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////// */}





            { countries?.length === 0 ? 
            <p>Country Not Found</p> :
            currentCountries?.map( (country) => {  
                return <Card
                    id          = {country.id}
                    flag        = {country.flag}
                    name        = {country.name}
                    continent   = {country.continent}
                    key         = {country.id}
                />
            } ) }

            <Paged
                countriesPerPage={ countriesPerPage }
                allCountries={ countries.length }
                paged={ paged }
            />
        </div>
    )
}
