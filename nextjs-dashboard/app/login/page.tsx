import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
