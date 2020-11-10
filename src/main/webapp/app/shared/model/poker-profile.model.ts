export interface IPokerProfile {
  id?: number;
  ongameId?: string;
  nickName?: string;
  regDate?: string;
  lastDate?: string;
  photoPath?: string;
  ip?: string;
}

export class PokerProfile implements IPokerProfile {
  constructor(
    public id?: number,
    public ongameId?: string,
    public nickName?: string,
    public regDate?: string,
    public lastDate?: string,
    public photoPath?: string,
    public ip?: string
  ) {}
}
