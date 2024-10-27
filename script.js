function openModal() {
  const modal = document.getElementById("donationModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeDonationModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function openReportModal() {
  const reportModal = document.getElementById("reportModal");
  reportModal.style.display = "flex";
  setTimeout(() => {
    reportModal.classList.add("show");
  }, 10);
}

function closeReportModal() {
  const reportModal = document.getElementById("reportModal");
  reportModal.classList.remove("show");
  setTimeout(() => {
    reportModal.style.display = "none";
  }, 500);
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");
}

function showSuccessMessage() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.style.display = "block";
  responseMessage.innerText = "Relato feito com sucesso!";
  setTimeout(() => {
    responseMessage.style.display = "none";
  }, 3000);
}

function validateForm(event) {
  event.preventDefault();

  const contactInput = document.getElementById("contact");
  const contactValue = contactInput.value.replace(/\D/g, "");
  const onlyNumbers = /^\d+$/;

  alert("Relato feito com sucesso!");
  resetFormFields();
  closeReportModal();
}

function resetFormFields() {
  document.getElementById("reportForm").reset();
}

function formatPhoneInput(input) {
  let value = input.value.replace(/\D/g, "");

  // Limita o valor a 10 dígitos
  if (value.length > 10) value = value.slice(0, 10);

  if (value.length > 6) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6
    )}`;
  } else if (value.length > 2) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    input.value = value;
  }
}

document.getElementById("contact").addEventListener("input", function () {
  formatPhoneInput(this);
});

const infoField = document.getElementById("additional-info");
const maxChars = 300;

infoField.addEventListener("input", () => {
  if (infoField.value.length > maxChars) {
    infoField.value = infoField.value.slice(0, maxChars);
  }
});

document.getElementById("reportForm").addEventListener("submit", validateForm);

/*     parte Gabriel pagina alerta      */

document.addEventListener('DOMContentLoaded', function() {
  const fotos = document.querySelector('.fotos');
  const images = fotos.querySelectorAll('img');
  const totalImages = images.length;
  let currentIndex = 0;
  let timeoutId; // Variável para armazenar o ID do setTimeout

  fotos.classList.add('animado');

  function updateGallery() {
    const offset = -currentIndex * 100;
    fotos.style.marginLeft = `${offset}%`;
  }

  function reiniciarAnimacao() {
    fotos.classList.remove('animado');
    fotos.style.marginLeft = '0%';
    setTimeout(() => {
      fotos.classList.add('animado');
    }, 10);
  }

 
  function retomarAnimacao() {
    clearTimeout(timeoutId); 

    // Define a posição correta da imagem ANTES de reiniciar a animação:
    fotos.style.marginLeft = `${-currentIndex * 100}%`;

    timeoutId = setTimeout(() => {
      fotos.classList.add('animado');
    }, 4000); 
  }

  document.getElementById('next').addEventListener('click', () => {
    fotos.classList.remove('animado');
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
    retomarAnimacao(); // Chama a função para retomar a animação
  });

  document.getElementById('prev').addEventListener('click', () => {
    fotos.classList.remove('animado');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
    retomarAnimacao(); // Chama a função para retomar a animação
  });

  
});