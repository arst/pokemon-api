export default class PokemonShortInfo {
  public readonly Name: string;
  public Url: string;
  public Id: number;

  constructor(name: string, url: string) {
    this.Name = name;
    this.Url = url;
    this.Id = this.extractId(url);
  }

  private extractId(url: string): number {
    var segments: string[] = url.split("/").filter((segment) => !!segment);

    var id: number = Number.parseInt(segments[segments.length - 1]);
    return id;
  }
}
