export const getBalancedSubstrings = (S: string): string[] => {
    const result: string[] = [];
    let maxLen = 0;

    for (let i = 0; i < S.length; i++) {
        const count: Record<string, number> = {};
        for (let j = i; j < S.length; j++) {
            count[S[j]] = (count[S[j]] || 0) + 1;
            const keys = Object.keys(count);
            if (keys.length === 2 && count[keys[0]] === count[keys[1]]) {
                const length = j - i + 1;
                if (length > maxLen) {
                    maxLen = length;
                    result.length = 0; // Clear previous results
                    result.push(S.slice(i, j + 1));
                } else if (length === maxLen) {
                    result.push(S.slice(i, j + 1));
                }
            }
        }
    }

    return result;
};
