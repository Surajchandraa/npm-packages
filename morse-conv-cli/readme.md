# morse-conv-cli
A cli tool to encode or decode morse code.

## Installation:
- npm install morse-conv-cli

## commands:
- **conv morse-text <'morse_data'>** command to convert morse data into text.
- **conv text-morse <'text_data'>** command to convert text into morse.

## Note:
- write text_data or morse_data inside single quotes or doube.

## Example 1:
- ```bash
    conv text-morse 'hi hello world! what are u doing'
    

   ```
- ***output***:
    >> .... .. / .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.-- / .-- .... .- - / .- .-. . / ..- / -.. --- .. -. --.


## Example 2:
- ```bash
    conv morse-text '.... .. / .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.-- / .-- .... .- - / .- .-. . / ..- / -.. --- .. -. --.'
    
    
    ```
- ***output***:
    >>hi hello world! what are u doing



