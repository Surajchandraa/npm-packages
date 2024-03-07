# thermoshift
Temperature Conversion Library.
A Node.js library for converting temperatures between various scales.

## Installation:
```bash
    npm install thermoshift
```

## Usage:

```js
    const thermoshift = require('thermoshift');

// Celsius to Fahrenheit
console.log('25°C to Fahrenheit:', thermoshift.Celsius_to_Fahrenheit(25)); // Output: 77

// Celsius to Kelvin
console.log('25°C to Kelvin:', thermoshift.Celsius_to_Kelvin(25)); // Output: 298.15

// Fahrenheit to Celsius
console.log('77°F to Celsius:', thermoshift.Fahrenheit_to_Celsius(77)); // Output: 25

// Fahrenheit to Kelvin
console.log('77°F to Kelvin:', thermoshift.Fahrenheit_to_Kelvin(77)); // Output: 298.15

// Kelvin to Celsius
console.log('298.15K to Celsius:', thermoshift.Kelvin_to_Celsius(298.15)); // Output: 25

// Kelvin to Fahrenheit
console.log('298.15K to Fahrenheit:', thermoshift.Kelvin_to_Fahrenheit(298.15)); // Output: 77

// Other conversions (Rankine, Réaumur, Delisle, Newton)...



```

## Functions available:

### Celsius Conversions
- `Celsius_to_Delisle(celsius)`
- `Celsius_to_Fahrenheit(celsius)`
- `Celsius_to_Kelvin(celsius)`
- `Celsius_to_Newton(celsius)`
- `Celsius_to_Reaumur(celsius)`

### Fahrenheit Conversions
- `Fahrenheit_to_Celsius(fahrenheit)`
- `Fahrenheit_to_Kelvin(fahrenheit)`
- `Fahrenheit_to_Rankine(fahrenheit)`

### Kelvin Conversions
- `Kelvin_to_Celsius(kelvin)`
- `Kelvin_to_Fahrenheit(kelvin)`

### Rankine Conversions
- `Rankine_to_Fahrenheit(rankine)`

### Réaumur Conversions
- `Reaumur_to_Celsius(reaumur)`

### Delisle Conversions
- `Delisle_to_Celsius(delisle)`

### Newton Conversions
- `Newton_to_Celsius(newton)`

## Contribution:
feel free to contribute. pull request