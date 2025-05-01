import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.css'
})
export class ReadingListComponent {}