import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get(':n') 
    getFibonacci(@Param('n') n: string): { sequence: string } { 
        const count = parseInt(n, 10);  // Converts 'n' to an integer (count)
        const sequence = this.generateFibonacci(count); // Generates Fibonacci sequence
        return { sequence: sequence.join(', ') };  // Joins the sequence into a string and returns
    }

    private generateFibonacci(count: number): number[] { // Generates the Fibonacci sequence
        if (count <= 0) return [];  // If count is 0 or negative, return an empty array
        if (count === 1) return [0]; // For count 1, return [0]
        if (count === 2) return [0, 1]; // For count 2, return [0, 1]

        const fib = [0, 1];  // Start with the first two Fibonacci numbers
        for (let i = 2; i < count; i++) {  // Loop from 2 to 'count'
            fib[i] = fib[i - 1] + fib[i - 2];  // Calculate the next Fibonacci number
        }
        return fib;  // Return the Fibonacci sequence
    }
}
