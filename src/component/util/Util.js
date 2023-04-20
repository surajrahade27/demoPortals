
export default function password_validate(password) {
    var reg = {
        'ex' : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d!$#,%@]{8,14}$/
    };
    return  reg.ex.test(password);
}