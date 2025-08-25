import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  userForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null],
      password: ['', [Validators.required, Validators.pattern(/^[1-9]{8}$/)]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]]
    });
  }



  ngOnInit(): void {
    
  }


  onSumit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log('Form submitted: ', this.userForm.value);
    }
  }


  get f(): { [Key: string]: AbstractControl }{
    return this.userForm.controls;
  }

  // setFormValues() { }
  
  resetForm() {
    this.userForm.reset();
    this.submitted = false;
  }

}
