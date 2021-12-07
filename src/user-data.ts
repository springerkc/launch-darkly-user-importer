export interface IUser {
  id: string;
  email: string;
  name: string;
  two_factor_auth: boolean;
  multiple_emails: boolean;
  staff: boolean;
}

export const userData: IUser[] = [
  {
    "id": "asodijdjdkjsd-asdjn-asdasd-12iueh1e8nowfne",
    "email": "luke.skywalker@packet.com",
    "name": "Luke Skywalker",
    "two_factor_auth": true,
    "multiple_emails": false,
    "staff": true
  },
  {
    "id": "asodijdjdkjsd-asdjn-asdasd-12iueh1e8nowfne",
    "email": "chewy@packet.com",
    "name": "Chewbacca",
    "two_factor_auth": false,
    "multiple_emails": false,
    "staff": false
  },
  {
    "id": "asodijdjdkjsd-asdjn-asdasd-12iueh1e8nowfne",
    "email": "dvader@packet.com",
    "name": "Darth Vader",
    "two_factor_auth": true,
    "multiple_emails": true,
    "staff": true
  },
];
