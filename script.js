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
  const contactValue = contactInput.value;
  const onlyNumbers = /^\d+$/;

  if (!onlyNumbers.test(contactValue)) {
    alert("Por favor, insira apenas números no campo de telefone.");
    return;
  }

  alert("Relato feito com sucesso!");
  resetFormFields();
  closeReportModal();
}

function resetFormFields() {
  document.getElementById("reportForm").reset();
}

document.getElementById("reportForm").addEventListener("submit", validateForm);
