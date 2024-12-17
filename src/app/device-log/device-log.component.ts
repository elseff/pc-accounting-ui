import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComputerDeviceLogModel } from '../../_model/log/ComputerDeviceLogMode';
import { DeviceLogService } from '../../_service/device-log.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-log',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterModule],
  templateUrl: './device-log.component.html',
  styleUrl: './device-log.component.css'
})
export class DeviceLogComponent {
  logs: ComputerDeviceLogModel[] = []

  constructor(private service: DeviceLogService){

  }

  findAllLogs(){
    this.logs = []
    this.service.findAllLogs().subscribe(logs=>{
      logs.forEach(log=>{
        this.logs.push(log)
      })
    })
  }
}
