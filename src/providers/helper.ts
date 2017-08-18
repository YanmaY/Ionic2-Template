import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from './http.service';
/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Helper {

  constructor(private httpService: HttpService, private storage: Storage) {
  }

  GetLastOperateDate() {
    let url: string = "/sys/loadconfig/GetLastOperateDate";
    return this.httpService.get(url).map((res: Response) => res.json());
  }

//   HasPopedom(key): Promise<boolean> {
//     return new Promise((resolve) => {
//       this.storage.get('popedom').then(data => {
//         let res: boolean;
//         if (data) {
//           res = this.FindPopedom(key, data);
//           resolve(res);
//         }
//         else
//           this.GetPopedomsByUserId().subscribe(res => {
//             this.storage.set('popedom', JSON.stringify(res.Data));
//             res = this.FindPopedom(key, res.Data);
//             resolve(res);
//           });
//       })
//     });
//   }

//   FindPopedom(key, data): boolean {
//     let array;
//     if (typeof (data) == 'string')
//       array = JSON.parse(data);
//     else
//       array = data;
//     for (var index = 0; index < array.length; index++) {
//       if (array[index] == key)
//         return true;
//     }
//     return false;
//   }

//   GetPopedomsByUserId() {
//     let url: string = this.hostUrl + "/Sys/SysPopedom/GetCodeByUserId";
//     return this.httpService.get(url).map((res: Response) => res.json());
//   }
}
