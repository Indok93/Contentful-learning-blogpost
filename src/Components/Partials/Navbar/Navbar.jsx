import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
    </nav>
  )
}
