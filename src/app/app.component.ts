import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputerService } from '../_service/computer.service';
import { ComputerModel } from '../_model/computer/ComputerModel';
import { NgFor, NgIf } from '@angular/common';
import { ComputerComponent } from "./computer/computer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, ComputerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pc-accounting-ui';


}
