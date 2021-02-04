import {createBreakpoint} from 'styled-components-breakpoint'

export default {
    color: {
        blue: "#0096d7",
        orange: "#f46e42",
        yellow: "#fcb737",
        lightBlue: "#f0f4f5",
    },
    breakpoint: createBreakpoint({
        xs: 0,
        sm: 300,
        md: 600,
        lg: 900,
        xl: 1200,
    })
    
}