import * as vscode from 'vscode';

export const loadConfig = () =>  {
  const config = vscode.workspace.getConfiguration('highlight-my-word-api-demo').get('themes', {});
  console.log(config);
};
