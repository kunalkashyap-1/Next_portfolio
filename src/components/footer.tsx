import React from "react";
import SideBar from "../components/sideSocials";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SideBar />
      <footer
        style={{
          // backgroundColor: '#f0f0f0',
          padding: "10px",
          textAlign: "center",
          // position: 'fixed',
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <p>Handcrafted by me © {currentYear}</p>
      </footer>
    </>
  );
};

export default Footer;
