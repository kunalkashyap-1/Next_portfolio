import config from "../config";
import { NavLink } from "../../models/configModel";
import Link from "next/link";
import styles from "../../syles/navbar.module.css";

export default function NavBar() {
  return (
    <nav className="flex justify-between m-5">
      <h1>Logo</h1>
      <div className="flex gap-2">
        {config.navLinks.map(({ name, url }: NavLink, i: number) => (
          <Link key={i} href={url}>
            {name}
          </Link>
        ))}
        <a href="/resume" target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
}
