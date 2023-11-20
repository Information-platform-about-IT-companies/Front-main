import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import { useFormAndValidation } from "hooks/useFormAndValidation";

import { useEffect, useState } from "react";

import "./Register.scss";

function Register() {
  const [noErrorServerResponse, setNoErrorServerResponse] = useState(true);
  const formInputs = useFormAndValidation({
    userName: "",
    userSurname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    setNoErrorServerResponse(true);
    return console.log("Отправили форму регистрации на сервер");
  }

  function checkPassword() {
    if (formInputs.values.repeatPassword !== "") {
      if (formInputs.values.password !== formInputs.values.repeatPassword) {
        console.log(`${formInputs.values.password} / ${formInputs.values.repeatPassword}`);
        formInputs.setErrors({ repeatPassword: "Пароли не совпадают" });
      } else {
        formInputs.setErrors({ repeatPassword: "" });
      }
    }
  }

  useEffect(() => {
    checkPassword();
  }, [formInputs.values.password, formInputs.values.repeatPassword]);

  return (
    <main className="register">
      <h1 className="register__title">Добро пожаловать в Octopus</h1>
      <div
        className={`register__container ${noErrorServerResponse ? "register__container_hide" : ""}`}
      >
        <p className="register__subtitle">Заполните все поля, чтобы зарегистрироваться </p>
        <Form
          extClassName="register__form"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="register__userName">
            <Input
              label="Имя"
              onChange={formInputs.handleChange}
              value={formInputs.values.userName}
              error={formInputs.errors.userName}
              extClassNameInput="login__input"
              type="text"
              name="userName"
              id="registerUserName"
              required
            />
            <Input
              label="Фамилия"
              onChange={formInputs.handleChange}
              value={formInputs.values.userSurname}
              error={formInputs.errors.userSurname}
              extClassNameInput="login__input"
              type="text"
              name="userSurname"
              id="registerUserSurname"
              required
            />
          </div>
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
          <div className="register__tooltip-input">
            <Input
              label="Пароль"
              onChange={formInputs.handleChange}
              value={formInputs.values.password}
              error={formInputs.errors.password}
              extClassNameInput="register__input"
              type="password"
              name="password"
              id="registerPassword"
              minLength="3"
              maxLength="20"
              required
            >
              <ul className="register__tooltip-container">
                <li className="register__tooltip-item">от 8 до 30 символов</li>
                <li className="register__tooltip-item">
                  должен содержать цифры и буквы / спецсимволы без пробелов
                </li>
              </ul>
            </Input>
          </div>

          <Input
            label="Повторите пароль"
            onChange={formInputs.handleChange}
            value={formInputs.values.repeatPassword}
            error={formInputs.errors.repeatPassword}
            extClassNameInput="login__input"
            type="password"
            name="repeatPassword"
            id="registerRepeatPassword"
            required
          />
          <Button
            title="Зарегистрироваться"
            fill
            size="standard"
            disabled={!formInputs.isValid || formInputs.errors.repeatPassword ? "true" : false}
          />
        </Form>
        <p className="register__suggestion">
          У вас уже есть учетная запись?{" "}
          <LinkItem
            url="/signin"
            title="Войти"
            extClassName="login__link"
            weight="400"
            textColor="var(--text-color)"
            lineColor="var(--link-underline)"
          />
        </p>
      </div>
      <div className={`register__message ${noErrorServerResponse ? "register__message_show" : ""}`}>
        <Form extClassName="register__confirm-form">
          <h3 className="register__confirm-title">Учетная запись создана</h3>
          <p className="register__confirm-textbox">
            <p className="register__confirm-text">
              Мы отправили электронное письмо с подтверждением на почту.
            </p>{" "}
            <p className="register__confirm-text">Нажмите на ссылку внутри, чтобы начать.</p>
          </p>
          <p className="register__confirm-textbox">
            <p className="register__confirm-text">Не получили письмо?</p>{" "}
            <p className="register__confirm-text">
              Чтобы отправить электронное письмо повторно,
              {/*               <LinkItem
                url="/signup"
                title="нажмите здесь"
                extClassName="login__link"
                weight="400"
                textColor="var(--text-color)"
                lineColor="var(--link-underline)"
              /> */}
              <Button
                title="нажмите здесь"
                fill={false}
                url="#"
                linkType="link"
                extClassName="register__confirm-link"
              />
            </p>
          </p>
        </Form>
        <p className="register__suggestion">
          У вас уже есть учетная запись?{" "}
          <LinkItem
            url="/signin"
            title="Войти"
            extClassName="login__link"
            weight="400"
            textColor="var(--text-color)"
            lineColor="var(--link-underline)"
          />
        </p>
      </div>
    </main>
  );
}

export default Register;
