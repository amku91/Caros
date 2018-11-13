import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app.routing';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatTooltipModule} from '@angular/material/tooltip';

import { GalleryComponent } from './components/gallery/gallery.component';
import { PreviewComponent } from './components/preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [
  ],
  entryComponents: [
    PreviewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
