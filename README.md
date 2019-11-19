# MegaCalculator 

### West Virginia Univeristy - SENG 560 - Software Reuse - Programming Assignment #2

##### MegaCalculator - Description

I used https://github.com/anakinjay/MegaMath php reuseable library.  The directions where straight forward how to use the library.  I was able to black box reuse the library without modifing any of the code.  I created a PHP file called megaCalculator.php which acts as a simple calculator API to interface with the MagaMath library.  I then created a simple HTML interface for the API.  The source code is located in this repository, but you can view the application at:  http://pgesoftware.com/megacalculator/

#### Repository Structure and File Description
1. megaCalculator.php = Backend Calculator API
2. index.html = Front End for the MegaCalculator
3. js/megacalc.js = Javascript Class for the MegaCalculator Interface.  It makes the fetch calls to the API
4. js/main.js = Javascript file which runs the MegaCalculator
5. The rest of the files are bootstrap files
6. This repository does not contain the MegaMath library.  You will have to clone it into a subdirectory of MegaCalculator to utilize it.

#### Application Directions.  

1. Goto http://pgesoftware.com/megacalculator/
2. Click the "ON/C" button
3. Use the Calculator
4. The Base conversion buttons (BIN, OCT, DEC, HEX) only convert the display not the underlying value.  All calculations are performed in base 10.

