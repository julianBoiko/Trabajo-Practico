function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombreYApellido = document.getElementById('nombreYApellido').value;
    const telefono = document.getElementById('phone').value;
    const correoElectronico = document.getElementById('email').value;
    const asunto = document.getElementById('Asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validar que los campos requeridos no estén vacíos
    if (nombreYApellido === '' || correoElectronico === '' || mensaje === '') {
      alert('Por favor complete los campos requeridos');
      return;
    }
    
    // Crear un objeto con los datos del formulario
    const datosFormulario = {
      nombreYApellido,
      telefono,
      correoElectronico,
      asunto,
      mensaje
    };
    
    
    // Mostrar un mensaje de confirmación después de enviar los datos
    alert('El formulario se envió correctamente');
  }