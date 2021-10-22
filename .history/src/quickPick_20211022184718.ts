
import * as vscode from 'vscode';

export const displayStatusBar = () => {
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
  statusBar.text = 'Highlight My Word';
  statusBar.tooltip = '点击切换主题';
  statusBar.show();
};
