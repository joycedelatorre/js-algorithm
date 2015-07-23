// basic palindrome

function palindrome(str) {
  word_array = str.split("")
  middle = Math.floor(str.length/2)

  word_holder1 =[]
  for(var i = 0; i<=middle; i++){
    word_holder1.push (word_array[i]);
  }

  word_holder1= word_holder1.join("");
  //console.log(word_holder1);

  word_holder2 =[]
  for (var i = str.length; i>=middle; i--){
    word_holder2.push(word_array[i]);
  }
  //console.log(word_holder2);
  word_holder2= word_holder2.join("");

  if (word_holder1 === word_holder2){
    return true
  } else {
    return false
  }
}

palindrome("racecar");
palindrome("eye");
palindrome("kayak");
palindrome("dad");

------------------------------------
// second solution

function palindrome(str){
  var myReg = /\w/g;
  var word_array = str.match(myReg).join("").toLowerCase().split("");
   middle = Math.floor(word_array.length/2);
   console.log(word_array);

  word_holder1 =[];
  for(var i = 0; i<=middle; i++){
    word_holder1.push (word_array[i]);
  }

  word_holder1= word_holder1.join("");
  //console.log(word_holder1);

  word_holder2 =[];
  for (var j = str.length; j>=middle; j--){
    word_holder2.push(word_array[j]);
  }
  //console.log(word_holder2);
  word_holder2= word_holder2.join("");

  if (word_holder1 === word_holder2){
    return true;
  } else {
    return false;
  }

}
palindrome("A man, a plan, a canal. Panama");
palindrome("race car");
//palindrome("never odd or even");
----------------------------------
// there is a better solution for palindrome using regex only.

