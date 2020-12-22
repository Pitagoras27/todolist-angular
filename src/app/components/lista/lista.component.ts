import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: any
  constructor(private serviceItems: ConexionService) {
    this.serviceItems.getItems().subscribe(res => {
      this.items = res
      console.log(this.items, '<<*--s---');
    });
  }

  ngOnInit(): void {
  }

}
