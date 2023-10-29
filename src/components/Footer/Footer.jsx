import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const location = useLocation();
  const conditions =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/passrecovery";

  return (
    <footer className="footer">
      <Link to="/" className={`footer__logo ${conditions ? "footer__logo_hide" : ""} `} />
      <ul className={`footer__link ${conditions ? "footer__link_full" : ""}`}>
        <li className="footer__link-item">
          <LinkItem url="https://yandex.ru" title="Сделано студентами Яндекс Практикума" />
        </li>
        <li className="footer__link-item footer__link-item_copy">&copy; Copyright 2023 Octopus</li>
      </ul>
    </footer>
  );
}

export default Footer;
