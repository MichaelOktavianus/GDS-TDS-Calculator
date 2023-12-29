const resetBtn = document.querySelector("#resetButton")

const CalcuText = document.querySelector("#calcuTab")
const RepText = document.querySelector("#repTab")
const AmTabText = document.querySelector("#amortTab")

const pdfButton = document.querySelector("#pdfButton")

const contCalcu = document.querySelector("#calcuContainer")
const content = document.querySelector("#content")
const CompoundSel = document.querySelector("#CompoundSel")
const PerYearSel = document.querySelector("#PerYearSel")
const amortCompound = document.querySelector("#amortCompound")
const amortPerYear = document.querySelector("#amortPerYear")


const purchPrice = document.querySelector("#purchasePrice")
const repPurchPrice = document.querySelector("#repPurch")
const principal = document.querySelector("#principal")

const downPay = document.querySelector("#downPay")
const repDownPay = document.querySelector("#repDownPay")
const perDownPay = document.querySelector("#perDownPay")

const durLoan = document.querySelector("#durLoan")
const repDurLoan = document.querySelector("#repDurLoan")
const amortPeriod = document.querySelector("#amortPeriod")

const cmHc = document.querySelector("#cmHc")
const repCmHc = document.querySelector("#repCmHc")
const perCmHc = document.querySelector("#perCmHc")

const repLoanAmo = document.querySelector("#repLoanAmo")
const qualMort = document.querySelector("#qualMort")
const repQualMort = document.querySelector("#repQualMort")
const yMortPay = document.querySelector("#yMortPay")
const repMortPay = document.querySelector("#repMortPay")

const estVeriable = document.querySelector("#estVeriable")
const repEstVeriable = document.querySelector("#repEstVeriable")
const amortIntRate = document.querySelector("#amortIntRate")

const amortPay = document.querySelector("#amortPay")

const estProTax = document.querySelector("#estProTax")
const repEstProTax = document.querySelector("#repEstProTax")
const yProTax = document.querySelector("#yProTax")
const repProTax = document.querySelector("#repProTax")

const maintFee = document.querySelector("#maintFee")
const repMaintFee = document.querySelector("#repMaintFee")
const yMaintFee = document.querySelector("#yMaintFee")
const repYearMaint = document.querySelector("#repYearMaint")

const heHy = document.querySelector("#heHy")
const repHeHy = document.querySelector("#repHeHy")
const yHeHy = document.querySelector("#yHeHy")
const repYearHeHy = document.querySelector("#repYearHeHy")



const qualRate = document.querySelector("#qualRate")
const repQualRate = document.querySelector("#repQualRate")

const totPay = document.querySelector("#totPay")
const totFee = document.querySelector("#totFee")

const otDebt1 = document.querySelector("#otDebt1")
const otDebt2 = document.querySelector("#otDebt2")
const otDebt3 = document.querySelector("#otDebt3")
const totDebt = document.querySelector("#totDebt")

const repDebt1 = document.querySelector("#repDebt1")
const repDebt2 = document.querySelector("#repDebt2")
const repDebt3 = document.querySelector("#repDebt3")
const repTotDebt = document.querySelector("#repTotDebt")

const income1 = document.querySelector("#income1")
const income2 = document.querySelector("#income2")
const income3 = document.querySelector("#income3")
const totIncome = document.querySelector("#totIncome")

const repInc1 = document.querySelector("#repInc1")
const repInc2 = document.querySelector("#repInc2")
const repInc3 = document.querySelector("#repInc3")
const repTotInc = document.querySelector("#repTotInc")

const taxOntar = document.querySelector("#taxOntar")
const taxToron = document.querySelector("#taxToron")
const ftRebate = document.querySelector("#ftRebate")

const repTaxOntar = document.querySelector("#repTaxOntar")
const repTaxToron = document.querySelector("#repTaxToron")
const repFirstRebate = document.querySelector("#repFirstRebate")
const repTotTax = document.querySelector("#repTotTax")

const gtaResid = document.querySelector("#gtaResid")
const firstTime = document.querySelector("#firstTime")
const refin = document.querySelector("#refin")

const netLand = document.querySelector("#netLand")

const estLegal = document.querySelector("#estLegal")
const estInsur = document.querySelector("#estInsur")
const electReg = document.querySelector("#electReg")
const Registration = document.querySelector("#Registration")
const Appraisal = document.querySelector("#Appraisal")
const lendersFee = document.querySelector("#lendersFee")
const brokersFee = document.querySelector("#brokersFee")
const estTotal = document.querySelector("#estTotal")

const repEstLegal = document.querySelector("#repEstLegal")
const repEstInsur = document.querySelector("#repEstInsur")
const repElecReg = document.querySelector("#repElecReg")
const repReqist = document.querySelector("#repReqist")
const repAppr = document.querySelector("#repAppr")
const repLendFee = document.querySelector("#repLendFee")
const repBroFee = document.querySelector("#repBroFee")
const repEstTot = document.querySelector("#repEstTot")

const gds = document.querySelector("#gds")
const tds = document.querySelector("#tds")
const repGds = document.querySelector("#repGds")
const repTds = document.querySelector("#repTds")

CalcuText.addEventListener("click", CalcuClk)
RepText.addEventListener("click", RepClk)
AmTabText.addEventListener("click", AmTabClk)



let path = window.location.href;
let page = path.split("/").pop();

function initiall () {
  page = "index.html"
}

if (page == "index.html") {
  
  if (JSON.parse(localStorage.getItem("gtaResid")) == "" || JSON.parse(localStorage.getItem("gtaResid")) == null || JSON.parse(localStorage.getItem("gtaResid")) == undefined) {
    gtaResid.checked = false
  }else {
    gtaResid.checked = JSON.parse(localStorage.getItem("gtaResid"))
  }
    
  if (JSON.parse(localStorage.getItem("firstTime")) == "" || JSON.parse(localStorage.getItem("firstTime")) == null || JSON.parse(localStorage.getItem("firstTime")) == undefined) {
    firstTime.checked = false
  }else {
    firstTime.checked = JSON.parse(localStorage.getItem("firstTime"))
  }

  if (JSON.parse(localStorage.getItem("refin")) == "" || JSON.parse(localStorage.getItem("refin")) == null || JSON.parse(localStorage.getItem("refin")) == undefined) {
    refin.checked = false
  }else {
    refin.checked = JSON.parse(localStorage.getItem("refin"))
  }

  localStorage.setItem('gtaResid',JSON.stringify(gtaResid.checked))
  localStorage.setItem('firstTime',JSON.stringify(firstTime.checked))
  localStorage.setItem('refin',JSON.stringify(refin.checked))

  
  if (JSON.parse(localStorage.getItem("Compound")) == "" || JSON.parse(localStorage.getItem("Compound")) == null || JSON.parse(localStorage.getItem("Compound")) == undefined) {
    CompoundSel.value = 'Semi-Annual';
    localStorage.setItem('Compound',JSON.stringify(CompoundSel.value))
  }else {
    CompoundSel.value = JSON.parse(localStorage.getItem("Compound"))
  }
  if (JSON.parse(localStorage.getItem("PerYear")) == "" || JSON.parse(localStorage.getItem("PerYear")) == null || JSON.parse(localStorage.getItem("PerYear")) == undefined) {
    PerYearSel.value = '12';
    localStorage.setItem('PerYear',JSON.stringify(PerYearSel.value))
  }else {
    PerYearSel.value = JSON.parse(localStorage.getItem("PerYear"))
    localStorage.setItem('PerYear',JSON.stringify(PerYearSel.value))
  }
    
  
  CompoundSel.addEventListener("change", () => {
    localStorage.setItem('Compound',JSON.stringify(CompoundSel.value))
  })
  PerYearSel.addEventListener("change", () => {
    localStorage.setItem('PerYear',JSON.stringify(PerYearSel.value))
  })

  


  
  if (JSON.parse(localStorage.getItem("taxOntar")) == "" || JSON.parse(localStorage.getItem("taxOntar")) == null || JSON.parse(localStorage.getItem("taxOntar")) == 0  || JSON.parse(localStorage.getItem("taxOntar")) == undefined) {
    taxOntar.textContent = "$0"
    netLand.textContent = "$0"
  }else {
    taxOntar.textContent =`$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`

    if (gtaResid.checked == true && firstTime.checked == true && refin.checked == true  ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((((JSON.parse(localStorage.getItem("taxOntar"))) * 2) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))) * 2)}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
  
    else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar")) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
    else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  }
  

gtaResid.addEventListener("click", ()=> {
  localStorage.setItem('gtaResid',JSON.stringify(gtaResid.checked))

  if (JSON.parse(localStorage.getItem("taxOntar")) == "" || JSON.parse(localStorage.getItem("taxOntar")) == null || JSON.parse(localStorage.getItem("taxOntar")) == 0 ) {
    
    if (JSON.parse(localStorage.getItem("gtaResid")) == false) {
      taxToron.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
    }
  }else {
      
    if (gtaResid.checked == true && firstTime.checked == true && refin.checked == true  ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((((JSON.parse(localStorage.getItem("taxOntar"))) * 2) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))) * 2)}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
  
    else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar")) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
    else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  }
  let esTot = +estLegal.value.replace(/,/g,"") + +estInsur.value.replace(/,/g,"") + +electReg.value.replace(/,/g,"") + +Registration.value.replace(/,/g,"") + +Appraisal.value.replace(/,/g,"") + +lendersFee.value.replace(/,/g,"") + +brokersFee.value.replace(/,/g,"") + +(netLand.textContent.replace(/,/g,"")).replace("$","")
  localStorage.setItem('estTotal',JSON.stringify(esTot))
  estTotal.textContent = `$${addSeparator(esTot)}`
})
firstTime.addEventListener("click", ()=> {
  localStorage.setItem('firstTime',JSON.stringify(firstTime.checked))
  
    if (JSON.parse(localStorage.getItem("taxOntar")) == "" || JSON.parse(localStorage.getItem("taxOntar")) == null || JSON.parse(localStorage.getItem("taxOntar")) == 0) {
     ftRebate.textContent = "$0"
     localStorage.setItem('ftRebate',JSON.stringify(0))
    }else {
      
        
    if (gtaResid.checked == true && firstTime.checked == true && refin.checked == true  ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((((JSON.parse(localStorage.getItem("taxOntar"))) * 2) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))) * 2)}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
  
    else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar")) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
    else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
    }
    let esTot = +estLegal.value.replace(/,/g,"") + +estInsur.value.replace(/,/g,"") + +electReg.value.replace(/,/g,"") + +Registration.value.replace(/,/g,"") + +Appraisal.value.replace(/,/g,"") + +lendersFee.value.replace(/,/g,"") + +brokersFee.value.replace(/,/g,"") + +(netLand.textContent.replace(/,/g,"")).replace("$","")
    localStorage.setItem('estTotal',JSON.stringify(esTot))
    estTotal.textContent = `$${addSeparator(esTot)}`
})
refin.addEventListener("click", ()=> {
  
  localStorage.setItem('refin',JSON.stringify(refin.checked))
  if (JSON.parse(localStorage.getItem("taxOntar")) == "" || JSON.parse(localStorage.getItem("taxOntar")) == null || JSON.parse(localStorage.getItem("taxOntar")) == 0 ) {
      netLand.textContent = "$0"
      localStorage.setItem('netLand',JSON.stringify(0))
  }else {
    
      
    if (gtaResid.checked == true && firstTime.checked == true && refin.checked == true  ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((((JSON.parse(localStorage.getItem("taxOntar"))) * 2) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))) * 2)}`
      localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
  
    else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
      netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar")) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
  
    else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == true ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = "$0"
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(0))
    }else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == false ) {
      taxToron.textContent = "$0"
      ftRebate.textContent = "$0"
      netLand.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
      localStorage.setItem('taxToron',JSON.stringify(0))
      localStorage.setItem('ftRebate',JSON.stringify(0))
      localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
    }
    
  }
  let esTot = +estLegal.value.replace(/,/g,"") + +estInsur.value.replace(/,/g,"") + +electReg.value.replace(/,/g,"") + +Registration.value.replace(/,/g,"") + +Appraisal.value.replace(/,/g,"") + +lendersFee.value.replace(/,/g,"") + +brokersFee.value.replace(/,/g,"") + +(netLand.textContent.replace(/,/g,"")).replace("$","")
  localStorage.setItem('estTotal',JSON.stringify(esTot))
  estTotal.textContent = `$${addSeparator(esTot)}`
})

  

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
  if (JSON.parse(localStorage.getItem("QPMT")) == "" || JSON.parse(localStorage.getItem("QPMT")) == 0 || JSON.parse(localStorage.getItem("QPMT")) == null) {
    qualMort.textContent = "$0"
  }else {
    qualMort.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("QPMT"))))}`
    
  }
  

  if (JSON.parse(localStorage.getItem("totPay")) == "" || JSON.parse(localStorage.getItem("totPay")) == null || JSON.parse(localStorage.getItem("totPay")) == 0) {
    totPay.textContent = "$0"
  }else {
    totPay.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("totPay"))))}`
  }

  if (JSON.parse(localStorage.getItem("otDebt1")) == "" || JSON.parse(localStorage.getItem("otDebt1")) == null || JSON.parse(localStorage.getItem("otDebt1")) == 0) {
    otDebt1.value = ""
  }else {
    otDebt1.value = addSeparator(JSON.parse(localStorage.getItem("otDebt1")))
  }
  if (JSON.parse(localStorage.getItem("otDebt2")) == "" || JSON.parse(localStorage.getItem("otDebt2")) == null || JSON.parse(localStorage.getItem("otDebt2")) == 0) {
    otDebt2.value = ""
  }else {
    otDebt2.value = addSeparator(JSON.parse(localStorage.getItem("otDebt2")))
  }
  if (JSON.parse(localStorage.getItem("otDebt3")) == "" || JSON.parse(localStorage.getItem("otDebt3")) == null || JSON.parse(localStorage.getItem("otDebt3")) == 0) {
    otDebt3.value = ""
  }else {
    otDebt3.value = addSeparator(JSON.parse(localStorage.getItem("otDebt3")))
  }
  if (JSON.parse(localStorage.getItem("yMortPay")) == "" || JSON.parse(localStorage.getItem("yMortPay")) == null) {
    yMortPay.textContent = "$0" 
  }else { 
    yMortPay.innerText = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("yMortPay"))))}`
  }
  if (JSON.parse(localStorage.getItem("totDebt")) == "" || JSON.parse(localStorage.getItem("totDebt")) == null || JSON.parse(localStorage.getItem("totDebt")) == 0) {
    totDebt.textContent = "$0"
  }else {
    totDebt.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("totDebt"))))}`
  }

  if (JSON.parse(localStorage.getItem("income1")) == "" || JSON.parse(localStorage.getItem("income1")) == null || JSON.parse(localStorage.getItem("income1")) == 0) {
    income1.value = ""
  }else {
    income1.value = addSeparator(JSON.parse(localStorage.getItem("income1")))
  }
  if (JSON.parse(localStorage.getItem("income2")) == "" || JSON.parse(localStorage.getItem("income2")) == null || JSON.parse(localStorage.getItem("income2")) == 0) {
    income2.value = ""
  }else {
    income2.value = addSeparator(JSON.parse(localStorage.getItem("income2")))
  }
  if (JSON.parse(localStorage.getItem("income3")) == "" || JSON.parse(localStorage.getItem("income3")) == null || JSON.parse(localStorage.getItem("income3")) == 0) {
    income3.value = ""
  }else {
    income3.value = addSeparator(JSON.parse(localStorage.getItem("income3")))
  }
  if (JSON.parse(localStorage.getItem("totIncome")) == "" || JSON.parse(localStorage.getItem("totIncome")) == null || JSON.parse(localStorage.getItem("totIncome")) == 0) {
    totIncome.textContent = "$0"
  }else {
    totIncome.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("totIncome")))}`
  }
  


  if (JSON.parse(localStorage.getItem("estLegal")) == "" || JSON.parse(localStorage.getItem("estLegal")) == null || JSON.parse(localStorage.getItem("estLegal")) == 0) {
    estLegal.value = ""
  }else {
    estLegal.value = addSeparator(JSON.parse(localStorage.getItem("estLegal")))
  }
  if (JSON.parse(localStorage.getItem("estInsur")) == "" || JSON.parse(localStorage.getItem("estInsur")) == null || JSON.parse(localStorage.getItem("estInsur")) == 0) {
    estInsur.value = ""
  }else {
    estInsur.value = addSeparator(JSON.parse(localStorage.getItem("estInsur")))
  }
  if (JSON.parse(localStorage.getItem("electReg")) == "" || JSON.parse(localStorage.getItem("electReg")) == null || JSON.parse(localStorage.getItem("electReg")) == 0) {
    electReg.value = ""
  }else {
    electReg.value = addSeparator(JSON.parse(localStorage.getItem("electReg")))
  }
  if (JSON.parse(localStorage.getItem("Registration")) == "" || JSON.parse(localStorage.getItem("Registration")) == null || JSON.parse(localStorage.getItem("Registration")) == 0) {
    Registration.value = ""
  }else {
    Registration.value = addSeparator(JSON.parse(localStorage.getItem("Registration")))
  }
  if (JSON.parse(localStorage.getItem("Appraisal")) == "" || JSON.parse(localStorage.getItem("Appraisal")) == null || JSON.parse(localStorage.getItem("Appraisal")) == 0) {
    Appraisal.value = ""
  }else {
    Appraisal.value = addSeparator(JSON.parse(localStorage.getItem("Appraisal")))
  }
  if (JSON.parse(localStorage.getItem("lendersFee")) == "" || JSON.parse(localStorage.getItem("lendersFee")) == null || JSON.parse(localStorage.getItem("lendersFee")) == 0) {
    lendersFee.value = ""
  }else {
    lendersFee.value = addSeparator(JSON.parse(localStorage.getItem("lendersFee")))
  }
  if (JSON.parse(localStorage.getItem("brokersFee")) == "" || JSON.parse(localStorage.getItem("brokersFee")) == null || JSON.parse(localStorage.getItem("brokersFee")) == 0) {
    brokersFee.value = ""
  }else {
    brokersFee.value = addSeparator(JSON.parse(localStorage.getItem("brokersFee")))
  }
  if (JSON.parse(localStorage.getItem("estTotal")) == "" || JSON.parse(localStorage.getItem("estTotal")) == null || JSON.parse(localStorage.getItem("estTotal")) == 0) {
    estTotal.textContent = "$0"
  }else {
    estTotal.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("estTotal")))}`
  }

  if (JSON.parse(localStorage.getItem("gds")) == "" || JSON.parse(localStorage.getItem("gds")) == null) {
    gds.value = ""
  }else {
    gds.value = addSeparator(JSON.parse(localStorage.getItem("gds")))
  }
  if (JSON.parse(localStorage.getItem("tds")) == "" || JSON.parse(localStorage.getItem("tds")) == null) {
    tds.value = ""
  }else {
    tds.value = addSeparator(JSON.parse(localStorage.getItem("tds")))
  }



} else if (page == "Report.html") {
  
  pdfButton.addEventListener('click', function(e){
    generatePDF(e)
    })
  function generatePDF(e) {
    // var printSection = e.target.dataset.print;
    // var x = printSection.slice(0,printSection.indexOf('-'))
    // var element = document.getElementById('pdf-area');
    var element = document.getElementById('repContainer');
    element.classList.add('print-action')
      var opt = {
        filename:     'gds-tds-calculator-report.pdf',
        // enableLinks: true,
        margin: [.12, .12, .12, .12],
        pagebreak: {mode:['avoid-all','css'], after: '.pdf-page-break-after',before: '.pdf-page-break-before' },
        // pagebreak: {mode:'css'},
        image: {type: 'jpeg', quality: .98},
        html2canvas: {scale: 2,logging: false,useCORS: true,},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait', compressPDF: false},
      };
      // $('.lpc-wrapper').removeClass('zeroHeight');
    //   document.querySelector('.loader-container').style.display = 'flex';
      // barChart.setSize(400,300);
      // columnChart3d.setSize(800,300);
      // barChart.reflow();
      // columnChart3d.reflow();
      setTimeout(function(){
      // html2pdf().set(opt).from(element).output('datauristring').then(function(val){ // datauristring blob
      html2pdf().set(opt).from(element).save().then(function(val){ // datauristring blob
        element.classList.remove('pdf-button');
        // $('.lpc-wrapper').addClass('zeroHeight');
      //   document.querySelector('.loader-container').style.display = 'none';
        
        
      });
      },1000)
      
     
    }
  


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

  if (JSON.parse(localStorage.getItem("PMT")) == "" || JSON.parse(localStorage.getItem("PMT")) == 0 || JSON.parse(localStorage.getItem("PMT")) == null) {
    repMortPay.innerText = "$0"
  }else {
    repMortPay.innerText = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("PMT"))))}`
    
  }
  if (JSON.parse(localStorage.getItem("yMortPay")) == "" || JSON.parse(localStorage.getItem("yMortPay")) == 0 || JSON.parse(localStorage.getItem("yMortPay")) == null) {
    repYearMort.innerText = "$0" 
  }else {
    repYearMort.innerText = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("yMortPay"))))}`
    
  }

  if (JSON.parse(localStorage.getItem("QPMT")) == "" || JSON.parse(localStorage.getItem("QPMT")) == 0 || JSON.parse(localStorage.getItem("QPMT")) == null) {
    repQualMort.textContent = "$0"
  }else {
    repQualMort.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("QPMT"))))}`
    
  }

  if (JSON.parse(localStorage.getItem("estProTax")) == "" || JSON.parse(localStorage.getItem("estProTax")) == null) {
    repEstProTax.innerText = "$0" 
  }else {
    repEstProTax.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("estProTax")))}`
  }
  if (JSON.parse(localStorage.getItem("yProTax")) == "" || JSON.parse(localStorage.getItem("yProTax")) == null) {
    repProTax.innerText = "$0" 
  }else {
    repProTax.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("yProTax")))}`
  }
  if (JSON.parse(localStorage.getItem("maintFee")) == "" || JSON.parse(localStorage.getItem("maintFee")) == null) {
    repMaintFee.innerText = "$0" 
  }else {
    repMaintFee.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("maintFee")))}`
  }
  if (JSON.parse(localStorage.getItem("yMaintFee")) == "" || JSON.parse(localStorage.getItem("yMaintFee")) == null) {
    repYearMaint.innerText = "$0" 
  }else { 
    repYearMaint.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("yMaintFee")))}`
  }
  if (JSON.parse(localStorage.getItem("heHy")) == "" || JSON.parse(localStorage.getItem("heHy")) == null) {
    repHeHy.innerText = "$0" 
  }else {
    repHeHy.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("heHy")))}`
  }
  if (JSON.parse(localStorage.getItem("yHeHy")) == "" || JSON.parse(localStorage.getItem("yHeHy")) == null) {
    repYearHeHy.innerText = "$0" 
  }else { 
    repYearHeHy.innerText = `$${addSeparator(JSON.parse(localStorage.getItem("yHeHy")))}`
  }
  
  if (JSON.parse(localStorage.getItem("totPay")) == "" || JSON.parse(localStorage.getItem("totPay")) == null) {
    totFee.innerText = "$0" 
  }else { 
    totFee.innerText = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("totPay"))))}`
  }

  if (JSON.parse(localStorage.getItem("otDebt1")) == "" || JSON.parse(localStorage.getItem("otDebt1")) == null || JSON.parse(localStorage.getItem("otDebt1")) == 0) {
    repDebt1.textContent = "$0"
  }else {
    repDebt1.textContent = addSeparator(JSON.parse(localStorage.getItem("otDebt1")))
  }
  if (JSON.parse(localStorage.getItem("otDebt2")) == "" || JSON.parse(localStorage.getItem("otDebt2")) == null || JSON.parse(localStorage.getItem("otDebt2")) == 0) {
    repDebt2.textContent = "$0"
  }else {
    repDebt2.textContent = addSeparator(JSON.parse(localStorage.getItem("otDebt2")))
  }
  if (JSON.parse(localStorage.getItem("otDebt3")) == "" || JSON.parse(localStorage.getItem("otDebt3")) == null || JSON.parse(localStorage.getItem("otDebt3")) == 0) {
    repDebt3.textContent = "$0"
  }else {
    repDebt3.textContent = addSeparator(JSON.parse(localStorage.getItem("otDebt3")))
  }
  if (JSON.parse(localStorage.getItem("totDebt")) == "" || JSON.parse(localStorage.getItem("totDebt")) == null || JSON.parse(localStorage.getItem("totDebt")) == 0) {
    repTotDebt.textContent = "$0"
  }else { 
    repTotDebt.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("totDebt"))))}`
  }

  if (JSON.parse(localStorage.getItem("income1")) == "" || JSON.parse(localStorage.getItem("income1")) == null || JSON.parse(localStorage.getItem("income1")) == 0) {
    repInc1.textContent = "$0"
  }else {
    repInc1.textContent = addSeparator(JSON.parse(localStorage.getItem("income1")))
  }
  if (JSON.parse(localStorage.getItem("income2")) == "" || JSON.parse(localStorage.getItem("income2")) == null || JSON.parse(localStorage.getItem("income2")) == 0) {
    repInc2.textContent = "$0"
  }else {
    repInc2.textContent = addSeparator(JSON.parse(localStorage.getItem("income2")))
  }
  if (JSON.parse(localStorage.getItem("income3")) == "" || JSON.parse(localStorage.getItem("income3")) == null || JSON.parse(localStorage.getItem("income3")) == 0) {
    repInc3.textContent = "$0"
  }else {
    repInc3.textContent = addSeparator(JSON.parse(localStorage.getItem("income3")))
  }
  if (JSON.parse(localStorage.getItem("totIncome")) == "" || JSON.parse(localStorage.getItem("totIncome")) == null || JSON.parse(localStorage.getItem("totIncome")) == 0) {
    repTotInc.textContent = "$0"
  }else {
    repTotInc.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("totIncome"))))}`
  }

  if (JSON.parse(localStorage.getItem("qualRate")) == "" || JSON.parse(localStorage.getItem("qualRate")) == null) {
    repQualRate.innerText = "0.0%" 
  }else {
    repQualRate.innerText = `${(Math.round((JSON.parse(localStorage.getItem("qualRate"))) * 100) / 100).toFixed(2)}%`
  }

  if (JSON.parse(localStorage.getItem("repGds")) == "" || JSON.parse(localStorage.getItem("repGds")) == null) {
    repGds.innerText = "0.0%" 
  }else {
    repGds.innerText = `${(Math.round((JSON.parse(localStorage.getItem("repGds"))) * 100) / 100).toFixed(2)}%`
  }
  if (JSON.parse(localStorage.getItem("repTds")) == "" || JSON.parse(localStorage.getItem("repTds")) == null) {
    repTds.innerText = "0.0%" 
  }else {
    repTds.innerText = `${(Math.round((JSON.parse(localStorage.getItem("repTds"))) * 100) / 100).toFixed(2)}%`
  }

  if (JSON.parse(localStorage.getItem("taxOntar")) == "" || JSON.parse(localStorage.getItem("taxOntar")) == null || JSON.parse(localStorage.getItem("taxOntar")) == 0 ) {
    repTaxOntar.textContent = "$0"
  }else {
    repTaxOntar.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
  }
  if (JSON.parse(localStorage.getItem("taxToron")) == "" || JSON.parse(localStorage.getItem("taxToron")) == null || JSON.parse(localStorage.getItem("taxToron")) == 0 ) {
    repTaxToron.textContent = "$0"
  }else {
    repTaxToron.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxToron")))}`
  }
  if (JSON.parse(localStorage.getItem("ftRebate")) == "" || JSON.parse(localStorage.getItem("ftRebate")) == null  || JSON.parse(localStorage.getItem("ftRebate")) == 0) {
    repFirstRebate.textContent = "$0"
    
  }else {
    repFirstRebate.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("ftRebate")))}`
  }
  if (JSON.parse(localStorage.getItem("netLand")) == undefined || JSON.parse(localStorage.getItem("netLand")) == "" || JSON.parse(localStorage.getItem("netLand")) == null || JSON.parse(localStorage.getItem("netLand")) == 0 ) {
    repTotTax.textContent = "$0"
  }else {
    repTotTax.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("netLand")))}`
  }

  if (JSON.parse(localStorage.getItem("estLegal")) == "" || JSON.parse(localStorage.getItem("estLegal")) == null || JSON.parse(localStorage.getItem("estLegal")) == 0) {
    repEstLegal.textContent = "$0"
  }else {
    repEstLegal.textContent = addSeparator(JSON.parse(localStorage.getItem("estLegal")))
  }
  if (JSON.parse(localStorage.getItem("estInsur")) == "" || JSON.parse(localStorage.getItem("estInsur")) == null || JSON.parse(localStorage.getItem("estInsur")) == 0) {
    repEstInsur.textContent = "$0"
  }else {
    repEstInsur.textContent = addSeparator(JSON.parse(localStorage.getItem("estInsur")))
  }
  if (JSON.parse(localStorage.getItem("electReg")) == "" || JSON.parse(localStorage.getItem("electReg")) == null || JSON.parse(localStorage.getItem("electReg")) == 0) {
    repElecReg.textContent = "$0"
  }else {
    repElecReg.textContent = addSeparator(JSON.parse(localStorage.getItem("electReg")))
  }
  if (JSON.parse(localStorage.getItem("Registration")) == "" || JSON.parse(localStorage.getItem("Registration")) == null || JSON.parse(localStorage.getItem("Registration")) == 0) {
    repReqist.textContent = "$0"
  }else {
    repReqist.textContent = addSeparator(JSON.parse(localStorage.getItem("Registration")))
  }
  if (JSON.parse(localStorage.getItem("Appraisal")) == "" || JSON.parse(localStorage.getItem("Appraisal")) == null || JSON.parse(localStorage.getItem("Appraisal")) == 0) {
    repAppr.textContent = "$0"
  }else {
    repAppr.textContent = addSeparator(JSON.parse(localStorage.getItem("Appraisal")))
  }
  if (JSON.parse(localStorage.getItem("lendersFee")) == "" || JSON.parse(localStorage.getItem("lendersFee")) == null || JSON.parse(localStorage.getItem("lendersFee")) == 0) {
    repLendFee.textContent = "$0"
  }else {
    repLendFee.textContent = addSeparator(JSON.parse(localStorage.getItem("lendersFee")))
  }
  if (JSON.parse(localStorage.getItem("brokersFee")) == "" || JSON.parse(localStorage.getItem("brokersFee")) == null || JSON.parse(localStorage.getItem("brokersFee")) == 0) {
    repBroFee.textContent = "$0"
  }else {
    repBroFee.textContent = addSeparator(JSON.parse(localStorage.getItem("brokersFee")))
  }
  if (JSON.parse(localStorage.getItem("estTotal")) == "" || JSON.parse(localStorage.getItem("estTotal")) == null || JSON.parse(localStorage.getItem("estTotal")) == 0) {
    repEstTot.textContent = "$0"
  }else {
    repEstTot.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("estTotal")))}`
  }



} else if (page == "AmorTable.html") {
  if (JSON.parse(localStorage.getItem("repLoanAmo")) == "" || JSON.parse(localStorage.getItem("repLoanAmo")) == null) {
    principal.textContent = "$0" 
  }else {
    
    principal.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("repLoanAmo")))}`
  }
  if (JSON.parse(localStorage.getItem("estVeriable")) == "" || JSON.parse(localStorage.getItem("estVeriable")) == null) {
    amortIntRate.textContent = "0.0%" 
  }else {
    
    amortIntRate.textContent = `${(Math.round((JSON.parse(localStorage.getItem("estVeriable"))) * 100) / 100).toFixed(2)}%`
  }
  if (JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null || JSON.parse(localStorage.getItem("durLoan")) == 0) {
    amortPeriod.innerText = 0
  }else {
    amortPeriod.innerText = (JSON.parse(localStorage.getItem("durLoan")) / 12 >= 1) ? ((JSON.parse(localStorage.getItem("durLoan")) / 12).toFixed(2)) : ((JSON.parse(localStorage.getItem("durLoan")) / 12).toFixed(2))
  }

  if (JSON.parse(localStorage.getItem("Compound")) == "" || JSON.parse(localStorage.getItem("Compound")) == null) {
    amortCompound.innerText = "" 
  }else {
    
    amortCompound.innerText = JSON.parse(localStorage.getItem("Compound"))
  }
  if (JSON.parse(localStorage.getItem("PerYear")) == "" || JSON.parse(localStorage.getItem("PerYear")) == null) {
    amortPerYear.innerText = "" 
  }else {
    
    amortPerYear.innerText = JSON.parse(localStorage.getItem("PerYear"))
  }
  

  if (JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null || JSON.parse(localStorage.getItem("durLoan")) == 0) {
    
  }else {
    createTable(JSON.parse(localStorage.getItem("durLoan")))
  }

  if (JSON.parse(localStorage.getItem("PMT")) == "" || JSON.parse(localStorage.getItem("PMT")) == null) {
    amortPay.innerText = "$0" 
  }else {
    
    amortPay.innerText = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("PMT"))))}`
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
  localStorage.setItem('otDebt1',JSON.stringify(otDebt1.value.replace(/,/g,"")))
  localStorage.setItem('otDebt2',JSON.stringify(otDebt2.value.replace(/,/g,"")))
  localStorage.setItem('otDebt3',JSON.stringify(otDebt3.value.replace(/,/g,"")))
  localStorage.setItem('income1',JSON.stringify(income1.value.replace(/,/g,"")))
  localStorage.setItem('income2',JSON.stringify(income2.value.replace(/,/g,"")))
  localStorage.setItem('income3',JSON.stringify(income3.value.replace(/,/g,"")))


  
  localStorage.setItem('estLegal',JSON.stringify(estLegal.value.replace(/,/g,"")))
  localStorage.setItem('estInsur',JSON.stringify(estInsur.value.replace(/,/g,"")))
  localStorage.setItem('electReg',JSON.stringify(electReg.value.replace(/,/g,"")))
  localStorage.setItem('Registration',JSON.stringify(Registration.value.replace(/,/g,"")))
  localStorage.setItem('Appraisal',JSON.stringify(Appraisal.value.replace(/,/g,"")))
  localStorage.setItem('lendersFee',JSON.stringify(lendersFee.value.replace(/,/g,"")))
  localStorage.setItem('brokersFee',JSON.stringify(brokersFee.value.replace(/,/g,"")))

  localStorage.setItem('gds',JSON.stringify(gds.value.replace(/,/g,"")))
  localStorage.setItem('tds',JSON.stringify(tds.value.replace(/,/g,"")))


  let otDeb1 = otDebt1.value.replace(/,/g,"")
  let otDeb2 = otDebt2.value.replace(/,/g,"")
  let otDeb3 = otDebt3.value.replace(/,/g,"")

  let inc1 = income1.value.replace(/,/g,"")
  let inc2 = income2.value.replace(/,/g,"")
  let inc3 = income3.value.replace(/,/g,"")

  let tempPri = purchPrice.value.replace(/,/g,"");
  let tempPay = downPay.value.replace(/,/g,"");



  if (tempPri != "" && tempPri != 0 && tempPay != "" && tempPay != 0) {

    let befCmHc = (tempPri - tempPay) * (+1 + +0.025)
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

    let insAmount = Math.round((tempPri - tempPay) * perCm)

    localStorage.setItem('cmHc',JSON.stringify(insAmount))
    if (insAmount == 0){
      cmHc.value = insAmount
    }else {
      cmHc.value = addSeparator(insAmount)
    }
    
    localStorage.setItem('repLoanAmo',JSON.stringify((+(tempPri - tempPay) + +insAmount) ))
  }else {
    localStorage.setItem('perDownPay',JSON.stringify(0))
  }


  let firs55 = compareTax(55000,tempPri) 
  let to250 = compareTax(195000,(tempPri - firs55)) 
  let to400 = compareTax(150000,((tempPri - firs55) - to250)) 
  let to2mil = compareTax(1600000,(((tempPri - firs55) - to250) - to400)) 
  let over2mil = compareTax(99999999999999,((((tempPri - firs55) - to250) - to400) - to2mil)) 

  console.log(firs55 * 0.005)
  console.log(to250 * 0.01)
  console.log(to400 * 0.015)
  console.log(to2mil )
  console.log(over2mil * 0.025)
  

  taxOntar.textContent = `$${addSeparator(Math.round(+(firs55 * 0.005) + +(to250 * 0.01) + +(to400 * 0.015) + +(to2mil * 0.02) + +(over2mil * 0.025)))}`
  
  localStorage.setItem('netLand',JSON.stringify(compareFT(taxOntar.textContent)))
  localStorage.setItem('taxOntar',JSON.stringify((taxOntar.textContent.replace(/,/g,"")).replace("$","")))
  function compareTax (inc,price) {
    if (inc < price) {
      return inc
    }else {
      return price
    }
  }

  let transTax = 0

  let ymPay = 0
  let prTax = 0
  let mtFee = 0
  let hHy = 0
  

  if (estProTax.value.replace(/,/g,"") != 0) {
    prTax = estProTax.value.replace(/,/g,"") * 12
    yProTax.textContent = `$${addSeparator(prTax)}`
  }
  if (maintFee.value.replace(/,/g,"") != 0) {
    mtFee = (maintFee.value.replace(/,/g,"") * 12)/2
    yMaintFee.textContent = `$${addSeparator(mtFee)}`
  }
  if (heHy.value.replace(/,/g,"") != 0) {
    hHy = heHy.value.replace(/,/g,"") * 12
    yHeHy.textContent = `$${addSeparator(hHy)}`
  }
  
 
  if (JSON.parse(localStorage.getItem("estVeriable")) == null || JSON.parse(localStorage.getItem("estVeriable")) == 0 || JSON.parse(localStorage.getItem("estVeriable")) == undefined || JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null || JSON.parse(localStorage.getItem("durLoan")) == 0 || JSON.parse(localStorage.getItem("durLoan")) == undefined || JSON.parse(localStorage.getItem("repLoanAmo")) == "" || JSON.parse(localStorage.getItem("repLoanAmo")) == null || JSON.parse(localStorage.getItem("repLoanAmo")) == 0 || JSON.parse(localStorage.getItem("repLoanAmo")) == undefined) {
    yMortPay.textContent = "$0"
  }else {
    localStorage.setItem('PMT',JSON.stringify(PMTT(JSON.parse(localStorage.getItem("estVeriable")) , (JSON.parse(localStorage.getItem("durLoan")) / 12), JSON.parse(localStorage.getItem("repLoanAmo")) )))
  }
  
  if (JSON.parse(localStorage.getItem("qualRate")) == null || JSON.parse(localStorage.getItem("qualRate")) == 0 || JSON.parse(localStorage.getItem("qualRate")) == undefined || JSON.parse(localStorage.getItem("durLoan")) == "" || JSON.parse(localStorage.getItem("durLoan")) == null || JSON.parse(localStorage.getItem("durLoan")) == 0 || JSON.parse(localStorage.getItem("durLoan")) == undefined || JSON.parse(localStorage.getItem("repLoanAmo")) == "" || JSON.parse(localStorage.getItem("repLoanAmo")) == null || JSON.parse(localStorage.getItem("repLoanAmo")) == 0 || JSON.parse(localStorage.getItem("repLoanAmo")) == undefined) {
    yMortPay.textContent = "$0"
    qualMort.textContent = "$0"
  }else {
    localStorage.setItem('QPMT',JSON.stringify(Math.round(PMTT(JSON.parse(localStorage.getItem("qualRate")) , (JSON.parse(localStorage.getItem("durLoan")) / 12), JSON.parse(localStorage.getItem("repLoanAmo"))) )))
    qualMort.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("QPMT"))))}`

  }
  

  if (JSON.parse(localStorage.getItem("QPMT")) == "" || JSON.parse(localStorage.getItem("QPMT")) == null || JSON.parse(localStorage.getItem("QPMT")) == 0 || JSON.parse(localStorage.getItem("QPMT")) == undefined) {

    yMortPay.textContent = "$0"
  }else {
    ymPay = JSON.parse(localStorage.getItem("QPMT")) * 12
    yMortPay.textContent = `$${addSeparator(Math.round(ymPay))}`
    localStorage.setItem('yMortPay',JSON.stringify((yMortPay.textContent.replace(/,/g,"")).replace("$","")))
  }
  

  localStorage.setItem('yProTax',JSON.stringify((yProTax.textContent.replace(/,/g,"")).replace("$","")))
  localStorage.setItem('yMaintFee',JSON.stringify((yMaintFee.textContent.replace(/,/g,"")).replace("$","")))
  localStorage.setItem('yHeHy',JSON.stringify((yHeHy.textContent.replace(/,/g,"")).replace("$","")))

  let toPay = Math.round(+ymPay + +prTax + +mtFee + +hHy)   
  totPay.textContent = `$${addSeparator(toPay)}`
  localStorage.setItem('totPay',JSON.stringify((totPay.textContent.replace(/,/g,"")).replace("$","")))

  let toDeb = Math.round(+(otDeb1 * 12) + +(otDeb2 * 12) + +(otDeb3 * 12) + +toPay)
  totDebt.textContent = `$${addSeparator(toDeb)}`
  localStorage.setItem('totDebt',JSON.stringify((totDebt.textContent.replace(/,/g,"")).replace("$","")))

  let toInc = Math.round(+inc1 + +inc2 + +inc3)
  totIncome.textContent = `$${addSeparator(toInc)}`
  localStorage.setItem('totIncome',JSON.stringify((totIncome.textContent.replace(/,/g,"")).replace("$","")))

  let toGds
  let toTds
  if (toPay > 0 && toInc > 0) {
    toGds = (((Math.round((toPay / toInc) * 100))* 100) / 100).toFixed(2)
  
  }else {
    toGds = (0).toFixed(2)
  }
  
  if (toDeb > 0 && toInc > 0) {
    toTds =  (((Math.round((toDeb / toInc) * 100))* 100) / 100).toFixed(2)
    
  }else {
    toTds = (0).toFixed(2)
  }
  localStorage.setItem('repGds',JSON.stringify(toGds))
  localStorage.setItem('repTds',JSON.stringify(toTds))





    
  if (gtaResid.checked == true && firstTime.checked == true && refin.checked == true  ) {
    taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
    ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
    netLand.textContent = "$0"
    localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
    localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
    localStorage.setItem('netLand',JSON.stringify(0))
  }else if (gtaResid.checked == true && firstTime.checked == true && refin.checked == false ) {
    taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
    ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
    netLand.textContent = `$${addSeparator((((JSON.parse(localStorage.getItem("taxOntar"))) * 2) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
    localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
    localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
    localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
  }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == true ) {
    taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
    ftRebate.textContent = "$0"
    netLand.textContent = "$0"
    localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
    localStorage.setItem('ftRebate',JSON.stringify(0))
    localStorage.setItem('netLand',JSON.stringify(0))
  }else if (gtaResid.checked == true && firstTime.checked == false && refin.checked == false ) {
    taxToron.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))))}`
    ftRebate.textContent = "$0"
    netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar"))) * 2)}`
    localStorage.setItem('taxToron',JSON.stringify(taxToron.textContent.replace(/,/g,"")).replace("$",""))
    localStorage.setItem('ftRebate',JSON.stringify(0))
    localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
  }


  else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == true ) {
    taxToron.textContent = "$0"
    ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
    netLand.textContent = "$0"
    localStorage.setItem('taxToron',JSON.stringify(0))
    localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
    localStorage.setItem('netLand',JSON.stringify(0))
  }else if (gtaResid.checked == false && firstTime.checked == true && refin.checked == false ) {
    taxToron.textContent = "$0"
    ftRebate.textContent = `$${addSeparator(compareFT(JSON.parse(localStorage.getItem("taxOntar"))))}`
    netLand.textContent = `$${addSeparator((JSON.parse(localStorage.getItem("taxOntar")) - compareFT(JSON.parse(localStorage.getItem("taxOntar")))))}`
    localStorage.setItem('taxToron',JSON.stringify(0))
    localStorage.setItem('ftRebate',JSON.stringify(compareFT(JSON.parse(localStorage.getItem("taxOntar")))))
    localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
  }

  else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == true ) {
    taxToron.textContent = "$0"
    ftRebate.textContent = "$0"
    netLand.textContent = "$0"
    localStorage.setItem('taxToron',JSON.stringify(0))
    localStorage.setItem('ftRebate',JSON.stringify(0))
    localStorage.setItem('netLand',JSON.stringify(0))
  }else if (gtaResid.checked == false && firstTime.checked == false && refin.checked == false ) {
    taxToron.textContent = "$0"
    ftRebate.textContent = "$0"
    netLand.textContent = `$${addSeparator(JSON.parse(localStorage.getItem("taxOntar")))}`
    localStorage.setItem('taxToron',JSON.stringify(0))
    localStorage.setItem('ftRebate',JSON.stringify(0))
    localStorage.setItem('netLand',JSON.stringify(netLand.textContent.replace(/,/g,"")).replace("$",""))
  }
  
  let esTot = +estLegal.value.replace(/,/g,"") + +estInsur.value.replace(/,/g,"") + +electReg.value.replace(/,/g,"") + +Registration.value.replace(/,/g,"") + +Appraisal.value.replace(/,/g,"") + +lendersFee.value.replace(/,/g,"") + +brokersFee.value.replace(/,/g,"") + +(netLand.textContent.replace(/,/g,"")).replace("$","")
  localStorage.setItem('estTotal',JSON.stringify(esTot))
  estTotal.textContent = `$${addSeparator(esTot)}`
  
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
  try {
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
  catch(err) {
    
   console.log("something is wrong")
  }

  

}

function compareFT (value) {
  let ontar
  let toron

  if (JSON.parse(localStorage.getItem("gtaResid")) == false && JSON.parse(localStorage.getItem("firstTime")) == false && JSON.parse(localStorage.getItem("refin")) == false) {
   

    return ontar

  
  }else {
    if (value != 0 && value != "" && value != null && value != undefined ) {
      if (value < 4000) {
        ontar = value
      }else if (4000 < value) {
        ontar =  4000
      }
      if (value < 4475) {
        toron = value
      }else if (4475 < value) {
        toron =  4475
      }
    }
    
  
    if (JSON.parse(localStorage.getItem("gtaResid")) == false) {
     
        
        return ontar
  
      
    }else if (JSON.parse(localStorage.getItem("gtaResid")) == true) {
      return +ontar + +toron
    }
  }

  
}


function createTable (count) {
  for (i = 1; i < (+count + +1); i++) {
    let cont = document.createElement('div')
    cont.setAttribute('class', 'tempTable')
    let pmt = document.createElement('div')
    pmt.setAttribute('id','pmt'.concat(i))
    let Tpmt = document.createElement('h2')
    Tpmt.textContent = i
    Tpmt.setAttribute('id','Tpmt'.concat(i))
    pmt.append(Tpmt)

    let date = document.createElement('div')
    date.setAttribute('id','date'.concat(i))
    let Tdate = document.createElement('h2')
    const datee = new Date();
  let mth = datee.setMonth(+datee.getMonth() + +i, 25); 
  let yr = new Date(+datee.getFullYear() + +i, datee.getMonth() + 1, datee.getDate ) 
  if (mth > 12) {
    mth = 1
    yr = +datee.getFullYear() + 1
  }
  let nDate = new Date(yr , datee.getMonth() , datee.getDate() ) 
  Tdate.textContent = nDate.toLocaleDateString('en-GB') ;

    Tdate.setAttribute('id','Tdate'.concat(i))
    date.append(Tdate)

    let days = document.createElement('div')
    days.setAttribute('id','days'.concat(i))
    let Tdays = document.createElement('h2')
    Tdays.textContent = daysInMonth(datee.getMonth() + 1, yr)
    Tdays.setAttribute('id','Tdays'.concat(i))
    days.append(Tdays)



    let payment = document.createElement('div')
    payment.setAttribute('id','payment'.concat(i))
    let Tpayment = document.createElement('h2')
    Tpayment.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("PMT"))))}`
    Tpayment.setAttribute('id','Tpayment'.concat(i))
    payment.append(Tpayment)

    let intt = document.createElement('div')
    intt.setAttribute('id','intt'.concat(i))
    let Tintt = document.createElement('h2')
    if (JSON.parse(localStorage.getItem("estVeriable")) == "" || JSON.parse(localStorage.getItem("estVeriable")) == null) {
      Tintt.textContent =  "0.0%" 
    }else {
      
      Tintt.textContent =  `${(Math.round((JSON.parse(localStorage.getItem("estVeriable"))) * 100) / 100).toFixed(1)}%`
    }
    Tintt.setAttribute('id','Tintt'.concat(i))
    intt.append(Tintt)

    

    let balance = document.createElement('div')
    balance.setAttribute('id','balance'.concat(i))
    let Tbalance = document.createElement('h2')
    let fBalance = document.getElementById("fBalance");
    let lBalance = document.getElementById('balance'.concat(+i - +1));

    

    let compoundArr = {
      'Annual': '1',
      'Semi-Annual': '2',
      'Monthly': '12',
      'Quarterly': '4'
    };
    let compp
    for (const [key, value] of Object.entries(compoundArr)) {
      if (key == JSON.parse(localStorage.getItem("Compound"))){
        compp = value
      }
    }
    
    
      console.log(JSON.parse(localStorage.getItem("estVeriable")))
      let irP = (1 +( (JSON.parse(localStorage.getItem("estVeriable")) /100) / compp))
      let erP = compp / 12
      let arp = Math.pow(irP,erP)-1
      console.log(arp)

      let interest = document.createElement('div')
      interest.setAttribute('id','interest'.concat(i))
      let Tinterest = document.createElement('h2')
    

    let principal = document.createElement('div')
    principal.setAttribute('id','principal'.concat(i))
    let Tprincipal = document.createElement('h2')

    if(fBalance != null) {
      Tbalance.setAttribute('id','Tbalance'.concat(i))
      Tbalance.textContent = (lBalance.textContent.replace(/,/g,"")).replace("$","")
      Tinterest.textContent =  `$${addSeparator(Math.round(arp * (lBalance.textContent.replace(/,/g,"")).replace("$","")))}`
    }else {
      Tbalance.setAttribute('id','fBalance')
      Tbalance.textContent = JSON.parse(localStorage.getItem("repLoanAmo"))
      Tinterest.textContent =  `$${addSeparator(Math.round(arp * Tbalance.textContent))}`
    }
    Tinterest.setAttribute('id','Tinterest'.concat(i))
      

    Tprincipal.textContent = `$${addSeparator(Math.round(JSON.parse(localStorage.getItem("PMT"))) - ((Tinterest.textContent.replace(/,/g,"")).replace("$","")) )}`
    

    Tbalance.textContent = `$${addSeparator((+Tbalance.textContent - +((Tprincipal.textContent.replace(/,/g,"")).replace("$","")) ))}`
    if ((Tbalance.textContent.replace(/,/g,"")).replace("$","") < 0) {
      Tbalance.textContent = `$0`
    }
    interest.append(Tinterest)
    
    Tprincipal.setAttribute('id','Tprincipal'.concat(i))
    principal.append(Tprincipal)
    

    let acc = document.createElement('div')
    acc.setAttribute('id','acc'.concat(i))
    let Tacc = document.createElement('h2')
    
    let fTacc = document.getElementById("fTacc");
    let lAacc = document.getElementById('acc'.concat(+i - +1));
 
    if(fTacc != null) {
      if (lAacc){
        Tacc.setAttribute('id','acc'.concat(i))
        Tacc.textContent = `$${addSeparator(((+(lAacc.textContent.replace(/,/g,"")).replace("$","")) + +((Tinterest.textContent.replace(/,/g,"")).replace("$","")) ))}`
      }
      
    }else{
      Tacc.setAttribute('id','fTacc')
      Tacc.textContent = `$${addSeparator((Tinterest.textContent.replace(/,/g,"")).replace("$",""))}`
    }

    
    balance.append(Tbalance)

    acc.append(Tacc)
    

    cont.append(pmt)
    cont.append(date)
    cont.append(days)
    cont.append(payment)
    cont.append(intt)
    cont.append(interest)
    cont.append(principal)
    cont.append(balance)
    cont.append(acc)

    content.append(cont)
  }
}





function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}

// function PMT(ir, np, pv, fv, type) {
//   /*
//    * ir   - interest rate per month
//    * np   - number of periods (months)
//    * pv   - present value
//    * fv   - future value
//    * type - when the payments are due:
//    *        0: end of the period, e.g. end of month (default)
//    *        1: beginning of period
//    */
//   var pmt, pvif, irIf;

//   fv || (fv = 0);
//   type || (type = 0);

//   if (ir === 0)
//       return -(pv + fv)/np;

//   irIf = ir / 12;
//   pvif = Math.pow(1 + ir, - 1 * 12);
//   pmt = - (pv * irIf) / (pvif);


//   if (type === 1)
//       pmt /= (1 + ir);

//   return pmt;
// }

function PMTT(ir, np, pv) {

  var compoundArr = [
    ['Annual'	     , 1],
    ['Semi-Annual'   , 2],
    ['Monthly'	     , 12],
    ['Quarterly'	 , 4],
]
var paymentArr = [
    ['Annually'	     , 1],
    ['Semi-Annually'   , 2],
    ['Quarterly',     4],
    ['Monthly',       12],
    ['Bi-Monthly',    6],
    ['Semi-Monthly',  24],
    ['Weekly',         52],
    ['Bi-Weekly',      26],
    ['Acc Bi-Weekly', 26],
    ['Acc Weekly',    52],
];
var months_per_period_arr = [
    ['Annually'	     , 12],
    ['Semi-Annually'   , 6],
    ['Quarterly',     3],
    ['Monthly',       1],
    ['Bi-Monthly',    2],
    ['Acc Bi-Weekly', 0.5],
    ['Acc Weekly',    0.25],
    ['Semi-Monthly',  0.5],
    ['Weekly',         0.25],
    ['Bi-Weekly',      0.5],
] 
  let compoundd = compoundArr.vlookup(JSON.parse(localStorage.getItem("Compound")),1,false)
  let pay_frq = 'Monthly';
  
  let periods_perYr = paymentArr.vlookup(pay_frq,1,false);
  let inter_rate = (Math.pow((1+(ir/100)/compoundd),(compoundd/periods_perYr))-1);
  let numOf_pay = np*periods_perYr;
  let rate = (Math.pow((1+(ir/100)/compoundd),(compoundd/periods_perYr))-1)
  let payments = (pay_frq=="Acc Bi-Weekly"?(pmt((Math.pow((1+(ir/100)/compoundd),(compoundd/12))-1),np,pv,0,0)/2):(pay_frq=="Acc Weekly"?(pmt((Math.pow((1+(ir/100)/compoundd),(compoundd/12))-1),np*12,pv,0,0))/4:pmt((inter_rate),numOf_pay,pv,0,0)))
  return (payments ).toFixed(2)
}

function pmt(rate, nperiod, pv, fv, type) {
  if (!fv) fv = 0;
  if (!type) type = 0;

  if (rate == 0) return -(pv + fv)/nperiod;

  var pvif = Math.pow(1 + rate, nperiod);
  var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

  if (type == 1) {
      pmt /= (1 + rate);
  };

  return Math.abs(pmt);
}

Array.prototype.vlookup = function(needle,index,exactmatch,findeIndex = 0){
  index = index || 0;
  exactmatch = exactmatch || false;
  for (var i = 0; i < this.length; i++){
      var row = this[i];
      if ((exactmatch && (row[findeIndex]===needle || (needle > row[findeIndex] && this[i+1][findeIndex] > needle) ) ) || (typeof row[findeIndex] == 'string' && row[findeIndex].toLowerCase().indexOf(needle.toLowerCase()) !== -1 )){
          
          return (index < row.length ? row[index] : row);
      }
  }
  return null;
}

resetBtn.addEventListener("click",resetAll)

function resetAll () {
  localStorage.clear()
  location.reload();
}