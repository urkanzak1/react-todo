import { useEffect } from 'react';

// todo ???
export default function useEffectAsync(effect: any, inputs: any) {
    useEffect(() => {
        effect();
    }, inputs);
}