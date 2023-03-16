import Card from "../CardCountry/Card";
import Paged from "../Paged/Paged";
import style from './Cards.module.css';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


export default function Cards() {
    const countries = useSelector(state => state.countries); //Obteniendo el estado de los países listados
    /**
     * Creando los estados del paginado
     */

    const [currentPage, setCurentPage] = useState(1);
    const countriesPerPage = 10;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paged = (pageNumber) => {
        setCurentPage(pageNumber);
    }
    
    return (
        <>
            <div className={style.cards}>
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
            </div>
            <Paged
                countriesPerPage={ countriesPerPage }
                allCountries={ countries.length }
                paged={ paged }
            />
        </>
    )
}
