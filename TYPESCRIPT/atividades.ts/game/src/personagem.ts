export abstract class personagem {
  public nome: string = "personagem";
  protected forca: number = 0;
  protected vida: number = 0;
  protected dano: number = 0;
  protected defesa: number = 0;
  protected imagem: string = "";

  constructor(
    nome: string,
    forca: number,
    vida: number,
    dano: number,
    defesa: number,
    imagem: string,
  ) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.dano = dano;
    this.defesa = defesa;
    this.imagem = imagem;
  }

  isContinuaVivo(): boolean {
    return this.vida > 0;
  }

  sofrerAtaque(dano: number): void {
    this.vida = this.vida - dano;
    this.exibirMsg(
      `${this.nome} recebeu ${dano} de dano, Vida atual ${this.vida}`,
    );
  }

  getVida() {
    return this.vida;
  }

  getImg(){
    return this.imagem;
  }
  
  gerarAtaque(): number {
    // vai gerar um número aleatório entre 0 e 3
    let maximoAtk = 3;
    return Math.floor(Math.random() * maximoAtk);
  }

  public abstract atacar(persona: personagem): void;

  sofrerAaque(dano: number, defesa: number): void {
    let danoReal: number = dano - defesa * 0.1;
    this.vida -= danoReal;
  }

  regenerar(extra: number): number {
    return (this.vida += extra);
  }

  public exibirMsg(mensagem: string){
     document.getElementById ("console")!.innerHTML += '<p>' + mensagem + '<p>';
  }

}
