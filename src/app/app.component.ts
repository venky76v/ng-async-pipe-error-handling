import { Countries } from './_models/Countries';
import { AsyncServiceService } from './_services/async-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-async-pipe-error-handling';
  public countries$: Observable<Countries> = null;
  public errorObject: Object = null;
  private hasError = false;

  constructor(private asyncService: AsyncServiceService) {}

  ngOnInit() {
    this.countries$ = this.asyncService.listOfCountries().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
}
