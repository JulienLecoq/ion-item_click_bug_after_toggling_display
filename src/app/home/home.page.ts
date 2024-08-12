import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCheckbox, IonButton, IonLabel, IonSpinner } from '@ionic/angular/standalone'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonSpinner,
    IonButton,
  ],
})
export class HomePage {
  showCheckbox = signal(true)

  stateChange() {
    console.log('Checkbox state changed.')
  }

  toggleDisplay() {
    this.showCheckbox.set(!this.showCheckbox())
  }
}
