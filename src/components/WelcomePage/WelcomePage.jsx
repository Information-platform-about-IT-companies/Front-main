import Input from "UI-KIT/Input/Input";
import "./WelcomePage.scss";
import Icon from "UI-KIT/Icons";

function WelcomePage() {
  return (
    <>
      <div>welcome-page</div>
      <Input
        label="Имя"
        value="Валера"
        icon={<Icon icon="IconAccount" color="#111" size="24" />}
        error="Ошибка"
      />
      ;
    </>
  );
}

export default WelcomePage;
