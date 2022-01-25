class Animator {
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration ){
	Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration })
	this.elaspsedTime = 0;
	this.totalTime = frameCount * frameDuration;
	};


	drawFrame(tick, ctx, x, y, ){
		this.elaspsedTime += tick;
		if(this.elaspsedTime > this.totalTime) this.elaspsedTime -= this.totalTime;
		const frame = this.currentFrame();
		ctx.drawImage(this.spritesheet,
			this.xStart + this.width * frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width, this.height);
	};

	currentFrame(){
		return Math.floor(this.elaspsedTime / this.frameDuration);
	};

	isDone(){
		return (this.elaspsedTime >= this.totalTime);
	};
};