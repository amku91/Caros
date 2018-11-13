import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, } from '@angular/http';
import { Observable, empty, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * @name ImageService
 * @description Created to manage all local storage related operation and pre image data loading
 * @author Amit Kumar
 */
export class ImageService {
  preImageDataURI: string = "https://demo3235729.mockable.io/carousel/getaAll";
  storageKeyName = environment.localStorageKey;
  constructor(public snackBar: MatSnackBar, private _http: Http) { }

  /**
  * @name getPreImages
  * @param void
  * @description Used to fetch pre images data json; block wise
  * @returns json array observable
  */
  getPreImages() {
    /** Load some pre d */
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this._http
      .get(this.preImageDataURI, options)
      .map(response => <string>response.json());
  }

  /**
    * @name showSnackBar
    * @param message
    * @param action
    * @description Used to show notifications
    * @returns void
    */
  showSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
