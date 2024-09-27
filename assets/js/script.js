function toggleTitles() {
  const titleElement = document.getElementById("title");
  const titles = ["Data Scientist", "System Engineer"];
  let currentIndex = 0;

  setInterval(() => {
    titleElement.textContent = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
  }, 2000); // Adjust the interval time as needed
}


window.addEventListener("load", toggleTitles);