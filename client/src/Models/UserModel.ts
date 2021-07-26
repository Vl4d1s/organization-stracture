export class UserModel {
  email: string;
  employee: [];
  firstName: string;
  lastName: string;
  position: string;
  reports: [];
  role: string;
  tasks: [];
  manager: UserModel;
  _id: string;
}

export default UserModel;
