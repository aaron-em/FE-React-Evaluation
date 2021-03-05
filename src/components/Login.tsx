import React, { ReactElement } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";

import "./Login.css";
import "./Form.css";

import { Sparkle } from ".";
import NoIncLogo from "../assets/noinc-logo.png";
import { AuthenticatedUserName } from "../reducers/user";

const validateEmail = (maybeEmail: string) =>
  !maybeEmail.match(/^\S+@\S+\.\S+$/) && "Please enter a valid email address.";

const validateHasValue = (maybeValue: string) =>
  maybeValue.length === 0 && "Please enter a value.";

type LoginFormValues = {
  emailAddress: string;
  password: string;
};

type LoginProps = {
  onSuccess: (n: AuthenticatedUserName) => void;
};

export function Login({ onSuccess }: LoginProps): ReactElement {
  return (
    <div className="Login">
      <div className="container">
        <div className="logo">
          <img src={NoIncLogo} alt="N0.1nc" />
        </div>
        <div className="login-form">
          <div className="Form">
            <p>
              Log in to our <Sparkle />
              Magic Portal
              <Sparkle />
            </p>
            <Formik
              initialValues={{ emailAddress: "", password: "" }}
              onSubmit={(
                values,
                { setSubmitting }: FormikHelpers<LoginFormValues>
              ) => {
                onSuccess(values.emailAddress);
                setSubmitting(false);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="field">
                    <Field
                      className={
                        touched.emailAddress && errors.emailAddress && "invalid"
                      }
                      name="emailAddress"
                      placeholder="Email Address"
                      validate={validateEmail}
                    />
                    <div className="error">
                      {touched.emailAddress && errors.emailAddress
                        ? errors.emailAddress
                        : "\u00A0"}
                    </div>
                  </div>
                  <div className="field">
                    <Field
                      className={
                        touched.password && errors.password && "invalid"
                      }
                      type="password"
                      name="password"
                      placeholder="Password"
                      validate={validateHasValue}
                    />
                    <div className="error">
                      {touched.password && errors.password
                        ? errors.password
                        : "\u00A0"}
                    </div>
                  </div>
                  <div className="field">
                    <button type="submit">LOGIN</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
