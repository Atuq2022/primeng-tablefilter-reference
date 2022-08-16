import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from './customer';

@Injectable()
export class CustomerService {

    customerData: any;

    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Section[]>res.data)
            .then(data => { return data; });
    }

    /*getCustomerData() {
        return this.http.get<any>('assets/customers-large.json').subscribe(data=>{
            console.log(data);
            this.customerData = data;
          })
    }*/

    getCustomerData() {
        return this.http.get<any>('assets/customers-large.json').subscribe(data=>
            this.customerData = data.length)
    }
}
