import Card from "../CardCountry/Card";
import style from './Cards.module.css';
import { useSelector } from 'react-redux';


export default function Cards() {
    const countries = useSelector(state => state.countries);

    return (
        <div className={style.cards}>
            { countries.map( (country) => {  
                return <Card
                    id          = {country.id}
                    flag        = {country.flag}
                    name        = {country.name}
                    continent   = {country.continent}
                    key         = {country.id}
                />
            } ) }
        </div>
    )
}
