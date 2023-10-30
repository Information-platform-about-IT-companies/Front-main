import { LinkItem } from "UI-KIT/Link/LinkItem";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <LinkItem url="https://yandex.ru" title="Сделано студентами Яндекс Практикума" />
      <div className="footer__copyright">&copy; Copyright 2023 Octopus</div>
    </footer>
  );
}

export default Footer;
