const CalcuText = document.querySelector("#calcuTab")
const RepText = document.querySelector("#repTab")
const AmTabText = document.querySelector("#amortTab")

const contCalcu = document.querySelector("#calcuContainer")
const comSel = document.querySelector("#CompoundSel")
const pYearSel = document.querySelector("#PerYearSel")


const purchPrice = document.querySelector("#purchasePrice")
const repPurchPrice = document.querySelector("#repPurch")
const principal = document.querySelector("#principal")

const downPay = document.querySelector("#downPay")

CalcuText.addEventListener("click", CalcuClk)
RepText.addEventListener("click", RepClk)
AmTabText.addEventListener("click", AmTabClk)



var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "index.html") {
  comSel.value = 'Semi-Annual';
  pYearSel.value = '12';
  purchPrice.value = JSON.parse(localStorage.getItem("purchPrice"))
  downPay.value = JSON.parse(localStorage.getItem("downPay"))

  localStorage.setItem('principal',JSON.stringify(purchPrice.value - downPay.value))
} else if (page == "Report.html") {
  if (localStorage.getItem("purchPrice") == "") {
    repPurchPrice.innerText = 0
  }else {
    repPurchPrice.innerText = JSON.parse(localStorage.getItem("purchPrice"))
  }
} else if (page == "AmorTable.html") {
  principal.textContent = JSON.parse(localStorage.getItem("principal"))
}



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
    
    repPurchPrice.innerText = JSON.parse(localStorage.getItem("purchPrice"))
}
function AmTabClk () {
    let index = 0
    change_page("AmorTable.html")
    
    
}


function removeString (event) {
  var key = event.which;
  if((key<48 || key>57) && key != 8) event.preventDefault();
    
}
function isNumber(evt) {
  
  
  localStorage.setItem('purchPrice',JSON.stringify(purchPrice.value))
  localStorage.setItem('principal',JSON.stringify(purchPrice.value - downPay.value))

  localStorage.setItem('downPay',JSON.stringify(downPay.value))
  localStorage.setItem('principal',JSON.stringify(purchPrice.value - downPay.value))
  

  if (evt.target.value != "") {
    var value = evt.target.value.replace(/,/g,"");
    evt.target.dataset.currentValue=parseInt(value);
    var caret = value.length-1;
    while((caret-3)>-1)
    {
        caret -= 3;
        value = value.split('');
        value.splice(caret+1,0,",");
        value = value.join('');
    }
    evt.target.value = value;

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
  
