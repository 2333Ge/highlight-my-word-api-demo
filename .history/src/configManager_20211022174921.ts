import * as vscode from 'vscode';

export class ConfigManager {
  _themes: { [key: string]: string };

  constructor() {
    this._themes = vscode.workspace.getConfiguration('highlight-my-word').get('themes', {});

    console.log(this._themes);
  }
}