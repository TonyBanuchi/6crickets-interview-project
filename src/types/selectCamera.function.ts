import TempDataService from "../tempData/tempDataService";
import { HardwareCamera } from "./hardwareCamera.class";

export function selectHardwareCamera(lightLevel: number, distance: number): HardwareCamera[] {
  const result: HardwareCamera[] = [];
  [...TempDataService.hardwareCameras].forEach(hc => {
    if (
      distance >= hc.minDist &&
      distance <= hc.maxDist &&
      lightLevel >= hc.minLight &&
      lightLevel <= hc.maxLight
    ) { result.push(hc) }
  });

  return result;
}