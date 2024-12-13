import { Component } from '@angular/core';
import { DeviceModel } from '../../_model/device/DeviceModel';
import { DeviceService } from '../../_service/device.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices: DeviceModel[] =[]

  constructor(private deviceService: DeviceService){
    deviceService.findAllDevices().subscribe(devices=>{
      console.log(devices)
      devices.forEach(device=>this.devices.push(device))
    })
  }


}
