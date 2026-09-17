
import {Injectable} from "@angular/core" ;
import {HttpClient} from "@angular/common/http" ;
import {Observable} from "rxjs" ;
import {Film} from "../modeles/Film" ;

@Injectable( {
    providedIn: "root" 
})
export class FilmService
{
    private http: HttpClient ;

    constructor( http: HttpClient )
    {
        this.http = http ;
    }

    getTousLesFilms(): Observable<Film[]>
    {
        return this.http.get<Film[]>( "http://localhost/myApp/php/films/touslesfilms.php" ) ;
    }
}