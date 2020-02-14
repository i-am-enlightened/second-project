import { Component } from '@angular/core';
import { User } from 'src/app/address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    user: User;
    InputText: string = "Initial Value";

    constructor(){
      this.user = new User();
      this.user.name = "Foo bar";
      this.user.designation = "Software Developer";
      this.user.address = "1234 Main St, City, State, 1000101";
      this.user.phone = [
        '123-123-1234',
        '456-456-4567'
      ];
    };

}
