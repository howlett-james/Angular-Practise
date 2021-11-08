import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
let fname:string, date:any,phonenumber:number,gender:string,details:string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Angular-Practise';
  genderHasError = true;
  submitted = false;

  genders = ['Male','Female','Transgender'];

  
  userModel = new User(fname,date,phonenumber,gender,details);

  constructor(private _enrollmentService: EnrollmentService){}

  validateGender(value:any){
    if(value === 'default'){
      this.genderHasError = true;
    }else{
      this.genderHasError = false;
    }
  }

  submit(){

    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Success! ",data),
      error=> console.error("Error!",error)
    )
  }
}
