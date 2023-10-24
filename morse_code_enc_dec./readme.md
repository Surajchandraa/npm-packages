## description:
- Using this npm package you can encode or decode the morse data.

## Installation:
- `npm i morsecode`

## Example code:
- ```js
    let morse=require('morse_code_enc_dec.');
    let suraj=morse.text_to_morse("hi suraj");
    console.log(suraj)


    let joshi=morse.morse_to_text(".... .. / - .... .. ... / .. ... / ... ..- .-. .- .--- -.-. .... .- -. -.. .-. .- .--- --- ... .... ..");
    console.log(joshi)
    


- here two functions are provided to you
- 1. morse_to_text- converts morsecode into text.
- 2. text_to_morse-converts text into morsecode.