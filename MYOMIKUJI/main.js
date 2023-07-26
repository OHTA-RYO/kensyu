"use strict";
function formatName(name, title = 'さん') {
    return `${name}${title}`;
}
console.log(formatName('bob'));
console.log(formatName('alice', 'くん'));
