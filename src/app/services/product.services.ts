import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Product } from '../class/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private productSubject: BehaviorSubject<Product>;
    public product: Observable<Product>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.productSubject = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('product') || '{}'));
        this.product = this.productSubject.asObservable();
    }

    getAll() {
        return this.http.get<Product[]>(`${environment.productUrl}`);
    }

    getById(id: string) {
        return this.http.get<Product>(`${environment.productUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(`${environment.productUrl}`, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.productUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${environment.productUrl}/${id}`);
    }
}