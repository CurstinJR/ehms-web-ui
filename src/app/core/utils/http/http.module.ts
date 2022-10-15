import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ENV_CONFIG, EnvironmentConfig} from "../../_models/environment-config";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class HttpModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {provide: ENV_CONFIG, useValue: config}
      ]
    }
  }
}
