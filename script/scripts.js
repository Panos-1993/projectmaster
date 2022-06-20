function myFunctionCapitalGearing() {
    var x1, x2;
    x1 = document.getElementById("Non-Current liabilities").value;
    x2 = document.getElementById("Equity").value;
    console.log(x1 + x2);
    if (x1 >= 0 && x2 >= 0){
    var result = (Number(x1) / Number(x2)) / 100 ;
    console.log(result);
    document.getElementById("resultCapitalGearing").innerHTML = result;
    document.getElementById("resultCapitalGearing").style.backgroundColor = "green";
    return result;
    } else {
    document.getElementById("resultCapitalGearing").style.backgroundColor = "red";
    }
    }
    var capitalGearing = document.getElementById("Equity");
    if (capitalGearing != null){
      capitalGearing.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionCapitalGearing();
    }
    }); }

function myFunctionInterestCover() {
    var x7, x8;
    x7 = document.getElementById("OperatingProfit").value;
    x8 = document.getElementById("FinanceCost").value;
    console.log(x7 + x8);
    if (x7 >= 0 && x8 >= 0){
    var result = (Number(x7) / Number(x8));
    console.log(result);
    document.getElementById("resultInterestCover").innerHTML = result;
    document.getElementById("resultInterestCover").style.backgroundColor = "green";
    return result;
    } else {
      document.getElementById("resultInterestCover").style.backgroundColor = "red";
      }
    }
    var interestCover = document.getElementById("FinanceCost");
    if (interestCover != null){
      interestCover.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionInterestCover();
    }
    }); }

function myFunctionInventoryDays() {
      var x9, x10;
      x9 = document.getElementById("Inventory").value;
      x10 = document.getElementById("CoS").value;
      console.log(x9 + x10);
      if (x9 >= 0 && x10 >= 0) {
      var result = (Number(x9) / Number(x10)) * 365;
      console.log(result);
      document.getElementById("resultInventoryDays").innerHTML = result;
      document.getElementById("resultInventoryDays").style.backgroundColor = "green";
      return result;
    } else {
      document.getElementById("resultInventoryDays").style.backgroundColor = "red";
      }
  }
  var wage = document.getElementById("CoS");
  if (wage != null){
  wage.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionInventoryDays();
      }
    }); }

function myFunctionPayableDays() {
      var x11, x12;
      x11 = document.getElementById("PayablesPayablesDays").value;
      x12 = document.getElementById("CreditPurchasesPayablesDays").value;
      console.log(x11 + x12);
      if (x11 >= 0 && x12 >= 0){
      var result = (Number(x11) / Number(x12)) * 365;
      console.log(result);
      document.getElementById("resultDaysPayable").innerHTML = result;
      document.getElementById("resultDaysPayable").style.backgroundColor = "green";
      return result;
      } else {
      document.getElementById("resultDaysPayable").style.backgroundColor = "red";
      }
      }
      var creditPurchases = document.getElementById("CreditPurchasesPayablesDays");
      if (creditPurchases != null){
        creditPurchases.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionPayableDays();
      }
      }); }

function myFunctionReceivablesDays() {
        var x13, x14;
        x13 = document.getElementById("Receivables").value;
        x14 = document.getElementById("CreditSalesReceivables").value;
        console.log(x13 + x14);
        if (x13 >= 0 && x14 >= 0){
        var result = (Number(x13) / Number(x14)) * 365;
        console.log(result);
        document.getElementById("resultReceivablesDays").innerHTML = result;
        document.getElementById("resultReceivablesDays").style.backgroundColor = "green";
        return result;
        } else {
        document.getElementById("resultReceivablesDays").style.backgroundColor = "red";
        }
        }
        var receivablesDays = document.getElementById("CreditSalesReceivables");
        if (receivablesDays != null){
          receivablesDays.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionReceivablesDays();
        }
      }); }
function myFunctionCurrentRatio() {
      var x3, x4;
      x3 = document.getElementById("CurrentAssets").value;
      x4 = document.getElementById("CurrentLiabilities").value;
      console.log(x3 + x4);
      if (x3 >= 0 && x4 >= 0){
      var result = (Number(x3) / Number(x4));
      console.log(result);
      document.getElementById("resultCurrentRatio").innerHTML = result;
      document.getElementById("resultCurrentRatio").style.backgroundColor = "green";
      return result;
      } else {
        document.getElementById("resultCurrentRatio").style.backgroundColor = "red";
      }
      }
      var currentRatio = document.getElementById("CurrentLiabilities");
      if (currentRatio != null){
        currentRatio.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionCurrentRatio();
      }
      });}
 
function myFunctionQuickRatio() {
        var x15, x16, x17;
        x15 = document.getElementById("Current Assets").value;
        x16 = document.getElementById("Inventory").value;
        x17 = document.getElementById("CurrentLiabilitiesQuickRatio").value;
        console.log(x15 + x16 + x17);
        if (x15 >= 0 && x16 >= 0 && x17 >=0){
        var result = ( (Number(x15) - Number(x16) / (Number(x17)) ) );
        console.log(result);
        document.getElementById("resultQuickRatio").innerHTML = result;
        document.getElementById("resultQuickRatio").style.backgroundColor = "green";
        return result;
        } else {
          document.getElementById("resultQuickRatio").style.backgroundColor = "red";
        }
        }
        var quickRatio = document.getElementById("CurrentLiabilitiesQuickRatio");
        if (quickRatio != null){
          quickRatio.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
          myFunctionQuickRatio();
        }
        });}      
