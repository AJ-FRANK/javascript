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
        } else if (age > 17) {
            alert('you are an adult')
        } else if (age < 17) {
            alert('you are not an adult')
        }
    } else {
        eage();
    }
}

// 1. account balance
// 2. data bundle 
// 3. data balance 
// 4. renew current data plan 
// 5. main menu

function user() {
    let menu = prompt("hello, welcome to AJ FRANK comm, please please select from any of the options below for self service \n 1.ACCOUNT BALANCE \n 2.BUY DATA \n 3.DATA BALANCE \n 4.DATA BUNDLE RENEWAL \n 5.MAIN MENU");
    switch (menu) {
        case '1':
            alert("your AJ FRANK account balance is $5680.00, input 5 to go back to main menu");
            mainmenu();
            break;
        case '2':
            buydata();
            break;
        case '3':
            alert("your data balance is 9000GB expires in 2 yeaars from today. input 5 to go back to main menu");
            mainmenu();
            break;
        case '4':
            alert("congratulations, you have renew your current data balance. ENJOY");
            mainmenu();
            break;
        case "5":
            user();
        default:
            alert("you have entered an invalid command, please try again later");
    }

}

function buydata() {
    let buy_data = prompt("select any option below to purchase a data bundle \n 1- daily bundle \n 2-weekly budle \n 3-monthly bundle \n 4-yearly");
    switch (buy_data) {
        case '1':
            alert('pay $1 to purchase our daily data bundle,  close the page to cancel');
            alert('congratulations, you have purchased our daily data bundle');
            mainmenu();
            break;
        case '2':
            alert('pay $5 to purchase our weekly data bundle, close the page to cancel');
            alert('congratulations, you have purchased our weekly data bundle');
            mainmenu();
            break;
        case '3':
            alert('pay $100 to purchase our monthly data bundle,  close the page to cancel');
            alert('congratulations, you have purchased our monthly data bundle');
            mainmenu();
            break;
        case '4':
            alert('pay $50 to purchase our daily data bundle, very cheap right? close the page to cancel');
            alert("congratulations, you have purchased our yearly data bundle, 'ENJOY'");
            mainmenu();
            break;
        default:
            alert("you have entered an invalid command, please try again later");
    }
}

function mainmenu() {
    let main_menu = prompt('enter 5 to go back to main menu');
    switch (main_menu) {
        case '5':
            user();
            break;
        default:
            alert("you have entered an invalid command, please try again later");

    }
}



