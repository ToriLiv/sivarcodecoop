document.addEventListener('DOMContentLoaded', () => {  //Estructura del chat    
  const chatForm = document.getElementById('chat-form');
  const chatWindow = document.getElementById('chat-window');
  const messageInput = document.getElementById('message-input');
  const chatContainer = document.getElementById('chat-container');
  const chatIcon = document.getElementById('chat-icon');

  function addMessage(text, className) {//Agregar el mensaje
    const messageElement = document.createElement('div');//Crea un div
    messageElement.classList.add('message', className);//clases mensaje y classname
    messageElement.textContent = text;//Asigna un texto proporcionado
    chatWindow.appendChild(messageElement);//agrega el texto a la ventana del chat
    chatWindow.scrollTop = chatWindow.scrollHeight;//permite scroll
  }

  //Mensaje inicial
  function displayInitialMessages() {
    const initialMessages = [//mensajes iniciales que se muestran en el chat
      'Hola, bienvenido a nuestro chatbot de preguntas frecuentes',
      'Por favor, selecciona una opción:',
      '1. ¿Qué es una cooperativa?',
      '2. ¿Cuál es la ventaja de trabajar con una cooperativa en vez de una empresa tradicional?',
      '3. ¿Cómo puedo unirme a la cooperativa como desarrollador o diseñador?',
      '4. ¿Desarrollan soluciones personalizadas para pequeñas y medianas empresas?',
      '5. ¿Cómo puedo solicitar un presupuesto para mi proyecto?',
      '6. ¿Puedo hacer cambios en el proyecto después de haber comenzado?',
      '7. ¿Puedo pagar en cuotas por el desarrollo del software?',
      '8. ¿Ofrecen servicios de consultoría antes de empezar un proyecto?',



    ];

    initialMessages.forEach((message, index) => {//maneja el tiempo es un segundo
      setTimeout(() => addMessage(message, 'bot'), index * 1000);
    });
  }

  //Maneja los mensajes que ingresa el usuario
  function handleChat(event) {
    event.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
      addMessage(messageText, 'mine');
      messageInput.value = '';

       //Respuestas a la opcion que elija el usuario
      const responses = {
        '1': 'Una cooperativa es una forma de organización legalmente reconocida en El Salvador, según la Ley de Asociaciones Cooperativas donde los miembros se asocian voluntariamente para satisfacer sus necesidades económicas y sociales, compartiendo beneficios y responsabilidades, nuestra cooperativa promueve la colaboración y el desarrollo profesional bajo estos principios.',
        '2': 'En una cooperativa se proriza la colaboración, equidad, y beneficio colectivo en lugar de enfocarse únicamente en el lucro, se busca satisfacer las necesidades especificas del cliente.',
        '3': 'Si deseas unirte a nuestra cooperativa, completa el formulario en la sección "Asociate" y nos pondremos en contacto contigo.',
        '4': 'Si, desarrollamos soluciones personalizadas adaptadas a las necesidades de pequeñas y medianas empresas (PYMES).',
        '5': 'Para solicitar un presupuesto, debes contanctarnos puedes hacerlo por medio de nuestro correo electrónico o nuestro whatsapp, para agendar una cita y realizar un presupuesto en base a la información que proporcionas.',
        '6': 'Si, comprendemos que las necesidades durante el desarrollo, pueden cambiar asi que permitimos cambios el proyecto.',
        '7': 'Si, ofrecemos opciones de pago en cuotas para adaptarnos a las necesidades de nuestros clientes, generalmente el pago se divide en varias partes, planificación, desarrollo y entrega final',
        '8': 'Si, ofrecemos servicios de consultoría para ayudarte a definir los detalles de tu proyecto antes de comenzar el desarrollo.',
       
      };
      
      //manejo de respuestas de las opciones
      let responseMessage;
      switch (messageText) { //Selectivas multiples
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
          responseMessage = responses[messageText];
          break;
        default:
          responseMessage = 'Opción no válida, por favor ingrese una opción (1-8).';
      }
      addMessage(responseMessage, 'bot');
    }
  }

  chatForm.addEventListener('submit', handleChat);//evento del envio del formulario

 
  // Cambia el ícono del chat al abrir/cerrar
  chatIcon.addEventListener('click', () => {
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
      chatContainer.style.display = 'block';
      chatIcon.textContent = '❌'; // Cambia el ícono al abrir
      if (!chatForm.hasAttribute('data-initialized')) {
        displayInitialMessages();
        chatForm.setAttribute('data-initialized', true);
      }
    } else {
      chatContainer.style.display = 'none';
      chatIcon.textContent = '💭'; // Cambia el ícono al cerrar
    }
  });

  closeChatBtn.addEventListener('click', function() {
    chatContainer.style.display = 'none';
    chatIcon.textContent = '💭'; // Cambia el ícono al cerrar desde el botón
  });
});
