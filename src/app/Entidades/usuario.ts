export class Usuario {
    usuario:string;
    password:string;

    constructor()
    {
        this.usuario= '';
        this.password = '';
    }

    login(){
        console.log("usuario: " + this.usuario + " | contraseña: " + this.password);
    }
}
