import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../_service/device.service';
import { AddDeviceRequest } from '../../_model/device/AddDeviceRequest';

@Component({
  selector: 'app-add-new-device',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-device.component.html',
  styleUrl: './add-new-device.component.css'
})
export class AddNewDeviceComponent {
  request: AddDeviceRequest  = {
      type:"cpu",
      title:"",
      price:0
  }

  constructor(private deviceService: DeviceService){

  }

  addNewDevice(){
    console.log(this.request);
    this.deviceService.addNewDevice(this.request).subscribe(response=>console.log(response))
  }
}
