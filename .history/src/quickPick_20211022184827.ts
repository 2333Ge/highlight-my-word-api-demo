
import * as vscode from 'vscode';

export const showQuickPick = () => {
  vscode.window.showQuickPick([
    '主题1',
    '主题2',
  ], {
    canPickMany: false,
    placeHolder: "选择您的主题"
  }).then((res) => {
    if (!res) {
      return;
    }
   console.log(res)
  });
};
