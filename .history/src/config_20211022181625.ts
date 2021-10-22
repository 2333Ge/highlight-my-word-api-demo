import * as vscode from 'vscode';

export const loadConfig = () => {
  const config = vscode.workspace.getConfiguration('highlight-my-word-api-demo').get('themes', {});
  console.log("config", config);
};


export const updateConfig = () => {
  vscode.workspace.getConfiguration('highlight-my-word-api-demo').update('themes', { "primary_color": '#f0f' });
};