
import mediaPlayer from "../MediaPlayer"

// Clase AutoPause

class AutoPause {
    //propiedades o atributos
    private threshold: number;
    player: mediaPlayer;

    //constructor
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

    }


    // Metodos
    run(player){
        this.player = player;
        // const observer = new IntersectionObserver(handler, config)
        const observer = new IntersectionObserver(this.handlerIntersection, {
            // threshold: umbral define que porciento del elemento tiene que tener interseccion
            threshold: this.threshold
        })
        observer.observe(this.player.media);

            // Ejecutamos el evento VisiblityChange y ejecutamos una función

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    // Cuando intersectionObserver llame a handlerIntersection le va a pasar una lista de entries
  // los entries son todos los objetos que estamos observando
    private handlerIntersection(entries: IntersectionObserverEntry[]) {

        const entry = entries[0];
        // console.log(entry);

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }

    }

    private handleVisibilityChange(){

        const isVisible = document.visibilityState === "visible"

        if (isVisible) {
            this.player.play();
        } else{
            this.player.pause();
        }
    }
}

export default AutoPause;