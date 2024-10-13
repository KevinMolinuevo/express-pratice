export const createUserValidationSchema ={
    username: {
        isLength:{
            options:{
                min: 5, 
                max: 32,
            },
            errorMessage:"username must be at least 5 characters with max of 32"
        },
        notEmpty: {
            errorMessage:'username must be at least 5 characters with max of 32'
        }, 
        isString: {
            errorMessage: 'username must be at least 5 characters with max of 32'
        },
    },
    displayName: {
        notEmpty: true
    },
};