import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Abril';
  public gender: 'female' | 'male' = 'female';
  public invitationMap = {
    'female': 'invitarla',
    'male': 'invitarlo'
  }

  changeClient(): void {
    this.name = 'Rafa';
    this.gender = 'male';
  }


  // i18n Plural
  public clients: string[] = ['Abril', 'Marina', 'Bolibola', 'Georgia', 'Marcela', 'Natasha'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }


  // KeyValue Pipe
  public person = {
    name: 'Abril',
    age: 22,
    address: 'Monterrey, NL'
  }


  // Async Pipe
  // public myObservableTimer = interval(10000).pipe(
  //   tap( value => console.log('tap:', value) )
  // );

  // public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  //   setTimeout(() => {
  //     resolve( 'Tenemos data en la promesa.' );
  //     console.log( 'Tenemos data en la promesa.' );
  //     this.person.name = 'Otro nombre'
  //   }, 3500);
  // })


}
