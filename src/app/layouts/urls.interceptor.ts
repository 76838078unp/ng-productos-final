import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class UrlsInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loginService.showSpinner()

    return next.handle(request).pipe(
      catchError(
        err =>
          new Observable<HttpEvent<any>>(observer => {
            if (err instanceof HttpErrorResponse) {
              const errResp = <HttpErrorResponse>err;
              
            }
            observer.error(err);
            observer.complete();
          })
      ),
      finalize(()=>{
        this.loginService.hideSpinner()
      })
    );
  }
}
