import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

// 'abril' | toggleCase = 'ABRIL'
// 'ABRIL' | toggleCase = 'abril'


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, mode: string ): string {

    return mode === 'upper'
      ? value.toUpperCase()
      : mode === 'lower'
        ? value.toLowerCase()
        : value;
  }
}
