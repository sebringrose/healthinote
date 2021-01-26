import { createBreakpoint } from 'styled-components-breakpoint'

export default {
    color: {
        backgroundBlue: "#f0f4f5",
        backgroundGradient: "linear-gradient(to bottom right, #01b7ff 20%, #3c33fc 80%)",
        blue: "#3c33fe",
        textBlue: "#3c34f9",
        darkBlue: "#050d60",
        lightBlue: "#01b7ff",
        opaque: "rgba(0, 0, 0, 0.4)",
        orange: "#ff9201"
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