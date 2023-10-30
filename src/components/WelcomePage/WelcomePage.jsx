import "./WelcomePage.scss";
import { Search } from "../Search/Search";
import Header from "../Header/Header";

function WelcomePage() {
  return (
    <div>
      <Search />
      <br />
      <br />
      <br />
      <br />
      <Header loggedIn userData="Коля Басков" />
    </div>
  );
}

export default WelcomePage;
