import { Link } from 'react-router-dom';
import logo from '../../img/logo-landing.webp'
import style from './Landing.module.css';

export default function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.content_img}>
        <img src={logo} alt="Logo Countries" />
      </div>
      <div>
        <h1>PI Countries</h1>
        <h3>Develope By: Darwin Roa</h3>
        <Link to='/home'>
          <button class={style.cta}>
            <span>Get started</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}