import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SessionProvider } from './session';

describe('Session Provider', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SessionProvider,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('Signup()', () => {

    it('should return an Observable<ISession>',
        inject([SessionProvider, XHRBackend], (sessionProvider, mockBackend) => {

        const mockResponse = {
          data: {
            user: {
              id: '1',
              email: 'some@email.com',
              phoneNumber: '1234566',
              lname: 'some name',
              fname: 'some fname'
            },
            token: 'some token'
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        sessionProvider.Signup().subscribe((session) => {
          expect(session).not.toBe(null);
          expect(session.user.id).toBe('1');
          expect(session.user.email).toBe('some@email.com');
          expect(session.token).toBe('some token');
        });

    }));
  });
  describe('Signin()', () => {
    it('should return an Observable<ISession>',
    inject([SessionProvider, XHRBackend], (sessionProvider, mockBackend) => {
      const mockResponse = {
        data: {
          user: {
            id: '1',
            email: 'some@email.com',
            phoneNumber: '1234566',
            lname: 'some name',
            fname: 'some fname'
          },
          token: 'some token'
        }
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      sessionProvider.Signin().subscribe((session) => {
        expect(session).not.toBe(null);
        expect(session.user.id).toBe('1');
        expect(session.user.email).toBe('some@email.com');
        expect(session.token).toBe('some token');
      });
    }));
  });

  describe('SignOut()', () => {
    it('should return a promise', inject([SessionProvider], (sessionProvider) => {
      sessionProvider.SignOut()
      .then((data) => {
        expect(data).toBe(undefined);
      });
    }));
  });
  describe('GetData()', () => {
    it('should extract data', inject([SessionProvider], (sessionProvider) => {
      expect(sessionProvider.GetData({data: 'some-data'})).toBe('some-data');
    }));
  });
  describe('GetCredentials()', () => {
    it('should return a promise', inject([SessionProvider], (sessionProvider) => {
      expect(sessionProvider.GetCredentials()).toBe(null);
    }));
  });
});
