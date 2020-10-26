import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';

@Injectable()

export class UserService {
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Andra',
      lastname: 'Brambilla',
      email: 'andrea.brambilla@hotmail.com',
      fiscalcode: 'ANDDFX72M22Z444S',
      province: 'Milano',
      phone: '33265343555',
      age: 41

    },
    {
      id: 2,
      name: 'Francesco',
      lastname: 'Rossi',
      email: 'f.rossi@gmail.com',
      fiscalcode: 'FRSAHRN72M22Z444S',
      province: 'Torino',
      phone: '32454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Antonio',
      lastname: 'Milani',
      email: 'a.milani@yahoo.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Bologna',
      phone: '36655542234',
      age: 34
    },
    {
      id: 4,
      name: 'Mariella',
      lastname: 'napoli',
      email: 'mariella.napoli@gmail.com',
      fiscalcode: 'MARNPN78M23Z464S',
      province: 'Ferrara',
      phone: '32134567',
      age: 23
    },
    {
      id: 5,
      name: 'Peter',
      lastname: 'Parker',
      email: 'peter.parker@gmail.com',
      fiscalcode: 'PTRPRKM23Z464S',
      province: 'New York',
      phone: '+09334434567',
      age: 21
    },
    {
      id: 6,
      name: 'Clark',
      lastname: 'Kent',
      email: 'clark.kent@gmail.com',
      fiscalcode: 'CLRKMTKM23Z464S',
      province: 'Smalville',
      phone: '+0034634567',
      age: 25
    }

  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    //alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }
}

