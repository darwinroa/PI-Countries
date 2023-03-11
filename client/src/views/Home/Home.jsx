import Cards from "../../component/CardsCountries/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesAction } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch])
  return (
    <div>
      <Cards />
    </div>
  )
}
