import ReactDOM from "react-dom";
import "./SideDrawer.css";

export interface SideDrawerProps {
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
  const content: JSX.Element = (
    <aside className="side-drawer">{props.children}</aside>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;
