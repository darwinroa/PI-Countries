import style from './TourActivity.module.css';

export default function TourActivity(props) {
  return (
    <div className={style.cardActivity}>
        <h3>{props.name}</h3>
        <p><span>Difficulty: </span>{props.difficulty}</p>
        <p><span>Duration: </span>{props.duration}</p>
        <p><span>Season: </span>{props.season}</p>
    </div>
  )
}
