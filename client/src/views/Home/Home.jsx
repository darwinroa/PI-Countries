import Cards from "../../component/CardsCountries/Cards";
import Filters from "../../component/Filters/Filters";
import style from "./Home.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesAction, getActivitiesAction } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getActivitiesAction());
  }, [dispatch])
  
  return (
    <div className={style.home}>
      <Filters />
      <Cards />
    </div>
  )
}
