import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h1>Page Not Found</h1>
        <Link to='/home'>Go to Home</Link>
    </div>
  )
}
