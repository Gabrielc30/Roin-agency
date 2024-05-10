const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,16}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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


			} else {
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__nombre i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
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


			} else {
				document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__email i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__email i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__email .formulario__input-error').classList.add('formulario__input-error-activo');
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

})