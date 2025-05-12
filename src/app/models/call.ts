import { CrapsCall } from './CrapsCall';

export class Call {
  public diceA: number = 0;
  public diceB: number = 0;
  public outcome: CrapsCall = CrapsCall.NO_ROLL;
  public isPoint: boolean = false;
  public result: string = "";
 // public isComeOut: boolean = false;
  public diceTotal: number = 0;

 
  constructor(diceA: number, diceB: number);
  constructor(outcome: CrapsCall);
  constructor(...myarray: any[]){

    if (myarray.length === 2) {
      this.diceA = myarray[0];
      this.diceB = myarray[1];
      this.result = "";
      this.isPoint = false;
      

      if (this.diceA === 0 || this.diceB === 0) {
        this.outcome = CrapsCall.NO_ROLL;
      }
      else if (this.diceA === 1 && this.diceB === 1) {  
        this.outcome = CrapsCall.ACES_11;
      }
      else if ((this.diceA === 2 && this.diceB === 1) || (this.diceA === 1 && this.diceB === 2)) {  
        this.outcome = CrapsCall.ACE_DEUCE_21;
      }
      else if ((this.diceA === 3 && this.diceB === 1)|| (this.diceA === 1 && this.diceB === 3)) { 
        this.outcome = CrapsCall.EASY_FOUR_31;
      }
      else if (this.diceA === 2 && this.diceB === 2) {
        this.outcome = CrapsCall.HARD_FOUR_22;
      }
      else if ((this.diceA === 4 && this.diceB === 1) || (this.diceA === 1 && this.diceB === 4)) {
        this.outcome = CrapsCall.FIVE_41;
      }
      else if ((this.diceA === 3 && this.diceB === 2) || (this.diceA === 2 && this.diceB === 3)) {
        this.outcome = CrapsCall.FIVE_32;
      }
      else if ((this.diceA === 5 && this.diceB === 1) || (this.diceA === 1 && this.diceB === 5)) {
        this.outcome = CrapsCall.EASY_SIX_51;
      }
      else if (this.diceA === 3 && this.diceB === 3) {
        this.outcome = CrapsCall.HARD_SIX_33;
      }
      else if ((this.diceA === 4 && this.diceB === 2) || (this.diceA === 2 && this.diceB === 4)) {
        this.outcome = CrapsCall.EASY_SIX_42;
      }
      else if ((this.diceA === 6 && this.diceB === 1) || (this.diceA === 1 && this.diceB === 6)) {
        this.outcome = CrapsCall.SEVEN_61;
      }
      else if ((this.diceA === 5 && this.diceB === 2) || (this.diceA === 2 && this.diceB === 5)) {
        this.outcome = CrapsCall.SEVEN_52;
      }
      else if ((this.diceA === 3 && this.diceB === 4) || (this.diceA === 4 && this.diceB === 3)) {
        this.outcome = CrapsCall.SEVEN_43;
      }
      else if ((this.diceA === 5 && this.diceB === 3) || (this.diceA === 3 && this.diceB === 5)) {
        this.outcome = CrapsCall.EASY_EIGHT_53;
      }
      else if (this.diceA === 4 && this.diceB === 4) {
        this.outcome = CrapsCall.HARD_EIGHT_44;
      }
      else if ((this.diceA === 6 && this.diceB === 2) || (this.diceA === 2 && this.diceB === 6)) {
        this.outcome = CrapsCall.EASY_EIGHT_62;
      }
      else if ((this.diceA === 5 && this.diceB === 4) || (this.diceA === 4 && this.diceB === 5)) {
        this.outcome = CrapsCall.NINE_54;
      }
      else if ((this.diceA === 6 && this.diceB === 3) || (this.diceA === 3 && this.diceB === 6)) {
        this.outcome = CrapsCall.NINE_63;
      }
      else if ((this.diceA === 6 && this.diceB === 4) || (this.diceA === 4 && this.diceB === 6)) {
        this.outcome = CrapsCall.TEN_64;
      }
      else if (this.diceA === 5 && this.diceB === 5) {
        this.outcome = CrapsCall.HARD_TEN_55;
      }
      else if ((this.diceA === 6 && this.diceB === 5) || (this.diceA === 5 && this.diceB === 6)) {
        this.outcome = CrapsCall.YO_ELEVEN_65;
      }
      else if (this.diceA === 6 && this.diceB === 6) {
        this.outcome = CrapsCall.TWELVE_66;
      }
      else {
        this.outcome = CrapsCall.NO_ROLL;
        this.diceA = 0;
        this.diceB = 0;

      }
      return;
      }
    else if (myarray.length === 1) {
      this.outcome = myarray[0];
      switch (this.outcome) {
        case CrapsCall.ACES_11:
          this.diceA = 1;
          this.diceB = 1;
          break;
        case CrapsCall.ACE_DEUCE_21:
          this.diceA = 2;
          this.diceB = 1;
          break;
        case CrapsCall.EASY_FOUR_31:
          this.diceA = 3;
          this.diceB = 1;
          break;
        case CrapsCall.HARD_FOUR_22:
          this.diceA = 2;
          this.diceB = 2;
          break;
        case CrapsCall.FIVE_41: 
          this.diceA = 4;
          this.diceB = 1;
          break;
        case CrapsCall.FIVE_32:
          this.diceA = 3;
          this.diceB = 2;
          break;
        case CrapsCall.EASY_SIX_51:
          this.diceA = 5;
          this.diceB = 1;
          break;
        case CrapsCall.HARD_SIX_33:
          this.diceA = 3;
          this.diceB = 3;
          break;
        case CrapsCall.EASY_SIX_42:
          this.diceA = 4;
          this.diceB = 2;
          break;
        case CrapsCall.SEVEN_61:
          this.diceA = 6;
          this.diceB = 1;
          break;
        case CrapsCall.SEVEN_52:
          this.diceA = 5;
          this.diceB = 2;
          break;
        case CrapsCall.SEVEN_43:
          this.diceA = 3;
          this.diceB = 4;
          break;
        case CrapsCall.EASY_EIGHT_53:
          this.diceA = 5;
          this.diceB = 3;
          break;
        case CrapsCall.HARD_EIGHT_44:
          this.diceA = 4;
          this.diceB = 4;
          break;
        case CrapsCall.EASY_EIGHT_62:
          this.diceA = 6;
          this.diceB = 2;
          break;
        case CrapsCall.NINE_54:
          this.diceA = 5;
          this.diceB = 4;
          break;
        case CrapsCall.NINE_63:
          this.diceA = 6; 
          this.diceB = 3;
          break;
        case CrapsCall.TEN_64:
          this.diceA = 6;
          this.diceB = 4;
          break;
        case CrapsCall.HARD_TEN_55:
          this.diceA = 5; 
          this.diceB = 5;
          break;
        case CrapsCall.YO_ELEVEN_65:
          this.diceA = 6; 
          this.diceB = 5;
          break;
        case CrapsCall.TWELVE_66:
          this.diceA = 6;
          this.diceB = 6;
          break;
        case CrapsCall.NO_ROLL:
          this.diceA = 0; 
          this.diceB = 0;
          break;
        default:
          this.diceA = 0;
          this.diceB = 0;
          break;
      
     this.result = "";
      
      }
      return;
   
  }
  
  this.setDiceTotal();
  //this.isPoint =true;

}
  public getDiceTotal(): number {
       return this.diceTotal;
  }

  public setDiceTotal(): void {
     this.diceTotal = this.diceA + this.diceB;
  }

}