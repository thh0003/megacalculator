// MegaCalc Class
class MegaCalc {

    /*
    formula = array of array's [number/action,type]
    */
    constructor(display="0"){
        this.megaCalc = {
            formula: [],
            display: 0,
            value: 0,
            memory: null,
            state: 1,
            DEBUG: true
        }
        this.on();
    }

    on () {
        try {
            return this.megaCalc;
        } catch (error) {
            return error;
        }
    }

    off () {
        try {
            this.megaCalc.display = null;
            this.megaCalc.value = null;
            this.megaCalc.memory = null;
            this.megaCalc.formula = [];
            this.megaCalc.state = 0;
            return this.megaCalc;
        } catch (error) {
            return error;
        }
    }

    number(number) {
        //enters number

        try {
            this.megaCalc.display = (this.megaCalc.display == 0)?`${number}`:`${this.megaCalc.display}${number}`;
            return this.megaCalc;
        } catch (error) {
            return error;
        }
    }

    
    async mcFunction(oper){
        this.megaCalc.formula.push(new Array(this.megaCalc.display,0));
        this.megaCalc.formula.push(new Array(this.megaCalc.oper,1));
        let xmlhttp_1 = new XMLHttpRequest();
        let dbParam_1 = JSON.stringify(this.megaCalc);
        console.log(dbParam_1);
        document.getElementById("HS_JSON_SENT1").innerHTML = "JSON SENT1: dbParam: "+ dbParam_1;
            
        xmlhttp_1.onreadystatechange = await function() {
            if (this.readyState == 4 && this.status == 200) {
                this.megaCalc = JSON.parse(this.responseText);
                if (this.megaCalc.DEBUG){
                    console.log("JSON RESPONSE: "+ this.megaCalc);
                }
            }
            if (this.megaCalc.DEBUG){
                    document.getElementById("HS_ERR1").innerHTML = "HS_ERR1: E1: "+hsDD.HS_ERR1;	
                    document.getElementById("HS_JSON_RECEIVED1").innerHTML = "JSON RECEIVED1: "+ this.responseText;	
            }
        };
                
                
        xmlhttp_1.open("POST", "https://www.pgesoftware.com/megacalculator/megaCalculator.php", true);
        xmlhttp_1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp_1.send("x=" + dbParam_1);
        xmlhttp_1.close;

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


};

export default MegaCalc