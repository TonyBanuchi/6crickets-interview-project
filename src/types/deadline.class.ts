export class Deadline{
  public id: number;
  public dateTimeGMT: string;
  public name: string;

  constructor(
    id: number,
    dateTimeGMT: string,
    name: string
  ){
    this.id = id;
    this.dateTimeGMT = dateTimeGMT;
    this.name = name;
  }
}
