let para = document.querySelector("p");
setInterval(() => {
    let date = new Date();
    para.innerText = date.toLocaleTimeString();
}, 1000);

