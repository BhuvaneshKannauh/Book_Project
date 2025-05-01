import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private books: Book[] = [];

  private readingList: Book[] = [];

  getBooks() {
    return this.books;
  }

  getBookById(id: number) {
    return this.books.find(book => book.id === id);
  }

  addToReadingList(book: Book) {
    this.readingList.push(book);
    this.saveReadingList();
  }

  getReadingList() {
    return this.readingList;
  }

  removeFromReadingList(book:Book){
    this.readingList=this.readingList.filter(b => b.id !== book.id);
    this.saveReadingList();

  }

  private saveReadingList(){
    localStorage.setItem('readingList', JSON.stringify(this.readingList));
  }

  loadReadingList(){
    const savedList = localStorage.getItem('readingList');
    if(savedList){
      this.readingList = JSON.parse(savedList);
    }
  }
}
