import { Component } from '@angular/core';
import { KrApiService } from '@api/kr-api.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private krApi: KrApiService) {
    this.krApi.searchDict('가다')
      .subscribe(( data ) => {
        xml2js.parseString(data, (err, result) => {
          console.log(result);
        });
      });
  }
}
