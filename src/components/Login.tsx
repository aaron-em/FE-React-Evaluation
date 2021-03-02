import React, { MouseEventHandler, ReactElement, useState } from "react";

import "./Login.css";
import "./Form.css";

import NoIncLogo from "./noinc-logo.png";

type FormProps = {
  onSubmit: () => unknown | void;
  children: ReactElement[];
};

function Form({ children }: FormProps) {
  return <div className="Form">{children}</div>;
}

type InputValidator = (
  value: string
) => {
  isValid: boolean;
  errorMessage?: string;
};

type InputProps = {
  name: string;
  placeholder: string;
  validator: InputValidator;
};

function Input({ name, placeholder, validator }: InputProps) {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<true | false | null>(null);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const onChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);

    if (!isDirty) {
      setIsDirty(true);
    }

    const validationResult = validator(value);
    setIsValid(validationResult.isValid);
  };

  return (
    <input
      className={isDirty && isValid === false ? "invalid" : "valid"}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

type ButtonProps = {
  message: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function SubmitButton({ message, onClick }: ButtonProps): ReactElement {
  return (
    <button className="submit" onClick={onClick}>
      {message}
    </button>
  );
}

const validateEmail = (maybeEmail: string) => ({
  isValid: false,
  ...(maybeEmail.match(/^\S+@\S+\.\S+$/)
    ? { isValid: true }
    : { errorMessage: "Please enter a valid email address." })
});

const validateHasValue = (maybeValue: string) => ({
  isValid: false,
  ...(maybeValue.length > 0
    ? { isValid: true }
    : { errorMessage: "Please enter a value." })
});

// Support a11y labels for emoji for which they make sense, and
// default to an empty string for purely decorative ones
function Emojo({ value, label = "" }: { value: string; label?: string }) {
  return (
    <span role="img" aria-label={label}>
      {value}
    </span>
  );
}

const Sparkle = () => Emojo({ value: "✨" });

export function Login(): ReactElement {
  return (
    <div className="Login">
      <div className="container">
        <div className="logo">
          <img src={NoIncLogo} alt="N0.1nc" />
        </div>
        <div className="login-form">
          <Form onSubmit={() => {}}>
            <p>
              Log in to our <Sparkle />
              Magic Portal
              <Sparkle />
            </p>
            <Input
              name="emailAddress"
              placeholder="Email Address"
              validator={validateEmail}
            />
            <Input
              name="password"
              placeholder="Password"
              validator={validateHasValue}
            />
            <SubmitButton message="LOGIN" onClick={e => {}} />
          </Form>
        </div>
      </div>
    </div>
  );
}
