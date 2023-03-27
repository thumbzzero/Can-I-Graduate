import { style } from "@vanilla-extract/css";

export const hr = style({
    color: "#d9d9d9",
    margin: "0.5rem 0 1.5rem 0",
    height: "2px",
});

export const pwLabel = style({
    display: "block",
    marginTop: "1.5rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
});

export const pwInput = style({
    width: "100%",
    height: "40px",
    border: "1px solid #696969",
    borderRadius: "4px",
    marginTop: "0.2rem",
    padding: "1rem",
    fontSize: "1.2rem",
});

export const pwChagneButton = style({
    backgroundColor: "#FF000080",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    width: "4rem",
    marginTop: "3rem",
    float: "right",
    cursor: "pointer",
});