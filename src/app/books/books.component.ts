import { Component } from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  newId: number=0;
  newTitle: string='';
  newAuthor: string='';
  books: Book[]=[];
 constructor(){

 }

 ngOnInit() {
  // Fetch initial appointments when the component initializes
  // this.fetchAppointments();
    // Fetch initial appointments when the component initializes
let savedBooks=localStorage.getItem("books");
this.books=savedBooks?JSON.parse(savedBooks): [];
}
 addBook(){
  if(this.newAuthor.trim()!==''&&this.newTitle.trim()!==''){
    // create new Book object
    const newBook: Book={
      // id: this.newId,
      id: Date.now(),
      title: this.newTitle,
      author: this.newAuthor
    }
    this.books.push(newBook);
    // clear the input fields
    this.newTitle='';
    this.newAuthor='';

    localStorage.setItem("books",JSON.stringify(this.books));
  }
  else{
    console.error('Title and author required!')
  }
  
 }
onDeleteBook(id: number){
  const index=this.books.findIndex(book=>book.id===id);
  if(index!==-1){
    this.books.splice(index,1); // index of the book to delete and 1 (no of elements) to remove
    localStorage.setItem("books",JSON.stringify(this.books));
  }
  // this.books=this.books.filter(book=>book.id!==id);

}
}
