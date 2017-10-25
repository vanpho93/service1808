import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [WordService]
})
export class ListComponent implements OnInit {

  constructor(private wordService: WordService) {
    this.wordService.getWords()
    .then(words => console.log(words));
  }

  ngOnInit() {
  }

}
