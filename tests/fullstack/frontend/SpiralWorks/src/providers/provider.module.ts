import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SessionProvider } from './session/session';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: []
})
export class ProviderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProviderModule,
      providers: [
        SessionProvider
      ]
    }
  }
}
