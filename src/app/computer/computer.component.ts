import { Component } from '@angular/core';
import { ComputerModel } from '../../_model/computer/ComputerModel';
import { ComputerService } from '../../_service/computer.service';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PutDeviceRequest } from '../../_model/device/PutDeviceRequest';
import { RemoveDeviceRequest } from '../../_model/device/RemoveDeviceRequest';
import { AddDeviceComponent } from "../add-device/add-device.component";

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [NgFor, NgIf, AddDeviceComponent, AddDeviceComponent],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

  computers: ComputerModel[] = [];
  isAddDevice: boolean = false;

  constructor(private computerService: ComputerService){

  }
  findComputers() {
    this.computers = []
    this.computerService.findAllComputers().subscribe(computers=>{
      console.log(computers)
      computers.forEach(computer=>this.computers.push(computer));
    })
   }
   
   removeDevice(computerIdParam: number, deviceIdParam: number){
      console.log(computerIdParam)
      console.log(deviceIdParam)
    this.computers.forEach(c=>{
      if(c.id===computerIdParam){
        c.devices.forEach(d=>{
          if(d.id===deviceIdParam){
              c.devices.splice(c.devices.indexOf(d), 1);
              var request: RemoveDeviceRequest = {computerId: computerIdParam, deviceId: deviceIdParam}
              this.computerService.removeDevice(request).subscribe(r=>{
                console.log(request);
                console.log(r.message)
              }
              );
              // console.log('устройство ' + d.title + ' удалено из компьюетра ' + c.title)
          }
        })
      }
    })
    
   }

   addDevice(){
    this.isAddDevice = !this.isAddDevice;
   }
}
