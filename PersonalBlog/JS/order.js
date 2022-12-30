   alert("Welcome to Order");

   function myOrder() {
    //khai bao
    var selectcake=document.getElementById("selectcake").value;
    var datess=document.getElementById("datess").value;
    var yourname=document.getElementById("yourname").value;
    var messageEle=document.getElementById("messages").value;
    var deliverto=document.getElementById("deliverto").value;
    var yesorno=document.getElementsByClassName("yesorno");

    //kiem duyet nguoi dung da chon cake nao chua
    if (selectcake === "0") {
        document.getElementById("error1").innerHTML="Please select our product.";
    } else if(selectcake ==="1") {
        var choicecake= "Classic Yellow Cake";
        document.getElementById("error1").innerHTML="";
    } else if(selectcake ==="2") {
        var choicecake= "Coconut Bundt Cake";
        document.getElementById("error1").innerHTML="";
    } else if(selectcake ==="3") {
        var choicecake= "Cream Cheese Pound Cake";
        document.getElementById("error1").innerHTML="";
    } else  {
        var choicecake= "German Chocolate Cake";
        document.getElementById("error1").innerHTML="";
    }

    //kiem duyet nguoi dung da nhap ten chua
    if (yourname ==="") {
        document.getElementById("error2").innerHTML="Please fill out your name.";
    } else if (yourname.length > 100) {
        document.getElementById("error2").innerHTML="Your name should not exceed 100 characters.";
    } else {
        document.getElementById("error2").innerHTML="";
    }

    //kiem duyet nguoi dung co nhap qua 30 ky tu
    if (messageEle.length > 30) {
        document.getElementById("error3").innerHTML="Message should not exceed 30 characters.";
    } else {
        document.getElementById("error3").innerHTML="";
    }

   //kiem duyet nguoi dung da chon date chua
    if (datess ==="") {
        document.getElementById("error5").innerHTML="Please fill out the deliver date.";
    } else {
         document.getElementById("error5").innerHTML="";
     }

    //kiem duyet nguoi dung co nhap qua 500 ky tu cho deliver to
    if (deliverto.length > 500) {
        document.getElementById("error6").innerHTML="Address should not exceed 500 characters.";
    } else {
        document.getElementById("error6").innerHTML="";
    }  

    //kiem duyet nhan data checkbox
    var strcheck="";
    var inputcheckes=document.getElementsByClassName("checkes");
    for (i=0; i<3; i++) {
        if (inputcheckes[i].checked === true){
       strcheck += inputcheckes[i].value + " ";
        }
    }

    //kiem duyet nhan value yes or no
     var choiceYN=""
     if (yesorno[0].checked===true) {
        choiceYN=yesorno[0].value;
     } else {
        choiceYN=yesorno[1].value;
     }

    //Thuc hien lay du lieu ve
    if (document.getElementById("error1").innerHTML==="" && document.getElementById("error2").innerHTML==="" && document.getElementById("error3").innerHTML===""
    && document.getElementById("error5").innerHTML==="" && document.getElementById("error6").innerHTML==="") {
        var choice= confirm('Confirm your information: \n \n' +choicecake+ "\n"
         + yourname +"\n" +messageEle +"\n"+ strcheck + "\n" + datess +"\n"  + deliverto + "\n"+choiceYN);
        if (choice == 1 ) {
            alert ("Information sent");
            console.log("Person's Information: \n"+"Your cake: " +choicecake+ "\n"+"Yourname: "+ yourname+"\n" +"Message: "+ messageEle+"\n" +"Includes: "+
            strcheck+ "\n"+"Date: "+ datess +"\n"+ "Deliver to: " + deliverto+"\n"+"Call before deliver: "+choiceYN);
        }
    } 
 } function chua() {
 if (document.getElementById("error1").innerHTML==="" && document.getElementById("error2").innerHTML==="" && document.getElementById("error3").innerHTML===""
    && document.getElementById("error5").innerHTML==="" && document.getElementById("error6").innerHTML==="") {
        document.getElementById("error1").innerHTML==="";
        document.getElementById("error2").innerHTML==="";
        document.getElementById("error3").innerHTML==="";
        document.getElementById("error4").innerHTML==="";
    }
}