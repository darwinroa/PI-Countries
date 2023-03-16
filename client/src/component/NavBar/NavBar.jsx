import { Link } from "react-router-dom";
import logo from '../../img/logo-countries.png'
import style from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div>
          <Link to='/home'>
            <img src={logo} alt="Logo Countries" /> 
          </Link>
        </div>
        <div className={style.menu}>
          <Link to='/home'>Home</Link>
          <Link to='/activities'>Activities</Link>
        </div>
      </div>
    </div>
  )
}
