import "./WelcomePage.scss";
import { Button } from "../../UI-KIT/Button/Button";

function WelcomePage() {
  return (
    <div>
      <Button size="standard" fill title="Это кнопка" />
      <Button url="/" size="standard" fill title="Это ссылка" />
    </div>
  );
}

export default WelcomePage;
