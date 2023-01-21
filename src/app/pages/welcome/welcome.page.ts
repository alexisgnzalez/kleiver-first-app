import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from 'src/app/services/student-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.css']
})
export class WelcomePage implements OnInit {

  constructor(private studentInfo: StudentInfoService) { }

  ngOnInit(): void {
    console.log("Estoy en el welcome", this.studentInfo.student);
    this.studentInfo.student.name = "Kleiver";
  }

}
