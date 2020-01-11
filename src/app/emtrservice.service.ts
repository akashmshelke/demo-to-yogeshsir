import { Injectable,Input,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmtrserviceService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor() { }

  navBarSwitch(value) {
    this.fire.emit(value);
  }

  getEmittedValueForNavSwitch() {
    return this.fire;
  }

}
