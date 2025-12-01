// ======= MENU MOBILE =======
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Abre e fecha o menu ao clicar no ícone
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Fecha o menu ao clicar fora (no overlay)
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fecha o menu ao clicar em uma das opções
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});


// ======= ANIMAÇÃO MÉTRICAS =======
const numeros = document.querySelectorAll(".numero");
let animado = false;

function animarMetricas() {
  if (animado) return;

  const sectionTop = document.querySelector(".metricas").offsetTop;
  const scrollTop = window.scrollY + window.innerHeight;

  if (scrollTop > sectionTop + 100) {
    numeros.forEach(num => {
      const target = +num.dataset.numero;
      const isPercent = num.textContent.includes('%');
      let count = 0;
      const incremento = target / 100;

      const intervalo = setInterval(() => {
        count += incremento;
        if (count >= target) {
          clearInterval(intervalo);
          num.textContent = isPercent ? `${target}%` : target.toLocaleString();
        } else {
          num.textContent = isPercent
            ? `${count.toFixed(1)}%`
            : Math.floor(count).toLocaleString();
        }
      }, 20);
    });

    animado = true;
  }
}

window.addEventListener("scroll", animarMetricas);
