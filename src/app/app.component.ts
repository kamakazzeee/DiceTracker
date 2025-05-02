import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Call } from './models/call';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'DiceTracker';
  public diceA = 0;
  public diceB = 0;
public roll:Call[] = [new Call(1, 6), new Call(2,4)];
  public trackDice() {
    this.roll.push(new Call(this.diceA, this.diceB));
  }

}
