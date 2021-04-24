var textbox=document.getElementById("textbox"),
    oc=document.getElementById("option-container"),
    S={};

function createop(text, program) {
    if (!document.getElementById("o1")) {
        for (let i=1; i<9; i++) {
            oc.innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
    }
    let temporarycode=program
    for (let i=1; i<9; i++) {
        if (!document.getElementById("o"+i).classList.contains("filled")) {
            document.getElementById("o"+i).remove()
            oc.innerHTML+="<div id=\"o"+i+"\" class=\"option\" onclick=\""+temporarycode+"\">"+text+"</div>"
            if (temporarycode===program) {
                document.getElementById("o"+i).classList.add("filled")
            }
            temporarycode=""
            text=""
        }
    }
}

function type(text) {
    textbox.innerText=text
    oc.innerHTML=""
}

game(0)