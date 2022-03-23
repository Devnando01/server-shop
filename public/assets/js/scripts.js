function moveSlider(percentage, buttNum){
    let slider = $(".slider");

    $("#yellow").css("width", `${percentage}%`);

    for (let i = 0; i < (slider.attr("max") / slider.attr("step")); i++) {
        const num = (i + 1) * slider.attr("step");
        if(num <= buttNum){
            $(`#button-num-${num}`).addClass("slider-button-marked").removeClass("slider-button-unmarked").removeClass("slider-button-selected");
        }else{
            $(`#button-num-${num}`).addClass("slider-button-unmarked").removeClass("slider-button-marked").removeClass("slider-button-selected");
        }
    }
    $(`#button-num-${buttNum}`).addClass("slider-button-selected");
    handleSliderClick(buttNum);
}

function handleSliderClick(num){
    const button = $(`#button-num-${num}`);
    console.log(num)
	$("#coin-counter").text(`${num} Coins`);

	switch(num){
		case 200:
			$("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
            $("#coin-price").text("Rp15.000,00");
			break;
		case 400:
			$("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
            $("#coin-price").text("Rp25.000,00");
			break;
		case 600:
			$("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
            $("#coin-price").text("Rp55.000,00");
			break;
        case 800:
            $("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
            $("#coin-price").text("Rp100.000,00");
            break;
        case 1000:
            $("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
            $("#coin-price").text("Rp125.000,00");
            break;       
		default:
			$("#coin-img").attr("src", "https://cdn.discordapp.com/attachments/704295130777124904/956220817379819550/Paper_JE2_BE2.webp");
			break;
	}
}

$(document).ready(() => {
    let slider = $(".slider");
    let sliderButtons = $("#slider-buttons");

    for (let i = 0; i < (slider.attr("max") / slider.attr("step")); i++) {
        const num = (i + 1) * slider.attr("step");
		console.log(slider.attr("min"))
		
        const element = $($.parseHTML(`<div class="d-xl-flex justify-content-xl-center slider-button slider-button-unmarked" onclick="moveSlider(${dividen(slider.attr("max") / slider.attr("step"))[i]}, ${num})" id="button-num-${num}"><p class="small-sm-xs" style="margin-top: 35px;font-weight: bold;text-align: center;font-size:15px;">${num}</p></div>`))

        sliderButtons.append(element);

		if(i == 0){
			moveSlider(0, parseInt(slider.attr("step")));
		}
    }
});

function login(){
    const username = $("#username").val();

    if(username != ""){
        setCookie("username", username, 7);
        window.location.reload(true);
    }
}

function logout(){
    deleteAllCookies()
    window.location.reload(true);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function toggleLogin(){
    $("#login").toggleClass("hide-element");
    $("body").toggleClass("no-scroll");
}

function toggleWIP(){
    $("#wip").toggleClass("hide-element");
    $("body").toggleClass("no-scroll");
}

function createItemPopup(id, image, name, price, description, goto){
    let element = $($.parseHTML(`<div id="${id}" class="d-xl-flex justify-content-xl-center align-items-xl-center overlay hide-element pointer">
    <div class="card shadow mb-4">
        <div class="card-body" style="border-radius: 5px;background: #3B4042;cursor: default;">
            <div class="row row-cols-1 d-flex d-xl-flex justify-content-center justify-content-xl-center">
                <div class="col-11">
                    <div class="row" style="background: #2E3335;border-radius: 8px;padding-bottom: 16px;padding-top: 8px;margin-top: 5px;">
                        <div class="col-xl-2 d-xl-flex justify-content-xl-left align-items-xl-left"><img src="${image}" width="100" style="margin: 10px;" /></div>
                        <div class="col-xl-8">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <p style="font-weight: bold;font-size: 17px;margin-top: 10px;margin-bottom: 1px;">${name}</p>
                                    <p style="font-weight: bold;font-size: 17px;">${price}</p>
                                </div>
                                <div class="col"><button onclick="location.href='${goto}';" class="btn btn-primary" type="button" style="width: 81.1719px;">Buy</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style="padding-top: 11px;">
                    <div style="overflow-y: scroll;height: 400px;padding: 20px;">
                        <pre>${marked.parse(description)}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`));

    $("#popups").append(element);

    $(`#${id}-button`).on("click", (e) => {
        $(`#${id}`).toggleClass("hide-element");
        $("body").toggleClass("no-scroll");
    });

    $(` #${id}`).on("click", (e) => {
        const selement = e.target;
        if(selement.id !== id) return;
        $(`#${id}`).toggleClass("hide-element");
        $("body").toggleClass("no-scroll");
    });
}

function createItem(id, image, name, price, description, goto){
    let element = `<div id="${id}-item" class="col">
    <div class="card shadow mb-4">
        <div class="card-header d-flex justify-content-center align-items-center justify-content-xl-center" style="background: #464B4C;"><img src="${image}" style="max-width: 200px;max-height: 200px;width: 100%;height: 100%;"></div>
        <div class="card-body" style="background: #3B4042;">
            <div class="row row-cols-1">
                <div class="col">
                    <h1 style="font-size: 20px;text-align: center;font-weight: bold;">${name}</h1>
                </div>
                <div class="col">
                    <h1 style="font-size: 16px;text-align: center;color: var(--price);font-weight: bold;">${price}</h1>
                </div>
                <div class="col text-center" style="margin-top: 15px;"><button id="${id}-button" class="btn btn-success bold" type="button" style="height: 50px;width: 80%;background: var(--bs-success);">Buy Now</button></div>
            </div>
        </div>
    </div>
</div>`;

    $("#item-lists").append(element);

    createItemPopup(id, image, name, price, description, goto);
}

function dividen(arr){
    // const arr = 11;
    let perce = 100;
    let val = 0;
    let i = 0;
    let valu = 0;
    while(true){
        i++;
        val++;
        valu = perce / val;
    
        if(i >= arr && !valu <= 0){
            i = 0;
            // console.log(val, valu)
        }
        if(Math.floor(valu) <= arr - 1){
            console.log("true", val, valu, i)
            break;
        }
    }
    // console.log(val)
    let value = 0;
    let arrnum = [];
    // console.log(value);
    for (let index = 0; index < arr; index++) {
        // console.log(value);
        arrnum.push(value);
        value = value + val;
    }
    // console.log(arrnum);
    let arres = [];
    arrnum.forEach(vals => {
        arres.push((vals / arrnum[arrnum.length - 1]) * 100);
    });
    return arres;
}