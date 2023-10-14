fetch('./nav/navbar.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("#nav-placeholder");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })