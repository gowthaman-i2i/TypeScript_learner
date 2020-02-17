import { User } from '../modal';

export interface IUsersService {
    findAll(): Array<User>;
    findById(ID: number): ( User | undefined);
    findOne(options: object): ( User | null);
    create(user: User): User;
    update(ID: number, newValue: User): User;
    delete(ID: number): boolean;
}