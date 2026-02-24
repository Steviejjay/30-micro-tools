# Tile Calculator

Calculate the number of tiles needed for floor installation.

## Problem It Solves
Helps estimate tile quantities for flooring projects, accounting for wastage from cutting and breakage.

## How It Works
- **Inputs:** Floor length, floor width, tile size, wastage %
- **Calculation:** (Length × Width) × (1 + Wastage%) ÷ Tile Size
- **Output:** Number of tiles needed (rounded up)

## Example
- **Input:** 5m × 4m floor, 30cm × 30cm tiles (0.09 sqm), 10% wastage
- **Calculation:** (5 × 4) × 1.10 ÷ 0.09 = 245 tiles
- **Output:** 245 tiles needed

## Technologies Used
- HTML
- CSS (pink/yellow gradient)
- Vanilla JavaScript

## What I Learned
- Percentage calculations in JavaScript
- Working with 4 inputs
- Default input values (value="10")
- Max attribute for inputs
