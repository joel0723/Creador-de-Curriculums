


function limpiar(){

    let imputNombre = document.getElementById("nombre");
    imputNombre.value = "";
    imputNombre.focus();

    let imputPerfil = document.getElementById("perfil");
    imputPerfil.value = "";

    let imputContacto = document.getElementById("contacto");
    imputContacto.value = "";

    let imputHobby = document.getElementById("hobby");
    imputHobby.value = "";

    let imputExperiencia = document.getElementById("experiencia");
    imputExperiencia.value = "";

    let imputFormacion = document.getElementById("formacion");
    imputFormacion.value = "";

    let imputHabilidades = document.getElementById("habilidades");
    imputHabilidades.value = "";

}

function CreateContactElement(){

    let mainContainer = document.getElementById("contact-container");

    let imputNombre = document.getElementById("nombre");
    let valueNombre = imputNombre.value;

    let imputPerfil = document.getElementById("perfil");
    let valuePerfil = imputPerfil.value;

    let imputContacto = document.getElementById("contacto");
    let valueContacto = imputContacto.value;
    
    let imputHobby = document.getElementById("hobby");
    let valueHobby = imputHobby.value;

    let imputExperiencia = document.getElementById("experiencia");
    let valueExperiencia = imputExperiencia.value;

    let imputFormacion = document.getElementById("formacion");
    let valueFormacion = imputFormacion.value;

    let imputHabilidades = document.getElementById("habilidades");
    let valueHabilidades = imputHabilidades.value;


    let IsValid = validar(imputNombre, imputPerfil, imputContacto, imputHobby, imputExperiencia, imputFormacion, imputHabilidades);

    if(IsValid){

        

    let DivColMd1 = document.createElement("div");
    DivColMd1.setAttribute("class", "col-md-2 ");

    let DivColMd = document.createElement("div");
    DivColMd.setAttribute("class", "col-md-2 bg-primary");

    let LiNombre = document.createElement("li");
    LiNombre.setAttribute("class", "list-group-item bg-primary");

    let strong1 = document.createElement("strong");
    strong1.innerHTML = "Nombre";

    let pre1 = document.createElement("pre");
    pre1.innerHTML = valueNombre;

    let LiContacto = document.createElement("li");
    LiContacto.setAttribute("class", "list-group-item bg-primary");

    let strong2 = document.createElement("strong");
    strong2.innerHTML = "Contacto";

    let pre2 = document.createElement("pre");
    pre2.innerHTML = valueContacto;

    let LiPerfil = document.createElement("li");
    LiPerfil.setAttribute("class", "list-group-item bg-primary");

    let strong3 = document.createElement("strong");
    strong3.innerHTML = "Perfil";

    let pre3 = document.createElement("pre");
    pre3.innerHTML = valuePerfil;

    let LiHobby = document.createElement("li");
    LiHobby.setAttribute("class", "list-group-item bg-primary");

    let strong4 = document.createElement("strong");
    strong4.innerHTML = "Hobby";

    let pre4 = document.createElement("pre");
    pre4.innerHTML = valueHobby;

    let DivColMd6 = document.createElement("div");
    DivColMd6.setAttribute("class", "col-md-6 bg-secundary");

    let LiExperiencia = document.createElement("li");
    LiExperiencia.setAttribute("class", "list-group-item bg-primary");

    let strong5 = document.createElement("strong");
    strong5.innerHTML = "Experiencia Laboral";

    let pre5 = document.createElement("pre");
    pre5.innerHTML = valueExperiencia;

    let LiFormacion = document.createElement("li");
    LiFormacion.setAttribute("class", "list-group-item bg-primary");

    let strong6 = document.createElement("strong");
    strong6.innerHTML= "Formacion";

    let pre6 = document.createElement("pre");
    pre6.innerHTML = valueFormacion;

    let LiHabilidades = document.createElement("li");
    LiHabilidades.setAttribute("class", "list-group-item bg-primary");

    let strong7 = document.createElement("strong");
    strong7.innerHTML= "Habilidades";

    let pre7 = document.createElement("pre");
    pre7.innerHTML = valueHabilidades;

    let DivCardBody = document.createElement("div");
    DivCardBody.setAttribute("class", "card-body");
    

    let ButtomEliminar = document.createElement("buttom");
    ButtomEliminar.setAttribute("class","btn btn-danger margen-izq-50");
    ButtomEliminar.innerHTML = "Borrar";
    ButtomEliminar.addEventListener("click", function(){

        mainContainer.removeChild(DivColMd2);
        mainContainer.removeChild(DivColMd);
        mainContainer.removeChild(DivColMd6);
        mainContainer.removeChild(DivColMd1);
        mainContainer.removeChild(DivCardBody);
       
    })

    let DivColMd2 = document.createElement("div");
    DivColMd2.setAttribute("class", "col-md-2");

 

    DivCardBody.appendChild(ButtomEliminar);

    LiExperiencia.appendChild(strong5);
    LiFormacion.appendChild(strong6);
    LiHabilidades.appendChild(strong7);



    DivColMd6.appendChild(LiExperiencia);
    DivColMd6.appendChild(pre5);
    DivColMd6.appendChild(LiFormacion);
    DivColMd6.appendChild(pre6);
    DivColMd6.appendChild(LiHabilidades);
    DivColMd6.appendChild(pre7);
    


    LiNombre.appendChild(strong1);
    LiPerfil.appendChild(strong2);
    LiContacto.appendChild(strong3);
    LiHobby.appendChild(strong4);



    DivColMd.appendChild(LiNombre);
    DivColMd.appendChild(pre1);

    DivColMd.appendChild(LiPerfil);
    DivColMd.appendChild(pre2);

    DivColMd.appendChild(LiContacto);
    DivColMd.appendChild(pre3);

    DivColMd.appendChild(LiHobby);
    DivColMd.appendChild(pre4);

    
  
    mainContainer.appendChild(DivColMd2);
    mainContainer.appendChild(DivColMd);
    mainContainer.appendChild(DivColMd6);
    mainContainer.appendChild(DivColMd1);
    mainContainer.appendChild(DivCardBody);


         alert("Contacto Registrado");
        limpiar();
       
    }else{
        alert("Debe completar los campos");
    }



}

function validar(imputNombre, imputPerfil, imputContacto, imputHobby, imputExperiencia, imputFormacion, imputHabilidades, imputFile){

    let IsValid = true;


    
    let valueNombre = imputNombre.value;
    
    if(valueNombre == "" || valueNombre == null || valueNombre == undefined){

        IsValid = false
        imputNombre.classList.add("imput-error");
    }else{
        imputNombre.classList.remove("imput-error");
    }

    
    let valuePerfil = imputPerfil.value;

    if(valuePerfil == "" || valuePerfil == null || valuePerfil == undefined){

        IsValid = false
        imputPerfil.classList.add("imput-error");
    }else{
        imputPerfil.classList.remove("imput-error");
    }

    
    let valueContacto = imputContacto.value;

    if(valueContacto == "" || valueContacto == null || valueContacto == undefined){

        IsValid = false
        imputContacto.classList.add("imput-error");
    }else{
        imputContacto.classList.remove("imput-error");
    }

    let valueHobby = imputHobby.value;

    if(valueHobby == "" || valueHobby == null || valueHobby == undefined){

        IsValid = false
        imputHobby.classList.add("imput-error");
    }else{
        imputHobby.classList.remove("imput-error");
    }

    
    let valueExperiencia = imputExperiencia.value;

    if(valueExperiencia == "" || valueExperiencia == null || valueExperiencia == undefined){

        IsValid = false
        imputExperiencia.classList.add("imput-error");
    }else{
        imputExperiencia.classList.remove("imput-error");
    }

    
    let valueFormacion = imputFormacion.value;

    if(valueFormacion == "" || valueFormacion == null || valueFormacion == undefined){

        IsValid = false
        imputFormacion.classList.add("imput-error");
    }else{
        imputFormacion.classList.remove("imput-error");
    }

    
    let valueHabilidades = imputHabilidades.value;

    
    if(valueHabilidades == "" || valueHabilidades == null || valueHabilidades == undefined){

        IsValid = false
        imputHabilidades.classList.add("imput-error");
    }else{
        imputHabilidades.classList.remove("imput-error");
    }
    

    return IsValid;
}



