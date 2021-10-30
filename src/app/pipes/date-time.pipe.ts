import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let dateTime = new Date(value.toString());
    let answer: string = "";
    answer += dateTime.getDay();
    switch (dateTime.getMonth()) {
      case 0: answer += ' янв.'; break;
      case 1: answer += ' фев.'; break;
      case 2: answer += ' мар.'; break;
      case 3: answer += ' апр.'; break;
      case 4: answer += ' мая'; break;
      case 5: answer += ' июн.'; break;
      case 6: answer += ' июл.'; break;
      case 7: answer += ' авг.'; break;
      case 8: answer += ' сен.'; break;
      case 9: answer += ' окт.'; break;
      case 10: answer += ' ноя.'; break;
      case 11: answer += ' дек.'; break;
    }
    answer += " " + dateTime.getFullYear();
    answer += ", " + dateTime.getHours();
    answer += ":" + dateTime.getMinutes();
    return answer;
  }

}
