import { Response } from "../../models/configModel";
import styles from "../../styles/projects.module.css";
import Image from "next/image";
import config from "../config";

interface inputProps {
  key: number;
  data: Response;
}

export default function ProjectsModal({ data }: inputProps) {
  return (
    <div className={styles.card}>
      <Image
        src={config.images[data.repo].image}
        alt="Image Description"
        width={300}
        height={300}
      />
      <h3 className={styles.card_title}>{config.images[data.repo].name}</h3>
      <div className={styles.overlay}>
        <div className={styles.buttons}>
          <a target="_blank" href={data.link} className={styles.button}>
            Github
          </a>
          <a
            target="_blank"
            href={data.website}
            className={` ${!data.website ? "disabled" : styles.button}`}
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
