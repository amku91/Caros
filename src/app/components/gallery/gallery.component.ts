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

  private preImageData: any = [];
  private pageLength:number = 4;
  private activePage:number = 1;
  private activeDataSource: any = [];
  private disableBackArrow:boolean = true;
  private disableForwardArrow:boolean = true;
  private showLoading:boolean = true;

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
      /**Hide loading */
      this.showLoading = false;
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
    let startIndex = ((this.activePage - 1) * this.pageLength);
    /**Loop till row data lengh endpoint */
    if(rowData.length > pageToNavigate){
      pageToNavigate = pageToNavigate;
      this.disableForwardArrow = false;
    }else{
      pageToNavigate = rowData.length;
      this.disableForwardArrow = true;
    }
    /**Check if previous data is left or not */
    if(startIndex == 0){
      this.disableBackArrow = true;
    }else{
      this.disableBackArrow = false;
    }
    
    console.log("starrt index="+startIndex);
    console.log("pagetonavigate="+pageToNavigate);
    return rowData.slice(startIndex, pageToNavigate);
  }

  loadNextImage(): void{
    this.activePage = this.activePage + 1;
    console.log(this.activePage);
    this.activeDataSource = this.getBlockData(this.preImageData);
    console.log(this.preImageData);
  }

  loadPreviousImage():void{
    this.activePage = this.activePage - 1;
    this.activeDataSource = this.getBlockData(this.preImageData);
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
        url: url,
      }
    });
    /** Reload images after closing dialog */
    dialogRef.afterClosed().subscribe(result => {
      this.showPreImages();
    });
  }

}
