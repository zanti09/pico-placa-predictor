export class PicoPlaca {
  licensePlate: string;
  date: Date;
  time: string;

  constructor(licensePlate: string, date: Date, time: string) {
    this.licensePlate = licensePlate;
    this.date = date;
    this.time = time;
  }

  //weather or not the car can drive in the date and time specified
  canDrive(): boolean {
    let lastDigit = this.licensePlate.substring(this.licensePlate.length - 1);
    let hourMinutes = this.time.split(":");
    this.date.setHours(parseInt(hourMinutes[0]));
    this.date.setMinutes(parseInt(hourMinutes[1]));

    let minTimeMornig = new Date();
    minTimeMornig.setTime(this.date.getTime());
    minTimeMornig.setHours(7);
    minTimeMornig.setMinutes(0);
    let maxTimeMornig = new Date();
    maxTimeMornig.setTime(this.date.getTime());
    maxTimeMornig.setHours(9);
    maxTimeMornig.setMinutes(30);

    let minTimeEvening = new Date();
    minTimeEvening.setTime(this.date.getTime());
    minTimeEvening.setHours(16);
    minTimeEvening.setMinutes(0);
    let maxTimeEvening = new Date();
    maxTimeEvening.setTime(this.date.getTime());
    maxTimeEvening.setHours(19);
    maxTimeEvening.setMinutes(30);

    let isInPicoPlacaTime =
      (this.date >= minTimeMornig && this.date <= maxTimeMornig) ||
      (this.date >= minTimeEvening && this.date <= maxTimeEvening);

    switch (lastDigit) {
      case "1":
      case "2":
        return (
          this.date.getDay() != 1 ||
          (this.date.getDay() == 1 && !isInPicoPlacaTime)
        );
      case "3":
      case "4":
        return (
          this.date.getDay() != 2 ||
          (this.date.getDay() == 2 && !isInPicoPlacaTime)
        );
      case "5":
      case "6":
        return (
          this.date.getDay() != 3 ||
          (this.date.getDay() == 3 && !isInPicoPlacaTime)
        );
      case "7":
      case "8":
        return (
          this.date.getDay() != 4 ||
          (this.date.getDay() == 4 && !isInPicoPlacaTime)
        );
      case "9":
      case "0":
        return (
          this.date.getDay() != 5 ||
          (this.date.getDay() == 5 && !isInPicoPlacaTime)
        );
      default:
        return false;
    }
  }
}
