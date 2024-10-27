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

/*     parte Gabriel pagina alerta      */

document.addEventListener("DOMContentLoaded", function () {
  const fotos = document.querySelector(".fotos");
  const images = fotos.querySelectorAll("img");
  const totalImages = images.length;
  let currentIndex = 0;
  let timeoutId; // Variável para armazenar o ID do setTimeout

  fotos.classList.add("animado");

  function updateGallery() {
    const offset = -currentIndex * 100;
    fotos.style.marginLeft = `${offset}%`;
  }

  function retomarAnimacao() {
    clearTimeout(timeoutId);

    // Define a posição correta da imagem ANTES de reiniciar a animação:
    fotos.style.marginLeft = `${-currentIndex * 100}%`;

    timeoutId = setTimeout(() => {
      fotos.classList.add("animado");
    }, 4000);
  }

  document.getElementById("next").addEventListener("click", () => {
    fotos.classList.remove("animado");
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
    retomarAnimacao(); // Chama a função para retomar a animação
  });

  document.getElementById("prev").addEventListener("click", () => {
    fotos.classList.remove("animado");
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
    retomarAnimacao(); // Chama a função para retomar a animação
  });
});
