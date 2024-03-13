import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./album.model";
import {PhotoModel} from "./photo.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private _url: string = "http://localhost:3000/albums"
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this._url);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this._url}/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this._url, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this._url}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this._url}/${id}`);
  }

  getPhotosById(id: number): Observable<PhotoModel[]>{
    return this.http.get<PhotoModel[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
