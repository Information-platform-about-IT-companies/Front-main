import { useEffect, useId, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// UI-KIT
import Input from "UI-KIT/Input/Input";
import { Form } from "UI-KIT/Form/Form";
import { Button } from "UI-KIT/Button/Button";
import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";
// functions
import { EMAIL_REGULAR, NAME_REGULAR, PASSWORD_REGULAR } from "services/regulars";
import { useErrorHandler } from "hooks/useErrorHandler";
import { useMainContext } from "context/MainContext";
import { userAPI } from "api/userApi";
// styles
import "./ProfileInfo.scss";

function ProfileInfo() {
  const [Error, setError] = useErrorHandler();
  const { data, setData } = useMainContext();
  const { currentUser } = data || {};
  const { firstName, lastName, email } = currentUser || {};
  let updateUser;

  const formikInfo = useFormik({
    initialValues: {
      firstName,
      lastName,
      email,
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .min(2, "Длина поля от 2 до 30 символов")
        .max(30, "Длина поля от 2 до 30 символов")
        .matches(NAME_REGULAR, "Введите корректное имя")
        .required("Поле обязательно для заполнения"),
      lastName: yup
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
    }),
    onSubmit: async (values) => {
      try {
        const updatedCurrentUser = await userAPI.updateUser(values);
        updateUser(updatedCurrentUser);
      } catch (error) {
        setError(error);
      }
    },
  });

  const updateFormikValues = (newValues) => {
    formikInfo.setValues({
      ...formikInfo.values,
      ...newValues,
    });
  };

  updateUser = (user) => {
    setData({ ...data, currentUser: user });
    updateFormikValues(user);
  };

  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isPassResetSuccessful, setPassResetSuccessful] = useState(false);

  useEffect(() => {
    setPassResetSuccessful(false);
    const fetchCurrentUser = async () => {
      try {
        const user = await userAPI.getCurrentUser();
        updateUser(user);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    if (!currentUser) {
      fetchCurrentUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const formikPassword = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      approvePassword: "",
    },
    validationSchema: yup.object({
      currentPassword: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
      newPassword: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
      approvePassword: yup
        .string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .oneOf([yup.ref("newPassword"), null], "Пароли не совпадают")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: async (values) => {
      try {
        await userAPI.resetPassword(values);
        setPassResetSuccessful(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsChangePasswordOpen(false);
      }
    },
  });

  const transformInfoBlur = (event) => {
    formikInfo.setFieldValue(event.target.name, event.target.value.trim());
    formikInfo.handleBlur(event);
  };
  const transformPasswordBlur = (event) => {
    formikPassword.setFieldValue(event.target.name, event.target.value.trim());
    formikPassword.handleBlur(event);
  };
  const id = useId();

  function handleChangePasswordForm() {
    setIsChangePasswordOpen((prevIsChangePasswordOpen) => !prevIsChangePasswordOpen);
  }

  return (
    <>
      <h1 className="profile__title">Профиль пользователя</h1>

      <Form
        extClassName={isChangePasswordOpen ? `form-info form-info_with-change` : `form-info`}
        onSubmit={formikInfo.handleSubmit}
        data-testid="profileInfoForm"
      >
        <div className="form-info_name-container">
          <Input
            id={`${id}-firstName`}
            label="Имя"
            type="text"
            name="firstName"
            data-testid="firstName"
            value={formikInfo.values.firstName}
            onChange={formikInfo.handleChange}
            error={
              formikInfo.errors.firstName && formikInfo.touched.firstName
                ? formikInfo.errors.firstName
                : null
            }
            onBlur={transformInfoBlur}
          />
          <Input
            label="Фамилия"
            type="text"
            id={`${id}-lastName`}
            name="lastName"
            data-testid="lastName"
            value={formikInfo.values.lastName}
            onChange={formikInfo.handleChange}
            error={
              formikInfo.errors.lastName && formikInfo.touched.lastName
                ? formikInfo.errors.lastName
                : null
            }
            onBlur={transformInfoBlur}
          />
        </div>
        <Input
          label="E-mail"
          type="email"
          name="email"
          id={`${id}-email`}
          data-testid="email"
          value={formikInfo.values.email}
          onChange={formikInfo.handleChange}
          error={
            formikInfo.errors.email && formikInfo.touched.email ? formikInfo.errors.email : null
          }
          onBlur={transformInfoBlur}
          disabled
        />
        <div className="info-buttons">
          <Button
            fill
            size="standard"
            type="submit"
            data-testid="submitInfoButton"
            title="Обновить профиль"
          />
          <ButtonChanges
            type="button"
            title="Изменить пароль"
            onClick={() => handleChangePasswordForm()}
          />
        </div>
        {isPassResetSuccessful && (
          <div className="form-info-change__status">Ваш пароль успешно изменен</div>
        )}
      </Form>

      {isChangePasswordOpen ? (
        <Form extClassName="form-info-change" onSubmit={formikPassword.handleSubmit}>
          <Input
            label="Текущий пароль"
            type="password"
            name="currentPassword"
            id={`${id}-currentPassword`}
            value={formikPassword.values.currentPassword}
            onChange={formikPassword.handleChange}
            error={
              formikPassword.errors.currentPassword && formikPassword.touched.currentPassword
                ? formikPassword.errors.currentPassword
                : null
            }
            onBlur={transformPasswordBlur}
          />
          <div className="form-info-change__tooltip-input">
            <Input
              label="Новый пароль"
              type="password"
              name="newPassword"
              id={`${id}-newPassword`}
              value={formikPassword.values.newPassword}
              onChange={formikPassword.handleChange}
              error={
                formikPassword.errors.newPassword && formikPassword.touched.newPassword
                  ? formikPassword.errors.newPassword
                  : null
              }
              onBlur={transformPasswordBlur}
            >
              <ul className="form-info-change__tooltip-container">
                <li className="form-info-change__tooltip-item">от 8 до 30 символов</li>
                <li className="form-info-change__tooltip-item">содержит буквы и цифры</li>
              </ul>
            </Input>
          </div>
          <Input
            label="Подтвердите новый пароль"
            type="password"
            name="approvePassword"
            id={`${id}-approvePassword`}
            value={formikPassword.values.approvePassword}
            onChange={formikPassword.handleChange}
            error={
              formikPassword.errors.approvePassword && formikPassword.touched.approvePassword
                ? formikPassword.errors.approvePassword
                : null
            }
            onBlur={transformPasswordBlur}
          />

          <div className="info-buttons">
            <Button
              fill
              size="standard"
              type="submit"
              title="Обновить пароль"
              disabled={!(formikPassword.isValid && formikPassword.dirty)}
            />
            <ButtonChanges
              type="button"
              title="Отменить"
              onClick={() => handleChangePasswordForm()}
            />
          </div>
        </Form>
      ) : null}
      <Error />
    </>
  );
}

export default ProfileInfo;
