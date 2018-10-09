'use strict';

import * as vscode from 'vscode';
import { registerRelativeCompletion } from './RelativeCompletion';

export const activate = (context: vscode.ExtensionContext): void => {
  registerRelativeCompletion(context);
}

export const deactivate = (): void => {
}