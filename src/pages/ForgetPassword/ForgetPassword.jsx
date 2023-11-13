import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import { useFormAndValidation } from "hooks/useFormAndValidation";

import { useState } from "react";
import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";

import "./ForgetPassword.scss";

function ForgetPassword() {
  const [noErrorServerResponse, setNoErrorServerResponse] = useState(false);
  const formInputs = useFormAndValidation({
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setNoErrorServerResponse(true);
    console.log("Успешный запрос на сервер, выведено сообщение пользователю об успехе");
  }

  function repeatRequestForConfirm() {
    console.log("Повторный запрос на сервер для получения письма на почту");
  }

  return (
    <main className="password-recovery">
      <div
        className={`password-recovery__container ${
          noErrorServerResponse ? "password-recovery__container_hide" : ""
        }`}
      >
        <h1 className="password-recovery__title">Забыли свой пароль?</h1>
        <p className="password-recovery__subtitle">
          Введите адрес электронной почты, который вы использовали при создании своей учетной записи
        </p>
        <Form
          extClassName="password-recovery__form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Input
            label="E-mail"
            onChange={formInputs.handleChange}
            value={formInputs.values.email}
            error={formInputs.errors.email}
            extClassNameInput="login__input"
            type="email"
            name="email"
            id="recoveryEmail"
            required
          />

          <Button title="Восстановить пароль" fill size="standard" disabled={!formInputs.isValid} />
        </Form>
        <p className="password-recovery__suggestion">
          Вспомнили свой пароль?{" "}
          <LinkItem
            url="/signin"
            title="Войдите здесь"
            extClassName="password-recovery__link"
            weight="400"
            lineColor="#479fba"
          />
        </p>
      </div>
      <div
        className={`password-recovery__message ${
          noErrorServerResponse ? "password-recovery__message_show" : ""
        }`}
      >
        <h1 className="password-recovery__title">Сообщение отправлено</h1>
        <p className="password-recovery__message-block">
          <span>Вы не получили письмо?</span>
          <span>
            Чтобы отправить электронное письмо повторно,{" "}
            <ButtonChanges
              title="нажмите здесь."
              onClick={() => {
                repeatRequestForConfirm();
              }}
              extClassName="password-recovery__button"
            />
          </span>
        </p>
        <p className="password-recovery__suggestion">
          Вспомнили свой пароль?{" "}
          <LinkItem
            url="/signin"
            title="Войдите здесь"
            extClassName="password-recovery__link"
            weight="400"
            lineColor="#479fba"
          />
        </p>
      </div>
    </main>
  );
}

export default ForgetPassword;
