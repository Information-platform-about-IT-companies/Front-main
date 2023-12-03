import { useId } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// UI-KIT
import { Form } from "UI-KIT/Form/Form";
import Input from "UI-KIT/Input/Input";
import Textarea from "UI-KIT/Textarea/Textarea";
import { Button } from "UI-KIT/Button/Button";
// styles
import "./ProfileSupport.scss";

function ProfileSupport() {
  const formik = useFormik({
    initialValues: {
      supportTitle: "",
      supportMessage: "",
    },
    validationSchema: yup.object({
      supportTitle: yup.string().max(100, "Длина поля не более 100 символов"),
      supportMessage: yup
        .string()
        .min(5, "Длина поля от 5 до 1500 символов")
        .max(1500, "Длина поля от 5 до 1500 символов")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const transformBlur = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.trim());
    formik.handleBlur(event);
  };

  const id = useId();
  return (
    <>
      <h1 className="profile__title">Поддержка</h1>
      <Form extClassName="form-info" onSubmit={formik.handleSubmit}>
        <h4 className="form-info__subtitle">Это самый быстрый способ связаться с нами</h4>
        <p className="form-info__description">
          Наша служба поддержки ответит на запросы из этой формы. Чтобы получить максимально быстрое
          решение, пожалуйста, изложите свой запрос как можно более подробно.
        </p>
        <Input
          label="Тема"
          type="text"
          name="supportTitle"
          id={`${id}-supportTitle`}
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
          id={`${id}-supportMessage`}
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
          extClassName="form-info__button"
          type="submit"
          title="Отправить сообщение"
        />
      </Form>
    </>
  );
}

export default ProfileSupport;
