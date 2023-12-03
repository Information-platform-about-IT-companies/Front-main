import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Form } from "UI-KIT/Form/Form";
import "./EmailSent.scss";

export function EmailSent({ askForEmail }) {
  return (
    <main className="email-sent register">
      <h1 className="email-sent__title">Добро пожаловать в Octopus</h1>
      <div className="email-sent__message">
        <Form extClassName="email-sent__confirm-form" onSubmit={() => false}>
          <h3 className="email-sent__confirm-title">Ваша учетная запись создана!</h3>
          <div className="email-sent__confirm-textbox">
            <p className="email-sent__confirm-text">
              Мы отправили электронное письмо с подтверждением на вашу почту.
            </p>{" "}
            <p className="email-sent__confirm-text">Нажмите на ссылку внутри, чтобы начать!</p>
          </div>
          <div className="email-sent__confirm-textbox">
            <p className="email-sent__confirm-text">Вы не получили электронное письмо? </p>{" "}
            <p className="email-sent__confirm-text">
              Чтобы отправить электронное письмо повторно,{" "}
              <ButtonChanges
                title="нажмите здесь."
                onClick={askForEmail}
                extClassName="email-sent__confirm-link"
              />
            </p>
          </div>
        </Form>
        <p className="email-sent__suggestion">
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
    </main>
  );
}
