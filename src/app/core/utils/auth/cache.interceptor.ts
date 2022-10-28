import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {finalize, Observable, shareReplay} from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: HttpRequestCache) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // processing only GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    if (!this.cache.has(request)) {
      const response = next.handle(request).pipe(
        finalize(() => this.cache.delete(request)),
        shareReplay({refCount: true, bufferSize: 1})
      );
      this.cache.set(request, response);
    }
    return this.cache.get(request);
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpRequestCache {

  private readonly requests: Record<string, Observable<HttpEvent<any>>> = {};

  public has(request: HttpRequest<any>): boolean {
    return this.key(request) in this.requests;
  }

  public get(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.requests[this.key(request)];
  }

  public set(request: HttpRequest<any>, response: Observable<HttpEvent<any>>): void {
    this.requests[this.key(request)] = response;
  }

  public delete(request: HttpRequest<any>): void {
    delete this.requests[this.key(request)];
  }

  private key(request: HttpRequest<any>): string {
    return [request.urlWithParams, request.responseType].join('#');
  }
}
