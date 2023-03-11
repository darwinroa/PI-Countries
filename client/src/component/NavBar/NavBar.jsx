import { Link } from "react-router-dom";
import style from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={style.navbar}>
        <Link to='/home'>Home</Link>
        <Link to='/activities'>Activities</Link>
    </div>
  )
}
