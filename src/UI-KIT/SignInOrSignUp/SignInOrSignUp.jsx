import { Button } from "UI-KIT/Button/Button";
import "./SignInOrSignUp.scss";

export function SignInOrSignUp() {
  return (
    <div className="popup__buttons">
      <Button size="standard" title="Войти" linkType="link" url="/signin" />
      <Button size="standard" title="Зарегистрироваться" linkType="link" url="/signup" />
    </div>
  );
}
