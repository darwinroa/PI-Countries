import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.content_img}>
                <Link to={`/detail/${props.id}`}>
                    <img src={props.flag} alt={props.name} />
                </Link>
            </div>
            <div className={style.content_info}>
                <h3>{ props.name }</h3>
                <p>{ props.continent }</p>
                <Link to={`/detail/${props.id}`}>
                    <button className={style.cta}>
                        <span className={style.hover_underline_animation}> View detail </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}
