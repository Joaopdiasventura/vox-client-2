import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { CreateCandidateDto } from "../../../shared/dto/candidate/create-candidate.dto";
import { Message } from "../../../shared/interfaces/messages/message";
import { Candidate } from "../../models/candidate";
import { Observable } from "rxjs";

declare const API_URL: string;

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private http = inject(HttpClient);
  private apiUrl = API_URL + "/candidate";

  public create(
    createCandidateDto: CreateCandidateDto,
  ): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, createCandidateDto, {
      headers: { Authorization: localStorage.getItem("token") as string },
    });
  }

  public findAllByGroup(group: string): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(
      `${this.apiUrl}/findAllByGroup/${group}`,
      {
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      },
    );
  }

  public findManyByGroup(
    group: string,
    page: number,
  ): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(
      `${this.apiUrl}/findManyByGroup/${group}/${page}`,
      {
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      },
    );
  }

  public delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
      },
    });
  }
}
