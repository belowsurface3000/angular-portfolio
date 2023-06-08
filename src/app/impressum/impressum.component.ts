import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})

export class ImpressumComponent {

  constructor(private http: HttpClient) { }
  showImpressum: boolean = false;

  impressumData: any = {
    na1: "B****",
    na2: "F****",
    na3: "S******",
    na4: "2**/5***/3***",
    na5: "(E***************)",
    na6: "S***********",
    na7: "M*****",
    ad1: "W****",
    ad2: "J***",
    ad3: "S**",
    ad4: "5****",
    ad5: "B***",
    ad6: "**",
    em1: "b******",
    em2: "d**",
    em3: "a*",
    em4: "f****",
    em5: "d*"
  };

  getImpressumData() {
    this.http.get<any>("https://provider-api.belowsurface.de/provider/bs-impressum")
      .subscribe(
        result => {
          this.showImpressum = true;
          this.impressumData = {
            na1: result.na1,
            na2: result.na2,
            na3: result.na3,
            na4: result.na4,
            na5: result.na5,
            na6: result.na6,
            na7: result.na7,
            ad1: result.ad1,
            ad2: result.ad2,
            ad3: result.ad3,
            ad4: result.ad4,
            ad5: result.ad5,
            ad6: result.ad6,
            em1: result.em1,
            em2: result.em2,
            em3: result.em3,
            em4: result.em4,
            em5: result.em5
          };
        },
        error => console.log('error', error)
      );
  }
}
