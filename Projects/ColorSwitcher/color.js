 const button= document.querySelectorAll(".button")
const body = document.querySelector("body")
const heading = document.querySelector("#heading")
const text = document.querySelector(".text")

button.forEach( button => {
    button.addEventListener("click", (e) => {
        if (e.target.id === "White") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
            heading.style.color = "black";
            text.style.color = "black";
        }
        else if (e.target.id === "Black") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            heading.style.color = "white";
            text.style.color = "white";
        }
        else if (e.target.id === "Grey") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            heading.style.color = "white";
            text.style.color = "white";
        }
        else if (e.target.id === "Navy") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            heading.style.color = "white";
            text.style.color = "white";
        }
    })
})