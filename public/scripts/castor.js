console.log("script castor chargé");
addEventListener("DOMContentLoaded", (event) => {
    let dot1 = document.getElementById("dot-1");
    let text1 = document.getElementById("text-1");
    let dot2 = document.getElementById("dot-2");
    let text2 = document.getElementById("text-2");
    let dot3 = document.getElementById("dot-3");
    let text3 = document.getElementById("text-3");
    if (dot1 != undefined && text1 != undefined) {
        displayTooltip(dot1, text1);
    }
    if (dot2 != undefined && text2 != undefined) {
        displayTooltip(dot2, text2);
    }
    if (dot3 != undefined && text3 != undefined) {
        displayTooltip(dot3, text3);
    }
    
});

function displayTooltip(dot, text) {
    dot.addEventListener(
        "click",
        function (event) {
            text.style.display = "block";
        },
        false,
    );
}