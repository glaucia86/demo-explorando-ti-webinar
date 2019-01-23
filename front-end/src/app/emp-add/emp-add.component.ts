import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  funcionarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  // Método que lida com a lógica de validações dos inputs:
  createForm() {
    this.funcionarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      profissao: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  ngOnInit() {}
}
