const pedidoS = [];
const cargarTabla = ()=>{
    let tbody = document.querySelector("#tbody-tabla");

    tbody.innerHTML = "";

    for (let i = 0; i < pedidoS.length; ++i){
        
        let p = pedidoS[i];
        
        let tr = document.createElement("tr");
        
        let tdNro = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdTipo = document.createElement("td");
        let tdTotal = document.createElement("td");

        
        tdNro.innerText = i + 1;
        tdNombre.innerText = p.nombre;
        
        let tipo = document.createElement("i");

        if (p.tipo == "1"){
            tipo.classList.add("fas", "fa-cubes", "fa-3x");
        }else if (p.tipo == "2"){
            tipo.classList.add("fas", "fa-hamburger", "fa-3x");
        }
        
        tdTotal.innerText = ("$" + p.total);

        tdTipo.appendChild(tipo);

        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdTotal);
        
        tbody.appendChild(tr);
    }
};
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#pedido-select").value;
    let total = document.querySelector("#total-txt").value;
    //let pagoEfectivo = document.querySelector("#pago-efectivo").checked;
    //let pagoTarjeta = document.querySelector("#pago-tarjeta").checked;
    let pedido = {};

    pedido.nombre = nombre;
    pedido.tipo = tipo;
    pedido.total = total;
    //pedido.pagoEfectivo = pago;
    //pedido.pagoTarjeta = pago;

    if (total > 0){
        pedidoS.push(pedido);
        cargarTabla();
        Swal.fire("Resultado exitoso!", "Pedido registrado", "success");
    }else{
        Swal.fire("Resultado Fallido!", "Total no válido", "info");
    }

});