
import * as vscode from 'vscode';
import { loadConfig, updateConfig } from './config';

import { highlightTargetStr } from './highlight';
import { showQuickPick } from './quickPick';
import { displayStatusBar } from './StatusBar';

export function activate(context: vscode.ExtensionContext) {
	highlightTargetStr('primary');
	loadConfig();
	displayStatusBar();
	context.subscriptions.push(
		vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');
			updateConfig();
		}),
		vscode.commands.registerCommand('highlight-my-word-api-demo.changeTheme', showQuickPick),
		vscode.workspace.onDidChangeConfiguration((e) => {
			console.log(e)
		}),

	);
}

export function deactivate() { }
