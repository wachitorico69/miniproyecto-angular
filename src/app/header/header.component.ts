import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminlogService } from '../shared/adminlog.service';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  userlog: string | null = null;

  constructor(private fb: FormBuilder, private adminService: AdminlogService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    const { username, password } = this.loginForm.value;
    const user = this.adminService.obtenerU(username, password);
    if(user){
      this.userlog = user.nombre;
      alert('login exitoso');
      this.loginError=false;
    }else{
      alert('Datos invalidos');
    }
  }
  logout(){
    this.userlog=null;
    this.loginForm.reset();
    this.loginError = false;
  }

  mostrarLog(){
    if(this.userlog){
      this.logout();
    }else{
      this.loginError = !this.loginError;
    }
  }
}
