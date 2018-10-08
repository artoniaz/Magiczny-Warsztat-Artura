document.addEventListener("DOMContentLoaded", function () {

    var dropDownLists = document.querySelectorAll(".drop_down_list");


    for (var el of dropDownLists) {
        let arrow = el.querySelector(".list_arrow");
        let panel = el.querySelector(".list_panel");
        let arrow2 = true;
        arrow.addEventListener("click", function () {
            if (arrow2 === true) {
                panel.style.display = "block";
                arrow2 = false;
            } else {
                panel.style.display = "none";
                arrow2 = true;
            }
        });
    };


    var lis = document.querySelectorAll(".drop_down_list:first-child li");
    console.log(lis);
    for (let el of lis) {
        let title = document.querySelector(".summary_panel h4");
        let price = document.querySelector(".panel_right h4");
        el.addEventListener("click", function () {
            title.innerHTML = el.innerHTML;
            let realPrice = chairPrice[el.innerHTML];
            price.innerHTML = realPrice;
        })
    }
    for (let el of lis){
        let panel1 = document.querySelector(".drop_down_list:first-child .list_panel");
        el.addEventListener("click", function () {
            panel1.style.display = "none";
        })
    } 

    var lis2 = document.querySelectorAll(".drop_down_list:nth-child(2) li");
    for (let el of lis2) {
        let color = document.querySelector(".summary_panel .color");
        el.addEventListener("click", function () {
            color.innerHTML = el.innerHTML
        })
    }

    for (let el of lis2){
        let panel2 = document.querySelector(".drop_down_list:nth-child(2) .list_panel");
        el.addEventListener("click", function () {
            panel2.style.display = "none";
        })
    }

    var lis3 = document.querySelectorAll(".drop_down_list:nth-child(3) li");
    for (let el of lis3) {
        let pattern = document.querySelector(".summary_panel .pattern");
        el.addEventListener("click", function () {
            pattern.innerHTML = el.innerHTML
        })
    }

    for (el of lis3){
        let panel3 = document.querySelector(".drop_down_list:nth-child(3) .list_panel");
        el.addEventListener("click", function () {
            panel3.style.display = "none";
        })
    } 

    var chairPrice = {
        "Clair": 100,
        "Margarita": 200,
        "Selena": 1000
    }


});

