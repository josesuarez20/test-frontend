import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-news',
  templateUrl: './info-news.component.html',
  styleUrls: ['./info-news.component.scss'],
})
export class InfoNewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  principal = 
    {
      title:'Argentina vs. Brasil: ¿qué debo hacer si gané entradas en le sorte?',
      live: true,
      encuentro: {
        local: {
          logo: '/assets/img/Grupo 7950.png',
          nombre: 'Argentina',
          goles: 4,
        },
        visitante: {
          logo: '/assets/img/Grupo 7951.png',
          nombre: 'Argentina',
          goles: 4,
        },
      },
    }
  
}

