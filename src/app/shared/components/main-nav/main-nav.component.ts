import { Component, OnInit } from '@angular/core';
import { PersonService, TokenService } from '../../services';
import { Person } from '../../models';

@Component({
  selector: 'dj-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isCollapsed = true;
  // tslint:disable-next-line: variable-name
  private _person: Person;

  constructor(private token: TokenService, private service: PersonService) {}

  get firstName(): string {
    return this.person ? this.person.name.split(' ')[0] : '';
  }

  get person(): Person {
    return this._person;
  }

  logout(): void {
    this._person = undefined;
    this.token.logout();
  }

  get isLogged(): boolean {
    return this.token.isLogged();
  }

  ngOnInit(): void {
    if (this.isLogged) {
      this.initPerson();
    }
  }

  private initPerson() {
    const subscription = this.service.find().subscribe(
      response => {
        this._person = response.data;
        subscription.unsubscribe();
      },
      () => subscription.unsubscribe()
    );
  }

  get authMenu(): boolean {
    return !this.token.isLogged();
  }

  get clientMenu(): boolean {
    return this.token.isLogged();
  }

  get analystMenu(): boolean {
    return this.token.isAnalyst();
  }

  get adminMenu(): boolean {
    return this.token.isAdmin();
  }
}
