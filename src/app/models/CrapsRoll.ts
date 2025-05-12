/*
@author: Seam Feagan
@date: 2025-5-9
@description: This class will be used to track and process the results of on game of craps or Roll.  

*/

import { CrapsCall } from './CrapsCall';
import { Call } from './call';  
import { CrapsPoint } from './CrapsPoint';
import { C } from '@angular/cdk/keycodes';



export class CrapsRoll {

    public rolls:  Call[] = []; //array of calls
    public point: CrapsPoint = CrapsPoint.NO_POINT; //is the point
    public isComeOut: boolean = false; //is the come out roll
    public passLineWinners: Call[] = []; //array of pass line winners
    public passLineLosers: Call[] = []; //array of pass line losers
    public pointsArray: number[] = []; //array of points
    private open: boolean;  // = false; //is the roll open or closed. if closed the roll cannot be changed

    
    constructor() {
        
        this.isComeOut = true; //set the first call to be a come out roll
        this.open = true; //set the roll to be open
        this.point = CrapsPoint.NO_POINT; //set the point to no point
        this.rolls = []; //initialize the array of calls
        this.passLineWinners = []; //initialize the array of pass line winners
        this.passLineLosers = []; //initialize the array of pass line losers
        this.pointsArray = []; //initialize the array of points



    }

    public addRoll(call: Call)  { //add a roll to the array

        if (!this.open){
            console.log('Roll is closed');
            return false;
        }// end if

       else{
            if (this.isComeOut) { //if the roll is a come out roll
        

                switch (call.diceTotal) { //switch on the dice total
                    case 2: //if the roll is a 2
                        this.passLineLosers.push(call); //add the call to the pass line losers
                        
                        break;
                    case 3: //if the roll is a 3
                        this.passLineLosers.push(call); //add the call to the pass line losers  
                        
                        break;
                    case 7: //if the roll is a 7
                        this.passLineWinners.push(call); //add the call to the pass line winners
                        break;
                    case 11: //if the roll is an 11 
                        this.passLineWinners.push(call); //add the call to the pass line winners
                        break;
                    case 12: //if the roll is a 12
                        this.passLineLosers.push(call); //add the call to the pass line losers  
                        break;
                    case 4: //if the roll is a 4
                        this.point = CrapsPoint.POINT_4; //set the point to 4
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    case 5: //if the roll is a 5
                        this.point = CrapsPoint.POINT_5; //set the point to 5
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    case 6: //if the roll is a 6
                        this.point = CrapsPoint.POINT_6; //set the point to 6
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    case 8: //if the roll is a 8
                        this.point = CrapsPoint.POINT_8; //set the point to 8
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    case 9: //if the roll is a 9
                        this.point = CrapsPoint.POINT_9; //set the point to 9   
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    case 10: //if the roll is a 10
                        this.point = CrapsPoint.POINT_10; //set the point to 10 
                        this.pointsArray.push(this.point); //add the point to the array
                        this.isComeOut = false; //set the roll to not be a come out roll
                        break;
                    default: //if the roll is not number or is a no roll
                        this.point = CrapsPoint.NO_POINT; //set the point to no point
                        break;
                }//end switch
       
            }// end if isComeOut
            else { //if it is not a comeout roll
                if (call.diceTotal === this.point) { //if the roll is the point}
                    this.passLineWinners.push(call);
                    this.isComeOut = true;
                    this.point = CrapsPoint.NO_POINT;
                }

                else if (call.diceTotal === 7){
                    this.passLineLosers.push(call);
                    this.open = false;
                    this.point = CrapsPoint.NO_POINT;
                }    // end else if
                this.rolls.push(call);
                return true;
                }//end if     
            return false;
            }//end else
        
        
       
       
      
    }//end addRoll

    public getLastRoll(): Call {
        return this.rolls[this.rolls.length - 1]; //get the last call in the array
    }//end getLastRoll

    public getRolls(): Call[] {
        return this.rolls; //get the array of calls
    }//end getRolls 

    




}//end class

function getLastRoll() {
    throw new Error('Function not implemented.');
}
