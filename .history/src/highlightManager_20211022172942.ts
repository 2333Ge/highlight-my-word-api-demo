import * as vscode from 'vscode';

class HighlightManager {
  _decorator: vscode.TextEditorDecorationType;

  constructor() {
    // 创建装饰器
    this._decorator = vscode.window.createTextEditorDecorationType({
      overviewRulerLane: vscode.OverviewRulerLane.Center,
      borderRadius: '2px',
      color: '#fff',
      backgroundColor: '#3072f6',
    });
  }


  highlightTargetStr = (str = '') => {

    // 获取可见编辑器实例
    const visibleTextEditors = vscode.window.visibleTextEditors;
    visibleTextEditors.forEach((editor) => {

      // 获取文档实例
      const { document } = editor;

      // 通过文档实例获取目标字符串位置
      const startIndex = document.getText().indexOf(str);
      const startPos = document.positionAt(startIndex);
      const endPos = document.positionAt(startIndex + str.length);
      const range = [new vscode.Range(startPos, endPos)];

      // 在目标位置设置装饰器
      editor.setDecorations(this._decorator, range);
    });

  };

  dispose = () => {
    this._decorator.dispose();
  };

}