import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() data: number[];
  @Input() labels: String[];
  @Input() charType: String;
  @Input() leyenda: String;

  constructor() { }

  ngOnInit() {
  }

}
