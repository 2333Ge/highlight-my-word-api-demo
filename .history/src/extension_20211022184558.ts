
import * as vscode from 'vscode';
import { loadConfig, updateConfig } from './config';

import { highlightTargetStr } from './highlight';
import { displayStatusBar } from './StatusBar';

export function activate(context: vscode.ExtensionContext) {
	highlightTargetStr('primary');
	loadConfig();
	displayStatusBar();
	context.subscriptions.push([]);
}

export function deactivate() { }
