document.addEventListener('DOMContentLoaded', function () {
  const certList = document.querySelectorAll('.certifications-list');
  const viewAllBtn = document.querySelector('.certificate-btn');
  const VISIBLE_COUNT = 2;
  let expanded = false;

  certList.forEach((cert, index) => {
    if (index >= VISIBLE_COUNT) {
      cert.style.display = 'none';
    }
  });

  viewAllBtn.addEventListener('click', function () {
    expanded = !expanded;

    certList.forEach((cert, index) => {
      if (index >= VISIBLE_COUNT) {
        cert.style.display = expanded ? 'flex' : 'none';
      }
    });

    viewAllBtn.textContent = expanded ? 'Show Less' : 'View All Certifications';
  });
});