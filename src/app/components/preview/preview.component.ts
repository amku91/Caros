import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ImageService } from '../../services/image/image.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PreviewComponent>) { }

  ngOnInit() {
    this.imageURL = this.data.url;
  }
  closeImage():void{
    this.dialogRef.close();
  }
}
