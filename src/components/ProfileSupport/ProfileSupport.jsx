import { useId } from "react";

import { Form } from "UI-KIT/Form/Form";
import "./ProfileSupport.scss";

import Input from "UI-KIT/Input/Input";
import Textarea from "UI-KIT/Textarea/Textarea";

function ProfileSupport() {
  const supportTitleInputId = useId();
  const supportMessageInputId = useId();
  return (
    <>
      <h1 className="profile_title">Поддержка</h1>
      <Form extClassName="form-info">
        <h4 className="profile_subtitle">Это самый быстрый способ связаться с нами!</h4>
        <p className="profile_description">
          Нажмите кнопку ниже, чтобы найти полезные компании.Наша служба поддержки ответит на
          запросы из этой формы. Чтобы получить максимально быстрое решение, пожалуйста, изложите
          свой запрос как можно более подробно.
        </p>
        <Input label="Тема" type="text" name="supportTitle" id={supportTitleInputId} />

        <Textarea label="Сообщение" rows="8" name="supportMessage" id={supportMessageInputId} />
      </Form>
    </>
  );
}

export default ProfileSupport;
