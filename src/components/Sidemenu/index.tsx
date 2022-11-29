import { NavLink } from "react-router-dom";

export const Sidemenu: React.FC = () => {
  return (
    <nav className="bg-violet-600 w-20 h-full">
      <ul>
        <li>
          <NavLink to="/" exact>
            GR
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About GR
          </NavLink>
        </li>
        <li>
          <NavLink to="/holerite" exact>
            Holerite
          </NavLink>
        </li>
        <li>
          <NavLink to="/holerite/about" exact>
            About Holerite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
