import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import { useFormik } from "formik";
import * as yup from "yup";

import "./Login.scss";
import { PASSWORD_REGULAR } from "services/regulars";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Введите корректный E-mail")
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
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  return (
    <main className="login">
      <h1 className="login__title">Добро пожаловать в Octopus</h1>
      <p className="login__subtitle">
        Войдите в систему, чтобы получить доступ к своей учетной записи
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
          lineColor="#479fba"
        />
        <Button title="Войти" fill size="standard" disabled={!(formik.isValid && formik.dirty)} />
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
