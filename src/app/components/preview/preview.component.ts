import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ImageService } from '../../services/image/image.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
/**
 * @name PreviewComponent
 * @description Created to show zoomed view of image
 * @author Amit Kumar
 */
export class PreviewComponent implements OnInit {

  public imageURL: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private imageService: ImageService) { }

  ngOnInit() {
    this.imageURL = this.data.url;
  }
}
