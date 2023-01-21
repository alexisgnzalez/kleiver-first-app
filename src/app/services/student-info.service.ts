import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  student: Student = {
    name: "Handrid",
    lastName: "Marcano",
    carrera: "FullStack"
  };

  constructor() { }
}
