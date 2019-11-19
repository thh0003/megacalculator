<?php
use MegaMath\NumberPlugins\Octal;
use MegaMath\NumberPlugins\Hex;
use MegaMath\NumberPlugins\Binary;
use MegaMath\NumberPlugins\Floating;
use MegaMath\NumberPlugins\Integer;

$composer = require __DIR__ . '/MegaMath/vendor/autoload.php';

$math = new MegaMath($composer);

//SERVER DEBUG HOUSE KEEPING
$DEBUG = true;

if (!isset($MC_RETURN)) {
    $MC_RETURN = new stdClass();
}

$MC_RETURN->DEBUG = $DEBUG;

$MC_CONTENT = trim(file_get_contents("php://input"));
$MC_RESPONSE = json_decode($MC_CONTENT, false);
$MC_RETURN->formula = $MC_RESPONSE->formula;
$MC_RETURN->display = $MC_RESPONSE->display;
$MC_RETURN->entry = $MC_RESPONSE->entry;
$MC_RETURN->value = $MC_RESPONSE->value;
$MC_RETURN->memory = $MC_RESPONSE->memory;
$MC_RETURN->state = $MC_RESPONSE->state;
$MC_RETURN->DEBUG = $MC_RESPONSE->DEBUG;
$MC_RETURN->SERVER =$MC_RESPONSE->SERVER;
$MC_RETURN->ACTION =$MC_RESPONSE->ACTION;
$MC_RETURN->BASE = $MC_RESPONSE->BASE;

if ($DEBUG){
    trigger_error("CONTENT: ". $MC_CONTENT);   
    trigger_error("Display SENT: ". $MC_RESPONSE->display);   
}
//SERVER RESPONSES
if ($MC_RETURN->ACTION == "FORMULA") {
    $PREVITEM="";
    $NEXTITEM="";
    $CURITEM="";
    $CURVALUE=0;
    $formLen = sizeof($MC_RETURN->formula);
    for ($x=0; $x<$formLen; $x++){
        $PREVITEM=$x==0?[0,0]:$MC_RETURN->formula[$x-1];
        $NEXTITEM=(($x+1)<$formLen)?$MC_RETURN->formula[$x+1]:[0,0];
        $CURITEM=$MC_RETURN->formula[$x];
        $CURVALUE=$x==1?$PREVITEM[0]:$CURVALUE;

        if ($CURITEM[1]==1){
            switch ($CURITEM[0]){
                case "ADD":
                    $CURVALUE = $math->add($CURVALUE,$NEXTITEM[0],'Floating');
                    break;
                case "SUBTRACT":
                    $CURVALUE = $math->subtract($CURVALUE,$NEXTITEM[0],'Floating');
                    break;
                case "MULTIPLY":
                    $CURVALUE = $math->multiply($CURVALUE,$NEXTITEM[0],'Floating');
                    break;
                case "DIVIDE":
                    $CURVALUE = $math->divide($CURVALUE,$NEXTITEM[0],'Floating');
                    break;                
                case "SQRT":
                    $CURVALUE = $math->sqroot($CURVALUE,'Floating');
                    $MC_RETURN->formula = [[$CURVALUE,0]];
                    break;                
                case "POWER":
                    $CURVALUE = $math->power($CURVALUE,$NEXTITEM[0],'Floating');
                    break;                
                case "EQUAL":
                    $MC_RETURN->formula = [[$CURVALUE,0]];
                    break;
                
            }
        }

        $MC_RETURN->display = $CURVALUE;
        $MC_RETURN->value = $CURVALUE;
    }

} elseif ($MC_RETURN->ACTION == "CONVERT"){

    if ($MC_RETURN->value == null) {
        $modNUM =  $MC_RETURN->entry;
    } else {
        $modNUM =  $MC_RETURN->value;
    }

    switch ($MC_RETURN->BASE){
        case "BIN":
            $MC_RETURN->display = Binary::fromDec($modNUM);
            break;
        case "OCT":
            $MC_RETURN->display = Octal::fromDec($modNUM);
            break;
        case "DEC":
            $MC_RETURN->display = $modNUM;
            break;
        case "HEX":
            $MC_RETURN->display = Hex::fromDec($modNUM);
            break;                
    }
}

if ($DEBUG){
    trigger_error("JSON RETURN: ". json_encode($MC_RETURN));   
}

echo(json_encode($MC_RETURN));
?>