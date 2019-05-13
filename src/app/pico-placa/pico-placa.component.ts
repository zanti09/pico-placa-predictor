import { Component, OnInit } from '@angular/core';
import { PicoPlaca } from '../class/pico-placa';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pico-placa',
  templateUrl: './pico-placa.component.html',
  styleUrls: ['./pico-placa.component.css']
})
export class PicoPlacaComponent implements OnInit {
  message:string ="";
  icon: string="";
  licensePlate = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  time = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  verify(){
    let picoPlaca = new PicoPlaca(
      this.licensePlate.value,
      this.date.value,
      this.time.value
    );

    if(picoPlaca.canDrive()){
      this.message = "You can drive!" ;
      this.icon = "thumb_up"
    }else{
      this.message = "You can't drive!"
      this.icon = "thumb_down"
    }

  }

  emptyMessage(){
    this.message = "";
  }

}
