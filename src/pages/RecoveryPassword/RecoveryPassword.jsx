import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
// functions
import { PASSWORD_REGULAR } from "services/regulars";
import { ROUTES } from "services/constants";
import { authAPI } from "api/authApi";
import { useErrorHandler } from "hooks/useErrorHandler";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
// styles
import "./RecoveryPassword.scss";

function RecoveryPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, , uid, token] = location.hash.split("/");
  const [Error, setError] = useErrorHandler();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
      confirmPassword: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: async (values) => {
      try {
        await authAPI.confirmResetPassword({ uid, token, ...values });
        navigate(ROUTES.SIGN_IN);
      } catch (error) {
        setError(error);
      }
    },
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  return (
    <main className="recoveryPassword">
      <h1 className="recoveryPassword__title">Восстановление пароля</h1>
      <p className="recoveryPassword__subtitle">
        Чтобы восстановить доступ к личному кабинету, придумайте новый пароль
      </p>
      <Form extClassName="recoveryPassword__form" onSubmit={formik.handleSubmit}>
        <div className="recoveryPassword__tooltip-input">
          <Input
            label="Пароль"
            extClassNameInput="recoveryPassword__input"
            type="password"
            name="password"
            id="changePassword"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik.errors.password && formik.touched.password ? formik.errors.password : null
            }
            onBlur={transformBlur}
          >
            <ul className="recoveryPassword__tooltip-container">
              <li className="recoveryPassword__tooltip-item">от 8 до 30 символов</li>
              <li className="recoveryPassword__tooltip-item">содержит буквы и цифры</li>
            </ul>
          </Input>
        </div>
        <Input
          label="Повторите пароль"
          extClassNameInput="confirm-password__input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
          onBlur={transformBlur}
        >
          <ul className="recoveryPassword__tooltip-container">
            <li className="recoveryPassword__tooltip-item">от 8 до 30 символов</li>
            <li className="recoveryPassword__tooltip-item">содержит буквы и цифры</li>
          </ul>
        </Input>

        <Button
          type="submit"
          title="Сохранить пароль"
          fill
          size="standard"
          disabled={!(formik.isValid && formik.dirty)}
        />
      </Form>
      <Error />
    </main>
  );
}

export default RecoveryPassword;
