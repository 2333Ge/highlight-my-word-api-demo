
import * as vscode from 'vscode';
import { highlightTargetStr } from './highlight';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');

	});
	highlightTargetStr('primary');
	context.subscriptions.push(disposable);
}

export function deactivate() {}
