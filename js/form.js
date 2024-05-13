const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,16}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    email: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__nombre i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['nombre'] = true;

			} else {
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__nombre i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['nombre'] = false;
            }
			
			if(e.target.value <= 0){
				document.querySelector('#grupo__nombre i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
			}
		break;
		case "email":
			if(expresiones.email.test(e.target.value)){
				document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__email').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__email i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__email i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__email .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['email'] = true;

			} else {
				document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__email i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__email i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__email .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['email'] = false;
            }

			if(e.target.value <= 0){
				document.querySelector('#grupo__email i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__email .formulario__input-error').classList.remove('formulario__input-error-activo');
			}
			
		break;
	}
}

inputs.forEach((input)=> {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    const terminos = document.getElementById('terminos');

    if(campos.nombre && campos.email && terminos.checked) {
        formulario.reset();
        document.querySelector('#grupo__nombre i').classList.remove('bi-check-circle-fill');
        document.querySelector('#grupo__email i').classList.remove('bi-check-circle-fill');
        document.querySelector('#grupo__enviar span').classList.add('formulario__mensaje-exito-activo');
    } else {
        document.querySelector('#formulario__mensaje').classList.add('formulario__mensaje-activo');
    }


})

function removeMensaje() {
    document.querySelector('#grupo__enviar span').classList.remove('formulario__mensaje-exito-activo');
    document.querySelector('#formulario__mensaje').classList.remove('formulario__mensaje-activo')
}