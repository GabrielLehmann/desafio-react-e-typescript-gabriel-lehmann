import { Field, Form, Formik } from "formik";
import styles from "./styles.module.scss";

export default function ContactForm() {
  return (
    <div>
      <h2 className={styles.form_title}>Preencha o formulário</h2>
      <Formik
        onSubmit={() => {}}
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
        {(props) => (
          <div className={styles.contact_form}>
            <Form>
              <div>
                <label className={styles.label_form} htmlFor="name">
                  Nome:
                </label>
                <span className={styles.span_form}>*Campo Obrigatório</span>
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
                <span className={styles.span_form}>*Campo Obrigatório</span>
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
                <span className={styles.span_form}>*Campo Obrigatório</span>
                <Field
                  type="text"
                  name="CPF"
                  placeholder="000.000.000-00"
                  className={styles.Field}
                />
              </div>
              <div>
                <label className={styles.label_form} htmlFor="CPF">
                  Data de Nascimento:
                </label>
                <span className={styles.span_form}>*Campo Obrigatório</span>
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
                <span className={styles.span_form}>*Campo Obrigatório</span>
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
              <span className={styles.confirm_span}>
                *Formulário enviado com sucesso!
              </span>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
