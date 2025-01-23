export const migrateRings = (N: number, A: string, B: string, C: string): string[] => {
    const result: string[] = [];

    const move = (n: number, from: string, to: string, aux: string): void => {
        if (n === 1) {
            result.push(`${n}: ${from} to ${to}`);
            return;
        }
        move(n - 1, from, aux, to);
        result.push(`${n}: ${from} to ${to}`);
        move(n - 1, aux, to, from);
    };

    move(N, A, B, C);
    return result;
};
