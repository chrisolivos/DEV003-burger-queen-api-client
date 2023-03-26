import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOLA MUNDO DESDE EL TYPE';
  Cajita = 'hola';
  Cuentas='';
  
  url = 'http://localhost:3000/auth';

  constructor( private http: HttpClient){

    this.http.get(this.url).toPromise().then((data:any) => {
      //console.log(data);
      this.Cuentas = JSON.stringify(data);
      console.log(data[0].email);
    });
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
  Login(){
    alert(document.getElementById('email')?.nodeValue);
  }
}
