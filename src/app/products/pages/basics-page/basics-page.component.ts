import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'abril';
  public nameUpper: string = 'ABRIL';
  public fullName: string = 'abRiL mARtIneZ';

}
