interface datatypeCount {
    type: string;
    payload: number;
}

export const increaseCount = (): datatypeCount => {
    return {
        type: 'INCREASE_COUNT',
        payload: 0
    };
}

export function decreaseCount(): datatypeCount {
    return {
        type: 'DECREASE_COUNT',
        payload: 0
    };
}
