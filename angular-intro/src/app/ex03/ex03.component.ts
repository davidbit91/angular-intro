import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss'],
})
export class Ex03Component implements OnInit {
  championList = [
    {
      champion: 'Los Angeles Lakers',
      year: '2020',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1920px-Los_Angeles_Lakers_logo.svg.png',
      championUrl: 'https://es.wikipedia.org/wiki/Los_Angeles_Lakers',
      bestPlayers: [
        'Kostas Antetokounmpo',
        'Kentavious Caldwell-Pope',
        'Marc Gasol',
        'Alex Caruso',
      ],
    },
    {
      champion: 'Toronto Raptors',
      year: '2019',
      logo: 'https://images.vexels.com/media/users/3/132484/isolated/preview/72fc44eba23061277b756e363ca07075-toronto-raptors-logo-by-vexels.png',
      championUrl: 'https://es.wikipedia.org/wiki/Toronto_Raptors',
      bestPlayers: [
        'OG Anunoby',
        'Chris Boucher',
        'Oshae Brissett',
        'Terence David',
      ],
    },
    {
      champion: 'Golden State Warriors',
      year: '2017-2018',
      logo: 'https://i.pinimg.com/originals/64/3b/db/643bdb48540f70aed4c55ce2e3cee473.png',
      championUrl: 'https://es.wikipedia.org/wiki/Golden_State_Warriors',
      bestPlayers: [
        'Ky Bowman',
        'Marquese Chriss',
        'Stephen Curry',
        'Draymond Green',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
