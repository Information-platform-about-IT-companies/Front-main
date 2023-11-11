import "./ProfileInfo.scss";
import { useId, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "UI-KIT/Input/Input";
import { Form } from "UI-KIT/Form/Form";
import { Button } from "UI-KIT/Button/Button";
import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";
import { NAME_REGULAR, PASSWORD_REGULAR } from "services/constants";

function ProfileInfo({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      firstName: "Vasya", // тут будут данные из useContext
      lastName: "Pupkin",
      email: "VasyaPupkin@yandex.com",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Длина поля от 2 до 30 символов")
        .max(30, "Длина поля от 2 до 30 символов")
        .matches(NAME_REGULAR, "Введите корректное имя")
        .required("Поле обязательно для заполнения"),
      lastName: Yup.string()
        .min(2, "Длина поля от 2 до 30 символов")
        .max(30, "Длина поля от 2 до 30 символов")
        .matches(NAME_REGULAR, "Введите корректную фамилию")
        .required("Поле обязательно для заполнения"),
      email: Yup.string()
        .email("Введите корректный E-mail")
        .min(6, "Длина поля от 6 до 254 символов")
        .max(254, "Длина поля от 6 до 254 символов")
        .email()
        .required("Поле обязательно для заполнения"),
      currentPassword: Yup.string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
      newPassword: Yup.string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .required("Поле обязательно для заполнения"),
      approvePassword: Yup.string()
        .min(8, "Длина поля от 8 до 30 символов")
        .max(30, "Длина поля от 8 до 30 символов")
        .matches(PASSWORD_REGULAR, "Введите корректный пароль")
        .oneOf([Yup.ref("newPassword"), null], "Пароли не совпадают")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  const firstNameInputId = useId();
  const lastNameInputId = useId();
  const emailInputId = useId();
  const currentPasswordInputId = useId();
  const newPasswordInputId = useId();
  const approvePasswordInputId = useId();

  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  function handleChangePasswordForm() {
    setIsChangePasswordOpen((prevIsChangePasswordOpen) => !prevIsChangePasswordOpen);
  }

  return (
    <>
      <h1 className="profile_title">Профиль пользователя</h1>

      <Form
        extClassName={isChangePasswordOpen ? `form-info form-info_with-change` : `form-info`}
        onSubmit={formik.handleSubmit}
      >
        <div className="form-info_name-container">
          <Input
            id={firstNameInputId}
            label="Имя"
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={
              formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : null
            }
            onBlur={formik.handleBlur}
          />
          <Input
            label="Фамилия"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            id={lastNameInputId}
            error={
              formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : null
            }
            onBlur={formik.handleBlur}
          />
        </div>
        <Input
          label="E-mail"
          type="email"
          name="email"
          id={emailInputId}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
          onBlur={formik.handleBlur}
        />
        <div className="info-buttons">
          <Button fill size="standard" type="submit" title="Обновить профиль" />
          <ButtonChanges
            type="button"
            title="Изменить пароль"
            onClick={() => handleChangePasswordForm()}
          />
        </div>
      </Form>

      {isChangePasswordOpen ? (
        <Form extClassName="form-info-change" onSubmit={onSubmit}>
          <Input
            label="Текущий пароль"
            type="password"
            name="currentPassword"
            id={currentPasswordInputId}
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            error={
              formik.errors.currentPassword && formik.touched.currentPassword
                ? formik.errors.currentPassword
                : null
            }
            onBlur={formik.handleBlur}
          />

          <Input
            label="Новый пароль"
            type="password"
            name="newPassword"
            id={newPasswordInputId}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.errors.newPassword && formik.touched.newPassword
                ? formik.errors.newPassword
                : null
            }
            onBlur={formik.handleBlur}
          />

          <Input
            label="Подтвердите новый пароль"
            type="password"
            name="approvePassword"
            id={approvePasswordInputId}
            value={formik.values.approvePassword}
            onChange={formik.handleChange}
            error={
              formik.errors.approvePassword && formik.touched.approvePassword
                ? formik.errors.approvePassword
                : null
            }
            onBlur={formik.handleBlur}
          />

          <div className="info-buttons">
            <Button fill size="standard" type="submit" title="Обновить пароль" />
            <ButtonChanges
              type="button"
              title="Отменить"
              onClick={() => handleChangePasswordForm()}
            />
          </div>
        </Form>
      ) : null}
    </>
  );
}

export default ProfileInfo;
