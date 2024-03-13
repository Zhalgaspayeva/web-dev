import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {PhotoModel} from "../photo.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photosId: string;
  photos: PhotoModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.photosId = this.activatedRoute.snapshot.paramMap.get('id');
    this.albumsService.getPhotosById(parseInt(this.photosId))
      .subscribe(data => this.photos = data);
  }
}
