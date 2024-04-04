fetch('./layout/header.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newHeader = doc.getElementById('header');
    
    const existingHeader = document.getElementById('header');
    existingHeader.parentNode.replaceChild(newHeader, existingHeader);
  });

fetch('./layout/footer.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newFooter = doc.getElementById('footer');
    
    const existingFooter = document.getElementById('footer');
    existingFooter.parentNode.replaceChild(newFooter, existingFooter);
  });
