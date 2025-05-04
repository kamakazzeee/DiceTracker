import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Call } from './models/call';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'DiceTracker';
  public diceA = 0;
  public diceB = 0;
  public roll: Call[] = [new Call(1, 6), new Call(2, 4)];

  onClickAces() {
    console.log('Button was clicked!');
    this.roll.push(new Call(1, 1));
  }

  onClickAceDuece() {
    console.log('Button was clicked!');
    this.roll.push(new Call(2, 1));
  }

  onClickEasyFour() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 1));
  }
  onClickHardFour() {
    console.log('Button was clicked!');
    this.roll.push(new Call(2, 2));
  }
  onClickFive41() {
    console.log('Button was clicked!');
    this.roll.push(new Call(4, 1));
  }
  onClickFive32() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 2));
  }
  onClickEasySix51() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 1));
  }
  onClickHardSix() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 3));
  }
  onClickEasySix42() {
    console.log('Button was clicked!');
    this.roll.push(new Call(4, 2));
  }
  onClickSeven61() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 1));
  }
  onClickSeven52() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 2));
  }
  onClickSeven34() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 4));
  }
  onClickEasyEight53() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 3));
  }
  onClickHardEight() {
    console.log('Button was clicked!');
    this.roll.push(new Call(4, 4));
  }
  onClickEasyEight62() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 2));
  }
  onClickNine54() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 4));
  }
  onClickNine63() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 3));
  }
  onClickEasyTen() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 4));
  }
  onClickHardTen() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 5));
  }
  onClickYoEleven() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 5));
  }
  onClickTwelve() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 6));
  }
  onClickNoRoll() {
    console.log('Button was clicked!');
    this.roll.push(new Call(7, 7));
  }
  public trackDice() {
    this.roll.push(new Call(this.diceA, this.diceB));
  }
}
