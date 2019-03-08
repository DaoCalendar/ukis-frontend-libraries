import { Component, OnInit, QueryList, AfterViewInit, ContentChildren, Input, AfterContentInit } from '@angular/core';
import { StepperElementComponent } from '../stepper-element/stepper-element.component';
import { IStepperClickHandler } from './stepper-click-handler';


/**
 * This is the container of stepper-elements. 
 * Its purpose is to be aware of all stepper-elements and notify a user-defined clickHandler of click-events to any of its children.
 */


@Component({
  selector: 'ukis-stepper-menu',
  templateUrl: './stepper-menu.component.html',
  styleUrls: ['./stepper-menu.component.css']
})
export class StepperMenuComponent implements OnInit, AfterContentInit {

  @Input()
  clickHandler: IStepperClickHandler;
  @ContentChildren(StepperElementComponent)
  private stepperElements: QueryList<StepperElementComponent>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    // subscribe to clicks
    this.stepperElements.forEach((child: StepperElementComponent) => {
      child.exposeClickEvent().subscribe((clicked: boolean) => {
        this.handleClick(child);
      });
    });

    // set initial state
    Promise.resolve(null).then(() => {
      this.clickHandler.setInitialStepperState(this.stepperElements.toArray());
    });
  }

  private handleClick(clickedElement: StepperElementComponent) {
    this.clickHandler.handleStepperClick(clickedElement, this.stepperElements.toArray());
  }

}