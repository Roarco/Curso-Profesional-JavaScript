// Definiendo algunas interfaces

interface Observer {

    updated: (data: any) => void;

}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

// clase BitcoinPrice

class BitcoinPrice implements Subject {

    // Propiedades

    observers: Observer[] = [];

    //Constructor

    constructor(){
        const el: HTMLInputElement= document.querySelector("#value");
        el.addEventListener("input", () =>{
            this.notify(el.value)
        })
    }



    // Metodos
    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1)
    }

    notify(data: any){
        this.observers.forEach(observer => observer.updated(data))
    }

}

class PriceDisplay implements Observer{

    // propiedades
    private el: HTMLElement;


    //constructor

    constructor(){
        this.el = document.querySelector("#price")
    }

    //Metodo
    updated(data: any){
        this.el.innerText = data;
    }

}

const value = new BitcoinPrice();

const display = new PriceDisplay();


// Subscribimos el Display al Value

value.subscribe(display);

// Simulamos unsubscribe usando un setTimeout de 5 segundos

setTimeout(

    () =>  value.unsubscribe(display),
    5000
)


