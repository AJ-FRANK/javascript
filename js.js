function frank() {
    var name = prompt("hello, welcome to AJFRANK WEBSITE. can you please tell me your name?");
    var gender = prompt("what is your gender?");
    var year = prompt("what year were you born?");
    var age = 2024 - year;
    var days = year * 365;

    alert("hello " + name + " you are " + " a " + gender + ", you are " + age + " years old " + " and have lived for a period of " + days + " days " + ". can you tell me what you have done with your life all this while?");

}


function ass2() {
var age= prompt('enter your age');
if(  isNaN(age)   ){
    alert('age cannot be  ' + age)
    ass2();
}else if(age <=17){
    alert('you are still a child')
}else if(age>17){
    alert('hurray!! you are an adult. dont get too excited about it though..lolz')
}else{
    ass2();
}
}



        
