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
const repDownPay = document.querySelector("#repDownPay")
const perDownPay = document.querySelector("#perDownPay")

const durLoan = document.querySelector("#durLoan")
const repDurLoan = document.querySelector("#repDurLoan")

const cmHc = document.querySelector("#cmHc")
const repCmHc = document.querySelector("#repCmHc")
const perCmHc = document.querySelector("#perCmHc")

const repLoanAmo = document.querySelector("#repLoanAmo")

const estVeriable = document.querySelector("#estVeriable")
const repEstVeriable = document.querySelector("#repEstVeriable")


const estProTax = document.querySelector("#estProTax")
const repEstProTax = document.querySelector("#repEstProTax")
const yProTax = document.querySelector("#yProTax")

const maintFee = document.querySelector("#maintFee")
const repMaintFee = document.querySelector("#repMaintFee")
const yMaintFee = document.querySelector("#yMaintFee")

const heHy = document.querySelector("#heHy")
const repHeHy = document.querySelector("#repHeHy")
const yHeHy = document.querySelector("#yHeHy")

const qualRate = document.querySelector("#qualRate")
const repQualRate = document.querySelector("#repQualRate")

const totPay = document.querySelector("#totPay")


CalcuText.addEventListener("click", CalcuClk)
RepText.addEventListener("click", RepClk)
AmTabText.addEventListener("click", AmTabClk)



var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "index.html") {
  comSel.value = 'Semi-Annual';
  pYearSel.value = '12';

  if (JSON.parse(localStorage.getItem("purchPrice")) == "" || JSON.parse(localStorage.getItem("purchPrice")) == null) {
    purchPrice.value = ""
  }else {
    purchPrice.value = addSeparator(JSON.parse(localStorage.getItem("purchPrice")))
  }
  if (JSON.parse(localStorage.getItem("downPay")) == "" || JSON.parse(localStorage.getItem("downPay")) == null) {
    downPay.value = ""
  }else {
    downPay.value = addSeparator(JSON.parse(localStorage.getItem("downPay")))
  }
  if (JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null) {
    durLoan.value = ""
  }else {
    durLoan.value = addSeparator(JSON.parse(localStorage.getItem("durLoan")))
  }
  if (JSON.parse(localStorage.getItem("cmHc")) == "" || JSON.parse(localStorage.getItem("cmHc")) == null) {
    cmHc.value = ""
  }else {
    cmHc.value = addSeparator(JSON.parse(localStorage.getItem("cmHc")))
  }
  if (JSON.parse(localStorage.getItem("estVeriable")) == "" || JSON.parse(localStorage.getItem("estVeriable")) == null) {
    estVeriable.value = ""
  }else {
    estVeriable.value = JSON.parse(localStorage.getItem("estVeriable"))
  }

  if (JSON.parse(localStorage.getItem("estProTax")) == "" || JSON.parse(localStorage.getItem("estProTax")) == null) {
    estProTax.value = ""
  }else {
    estProTax.value = addSeparator(JSON.parse(localStorage.getItem("estProTax")))
  }
  if (JSON.parse(localStorage.getItem("yProTax")) == "" || JSON.parse(localStorage.getItem("yProTax")) == null || JSON.parse(localStorage.getItem("yProTax")) == 0) {
    yProTax.textContent = "$0"
  }else {
    yProTax.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("yProTax")))}`
  }

  if (JSON.parse(localStorage.getItem("maintFee")) == "" || JSON.parse(localStorage.getItem("maintFee")) == null) {
    maintFee.value = ""
  }else {
    maintFee.value = addSeparator(JSON.parse(localStorage.getItem("maintFee")))
  }
  if (JSON.parse(localStorage.getItem("yMaintFee")) == "" || JSON.parse(localStorage.getItem("yMaintFee")) == null || JSON.parse(localStorage.getItem("yMaintFee")) == 0) {
    yMaintFee.textContent = "$0"
  }else {
    yMaintFee.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("yMaintFee")))}`
  }
  
  if (JSON.parse(localStorage.getItem("heHy")) == "" || JSON.parse(localStorage.getItem("heHy")) == null) {
    heHy.value = ""
  }else {
    heHy.value = addSeparator(JSON.parse(localStorage.getItem("heHy")))
  }
  if (JSON.parse(localStorage.getItem("yHeHy")) == "" || JSON.parse(localStorage.getItem("yHeHy")) == null || JSON.parse(localStorage.getItem("yHeHy")) == 0) {
    yHeHy.textContent = "$0"
  }else {
    yHeHy.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("yHeHy")))}`
  }

  if (JSON.parse(localStorage.getItem("qualRate")) == "" || JSON.parse(localStorage.getItem("qualRate")) == null) {
    qualRate.value = ""
  }else {
    qualRate.value = JSON.parse(localStorage.getItem("qualRate"))

  }

  if (JSON.parse(localStorage.getItem("totPay")) == "" || JSON.parse(localStorage.getItem("totPay")) == null || JSON.parse(localStorage.getItem("totPay")) == 0) {
    totPay.textContent = "$0"
  }else {
    totPay.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("totPay")))}`
  }



} else if (page == "Report.html") {
  if (JSON.parse(localStorage.getItem("purchPrice")) == "" || JSON.parse(localStorage.getItem("purchPrice")) == null) {
    repPurchPrice.innerText = "$0"
  }else {
    
    repPurchPrice.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("purchPrice")))}`
  }

  if (JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null) {
    repDurLoan.innerText = 0
  }else {
    repDurLoan.innerText = addSeparator(JSON.parse(localStorage.getItem("durLoan")))
  }

  if (JSON.parse(localStorage.getItem("perDownPay")) == "" || JSON.parse(localStorage.getItem("perDownPay")) == null) {
    perDownPay.innerText = "0.0%"
  }else {
    perDownPay.innerText = `${(Math.round((JSON.parse(localStorage.getItem("perDownPay")) * 100) * 100) / 100).toFixed(2)}%`
  }

  if (JSON.parse(localStorage.getItem("downPay")) == "" || JSON.parse(localStorage.getItem("downPay")) == null) {
    repDownPay.innerText = "$0"
  }else {
    repDownPay.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("downPay")))}`
  }
  if (JSON.parse(localStorage.getItem("perCmHc")) == "" || JSON.parse(localStorage.getItem("perCmHc")) == null) {
    perCmHc.innerText = "0.0%" 
  }else {
    perCmHc.innerText = `${(Math.round((JSON.parse(localStorage.getItem("perCmHc")) * 100) * 100) / 100).toFixed(2)}%`
  }

  if (JSON.parse(localStorage.getItem("cmHc")) == "" || JSON.parse(localStorage.getItem("cmHc")) == null) {
    repCmHc.innerText = "$0" 
  }else {
    repCmHc.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("cmHc")))}`
  }
  if (JSON.parse(localStorage.getItem("repLoanAmo")) == "" || JSON.parse(localStorage.getItem("repLoanAmo")) == null) {
    repLoanAmo.innerText = "$0" 
  }else {
    repLoanAmo.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("repLoanAmo")))}`
  }
  if (JSON.parse(localStorage.getItem("estVeriable")) == "" || JSON.parse(localStorage.getItem("estVeriable")) == null) {
    repEstVeriable.innerText = "0.0%" 
  }else {
    repEstVeriable.innerText = `${(Math.round((JSON.parse(localStorage.getItem("estVeriable"))) * 100) / 100).toFixed(2)}%`
  }


  if (JSON.parse(localStorage.getItem("estProTax")) == "" || JSON.parse(localStorage.getItem("estProTax")) == null) {
    repEstProTax.innerText = "$0" 
  }else {
    repEstProTax.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("estProTax")))}`
  }
  if (JSON.parse(localStorage.getItem("maintFee")) == "" || JSON.parse(localStorage.getItem("maintFee")) == null) {
    repMaintFee.innerText = "$0" 
  }else {
    repMaintFee.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("maintFee")))}`
  }
  if (JSON.parse(localStorage.getItem("heHy")) == "" || JSON.parse(localStorage.getItem("heHy")) == null) {
    repHeHy.innerText = "$0" 
  }else {
    repHeHy.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("heHy")))}`
  }

  if (JSON.parse(localStorage.getItem("qualRate")) == "" || JSON.parse(localStorage.getItem("qualRate")) == null) {
    repQualRate.innerText = "0.0%" 
  }else {
    repQualRate.innerText = `${(Math.round((JSON.parse(localStorage.getItem("qualRate"))) * 100) / 100).toFixed(2)}%`
  }







} else if (page == "AmorTable.html") {
  if (JSON.parse(localStorage.getItem("principal")) == "" || JSON.parse(localStorage.getItem("principal")) == null) {
    principal.textContent = "$0" 
  }else {
    
    principal.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("principal")))}`
  }
  
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
    
    
}
function AmTabClk () {
    let index = 0
    change_page("AmorTable.html")
    
    
}


function removeString (event) {
  var key = event.which;
  if(((key<=45 && key>=47 && key<48) || key>57) && key != 8) event.preventDefault();
  
  event.target.value.replace(/\.(?=.*\.)/g, '');
  for (let character of event.target.value) {
    if(character == "."){
      if(((key<48) || key>57) && key != 8) event.preventDefault();
    }
  }
}
function isNumber(evt) {
  
  
  localStorage.setItem('purchPrice',JSON.stringify(purchPrice.value.replace(/,/g,"")))
  localStorage.setItem('downPay',JSON.stringify(downPay.value.replace(/,/g,"")))
  localStorage.setItem('durLoan',JSON.stringify(durLoan.value.replace(/,/g,"")))
  localStorage.setItem('estVeriable',JSON.stringify(estVeriable.value.replace(/,/g,"")))
  localStorage.setItem('estProTax',JSON.stringify(estProTax.value.replace(/,/g,"")))
  localStorage.setItem('maintFee',JSON.stringify(maintFee.value.replace(/,/g,"")))
  localStorage.setItem('heHy',JSON.stringify(heHy.value.replace(/,/g,"")))
  localStorage.setItem('qualRate',JSON.stringify(qualRate.value.replace(/,/g,"")))

  let tempPri = purchPrice.value.replace(/,/g,"");
  let tempPay = downPay.value.replace(/,/g,"");

  let ymPay = 0
  let prTax = 0
  let mtFee = 0
  let hHy = 0
  

  if (estProTax.value.replace(/,/g,"") != 0) {
    prTax = estProTax.value.replace(/,/g,"") * 12
    yProTax.textContent = `$${prTax}`
  }
  if (maintFee.value.replace(/,/g,"") != 0) {
    mtFee = (maintFee.value.replace(/,/g,"") * 12)/2
    yMaintFee.textContent = `$${mtFee}`
  }
  if (heHy.value.replace(/,/g,"") != 0) {
    hHy = heHy.value.replace(/,/g,"") * 12
    yHeHy.textContent = `$${hHy}`
  }
  
  localStorage.setItem('principal',JSON.stringify(tempPri - tempPay))
  localStorage.setItem('yProTax',JSON.stringify((yProTax.textContent.replace("$",""))))
  localStorage.setItem('yMaintFee',JSON.stringify((yMaintFee.textContent.replace(/,/g,"")).replace("$","")))
  localStorage.setItem('yHeHy',JSON.stringify((yHeHy.textContent.replace(/,/g,"")).replace("$","")))


  totPay.textContent = `$${addSeparator(+prTax + +mtFee + +hHy + +ymPay)}`
  
  localStorage.setItem('totPay',JSON.stringify((totPay.textContent.replace(/,/g,"")).replace("$","")))
  
  if (tempPri != "" && tempPri != 0 && tempPay != "" && tempPay != 0) {

    let befCmHc = (tempPri - tempPay) * (1 + 0.025)
    let loanToVal = Math.round((befCmHc / tempPri) * 100)
    let perCm = 0
    if (loanToVal >= 95){
      perCm = 0.04
    }else if (loanToVal <= 94 && loanToVal >= 90){
      perCm = 0.031
    }else if (loanToVal <= 89 && loanToVal >= 85){
      perCm = 0.028
    }else if (loanToVal <= 84 && loanToVal >= 80){
      perCm = 0.024
    }else if (loanToVal <= 79 && loanToVal >= 75){
      perCm = 0.017
    }else if (loanToVal <= 74 && loanToVal >= 65){
      perCm = 0.006
    }else if (loanToVal <= 64 ){
      perCm = 0
    }
    if (tempPay / tempPri >= 0.2){
      perCm = 0
    }
    
    

    localStorage.setItem('perCmHc',JSON.stringify(perCm))
    localStorage.setItem('perDownPay',JSON.stringify(tempPay / tempPri))

    let tempCmHc = Math.round((tempPri - tempPay) * perCm)

    localStorage.setItem('cmHc',JSON.stringify(tempCmHc))
    if (tempCmHc == 0){
      cmHc.value = tempCmHc
    }else {
      cmHc.value = addSeparator(tempCmHc)
    }

    localStorage.setItem('repLoanAmo',JSON.stringify((tempPri - tempPay + +tempCmHc) ))
  }else {
    localStorage.setItem('perDownPay',JSON.stringify(0))
  }
  
  let isDoted = false

  if (evt.target.value != "") {
    for (let character of evt.target.value) {
      if(character == "."){
        isDoted = true
      }
    }
    if (isDoted == false) {
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
}

function addSeparator(val) {
  
  if (val != "" && val != 0) {
    if (toString.call(val) != '[object String]') {
      var value = val.toString()
    }else {
      var value = val
    }
    if (value > 0) {
      val=parseInt(value);
      var caret = value.length-1;
      while((caret-3)>-1)
      {
          caret -= 3;
          value = value.split('');
          value.splice(caret+1,0,",");
          value = value.join('');
      }
      
      val = value;
      
      return val
    }else if (value <= 0) {
      if (value.length > 4) {
        val=parseInt(value);
        var caret = value.length-1;
        while((caret-3)>-1)
        {
            caret -= 3;
            value = value.split('');
            value.splice(caret+1,0,",");
            value = value.join('');
        }
        
        val = value;
        
        return val
      }else {
        return val
      }
      
    }
    

  }else{
    return val
  }

}











