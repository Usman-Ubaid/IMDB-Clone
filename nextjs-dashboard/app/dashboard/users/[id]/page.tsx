import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="John Doe" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="john@gmail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" placeholder="123456789" />

          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            rows={4}
            placeholder="Berlin"
          ></textarea>

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
