//Calcula los creditos dependiendo el tipo de eventos y horas
if (document.getElementById("clubesAlumno") && document.getElementById("horasxclub")) {
    
    const creditosTotales = 12.15;

   //Culturales = 0.0625
    var culturales = ["artes", "literaria", "teatro", "folklórica", "danza","música"];
    //Deportes = 0.02
    var deportes = ["volleyball", "football", "atletismo", "basket", "ping", "tae", "karate", "animación", "tochito", "tocho", "ánime", "escorum", "baile", "ajedrez", "fútbol", "futbol"];
    //Tecnologicos = 0.05
    var tecnologicos = ["videojuegos", "matemáticas", "minirobótica", "algoritmia", "desarrollo", "seguridad", "sistemas","bio", "gusol"];

    var clubesAlumno = document.getElementById("clubesAlumno").value;
    //Pasar a minusculas el string
    clubesAlumno = clubesAlumno.toLowerCase();
    var horasxclub = document.getElementById("horasxclub").value;
    var clubes = clubesAlumno.split(",");
    var horas = horasxclub.split(",");
    //Crear arreglo de creditos del tamaño de clubes
    var creditos = new Array(clubes.length);

    var flag = 0;
    for (var i = 0; i < clubes.length; i++) {

        flag = 0;

        //Si el club contiene alguna palabra de la tabla de culturales
        for(var j = 0; j < culturales.length; j++)
        {
            //Checar cada palabra de la tabla de culturales con el club para ver si culturales[j] es substring de clubes[i]
            if(clubes[i].indexOf(culturales[j]) != -1)
            {
                creditos[i] = 0.0625 * horas[i];
                flag = 1;
            }
        }
        for(var j = 0; j < deportes.length; j++)
        {
            //Checar cada palabra de la tabla de culturales con el club para ver si culturales[j] es substring de clubes[i]
            if(clubes[i].indexOf(deportes[j]) != -1)
            {
                creditos[i] = 0.02 * horas[i];
                flag = 1;
            }
        }
        for(var j = 0; j < tecnologicos.length; j++)
        {
            //Checar cada palabra de la tabla de culturales con el club para ver si culturales[j] es substring de clubes[i]
            if(clubes[i].indexOf(tecnologicos[j]) != -1)
            {
                creditos[i] = 0.05 * horas[i];
                flag = 1;
            }
        }

        if (flag == 0) {
            creditos[i] = 0.05 * horas[i];
        }
    }

    //Sumar los creditos
    var suma = 0;
    for (var i = 0; i < creditos.length; i++) {
        suma += creditos[i];
    }

    //Buscar el div con id "extension" y poner una tabla con el nombre del club y los creditos
    var div = document.getElementById("extension");
    var br = document.createElement("br");
    div.appendChild(br);
    var h4 = document.createElement("h4");
    h4.innerHTML = "Creditos por club";
    div.appendChild(h4);
    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table table-striped");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "Nombre del Club";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Creditos";
    tr.appendChild(th);
    thead.appendChild(tr);
    tabla.appendChild(thead);
    var tbody = document.createElement("tbody");
    for (var i = 0; i < clubes.length; i++) {
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.innerHTML = clubes[i];
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = creditos[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    div.appendChild(tabla);
    //Poner el total de creditos
    var p = document.createElement("p");
    p.innerHTML = "Total de creditos obtenidos: " + suma;
    div.appendChild(p);
    var porcentaje = (suma / creditosTotales) * 100;
    //Redondear a 2 decimales
    porcentaje = porcentaje.toFixed(2);
    var p = document.createElement("p");
    p.innerHTML = "Porcentaje de creditos para liberar la electiva: " + porcentaje + "%";
    div.appendChild(p);
    var br = document.createElement("br");
    div.appendChild(br);


}