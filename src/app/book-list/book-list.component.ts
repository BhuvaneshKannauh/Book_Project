import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-book-list',
  imports: [MatFormFieldModule, MatInputModule,FormsModule,CommonModule,MatTableModule,MatIconModule,MatTooltipModule,MatSortModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements AfterViewInit{

  constructor(private route:Router){
    this.dataSource.sort = this.sort

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort!: MatSort;

  ListOfBooks:any[]=[
    {title: 'Harry Potter', author:'J K Rowling', genre:'Fantasy', year:'2002'},
    {title: 'Mission Impossible', author:'Bruce Geller', genre:'Thriller', year:'2007'},
    {title: 'Kanchana', author:'Lawrence', genre:'Horror', year:'2012'}
  ];

  ReadingList:any[]=[];

  displayedColumns: string[] = ['title', 'author', 'genre', 'year', 'action'];
  dataSource = new MatTableDataSource(this.ListOfBooks);

  displayedColumns2: string[] = ['books', 'action'];
  dataSource2 = new MatTableDataSource(this.ReadingList);

  description(title:any){
    sessionStorage.setItem('title', title)
    this.route.navigate(['/book-details']);

  }

  add(elements:any){
     this.ReadingList.push(elements);
     this.dataSource2 = new MatTableDataSource(this.ReadingList)
  }

  delete(elements:any){
    let index = this.ReadingList.indexOf(elements);
    //alert(index)
    this.ReadingList.splice(index,1);
    this.dataSource2 = new MatTableDataSource(this.ReadingList)
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

}
}

