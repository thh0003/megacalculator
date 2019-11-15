// MegaCalc Class
class MegaCalc {

    constructor(){
        this.display="0";
        this.value=0;
        this.memory=null;
    }

    off () {
        try {

        } catch (error) {
            return error;
        }
    }

    mc () {
        //clear memory
        try {
        } catch (error) {
            return error;
        }
    }

    mr () {
        //memory recall
        try {

        } catch (error) {
            return error;
        }
    }
    
    mminus () {
        //memory minus
        try {
        } catch (error) {
            return error;
        }
    }

    sqrroot(radicand) {
        //takes a nonnegative real number (radicand) and returns its principal square root

        try {
            //Make sure the number exists and is a number
            if ( isNaN(radicand)){
                return "NOT A NUMBER: CHECK INPUTS";
            } else if ( radicand < 0){
                return "RADICAND MUST BE A NONNEGATIVE REAL NUMBER";
            } else {
                //Square Root the radicand
                return this.exp(radicand, (1/2));
            }
        } catch (error) {
            return error;
        }
    }

    plusminus(number) {
        //switches between positive and negative

        try {
        } catch (error) {
            return error;
        }
    }

    multiply () {
        //switches between positive and negative

        try {
        } catch (error) {
            return error;
        }
    }

    exp() {
        //switches between positive and negative

        try {
        } catch (error) {
            return error;
        }
    }

    ce () {
        //clear everything

        try {
        } catch (error) {
            return error;
        }
    }

    subtract() {
        //switches between positive and negative

        try {
        } catch (error) {
            return error;
        }
    }

    divide() {
        //switches between positive and negative

        try {
        } catch (error) {
            return error;
        }
    }

    onc() {
        //turn calculater on or clear last entry

        try {
        } catch (error) {
            return error;
        }
    }

    add() {
        //add button

        try {
        } catch (error) {
            return error;
        }
    }

    equal() {
        //execute or equal

        try {
        } catch (error) {
            return error;
        }
    }

    decimal() {
        //add decimal point

        try {
        } catch (error) {
            return error;
        }
    }

    number(number) {
        //enters number

        try {
        } catch (error) {
            return error;
        }
    }
};

export default MegaCalc