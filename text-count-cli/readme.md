# text-count-cli
cli tool to count the number of words,characters,sentences,line from a text or a file.

## Installation:
```bash
    npm install text-count-cli
```

## Usage:
***Counting Text Input***

To count based on text input, use the following commands:

- To count characters:
```bash
    count char "your text here"
```

- To count words:
```bash
    count word "text"
```

- To count lines:
```bash
    count line "text"
```

- To count sentences:
```bash
    count sen "text"
```

## Example:
```bash
    count char "hi buddy how are you?"  //output-21

    count word "hi buddy how are you?" //output-5

    count sen "hi buddy how are you?"  //output-1

    count line "hi buddy how are you?"  //output-1

```

***Counting Text from a File***

To count based on a file, use the -f flag followed by the count type and the file path:
When specifying file paths, if the file is in the root directory of your project, you can simply use the file name without the full path.


- To count words in a file:
```bash
    count -f word path/to/your/file.txt
```

- To count characters in a file:
```bash
    count -f char path/to/your/file.txt
```

- To count lines in a file:
```bash
    count -f line path/to/your/file.txt
```

- To count sentences in a file:
```bash
    count -f sen path/to/your/file.txt
```

## Example:
```bash
    count -f char suraj.txt  //output-32

    count -f word suraj.txt //output-6

    count -f sen suraj.txt //output-1

    count -f line suraj.txt  //output-1

```


