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
          <button className={styles.button}>Github</button>
          <button className={styles.button}>Link</button>
        </div>
      </div>
    </div>
  );

  {
    /* // <div className={`m-4 ${styles.custom_card}`}>
    //     <p>{data.repo}</p>
    //     <p>githublink:- {data.link}</p>
    //     <p>website:- {data.website}</p>
    //     <p>image:- {data.image}</p>
    // </div> */
  }
}
