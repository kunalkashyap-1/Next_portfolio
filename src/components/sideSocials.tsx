import config from "../config";
import { SocialMediaLink } from "../../models/configModel";
import styles from "../../styles/sideSocials.module.css";
import Image from "next/image";

const SideBar = () => {
  return <div className={styles.sidebar}>
    {config.socialMedia.map(({image, url}: SocialMediaLink, i:number )=>(
      <a target="_blank" className={styles.anchors} href={url} key={i}>
        <Image
        src={image}
        alt="social"
        width={30}
        height={30}
        />
      </a>
    ))}
  </div>
};


export default SideBar;