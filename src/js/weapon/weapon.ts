import { Ref } from "vue";
import { Bullet } from "@/js/bullet/bullet";

// interface Options {}

export class Weapon {
  constructor(target: Ref<HTMLDivElement>) {}

  shoot(target: Ref<HTMLDivElement>) {
    const bullet = new Bullet(target);
    bullet.shoot(target)
  }
}
