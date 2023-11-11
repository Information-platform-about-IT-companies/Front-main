export const PASSWORD_REGULAR =
  /^(?!.* )(?!^\d+$)[a-zA-Zа-яА-ЯёЁ0-9._~\-|:?#[\]\\@!%^"№$&'{}()*+,/;=]{8,30}$/gm;

export const NAME_REGULAR = /^(?!.*-.*-|.* .* |.*-.* )(?!.*- $)(?!- )[A-Za-zА-яЁё -]{2,30}$/gim;
