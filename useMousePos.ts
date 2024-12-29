import { useEffect, useState } from "react";

function useMousePos(elementId: string): [number, number] {
    const [position, setPosition] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        const element = document.getElementById(elementId);

        if (!element) return;

        const getMousePosition = (event: MouseEvent): [number, number] => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            return [x, y];
        };

        const handleMouseMove = (event: MouseEvent) => {
            setPosition(getMousePosition(event));
        };

        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [elementId]);

    return position;
}
export default useMousePos;