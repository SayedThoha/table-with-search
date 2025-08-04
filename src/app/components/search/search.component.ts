import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  
  @Output()
  emitSearchText = new EventEmitter();

  onInput(e: Event) {
    let element = e.target as HTMLInputElement;
    let value = element.value;
    this.emitSearchText.emit(value);
  }

}
