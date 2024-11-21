export const TypewriterEffect = (
  element: HTMLElement | null,
  text: string,
  typingSpeed: number = 100,
  callback?: () => void
): void => {
  if (!element) return;

  let index = 0;

  const type = (): void => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else if (callback) {
      callback();
    }
  };

  type();
};
