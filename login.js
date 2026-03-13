function hideAll() {
  document.querySelectorAll(".login-card").forEach(el => el.classList.remove("active"));
}

function goToStudent() {
  hideAll();
  document.getElementById("step-student").classList.add("active");
}

function goToCompany() {
  hideAll();
  document.getElementById("step-company").classList.add("active");
}

function backToChoose() {
  hideAll();
  document.getElementById("step-choose").classList.add("active");
}

function fakeLogin(event, type) {
  event.preventDefault();
  hideAll();
  document.getElementById("step-success").classList.add("active");

  const title = document.getElementById("success-title");
  const text = document.getElementById("success-text");
  const link = document.getElementById("dashboard-link");

  if (type === "student") {
    title.innerText = "مرحبًا بعودتك يا بطل 🚀";
    text.innerText = "نحن نكمل بناء مسارك المهني الذكي.";
    link.href = "./student-dashboard.html";
  } else {
    title.innerText = "مرحبًا بشركتك 👔";
    text.innerText = "ابدأ باختيار أفضل المواهب الآن.";
    link.href = "./company-dashboard.html";
  }

  return false;
}
