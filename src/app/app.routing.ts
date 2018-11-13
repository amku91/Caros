import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';



export const routes: Routes =[
    { path: 'carousel', component: GalleryComponent },
    { path: '',redirectTo: 'carousel', pathMatch: 'full'},
    { path: "**",redirectTo:"carousel"}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }