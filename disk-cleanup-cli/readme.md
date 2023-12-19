# Disk Cleanup CLI

This Command Line Interface (CLI) tool provides functionalities to perform disk cleanup operations using the disk-cleanup Node.js library.

## Installation:
- To install the Disk Cleanup CLI tool, ensure you have Node.js installed on your system and then run:

```bash

    npm install disk-cleanup-cli
```

## Usage:
- The Disk Cleanup CLI provides various commands to manage disk space. Here are the available commands:

***Command Structure**:
```bash
    disk <command> [options]
```

***Available Commands**

-Remove Temporary Files:
    ```bash
    disk temp <directoryPath>
    ```

- Delete Files Greater Than a Specified Size:
```bash
disk greater <directoryPath> <size>
```

- Delete Files Smaller Than a Specified Size:
```bash
disk smaller <directoryPath> <size>
```

- Delete Files Equal to a Specified Size:
```bash
disk equal <directoryPath> <size>
```

- Create Backup Directory:

```bash
disk createbackupdir <directoryPath>
```
- Backup a File:
```bash
disk backupfile <filePath> <backupDirectoryPath>
```

- Restore a Backup File:
```bash
disk restorebackup <fileName> <backupDirectoryPath> <restoreDirectoryPath>
```

- Remove a Specific File from Backup:
```bash
disk removebackupfile <fileName> <backupDirectoryPath>
```

- Remove the Backup Directory:
```bash
disk removebackupdir <backupDirectoryPath>
```

- Help - Display Available Commands:
```bash
disk --help
```


- for more details check out disk-cleanup library-[https://www.npmjs.com/package/disk-cleanup]