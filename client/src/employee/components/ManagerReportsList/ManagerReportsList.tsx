import React from "react";
import { List } from "semantic-ui-react";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import ManagerReportsItem from "./ManagerReportsItem/ManagerReportsItem";
import { useSelector } from "react-redux";

import Report from "../../../Models/Report";

const ManagerReportsList = () => {
  const managerReports: Report[] = useSelector(
    // @ts-ignore
    (state) => state.auth.user.reports
  );
  console.log(managerReports);
  return (
    <React.Fragment>
      <SegmentCard title={`My Reports`}>
        <List divided relaxed>
          {managerReports.map((report: Report) => {
            return <ManagerReportsItem report={report} />;
          })}
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default ManagerReportsList;
