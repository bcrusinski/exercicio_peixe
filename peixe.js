
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload(){
    //Carrega as três imagens que serão utilizadas
    this.load.image("mar", "assets/bg_azul-claro.png");
    this.load.image("logo", "assets/logo-inteli_azul.png");
    this.load.image("peixe", "assets/peixes/peixe_turquesa.png");
    this.load.image("alga", "assets/alga.png");
}

function create(){
    this.add.image(400, 300, "mar");
    this.add.image(400, 525, "logo").setScale(0.8);
    peixinho = this.add.image(400, 300, "peixe");

    //Adiciona três algas ao cenário (tentei implementar como função, mas, devido a problemas tecnicos e inexperiencia com o framework, desisti por hora)
    this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), "alga").setScale(0.11);
    this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), "alga").setScale(0.1);
    this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), "alga").setScale(0.08);
    
    peixinho.setOrigin(0.5,0.5).setFlip(true,false);

}

function update(){

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}