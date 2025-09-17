import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';

declare const API_URL: string;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    private http = inject(HttpClient);
    private apiUrl = API_URL + "/payment";
}
