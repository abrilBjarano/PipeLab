import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title = 'aBRiL mArTinEz';

  constructor( private primengConfig: PrimeNGConfig ) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
