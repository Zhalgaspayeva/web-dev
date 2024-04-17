import {Company} from "./company.interface";

export interface Vacancy {
  name: string
  description: string
  salary: number
  company: Company
}