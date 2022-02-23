import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {
student:Student [] = [];
message:string='';
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
getAllStudents(){
  this.service.getAllStudents().subscribe(data=>{
this.student=data
  },error=>{
    this.student=[];console.log(error);
  });
}
deleteStudent(id : number){
  //console.log('data is '+id);
  this.service.deleteStudent(id).subscribe(data=>{
    this.message=data,
    this.getAllStudents();
  },error=>{
    console.log(error)
  }
  )
}
}
