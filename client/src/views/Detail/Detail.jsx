import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TourActivity from "../../component/TourActivity/TourActivity";
import { getCountryByIdAction } from "../../redux/actions";

export default function Detail() {
  const dispatch = useDispatch();
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getCountryByIdAction(detailId));
  }, [dispatch, detailId])

  const country = useSelector(state => state.country);
  
  const countryTours = country.tours;
  
  return (
    <div>
      <img src={country.flag} alt={country.name} />    
      <h1>{country.name} ({country.id})</h1>  
      <ul>
        <li><span>Capital: </span>{country.capital}</li>
        <li><span>Continent: </span>{country.continent}</li>
        <li><span>Subregion: </span>{country.subregion}</li>
        <li><span>Population: </span>{country.population}</li>
        <li><span>Area: </span>{country.area}</li>
      </ul>
      {(countryTours && countryTours.length!==0) && <h2>Tourist Activities</h2>}      
      {countryTours?.map((tour) => {
        return <TourActivity 
          name        = {tour.name}
          difficulty  = {tour.difficulty}
          duration    = {tour.duration}
          season      = {tour.season}
          key         = {tour.id}
        />
      })}      
    </div>
  )
}
