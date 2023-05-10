var x = document.querySelectorAll(".love");

        x.forEach(e => {
        e.addEventListener("click", ()=> {
        e.classList.toggle("active") 
        })
        });
        const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

payment.addEventListener("click", () => {
  close.style.display = "flex";

});