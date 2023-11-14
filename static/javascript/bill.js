function foodprice(){
   if(document.getElementById("foodlist").value == "Curd"){
     document.getElementById("selectNumber").value = 30;
   }
   else if(document.getElementById("foodlist").value == "Lemon"){
    document.getElementById("selectNumber").value = 50;
   }
   else if(document.getElementById("foodlist").value == "Briyani"){
    document.getElementById("selectNumber").value = 80;
   }
   else if(document.getElementById("foodlist").value == "Diner Grill"){
    document.getElementById("selectNumber").value = 180;
   }
   else if(document.getElementById("foodlist").value == "Unique Meals"){
    document.getElementById("selectNumber").value = 70;
   }
   else if(document.getElementById("foodlist").value == "Pizza Posse"){
    document.getElementById("selectNumber").value = 90;
   }
   else{
    document.getElementById("selectNumber").value = 0;
   }

}
function foodprice1(){
   if(document.getElementById("foodlist1").value == "Curd"){
     document.getElementById("selectNumber1").value = 30;
   }
   else if(document.getElementById("foodlist1").value == "Lemon"){
    document.getElementById("selectNumber1").value = 50;
   }
   else if(document.getElementById("foodlist1").value == "Briyani"){
    document.getElementById("selectNumber1").value = 80;
   }
   else if(document.getElementById("foodlist1").value == "Diner Grill"){
    document.getElementById("selectNumber1").value = 180;
   }
   else if(document.getElementById("foodlist1").value == "Unique Meals"){
    document.getElementById("selectNumber1").value = 70;
   }
   else if(document.getElementById("foodlist1").value == "Pizza Posse"){
    document.getElementById("selectNumber1").value = 90;
   }
   else{
    document.getElementById("selectNumber1").value = 0;
   }

}
function foodprice2(){
   if(document.getElementById("foodlist2").value == "Curd"){
     document.getElementById("selectNumber2").value = 30;
   }
   else if(document.getElementById("foodlist2").value == "Lemon"){
    document.getElementById("selectNumber2").value = 50;
   }
   else if(document.getElementById("foodlist2").value == "Briyani"){
    document.getElementById("selectNumber2").value = 80;
   }
   else if(document.getElementById("foodlist2").value == "Diner Grill"){
    document.getElementById("selectNumber2").value = 180;
   }
   else if(document.getElementById("foodlist2").value == "Unique Meals"){
    document.getElementById("selectNumber2").value = 70;
   }
   else if(document.getElementById("foodlist2").value == "Pizza Posse"){
    document.getElementById("selectNumber2").value = 90;
   }
   else{
    document.getElementById("selectNumber2").value = 0;
   }

}
function foodprice3(){
   if(document.getElementById("foodlist3").value == "Curd"){
     document.getElementById("selectNumber3").value = 30;
   }
   else if(document.getElementById("foodlist3").value == "Lemon"){
    document.getElementById("selectNumber3").value = 50;
   }
   else if(document.getElementById("foodlist3").value == "Briyani"){
    document.getElementById("selectNumber3").value = 80;
   }
   else if(document.getElementById("foodlist3").value == "Diner Grill"){
    document.getElementById("selectNumber3").value = 180;
   }
   else if(document.getElementById("foodlist3").value == "Unique Meals"){
    document.getElementById("selectNumber3").value = 70;
   }
   else if(document.getElementById("foodlist3").value == "Pizza Posse"){
    document.getElementById("selectNumber3").value = 90;
   }
   else{
    document.getElementById("selectNumber3").value = 0;
   }

}

function myFunction(){
   document.getElementById("total").value = (document.getElementById("quantity").value)*(document.getElementById("selectNumber").value); 
    document.getElementById('finalamt').value=document.getElementById("total").value;
    var arr = document.getElementsByName('total');
   var tot = 0;
 
   for (var i = 0; i < arr.length; i++) {
     if (parseInt(arr[i].value))
       tot += parseInt(arr[i].value);
   }
 
   document.getElementById('finalamt').value = tot;
   }

function myFunction1(){
   document.getElementById("total1").value = (document.getElementById("quantity1").value)*(document.getElementById("selectNumber1").value); 
   var arr = document.getElementsByName('total');
   var tot = 0;
 
   for (var i = 0; i < arr.length; i++) {
     if (parseInt(arr[i].value))
       tot += parseInt(arr[i].value);
   }
 
   document.getElementById('finalamt').value = tot;
}
function myFunction2(){
   document.getElementById("total2").value = (document.getElementById("quantity2").value)*(document.getElementById("selectNumber2").value); 
   var arr = document.getElementsByName('total');
   var tot = 0;
 
   for (var i = 0; i < arr.length; i++) {
     if (parseInt(arr[i].value))
       tot += parseInt(arr[i].value);
   }
 
   document.getElementById('finalamt').value = tot;
}
function myFunction3(){
   document.getElementById("total3").value = (document.getElementById("quantity3").value)*(document.getElementById("selectNumber3").value); 
   var arr = document.getElementsByName('total');
   var tot = 0;
 
   for (var i = 0; i < arr.length; i++) {
     if (parseInt(arr[i].value))
       tot += parseInt(arr[i].value);
   }
 
   document.getElementById('finalamt').value = tot;
}


function gst() {
   var arr = Number(document.getElementById('finalamt').value);
   var gst = document.getElementById('gstval').value;
   if (gst == 5){
      var tot = arr + arr*5/100;
   }
   else if(gst == 12){
      var tot = arr + arr*12/100;
   }
   else if(gst == 18){
      var tot = arr + arr*18/100;
   }
   else{
      document.getElementById('gstval').value = 0;
   }
   document.getElementById('nettol').value = tot;
 }

 function parcelFunction(){
   document.getElementById("total").value = (document.getElementById("quantity").value)*(document.getElementById("selectNumber").value); 
    
}

function parcelFunction_gst(){
   var arr = Number(document.getElementById('total').value);
   var gst = document.getElementById('gstval').value;
   if (gst == 5){
      var tot = arr + arr*5/100;
   }
   else if(gst == 12){
      var tot = arr + arr*12/100;
   }
   else if(gst == 18){
      var tot = arr + arr*18/100;
   }
   else{
      document.getElementById('gstval').value = 0;
   }
   document.getElementById('nettol').value = tot;
}