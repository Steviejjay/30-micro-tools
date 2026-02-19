# Brick Estimator

Calculate the number of bricks needed for wall construction projects.

## Problem It Solves

Helps construction workers and builders accurately estimate brick quantities, preventing material shortages or over-ordering.

## How It Works

- **Inputs:** Wall length, wall height, brick type
- **Calculation:** Area (length × height) × bricks per square meter
- **Brick Types:**
  - Standard: 32 bricks/sqm
  - Modular: 18 bricks/sqm

## Example

- **Input:** 4m length, 3m height, Standard bricks
- **Calculation:** 4 × 3 = 12 sqm × 32 = 384 bricks
- **Output:** 384 bricks needed

## Technologies Used

- HTML (structure with dropdown)
- CSS (pink/red gradient)
- Vanilla JavaScript

## What I Learned

- Working with multiple inputs
- Dropdown/select elements
- Getting values from select options
- Area calculations (length × height)
- Displaying calculated values with .toFixed()
