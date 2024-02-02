import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comunidadesS: any;
  provinciasS: any;
  townS: any;
  jsonData: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('assets/arbol.json').subscribe(data => {
      this.jsonData = data;
    });
  }

  onComunidadChange(){
    this.provinciasS = null;
    this.townS = null;
  }
}
