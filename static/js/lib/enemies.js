// import {Graphics, Sfx} from "./assets.js";
import {game} from "./game.js";
import {graphics, sfx} from "../mainGlavno.js";

export class Enemies {
    constructor() {
        this.speed = 1;
        this.spawnDistance = 1200;
        this.enemiesArray = [];
        this.ammo = [];
        this.spawned = false;
        this.shootingSpeed = 700;
        this.enemiesShootingInterval;

        // Enemies starting point
        // this.x = game.cWidth;
        // this.y = Math.floor(Math.random() * ( (game.maxHeight - graphics.enemyShip.height) - game.minHeight) + game.minHeight);
    }

    spawnEnemies() {
        this.enemiesArray.push({
            x: game.cWidth,
            y: Math.floor(Math.random() * ( (game.maxHeight - graphics.enemyShip.height) - game.minHeight) + game.minHeight)
        })
    }

    shoot() {
        if(this.spawned) {
            let minShip = 0;
            let maxShip = this.enemiesArray.length - 1;
            let randomShip = Math.floor(Math.random() * (maxShip - minShip + 1)) + minShip;
            // Randomize
            // console.log(this.enemiesArray[randomShip]);
            this.ammo.push({
                x: this.enemiesArray[randomShip].x - graphics.enemy.width,
                y: this.enemiesArray[randomShip].y + (graphics.enemy.height / 2)
            })

            sfx.enemyShooting.currentTime = 0;
            sfx.enemyShooting.play();
        }
    }
}
export const enemies = new Enemies();
enemies.enemiesShootingInterval = setInterval(enemies.shoot.bind(enemies), enemies.shootingSpeed);

// const graphics = new Graphics();
// const sfx = new Sfx();
// const game = new Game();


///////////////////////////////////////////////////////////////////////////////////////////////////