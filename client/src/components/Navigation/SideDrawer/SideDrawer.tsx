import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

export interface SideDrawerProps {
  children: React.ReactNode;
  show: boolean;
  timeout: number;
  onSideDraweClick: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
  const content: JSX.Element = (
    <CSSTransition
      in={props.show}
      timeout={props.timeout}
      // CSSTransition uses styles that defined in index.css file.
      classNames="slide-in-left"
      // Add or remove from the DOM when SideDrawer triggered.
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onSideDraweClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;
