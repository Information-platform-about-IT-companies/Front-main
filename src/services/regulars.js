export const PASSWORD_REGULAR =
  /^(?!.*\s)(?!^\d+$)[a-zA-Zа-яА-ЯёЁ0-9._~\-|:?#[\]\\@!%^"№$&'{}()*+,/;=]{8,30}$/gm;

export const NAME_REGULAR =
  /^(?!.*-.*-|.*\s.*\s|.*-.*\s)(?!.*- $)(?!-\s)[a-zA-ZА-яЁё\s-]{2,30}$/gim;

export const SIGN_UP_CONFIRM_REGULAR =
  /^#\/signup_confirm\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+-[a-zA-Z0-9]+$/;

export const RESET_PASSWORD_REGULAR =
  /^#\/reset_password_confirm\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+-[a-zA-Z0-9]+$/;
