import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceModel } from '../../_model/device/DeviceModel';
import { DeviceService } from '../../_service/device.service';
import { ComputerService } from '../../_service/computer.service';
import { PutDeviceRequest } from '../../_model/device/PutDeviceRequest';

@Component({
  selector: 'app-add-device',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './add-device-to-computer.component.html',
  styleUrl: './add-device-to-computer.component.css'
})
export class AddDeviceToComputerComponent {
  devices: DeviceModel[] =[]
  @Input() computerId: number = -1;
  @Output()
  computer = new EventEmitter();

  constructor(private deviceService: DeviceService, private computerService: ComputerService){
    deviceService.findAllFreeDevices().subscribe(devices=>{
      console.log(devices)
      devices.forEach(device=>this.devices.push(device))
    })
  }

  addDevice(deviceId: number){
    const request: PutDeviceRequest  = {deviceId: deviceId, computerId: this.computerId}
    this.computerService.putDevice(request).subscribe(response=>{
      this.computer.emit();
      console.log(response)
    })
  }
}
