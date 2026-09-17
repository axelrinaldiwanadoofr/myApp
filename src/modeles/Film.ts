
export class Film
{
    id: number = -1 ;
    titre: string = "" ;
    annee: number = 0 ;

    constructor( id: number, titre: string, annee: number )
    {
        this.id = id ;
        this.titre = titre ;
        this.annee = annee ;
    }

}