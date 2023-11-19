// декоратор отложения выполнения функций
export default function debounce(func, delay) {
  let timeout;
  const debounced = function (...args) {
    const context = this;

    const execute = () => {
      timeout = null;
      func.apply(context, args);
    };

    const shouldExecute = !timeout;
    clearTimeout(timeout);

    if (shouldExecute) {
      timeout = setTimeout(execute, delay);
    }

    debounced.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    };
  };

  return debounced;
}
