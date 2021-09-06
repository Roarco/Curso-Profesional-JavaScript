
// clase mediaPlayer

class mediaPlayer {
    //propiedades o atributos

    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    // Constructor
    constructor(config) {

        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    //Metodos

    initPlayer() {
        this.container = document.createElement("div");
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media);
    }


    private initPlugins() {

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });

    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause();
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }
}









export default mediaPlayer;