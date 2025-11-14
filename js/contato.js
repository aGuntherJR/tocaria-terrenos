document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('formContato');
   form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();
        const cardBody = document.querySelector('.card-body');
        const successMessage = document.getElementById('successMessage');
        if (successMessage) successMessage.remove();

        const messageDiv = document.createElement('div');
        messageDiv.id = 'successMessage';
        messageDiv.className = 'alert alert-success mt-4';
        messageDiv.textContent = 'Mensagem enviada com sucesso! (mensagem de teste, vou polir melhor na próxima fase.)';

        cardBody.appendChild(messageDiv);
        form.reset();
        form.classList.remove('was-validated');
    }
    form.classList.add('was-validated');
   }, false); 
});