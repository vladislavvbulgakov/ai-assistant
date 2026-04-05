const isEmpty = (value: unknown) => {
    return (
        value === undefined ||
        value === null ||
        value === "" ||
        (typeof value === "number" && value === 0)
    );
};
export default isEmpty;
