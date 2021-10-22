
import * as vscode from 'vscode';
import { ConfigManager } from './configManager';
import { highlightTargetStr } from './highlight';
import { HighlightManager } from './highlightManager';

export function activate(context: vscode.ExtensionContext) {
	// const hightManager = new HighlightManager();
	const configManager = new ConfigManager();
	let disposable = vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');
		// hightManager.highlightTargetStr('text');

	});
	// hightManager.highlightTargetStr('primary_color');
	// hightManager.dispose();
	highlightTargetStr('primary');
	

	context.subscriptions.push(disposable);
}

export function deactivate() {}
