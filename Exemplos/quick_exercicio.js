const { app, Vault, Plugin } = require("obsidian");

async function createFolderNoteAndFiles(folderPath, templatePath, file1Name, file2Name) {
    const vault = app.vault;

    // Create the new folder
    await app.commands.executeCommand("create-folder", newFolderPath);

    // Ask the user for the note title
    const noteTitle = await app.vault.getAbstractFileByPath(templatePath).name;
    const newNotePath = vault.adapter.joinPath(newFolderPath, noteTitle + ".md");

    // Create the note from the template
    const templateFile = await vault.read(templatePath);
    await vault.create(newNotePath, templateFile);

    // Create the two files
    await app.commands.executeCommand("create-file", vault.adapter.joinPath(newFolderPath, file1Name));
    await app.commands.executeCommand("create-file", vault.adapter.joinPath(newFolderPath, file2Name));

    // Add a link to the templated note in the current note
    const currentNote = app.workspace.getActiveFile();
    const currentNoteContent = await vault.read(currentNote.path);
    const newLink = `[[${newNotePath}]]`;
    const updatedContent = currentNoteContent + "\n" + newLink;
    await vault.modify(currentNote.path, updatedContent);
}

// Example usage:
createFolderNoteAndFiles("My Vault/Notes", "My Vault/Templates/My Template.md", "File 1.txt", "File 2.txt");