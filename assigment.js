//problem -1
// kilometerToMeter


//problem -2
// budgetCalculator
// gori =50;
// mobile =100;
// leptop=500;


//problem -3
// hotelCost
// fist_10_days=100
// sec_10_days=80;
// last-all_days=50;


//problem -4
// megaFriend
// find lerge arry or lerge Friendname

// ---------------------------------------------------------------------
//problem 1

function kilometerToMeter(kilo) {

if(kilo<=0){
    return 'this Number is  invalid';
}else
var meter=kilo*1000;
return meter
   
}
var result_meter=kilometerToMeter(1);
console.log(result_meter);


// ---------------------------------------------------------------------

//problem 2

function budgetCalculator(watch,mobile,leptop) {

    if(watch<0 || mobile<0 || leptop<0){
        return 'plz submit your valid quantity';

      }else{
            watchPrice= watch*50;
            mobilePrice= mobile*100;
            leptopPrice= leptop*500;
            totalProductPrice=watchPrice+mobilePrice+leptopPrice;
        return totalProductPrice;
      }
    
}
var result=budgetCalculator(1,50,01);
console.log(result); 

// ---------------------------------------------------------------------

function hotelCost(days) {
    var perDayCost=0;
    if(days<0){
         return 'invalid days ';
      } else{

            if(days<=10){
                totalCost=days*100;
            }else if(days<=20){
                var first10Days=10*100;
                var ramaining=days-10;
                var second10Days=ramaining*80;
                totalCost=first10Days+second10Days;
            }else{
                var first10Days=10*100;
                var second10Days=10*80;
                var ramaining=days-20;
                var lastAllDays=ramaining*50;
                totalCost=first10Days+second10Days+lastAllDays;
            }


            return totalCost;
          }
   
}

var hotelTotalCost=hotelCost(15);
 
console.log( 'Your Hotel Rent Total Cost : '+  hotelTotalCost);




// ---------------------------------------------------------------------

  function megaFriend (arr) {


 var arrlgth = 0;
  var lergeName;

if(arr==0){

return 'No Array Found ';

}else{

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].length > arrlgth) {
                var arrlgth = arr[i].length;
                lergeName = arr[i];
                }
               
            }
            return lergeName;
  }
  
}


 var  arr = [
              //  'nurul amin',
              //  'amin shakil',
              //  'bangladesh',
              //  'nurul amin shakil',
              //  'programming hero'
             ];
var lergeFriendName=megaFriend(arr);

  console.log(lergeFriendName);