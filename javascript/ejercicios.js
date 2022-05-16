
setInterval(() => {
    var textoArea = document.getElementById("textArea").value;
    document.getElementById("mostrarTexto1").innerHTML = textoArea.length;
}, 0000);

function botonRecorte() {

    var indice1 = document.getElementById("indice1").value;
    var indice2 = document.getElementById("indice2").value;

    var textoArea = document.getElementById("textArea2").value;
    document.getElementById("mostrarTexto2").innerHTML = textoArea.substring(indice1, indice2);
    console.log(textoArea.slice(indice1, indice2));
}
// dividir palabra 
function botonDivWord() {
    var indiceDiv = document.getElementById("indiceDiv").value;

    var textoArea = document.getElementById("textArea3").value;
    document.getElementById("mostrarTexto3").innerHTML = textoArea.split("").join(`${indiceDiv}`);
}

//dividir texto
function botonDivText() {
    var indiceDiv = document.getElementById("indiceDiv").value;

    var textoArea = document.getElementById("textArea3").value;
    document.getElementById("mostrarTexto3").innerHTML = textoArea.split(" ").join(`${indiceDiv}`);
}

function botonRep() {
    var indiceRep = document.getElementById("indiceRepetir").value;
    var textoArea = document.getElementById("textArea4").value;
    document.getElementById("mostrarTexto4").innerHTML = textoArea.repeat(indiceRep);
}

function btncambiar() {
    var txtCambiar = document.getElementById("txtCambiar").value;
    var txtCambiar2 = document.getElementById("txtCambiar2").value;
    var txtTotal = txtcambiar + txtCambiar2;

    document.getElementById("mostrarTexto5").innerHTML = txtCambiar + " " + txtCambiar2;
}


/*codigo de modo oscuro*/
const active = document.querySelector(".container-circle");

        active.addEventListener('click', () => {
            
            
            document.body.classList.toggle('oscuro');
            active.classList.toggle('oscuro');
            
            if(document.body.classList.contains("oscuro")) {
                localStorage.setItem("dark-mode","true");
            }else{
                localStorage.setItem("dark-mode","false");
            }
        });

            if(localStorage.getItem("dark-mode") === "true") {
                document.body.classList.add("oscuro");
                active.classList.add("oscuro");
            }else{
                document.body.classList.remove("oscuro");
                active.classList.remove("oscuro");
            }

// codigo invertir texto

function btnInvertir () {
    var textArea5 = document.getElementById("textArea5").value;
    var textArray  = textArea5.split("");
    var textInverted = textArray.reverse()
    document.getElementById("mostrarTexto6").innerHTML = textInverted.join("");
}

//contar palabras repetidas
function contarRepeticiones() {
    var textos = document.querySelector(".textArea6").value;
    var wordRepeat = document.querySelector(".wordRepeat").value;
    var textArray2 = textos.split(" ");
    var cont=0;
    for(let i=1;i<textArray2.length;i++) {
        if(textArray2[i] == wordRepeat){
            cont=cont+1;
        }
    }
    document.getElementById("mostrarTexto7").innerHTML = cont+1;
    if(cont===0){
        document.getElementById("mostrarTexto7").innerHTML = "la palabra no se encuentra en el texto";
    }
}

function btnVerificar(){
    
    let textArea7 = document.querySelector(".textArea7").value;
    textArea7=textArea7.toLowerCase();
    let textInverted2 = textArea7.split("").reverse().join("");
    
    if(textArea7 === textInverted2){
        document.getElementById("mostrarTexto8").textContent="si es polindrona"
    }else{
        document.getElementById("mostrarTexto8").textContent="no es polindrona"
    }
}

// ******************************************************  Trabajar con Arrays

function btnAgregar() {
    let option = document.getElementById("position").value;
    
    if(option==="last"){
        let fruta = document.querySelector(".textArea8").value;
        let Frutas=[];
                     
        if(localStorage.Frutas){
            Frutas=JSON.parse(localStorage.Frutas)
        }
        Frutas.push(fruta)
        localStorage.Frutas=JSON.stringify(Frutas)
        showDom();
                        
    }else{
        let fruta = document.querySelector(".textArea8").value;
        let Frutas=[];
        if(localStorage.Frutas){
            Frutas=JSON.parse(localStorage.Frutas)
        }
        Frutas.unshift(fruta)
        localStorage.Frutas=JSON.stringify(Frutas)
        showDom();
    }
}

function btnEliminar() {

    if(option==="last"){
        let fruta = document.querySelector(".textArea8").value;
        let Frutas=[];
        if(localStorage.Frutas){
            Frutas=JSON.parse(localStorage.Frutas)
        }
        Frutas.pop(fruta)
        localStorage.Frutas=JSON.stringify(Frutas)
        showDom();
    }else{
        let fruta = document.querySelector(".textArea8").value;
        let Frutas=[];
        if(localStorage.Frutas){
            Frutas=JSON.parse(localStorage.Frutas)
        }
        Frutas.shift(fruta)
        localStorage.Frutas=JSON.stringify(Frutas)
        showDom();
    }

    
}

function agregarPosicion() {
    if(localStorage.Frutas){
        Frutas=JSON.parse(localStorage.Frutas)
    }
    let textArea8=document.querySelector(".textArea8").value;
    let nombrePosition=document.querySelector(".nombrePosition").value;
    let numberDelete=document.querySelector(".numberDelete").value;

    let position=Frutas.indexOf(nombrePosition)
    Frutas.splice(position,numberDelete,textArea8)
    //Frutas.splice(1,1,"fresa")

    localStorage.Frutas=JSON.stringify(Frutas)
    showDom()
}

function ordenarArray(){
    let Frutas=[];

    if(localStorage.Frutas){
        Frutas=JSON.parse(localStorage.Frutas)
    }

    Frutas.sort()
    let array1= document.querySelector(".array1");
    let html="";
    for (let fruta of Frutas){
        html+=fruta +"<br>"
    }
    array1.innerHTML=html;
}

function showDom(){
    let Frutas=[];
    

    if(localStorage.Frutas){
        Frutas=JSON.parse(localStorage.Frutas)
    }
    let array1= document.querySelector(".array1");
    let html="";
    for (let fruta of Frutas){
        html+=fruta +"<br>"
    }
    array1.innerHTML=html;
}

    document.addEventListener("DOMContentLoaded",showDom);


    document.getElementById("crearObjeto").addEventListener("click", crearObjeto)

    var objetos=[];

    function crearObjeto(e){
        
        
        let nombre=document.getElementById("nombre").value;
        let apellido=document.getElementById("apellido").value;
        let edad=document.getElementById("edad").value;

        const objeto ={
            nombre:nombre,
            apellido:apellido,
            edad:edad,
        }

        var objetos=[];

        if(localStorage.objetos){
            objetos=JSON.parse(localStorage.objetos);
        }
        objetos.push(objeto);

        localStorage.objetos=JSON.stringify(objetos);
        
    }
    
    function mostrarObjetos(){
        var objetos=[];

        if (localStorage.objetos) {
            objetos = JSON.parse(localStorage.objetos);
        }

        let $template=document.getElementById("template").content,
            $tabla=document.querySelector(".tabla"),
            $fragment=document.createDocumentFragment();

        for(objeto of objetos) {
            $template.querySelector(".name").textContent=objeto.nombre;
            $template.querySelector(".apellido").textContent=objeto.apellido;
            $template.querySelector(".edad").textContent=objeto.edad;
            
            let $clone=document.importNode($template,true);
            $fragment.appendChild($clone);
        };
        $tabla.querySelector("tbody").appendChild($fragment);
    }
    //mostrarObjetos()
   document.addEventListener("DOMContentLoaded",mostrarObjetos)

   
   // ORDENAR DE MENOR A MAYOR 
   document.getElementById("menorMayor").addEventListener("click", ordenarMenorAMayor=(e)=>{
       
       var objetos=[];

        if (localStorage.objetos) {
           objetos = JSON.parse(localStorage.objetos);
        }

       let opcion=document.getElementById("ordenar").value; 
       
        if(opcion==="nombre"){
            objetos.sort((a,b)=>{
                if (a.nombre > b.nombre){
                    return 1;
                }
                if(a.nombre < b.nombre){
                    return -1;
                }
                return 0;
            })
            localStorage.objetos=JSON.stringify(objetos);
            
        }

        if(opcion==="apellido"){
            objetos.sort((a,b)=>{
                if (a.apellido > b.apellido){
                    return 1;
                }
                if(a.apellido < b.apellido){
                    return -1;
                }
                    return 0;
            })
            localStorage.objetos=JSON.stringify(objetos);
            
        }

      if(opcion==="edad"){
          
          objetos.sort((a,b)=>a.edad - b.edad)
          localStorage.objetos=JSON.stringify(objetos);
            
      }

    })

    // ORDENAR DE MAYOR A MENOR
    document.getElementById("mayorMenor").addEventListener("click", ordenarMayorAMenor=(e)=>{
        
        var objetos=[];
 
        if (localStorage.objetos) {
            objetos = JSON.parse(localStorage.objetos);
        }
 
        let opcion=document.getElementById("ordenar").value; 
        
        if(opcion==="nombre"){
             objetos.sort((a,b)=>{
                if (a.nombre < b.nombre){
                     return 1;
                }
                if(a.nombre > b.nombre){
                     return -1;
                }
                 return 0;
             })
             localStorage.objetos=JSON.stringify(objetos);
             
        }
 
        if(opcion==="apellido"){
            objetos.sort((a,b)=>{
                 if (a.apellido < b.apellido){
                     return 1;
                 }
                 if(a.apellido > b.apellido){
                     return -1;
                 }
                     return 0;
            })
            localStorage.objetos=JSON.stringify(objetos);
        }
 
        if(opcion==="edad"){
           
           objetos.sort((a,b)=>b.edad - a.edad )
           console.log(objetos)
           localStorage.objetos=JSON.stringify(objetos);
           
        }
 
    })

    







