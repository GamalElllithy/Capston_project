// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Counters
document.querySelectorAll(".counter").forEach(counter => {
  const target = +counter.dataset.target;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(target / 100);
          counter.innerText = Math.min(current, target);
          if (current >= target) clearInterval(interval);
        }, 30);
        observer.unobserve(counter);
      }
    });
  });

  observer.observe(counter);
});

// Form validation
document.getElementById("companyFormEl").addEventListener("submit", e => {
  e.preventDefault();

  const name = cname.value.trim();
  const email = cemail.value.trim();
  const phone = cphone.value.trim();
  const type = ctype.value;
  const msg = document.getElementById("msg");

  if (name.length < 3) {
    msg.style.color="red";
    return msg.innerText="اسم الشركة قصير جدًا";
  }

  if (!email.includes("@")) {
    msg.style.color="red";
    return msg.innerText="بريد غير صالح";
  }

  if (phone.length < 10) {
    msg.style.color="red";
    return msg.innerText="رقم الهاتف غير صحيح";
  }

  if (!type) {
    msg.style.color="red";
    return msg.innerText="اختر نوع النشاط";
  }

  msg.style.color="green";
  msg.innerText="تم تسجيل شركتك بنجاح! سنتواصل معك قريبًا 🚀";
});
