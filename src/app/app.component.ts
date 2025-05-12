import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Call } from './models/call';
import { CrapsCall } from './models/CrapsCall';
import { CrapsRoll } from './models/CrapsRoll';


@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'DiceTracker';
  public diceA = 0;
  public diceB = 0;
  public roll: Call[] = []; 
  public outcome: CrapsCall = CrapsCall.NO_ROLL;
  public CrapsCall = CrapsCall;
  public rollObject = new CrapsRoll();

  onClickTwo11() {
    console.log('Button was clicked!');
    this.rollObject.rolls.push(new Call(1, 1));
  }

  onClickThree21() {
    console.log('Button was clicked!');
    this.roll.push(new Call(2, 1));
  }

  onClickFourEasy31() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 1));
  }
  onClickFourHard22() {
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
  onClickSixEasy51() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 1));
  }
  onClickSixHard33() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 3));
  }
  onClickSixEasy42() {
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
  onClickSeven43() {
    console.log('Button was clicked!');
    this.roll.push(new Call(3, 4));
  }
  onClickEightEasy53() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 3));
  }
  onClickEightHard44() {
    console.log('Button was clicked!');
    this.roll.push(new Call(4, 4));
  }
  onClickEightEasy62() {
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
  onClickTenEasy64() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 4));
  }
  onClickTenHard55() {
    console.log('Button was clicked!');
    this.roll.push(new Call(5, 5));
  }
  onClickElevenYo65() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 5));
  }
  onClickTwelve66() {
    console.log('Button was clicked!');
    this.roll.push(new Call(6, 6));
  }
  onClickNoRoll00() {
    console.log('Button was clicked!');
    this.roll.push(new Call(0, 0));
  }
  public trackDice() {
    this.roll.push(new Call(this.diceA, this.diceB));
  }
}
