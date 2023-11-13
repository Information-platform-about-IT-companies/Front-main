import { useId } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form } from "UI-KIT/Form/Form";
import "./ProfileSupport.scss";

import Input from "UI-KIT/Input/Input";
import Textarea from "UI-KIT/Textarea/Textarea";
import { Button } from "UI-KIT/Button/Button";
import { SUPPORT_MESSAGE_REGULAR, SUPPORT_TITLE_REGULAR } from "services/regulars";

function ProfileSupport() {
  const formik = useFormik({
    initialValues: {
      supportTitle: "",
      supportMessage: "",
    },
    validationSchema: yup.object({
      supportTitle: yup
        .string()
        .min(2, "Длина поля от 2 до 100 символов")
        .max(100, "Длина поля от 2 до 100 символов")
        .matches(SUPPORT_TITLE_REGULAR, "Введите корректный текст")
        .required("Поле обязательно для заполнения"),
      supportMessage: yup
        .string()
        .min(2, "Длина поля от 2 до 1500 символов")
        .max(1500, "Длина поля от 2 до 1500 символов")
        .matches(SUPPORT_MESSAGE_REGULAR, "Введите корректный текст")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  const supportTitleInputId = useId();
  const supportMessageInputId = useId();
  return (
    <>
      <h1 className="profile_title">Поддержка</h1>
      <Form extClassName="form-info" onSubmit={formik.handleSubmit}>
        <h4 className="profile_subtitle">Это самый быстрый способ связаться с нами!</h4>
        <p className="profile_description">
          Наша служба поддержки ответит на запросы из этой формы. Чтобы получить максимально быстрое
          решение, пожалуйста, изложите свой запрос как можно более подробно.
        </p>
        <Input
          label="Тема"
          type="text"
          name="supportTitle"
          id={supportTitleInputId}
          value={formik.values.supportTitle}
          onChange={formik.handleChange}
          error={
            formik.errors.supportTitle && formik.touched.supportTitle
              ? formik.errors.supportTitle
              : null
          }
          onBlur={transformBlur}
        />

        <Textarea
          label="Сообщение"
          rows="8"
          name="supportMessage"
          id={supportMessageInputId}
          value={formik.values.supportMessage}
          onChange={formik.handleChange}
          error={
            formik.errors.supportMessage && formik.touched.supportMessage
              ? formik.errors.supportMessage
              : null
          }
          onBlur={transformBlur}
        />

        <Button
          disabled={!(formik.isValid && formik.dirty)}
          fill
          size="standard"
          extClassName="support_button"
          type="submit"
          title="Отправить сообщение"
        />
      </Form>
    </>
  );
}

export default ProfileSupport;
