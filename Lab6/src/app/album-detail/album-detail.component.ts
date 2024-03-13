import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Album} from "../album.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  albumId: string;
  album: Album;
  titleToChange: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('id');
    this.albumsService.getAlbumById(parseInt(this.albumId)).subscribe(
      data => this.album = data
    );
  }

  saveTitle(): void {
    this.album.title = this.titleToChange
    this.albumsService.updateAlbum(this.album).subscribe();
  }
}
