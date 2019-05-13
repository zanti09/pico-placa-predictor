import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaterialModule } from "../material/material.module";
import { PicoPlacaComponent } from "./pico-placa.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { carsCanDrive, carsCantDrive } from "./objects-test";

describe("PicoPlacaComponent", () => {
  let component: PicoPlacaComponent;
  let fixture: ComponentFixture<PicoPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicoPlacaComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should set the message as You can drive!", () => {
    for (let carCanDrive of carsCanDrive) {
      component.licensePlate.setValue(carCanDrive.plate);
      for (let dateTime of carCanDrive.datesTimesCanDrive) {
        component.date.setValue(dateTime.date);
        component.time.setValue(dateTime.time);
        component.verify();
        expect(component.message).toBe("You can drive!");
      }
    }
  });

  it("should set the message as You can't drive!", () => {
    for (let carCantDrive of carsCantDrive) {
      component.licensePlate.setValue(carCantDrive.plate);
      for (let dateTime of carCantDrive.datesTimesCantDrive) {
        component.date.setValue(dateTime.date);
        component.time.setValue(dateTime.time);
        component.verify();
        expect(component.message).toBe("You can't drive!");
      }
    }
  });
});
