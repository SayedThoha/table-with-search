import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/userInterfaces';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(
    value: IUser[],
    nameSearch: string,
    citySearch: string,
    companySearch: string
  ): IUser[] {
    let searchName = nameSearch.trim().toLowerCase();
    let searchCity = citySearch.trim().toLowerCase();
    let searchCompany = companySearch.trim().toLowerCase();

    return value.filter((val) => {
      let name = nameSearch
        ? val.name.toLowerCase().includes(searchName)
        : true;
      let city = citySearch
        ? val.address.city.toLowerCase().includes(searchCity)
        : true;
      let company = companySearch
        ? val.company.name.toLowerCase().includes(searchCompany)
        : true;
      return name && city && company;
    });
  }
}
