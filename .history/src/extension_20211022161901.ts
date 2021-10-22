
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "highlight-my-word-api-demo" is now active!');
	let disposable = vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');
	});
	highlightTargetStr
	context.subscriptions.push(disposable);
}

export function deactivate() {}
