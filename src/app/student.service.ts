import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl:string="http://localhost:8099/student";
  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{

   return this.http.get<Student[]>(`${this.baseUrl}/findall`);

  }
  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType:'text'})
  }
}
