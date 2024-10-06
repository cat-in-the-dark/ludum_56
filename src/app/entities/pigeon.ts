import { Vector2 } from "@cat_in_the_dark/math";
import { Anim } from "../../lib/anim";
import { IDrawable, IUpdateable } from "../../lib/interfaces/updateable";
import { am } from "../assets";

export class Pigeon implements IUpdateable, IDrawable {
  private animIdle: Anim;
  private offset: Vector2;

  constructor(public pos: Vector2, public dir: Vector2) {
    this.animIdle = am.pigeonIdleAnim();
    this.offset = new Vector2(this.animIdle.frame.width / 2, 0);
  }

  update(dt: number): void {
    this.animIdle.update(dt);
  }

  draw(): void {
    this.animIdle.frame.draw(this.pos.minus(this.offset));
  }
}