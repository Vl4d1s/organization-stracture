import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks: React.FC = () => {
  interface link {
    path: string;
    pageName: string;
  }

  const links: link[] = [
    {
      path: "/",
      pageName: "Home",
    },
  ];

  const renderedLinks: JSX.Element[] = links.map((link) => {
    return (
      <li>
        <NavLink to={link.path}>{link.pageName}</NavLink>
      </li>
    );
  });

  return <ul className="nav-links">{renderedLinks}</ul>;
};

export default NavLinks;
