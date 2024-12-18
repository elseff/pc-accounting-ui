import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DocumentService } from '../../_service/document.service';
import { DocumentModel } from '../../_model/DocumentModel';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  docs: DocumentModel[] = []
  link: string = 'http://localhost:8081/documents/'
  
  constructor(private documentService: DocumentService){

  }

  findAll(){
    this.docs = []
    this.documentService.findAll().subscribe(d=>{
      d.forEach(element => {
        this.docs.push(element)
      });
    })
  }
}
