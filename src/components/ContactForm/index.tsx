import { Field, Form, Formik } from "formik";
import styles from "./styles.module.scss";
import * as yup from "yup";
import "yup-phone";
import { cpf } from "cpf-cnpj-validator";
import { useState } from "react";

export default function ContactForm() {
  const [hasConfirmed, setConfirmed] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "*Erro, Nome Inválido")
      .required("*Campo Obrigatório"),
    email: yup
      .string()
      .email("*Erro, Email inválido")
      .required("*Campo Obrigatório"),
    CPF: yup
      .string()
      .required("*Campo Obrigatório")
      .test("Válida CPF", "*Erro, CPF inválido", (CPF = "") =>
        cpf.isValid(CPF, true)
      ),
    birthDate: yup.string().required("*Campo Obrigatório"),
    phone: yup
      .string()
      .required("*Campo Obrigatório")
      .phone("BR", false, "*Erro, Telefone inválido"),
    instagram: yup.string(),
    check: yup.boolean().oneOf([true]).required("*Campo Obrigatório"),
  });
  return (
    <div>
      <h2 className={styles.form_title}>Preencha o formulário</h2>
      <Formik
        validationSchema={validationSchema}
        onSubmit={() => {
          setConfirmed(true);
        }}
        initialValues={{
          name: "",
          email: "",
          CPF: "",
          birthDate: "",
          phone: "",
          instagram: "",
          check: false,
        }}
      >
        {({ errors, touched }) => (
          <div className={styles.contact_form}>
            <Form>
              <div>
                <label className={styles.label_form} htmlFor="name">
                  Nome:
                </label>
                {errors.name && touched.name && (
                  <span className={styles.span_form}>{errors.name}</span>
                )}
                <Field
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="email">
                  E-mail:
                </label>
                {errors.email && touched.email && (
                  <span className={styles.span_form}>{errors.email}</span>
                )}
                <Field
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="CPF">
                  CPF:
                </label>
                {errors.CPF && touched.CPF && (
                  <span className={styles.span_form}>{errors.CPF}</span>
                )}
                <Field
                  type="text"
                  name="CPF"
                  placeholder="000.000.000-00"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="birthDate">
                  Data de Nascimento:
                </label>
                {errors.birthDate && touched.birthDate && (
                  <span className={styles.span_form}>{errors.birthDate}</span>
                )}
                <Field
                  type="text"
                  name="birthDate"
                  placeholder="00.00.0000"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="phone">
                  Telefone:
                </label>
                {errors.phone && touched.phone && (
                  <span className={styles.span_form}>{errors.phone}</span>
                )}
                <Field
                  type="tel"
                  name="phone"
                  placeholder="(00) 0000-0000"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="instagram">
                  Instagram:
                </label>
                <Field
                  type="text"
                  name="instagram"
                  placeholder="@seuuser"
                  className={styles.Field}
                />
              </div>
              <div className={styles.confirm_form}>
                <span>*</span>
                <label htmlFor="check">Declaro que li e aceito</label>
                <Field
                  type="checkbox"
                  name="check"
                  className={styles.Field_confirm}
                />
              </div>
              <button>CADASTRE-SE</button>
              {hasConfirmed && (
                <span className={styles.confirm_span}>
                  *Formulário enviado com sucesso!
                </span>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
