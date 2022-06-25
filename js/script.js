function includeHTML() {
  /* Loop through a collection of all HTML elements: */
  const z = document.getElementsByTagName("*");
  for (let i = 0; i < z.length; i++) {
    const elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    const nav = elmnt.getAttribute("include-nav");
    const footer = elmnt.getAttribute("include-footer");

    if (nav) {
      /* Make an HTTP request using the attribute value as the nav name: */
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
        }
      };
      xhttp.open("GET", nav, true);
      xhttp.send();
    }
    if (footer) {
      /* Make an HTTP request using the attribute value as the footer name: */
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
        }
      };
      xhttp.open("GET", footer, true);
      xhttp.send();
    }
  }
  return;
}

includeHTML();
