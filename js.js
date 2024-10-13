function frank() {
    var name = prompt("hello, welcome to AJFRANK WEBSITE. can you please tell me your name?");
    var gender = prompt("what is your gender?");
    var year = prompt("what year were you born?");
    var age = 2024 - year;
    var days = year * 365;

    alert("hello " + name + " you are " + " a " + gender + ", you are " + age + " years old " + " and have lived for a period of " + days + " days " + ". can you tell me what you have done with your life all this while?");

}


function ass2() {
    var age = prompt('enter your age');
    if (isNaN(age)) {
        alert('age cannot be  ' + age + 'please try again')
        ass2();
    } else if (age >99) {
        alert('you are very old')
    } else if (age >69) {
        alert('you have reached an old age')
    } else if(age >49){
        alert('wow, you are on your way to old age ')
    }else if(age >29){
        alert('you are on your mid adult/old age')
    }else if(age>17){
        alert('congratulations. you are an adult but dont get too excited about that')
    }else if(age >10){
        alert('you are still young')
    }else if(age >0){
        alert('you are still a child')
    } else{
        ass2();
    }
}



// function age(){ 
    // if(  age = prompt('Helo '+  ' what is your age?')){ 
                // if(  isNaN(age)   ){ 
                    // alert( age + ' is not a number. enter your age again') 
                    // age(); 

        // }else{ 
            // age(); 
        // }
    // }
// }

