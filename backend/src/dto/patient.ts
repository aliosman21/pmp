export class CreatePatientDto {
    readonly name: string;
    readonly age: number;
    readonly address: string;
}

export interface Patient {
    id: string;
    name: string;
    age: number;
    address: string;
}
