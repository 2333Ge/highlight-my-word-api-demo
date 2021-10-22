import * as vscode from 'vscode'
const highlightTargetStr = (str = 'primary_color') => {

  const visibleTextEditors = vscode.window.visibleTextEditors;
  visibleTextEditors.forEach((item) => {
    const { document } = item;
    const text = document.getText();
    const startIndex = text.indexOf(str);
    const startPos = document.positionAt(startIndex);
    const endPos = document.positionAt(startIndex + str.length)
    const range = new vscode.Range(startPos, endPos);
    item.setDecorations(textd)
  });
};