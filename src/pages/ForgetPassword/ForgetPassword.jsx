import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// functions
import { authAPI } from "api/authApi";
import { useErrorHandler } from "hooks/useErrorHandler";
// UI-KIT
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";
// styles
import "./ForgetPassword.scss";

function ForgetPassword() {
  const [noErrorServerResponse, setNoErrorServerResponse] = useState(false);
  const [Error, setError] = useErrorHandler();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Введите корректный E-mail")
        .min(6, "Длина поля от 6 до 254 символов")
        .max(254, "Длина поля от 6 до 254 символов")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: async (values) => {
      try {
        await authAPI.resetPassword(values);
        setNoErrorServerResponse(true);
      } catch (error) {
        setError(error);
      }
    },
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  function repeatRequestForConfirm() {
    setNoErrorServerResponse(false);
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
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <Input
            label="E-mail"
            extClassNameInput="login__input"
            type="email"
            name="email"
            id="recoveryEmail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
            onBlur={transformBlur}
          />

          <Button
            title="Восстановить пароль"
            type="submit"
            fill
            size="standard"
            disabled={!(formik.isValid && formik.dirty)}
          />
        </Form>
        <p className="password-recovery__suggestion">
          Вспомнили свой пароль?{" "}
          <LinkItem
            url="/signin"
            title="Войдите здесь"
            extClassName="password-recovery__link"
            weight="400"
            textColor="var(--text-color)"
            lineColor="var(--link-underline)"
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
            textColor="var(--text-color)"
            lineColor="var(--link-underline)"
          />
        </p>
      </div>
      <Error />
    </main>
  );
}

export default ForgetPassword;
