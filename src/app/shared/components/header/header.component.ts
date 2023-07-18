// ======================= Angular modules =======================
import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  constructor (
    private router : Router,
    private http: HttpClient,
  ) {
    
  }

  public ngOnInit() : void
  {
    this.http.get<any>('/test/api').subscribe((data) => {
      debugger
    });

  } 

  public handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
    
  }
}
