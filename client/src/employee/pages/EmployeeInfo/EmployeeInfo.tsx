import { Container } from "semantic-ui-react";
import { useSelector } from "react-redux";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasksList from "../../components/EmployeeTasksList/EmployeeTasksList";
import SubordinatesList from "../../components/SubordinatesList/SubordinatesList";
import CenteredLoader from "../../../shared/components/UIElements/Loader/CenteredLoader";
import ManagerReportsList from "../../components/ManagerReportsList/ManagerReportsList";
import UserModel from "../../../Models/UserModel";

const EmployeeInfo = () => {
  //@ts-ignore
  const userDetails: UserModel = useSelector((state) => state.auth.user);
  return userDetails ? (
    <Container>
      <Details userDetails={userDetails} />
      {userDetails?.role === "employee" && <EmployeeTasksList />}
      {userDetails?.role === "manager" && <SubordinatesList />}
      {userDetails?.role === "manager" && <ManagerReportsList />}
    </Container>
  ) : (
    <CenteredLoader />
  );
};

export default EmployeeInfo;
