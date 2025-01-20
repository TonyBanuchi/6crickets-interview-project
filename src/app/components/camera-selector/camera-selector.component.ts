import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { selectHardwareCamera } from '../../../types/selectCamera.function';

@Component({
  selector: 'app-camera-selector',
  imports: [ReactiveFormsModule],
  templateUrl: './camera-selector.component.html',
  styleUrl: './camera-selector.component.scss'
})
export class CameraSelectorComponent implements OnInit{
  distance = new FormControl(0);
  lighting = new FormControl(0);
  invalidMessage = 'Both light and distance must have a value' 
  result: string = this.invalidMessage;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.distance.valueChanges.subscribe(value => {
      if(this.lighting.value === null || value === null){
        this.result = this.invalidMessage;
        return;
      }
       this.updateResult(this.lighting.value, value);   
    });

    this.lighting.valueChanges.subscribe(value => {
      if(this.distance.value === null || value === null){
        this.result = this.invalidMessage;
        return;
      }
       this.updateResult(value, this.distance.value);   
    });
  };

  updateResult(light: number, distance: number): void {
    const cameras = selectHardwareCamera(light, distance)
    this.result = cameras.length === 0 ? 'No Cameras Match Conditions' : cameras.reduce((acc, cur) => acc += `${cur.brand} ${cur.model}; `,'');
  };
}
