import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() noteItem!: Note;
  @Output() selectedNoteItem = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelectedNoteItem() {
    console.log(this.selectedNoteItem);
    this.selectedNoteItem.emit();
  }

}
