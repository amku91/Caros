import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { PreviewComponent } from '../../components/preview/preview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routing';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule, MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpModule } from '@angular/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GalleryComponent,
        PreviewComponent,
        NavbarComponent
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        MatDialogModule,
        MatTableModule,
        MatCardModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatSidenavModule,
        MatSliderModule,
        MatButtonModule,
        MatSnackBarModule,
        MatChipsModule,
        MatDatepickerModule,
        MatRadioModule,
        MatStepperModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        HttpModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { url: "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411112/imago/158466-800x600.jpg" } },
        { provide: MatDialogRef, useValue: { MatDialogRef } },
        { provide: MatDialogModule, useValue: { url: "https://res.cloudinary.com/remphi-internet-pvt-ltd/image/upload/v1539411112/imago/158466-800x600.jpg" } },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
