import { IUsersService } from './user.service';
import { User, IUser } from '../modal';
import { Role } from '../Enums/role.enums';

export class UsersService implements IUsersService {

    private users: Array<User> = [];

    constructor() { }

    findAll(): User[] {
        return this.users;
    }

    findById(id: number): User | undefined {
        try {
            if (id > this.users.length + 1) {
                throw Error(`${id} invalid User `);
            }
            return this.getById(id);
        } catch (e) {
            throw new Error(e)
        }
    }

    findOne(options: object): User | null {
        let data:any = [];
        for (let [key, value] of Object.entries(options)) {
          data  = data.length ? data : this.users;
          console.log(`${key}: ${value}`);
          data  =  data.filter( (ob: any) =>  ob[key] === value);
        }
        return null;
    }

    create(user: IUser): User {
        try {
            let newUser: User = new User(user);
            const idx = this.users.length;
            newUser.id = idx + 1;
            newUser.role = Role.USER
            this.users.push(newUser);
            console.log(user);
            return newUser;
        } catch (e) {
            throw new Error(e)
        }
    }
    update(ID: number, newValue: IUser): User {
        try {
            if(ID > this.users.length + 1){
                 throw Error(`${ID} invalid User `);
            }  
            const idx = this.users.findIndex(user => user.id == ID);
            let updatedUser: User = new User(newValue);
            updatedUser.id = ID
            this.users[idx] = { ...this.users[idx], ...updatedUser } as User;
            return updatedUser;
        } catch (e) {
            throw Error(e)
        }
    }
    delete(ID: number): boolean {
        throw new Error("Method not implemented.");
    }


    private getById(id: number): any {
        return this.users.find((user: User) => { return user.id === id });
    }

}