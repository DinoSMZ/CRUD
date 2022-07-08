let body = document.querySelector("body");
let main = document.createElement('main');
let texto = document.createTextNode("holi holi");

main.appendChild(texto);
//body.appendChild(main);
 
function saludar(){
    console.log("Hellooouuuuuuu")
}

const adeus = () => {
    console.log("adeeeeeusss");
};

const boton_despedir = document.getElementById("boton_despedir");

boton_despedir.addEventListener("click",adeus) 