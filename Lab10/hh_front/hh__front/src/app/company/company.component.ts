import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../services/company.service";
import {Vacancy} from "../interfaces/vacancy.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companyId: string | null = null
  vacancies: any[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.companyService.getVacanciesById(parseInt(this.companyId ?? "1")).subscribe(
      data => this.vacancies = data
    );
  }
}