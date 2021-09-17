export const validation = (data,passvalidations) => {
    
    const newvalidationstate = [...passvalidations]
    const number = new RegExp("(?=.*[0-9])");

    const lowercase = new RegExp("(?=.*[a-z])");

    const uppercase = new RegExp("(?=.*[A-Z])");
    const specialchar = new RegExp("(?=.*[!@#\$%\^&\*])");
    const eightchar = new RegExp("(?=.{8,})");





    data = data.trim();

    if (number.test(data)) {
        newvalidationstate[1] = true
    } else {
        newvalidationstate[1] = false

    }

    if (lowercase.test(data)) {
        newvalidationstate[4] = true
    } else {
        newvalidationstate[4] = false

    }

    if (uppercase.test(data)) {
        newvalidationstate[3] = true
    } else {
        newvalidationstate[3] = false

    }

    if (specialchar.test(data)) {
        newvalidationstate[2] = true
    } else {
        newvalidationstate[2] = false

    }
    if (eightchar.test(data)) {
        newvalidationstate[0] = true
    } else {
        newvalidationstate[0] = false

    }
console.log(newvalidationstate);

    return newvalidationstate;





}



