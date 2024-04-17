import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../interfaces/company.interface";
import {Vacancy} from "../interfaces/vacancy.interface";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url: string = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.url}companies/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.url}companies/${id}/`);
  }

  getVacanciesById(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.url}companies/${id}/vacancies/`)
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.url}vacancies/`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.url}vacancies/${id}/`)
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.url}vacancies/top_ten/`)
  }
}


// /api/companies - List of all Companies
// /api/companies/<int:id>/ - Get one Company
// /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
// /api/vacancies/ - List of all Vacancies
// /api/vacancies/<int:id>/ - Get one Vacancy
// /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary