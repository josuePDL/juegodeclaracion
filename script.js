function moverBotonNo() {
    const botonNo = document.querySelector('.opcion.no');
    const maxTop = window.innerHeight - botonNo.offsetHeight - 50;
    const maxLeft = window.innerWidth - botonNo.offsetWidth - 50;
    const newTop = Math.floor(Math.random() * maxTop);
    const newLeft = Math.floor(Math.random() * maxLeft);
    botonNo.style.top = newTop + 'px';
    botonNo.style.left = newLeft + 'px';
}

function dijoSi() {
    const mensajeSi = document.getElementById('si');
    mensajeSi.style.display = 'block';
}