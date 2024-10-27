// Função para abrir modal de doação
function openModal() {
  const modal = document.getElementById("donationModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

// Função para fechar modal de doação
function closeDonationModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

// Função para alternar menu mobile
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");
}

// Dados de locais afetados
const lugaresAfetados = {
  "vale-taquari": {
    title: "Vale do Taquari",
    image: "./assets/vale-do-taquari.jpg",
    description:
      "Esta região foi severamente afetada pelas enchentes, resultando em grandes perdas para as famílias locais.",
    date: "Data do Evento: 05/10/2024",
  },
  // Dados restantes
};

// Função para abrir modal de detalhes do local
function openCardModal(cardId) {
  const lugar = lugaresAfetados[cardId];
  document.getElementById("modal-title").textContent = lugar.title;
  document.getElementById("modal-image").src = lugar.image;
  document.getElementById("modal-description").textContent = lugar.description;
  document.getElementById("modal-date").textContent = lugar.date;
  document.getElementById("infoModal").style.display = "flex";
}

// Função para fechar modal de detalhes
function closeCardModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Controle de galeria (caso queira adicionar botões ou animações extras)
function retomarAnimacao() {
  clearTimeout(timeoutId);
  fotos.style.marginLeft = `${-currentIndex * 100}%`;
  timeoutId = setTimeout(() => fotos.classList.add("animado"), 4000);
}

// Código de controle da galeria ajustado
document.addEventListener("DOMContentLoaded", function () {
  const fotos = document.querySelector(".fotos");
  const images = fotos.querySelectorAll("img");
  const totalImages = images.length;
  let currentIndex = 0;
  let timeoutId;

  fotos.classList.add("animado");

  function updateGallery() {
    fotos.style.marginLeft = `${-currentIndex * 100}%`;
  }

  document.getElementById("next").addEventListener("click", () => {
    fotos.classList.remove("animado");
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
    retomarAnimacao();
  });

  document.getElementById("prev").addEventListener("click", () => {
    fotos.classList.remove("animado");
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
    retomarAnimacao();
  });
});
