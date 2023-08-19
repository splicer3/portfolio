export const pillVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * i,
        }
    }),
    whileDrag: {
        scale: 1.10,
        backgroundColor: "#37edcf",
        cursor: "grabbing"
    },
    whileTap: {
        scale: 1.10,
        backgroundColor: "#37edcf",
        cursor: "grabbing"
    },
    whileHover: {
        backgroundColor: "#f3f4f6",
        cursor: "grab"
    }
}

export const logoVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7
        },
    },
    whileDrag: {
        scale: 1.5,
        cursor: "grabbing"
    },
    whileTap: {
        scale: 1.5,
        cursor: "grabbing"
    },
    whileHover: {
        cursor: "grab"
    }
}