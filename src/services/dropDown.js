/* данная функция создает плавную анимацию выпадения блока с НЕИЗВЕСТНЫМ количеством элементов в блоке. В передаваемом блоке в CSS должны быть свойства overflow: hidden; и transition: height $animation; */

export default function dropDownBlock(block, open) {
  if (open) {
    // eslint-disable-next-line no-param-reassign
    block.current.style.height = `${block.current.scrollHeight}px`;
  } else {
    // eslint-disable-next-line no-param-reassign
    block.current.style.height = "0";
  }
}
