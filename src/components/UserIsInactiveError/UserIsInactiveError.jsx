import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";

export function UserIsInactiveError({ fixError }) {
  return (
    <p className="">
      Чтобы отправить на указанный e-mail ссылку подтверждение регистрации повторно,{" "}
      <ButtonChanges
        title="нажмите здесь."
        onClick={fixError}
        extClassName="register__confirm-link"
      />
    </p>
  );
}
