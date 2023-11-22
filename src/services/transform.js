export const company = (client) => {
  const clientTransformed = { ...client, isFavorited: client.is_favorited };
  delete clientTransformed.is_favorited;
  return clientTransformed;
};

export const signupFormData = (formData) => {
  const transformedData = new FormData();

  transformedData.append("first_name", formData.get("userName") || "");
  transformedData.append("last_name", formData.get("userSurname") || "");
  transformedData.append("email", formData.get("email") || "");
  transformedData.append("password", formData.get("password") || "");
  transformedData.append("re_password", formData.get("repeatPassword") || "");

  return transformedData;
};

export const resetPasswordFormData = (formData) => {
  const transformedData = new FormData();

  transformedData.append("uid", formData.get("uid") || "");
  transformedData.append("token", formData.get("token") || "");
  transformedData.append("new_password", formData.get("newPassword") || "");
  transformedData.append("re_new_password", formData.get("repeatNewPassword") || "");

  return transformedData;
};

export const userData = (user) => {
  const { id, email, first_name: userName, last_name: userSurname } = user || {};
  return { id, email, userName, userSurname };
};

export const userFormData = (formData) => {
  const transformedData = new FormData();

  transformedData.append("first_name", formData.get("userName") || "");
  transformedData.append("last_name", formData.get("userSurname") || "");

  return transformedData;
};

export const resetCurrentUserPasswordFormData = (formData) => {
  const transformedData = new FormData();

  transformedData.append("current_password", formData.get("currentPassword") || "");
  transformedData.append("new_password", formData.get("newPassword") || "");
  transformedData.append("re_new_password", formData.get("repeatNewPassword") || "");

  return transformedData;
};

export const transform = {
  company,
  signupFormData,
  resetPasswordFormData,
  userData,
  userFormData,
  resetCurrentUserPasswordFormData,
};
