export const PASSWORD_REGULAR =
  /^(?!.*\s)(?!^\d+$)[a-zA-Zа-яА-ЯёЁ0-9._~\-|:?#[\]\\@!%^"№$&'{}()*+,/;=]{8,30}$/gm;

export const NAME_REGULAR =
  /^(?!.*-.*-|.*\s.*\s|.*-.*\s)(?!.*- $)(?!-\s)[a-zA-ZА-яЁё\s-]{2,30}$/gim;
