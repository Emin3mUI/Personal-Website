// Function to add recommendation and show pop-up
function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value.trim() != "") {
    // Create a new recommendation element
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
    showPopup(true);
  }
}

// Pop-up visibility
function showPopup(show) {
  let popup = document.getElementById('popup');
  popup.classList.toggle('visible', show);
  if (show) {
    setTimeout(() => showPopup(false), 3000); // Auto-hide after 3 seconds
  }
}

// Reveal sections on scroll
document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    if (position <= window.innerHeight - 100) {
      section.classList.add('in-view');
    }
  });
});
