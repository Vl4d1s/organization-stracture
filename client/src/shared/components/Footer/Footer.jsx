import { Icon } from "semantic-ui-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>
        This{" "}
        <a href="https://2bprecisehealth.com/">
          2bPrecise <Icon name="dna" />
        </a>{" "}
        exercise solved by{" "}
        <a href="https://www.linkedin.com/in/vladismarkin/">Vladis Markin.</a>
      </p>
    </footer>
  );
};

export default Footer;
