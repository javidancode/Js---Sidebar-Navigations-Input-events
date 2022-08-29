

let input = document.querySelector(".text-input");

let removeinput = document.querySelector(".list-group");

let ul = document.querySelector(".list-area")


input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {


        for (let i = 0; i < e.target.value; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText = "test";
            

            e.target.nextElementSibling.append(li);

            let icon = document.createElement("i");

            icon.classList.add("fa-solid");
            icon.classList.add("fa-circle-xmark");

            icon.style.float = "right";
            icon.style.cursor = "pointer";

            li.append(icon);

            

            icon.onclick = function () {
                li.remove();
            }
        }


    }


})




