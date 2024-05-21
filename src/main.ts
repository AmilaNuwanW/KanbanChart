// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

// registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhMYVF0WmFZfVpgdVVMZVVbR3RPIiBoS35RckVmWHpccnFcRWJdVEd1');


registerLicense('MzI3ODYyN0AzMjM1MmUzMDJlMzBCV0ovaklVT0o5Sk9oUUJmd3QwZHBZZk8rTXVObktpOWM3SVFrVzQwQ0FVPQ==;MzI3ODYyOEAzMjM1MmUzMDJlMzBlWmFydGFIa0RiaU1xNGpQNUMybFJoLzBmZTRqL3R6b3RYVDk4ZXIyNWQ0PQ==;Mgo+DSMBaFt6QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRbQlhiTn5QdkJjW35Yc3c=;Mgo+DSMBPh8sVXJxS0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSXtScUVgWXhecnVTRWM=;ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Wd0JjWn9ZcHZUQWhV;NRAiBiAaIQQuGjN/V0N+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3pTc0RkWXxed3RXR2lYVw==;MzI3ODYzM0AzMjM1MmUzMDJlMzBVTTdRcDdTd2NxU09HdEE3QTFEUEFxMVZVN0dKUkVSOUFGTTBxWW5CRFN3PQ==;MzI3ODYzNEAzMjM1MmUzMDJlMzBiK215OEMwQTJNUWF2QmtqdmhjNkZLVGg0a1VKMll0dE9kbU9ZVFNMRjM4PQ==;Mgo+DSMBMAY9C3t2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Wd0JjWn9ZcHZXQ2hZ;MzI3ODYzNkAzMjM1MmUzMDJlMzBhWm9jamxZV3hUZ1VDSGluTGNSRExsYTJXdmVGMEV5bXM5ZE9FUTN4RmVFPQ==;MzI3ODYzN0AzMjM1MmUzMDJlMzBCZzZZUm9hZkgvbHhZOHEycGhiczhKNSt4Tmk2V0xHZTdleUNIRGJUeWUwPQ==;MzI3ODYzOEAzMjM1MmUzMDJlMzBVTTdRcDdTd2NxU09HdEE3QTFEUEFxMVZVN0dKUkVSOUFGTTBxWW5CRFN3PQ==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




