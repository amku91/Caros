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
  private pageLength:number = 4;
  private activePage:number = 1;
  private activeDataSource: any = [];

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
      this.preImageData = rowData;
      this.activeDataSource = this.getBlockData(this.preImageData);
    }, error => {
      this.imageService.showSnackBar("Unable to connect with server.", "Ok");
    });
  }

  /**
  * @name getBlockData
  * @param array of images object
  * @description Used to make 4 block data
  * @returns formatted output according to block
  */
  getBlockData(rowData: any): any {
    let pageToNavigate = this.activePage * this.pageLength;
    pageToNavigate = (rowData.length > pageToNavigate ? pageToNavigate : rowData.length);
    let startIndex = ((this.activePage - 1) * this.pageLength);
    console.log("starrt index="+startIndex);
    console.log("pagetonavigate="+pageToNavigate);
    return rowData.slice(startIndex, pageToNavigate);
  }

  /**
  * @name openViewDialog
  * @param image url
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
