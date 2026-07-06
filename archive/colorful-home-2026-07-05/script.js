const toast = document.getElementById("toast");
let toastTimer;

document.querySelectorAll(".floating-note").forEach((note) => {
  note.addEventListener("click", () => {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = note.dataset.note;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  });
});

document.querySelectorAll("[data-reveal]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(`reveal-${button.dataset.reveal}`);
    if (!target) return;
    const isOpen = target.classList.toggle("open");
    button.textContent = isOpen ? "Hide notes" : "What it shows";
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".skill-garden span").forEach((skill) => {
      const match = filter === "all" || skill.dataset.skill === filter;
      skill.classList.toggle("dim", !match);
      skill.classList.toggle("pop", match && filter !== "all");
    });
  });
});

document.querySelectorAll(".brandeis-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.brandeis;

    document.querySelectorAll(".brandeis-tab").forEach((item) => {
      const isActive = item.dataset.brandeis === filter;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll(".brandeis-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.brandeisPanel === filter);
    });
  });
});
