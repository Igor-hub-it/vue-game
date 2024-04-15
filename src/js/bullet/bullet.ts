import { Ref } from "vue";

export class Bullet {
  constructor(private readonly target: Ref<HTMLDivElement>) {}

  public shoot(target: Ref<HTMLDivElement>) {
    
    console.log(target.value.style.top, target.value.style.left)
  }

  public bulletStyle() {
    return {
      width: `10px`,
      height: `10px`,
      top: `${this.target.value.style.top}`,
      left: `${this.target.value.style.left}`,
      background: "white",
      position: "absolute",
    };
  }
}
