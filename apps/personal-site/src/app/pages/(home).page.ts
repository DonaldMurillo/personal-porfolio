import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
	selector: 'personal-site-home',
	standalone: true,
	imports: [AnalogWelcomeComponent],
	template: ` <personal-site-analog-welcome /> `,
})
export default class HomeComponent { }
