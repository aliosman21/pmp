import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  constructor(@Inject('mongoClient') private db: Db) { }

  async listPatients() {
    const patients = await this.db.collection('patients').find().sort({ name: 1 }).toArray();
    return patients;
  }

  async addPatient(createPatientDto) {
    const newPatient = {
      id: uuidv4(),
      ...createPatientDto,
    };
    await this.db.collection('patients').insertOne(newPatient);
    return newPatient;
  }

  async editPatientById(id: string, createPatientDto) {
    const updatedPatient = {
      id,
      ...createPatientDto,
    };
    const { _id, ...data } = updatedPatient; // Exclude _id from the update data

    await this.db.collection('patients').updateOne({ id }, { $set: data });
  }

  async getPatientById(id: string) {
    const patient = await this.db.collection('patients').findOne({ id });
    return patient;
  }
}