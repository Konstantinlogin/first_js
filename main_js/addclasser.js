    
    /*++Inputs++*/

    
    const typeInput=document.getElementsByTagName("input");

    for(let i=0; i<typeInput.length; i++) {

        // <input type="button"/>

        if(typeInput[i].getAttribute("type")=="button") {
            typeInput[i].className="b-button";
        }

        // <input type="submit"/>
        
        else if(typeInput[i].getAttribute("type")=="submit") {
            typeInput[i].className="b-button";
        }

        // <input type="text"/>
        
        else if(typeInput[i].getAttribute("type")=="text") {
            typeInput[i].className="b-input-text";
        }

        else if(typeInput[i].getAttribute("type")=="number") {
            typeInput[i].className="b-input-text";
        }

    };


    /*--Inputs--*/

    //<button> </button>
    const buttonsTag=document.getElementsByTagName("button");

    for(let i=0; i<buttonsTag.length; i++) {
        buttonsTag[i].className="b-button";
    };


    


    
