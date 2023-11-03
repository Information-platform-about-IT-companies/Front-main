import { LinkItem } from "UI-KIT/Link/LinkItem";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <LinkItem url="https://practicum.yandex.ru/" title="Сделано студентами Яндекс Практикума" />
      <span className="footer__copyright">&copy; Copyright 2023 Octopus</span>
    </footer>
  );
}

export default Footer;
