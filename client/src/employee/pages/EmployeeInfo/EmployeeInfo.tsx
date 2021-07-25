import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasks from "../../components/EmployeeTasksList/EmployeeTasksList";
import EmployeeSubordinates from "../../components/EmployeeSubordinates/EmployeeSubordinates";
import CenteredLoader from "../../../shared/components/UIElements/Loader/CenteredLoader";

export interface userDetails {
  email: string;
  employee: [];
  firstName: string;
  lastName: string;
  position: string;
  reports: [];
  role: string;
  tasks: [];
  __v: any;
  _id: string;
}

const EmployeeInfo: React.FC<{ userDetails: userDetails }> = ({
  userDetails,
}) => {
  console.log(userDetails);
  return userDetails ? (
    <Container>
      <Details userDetails={userDetails} />
      <EmployeeTasks userDetails={userDetails} />
      {userDetails.role === "manager" && <EmployeeSubordinates />}
    </Container>
  ) : (
    <CenteredLoader />
  );
};

const mapStateToProps = (state: { auth: { user: any } }) => ({
  userDetails: state.auth.user,
});

export default connect(mapStateToProps, {})(EmployeeInfo);
