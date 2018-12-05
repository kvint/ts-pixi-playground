import RootView from "./RootView";

export default class PlaygroundApplication {

    protected app: PIXI.Application;

    constructor() {
        //Create a Pixi Application
        const options = {
            view: document.getElementById("app-canvas")
        };
        // @ts-ignore
        this.app = new PIXI.Application(options);

        (window as any).__root = this;
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    start() {
        this.app.stage.addChild(new RootView());
    }
    protected resize() {
        if ((this.view.width !== Math.floor(this.view.clientWidth * window.devicePixelRatio) ||
            this.view.height !== Math.floor(this.view.clientHeight * window.devicePixelRatio))) {
            // resize
            this.app.renderer.resize(this.view.clientWidth, this.view.clientHeight);
        }
    }

    get view(): HTMLCanvasElement {
        return this.app.view;
    }
}