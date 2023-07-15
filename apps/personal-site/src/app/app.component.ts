import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@personal-portfolio/shared-ui/services';

@Component({
	selector: 'personal-site-root',
	standalone: true,
	imports: [RouterOutlet],
	providers: [ThemeService],
	template: ` 

		<router-outlet></router-outlet> 
	`,
})
export class AppComponent { }
