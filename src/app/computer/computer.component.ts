import { Component } from '@angular/core';
import { ComputerModel } from '../../_model/computer/ComputerModel';
import { ComputerService } from '../../_service/computer.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PutDeviceRequest } from '../../_model/device/PutDeviceRequest';
import { RemoveDeviceRequest } from '../../_model/device/RemoveDeviceRequest';
import { AddDeviceComponent } from "../add-device/add-device.component";
import { BlobOptions } from 'node:buffer';
import { FormsModule, NgModel } from '@angular/forms';
import { AddComputerComponent } from "../add-computer/add-computer.component";

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [NgFor, NgIf, AddDeviceComponent, AddDeviceComponent, FormsModule, AddComputerComponent, RouterModule],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

  computers: ComputerModel[] = [];
  isAddDevice: boolean = false;
  computerFor?: number = undefined;
  toWarehouse: boolean = true;

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
              console.log('устройство ' + d.title + ' удалено из компьюетра ' + c.title)
          }
        })
      }
    })
    
   }

   addDevice(computerId: number){
    if(this.computerFor === undefined){
      this.isAddDevice = true;
      this.computerFor = computerId;
    }else if(this.computerFor===computerId){
      this.computerFor = undefined;
      this.isAddDevice = false;
    }else{
      this.isAddDevice = true;
      this.computerFor = computerId;
    }
   }

   disassemble(computerId: number){
    console.log(this.toWarehouse)
      this.computerService.diassembleComputer(computerId, this.toWarehouse)
      .subscribe();
      this.computers.forEach(comp=>{
        if(comp.id===computerId)
        {
          comp.devices = []
          if(this.toWarehouse==false){
            this.computers.splice(this.computers.indexOf(comp),1)
          }
        }
      })
   }
}
