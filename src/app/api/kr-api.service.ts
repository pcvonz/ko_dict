import { Injectable } from '@angular/core';
import { ResponseContentType } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '@config/config';

@Injectable()
export class KrApiService {
  public krApiUrl = '/api/';
  public sort = 'dict'; // either dict or popular
  public num = 10; // number of entries to return
  public part = 'word'; // word, ip, dfn, exam
  public trans_lang = {
    'FullTranslation': 0,
    'English': 1,
    'Japanese': 2,
    'French': 3,
    'Spanish': 4,
    'Arabic': 5,
    'Mongolian': 6,
    'Vietnamese': 7,
    'Russian': 8,
  };
  public method = 'exact';

  private key = Config.api_key;
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/xml');
  }
  // https://krdict.korean.go.kr/api/search\?key\=D3384AD0C45D66E7FB29876161520723\&part\=word\&q\=가다
  searchDict(q) {
    return this.http.get(`${this.krApiUrl}search?key=${this.key}&part=${this.part}&q=${q}`, {
      headers: this.headers,
      responseType: 'text'
    });
  }

}
