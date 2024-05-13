export class ClientsInfoComponentModel {
  id: number;
  clientName: string;
  clientIcPassport: string;
  clientPhoneNumber: string;
  clientEmail: string;
  clientGender: string;
  clientBirthDate: Date;
  clientAddress: string;
  createdAt: Date;
  createdBy: number;
  modifiedAt: Date;
  modifiedBy: number;
  status: number;

  constructor() {
    this.id = 0;
    this.clientName = '';
    this.clientIcPassport = '';
    this.clientPhoneNumber = '';
    this.clientEmail = '';
    this.clientGender = '';
    this.clientBirthDate = new Date('2023-09-29T14:30:00');
    this.clientAddress = '';
    this.createdAt = new Date('2023-09-29T14:30:00');
    this.createdBy = 0;
    this.modifiedAt = new Date('2023-09-29T14:30:00');
    this.modifiedBy = 0;
    this.status = 0;
  }
}

export interface GetClientsInfo {
  Id: number;
  ClientName: string;
  ClientIcPassport: string;
  ClientPhoneNumber: string;
  ClientEmail: string;
  ClientGender: string;
  ClientBirthDate: Date;
  ClientAddress: string;
}

export interface GetClientsInfoById {
  Id: number;
  ClientName: string;
  ClientIcPassport: string;
  ClientPhoneNumber: string;
  ClientEmail: string;
  ClientGender: string;
  ClientBirthDate: Date;
  ClientAddress: string;
  CreatedAt: Date;
  CreatedBy: number;
  ModifiedAt: Date;
  ModifiedBy: number;
  Status: number;
}


export interface PutClientsInfoById {
  Id: number;
  ClientName: string;
  ClientIcPassport: string;
  ClientPhoneNumber: string;
  ClientEmail: string;
  ClientGender: string;
  ClientBirthDate: Date;
  ClientAddress: string;
  ModifiedBy: number;
}

export interface PostClientsInfo {
  ClientName: string;
  ClientIcPassport: string;
  ClientPhoneNumber: string;
  ClientEmail: string;
  ClientGender: string;
  ClientBirthDate: Date;
  ClientAddress: string;
  CreatedBy: number;
}

export interface DeleteClientsInfoById {
  Id: number;
  ModifiedBy: number;
}


