import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note-list/note.model'

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddNote(form: NgForm) {
    const value = form.value;
    const newNote = new Note(value.starttime, value.endtime, value.location,
      value.category, value.importance, value.details)
    console.log(newNote);
  }
}
