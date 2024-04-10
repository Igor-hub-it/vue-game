import PlanModel from "@/models/Plan";
import { Ref } from "vue";

interface Options {
  health: number;
  attack: number;
  size: number;
  speed: number;
}

export class Plan {
  public health: number;
  public attack: number;
  public size: number;
  public coordinates: [number, number] = [450, 425];
  public speed: number;

  readonly country = "Russia";

  constructor(target: Ref<HTMLDivElement>, options: Options) {
    this.health = options.health;
    this.attack = options.attack;
    this.size = options.size;
    this.speed = options.speed;
    this.init(target);
  }

  public init(target: Ref<HTMLDivElement>) {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          return this.moveUp(target);
        case "ArrowDown":
          return this.moveDown(target);
        case "ArrowLeft":
          return this.moveLeft(target);
        case "ArrowRight":
          return this.moveRight(target);
        case "Space":
          console.log("fire");
      }
    });
  }

  moveUp(target: Ref<HTMLDivElement>) {
    target.value.style.top = `${+target.value.style.top.replace("px", "") - this.speed}px`;
    console.log("up", target.value.style.top);
  }
  moveDown(target: Ref<HTMLDivElement>) {
    target.value.style.top = `${+target.value.style.top.replace("px", "") + this.speed}px`;
    console.log("down");
  }
  moveLeft(target: Ref<HTMLDivElement>) {
    target.value.style.left = `${+target.value.style.left.replace("px", "") - this.speed}px`;
    console.log("left");
  }
  moveRight(target: Ref<HTMLDivElement>) {
    target.value.style.left = `${+target.value.style.left.replace("px", "") + this.speed}px`;
    console.dir("rigth", target.value.style.right);
  }

  public baseStyle() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      top: "450px",
      left: "425px",
      background: "white",
      position: "absolute",
    };
  }
}