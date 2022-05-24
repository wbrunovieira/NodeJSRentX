interface ICreateUserDTO {
  name: string;
  avatar?: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
}

export { ICreateUserDTO };
