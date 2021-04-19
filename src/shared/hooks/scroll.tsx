import { useCallback, useRef } from 'react';

const useScroll = () => {
    const ref = useRef<Element>(null);

    const handleScroll = useCallback((scrollToOptions: ScrollToOptions) => {
        if (ref && ref.current) {
            ref.current.scrollTo(scrollToOptions);
        }
    }, []);

    return {
        ref,
        handleScroll,
    };
};

export default useScroll;
