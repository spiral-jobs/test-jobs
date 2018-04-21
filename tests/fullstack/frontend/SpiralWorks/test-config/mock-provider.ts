import { ISession } from './../src/interfaces/session/session.interface';
import { Observable, Observer } from 'rxjs';
export class SessionMock {
  Signup(): Observable<ISession> {
    return new Observable<ISession>(observer => {
      observer.next({
        user: {
          id: '1',
          email: 'some@email.com',
          phoneNumber: '1234566',
          lname: 'some name',
          fname: 'some fname'
        },
        token: 'some token'
      });
      observer.complete();
    });
  }
  Signin(): Observable<ISession> {
    return new Observable<ISession>(observer => {
      observer.next({
        user: {
          id: '1',
          email: 'some@email.com',
          phoneNumber: '1234566',
          lname: 'some name',
          fname: 'some fname'
        },
        token: 'some token'
      });
      observer.complete();
    });
  }
  SignOut() {
    return Promise.resolve();
  }
  GetCredentials() {
    return {'user': {}, 'token': 'some token'};
  }
}

export class SessionMock2 {
  GetCredentials() {
    return null;
  }
}
