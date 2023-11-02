import "./ProfileInfo.scss";
import { useId, useState } from "react";
import Input from "UI-KIT/Input/Input";
import { Form } from "UI-KIT/Form/Form";
import { Button } from "UI-KIT/Button/Button";

function ProfileInfo({ onSubmit }) {
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
        onSubmit={onSubmit}
      >
        <div className="form-info_name-container">
          <Input label="Имя" type="text" name="firstName" id={firstNameInputId} />
          <Input label="Фамилия" type="text" name="lastName" id={lastNameInputId} />
        </div>
        <Input label="E-mail" type="email" name="email" id={emailInputId} />
        <div className="info-buttons">
          <Button fill size="standard" type="submit" title="Обновить профиль" />
          <button type="button" onClick={handleChangePasswordForm}>
            Изменить пароль
          </button>
        </div>
      </Form>

      {isChangePasswordOpen ? (
        <Form extClassName="form-info-change" onSubmit={onSubmit}>
          <Input
            label="Текущий пароль"
            type="password"
            name="currentPassword"
            id={currentPasswordInputId}
          />

          <Input label="Новый пароль" type="password" name="newPassword" id={newPasswordInputId} />

          <Input
            label="Подтвердите новый пароль"
            type="password"
            name="approvePassword"
            id={approvePasswordInputId}
          />

          <div className="info-buttons">
            <Button fill size="standard" type="submit" title="Обновить пароль" />
            <button type="button" onClick={handleChangePasswordForm}>
              Отменить
            </button>
          </div>
        </Form>
      ) : null}
    </>
  );
}

export default ProfileInfo;
