import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DevicesComponent } from "../devices/devices.component";

@Component({
  selector: 'app-add-device',
  standalone: true,
  imports: [NgFor, NgIf, DevicesComponent],
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.css'
})
export class AddDeviceComponent {

}
