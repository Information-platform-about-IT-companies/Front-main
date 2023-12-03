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
  const { uid, token, password, confirmPassword } = formData;
  return {
    uid,
    token,
    new_password: password,
    re_new_password: confirmPassword,
  };
};

export const userData = (user) => {
  const { id, email, first_name: firstName, last_name: lastName } = user || {};
  return { id, email, firstName, lastName };
};

export const userFormData = (formData) => {
  const { firstName, lastName } = formData;
  return {
    first_name: firstName,
    last_name: lastName,
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
