export const notificationStyles = {
    base: {
        position: "fixed" as const,
        top: "10px",
        left: "50%" as const,
        transform: "translateX(-50%)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        zIndex: 1000,
        opacity:1
    },
    success: {
        backgroundColor: "#008000",
        color: "black",
    },
    error: {
        backgroundColor: "#AA140D",
        color: "black",
    },
    warning: {
        backgroundColor: "#e68900",
        color: "black",
    },
    info: {
        backgroundColor: "#2196f3",
        color: "black",
    },

}