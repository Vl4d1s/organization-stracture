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

  const managerLinks: link[] = [
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

  const employeeLinks: link[] = [
    {
      path: "/profile",
      pageName: "PROFILE",
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

  const renderedManagerLinks: JSX.Element[] = managerLinks.map((link) => {
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

  const renderedEmployeeLinks: JSX.Element[] = employeeLinks.map((link) => {
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
      {!loading &&
        (isAuthenticated
          ? props.auth.user?.role === "manager"
            ? renderedManagerLinks
            : renderedEmployeeLinks
          : renderedGuesLinks)}
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavLinks);
