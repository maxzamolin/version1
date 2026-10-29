// Reveal.jsx
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Reveal({ children }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    // Создаем контекст для безопасной очистки в React StrictMode
    const ctx = gsap.context(() => {
      // matchMedia позволяет задать разные анимации для разных брейкпоинтов
      const mm = gsap.matchMedia();

      // Анимация для всех экранов
      mm.add("(min-width: 0px)", () => {
        // Находим все элементы внутри контейнера, которые нужно анимировать
        const elements = container.current.querySelectorAll('.reveal-item');

        // Начальное состояние: смещены вниз, прозрачны, размыты
        gsap.set(elements, { 
          y: 30, 
          opacity: 0, 
          filter: "blur(10px)" 
        });

        // Анимация появления
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1, // Каждый следующий элемент появляется с задержкой
          ease: "power2.out",
        });
      });

      // Возвращаем функцию очистки для matchMedia
      return () => mm.revert();
    }, container); // Привязываем контекст к контейнеру

    // Очистка при размонтировании компонента
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      {/* Оборачивайте контент в элементы с классом .reveal-item */}
      {children}
    </div>
  );
}