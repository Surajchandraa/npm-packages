# pkg-avail
`pkg-avail` is a simple command-line tool that allows you to quickly check the availability of a package name on npm without the need for external dependencies.

## Installation:
- `npm install -g pkg-avail` or `npm install pkg-avail`

## Usage:
- `check <package-name>`
- Replace <package-name> with the name you want to check for availability.

## Example 1:
- ***command***-
    ```bash
    check multer
    ```
 - ***output***-
    ```bash
    Package name 'multer' is already taken.
    ```

## Example 2:
- ***command***-
     ```bash
     check somerandomname
     ```
- ***output***-
    ```bash
    Package name 'somerandomname' is available!
    ```
    