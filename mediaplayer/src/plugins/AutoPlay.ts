import mediaPlayer from "../MediaPlayer"
// Clase AutoPlay
class AutoPlay {
    //constructor

    constructor() {
    }

    //Metodos
    run(player: mediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        // player.unmuteMute();
        player.play();
    }
}


export default  AutoPlay;