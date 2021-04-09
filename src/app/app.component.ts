import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-load-sample';

  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  loadGreetComponent(): void {
    this.vcref.clear();
    import('../greet/greet.module').then(
      ({ GreetComponent }) => {
        const greetcomp = this.vcref.createComponent(
          this.cfr.resolveComponentFactory(GreetComponent)
        );
        greetcomp.instance.greetMessage = 'Data Passed from Parent';
        greetcomp.instance?.sendMessageEvent.subscribe(data => {
          console.log(data);
        });
      }
    );
  }
}
