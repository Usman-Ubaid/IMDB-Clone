import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

type SingleUserPageProps = {
  params: {
    id: string;
  };
};

const SingleUserPage = async ({ params }: SingleUserPageProps) => {
  const id = params?.id;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id.toString()} />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
          />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder={user.phone}
          />

          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            rows={4}
            placeholder={user.address}
          ></textarea>

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
