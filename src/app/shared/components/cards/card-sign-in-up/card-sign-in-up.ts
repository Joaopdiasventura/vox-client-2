import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-sign-in-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-sign-in-up.html',
  styleUrl: './card-sign-in-up.scss'
})
export class CardSignInUp {
  mode: 'signin' | 'signup' = 'signin';

  formData = {
    userName: '',
    email: '',
    password: ''
  };

  setMode(mode: 'signin' | 'signup') {
    this.mode = mode;
    this.formData = { userName: '', email: '', password:''};
  }

  onSubmit(form: NgForm) {
    if (this.mode === 'signin') {
      console.log('Signing in...', this.formData);
    } else {
      console.log('Signing up...', this.formData);
    }
    form.resetForm();
  }
}
