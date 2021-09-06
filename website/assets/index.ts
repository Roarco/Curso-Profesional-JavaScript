// video #3 Incio del proyecto

import mediaPlayer from "@roanarco/platzimediaplayer";
import AutoPlay from "@roanarco/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@roanarco/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@roanarco/platzimediaplayer/lib/plugins/Ads";

// estamos trayendo con queryselector el video y el boton para poderlos manipular
const video = document.querySelector("video");

const button: HTMLElement = document.querySelector("#playPause");
const muteUnmute: HTMLElement = document.querySelector("#unmuteMute");



/* con esta funcion instanciamos el prototype mediaPlayer y le pasamos
 el parametro que nos pide en este caso el video. */

const player = new mediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ]});

/*  creamos el evento al button, que nos va a permitir reproducir o pausar el video
dependiendo el estado. */
button.onclick = () =>  player.togglePlay();

muteUnmute.onclick = () =>{
    (player.media.muted)
    ?player.unmute()
    :player.mute()
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}