function palindrome(str) {
  word_array = str.split("")
  str_length = str.length
  for (var i=0; i<=str.length; i++){
    if((word_array[str_length] - word_array[i])=== word_array[i]){
      return true
    } else {
      return false
    }

  }
}



palindrome("eye");
palindrome("racecar");