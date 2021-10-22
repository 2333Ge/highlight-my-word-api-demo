import * as vscode from 'vscode';

export const displayStatusBar = () => {
  // 注意保存此对象以更新文案，控制显示与否等
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
  statusBar.text = 'Highlight My Word';
  statusBar.tooltip = '点击切换主题';
  // 点击相应事件，绑定对应command的标识
  statusBar.command = 'highlight-my-word-api-demo.changeTheme';
  statusBar.show();
};
