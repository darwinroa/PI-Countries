import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card(props) {
    return (
        <div className={style.card}>
            <img src={props.flag} alt={props.name} />
            <h3>{ props.name }</h3>
            <p>{ props.continent }</p>
            <Link to={`/detail/${props.id}`}>View detail</Link>
        </div>
    )
}
