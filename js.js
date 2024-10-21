function frank() {
    var name = prompt("hello, welcome to AJFRANK WEBSITE. can you please tell me your name?");
    var gender = prompt("what is your gender?");
    var year = prompt("what year were you born?");
    var age = 2024 - year;
    var days = year * 365;

    alert("hello " + name + " you are " + " a " + gender + ", you are " + age + " years old " + " and have lived for a period of " + days + " days " + ". can you tell me what you have done with your life all this while?");

}


 


function eage() {
    if (age = prompt('Hello ' + ' what is your age?')) {
        if (isNaN(age)) {
            alert(age + ' is not a number. enter your age again');
            eage();
        }else if(age >17){
            alert('you are an adult')
        }else if(age <17){
            alert('you are not an adult')
        }
    }else{
        eage();
    }
    }

    // 1. account balance
    // 2. data bundle 
    // 3. data balance 
    // 4. renew current data plan 
    // 5. main menu
    
    function user(){
        var menu = prompt("hello, welcome to AJ FRANK comm, please enter option 1 to 4 for self service");
        switch(user){
            case '1':
                alert("your AJ FRANK account balance is $5680.00, input 5 to go back to main menu");
                break;
            case '2':
                buydata();
                break;
            case '3':
                alert("your data balance is 9000GB. input 5 to go back to main menu");
                break;
            case '4':
                alert("congratulations, you have renew your current data balance. ENJOY")
            case "5":
                user();
            default:
                alert("you have entered an invalid command, please try again later");
        }
        
    }
    
     

