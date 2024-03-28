import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

type SingleProductPageProps = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const id = params.id;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product._id.toString()} />
          <label htmlFor="title">Title</label>

          <input type="text" name="title" placeholder={product.title} />

          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder={product.color} />

          <label htmlFor="size">Size</label>
          <textarea name="size" id="size" placeholder={product.size}></textarea>

          <label htmlFor="cat">Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={4}
            placeholder={product.desc}
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
