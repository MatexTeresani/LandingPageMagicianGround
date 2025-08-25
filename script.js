function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.querySelector(".menu-btn");

  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    menuBtn.style.display = "none"; // Oculta el botón hamburguesa
  } else {
    menuBtn.style.display = "block"; // Lo muestra de nuevo
  }
}
