     const inputForms = document.querySelectorAll("form input");
     const iconoContraseña = document.querySelector(".fa-lock.icon");
     const inputBtn = document.querySelector("input[type='button']");
     const btnMenu = document.querySelector(".btn-menu");
     const menu = document.getElementById('menu');
     const menuButton = document.getElementById('menu-button');
     
     //funcionalidad del menu responsive
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('menu-active');
        });

     // Funcionalidad de mostrar/ocultar contraseña
     iconoContraseña.addEventListener("click", () => {
         const inputContraseña = inputForms[1];
         if (inputContraseña.type === "password") {
             inputContraseña.type = "text";
             iconoContraseña.style.color = "#350aaa";
         } else {
             inputContraseña.type = "password";
             iconoContraseña.style.color = "#f1f1f1";
         }
     });

     // Validaciones del formulario
     inputBtn.addEventListener("click", () => {
         const usuario = inputForms[0].value.trim();
         const contraseña = inputForms[1].value.trim();
         
         let valid = true;
         let mensaje = "";
         
         if (usuario === "") {
             valid = false;
             mensaje += "El campo de usuario no puede estar vacío.\n";
         }
         
         if (contraseña === "") {
             valid = false;
             mensaje += "El campo de contraseña no puede estar vacío.\n";
         } else if (!validatePassword(contraseña)) {
             valid = false;
             mensaje += "La contraseña debe tener entre 8 y 30 caracteres, al menos una letra mayúscula y un número.\n";
         }
         
         if (usuario !== "" && !validateEmail(usuario)) {
             valid = false;
             mensaje += "El usuario debe ser una dirección de correo electrónico válida.\n";
         }
         
         if (!valid) {
             alert(mensaje);
         } else {
             alert("Formulario válido. Procediendo con el inicio de sesión.");
             // Aquí puedes enviar el formulario o hacer lo que necesites
         }
     });
     
     // Función para validar correo electrónico
     function validateEmail(email) {
         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return re.test(email);
     }
     
     // Función para validar contraseña
     function validatePassword(password) {
         const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/;
         return re.test(password);
     }