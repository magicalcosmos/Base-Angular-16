// ======================= Angular modules =======================

import { Component, OnInit } from '@angular/core';

// ======================= External modules =======================

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
  }

  public ngOnInit(): void {
    
  }
}
