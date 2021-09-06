import mediaPlayer from "../../MediaPlayer"
import Ads, {Ad} from "./Ads"


// classe

class AdsPlugin {

    // propiedades
    private ads: Ads;
    private player: mediaPlayer;
    private media: HTMLMediaElement;
    private currenAd: Ad;
    private asdContainer: HTMLElement;

    //constructor
    constructor () {
        this.ads = Ads.getInstance();
        this.asdContainer = document.createElement("div");
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    //Metodos
    run(player: mediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.asdContainer);
        this.media = this.player.media;
        this.media.addEventListener("timeupdate", this.handleTimeUpdate)
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);

        if(currentTime % 30 === 0){
            this.renderAd();
        }
    }

    private renderAd() {
        if (this.currenAd) {
            return;
        }
        const ad = this.ads.getAd();
        this.currenAd = ad;
        this.asdContainer.innerHTML = `
        <div class="ads">
            <a class="ads__link" href="${this.currenAd.url}" target="_blank">
                <img class="ads__img" src="${this.currenAd.imageUrl}" />
                <div class="ads__info">
                    <h5 class="ads__title">${this.currenAd.title}</h5>
                    <p class="ads__body">${this.currenAd.body}</p>
                </div>
            </a>
        </div>
        `;

        setTimeout(() => {
            this.currenAd = null;
            this.asdContainer.innerHTML = "";
        },10000);


    }
}

export default AdsPlugin;