import config from "../config";
import { NavLink } from "../../models/configModel";

export default function NavBar() {
  return (
    <nav className="flex justify-between m-5">
      <h1>Logo</h1>
      <div className="flex gap-2">
        {config.navLinks.map(({ name, url }: NavLink, i: number) => (
          <a key={i} href={url}>
            {name}
          </a>
        ))}
        <a href="/resume" target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
}
