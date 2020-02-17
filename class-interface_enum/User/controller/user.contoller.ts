import { UsersService } from '../service/user.service.Impl'
import { IUser, User } from '../modal'
export class UserController { 
    private userService: UsersService

    constructor() {
        this.userService = new UsersService();
    }

    public create(user: IUser): User {
        return this.userService.create(user);
    }

    public update(id:number, user: IUser): User {
        try {
        return this.userService.update(id,user);
        } catch(e) {
            throw Error(e);
        }
    }
    public getAllUser(): User[] {
        return  this.userService.findAll()
    }

    public  findById(id: number): User | undefined {
        return this.userService.findById(id)
    }   

}











