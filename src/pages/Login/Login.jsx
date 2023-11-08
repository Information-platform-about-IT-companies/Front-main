import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import { useFormAndValidation } from "hooks/useFormAndValidation";

import "./Login.scss";

function Login() {
  const formInputs = useFormAndValidation({
    email: "",
    password: "",
  });

  function onSubmit() {
    return "test";
  }

  return (
    <main className="login">
      <h1 className="login__title">Добро пожаловать в Octopus</h1>
      <p className="login__subtitle">
        Войдите в систему, чтобы получить доступ к своей учетной записи
      </p>
      <Form extClassName="login__form" onSubmit={onSubmit()}>
        <Input
          label="E-mail"
          onChange={formInputs.handleChange}
          value={formInputs.values.email}
          error={formInputs.errors.email}
          extClassNameInput="login__input"
          type="email"
          name="email"
          id="authEmail"
          required
        />
        <Input
          label="Введите пароль"
          onChange={formInputs.handleChange}
          value={formInputs.values.password}
          error={formInputs.errors.password}
          extClassNameInput="login__input"
          type="password"
          name="password"
          id="authPassword"
          minLength="3"
          maxLength="20"
          required
        />
        <LinkItem
          url="/passrecovery"
          title="Забыли пароль?"
          extClassName="login__link-recovery"
          weight="400"
          lineColor="#479fba"
        />
        <Button title="Войти" fill size="standard" />
      </Form>
      <p className="login__suggestion">
        У вас нет учетной записи?{" "}
        <LinkItem
          url="/signup"
          title="Зарегистрируйтесь"
          extClassName="login__link"
          weight="400"
          lineColor="#479fba"
        />
      </p>
    </main>
  );
}

export default Login;
