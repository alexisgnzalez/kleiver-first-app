import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from 'src/app/services/student-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.css']
})
export class UserPage implements OnInit {

  constructor(private studentInfo: StudentInfoService) { }

  ngOnInit(): void {
    console.log("Estoy en el user: ", this.studentInfo.student);
    this.studentInfo.student.carrera = "Backend";
  }

}
