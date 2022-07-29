abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getFullName(): string;
  abstract getnickName(): string;
}

class Player extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getnickName() {
    return `nickname: ${this.nickName}`;
  }
}

const sunghun = new Player("sunghun", "choi", "cgj");
sunghun.getFullName();
sunghun.getnickName();
