// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhMYVF0WmFZfVpgdVVMZVVbR3RPIiBoS35RckVmWHpccnFcRWJdVEd1');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




