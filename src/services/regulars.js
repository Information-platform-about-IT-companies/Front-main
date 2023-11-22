export const PASSWORD_REGULAR =
  /^(?!.*\s)(?!^\d+$)[a-zA-Zа-яА-ЯёЁ0-9._~\-|:?#[\]\\@!%^"№$&'{}()*+,/;=]{8,30}$/gm;

export const NAME_REGULAR =
  /^(?!.*-.*-|.*\s.*\s|.*-.*\s)(?!.*- $)(?!-\s)[a-zA-ZА-яЁё\s-]{2,30}$/gim;

export const SIGN_IN_CONFIRM_REGULAR =
  /^#\/signin_confirm\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+-[a-zA-Z0-9]+$/;
