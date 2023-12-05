import { useFormik } from "formik";
import * as yup from "yup";
// functions
import { authAPI } from "api/authApi";
import { useErrorHandler } from "hooks/useErrorHandler";
import { API_ERRORS } from "services/constants";
import { EMAIL_REGULAR, NAME_REGULAR, PASSWORD_REGULAR } from "services/regulars";
import { withEmailSentScreen } from "hoc/withEmailSentScreen";
// UI-KIT
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
// styles
import "./Register.scss";

function Register({ showEmailSentScreen }) {
  const [Error, setError] = useErrorHandler();

  const formik = useFormik({
    initialValues: {
      userName: "",
      userSurname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: yup.object({
      userName: yup
        .string()
        .min(2, "Длина поля от 2 до 30 символов")
        .max(30, "Длина поля от 2 до 30 символов")
        .matches(NAME_REGULAR, "Введите корректное имя")
        .required("Поле обязательно для заполнения"),
      userSurname: yup
        .string()
        .min(2, "Длина поля от 2 до 30 символов")
        .max(30, "Длина поля от 2 до 30 символов")
        .matches(NAME_REGULAR, "Введите корректную фамилию")
        .required("Поле обязательно для заполнения"),
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
      repeatPassword: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: async (values) => {
      try {
        await authAPI.signup(values);
        const { email, password } = formik.values;
        showEmailSentScreen({ email, password });
      } catch (error) {
        switch (error.message) {
          case API_ERRORS.EMAIL_EXISTS:
            formik.setFieldError("email", "Такой E-mail уже зарегистрирован");
            break;
          default:
            setError(error);
        }
      }
    },
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  return (
    <main className="register">
      <h1 className="register__title">Добро пожаловать в Octopus</h1>
      <div className="register__container">
        <p className="register__subtitle">Заполните все поля, чтобы зарегистрироваться</p>
        <Form extClassName="register__form" onSubmit={formik.handleSubmit}>
          <div className="register__userName">
            <Input
              label="Имя"
              extClassNameInput="login__input"
              type="text"
              name="userName"
              id="registerUserName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={
                formik.errors.userName && formik.touched.userName ? formik.errors.userName : null
              }
              onBlur={transformBlur}
            />
            <Input
              label="Фамилия"
              extClassNameInput="login__input"
              type="text"
              name="userSurname"
              id="registerUserSurname"
              value={formik.values.userSurname}
              onChange={formik.handleChange}
              error={
                formik.errors.userSurname && formik.touched.userSurname
                  ? formik.errors.userSurname
                  : null
              }
              onBlur={transformBlur}
            />
          </div>
          <Input
            label="E-mail"
            extClassNameInput="login__input"
            type="text"
            name="email"
            id="authEmail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
            onBlur={transformBlur}
          />
          <div className="register__tooltip-input">
            <Input
              label="Пароль"
              extClassNameInput="register__input"
              type="password"
              name="password"
              id="registerPassword"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                formik.errors.password && formik.touched.password ? formik.errors.password : null
              }
              onBlur={transformBlur}
            >
              <ul className="register__tooltip-container">
                <li className="register__tooltip-item">от 8 до 30 символов</li>
                <li className="register__tooltip-item">содержит буквы и цифры</li>
              </ul>
            </Input>
          </div>

          <Input
            label="Повторите пароль"
            extClassNameInput="login__input"
            type="password"
            name="repeatPassword"
            id="registerRepeatPassword"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={
              formik.errors.repeatPassword && formik.touched.repeatPassword
                ? formik.errors.repeatPassword
                : null
            }
            onBlur={transformBlur}
          />
          <Button title="Зарегистрироваться" fill size="standard" />
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
      <Error />
    </main>
  );
}

export default withEmailSentScreen(Register);
