import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, empty, of, observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/observable/interval';

import { ImageService } from '../../services/image/image.service';

import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
/**
 * @name GalleryComponent
 * @description Created to show image on home page and paginate to next set of blocks
 * @author Amit Kumar
 */
export class GalleryComponent implements OnInit {

  public preImageData: any = [];
  public perPageImageSet:number = 4;

  allImageData: any = [];
  newUploadedImageData: any = [];
  length: number = 0;
  pageSize: number = 15;
  pageSizeOptions: number[] = [10, 15, 25, 50];
  pageEvent: PageEvent;
  activePageData: any = [];
  constructor(public imageService: ImageService, public dialog: MatDialog) { }

  ngOnInit() {
    /** Load pre images from cloud */
    this.showPreImages();
  }

  /**
  * @name showPreImages
  * @param void
  * @description Used to handle pre images loading into page
  * @returns void
  */
  showPreImages() {
    /** Loop and load pre defined images */
    this.imageService.getPreImages().subscribe(data => {
      let rowData: any = data;
      console.log("Image data loaded");
      console.log(rowData);
      this.preImageData = rowData;
    }, error => {
      this.imageService.showSnackBar("Unable to connect with server.", "Ok");
    });
  }

  /**
  * @name getGridLayoutData
  * @param array of images object
  * @description Used to make five column grid layout
  * @returns formatted output
  */
  getGridLayoutData(rowData: any) {
    let result: any = [];
    let i: number;
    let j: number;
    let chunk: number = 5;
    /** make chunk array where each element containing 5 images */
    for (i = 0, j = rowData.length; i < j; i += chunk) {
      let temparray = rowData.slice(i, i + chunk);
      result.push(temparray);
    }
    return result;
  }

  /**
  * @name openViewDialog
  * @param image id, image type
  * @description Used to show zoomed view dialog
  * @returns void
  */
  openViewDialog(url: string) {
    var scope = this;
    let dialogRef = this.dialog.open(PreviewComponent, {
      width: 'auto',
      height: 'auto',
      panelClass: 'imageview',
      data: {
        url: {},
      }
    });
    /** Reload images after closing dialog */
    dialogRef.afterClosed().subscribe(result => {
      this.showPreImages();
    });
  }

}
