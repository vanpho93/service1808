import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class WordService {
    constructor(private http: Http) { }

    getWords(): Promise<Word[]> {
        const url = 'http://localhost:3000/words';
        return this.http.get(url)
            .toPromise()
            .then(res => res.json());
    }
}

interface Word {
    en: string;
    vn: string;
}
