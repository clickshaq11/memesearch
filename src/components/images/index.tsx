import { convertFileSrc } from "@tauri-apps/api/tauri";
import styles from "./styles.module.css";

type ImagesProps = {
  imageUrls: string[];
};

export function Images({ imageUrls }: ImagesProps) {
  return (
    <div className={styles.images}>
      {imageUrls.map((r) => (
        <div className={styles.imageWrapper}>
          <img src={convertFileSrc(r)} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
