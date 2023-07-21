"use strict";
{
    function checkUsername(useName) {
        if (useName.length >= 4 && useName.length <= 25) {
            if (useName.charAt(0).match(/[a-z]/)) {
                if (useName.charAt(useName.length - 1) !== "_") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    console.log(checkUsername("aasssssssssssssssss"));
}
