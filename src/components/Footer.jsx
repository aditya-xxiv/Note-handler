import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with Love By Adi ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
