export const company = (client) => {
  const clientTransformed = { ...client, isFavorited: client.is_favorited };
  delete clientTransformed.is_favorited;
  return clientTransformed;
};

export const signupFormData = (formData) => {
  const { userName, userSurname, email, password, repeatPassword } = formData;
  return {
    first_name: userName,
    last_name: userSurname,
    email,
    password,
    re_password: repeatPassword,
  };
};

export const resetPasswordFormData = (formData) => {
  const { uid, token, newPassword, repeatNewPassword } = formData;
  return {
    uid,
    token,
    new_password: newPassword,
    re_new_password: repeatNewPassword,
  };
};

export const userData = (user) => {
  const { id, email, first_name: userName, last_name: userSurname } = user || {};
  return { id, email, userName, userSurname };
};

export const userFormData = (formData) => {
  const { firstName, LastName } = formData;
  return {
    first_name: firstName,
    last_name: LastName,
  };
};

export const resetCurrentUserPasswordFormData = (formData) => {
  const { newPassword, approvePassword, currentPassword } = formData;
  return {
    current_password: currentPassword,
    new_password: newPassword,
    re_new_password: approvePassword,
  };
};

export const transform = {
  company,
  signupFormData,
  resetPasswordFormData,
  userData,
  userFormData,
  resetCurrentUserPasswordFormData,
};
