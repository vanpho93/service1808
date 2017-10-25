import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [WordService]
})

export class ListComponent implements OnInit {
  words: Word[] = [];
  constructor(private wordService: WordService) {
    this.wordService.getWords()
    .then(words => this.words = words);
  }

  ngOnInit() {
  }

}

interface Word {
  en: string;
  vn: string;
}
