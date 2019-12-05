import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionSwitchComponent } from './projection-switch.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { MapOlService } from '@ukis/map-ol';

describe('ProjectionSwitchComponent', () => {
  let component: ProjectionSwitchComponent;
  let fixture: ComponentFixture<ProjectionSwitchComponent>;
  let mapSvc: MapOlService;
  let projList: any[];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule, FormsModule],
      declarations: [ProjectionSwitchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionSwitchComponent);
    component = fixture.componentInstance;
    component.mapSvc = mapSvc;
    component.projList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
