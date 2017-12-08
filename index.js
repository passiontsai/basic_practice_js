 

var divBasic = document.getElementById("myBasic");
divBasic.style.display = "none";


document.getElementById("hello").innerHTML = "Hello JavaScript!";

function showMyName() {

    // Name
    var username = document.getElementById("username").value;
    document.getElementById("username_output").innerHTML = username
    
    // Age 
    var thisYear = new Date().getFullYear();
    var yourBrithYear = document.getElementById("userbday").value;
    document.getElementById("userbday_output").innerHTML =  yourBrithYear ? (thisYear - yourBrithYear): 'how old are you?' ;


    // BMI
    var height = document.getElementById("userheight").value;
    var weight = document.getElementById("userweight").value; 
    var hasStatus = true;

    if (height && weight){
        var myBMI =  (weight/ (height*height/10000)).toFixed(2);
    }
    else{
         var myBMI = 'no vaild input' ;
         hasStatus = false;
    }
    document.getElementById("usernbmi_output").innerHTML = myBMI
    
    // Health Status
    document.getElementById("userhealth_output").innerHTML = hasStatus ? healthStatus(myBMI): null;


    // show this div
    if(username){
        divBasic.style.display = "block";
        document.getElementById("warning").innerHTML = null;
    }
    else{
        document.getElementById("warning").innerHTML = "Please input your name first!";
    }

}

function healthStatus (item){
    var healthStatus = '';
    if (item < 18){
        healthStatus = 'You are too thin';
    }
    else if(item > 24){
        healthStatus = 'You are to heavy';
    }
    else{
        healthStatus = 'You are normal';
    }
    return healthStatus;
}



