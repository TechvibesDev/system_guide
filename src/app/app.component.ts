import { Component } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'system_guide';
  active: number | undefined;
	disabled = true;

	onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 3) {
			changeEvent.preventDefault();
		}
	}

	toggleDisabled() {
		this.disabled = !this.disabled;
		if (this.disabled) {
			this.active = 1;
		}
	}
}
