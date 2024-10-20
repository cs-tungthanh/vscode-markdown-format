// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, "md-formatter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('md-formatter.helloWorld', (args: any) => {
		console.log('md-formatter.helloWorld', args);
		vscode.window.showInformationMessage('Hello World from md-bbbb!', args);
		
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('md-formatter is deactivated');
}
