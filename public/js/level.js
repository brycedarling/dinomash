class Level {
  constructor(game) {
    const ground = this.ground = Matter.Bodies.rectangle(400, 610, 810, 60, {
      isStatic: true
    });

    Matter.World.add(game.world, [ground]);
  }
}
