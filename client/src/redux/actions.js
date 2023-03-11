import axios from "axios";
import { GET_COUNTRIES } from "./action_type";

const urlAPI = 'http://localhost:3001/countries';

export const getCountriesAction = () => {
    return async function (dispatch) {
        const countriesData = (await axios.get(urlAPI)).data;
        dispatch({
            type: GET_COUNTRIES,
            payload: countriesData,
        });
    }
}