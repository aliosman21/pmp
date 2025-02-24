import { Injectable } from '@nestjs/common';
import { CreatePatientDto, Patient } from './dto/patient';

@Injectable()
export class AppService {
  private readonly patients: Patient[] = [];

  addPatient(createPatientDto: CreatePatientDto): Patient {
    const newPatient: Patient = {
      id: (this.patients.length + 1).toString(),
      ...createPatientDto,
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  getPatientById(id: string): Patient | undefined {
    return this.patients.find((patient) => patient.id === id);
  }
}
