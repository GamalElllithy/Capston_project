function show(step){
  document.querySelectorAll(".step").forEach(s=>s.classList.remove("active"));
  document.getElementById(step).classList.add("active");
}

function updateProgress(step){
  const bar = document.getElementById("wizard-progress");

  const steps = {
    choose: 20,
    student: 40,
    dna: 60,
    passport: 80,
    dashboard: 100
  };

  bar.style.width = steps[step] + "%";

  document.querySelectorAll(".p-step").forEach(p=>p.classList.remove("active"));

  if(step==="choose") document.getElementById("p1").classList.add("active");
  if(step==="student") document.getElementById("p2").classList.add("active");
  if(step==="dna") document.getElementById("p3").classList.add("active");
  if(step==="passport") document.getElementById("p4").classList.add("active");
  if(step==="dashboard") document.getElementById("p5").classList.add("active");
}

function startFlow(type){
  if(type === "student"){
    show("student-form");
    updateProgress("student");
  } 
  else {
    show("company-form");
    updateProgress("student");
  }
}

function hideErrors(){
  document.querySelectorAll(".error").forEach(e=>{
    e.classList.add("d-none");
  });
}

function validateStudent(){
  hideErrors();

  const name = document.getElementById("s-name").value.trim();
  const phone = document.getElementById("s-phone").value.trim();
  const pass = document.getElementById("s-pass").value.trim();

  let valid = true;

  if(name.length < 3){
    document.getElementById("e-name").classList.remove("d-none");
    document.getElementById("e-name").innerText = "الاسم قصير جدًا";
    valid = false;
  }

  if(!/^\d{11}$/.test(phone)){
    document.getElementById("e-phone").classList.remove("d-none");
    document.getElementById("e-phone").innerText = "رقم الهاتف يجب أن يكون 11 رقمًا";
    valid = false;
  }

  if(pass.length < 8){
    document.getElementById("e-pass").classList.remove("d-none");
    document.getElementById("e-pass").innerText = "كلمة المرور لا تقل عن 8 أحرف";
    valid = false;
  }

  if(valid){
    show("talent-dna");
    updateProgress("dna");
  }
}

// منع اختيار أكثر من 3 اهتمامات
document.querySelectorAll(".career").forEach(cb=>{
  cb.addEventListener("change",()=>{
    const checked = document.querySelectorAll(".career:checked");
    if(checked.length>3) cb.checked=false;
  });
});

function goPassport(){
  const level = document.getElementById("level").value;
  if(!level){ alert("اختر المستوى أولاً"); return; }

  show("passport");
  updateProgress("passport");
}

function validateCompany(){
  show("passport");
  updateProgress("dashboard");
}
