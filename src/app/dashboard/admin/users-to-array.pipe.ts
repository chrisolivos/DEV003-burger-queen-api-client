import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersToArray'
})
export class UsersToArrayPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
    transform(object: any=[]): any {
 //     console.log(object)
    return Object.values(object);
  }

}
