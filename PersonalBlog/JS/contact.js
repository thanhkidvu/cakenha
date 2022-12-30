
alert("Welcome to me");
    function myFunction() {
        /**const error=document.getElementById("error");
        const error2=document.getElementById("error2");
         
        error.innerHTML=""; **/

        /**if (nameEle== "") {
            error.textContent ="Your name must be fill in";
        } else {
            error.textContent ="";
        }
        if (mailEle=="") {
            error2.textContent = "Your mail must be fill in";
        } else {
            error2.textContent="";
        }**/

        //Khai bao
        var nameEle=document.getElementById("name").value;
        var mailEle=document.getElementById("mail").value;
        var subjectEle=document.getElementById("subject").value;
        var messageEle=document.getElementById("message").value;

        //cau lenh kiem duyet name (blank, characters, )
        if (nameEle==="") {
            document.getElementById("error1").innerHTML="Please fill out your name.";
        } else if (nameEle.length > 100 ) {
            document.getElementById("error1").innerHTML="Your name should not exceed 100 characters.";
        } 
        else {
            document.getElementById("error1").innerHTML="";
        }
        
        //cau lenh kiem duyet mail (blank, form mail, characters)
        var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailEle==="") {
            document.getElementById("error2").innerHTML="Please fill out your email.";
        } else if (mailEle.match(mailformat)) {
            document.getElementById("error2").innerHTML="";
        } else if (mailEle.length > 100){
            document.getElementById("error2").innerHTML="Your email should not exceed 100 characters."
            return;
        } 
        else {
            document.getElementById("error2").innerHTML="Invalid Email.";
        }

        //cau lenh kiem duyet subject 
        if (subjectEle==="") {
            document.getElementById("error3").innerHTML="Please fill out the subject.";
        } else if (subjectEle.length < 50) {
            document.getElementById("error3").innerHTML="Subject should not shorter than 50 characters.";
        } else if (subjectEle.length > 250) {
            document.getElementById("error3").innerHTML="Subject should not exceed 250 characters.";
        } else {
            document.getElementById("error3").innerHTML="";
        }
        
        //cau lenh kiem duyet Message
        if (messageEle==="") {
            document.getElementById("error4").innerHTML="Please fill out the message.";
        } else if (messageEle.length > 500) {
            document.getElementById("error4").innerHTML="Message should not exceed 500 characters.";
        } else {
            document.getElementById("error4").innerHTML="";
        }
        
        // Thuc hien lay du lieu ve
        if (document.getElementById("error1").innerHTML==="" && document.getElementById("error2").innerHTML==="" && document.getElementById("error3").innerHTML===""
          && document.getElementById("error4").innerHTML==="") {
            document.getElementById("error1").innerHTML==="";
            document.getElementById("error2").innerHTML==="";
            document.getElementById("error3").innerHTML==="";
            document.getElementById("error4").innerHTML==="";
          }
          if (document.getElementById("error1").innerHTML==="" && document.getElementById("error2").innerHTML==="" && document.getElementById("error3").innerHTML===""
          && document.getElementById("error4").innerHTML==="") {
            document.getElementById("error2").innerHTML="";
            document.getElementById("error3").innerHTML="";
            var choice= confirm('Confirm your information \n' +nameEle+ "\n"+ mailEle +"\n" + subjectEle +"\n" +messageEle +"\n");
            if (choice == 1) {
                
                alert ("Information sent");
                console.log("Person's Information: \n"+"Name: " +nameEle+ "\n"+"Mail: "+ mailEle+ "\n" +"Subject: "+ subjectEle+"\n" +"Message: "+ messageEle);
            }
        }
    } 

















