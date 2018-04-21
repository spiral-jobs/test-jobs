import { NgModule } from '@angular/core';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page';
import { IonicModule } from 'ionic-angular';
import { ButtonComponent } from './button/button';
@NgModule({
	declarations: [
		HomeLandingPageComponent,
		ButtonComponent
	],
	imports: [IonicModule],
	exports: [
		HomeLandingPageComponent,
		ButtonComponent
	]
})
export class ComponentsModule {}
