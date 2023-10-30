const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        const imgError = input.nextElementSibling; // Obtenemos la imagen de error
        const textError = imgError.nextElementSibling; // Obtenemos el span de error

        if (!input.value.trim()) {
            input.parentElement.style.marginBottom = '1rem';
            imgError.style.display = 'block'; // Mostramos el icono de error
            textError.style.display = 'block'; // Mostramos el mensaje de error
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.style.marginBottom = '0';
            imgError.style.display = 'none'; // Ocultamos el icono de error
            textError.style.display = 'none'; // Ocultamos el mensaje de error
            input.parentElement.classList.remove('error');
        }
    });
});
