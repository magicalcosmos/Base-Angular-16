// ======================= Angular modules =======================
import {
  Injectable
} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

// ======================= external modules =======================

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// ======================= Internal modules =======================

import { environment } from '@env/environment';
import { StorageHelper } from '@helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/assets/i18n/') === -1) {
      let secureReq: HttpRequest<any> = req;
      secureReq = req.clone({
        url: environment.apiBaseUrl + req.url,
      });
      const token = StorageHelper.getItem('token');

      if (token !== undefined && token !== null) {
        secureReq = secureReq.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      return next.handle(secureReq);
    } else {
      return next.handle(req);
    }
    
  }
}
