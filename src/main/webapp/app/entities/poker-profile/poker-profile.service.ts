import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPokerProfile } from 'app/shared/model/poker-profile.model';

type EntityResponseType = HttpResponse<IPokerProfile>;
type EntityArrayResponseType = HttpResponse<IPokerProfile[]>;

@Injectable({ providedIn: 'root' })
export class PokerProfileService {
  public resourceUrl = SERVER_API_URL + 'api/poker-profiles';

  constructor(protected http: HttpClient) {}

  create(pokerProfile: IPokerProfile): Observable<EntityResponseType> {
    return this.http.post<IPokerProfile>(this.resourceUrl, pokerProfile, { observe: 'response' });
  }

  update(pokerProfile: IPokerProfile): Observable<EntityResponseType> {
    return this.http.put<IPokerProfile>(this.resourceUrl, pokerProfile, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPokerProfile>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPokerProfile[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
