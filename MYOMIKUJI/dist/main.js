"use strict";
{
    function checkUsername(useName) {
        if (useName.length >= 4 && useName.length < 25) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(checkUsername('oot'));
}
