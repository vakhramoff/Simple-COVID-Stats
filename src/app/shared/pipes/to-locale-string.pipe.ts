import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleString',
})
export class ToLocaleStringPipe implements PipeTransform {
  transform(value: number | string, ...args: unknown[]): unknown {
    return value.toLocaleString();
  }
}
