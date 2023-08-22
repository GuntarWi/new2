


let unregisterFilterEventListener = null;
let unregisterMarkSelectionEventListener = null;
let worksheet = null;
let worksheetName = null;
let categoryColumnNumber = null;
let valueColumnNumber = null;





$(document).ready(function () {
   tableau.extensions.initializeAsync().then(function () {
      // Draw the chart when initialising the dashboard.
      getSettings();
      drawChartJS();
      // Set up the Settings Event Listener.
      unregisterSettingsEventListener = tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, (settingsEvent) => {
         // On settings change.
      getSettings();
       drawChartJS();
      });
   }, function () { console.log('Error while Initializing: ' +err.toString()); });
});









function getSettings() {
   // Once the settings change populate global variables from the settings.

   const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

   var worksheet = worksheets.find(function (sheet) {
     return sheet.name === "work";
   });

   // If settings are changed we will unregister and re register the listener.
   if (unregisterFilterEventListener != null) {
      unregisterFilterEventListener();
   }

   // If settings are changed we will unregister and re register the listener.
   if (unregisterMarkSelectionEventListener != null) {
      unregisterMarkSelectionEventListener();
   }

   // Get worksheet


   // Add listener
   unregisterFilterEventListener = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, (filterEvent) => {
      drawChartJS();
   });

   unregisterMarkSelectionEventListener = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, (filterEvent) => {
      drawChartJS();
   });
}




function drawChartJS() {

   const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

   var worksheet = worksheets.find(function (sheet) {
     return sheet.name === "work";
   });

   

   worksheet.getSummaryDataAsync().then(function (sumdata) {

     
     const canvas = document.getElementById("RouletteLayout")
     const context = canvas.getContext("2d")
     canvas.width = 1143
     canvas.height = 480
  //   canvas.width = 1143
  //   canvas.height = 480
     let posX;
     let PosY;
     function RouletteLayout(x,y,beteuro){
       const img = new Image()
      img.src = "Chip1.png"     
      img.onload = () => {
       context.drawImage(img, x, y,30,30); 
        
        context.font = "15px arial";
        context.textAlign = "center";
        context.fillStyle = "black";
        let txt = beteuro + " EUR"
        let txtWidth = context.measureText(txt).width
        //context.fillText(txt, x + 30, y); 

      //  console.log(context.measureText(txt).width)
      
       }

     }
    

var str0 = 0,
str32 = 1,
str15 = 2,
str19 = 3,
str4 = 4,
str21 = 5,
str2 = 6,
str25 = 7,
str17 = 8,
str34 = 9,
str6 = 10,
str27 = 11,
str13 = 12,
str36 = 13,
str11 = 14,
str30 = 15,
str8 = 16,
str23 = 17,
str10 = 18,
str5 = 19,
str24 = 20,
str16 = 21,
str33 = 22,
str1 = 23,
str20 = 24,
str14 = 25,
str31 = 26,
str9 = 27,
str22 = 28,
str18 = 29,
str29 = 30,
str7 = 31,
str28 = 32,
str12 = 33,
str35 = 34,
str3 = 35,
str26 = 36;

         

     

     var labels = ["0", "32", "15", "19", "4", "21",
       "2", "25", "17", "34", "6", "27", "13", "36",
       "11", "30", "8", "23", "10", "5", "24", "16", "33", "1",
       "20", "14", "31", "9", "22", "18", "29", "7", "28", "12",
       "35", "3", "26"
     ];


     var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
     ];

     let beteuro;
     
     const RoundTime = 0,
           RoundID = 1,
           GameType = 1,
           BetPosition = 2,
           DealerName = 6;
           BetEUR = 3,
           NetEUR = 4;

           let RoundSkipp = 0;
           let ShortBreak = 0;
           let LongBreak = 0;
          let Sequential = 0;

           let indexStart,
               indexNext;
     
           let RoundArr = [];

   var worksheetData = sumdata.data;
     



function loopevent(){
  for (var i = 0; i < worksheetData.length; i++) {

    indexStart = i;
      
    if(i == worksheetData.length - 1){

      indexNext =  worksheetData.length -1

    }else{
      indexNext = i + 1
    }
                              
    if(worksheetData.length > 4){
      BreakCounter(indexStart,indexNext)
    }
    
    RouletteSpreadCreator(i)
  }
}
loopevent();


  function RouletteSpreadCreator(i){
    
    if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_0") {
  
      data[0] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(60, 155,beteuro)
  
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_32") {
  
      data[1] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(910, 155,beteuro)
  
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_15") {
  
      data[2] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(450, 55,beteuro)
  
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_19") {
      data[3] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(600, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_4") {
      data[4] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(220, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_21") {
      
      beteuro = worksheetData[i][3].value;
      //console.log(beteuro)
      data[5] += 1;
      RouletteLayout(600, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_2") {
      data[6] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(140, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_25") {
      data[7] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(750, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_17") {
      data[8] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(530, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_34") {
      data[9] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(980, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_6") {
      data[10] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(220, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_27") {
      data[11] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(750, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_13") {
      data[12] += 1;
      beteuro = worksheetData[i][3].value
      RouletteLayout(450, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_36") {
      data[13] += 1;
      beteuro += worksheetData[i][3].value;
      RouletteLayout(980, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_11") {
      data[14] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(370, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_30") {
      data[15] += 1;
      RouletteLayout(830, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_8") {
      data[16] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(300, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_23") {
      data[17] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(680, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_10") {
      data[18] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(370, 255,beteuro) 
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_5") {
      data[19] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(220, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_24") {
      data[20] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(680, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_16") {
      data[21] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(530, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_33") {
      data[22] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(910, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_1") {
      
      beteuro = worksheetData[i][3].value;
      data[23] += 1;
      RouletteLayout(140, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_20") {
      data[24] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(600, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_14") {
      data[25] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(450, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_31") {
      data[26] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(910, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_9") {
      data[27] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(300, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_22") {
      data[28] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(680, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_18") {
      data[29] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(530, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_29") {
      data[30] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(830, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_7") {
      data[31] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(290, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_28") {
      data[32] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(830, 255,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_12") {
      data[33] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(370, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_35") {
      data[34] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(980, 155,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_3") {
      data[35] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(140, 55,beteuro)
    } else if (worksheetData[i][BetPosition].formattedValue == "STRAIGHT_UP_26") {
      data[36] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(750, 155,beteuro)
    }
  //    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_0_TO_1") {
  //      data[str0] += 1;
  //      data[str1] += 1;
  //   }
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_0_TO_1"){
      data[str0] += 1;
      data[str1] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(100, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_0_TO_2"){
      data[str0] += 1;
      data[str2] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(100, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_0_TO_3"){
      data[str0] += 1;
      data[str3] += 1;
      beteuro = worksheetData[i][3].value;
      RouletteLayout(100, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_1_TO_2"){
      data[str1] += 1;
      data[str2] += 1;
      RouletteLayout(140, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_1_TO_4"){
      data[str1] += 1;
      data[str4] += 1;
      RouletteLayout(175, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_10_TO_11"){
      data[str10] += 1;
      data[str11] += 1;
      RouletteLayout(365, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_10_TO_13"){
      data[str10] += 1;
      data[str13] += 1;
      RouletteLayout(405, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_11_TO_12"){
      data[str11] += 1;
      data[str12] += 1;
      RouletteLayout(365, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_11_TO_14"){
      data[str11] += 1;
      data[str14] += 1;
      RouletteLayout(405, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_12_TO_15"){
      data[str12] += 1;
      data[str15] += 1;
      RouletteLayout(405, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_13_TO_14"){
      data[str13] += 1;
      data[str14] += 1;
       RouletteLayout(440, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_13_TO_16"){
      data[str13] += 1;
      data[str16] += 1;
      RouletteLayout(485, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_14_TO_15"){
      data[str14] += 1;
      data[str15] += 1;
      RouletteLayout(440, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_14_TO_17"){
      data[str14] += 1;
      data[str17] += 1;
      RouletteLayout(485, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_15_TO_18"){
      data[str15] += 1;
      data[str18] += 1;
       RouletteLayout(485, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_16_TO_17"){
      data[str16] += 1;
      data[str17] += 1;
      RouletteLayout(515, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_16_TO_19"){
      data[str16] += 1;
      data[str19] += 1;
      RouletteLayout(560, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_17_TO_18"){
      data[str17] += 1;
      data[str18] += 1;
      RouletteLayout(515, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_17_TO_20"){
      data[str17] += 1;
      data[str20] += 1;
      RouletteLayout(560, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_18_TO_21"){
      data[str18] += 1;
      data[str21] += 1;
      RouletteLayout(560, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_19_TO_20"){
      data[str19] += 1;
      data[str20] += 1;
      RouletteLayout(590, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_19_TO_22"){
      data[str19] += 1;
      data[str22] += 1;
      RouletteLayout(640, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_2_TO_3"){
      data[str2] += 1;
      data[str3] += 1;
      RouletteLayout(140, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_2_TO_5"){
      data[str2] += 1;
      data[str5] += 1;
      RouletteLayout(175, 155,beteuro)
      
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_20_TO_21"){
      data[str20] += 1;
      data[str21] += 1;
      RouletteLayout(590, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_20_TO_23"){
      data[str20] += 1;
      data[str23] += 1;
      RouletteLayout(640, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_21_TO_24"){
      data[str21] += 1;
      data[str24] += 1;
      RouletteLayout(640, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_22_TO_23"){
      data[str22] += 1;
      data[str23] += 1;
      RouletteLayout(665, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_22_TO_25"){
      data[str22] += 1;
      data[str25] += 1;
      RouletteLayout(715, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_23_TO_24"){
      data[str23] += 1;
      data[str24] += 1;
      RouletteLayout(675, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_23_TO_26"){
      data[str23] += 1;
      data[str26] += 1;
      RouletteLayout(715, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_24_TO_27"){
      data[str24] += 1;
      data[str27] += 1;
      RouletteLayout(715, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_25_TO_26"){
      data[str25] += 1;
      data[str26] += 1;
      RouletteLayout(740, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_25_TO_28"){
      data[str25] += 1;
      data[str28] += 1;
      RouletteLayout(790, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_26_TO_27"){
      data[str26] += 1;
      data[str27] += 1;
      RouletteLayout(740, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_26_TO_29"){
      data[str26] += 1;
      data[str29] += 1;
      RouletteLayout(790, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_27_TO_30"){
      data[str27] += 1;
      data[str30] += 1;
      RouletteLayout(790, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_28_TO_29"){
      data[str28] += 1;
      data[str29] += 1;
      RouletteLayout(815, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_28_TO_31"){
      data[str28] += 1;
      data[str31] += 1;
      RouletteLayout(870, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_29_TO_30"){
      data[str29] += 1;
      data[str30] += 1;
      RouletteLayout(815, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_29_TO_32"){
      data[str29] += 1;
      data[str32] += 1;
      RouletteLayout(870, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_3_TO_6"){
      data[str3] += 1;
      data[str6] += 1;
      RouletteLayout(175, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_30_TO_33"){
      data[str30] += 1;
      data[str33] += 1;
      RouletteLayout(870, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_31_TO_32"){
      data[str31] += 1;
      data[str32] += 1;
      RouletteLayout(905, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_31_TO_34"){
      data[str31] += 1;
      data[str34] += 1;
       RouletteLayout(945, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_32_TO_33"){
      data[str32] += 1;
      data[str33] += 1;
      RouletteLayout(890, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_32_TO_35"){
      data[str32] += 1;
      data[str35] += 1;
      RouletteLayout(945, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_33_TO_36"){
      data[str33] += 1;
      data[str36] += 1;
      RouletteLayout(945, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_34_TO_35"){
      data[str34] += 1;
      data[str35] += 1;
      RouletteLayout(980, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_35_TO_36"){
      data[str35] += 1;
      data[str36] += 1;
      RouletteLayout(980, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_4_TO_5"){
      data[str4] += 1;
      data[str5] += 1;
      RouletteLayout(215, 200,beteuro)

    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_4_TO_7"){
      data[str4] += 1;
      data[str7] += 1;
      RouletteLayout(250, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_5_TO_6"){
      data[str5] += 1;
      data[str6] += 1;
      RouletteLayout(215, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_5_TO_8"){
      data[str5] += 1;
      data[str8] += 1;
      RouletteLayout(250, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_6_TO_9"){
      data[str6] += 1;
      data[str9] += 1;
      RouletteLayout(250, 55,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_7_TO_10"){
      data[str7] += 1;
      data[str10] += 1;
      RouletteLayout(330, 255,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_7_TO_8"){
      data[str7] += 1;
      data[str8] += 1;
      RouletteLayout(290, 200,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_8_TO_11"){
      data[str8] += 1;
      data[str11] += 1;
      RouletteLayout(330, 155,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_8_TO_9"){
      data[str8] += 1;
      data[str9] += 1;
      RouletteLayout(290, 105,beteuro)
    }						
    else if (worksheetData[i][BetPosition].formattedValue == "SPLIT_9_TO_12"){
      data[str9] += 1;
      data[str12] += 1;
      RouletteLayout(330, 55,beteuro)
    }
    else if (worksheetData[i][BetPosition].formattedValue == "COLUMN_FIRST"){
      RouletteLayout(1060, 255,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "COLUMN_SECOND"){
      RouletteLayout(1060, 155,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "COLUMN_THIRD"){
      RouletteLayout(1060, 55,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "FIRST_12"){
      RouletteLayout(250, 340,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "SECOND_12"){
      RouletteLayout(560, 340,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "THIRD_12"){
      RouletteLayout(870, 340,beteuro)
    }		
    else if (worksheetData[i][BetPosition].formattedValue == "BLACK"){
      RouletteLayout(638, 420,beteuro)
    }		
    else if (worksheetData[i][BetPosition].formattedValue == "RED"){
      RouletteLayout(483, 420,beteuro)
    }	
    else if (worksheetData[i][BetPosition].formattedValue == "ODD"){
      RouletteLayout(790, 420,beteuro)
    }				
    else if (worksheetData[i][BetPosition].formattedValue == "EVEN"){
      RouletteLayout(325, 420,beteuro)
    }		
  
    else if (worksheetData[i][BetPosition].formattedValue == "SECOND_HALF"){
      RouletteLayout(940, 420,beteuro)
    }				
    else if (worksheetData[i][BetPosition].formattedValue == "FIRST_HALF"){
      RouletteLayout(175, 420,beteuro)
    }	
    
    
    else if (worksheetData[i][BetPosition].formattedValue == "CORNER_1_TO_5"){
    RouletteLayout(177, 200,beteuro)
}	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_10_TO_14"){
    RouletteLayout(405, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_11_TO_15"){
    RouletteLayout(405, 105,beteuro)
}	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_13_TO_17"){
    RouletteLayout(481, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_14_TO_18"){
    RouletteLayout(481, 105,beteuro)
}	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_16_TO_20"){
    RouletteLayout(558, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_17_TO_21"){
    RouletteLayout(558, 105,beteuro)
}	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_19_TO_23"){
    RouletteLayout(634, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_2_TO_6"){
     RouletteLayout(177, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_20_TO_24"){
    RouletteLayout(634, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_22_TO_26"){
    RouletteLayout(711, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_23_TO_27"){
    RouletteLayout(711, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_25_TO_29"){
    RouletteLayout(787, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_26_TO_30"){
    RouletteLayout(787, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_28_TO_32"){
    RouletteLayout(864, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_29_TO_33"){
    RouletteLayout(864, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_31_TO_35"){
    RouletteLayout(940, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_32_TO_36"){
    RouletteLayout(940, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_4_TO_8"){
    RouletteLayout(250, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_5_TO_9"){
    RouletteLayout(250, 105,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_7_TO_11"){
    RouletteLayout(330, 200,beteuro)
  }	else if (worksheetData[i][BetPosition].formattedValue == "CORNER_8_TO_12"){
    RouletteLayout(330, 105,beteuro)
  }	
    
    
    else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_1_TO_6"){
     RouletteLayout(175, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_10_TO_15"){
    RouletteLayout(407, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_13_TO_18"){
    RouletteLayout(482, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_16_TO_21"){
    RouletteLayout(559, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_19_TO_24"){
     RouletteLayout(636, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_22_TO_27"){
    RouletteLayout(713, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_25_TO_30"){
    RouletteLayout(790, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_28_TO_33"){
    RouletteLayout(867, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_31_TO_36"){
    RouletteLayout(944, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_4_TO_9"){
    RouletteLayout(250, 305,beteuro)
}	
else if (worksheetData[i][BetPosition].formattedValue == "SIX_LINE_7_TO_12"){
    RouletteLayout(325, 305,beteuro)
}	
    
    
    
  else if (worksheetData[i][BetPosition].formattedValue == "STREET_1_TO_3"){
    RouletteLayout(140, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_10_TO_12"){
    RouletteLayout(365, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_13_TO_15"){
    RouletteLayout(440, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_16_TO_18"){
    RouletteLayout(525, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_19_TO_21"){
    RouletteLayout(596, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_22_TO_24"){
    RouletteLayout(673, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_25_TO_27"){
    RouletteLayout(749, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_28_TO_30"){
    RouletteLayout(825, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_31_TO_33"){
    RouletteLayout(902, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_34_TO_36"){
    RouletteLayout(978, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_4_TO_6"){
    RouletteLayout(215, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "STREET_7_TO_9"){
    RouletteLayout(290, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "sTRIO_0_AND_2_AND_3"){
    RouletteLayout(175, 305,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "sTRIO_0_TO_2"){
    RouletteLayout(175, 305,beteuro)
}
    
    
    else if (worksheetData[i][BetPosition].formattedValue == "TRIO_0_AND_2_AND_3"){
    RouletteLayout(100, 105,beteuro)
}
else if (worksheetData[i][BetPosition].formattedValue == "TRIO_0_TO_2"){
    RouletteLayout(100, 200,beteuro)
}
    else if (worksheetData[i][BetPosition].formattedValue == "FIRST_FOUR"){
    RouletteLayout(100, 300,beteuro)
}

    
  }


  function BreakCounter(indexStart,indexNext){

   // console.log("start index " + indexStart)
 //   console.log("end index "+ indexNext)

   // console.log("asdasdasdasdasd")

    var startTime=moment(worksheetData[indexStart][RoundTime].formattedValue, "DD-MM-YYYY HH:mm:ss a");
    var endTime=moment(worksheetData[indexNext][RoundTime].formattedValue, "DD-MM-YYYY HH:mm:ss a");
    var duration = moment.duration(endTime.diff(startTime));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes())-hours*60;

//    console.log((hours + ' hour and '+ minutes+' minutes.'))
       
   //    var result = endTime.diff(startTime, 'hours') + " Hrs and " +     
   //                     endTime.diff(startTime, 'minutes') + " Mns";

      if(hours == 0 && minutes > 2 && minutes <= 10){
        RoundSkipp += 1;
        $('.skipcnt').text("format");
      }else if(hours == 0 && minutes > 10 && minutes <= 30){
        ShortBreak += 1;
      }else if(hours >= 1 || minutes >= 31){
        LongBreak += 1;
      }else{
        if(worksheetData[indexStart][1].formattedValue != worksheetData[indexNext][1].formattedValue){
          Sequential += 1
        }
      }

   $('.skipcnt').text(RoundSkipp);
  $('.shortcnt').text(ShortBreak);
  $('.longcnt').text(LongBreak);

              
  }





  console.log("Round skipps: "+ RoundSkipp)
  console.log("Short breaks: " + ShortBreak)
  console.log("Long breaks: " + LongBreak)
     



  function ReNameTitle(){
      if($(".container-2").hasClass("hide") && Sequential < 1){
    $('.idround').text('Game Round: ' + worksheetData[0][RoundID].formattedValue + " Straight-Up Bet Spread");
  }else if($(".container").hasClass("hide")){
    $('.idround').text('Game Round: ' + worksheetData[0][RoundID].formattedValue + " Bet Spread");
  }else if($(".container-2").hasClass("hide")  && Sequential > 1)
  $('.idround').text("Session Straight-Up Bet Spread");
  }
     
     ReNameTitle()
      $("input").click(function(){



ReNameTitle()
    
  });
     



     

     const grey = "rgb(77, 77, 77)";
     const red = "rgba(71, 63, 67, 0.44)";
     const transparent = 'transparent';
     const color = Chart.helpers.color;
     var ctx = $("#myChart");

     $("#myChart").remove();


     $(".roulette-container").append('<canvas id="myChart" class="neww" ></canvas>');

     var ctx = $("#myChart");

     var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels, // This now comes from Tableau
        datasets: [{

          backgroundColor: ["#3e95cd"],
          borderColor: grey,
          pointBackgroundColor: grey,
          backgroundColor: transparent,
          data: data // This now comes from Tableau
        }]
      },
      options: {
        layout: {
          padding: {

            left: 40,
            right:40,
            top:30,
            bottom:40
          } 
       },
        pointRadius: 4,
        elements: {

          line: {
            borderWidth: 4,

          }
        },
        scales: {

          r: {
            suggestedMin: 0,
            suggestedMax: 1,
            angleLines: {
              color: transparent
            },
            pointLabels: {
              color: transparent,

            },
            ticks: {
              color: transparent
            }
          },

        },


        plugins: {
          legend: {
            display: false,


          }
        },

        scale: {
          maintainAspectRaito: false,
          ticks: {
            beginAtZero: true,
            fontColor: 'transparent', 
            showLabelBackdrop: false 
          },
          pointLabels: {
            fontColor: 'transparent' 
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          angleLines: {
            color: 'white'
          }
        }

      },
      
    });

    console.log("Roulette spread")

    
     



     
   });



 }


 $(document).ready(function(){
  $("input").click(function(){

  $(".container-2").toggleClass( "hide" );
  $(".container").toggleClass( "hide" );

    
  });
});

function changeToImg() {
 // const toImgArea = document.getElementById('imgItcontainerem');
  
   let CanvasH,
     CanvasW;
 if($(".container-2").hasClass("hide")){
  toImgArea = document.getElementById('imgItcontainerem');
     CanvasH = '470px'
     CanvasW = '470px'
}else if ($(".container").hasClass("hide")){
  toImgArea = document.getElementById('imgItcontainerem2');
  CanvasW = '1000px'
  CanvasH = '480px'

}

  // To avoid the image will be cut by scroll, we need to scroll top before html2canvas.
  window.pageYOffset = 0;
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  // transform to canvas
  html2canvas(toImgArea, {
    allowTaint: true,
    taintTest: false,
    type: "view",
     dpi: 144,
  }).then(function (canvas) {
    const sreenshot = document.getElementById('sreenshot');
   // const downloadIcon = document.getElementById('download');
    
    // setting the canvas width  
    canvas.style.width = CanvasW;
    canvas.style.height = CanvasH;

    // append the canvas in the place that you want to show this image.  
    sreenshot.appendChild(canvas);
    console.log( downloadIcon);

    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
   // downloadIcon.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
   // downloadIcon.download = 'sreenshot.jpg';
  });
}

function changeToImg2() {
 // document.getElementById('sreenshot').innerHTML = "";
  const toImgArea = document.getElementById('game-examples');
     

  // To avoid the image will be cut by scroll, we need to scroll top before html2canvas.
  window.pageYOffset = 0;
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  // transform to canvas
  html2canvas(toImgArea, {
    allowTaint: true,
    taintTest: false,
    type: "view",
     dpi: 144,
    width: toImgArea.scrollWidth,
    height: toImgArea.scrollHeight,
  }).then(function (canvas) {
    const sreenshot = document.getElementById('sreenshot');
    const downloadIcon = document.getElementById('download');
    
    // setting the canvas width  
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // append the canvas in the place that you want to show this image.  
    sreenshot.appendChild(canvas);
    console.log( downloadIcon);

    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    downloadIcon.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    downloadIcon.download = 'sreenshot.jpg';
  });
  document.getElementById('sreenshot').innerHTML = "";
}


// clean the showing area
function resetTheImageArea() {
  document.getElementById('sreenshot').innerHTML = "";
}





