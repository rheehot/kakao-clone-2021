const wifiContainer = document.querySelector(".status-bar__column.wifi"),
    wifiStatus = wifiContainer.querySelector("span"),
    wifiIcon = wifiContainer.querySelector(".fas.fa-wifi");


const CONNECTED_WIFI = "Connected";
const CURRENT_WIFI = "No service";



function handleOnline() {
    if (wifiStatus.innerText === CURRENT_WIFI) {
        wifiStatus.innerText = CONNECTED_WIFI; 
    } 
}

function handleOffline() {
    if (wifiStatus.innerText=== CONNECTED_WIFI) {
        wifiStatus.innerText= CURRENT_WIFI; 
    } 
}

function init() {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
}

init();

