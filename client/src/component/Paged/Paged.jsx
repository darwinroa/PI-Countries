import style from "./Paged.module.css"

export default function Paged({ countriesPerPage, allCountries, paged }) {
    const pageNumbers = [];

    /**
     * Match.ceil devuelve el entero mayo o igual más próximo al número dado
     * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
    */    
    for (let i = 1; i <= Math.ceil(allCountries/ countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav className={style.paged}>
            <ul>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        
                        <button className={style.botpag} key={number} onClick={() => paged(number)}>{number}</button>
                        
                    ))
                }
            </ul>

        </nav>
    );
    }

