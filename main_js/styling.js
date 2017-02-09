
    var buttonsInput=document.getElementsByTagName("input");
    var buttonsTag=document.getElementsByTagName("button");

    
    for(let i=0; i<buttonsInput.length; i++) {

        if(buttonsInput[i].getAttribute("type")=="button") {
            buttonsInput[i].className="b-button";
        }

    };

    for(let i=0; i<buttonsTag.length; i++) {

            buttonsTag[i].className="b-button";
        
    };

    
