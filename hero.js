class Hero {
	constructor(game){
		this.game = game;
	this.animator = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 4, 0, 52, 108, 7, 0.5 );
	};
	update(){

	};

	draw(ctx){
this.animator.drawFrame(this.game.clockTick, ctx, 25, 25)
	};
};