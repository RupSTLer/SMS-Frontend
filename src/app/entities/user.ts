export class User {
    userName: string;
    userPassword: string;
    userID: string;
    name: string;
    age: number;
    birthDate: string;
    gender: string;
    address: string;
    phoneNo: string;
    email : string;
    classe: string;
    section: string;
    department: string;
    role: Set<Role>;
}

export class Role {
    roleName: string;
    roleDescription: string;
}