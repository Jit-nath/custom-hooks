"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import {useState, useEffect} from "react";
function useMousePos(elementId) {
    const [position, setPosition] = (0, useState)([0, 0]);
    (0, useEffect)(() => {
        const element = document.getElementById(elementId);
        if (!element)
            return;
        const getMousePosition = (event) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            return [x, y];
        };
        const handleMouseMove = (event) => {
            setPosition(getMousePosition(event));
        };
        element.addEventListener('mousemove', handleMouseMove);
        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [elementId]);
    return position;
}
const _default = useMousePos;
export {_default as default};
