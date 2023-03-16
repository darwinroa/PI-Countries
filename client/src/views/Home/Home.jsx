import Cards from "../../component/CardsCountries/Cards";
import Filters from "../../component/Filters/Filters";
import style from "./Home.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesAction, getActivitiesAction } from "../../redux/actions";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getActivitiesAction());
  }, [dispatch])


  //Control del paginado
  const [currentPage, setCurentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  //Esta función se pasa por props al componente Filters para setear el paginado a 1 siempre que se ha realizado alguna acción de filtrado
  const paged = (pageNumber) => { 
      setCurentPage(pageNumber);
  }
  
  return (
    <div className={style.home}>
      <Filters paged={paged} />
      <Cards 
        indexOfFirstCountry={indexOfFirstCountry} 
        indexOfLastCountry={indexOfLastCountry} 
        paged={paged}
        countriesPerPage={countriesPerPage}
      />
    </div>
  )
}
