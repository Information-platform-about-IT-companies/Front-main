import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { withEmailSentScreen } from "hoc/withEmailSentScreen";
import { UserIsInactiveError } from "components/UserIsInactiveError/UserIsInactiveError";
// functions
import { EMAIL_REGULAR, PASSWORD_REGULAR, SIGN_UP_CONFIRM_REGULAR } from "services/regulars";
import { HTTP } from "api/http";
import { authAPI } from "api/authApi";
import { userAPI } from "api/userApi";
import { useErrorHandler } from "hooks/useErrorHandler";
import { useMainContext } from "context/MainContext";
// UI-KIT
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
// styles
import "./Login.scss";

function Login({ askForEmail, showEmailSentScreen }) {
  const [Error, setError] = useErrorHandler();
  const { setData } = useMainContext();
  const location = useLocation();
  const [signupConfirmed, setSignupConfirmed] = useState(false);
  const requestSent = useRef(false);
  const isNeedConfirmSignUp = SIGN_UP_CONFIRM_REGULAR.test(location.hash);

  const confirmSignup = async () => {
    const [, , uid, token] = location.hash.split("/");
    try {
      /** для того чтобы избежать повторного запроса из-за StrictMode */
      requestSent.current = true;
      await authAPI.confirmSignup({ uid, token });
      setSignupConfirmed(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (isNeedConfirmSignUp && !requestSent.current) {
      confirmSignup();
    }
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .matches(EMAIL_REGULAR, "Введите корректный E-mail")
        .min(6, "Длина поля от 6 до 254 символов")
        .max(254, "Длина поля от 6 до 254 символов")
        .required("Поле обязательно для заполнения"),
      password: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: async (values) => {
      try {
        const tokens = await authAPI.signin(values);
        HTTP.setTokens(tokens);
        const currentUser = await userAPI.getCurrentUser();
        setData((data) => ({ ...data, currentUser }));
      } catch (error) {
        if (error?.data?.detail === "User is inactive.") {
          setError(
            <UserIsInactiveError
              fixError={async (e) => {
                e.preventDefault();
                await askForEmail(formik.values);
                showEmailSentScreen();
              }}
            />,
            "Пользователь не подтвердил регистрацию",
          );
        } else {
          setError(error);
        }
      }
      return false;
    },
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  return (
    <main className="login">
      <h1 className="login__title">Добро пожаловать в Octopus</h1>
      <p className="login__subtitle">
        {signupConfirmed
          ? "Ваш email подтвержден. Войдите в систему"
          : "Войдите в систему, чтобы получить доступ к своей учетной записи"}
      </p>
      <Form extClassName="login__form" onSubmit={formik.handleSubmit}>
        <Input
          label="E-mail"
          extClassNameInput="login__input"
          type="email"
          name="email"
          id="authEmail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
          onBlur={transformBlur}
        />
        <Input
          label="Введите пароль"
          extClassNameInput="login__input"
          type="password"
          name="password"
          id="authPassword"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
          onBlur={transformBlur}
        />
        <LinkItem
          url="/passrecovery"
          title="Забыли пароль?"
          extClassName="login__link-recovery"
          weight="400"
          textColor="var(--text-color)"
          lineColor="var(--link-underline)"
        />
        <Button title="Войти" fill size="standard" />
      </Form>
      {!signupConfirmed && (
        <p className="login__suggestion">
          У вас нет учетной записи?{" "}
          <LinkItem
            url="/signup"
            title="Зарегистрируйтесь"
            extClassName="login__link"
            weight="400"
            textColor="var(--text-color)"
            lineColor="var(--link-underline)"
          />
        </p>
      )}
      <Error />
    </main>
  );
}

export default withEmailSentScreen(Login);
