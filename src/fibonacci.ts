export const fibonacci = (n: number): number => {
    const memo = new Map<number, number>();

    const fib = (x: number): number => {
        if (x <= 1) return x;
        if (memo.has(x)) return memo.get(x)!;
        const value = fib(x - 1) + fib(x - 2);
        memo.set(x, value);
        return value;
    };

    return fib(n);
};
