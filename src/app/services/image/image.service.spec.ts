import { TestBed, inject, async } from '@angular/core/testing';

import { ImageService } from './image.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ImageService', () => {
  let service: ImageService;
  let backend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, MatSnackBarModule],
      providers: [
        ImageService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));

  describe('getPreImages()', () => {

    it('should return an Observable<Array<Images>>',
        inject([ImageService, XHRBackend], (imageService, mockBackend) => {

        const mockResponse = {
          "resources": [
            {
              "title": "First Block",
              "images": ["https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411112/imago/158466-800x600.jpg",
              "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411118/imago/189568-800x600.jpg",
              "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411122/imago/197562-800x600.jpg",
              "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411418/imago/460026-800x600.jpg",
              "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411107/imago/475019-800x600.jpg"]
              }
            ]
          };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        imageService.getPreImages().subscribe((data) => {
          expect(data.resources.length).toBe(1);
          expect(data.resources[0].title).toEqual("First Block");
        });

    }));
  });
});
