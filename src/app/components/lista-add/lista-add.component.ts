import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {
  public item: any = {
    name: ''
  }

  constructor(private serviceItems: ConexionService) { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.serviceItems.addItems(this.item);
    this.item.name = ''
  }
}
