function factorialize(num) {
  var temp = 1;
    for (var i=1; i<=num; i++){
      temp = temp * i
    }
    //console.log(temp);
    return temp
}

factorialize(5);