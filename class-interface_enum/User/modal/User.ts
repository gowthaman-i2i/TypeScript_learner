import { IUser } from "./IUser";


export class User implements IUser {
    id: number;
    firstName: string;   
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    fullName: string;
    role: string;

    constructor(user:IUser) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.fullName = this.getFullName();
        this.address = user.address;
        this.emailAddress = user.emailAddress;
        this.phoneNumber = user.phoneNumber;
    }
    
    private getFullName(): string {
        return this.firstName +  this.lastName;
    }

    
}