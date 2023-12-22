const CalcuText = document.querySelector("h4.Calcu")
const RepText = document.querySelector("h4.Rep")
const AmTabText = document.querySelector("h4.AmTab")

const comSel = document.querySelector("#CompoundSel")
const pYearSel = document.querySelector("#PerYearSel")
const textBox = document.getElementsByClassName("textbox")

CalcuText.addEventListener("click", CalcuClk)
RepText.addEventListener("click", RepClk)
AmTabText.addEventListener("click", AmTabClk)



for (let i=0; i<textBox.length;i++){
  textBox[i].addEventListener("change",textSep(textBox[i]))
}


function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

selectElement('CompoundSel', 'Semi-Annual');
selectElement('PerYearSel', '12');

CalcuText.classList.add('act');


function change_page(name){
    window.location.href = name;
  } 

function CalcuClk () {
    let index = 0
    change_page("index.html")
}
function RepClk () {
    let index = 0
    change_page("Report.html")

    
}
function AmTabClk () {
    let index = 0
    change_page("AmorTable.html")


    
}


function textSep (tBox) {
   
    if (tBox.value != "") {
      tBox.value = tBox.value.replace(",", "")
        console.log(tBox.value)
        if (tBox.value.length % 3 >= 0 ) {
            
          tBox.value = addComma(tBox.value, 3, tBox.value.length + 1)
            console.log(tBox.value)
        }
    }
}


function addComma (num, per, places) {
    // (A1) SET DEFAULTS
    if (per==undefined) { per = 3; }
    if (places==undefined) { places = 2; }
  
    // (A2) NO DECIMAL PLACES - ROUND OFF
    // REMOVE THIS IF YOU DON'T WANT TO ROUND OFF
    //if (places==0) { num = Math.round(num); }
   
    // (A3) SPLIT WHOLE & DECIMAL NUMBERS
    var cString = num.toString(),
        cDot = cString.indexOf("."),
        cWhole = "", cDec = "";
    if (cDot == -1) {
      cWhole = cString;
      cDec = 0;
    } else {
      cWhole = cString.substring(0, cDot);
      cDec = cString.substring(cDot+1);
    }
   
    // (A4) ADD COMMAS TO WHOLE NUMBER
    var aComma = "", count = 0;
    if (cWhole.length > per) { for (let i=(cWhole.length-1); i>=0; i--) {
      aComma = cWhole.charAt(i) + aComma;
      count++;
      if (count == per && i!=0) {
        aComma = "," + aComma; 
        count = 0;
      }
    }}
    
   
    // (A6) RETURN "WHOLE WITH COMMA" PLUS DECIMAL PLACES
    return aComma ;
  }

  