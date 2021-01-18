import { createBreakpoint } from 'styled-components-breakpoint'

export default {
    color: {
        blue: "#226393",
        orange: "#f46e42",
        yellow: "#fcb737",
        backgroundBlue: "#f0f4f5",
        lightBlue: "#0096d7",
        opaque: "rgba(0, 0, 0, 0.4)"
    },
    font: {
        small: "0.8rem",
        default: "1rem",
        medium: "1.1rem",
        large: "1.5rem",
        xlarge: "2.4rem"
    },
    breakpoint: createBreakpoint({
        xs: 0,
        sm: 300,
        md: 600,
        lg: 900,
        xl: 1200,
    })
    
}