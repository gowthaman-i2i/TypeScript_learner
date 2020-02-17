import readlineSync from 'readline-sync';
import { UserController } from './User/controller/user.contoller';
import { User, IUser } from './User/Modal';
const userCtrl = new UserController();


const actions = ['Add', 'Update', 'View', 'FindByID', 'FindOne']


const userOperations = (): void => {

    const index = readlineSync.keyInSelect(actions, 'ENTER OPERATION');

    switch (index) {
        case 0:
            addnewUser();
            break;
        case 1:
            updateUser();
            break;
        case 2:
            viewUser();
            break;
        case 3:
            viewUser();
          break;
        default:
            console.log("No such day exists!");
            break;
    }

}


const addnewUser = (): void => {
    let user: IUser = userConsole();
    try {
        user = userCtrl.create(user);
        console.log('User has been created Successfuly')
        terminalLoop();
    } catch (e) {
        console.log("ERROR:=>", e)
    }
}

const updateUser = (): void => {
    try {
        const id = readlineSync.question('Enter user id :: => ');
        if (!id) {
            throw Error('Enter Valid user id');
        }
        let user: IUser = userConsole();
        user = userCtrl.update(+id, user);
        console.log('User has been updated Successfuly');
        terminalLoop();
    } catch (e) {
        console.log("ERROR:=>", e)
    }
}



const viewUser = (): void => {
    try {
        const users = userCtrl.getAllUser();
        console.log('User List', users);
        terminalLoop();
    } catch (e) {
        console.log("ERROR:=>", e)
    }
}


const userConsole = (): IUser => {
    const jsonObj = <IUser>{};
    jsonObj.firstName = readlineSync.question('Enter first name :: => ');
    jsonObj.lastName = readlineSync.question('Enter last name :: =>');
    jsonObj.phoneNumber = readlineSync.question('Enter Phone Number :: =>');
    jsonObj.address = readlineSync.question('Enter Address :: =>');
    jsonObj.emailAddress = readlineSync.question('Enter Email Address :: =>');
    return jsonObj;
}

const terminalLoop = () => {
    if (readlineSync.keyInYN('Do you want this module?')) {
        console.log('Installing now...');
        userOperations()
    } else {
        process.exit();
    }
}

userOperations();