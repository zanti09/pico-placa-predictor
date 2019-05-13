# Pico y Placa Predictor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.8.

# How it works

Predicts whether or not a car can be on the road in a date and time specified according to the following rules:

![Pico y Placa Quito](/pico-y-placa-quito.png)

Can't be on the road:

![Can't be on the road](/appCant.png)

Can be on the road:

![Can be on the road](/appCan.png)

## Running the application

Run `npm install` or `yanr install` to install all dependencies.

Run `ng serve` for a dev server and navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

For testing use the file `src\app\pico-placa\objects-test.ts` wich has the following arrays:

The first array has a list of objects that contains the license plate, date and time when a car `can` be on the road:
```javascript
export const carsCanDrive = [
  {
    plate: "ABC001", //lincese plate
    datesTimesCanDrive: [ //dates and times the car can be on the
      {
        date: new Date(2019, 4, 13),//monday
        time: "06:00"
      },
      {
        date: new Date(2019, 4, 14),//tusday
        time: "08:00"
      },
      ...
    ]
  },
  {
    plate: "ABC009",
    datesTimesCanDrive: [
      ...
    ]
  },
  ...
];
```

And the second array has a list of objects that contains the license plate, date and time when a car `can't` be on the road: 

```javascript
export const carsCantDrive = [
  {
    plate: "ABC001",
    datesTimesCantDrive: [
      {
        date: new Date(2019, 4, 13),//monday
        time: "07:00"
      },
      {
        date: new Date(2019, 4, 13),//monday
        time: "16:31"
      },
      ...
    ]
  },
  {
    plate: "ABC005",
    datesTimesCantDrive: [
      ...
    ]
  },
  ...
];
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
