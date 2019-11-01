import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { IntroPage } from './intro/intro.page';
import { ConfigService } from './Provider/Config/config';
import { TabsPage } from './tabs/tabs.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configService: ConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

        const config = this.configService.setConfigData();
        console.log('cons = ', config);
        if (config == null) {
          this.rootPage = IntroPage;
          this.configService.setConfigData(false);
        } else {
          this.rootPage = TabsPage;
        }
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }
}
