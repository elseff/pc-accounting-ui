import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeviceService } from '../../_service/device.service';
import { DeviceModel } from '../../_model/device/DeviceModel';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [RouterModule, FormsModule, NgFor, NgIf, 
    CommonModule,],
  templateUrl: './device.component.html',
  styleUrl: './device.component.css'
})
export class DeviceComponent {
  constructor(private deviceSerivce: DeviceService){

  }
  devices: DeviceModel[] = []

  findAllDevices(){
    this.devices= []
    this.deviceSerivce.findAllDevices().subscribe(response=>{
      response.forEach(device=>{
        this.devices.push(device);
      })
    })
  }
}
