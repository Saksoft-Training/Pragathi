import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  //#region Methods
  log(msg: string) {
    console.log(`[Logger ${new Date().toLocaleTimeString()}] ${msg}`);
  }
  //#endregion
}
