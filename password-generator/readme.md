# Password Generator
A simple and flexible password generator that can create single or multiple passwords with options for length, inclusion of numbers, special characters, and capital letters. It is available both as a CLI tool and as a module.

## Installation:

To install the package, use npm:

```sh
npm install pass-create
```

## CLI USAGE:
After installing the package globally, you can use the password generator from the command line.

1. Generate single password 
``pswd generate --length <length> --numbers <true|false> --special <true|false> --capitals <true|false>``

- `--length` or `-l`: Length of the password (default: 8)
- `--numbers` or `-n`: Include numbers (default: false)
- `--special` or `-s`: Include special characters (default: false)
- `--capitals` or `-c`: Include capital letters (default: false)

**EXAMPLE**
``pswd generate --length 12 --numbers true --special true --capitals true``

2. Generate multiple passwords
``pswd multiple-pass --count <number_of_passwords> --length <length> --numbers <true|false> --special <true|false> --capitals <true|false>``

- ``--count` or `-C`: Number of passwords to generate (default: 5)
- other options are same as the `generate` command

**EXAMPLE**
``pswd multiple-pass --count 10 --length 20 --numbers true --special true --capitals true``





