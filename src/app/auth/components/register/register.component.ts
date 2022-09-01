import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  isSubmitting$: Observable<boolean> = new Observable(); // estado armazenado pelo redux sendo requerido
  list$: Observable<[]> = new Observable();
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector)); // sempre que trabalhar com Observable precisaremos de pipes
    console.log('isSubmitting$', this.isSubmitting$);
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('onsubmit', this.form.value, this.form.valid);
    this.store.dispatch(registerAction(this.form.value)); // disparo da acao de registro -> altera o valor do estado isSubmitting
  }
}
