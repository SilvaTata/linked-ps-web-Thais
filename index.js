document.addEventListener("DOMContentLoaded", () => {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", (e) => {
      const destinoId = link.getAttribute("href");
      if (destinoId === "#") return;

      const alvo = document.querySelector(destinoId);
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const btnAgendar = document.querySelector(".btn-agendar");
  const btnSaiba = document.querySelector(".btn-saiba");

  if (btnAgendar) {
    btnAgendar.addEventListener("click", () => {
      const secaoContato = document.querySelector("#p5");
      if (secaoContato) {
        secaoContato.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (btnSaiba) {
    btnSaiba.addEventListener("click", () => {
      const secaoServicos = document.querySelector("#p2");
      if (secaoServicos) {
        secaoServicos.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const form = document.querySelector(".formulario form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const obs = document.getElementById("obs").value.trim();

      if (!nome || !email) {
        alert(
          "Por favor, preencha pelo menos seu Nome e Email antes de enviar.",
        );
        return;
      }

      alert(
        `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`,
      );
      form.reset();
    });
  }
});
