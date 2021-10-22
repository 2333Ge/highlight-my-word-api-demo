import * as vscode from 'vscode';

export const highlightTargetStr = (str = '') => {
  const decorator = vscode.window.createTextEditorDecorationType({
    overviewRulerLane: vscode.OverviewRulerLane.Center,
    borderRadius: '2px',
    color: '#fff',
    backgroundColor: '#3072f6',
  });
  const visibleTextEditors = vscode.window.visibleTextEditors;
  visibleTextEditors.forEach((editor) => {
    const { document } = editor;
    const startIndex = document.getText().indexOf(str);
    const startPos = document.positionAt(startIndex);
    const endPos = document.positionAt(startIndex + str.length);
    const range = [new vscode.Range(startPos, endPos)];
    editor.setDecorations(decorator, range);
  });
};