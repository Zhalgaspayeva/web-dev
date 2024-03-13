import {Component, OnInit} from '@angular/core';
import { AlbumsService } from "../albums.service";
import { Album } from "../album.model";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];

  constructor(private _albumsService: AlbumsService) { }

  ngOnInit() {
    this._albumsService.getAlbums()
      .subscribe(data => this.albums = data);
  }

  removeById(id: number) {
    console.log(id)
    this._albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id)
    }, error => {
      console.log('Error deleting album: ', error)
    })
  }

}
