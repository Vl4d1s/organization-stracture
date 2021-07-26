import React from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";

import SubordinatesItem from "./SubordinatesItem/SubordinatesItem";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import UserModel from "../../../Models/UserModel";

const SubordinatesList = () => {
  // @ts-ignore
  const subordinates = useSelector((state) => state.auth.user.employees);

  const renderedSubordinatesItem: UserModel[] = subordinates.map(
    (subordinate: UserModel, index: number) => {
      const { firstName, lastName, position, email } = subordinate;
      const fullName = `${firstName} ${lastName}`;
      return (
        <SubordinatesItem
          key={index}
          fullName={fullName}
          position={position}
          employeeMail={email}
        />
      );
    }
  );

  return (
    <React.Fragment>
      <SegmentCard title="My subordinates">
        <List divided relaxed>
          {renderedSubordinatesItem}
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default SubordinatesList;
