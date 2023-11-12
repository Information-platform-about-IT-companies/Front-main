export const PASSWORD_REGULAR =
  /^(?!.* )(?!^\d+$)[a-zA-Zа-яА-ЯёЁ0-9._~\-|:?#[\]\\@!%^"№$&'{}()*+,/;=]{8,30}$/gm;

export const NAME_REGULAR = /^(?!.*-.*-|.* .* |.*-.* )(?!.*- $)(?!- )[A-Za-zА-яЁё -]{2,30}$/gim;

export const SUPPORT_TITLE_REGULAR =
  /^(?!_~\|:?#[\]\\@!%^"№$&'{}()*+/;=)[a-zA-Zа-яА-ЯёЁ0-9 -.,]{2,100}$/gm;

export const SUPPORT_MESSAGE_REGULAR =
  /^(?!.*-.*-|.* .* |.*-.* )(?!.*- $)(?!- )[A-Za-zА-яЁё -]{2,30}$/gim;
