const CalcuText = document.querySelector("h4.Calcu")
const RepText = document.querySelector("h4.Rep")
const AmTabText = document.querySelector("h4.AmTab")

const comSel = document.querySelector("#CompoundSel")
const pYearSel = document.querySelector("#PerYearSel")


CalcuText.addEventListener("click", CalcuClk)
RepText.addEventListener("click", RepClk)
AmTabText.addEventListener("click", AmTabClk)

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



  