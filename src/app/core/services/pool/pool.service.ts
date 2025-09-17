import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Message } from "../../../shared/interfaces/messages/message";
import { CreatePoolDTO } from "../../../shared/dto/pool/create-pool.dto";
import { UpdatePoolDTO } from "../../../shared/dto/pool/update-pool.dto";
import { Observable } from "rxjs";

declare const API_URL: string;

@Injectable({
  providedIn: 'root'
})
export class PoolService {
    private http = inject(HttpClient);
    private apiUrl = API_URL + "/pool";
  
    public create(createPoolDTO: CreatePoolDTO): Observable<Message> {
      return this.http.post<Message>(this.apiUrl, createPoolDTO);
    }

    public update(id: string, updatePoolDTO: UpdatePoolDTO): Observable<Message> {
      return this.http.patch<Message>(`${this.apiUrl}/${id}`, updatePoolDTO);
    }
  }