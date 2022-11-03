const btnClicked = document.getElementById("btn-click-js");
console.log("Hola");
console.log(btnClicked);
btnClicked.addEventListener('click', () => {
    console.log("Me han clickeado.");
});

$(()=>{
    $('#btn-click-jqry').click(()=>{
        console.log("Hola, estoy utilizando jQuery");
    });
});