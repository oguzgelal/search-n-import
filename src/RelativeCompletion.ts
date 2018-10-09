'use strict';

import * as vscode from 'vscode';

class RelativeCompletion implements vscode.CompletionItemProvider {

  public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): Promise<vscode.CompletionItem[]> {
    return new Promise((resolve, reject) => {
      const currentRange = document.getWordRangeAtPosition(position);
      const currentText = document.getText(currentRange);
      console.log('currentText: ', currentText);
      const completionItems = this.generateCompletionItems();
      setTimeout(() => resolve(completionItems), 1500)
    });
  }

  private generateCompletionItems(): vscode.CompletionItem[] {
    return [
      new vscode.CompletionItem('asd1'),
      new vscode.CompletionItem('asd2'),
      new vscode.CompletionItem('test1'),
      new vscode.CompletionItem('test2'),
    ];
  }
}

// create an instance and register to the context
export const registerRelativeCompletion = (context: vscode.ExtensionContext): void => {
  const provider = new RelativeCompletion();
  const selector: vscode.DocumentSelector = { scheme: 'file' };
  const { registerCompletionItemProvider } = vscode.languages;
  const disposable = registerCompletionItemProvider(selector, provider, '');
  context.subscriptions.push(disposable);
}

export default RelativeCompletion;