import { Link, useLocation } from "react-router-dom";

import "./Breadcrumbs.scss";

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <li className="breadcrumbs__element" key={crumb}>
          <Link to={currentLink} className="breadcrumbs__link">
            {crumb}
          </Link>
        </li>
      );
    });

  if (location.pathname !== "/") {
    return (
      <ul className="breadcrumbs">
        <li className="breadcrumbs__element" key="main">
          <Link to="/" className="breadcrumbs__link">
            Главная
          </Link>
        </li>
        {crumbs}
      </ul>
    );
  }
}
