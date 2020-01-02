import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductsList {

    constructor(private httpClient: HttpClient){}

    public getProductDetails(){
        return this.httpClient
        .get('assets/productDetails.json');
    }

}