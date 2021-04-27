module.exports = function EncodeString(str) {
  let encoded = '';
  const CODE_A = 65, CODE_Z = 90, CODE_a = 97, CODE_z = 122;

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    /** if char is an UPPERCASE letter */
    if (code >= CODE_A && code <= CODE_Z) {
      code += 1;

      /** ROTATE after 'Z' */
      if (code > CODE_Z) code = CODE_A;
    }

    /** if char is an LOWERCASE letter */
    else if (code >= CODE_a && code <= CODE_z) {
      code += 1;

      /** ROTATE after 'z' */
      if (code > CODE_z) code = CODE_a;
    }

    encoded += String.fromCharCode(code);
  }

  return encoded;
}