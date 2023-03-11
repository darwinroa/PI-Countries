import { Link } from 'react-router-dom';
// import style from './Landing.module.css';

export default function Landing() {
  return (
    <>
      <div>Hola Mundo, vine a conquistarte</div>
      <Link to='/home'>
        <button>comenzar</button>
      </Link>
    </>
  )
}