"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const initialState = { error: "" };

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
      {state && state.error}
    </form>
  );
};

export default LoginForm;
