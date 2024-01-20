import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meme } from '../interface/meme-interface';

//https://imgflip.com/api
@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private httpClient: HttpClient) {}

  public getMeme$(): Observable<Meme> {
    return this.httpClient.get<Meme>('https://api.imgflip.com/get_memes');
  }
}
