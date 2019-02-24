import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public arrNotes: Array<any> = [];
	public txtNote = '';
	

	addNote() {
		this.arrNotes.push(this.txtNote);
   		this.txtNote = '';
   		
   		console.log(this.txtNote, this.arrNotes);
	}
	edit(index) {
    	this.txtNote = this.arrNotes[index];
    	this.arrNotes.splice(index, 1);
    	console.log(this.arrNotes[index]);
    }
	delete(index) {
		this.arrNotes.splice(index, 1);
		console.log(this.txtNote, this.arrNotes);
	}


}
