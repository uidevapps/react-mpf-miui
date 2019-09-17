import React from "react";
import PhoneInput from "react-phone-number-input/react-responsive-ui";
import SmartInput from "react-phone-number-input/smart-input";
import flags from "react-phone-number-input/flags";

const PhoneInputField = ({
  input,
  country,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <PhoneInput
      {...input}
      country={country}
      limitMaxLength={true}
      placeholder={placeholder}
      inputComponent={SmartInput}
      flags={flags}
      error={touched && !!error ? "Mobile Number is require*" : ""}
      // error={
      //   this.state.mobile
      //     ? isValidPhoneNumber('')
      //       ? undefined
      //       : "Please enter valid mobile number"
      //     : ""
      // }
    />
  );
};

export default PhoneInputField;
