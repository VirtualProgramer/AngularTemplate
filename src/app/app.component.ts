import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '資料綁定 & DatePipe ';
  mustache = '{{來自component.ts的變數}}';
  datePipe  = '{{today | date: "yyyy-MM-dd" }}';
}


