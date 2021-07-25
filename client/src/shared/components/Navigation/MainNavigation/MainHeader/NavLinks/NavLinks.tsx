import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../../../../actions/auth";

import "./NavLinks.css";

const NavLinks: React.FC = (props: any) => {
  // const authLinks = ();
  // const guestLinks = ();

  interface link {
    path: string;
    pageName: string;
    onClick?: () => void;
  }

  const authLinks: link[] = [
    {
      path: "/profile",
      pageName: "PROFILE",
    },
    {
      path: "/employees",
      pageName: "EMPLOYEES",
    },
    {
      path: "/login",
      pageName: "LOGOUT",
    },
  ];

  const guestLinks: link[] = [
    {
      path: "/login",
      pageName: "LOGIN",
    },
  ];

  const renderedAuthLinks: JSX.Element[] = authLinks.map((link) => {
    return link.pageName === "LOGOUT" ? (
      <li key={link.pageName} onClick={props.logout}>
        <NavLink to={link.path}>{link.pageName}</NavLink>
      </li>
    ) : (
      <li key={link.pageName}>
        <NavLink to={link.path}>{link.pageName}</NavLink>
      </li>
    );
  });

  const renderedGuesLinks: JSX.Element[] = guestLinks.map((link) => {
    return (
      <li key={link.pageName}>
        <NavLink to={link.path}>{link.pageName}</NavLink>
      </li>
    );
  });

  const { isAuthenticated, loading } = props.auth;

  return (
    <ul className="nav-links">
      {!loading && (isAuthenticated ? renderedAuthLinks : renderedGuesLinks)}
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavLinks);
