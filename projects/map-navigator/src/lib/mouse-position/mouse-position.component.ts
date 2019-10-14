import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapOlService } from '@ukis/map-ol';
import { transform as olTransform, get as olGetProjection, projection as olProjection } from 'ol/proj';

interface ISelectProjection {
  title: string;
  value: string;
}

@Component({
  selector: 'ukis-mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.scss']
})
export class MousePositionComponent implements OnInit, OnDestroy {

  public mapCoordinates: [number, number] = [0, 0];
  public projections: ISelectProjection[];
  mapProjection: olProjection;
  public selectedProjection: string;
  public precision = 2;
  x = 'lon';
  y = 'lat';
  constructor(public mapSvc: MapOlService) { }

  ngOnInit() {
    this.mapProjection = this.mapSvc.getProjection();
    console.log(this.mapProjection);
    this.projections = [
      { title: 'EPSG:4326', value: 'EPSG:4326', },
      { title: this.mapProjection.getCode(), value: this.mapProjection.getCode() }
    ];

    this.selectedProjection = this.projections[0].value;
    this.mapSvc.map.on('pointermove', this.mapMoveSubscription);
  }

  ngOnDestroy() {
    this.mapSvc.map.un('pointermove', this.mapMoveSubscription);
  }

  mapMoveSubscription = (evt) => {
    if (evt.coordinate) {
      this.mapCoordinates = olTransform(evt.coordinate, this.mapProjection, olGetProjection(this.selectedProjection));
    }
  }

  public onChangeProj(epsgcode) {
    if (epsgcode === 'EPSG:4326') {
      this.x = 'lon';
      this.y = 'lat';
    } else {
      this.x = 'x';
      this.y = 'y';
    }
    const oldSelection = this.selectedProjection;
    this.selectedProjection = epsgcode;
    this.mapCoordinates = olTransform(this.mapCoordinates, olGetProjection(oldSelection), olGetProjection(this.selectedProjection));
  }

  public toPrecision(input: number, value: number) {
    return input.toFixed(value);
  }
}