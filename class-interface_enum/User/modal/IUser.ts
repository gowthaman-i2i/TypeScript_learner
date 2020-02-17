/**
 * An interface is a keyword which is used to declare a TypeScript Interface.
 *  An interface_name is the name of the interface.
 *  An interface body contains variables and methods declarations.
 */

export interface IUser extends IPhone{
    readonly id:number;
    firstName: string;
    lastName : string;
    emailAddress: string;
    address: string;
    readonly role: string;
}