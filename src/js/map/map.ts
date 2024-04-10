interface Options {
  color: string;
}

export class Map {
  public readonly size = 900;
  public color: string;

  constructor(options: Options) {
    this.color = options.color;
  }
}
