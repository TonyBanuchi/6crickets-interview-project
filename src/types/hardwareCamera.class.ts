export class HardwareCamera {
  public id: number;
  public brand: string;
  public model: string;
  public minDist: number;
  public maxDist: number;
  public minLight: number;
  public maxLight: number;

  constructor(
    id: number,
    brand: string,
    model: string,
    minDist: number,
    maxDist: number,
    minLight: number,
    maxLight: number
  ){
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.minDist = minDist;
    this.maxDist = maxDist;
    this.minLight = minLight;
    this.maxLight = maxLight;
  }
}