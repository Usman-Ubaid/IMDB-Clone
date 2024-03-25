import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value="general" selected>
            isAdmin?
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="general" selected>
            isActive?
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={6}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
