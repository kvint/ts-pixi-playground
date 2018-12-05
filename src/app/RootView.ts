import Container = PIXI.Container;
import Graphics = PIXI.Graphics;

export default class RootView extends Container {

    constructor() {
        super();
        const gr = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 100).endFill();
        gr.x = gr.width * 0.5;
        gr.y = gr.height * 0.5;
        this.addChild(gr);
    }
}