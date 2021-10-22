import * as vscode from 'vscode';

export const displayStatusBar = () => {
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
  statusBar.text = 'Highlight My Word';
  statusBar.tooltip = '点击切换主题';
  // 点击相应事件，绑定对应command的标识
  statusBar.command = 'highlight-my-word-api-demo.changeTheme';
  statusBar.show();
};
