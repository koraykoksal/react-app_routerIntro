import { Link, NavLink, redirect } from "react-router-dom";

const Nav = () => {


  return (
    <ul className="bg-warning">
      <li>
        {/* <Link to="/">Home</Link> */}
        {/* navlink ler avtive clasına sahiptir ve css tarafında ilgili linke tıklandadığında active özelliği çalışır */}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
