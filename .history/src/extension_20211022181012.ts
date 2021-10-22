
import * as vscode from 'vscode';
import { loadConfig, updateConfig } from './config';

import { highlightTargetStr } from './highlight';

export function activate(context: vscode.ExtensionContext) {
	highlightTargetStr('primary');
	loadConfig();

	context.subscriptions.push(vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');
			updateConfig();
	}));
}

export function deactivate() { }
