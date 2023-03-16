import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TourActivity from "../../component/TourActivity/TourActivity";
import { getCountryByIdAction } from "../../redux/actions";
import style from './Detail.module.css';

export default function Detail() {
  const dispatch = useDispatch();
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getCountryByIdAction(detailId));
  }, [dispatch, detailId])

  const country = useSelector(state => state.country);
  
  const countryTours = country.tours;
  
  return (
    <div className={style.detail}>
      <div className={style.content_flag}>
        <img src={country.flag} alt={country.name} />    
      </div>
      <div className={style.content_description}>
        <h1>{country.name} ({country.id})</h1>  
        <ul>
          <li><span>Capital: </span>{country.capital}</li>
          <li><span>Continent: </span>{country.continent}</li>
          <li><span>Subregion: </span>{country.subregion}</li>
          <li><span>Population: </span>{country.population}</li>
          <li><span>Area: </span>{country.area}</li>
        </ul>
      </div>
      <div className={style.content_activities}>
        {countryTours?.length!==0 && <h2>Tourist Activities</h2> } 
        <table className={style.tourist_table}>    
          {countryTours?.length!==0 &&
            <tr>
              <th>Tourist Activity</th>
              <th>Difficulty</th>
              <th>Duration</th>
              <th>Season</th>
            </tr>
          }     
          {countryTours?.map((tour) => {
            return <TourActivity 
              name        = {tour.name}
              difficulty  = {tour.difficulty}
              duration    = {tour.duration}
              season      = {tour.season}
              key         = {tour.id}
            />
          })}     
        </table>
      </div>
    </div>
  )
}
