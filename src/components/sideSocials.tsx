import config from "../config";
import { SocialMediaLink } from "../../models/configModel";
import styles from "../../styles/sideSocials.module.css";

const SideBar = () => {
  return <div className={styles.sidebar}>
    {config.socialMedia.map(({name, url}: SocialMediaLink, i:number )=>(
      <a target="_blank" className={styles.anchors} href={url} key={i}>{name}</a>
    ))}
  </div>
};


export default SideBar;