import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() { }
}
