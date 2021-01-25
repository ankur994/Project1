exports.responseMessages = {
    LOGIN_SUCCESS                       : 'Login successfully',
    REGISTERED_SUCCESSFULLY             : 'Registered successfully',
    CUSTOMER_ALREADY_EXISTS             : 'Customer already exists',
    EMAIL_ALREADY_EXISTS                : 'Email already exists',
    PHONE_ALREADY_EXISTS                : 'Phone no. already exists',
    ERROR_IN_REGISTRATION               : 'Error in Registration',
    SOMETHING_WENT_WRONG                : 'Something went wrong',
    CUSTOMER_NOT_FOUND                  : 'Customer not found',
    INVALID_EXPIRED_OTP                 : 'Invalid or expired otp',
    OTP_ALREADY_VERIFIED                : 'OTP already verified',
    OTP_VERIFIED_SUCCESSFULLY           : 'OTP verified successfully',
    EMAIL_NOT_VERIFIED                  : 'Email is not verified',
    ACCOUNT_BLOCKED                     : 'Your account has been blocked',
    PASSWORD_NOT_EXIST                  : "Password of email doesn't exist",
    EMAIL_PASSWORD_NOT_MATCH            : "Email and password doesn't match",
    PASSWORD_UPDATED_SUCCESSFULLY       : 'Password updated successfully',
    ERROR_UPDATING_PASSWORD             : 'Error in updating password',
    OLD_PASSWORD_INCORRECT              : 'Old password is incorrect',
    OLD_NEW_PASSWORD_NOT_SAME           : "Old and new password can't be same",
    PASSWORD_CHANGED_SUCCESSFULLY       : 'Password changed successfully',
    CUSTOMER_DELETED                    : 'Customer deleted successfully',
    PROFILE_UPDATED                     : 'Customer details updated successfully',
    ERROR_UPDATION_CUSTOMER             : 'Error in updating customer details',
    CUSTOMER_BLOCKED                    : 'Customer blocked successfully',
    CUSTOMER_UNBLOCKED                  : 'Customer unblocked successfully',
    ERROR_IN_DRIVERS                    : 'Error in getting drivers',
    DRIVERS_GET_SUCCESSFULLY            : 'Drivers get successfully',

    STORE_ALREADY_EXISTS                : 'Store already exists',
    STORE_NOT_FOUND                     : 'Store not found',
    STORE_BLOCKED                       : 'Store blocked successfully',
    STORE_UNBLOCKED                     : 'Store unblocked successfully',
    STORE_DELETED                       : 'Store deleted successfully',
    STORE_ALREADY_DELETED               : 'Store already deleted',
    ERROR_UPDATION_STORE                : 'Error in updating store details',
    STORES_GET_SUCCESSFULLY            : 'Stores get successfully',
}

exports.responseFlags = {
    LOGIN_SUCCESS                       : 200,
    REGISTERED_SUCCESSFULLY             : 201,
    CUSTOMER_ALREADY_EXISTS             : 201,
    EMAIL_ALREADY_EXISTS                : 201,
    PHONE_ALREADY_EXISTS                : 201,
    ERROR_IN_REGISTRATION               : 400,
    SOMETHING_WENT_WRONG                : 401,
    CUSTOMER_NOT_FOUND                  : 201,
    INVALID_EXPIRED_OTP                 : 401,
    OTP_ALREADY_VERIFIED                : 201,
    OTP_VERIFIED_SUCCESSFULLY           : 200,
    EMAIL_NOT_VERIFIED                  : 400,
    ACCOUNT_BLOCKED                     : 400,
    PASSWORD_NOT_EXIST                  : 201,
    EMAIL_PASSWORD_NOT_MATCH            : 201,
    PASSWORD_UPDATED_SUCCESSFULLY       : 200,
    ERROR_UPDATING_PASSWORD             : 400,
    OLD_PASSWORD_INCORRECT              : 201,
    OLD_NEW_PASSWORD_NOT_SAME           : 201,
    PASSWORD_CHANGED_SUCCESSFULLY       : 200,
    CUSTOMER_DELETED                    : 201,
    PROFILE_UPDATED                     : 200,
    ERROR_UPDATION_CUSTOMER             : 400,
    CUSTOMER_BLOCKED                    : 200,
    CUSTOMER_UNBLOCKED                  : 200,
    ERROR_IN_DRIVERS                    : 400,
    DRIVERS_GET_SUCCESSFULLY            : 200,

    STORE_ALREADY_EXISTS                : 201,
    STORE_NOT_FOUND                     : 201,
    STORE_BLOCKED                       : 200,
    STORE_UNBLOCKED                     : 200,
    STORE_DELETED                       : 201,
    STORE_ALREADY_DELETED               : 201,
    ERROR_UPDATION_STORE                : 400,
    STORES_GET_SUCCESSFULLY             : 200,
}