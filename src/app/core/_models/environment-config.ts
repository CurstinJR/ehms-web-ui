import {InjectionToken} from "@angular/core";

export interface EnvironmentConfig {
  environment: {
    api: string;
  }
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>("EnvironmentConfig");

