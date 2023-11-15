


function Display(ele) {
let exp = $(".screen").val();
let lastchar = exp.slice(0, -1);

if($.isNumeric(ele)){
    $(".screen").val($(".screen").val() + ele);
} else{
    if($.isNumeric(exp.slice(-1))){
        $(".screen").val($(".screen").val() + ele);
    } else{
        $(".screen").val(lastchar + ele);
    }
}
}

$(document).ready(function(){
    $(".screen").keypress(function(event) {
        const regex = /^[0-9+\-*/%]+$/;
        event.preventDefault();

        if(event.key === 'Enter'){
            Solve();
        }
        if(regex.test(event.key)){
            Display(event.key);   
        }
    });
});



function ClearScreen(){
    $(".screen").val("");
}

function Backspace(){
    $(".screen").val($(".screen").val().slice(0, -1));
}

function Solve(){

    let exp = $(".screen").val();
    $(".screen").val(eval(exp));
}
