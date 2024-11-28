// function to print operand to screen
function operand(op){
    var ct=document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML=ct+op;
};

// function to clear the screen
function ac(){
    document.getElementById("ans").innerHTML="";
}

// function to delete last input
function dl(){
    var st=document.getElementById("ans").innerHTML;
    var len=st.length;
    document.getElementById("ans").innerHTML=st.substr(0,len-1);
}
 
// function to solve the arithmetic expression and print the final result on calculator screen.
function result() {
      var exp = document.getElementById("ans").innerHTML;
      var ans = eval(exp);
      document.getElementById("ans").innerHTML = ans;
  }