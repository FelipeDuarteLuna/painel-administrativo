export interface User {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  biography: string;
  id: string;
  employeeID?: string;
  age?: string;
  ocupation?: string;
  address?: Address;
}
export interface Address {
  location?: string;
  country?: string;
}
