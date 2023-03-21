
const myDocument = document.querySelector('.contenedor')

myDocument.addEventListener('click', (e) => {

    if(e.target.value === 'enviar'){
        alert('Se le notificara al cliennte que su pedido ha sido enviado')
    }
    if(e.target.value === 'cancelar'){
        alert('Se le notificara al cliennte que su pedido ha sido cancelado')
    }

    e.preventDefault;
})