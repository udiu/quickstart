import { Component } from '@angular/core';

@Component({
  // A selector that specifies a simple CSS selector for an HTML element that represents the component.
  selector: 'my-app',
  // A template that tells Angular how to render the component's view
  template: '<h1>My First Angular 2 App</h1>'
})
// A component class that controls the appearance and behavior of a view through its template
export class AppComponent { }


@Component({
    selector: 'my-label-input',
    template: '<div><span>First Label</span><input id="firstinput">Input</input></div>'
  })
export class LabelInputComponent { }
