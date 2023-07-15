import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	private document = inject(DOCUMENT);

	toggleTheme() {
		if (this.document.body.classList.contains('light-theme')) {
			this.switchToDarkTheme();
		} else {
			this.switchToLightTheme();
		}
	}

	// Method to get the current theme
	getCurrentTheme(): string {
		if (this.document?.body.classList.contains('light-theme')) {
			return 'light';
		} else if (this.document?.body.classList.contains('dark-theme')) {
			return 'dark';
		} else {
			return 'default';
		}
	}

	// Method to switch to light theme
	switchToLightTheme() {
		this.document.body.classList.remove('dark-theme');
		this.document.body.classList.add('light-theme');
	}

	// Method to switch to dark theme
	switchToDarkTheme() {
		this.document.body.classList.remove('light-theme');
		this.document.body.classList.add('dark-theme');
	}

	// Method to get computed property by CSS var name
	getComputedStyle(cssVarName: string) {
		return getComputedStyle(this.document.body).getPropertyValue(cssVarName);
	}

	// Method to load all CSS variables into an array
	loadAllCssVariables(): string[] {
		const styles = getComputedStyle(this.document.body);
		const cssVars = [];
		for (let i = styles.length - 1; i >= 0; i--) {
			const property = styles[i];
			if (property.startsWith('--')) {
				cssVars.push(property);
			}
		}
		return cssVars;
	}
}