// MegaCalc Class
class MegaCalc {

    /*
    formula = array of array's [number/action,type]
    */
    constructor(display="0"){
        this.megaCalc = {
            formula: [],
            display: 0,
            value: null,
            entry: null,
            memory: 0,
            state: 1,
            DEBUG: true,
            ACTION: null,
            BASE: "DEC",
            SERVER: "http://pgesoftware.com/megacalculator/megaCalculator.php"
        }
    }

    getDisplay(){
        return this.megaCalc.display;
    }

    getEntry(){
        return this.megaCalc.entry;
    }

    getValue(){
        return this.megaCalc.value;
    }

    getMemory(){
        return this.megaCalc.memory;
    }

    getState(){
        return this.megaCalc.state;
    }


    getDebug(){
        return this.megaCalc.DEBUG;
    }

    getFormula(){
        let formStr="";
        for (let x=0;x<this.megaCalc.formula.length;x++){
            if(this.megaCalc.formula[x][1]==1){
                if (this.megaCalc.formula[x][0]=="ADD"){
                    formStr = formStr + " + ";
                } else if (this.megaCalc.formula[x][0]=="EQUAL") {
                    formStr = formStr + " = ";
                } else if (this.megaCalc.formula[x][0]=="SUBTRACT") {
                    formStr = formStr + " - ";
                }  else if (this.megaCalc.formula[x][0]=="MULTIPLY") {
                    formStr = formStr + " X ";
                }  else if (this.megaCalc.formula[x][0]=="DIVIDE") {
                    formStr = formStr + " / ";
                }  else if (this.megaCalc.formula[x][0]=="SQRT") {
                    formStr = formStr + " SQRT ";
                }  else if (this.megaCalc.formula[x][0]=="POWER") {
                    formStr = formStr + " ^ ";
                }
                
                
            } else {
                formStr = formStr + " " + this.megaCalc.formula[x][0];
            }
        }
        return formStr;
    }

    off () {
        try {
            this.megaCalc.display = null;
            this.megaCalc.value = null;
            this.megaCalc.memory = 0;
            this.megaCalc.entry = null;
            this.megaCalc.formula = [];
            this.megaCalc.state = 0;
            this.megaCalc.ACTION = null;
            this.megaCalc.BASE= "DEC";
            
            return this.megaCalc;
        } catch (error) {
            return error;
        }
    }

    number(number) {
        //enters number
        try {
            if (this.megaCalc.entry == null){
                this.megaCalc.entry = number;
            } else if (number == "."){
                    if (this.megaCalc.entry.split(".").length <= 1) this.megaCalc.entry = `${this.megaCalc.entry}${number}`;
            } else {
                this.megaCalc.entry = `${this.megaCalc.entry}${number}`;
            }
                this.megaCalc.display = this.megaCalc.entry;
            return this.megaCalc;
        } catch (error) {
            return error;
        }
    }

    async mcConv(base){
        try{
            this.megaCalc.ACTION = "CONVERT";
            this.megaCalc.BASE = base;

            let dbParam_1 = JSON.stringify(this.megaCalc);
            console.log("CONVERT REQUEST JSON: ")
            console.log(dbParam_1);
            let response = await fetch(this.megaCalc.SERVER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dbParam_1
                });

            if (response.ok){
                this.megaCalc = await response.json();
                console.log("CONVERT RESPONSE JSON: ");
                console.log(this.megaCalc);
                return this.megaCalc;                
            } else {
                console.log("HTTP-Error: " + response.status);
            }

        } catch (error) {
            return error;
        }

    }

    async mcFunction(oper){
        try{
            this.megaCalc.ACTION = "FORMULA";
            if (this.megaCalc.formula.length == 1 && this.megaCalc.value != null && this.megaCalc.entry == null ) {
                this.megaCalc.formula.push(new Array(oper,1));
            } else if (this.megaCalc.formula.length == 1 && this.megaCalc.value != null && this.megaCalc.entry != null ){
                this.megaCalc.formula = [new Array(Number(this.megaCalc.entry),0)];
                this.megaCalc.formula.push(new Array(oper,1));
                this.megaCalc.entry = null;
            } else if (this.megaCalc.entry == null ){
                this.megaCalc.formula.pop();
                this.megaCalc.formula.push(new Array(oper,1));
            }  else if (this.megaCalc.entry != null ){
                this.megaCalc.formula.push(new Array(Number(this.megaCalc.entry),0));
                this.megaCalc.formula.push(new Array(oper,1));
                this.megaCalc.entry = null;
            } 

            let dbParam_1 = JSON.stringify(this.megaCalc);
            console.log("REQUEST JSON: ")
            console.log(dbParam_1);

            let response = await fetch(this.megaCalc.SERVER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dbParam_1
                });

            if (response.ok){
                this.megaCalc = await response.json();
                console.log("RESPONSE JSON: ");
                console.log(this.megaCalc);
                return this.megaCalc;                
            } else {
                console.log("HTTP-Error: " + response.status);
            }
        } catch (error){
            return error;
        }
    }


    plusminus() {
        //switches display between positive or negative

        try {
            if (this.megaCalc.display == this.megaCalc.value) {
                this.megaCalc.display = this.megaCalc.display * -1;
                this.megaCalc.value = this.megaCalc.value * -1;
                this.megaCalc.formula[0][0] = this.megaCalc.value;
            } else {
                this.megaCalc.entry = this.megaCalc.entry * -1;
                this.megaCalc.display = this.megaCalc.display * -1;
            }

            return this.megaCalc;

        } catch (error) {
            return error;
        }
    }

    ce () {
        //clear entry

        try {
            this.megaCalc.entry = null;
        } catch (error) {
            return error;
        }
    }

    onc() {
        //turn calculater on or clear last entry

        try {
            this.megaCalc.display = 0;
            this.megaCalc.value = null;
            this.megaCalc.memory = 0;
            this.megaCalc.entry = null;
            this.megaCalc.formula = [];
            this.megaCalc.state = 1;
            this.megaCalc.ACTION = null;
            this.megaCalc.BASE = "DEC";
            return this.megaCalc;

        } catch (error) {
            return error;
        }
    }

};

export default MegaCalc