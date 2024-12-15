import { Component } from '@angular/core';
import { ComputerService } from '../../_service/computer.service';
import { AddEmptyComputerRequest } from '../../_model/computer/AddEmptyComputerRequest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-computer',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './add-computer.component.html',
  styleUrl: './add-computer.component.css'
})
export class AddComputerComponent {

  title: string = "Новый компьютер";
  type: string = "pc";
  constructor(private computerService: ComputerService){

  }

  addComputer(){
    const request: AddEmptyComputerRequest = {title: this.title, type: this.type}
    this.computerService.addComputer(request).subscribe(response=>console.log(response))
  }
}
