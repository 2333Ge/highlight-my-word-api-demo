import * as vscode from 'vscode'
const highlightTargetStr = (str = 'primary_color') => {

  const visibleTextEditors = vscode.window.visibleTextEditors;
  visibleTextEditors.forEach(item => {
    const text = item.document.getText();
    const startPos = text.indexOf(str);
    const endPos = startPos + str.length;
    const range = new vscode.Range()
  });
};