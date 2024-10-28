function openModal() {
  const modal = document.getElementById("donationModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeDonationModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}
function openReportModal() {
  const modal = document.getElementById("reportModal");
  modal.style.display = "flex";
  modal.classList.add("fadeIn");
}

function closeReportModal() {
  const modal = document.getElementById("reportModal");
  modal.style.display = "none";
}
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");
}

const lugaresAfetados = {
  "vale-taquari": {
    title: "Vale do Taquari",
    image: "./assets/vale-do-taquari.jpg",
    description:
      "Esta região foi severamente afetada pelas enchentes, resultando em grandes perdas para as famílias locais.",
    date: "Data do Acontecimento: 05/10/2024",
  },
  "vale-cai-pardo": {
    title: "Vale do Caí",
    image: "./assets/vale-do-rio-caí.jpg",
    description:
      "Esta região foi severamente afetada pelas enchentes, resultando em grandes perdas para as famílias locais.",
    date: "Data do Acontecimento: 05/10/2024",
  },
  "vale-rio-pardo": {
    title: "Vale do Rio Pardo",
    image: "./assets/vale-do-rio-pardo.jpeg",
    description:
      "Esta região foi severamente afetada pelas enchentes, resultando em grandes perdas para as famílias locais.",
    date: "Data do Acontecimento: 05/10/2024",
  },
  "porto-alegre": {
    title: "Porto Alegre",
    image: "./assets/vale-do-rio-caí.jpg",
    description:
      "Esta região foi severamente afetada pelas enchentes, resultando em grandes perdas para as famílias locais.",
    date: "Data do Acontecimento: 05/10/2024",
  },
};

function openCardModal(cardId) {
  const lugar = lugaresAfetados[cardId];
  document.getElementById("modal-title").textContent = lugar.title;
  document.getElementById("modal-image").src = lugar.image;
  document.getElementById("modal-description").textContent = lugar.description;
  document.getElementById("modal-date").textContent = lugar.date;
  document.getElementById("infoModal").style.display = "flex";
}

function closeCardModal() {
  document.getElementById("infoModal").style.display = "none";
}

function retomarAnimacao() {
  clearTimeout(timeoutId);
  fotos.style.marginLeft = `${-currentIndex * 100}%`;
  timeoutId = setTimeout(() => fotos.classList.add("animado"), 4000);
}

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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const scrollTopButton = document.getElementById("scrollTopButton");
  if (window.scrollY > 200) {
    scrollTopButton.classList.add("show");
    scrollTopButton.classList.remove("hide");
  } else {
    scrollTopButton.classList.add("hide");
    scrollTopButton.classList.remove("show");
  }
});

function validatePhone(phone) {
  const phoneRegex = /^\d{11}$/;
  return phoneRegex.test(phone);
}

document
  .getElementById("reportForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.trim();

    if (!validatePhone(phone)) {
      alert("Por favor, insira um número de telefone válido com 11 dígitos.");
      phoneInput.focus();
      return;
    }

    alert("Relato feito com sucesso!");

    document.getElementById("reportForm").reset();
  });
