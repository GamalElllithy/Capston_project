//  REVEAL ON SCROLL 
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

//  COUNTER ANIMATION 
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const speed = target / 120;

    if (current < target) {
      counter.innerText = Math.ceil(current + speed);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  });

  observer.observe(counter);
});

//   SKILLS CHART 
const ctx = document.getElementById("skillsChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["شهر 1", "شهر 2", "شهر 3", "شهر 4", "شهر 5", "شهر 6"],
    datasets: [
      {
        label: "المهارات التقنية",
        data: [20, 35, 55, 70, 85, 95],
        borderWidth: 3,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const field = document.getElementById("field").value;
  const msg = document.getElementById("msg");

  if (name.length < 3) {
    msg.innerText = "الاسم يجب أن يكون 3 أحرف على الأقل";
    msg.style.color = "red";
    return;
  }


  if (!email.includes("@")) {
    msg.innerText = "البريد الإلكتروني غير صالح";
    msg.style.color = "red";
    return;
  }
  if (password.length < 8) {
    msg.innerText = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    msg.style.color = "red";
    return;
  }
  if (field === "") {
    msg.innerText = "اختر تخصصك";
    msg.style.color = "red";
    return;
  }
  msg.innerText = "تم التسجيل بنجاح! جاري البحث عن أنسب فرصة لك 🚀";
  msg.style.color = "green";
});
