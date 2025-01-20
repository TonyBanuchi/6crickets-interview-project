import { Deadline } from "../types/deadline.class";
import { HardwareCamera } from "../types/hardwareCamera.class";

class TempDataService {
  public deadlines: Deadline[];
  public hardwareCameras: HardwareCamera[];

  constructor(){
    this.deadlines = [
      new Deadline(1, "Thu, 25 Dec 2025 05:01:00 GMT", "East Coast Christmas"),
      new Deadline(2, "Thu, 25 Dec 2025 08:01:00 GMT", "West Coast Christmas"),
    ];
    this.hardwareCameras = [
      new HardwareCamera(1, "Nikon", "3100H", 12, 100, 5, 25),
      new HardwareCamera(2, "Canon", "15H642", 3, 50, 1, 15),
      new HardwareCamera(3, "Panasonic", "5562L", 20, 200, 8, 30),
      new HardwareCamera(4, "Olympus", "8700LKE", 50, 350, 15, 50),
      new HardwareCamera(5, "Sony", "986200K", 100, 500, 25, 100),
      new HardwareCamera(6, "FujiFilm", "2112GLA", 1, 10, 0, 10)
    ];
  }
  
  public getDeadline(id: number):Deadline | undefined {
    return this.deadlines.find(x => x.id === id);
  }

  public getHardwareCamera(id: number): HardwareCamera | undefined {
    return this.hardwareCameras.find(x => x.id === id);
  }
}

export default new TempDataService();