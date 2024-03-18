import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number ): string {

      switch( value ) {

        case 0:
          return 'Red';
        case 1:
          return 'Black';
        case 2:
          return 'Blue';
        case 3:
          return 'Green';
        default:
          return 'Unknown';
      }

  }

}
