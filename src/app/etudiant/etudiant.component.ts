import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nom: string = 'Manirambona';
  prenom: string = 'Alain Veron';
  tapingValue: string = '';

  onClick() {
    console.log('i am clicked');
  }

  onTap(event: Event) {
    this.tapingValue = (<HTMLInputElement>event.target).value;
  }
}
