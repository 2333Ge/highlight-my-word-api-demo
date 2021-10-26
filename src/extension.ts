
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
		// 测试代码更新config
		vscode.commands.registerCommand('highlight-my-word-api-demo.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from highlight-my-word-api-demo!');
			updateConfig();
		}),
		vscode.commands.registerCommand('highlight-my-word-api-demo.changeTheme', showQuickPick),
		vscode.workspace.onDidChangeConfiguration((e) => {
			console.log(e);
		}),
		vscode.window.onDidChangeVisibleTextEditors(editors => { console.log(editors.length); }),
		vscode.languages.registerHoverProvider(['javascript', 'typescript'], {
			provideHover: (document: vscode.TextDocument, position: vscode.Position, _: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> => {
				// 得到鼠标悬浮处的单词
				const word = document.getText(document.getWordRangeAtPosition(position));
				if (word === 'primary') {
					return new vscode.Hover('悬浮窗');
				}
			},
		})
	);
}

export function deactivate() { }
