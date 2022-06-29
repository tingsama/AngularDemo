import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from './note.model'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Output() noteWasSelected = new EventEmitter<Note>();
  storedNotes: Note[] = [
    new Note(new Date(), new Date(), "here", "todos", true, "details"),
    new Note(new Date(), new Date(), "there", "reminders", true, "second details"),
    new Note(new Date(), new Date(), "where", "reminders", true, "third details"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnSelectedNote(selectedNote: Note) {
    this.noteWasSelected.emit(selectedNote);
  }
}
