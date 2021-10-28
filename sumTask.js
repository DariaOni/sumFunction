function sum(firstArgument, secondArgument) {
    
    if (
        typeof secondArgument === "number" &&
        secondArgument % 5 == 0 ||
        secondArgument % 8 == 0 ||
        secondArgument % 11 == 0 
    ) {
        secondArgument = secondArgument * 2;
    }
    else (typeof secondArgument === "string"); {
        secondArgument = Number(secondArgument)
    }

    if (
        typeof firstArgument === "number" &&
        firstArgument % 5 == 0 ||
        firstArgument % 8 == 0 ||
        firstArgument % 11 == 0 
    ) {
        firstArgument = firstArgument * 2;
    }
    else (typeof firstArgument === "string"); {
        firstArgument = Number(firstArgument);
    }

 return firstArgument + secondArgument;
} 