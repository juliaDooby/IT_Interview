---------------------------------------------------------------------------------------------
📌 [React Таски]:
---------------------
⋙ ❍ Рендеринг компонентов:
---
⌛ Задача: Создать компонент, который рендерит простой текстовый элемент.
Ожидаемый результат: Простой компонент, который выводит текст на экран.
🎯 Для создания простого React-компонента, который отображает текстовый элемент, выполните следующие шаги:
1. Создайте новый компонент:
   Создайте файл `TextComponent.js` и добавьте в него следующий код:
   ```jsx
   import React from 'react';

   function TextComponent() {
     return <p>Привет, мир!</p>;
   }

   export default TextComponent;
   ```
   Этот функциональный компонент возвращает элемент `<p>` с текстом "Привет, мир!".
2. Используйте компонент в вашем приложении:
   В основном файле вашего приложения, например, `App.js`, импортируйте и используйте созданный компонент:
   ```jsx
   import React from 'react';
   import TextComponent from './TextComponent';

   function App() {
     return (
       <div>
         <h1>Моё React-приложение</h1>
         <TextComponent />
       </div>
     );
   }

   export default App;
   ```
   Теперь компонент `TextComponent` будет отображаться внутри вашего основного приложения.
Примечание: Убедитесь, что ваше окружение настроено для работы с React. Если вы только начинаете, рекомендуется ознакомиться с официальной документацией по [созданию и использованию компонентов в React](https://ru.react.js.org/docs/components-and-props.html).
---------------------
⋙ ❍ Управление состоянием компонентов:
---
⌛ Задача: Создать компонент, который изменяет свое состояние при нажатии на кнопку.
Ожидаемый результат: Компонент с кнопкой, при нажатии на которую меняется его состояние.
🎯 Для создания React-компонента, который изменяет своё состояние при нажатии на кнопку, выполните следующие шаги:
1. Импортируйте необходимые модули:
   ```jsx
   import React, { useState } from 'react';
   ```
2. Создайте функциональный компонент с состоянием:
   ```jsx
   function ToggleButton() {
     // Инициализация состояния с помощью хука useState
     const [isToggled, setIsToggled] = useState(false);

     // Обработчик клика по кнопке
     const handleClick = () => {
       setIsToggled((prevState) => !prevState);
     };

     return (
       <div>
         <p>Состояние: {isToggled ? 'Включено' : 'Выключено'}</p>
         <button onClick={handleClick}>
           {isToggled ? 'Выключить' : 'Включить'}
         </button>
       </div>
     );
   }

   export default ToggleButton;
   ```
Объяснение кода:
- useState: Хук `useState` используется для создания состояния `isToggled`, которое изначально установлено в `false`.
- handleClick: Функция `handleClick` инвертирует текущее значение `isToggled` при каждом нажатии на кнопку.
- JSX: Внутри JSX отображается параграф с текущим состоянием и кнопка, текст которой меняется в зависимости от значения `isToggled`.
Примечание: Убедитесь, что ваше окружение настроено для работы с React. Если вы только начинаете, рекомендуется ознакомиться с официальной документацией по [использованию хука состояния](https://ru.legacy.reactjs.org/docs/hooks-state.html).
---------------------
⋙ ❍ Передача пропсов в компоненты:
---
⌛ Задача: Создать компонент, который принимает пропсы и выводит их значение.
Ожидаемый результат: Компонент, который принимает пропсы и отображает их значение на экране.
🎯 Для создания React-компонента, который принимает пропсы и отображает их значения, выполните следующие шаги:
1. Создайте компонент, принимающий пропсы:
   ```jsx
   import React from 'react';

   function DisplayProps(props) {
     return (
       <div>
         <p>Имя: {props.name}</p>
         <p>Возраст: {props.age}</p>
       </div>
     );
   }

   export default DisplayProps;
   ```
   В этом примере компонент `DisplayProps` принимает два пропса: `name` и `age`, и отображает их значения внутри параграфов.
2. Используйте компонент с передачей пропсов:
   ```jsx
   import React from 'react';
   import DisplayProps from './DisplayProps';

   function App() {
     return (
       <div>
         <h1>Информация о пользователе</h1>
         <DisplayProps name="Алиса" age={25} />
       </div>
     );
   }

   export default App;
   ```
   Здесь компонент `App` использует `DisplayProps`, передавая ему значения для пропсов `name` и `age`.
Примечание: Пропсы (props) — это объект, содержащий все атрибуты, переданные компоненту. В функциональных компонентах пропсы передаются как аргумент функции. В классовых компонентах доступ к пропсам осуществляется через `this.props`.
Для более подробного изучения передачи пропсов в компоненты React, рекомендуется ознакомиться с [официальной документацией](https://ru.legacy.reactjs.org/docs/components-and-props.html).
---------------------
⋙ ❍ Использование жизненного цикла компонентов:
---
⌛ Задача: Создать компонент, который выполняет определенные действия при монтировании и размонтировании.
Ожидаемый результат: Компонент, который выполняет определенные действия при монтировании и размонтировании, например, выводит сообщение в консоль.
🎯 Для создания React-компонента, который выполняет определённые действия при монтировании и размонтировании, можно использовать хук `useEffect`. Этот хук позволяет выполнять побочные эффекты в функциональных компонентах, аналогично методам жизненного цикла в классовых компонентах.
Пример использования `useEffect`:
```jsx
import React, { useEffect } from 'react';

function LifecycleComponent() {
  useEffect(() => {
    // Действия при монтировании компонента
    console.log('Компонент смонтирован');

    // Функция очистки, выполняется при размонтировании компонента
    return () => {
      console.log('Компонент размонтирован');
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании и размонтировании

  return (
    <div>
      <h1>Пример использования useEffect</h1>
    </div>
  );
}

export default LifecycleComponent;
```
Объяснение кода:
- `useEffect`: Хук, который выполняет побочные эффекты в функциональных компонентах.
- Функция очистки: Функция, возвращаемая из `useEffect`, выполняется при размонтировании компонента, что позволяет очищать ресурсы или отменять подписки.
- Пустой массив зависимостей `[]`: Указывает, что эффект должен выполниться только один раз при монтировании компонента и один раз при его размонтировании.
Для более подробного изучения использования хука `useEffect` и его применения в жизненном цикле компонентов, рекомендуется ознакомиться с [официальной документацией React](https://ru.legacy.reactjs.org/docs/hooks-effect.html).
Также полезно посмотреть следующее видео, которое подробно объясняет работу с хуком `useEffect` и его применение в React:
---------------------
⋙ ❍ Работа с формами:
---
⌛ Задача: Создать компонент формы, который обрабатывает введенные пользователем данные.
Ожидаемый результат: Компонент формы, который обрабатывает введенные данные и отправляет их на сервер или выполняет другие действия.
🎯 Для создания React-компонента формы, который обрабатывает введённые пользователем данные и отправляет их на сервер, выполните следующие шаги:
1. Создайте компонент формы:
   ```jsx
   import React, { useState } from 'react';

   function UserForm() {
     // Инициализация состояния для каждого поля формы
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');

     // Обработчик изменения значений полей
     const handleChange = (e) => {
       const { name, value } = e.target;
       if (name === 'name') setName(value);
       if (name === 'email') setEmail(value);
       if (name === 'message') setMessage(value);
     };

     // Обработчик отправки формы
     const handleSubmit = async (e) => {
       e.preventDefault();

       // Создание объекта с данными формы
       const formData = { name, email, message };

       try {
         // Отправка данных на сервер
         const response = await fetch('https://example.com/api/submit', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         });

         if (response.ok) {
           // Обработка успешного ответа
           console.log('Данные успешно отправлены');
         } else {
           // Обработка ошибок
           console.error('Ошибка при отправке данных');
         }
       } catch (error) {
         // Обработка ошибок сети
         console.error('Ошибка сети:', error);
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Имя:</label>
           <input
             type="text"
             id="name"
             name="name"
             value={name}
             onChange={handleChange}
             required
           />
         </div>
         <div>
           <label htmlFor="email">Электронная почта:</label>
           <input
             type="email"
             id="email"
             name="email"
             value={email}
             onChange={handleChange}
             required
           />
         </div>
         <div>
           <label htmlFor="message">Сообщение:</label>
           <textarea
             id="message"
             name="message"
             value={message}
             onChange={handleChange}
             required
           />
         </div>
         <button type="submit">Отправить</button>
       </form>
     );
   }

   export default UserForm;
   ```
Объяснение кода:
- Состояние: Используются хуки `useState` для хранения значений полей формы: имени, электронной почты и сообщения.
- Обработчик изменений: Функция `handleChange` обновляет соответствующее состояние при изменении значения в поле формы.
- Обработчик отправки: Функция `handleSubmit` предотвращает стандартное поведение формы, собирает данные и отправляет их на сервер с помощью `fetch`.
- Форма: Компонент возвращает JSX-разметку формы с полями для ввода имени, электронной почты и сообщения, а также кнопкой отправки.
Примечание: Убедитесь, что URL в `fetch` соответствует вашему серверному API.
Для более подробного изучения работы с формами в React, рекомендуется ознакомиться с [официальной документацией](https://ru.legacy.reactjs.org/docs/forms.html).
Также полезно посмотреть следующее видео, которое подробно объясняет создание простого инпута с React и отправку введённых данных:
---------------------
⋙ ❍ Работа с API:
---
⌛ Задача: Создать компонент, который получает данные с сервера через API и отображает их на экране.
Ожидаемый результат: Компонент, который загружает данные с сервера и отображает их на странице.
🎯 Для создания React-компонента, который получает данные с сервера через API и отображает их на экране, можно использовать хук `useEffect` для выполнения асинхронных запросов и хук `useState` для хранения полученных данных.
Пример использования `fetch` для получения данных:
```jsx
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  // Состояние для хранения данных и состояния загрузки
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Асинхронная функция для получения данных
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Сеть ответа не ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании компонента

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    <div>
      <h1>Полученные данные:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;
```
Объяснение кода:
- `useState`: Хуки для хранения состояния данных (`data`), состояния загрузки (`loading`) и ошибок (`error`).
- `useEffect`: Хук, выполняющий асинхронную функцию `fetchData` при монтировании компонента.
- `fetch`: Встроенная функция для выполнения HTTP-запросов. В данном примере используется для получения данных с API.
- Обработка состояний: Компонент отображает индикатор загрузки, сообщение об ошибке или полученные данные в зависимости от состояния.
Примечание: Убедитесь, что URL в `fetch` соответствует вашему серверному API.
Для более подробного изучения работы с API в React, рекомендуется ознакомиться с [официальной документацией](https://ru.legacy.reactjs.org/docs/faq-ajax.html).
---------------------
⋙ ❍ Использование сторонних библиотек и компонентов:
---
⌛ Задача: Использовать стороннюю библиотеку или компонент для выполнения определенной функциональности.
Ожидаемый результат: Использование сторонней библиотеки или компонента для добавления дополнительной функциональности в приложение.
🎯 Для добавления дополнительной функциональности в ваше React-приложение можно использовать сторонние библиотеки и компоненты. Это позволяет ускорить разработку и обеспечить единообразие пользовательского интерфейса. Рассмотрим, как интегрировать стороннюю библиотеку компонентов, такую как Material-UI, в ваше приложение.
1. Установка библиотеки
Сначала установите библиотеку Material-UI с помощью npm или yarn:
```bash
npm install @mui/material @emotion/react @emotion/styled
```
2. Импорт и использование компонентов
После установки вы можете импортировать и использовать компоненты Material-UI в вашем приложении:
```jsx
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <h1>Пример использования Material-UI</h1>
      <Button variant="contained" color="primary">
        Нажми меня
      </Button>
    </div>
  );
}

export default App;
```
В этом примере мы импортируем компонент `Button` из Material-UI и используем его в нашем компоненте `App`.
3. Настройка темы
Material-UI позволяет настраивать тему вашего приложения. Вы можете создать собственную тему и обернуть ваше приложение в компонент `ThemeProvider`:
```jsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Пример использования Material-UI с темой</h1>
        <Button variant="contained" color="primary">
          Нажми меня
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```
В этом примере мы создаем тему с основным цветом `#1976d2` и применяем ее к нашему приложению с помощью `ThemeProvider`.
Ресурсы для дальнейшего изучения:
- [Официальная документация Material-UI](https://mui.com/)
- [Интеграция со сторонними библиотеками в React](https://ru.legacy.reactjs.org/docs/integrating-with-other-libraries.html)
Используя сторонние библиотеки, вы можете значительно расширить функциональность вашего приложения и ускорить процесс разработки.
---------------------
⋙ ❍ Написать hook для загрузки данных:
---
⌛ Напиши React hook с названием useFetch, который получает на вход URL для загрузки и возвращает полученные данные. Для загрузки данных можно использовать любое API, даже собственно придуманное. Для простоты считаем, что по указанному адресу будет JSON, загружаем методом GET, никаких других методов, заголовков и типов данных не требуется. Импорты можно не писать.
Дополнительно даю такой "шаблон" решения задачи:
function useFetch(url) {
  // TODO
}

// usage
function Component({ url }) {
  ........ = useFetch(url);

  return <>
	...
  </>
}
Я намеренно не даю информации как именно надо вернуть данные, предлагаю кандидату самостоятельно спроектировать API этого hook'а.
🎯 Задачка "многослойная". Можно начать с простого решения:
function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData));
	}, []);

	return data;
}
Это необходимый минимум с которого надо начинать. Иногда даже это не удается получить. Соискатель пытается вернуть из hook Promise и "зарендерить" его в надежде на чудо, пытается обмазать результат хука async/await и т.д. Иногда вся логика загрузки оказывается в компоненте - тут я прошу все это инкапсулировать внутри hook.
Дальше нужно осознать, что в эффекте не хватает зависимости. Если url изменится, то запроса данных не произойдет.
function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		setData(null); // не забыть сбросить данные перед загрузкой
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData));
	}, [url]); // <-- не забыть зависимость

	return data;
}
На этом этапе можно остановиться, и попросить предложить варианты, как можно улучшить этот hook. Хочется что бы кандидат как минимум предложил обработать ошибку и вернуть статус загрузки
function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// не забыть все сбросить
		setIsLoading(true);
		setData(null);
		setError(null);
		fetch(url)
			.then((res) => res.json())
			.then((respData) => setData(respData))
			.catch((e) => setError(e)) // не забыть поймать ошибку
			.finally(() => setIsLoading(false)); // не забыть сбросить статус загрузки
	}, [url]);

	return [data, isLoading, error];
}
Следующий уровень сложности - понять, что в этой реализации возможен race condition. Если мы последовательно запросим два URL, и так получится, что первый будет отвечать долго, а второй быстро, то мы получим сперва результат от второго адреса, а затем от первого. В итоге пользователь увидит устаревший результат. Далеко не все добираются до этого самостоятельно. Можно подсказать, предложить подумать, как будут развиваться события, если запросы будут отвечать за разное время, один быстрее, другой медленнее.
Решения могут быть через AbortController (в случае fetch или в случае использования axios), но достаточно реализовать самый простой способ - с помощью локальной переменной

function useFetch(url) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      // флаг отмены
      let cancelled = false;

      setIsLoading(true);
      setData(null);
      setError(null);
      fetch(url)
         .then((res) => res.json())
         .then((respData) => {
            if (!cancelled) setData(respData);
         })
         .catch((e) => {
            if (!cancelled) setError(e);
         })
         .finally(() => {
            if (!cancelled) setIsLoading(false);
         });

      return () => {
         // выставим признак того, что запрос отменен
         cancelled = true;
      };
   }, [url]);

   return [data, isLoading, error];
}

Вот готовый React hook useFetch, который можно использовать для загрузки данных по указанному URL. Он обрабатывает загрузку, ошибки и предотвращает race condition с помощью локальной переменной cancelled.
Вот такой вариант я считаю "идеальным" (обсудим в комментариях, что можно еще улучшить?).
Задачка позволяет проверить, как кандидат понимает устройство рендеринга React, как устроено хранение состояния, когда происходят перерисовки, как заставить компонент перерисоваться в ответ на асинхронное событие, как устроена "очистка (cleanup) эффекта", как работают сайд-эффекты.
---------------------------------------------------------------------------------------------
📌 [Тематическая подборка]:
---------------------
⋙ ❍ Замыкания:
---
⌛ Задача 1: Счетчик
Напишите функцию `createCounter`, которая создает счетчик. Каждый вызов метода `increment` увеличивает значение счетчика на 1, а метод `getValue` возвращает текущее значение счетчика.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
```
Объяснение:
- Переменная `count` находится в замыкании функции `createCounter`.
- Объект с методами `increment` и `getValue` имеет доступ к переменной `count`, даже после завершения выполнения `createCounter`.
---
⌛ Задача 2: Генератор функций
Напишите функцию `createMultiplier`, которая принимает число `x` и возвращает функцию, умножающую любое переданное ей значение на `x`.
🎯 Решение:
```javascript
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // 10

const multiplyBy10 = createMultiplier(10);
console.log(multiplyBy10(3)); // 30
```
Объяснение:
- Переменная `x` из внешней функции доступна во внутренней функции через замыкание.
- Каждый вызов `createMultiplier` создает новое замыкание с собственной копией переменной `x`.
---
⌛ Задача 3: Задержка вывода
Напишите функцию, которая с задержкой выведет числа от 1 до 5, используя замыкания.
🎯 Решение:
```javascript
function delayedLog() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

delayedLog();
```
Объяснение:
- В данном решении используется `let` для создания блоковой области видимости переменной `i`.
- Если использовать `var`, нужно обернуть `setTimeout` в функцию, чтобы замыкание захватывало правильное значение `i`:
  ```javascript
  function delayedLog() {
    for (var i = 1; i <= 5; i++) {
      (function (num) {
        setTimeout(function () {
          console.log(num);
        }, num * 1000);
      })(i);
    }
  }

  delayedLog();
  ```
---
⌛ Задача 4: Частичное применение
Напишите функцию `partial`, которая принимает функцию `fn` и фиксирует первые несколько её аргументов.
🎯 Решение:
```javascript
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 5);
console.log(add5(2, 3)); // 10
```
Объяснение:
- Замыкание позволяет сохранить фиксированные аргументы `fixedArgs`.
- При вызове возвращенной функции они комбинируются с оставшимися аргументами.
---
⌛ Задача 5: Каррирование
Напишите функцию `curry`, которая преобразует функцию с множеством аргументов в последовательность вложенных функций.
🎯 Решение:
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
```
Объяснение:
- Замыкание сохраняет текущие аргументы, пока не будет передано достаточное их количество.
- Как только аргументов становится достаточно, вызывается оригинальная функция.
---
⌛ Задача 6: Запоминание результатов (мемоизация)
Напишите функцию `memoize`, которая оптимизирует функцию путем запоминания уже вычисленных результатов.
🎯 Решение:
```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * slowFactorial(n - 1);
}

const fastFactorial = memoize(slowFactorial);
console.log(fastFactorial(5)); // 120
console.log(fastFactorial(5)); // 120 (из кеша)
```
Объяснение:
- Замыкание используется для хранения объекта `cache`.
- При повторном вызове с теми же аргументами результат берется из кеша.
---
⌛ Задача 7: Управление доступом (Приватные переменные)
Напишите функцию, которая позволяет работать с приватными переменными объекта (например, инкапсуляция).
🎯 Решение:
```javascript
function createUser(name) {
  let _name = name;

  return {
    getName: function () {
      return _name;
    },
    setName: function (newName) {
      if (newName.length > 0) {
        _name = newName;
      }
    }
  };
}

const user = createUser('Alice');
console.log(user.getName()); // Alice
user.setName('Bob');
console.log(user.getName()); // Bob
```
Объяснение:
- `_name` — приватная переменная, доступная только через методы `getName` и `setName`.
---
⌛ Задача 8: Лимит вызовов функции
Напишите функцию `limit`, которая позволяет вызвать переданную функцию только указанное количество раз.
🎯 Решение:
```javascript
function limit(fn, times) {
  let count = 0;

  return function (...args) {
    if (count < times) {
      count++;
      return fn(...args);
    } else {
      console.log('Function call limit exceeded');
    }
  };
}

function greet(name) {
  return `Hello, ${name}!`;
}

const limitedGreet = limit(greet, 3);
console.log(limitedGreet('Alice')); // Hello, Alice!
console.log(limitedGreet('Bob'));   // Hello, Bob!
console.log(limitedGreet('Charlie')); // Hello, Charlie!
console.log(limitedGreet('Dave'));    // Function call limit exceeded
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая отслеживает количество вызовов функции.
---
⌛ Задача 9: Однократное выполнение функции
Напишите функцию `once`, которая гарантирует, что переданная функция будет выполнена только один раз.
🎯 Решение:
```javascript
function once(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

const logOnce = once(logMessage);
logOnce('This will be logged'); // This will be logged
logOnce('This will not be logged'); // (ничего не выведет)
```
Объяснение:
- Замыкание сохраняет флаг `called`, который предотвращает повторный вызов функции.
---
⌛ Задача 10: Таймер с паузой
Напишите функцию `createTimer`, которая позволяет запускать таймер, останавливать его и получать текущее значение.
🎯 Решение:
```javascript
function createTimer() {
  let startTime = 0;
  let elapsedTime = 0;
  let timer;

  return {
    start: function () {
      if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
          elapsedTime = Date.now() - startTime;
        }, 100);
      }
    },
    stop: function () {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    },
    getTime: function () {
      return (elapsedTime / 1000).toFixed(2) + 's';
    }
  };
}

const timer = createTimer();
timer.start();
setTimeout(() => {
  timer.stop();
  console.log(timer.getTime()); // ~3.00s
}, 3000);
```
Объяснение:
- Замыкание сохраняет переменные `startTime`, `elapsedTime` и `timer`, позволяя манипулировать состоянием таймера.
---
⌛ Задача 11: Генератор уникальных идентификаторов
Напишите функцию `createIdGenerator`, которая создает генератор уникальных числовых идентификаторов.
🎯 Решение:
```javascript
function createIdGenerator(start = 0) {
  let id = start;

  return function () {
    return id++;
  };
}

const generateId = createIdGenerator(100);
console.log(generateId()); // 100
console.log(generateId()); // 101
console.log(generateId()); // 102
```
Объяснение:
- Замыкание сохраняет переменную `id`, которая увеличивается при каждом вызове.
---
⌛ Задача 12: Очередь задач
Напишите функцию `taskQueue`, которая принимает задачу (функцию) и выполняет её только после завершения предыдущей.
🎯 Решение:
```javascript
function taskQueue() {
  let isRunning = false;
  const queue = [];

  return function (task) {
    queue.push(task);
    if (!isRunning) {
      isRunning = true;
      (function execute() {
        if (queue.length > 0) {
          const currentTask = queue.shift();
          currentTask(() => {
            execute();
          });
        } else {
          isRunning = false;
        }
      })();
    }
  };
}

const queue = taskQueue();

queue(done => {
  console.log('Task 1');
  setTimeout(done, 1000);
});

queue(done => {
  console.log('Task 2');
  setTimeout(done, 500);
});
```
Объяснение:
- Замыкание сохраняет флаг `isRunning` и массив `queue`, чтобы гарантировать выполнение задач в строгом порядке.
---
⌛ Задача 13: Кэширование результатов
Напишите функцию `cache`, которая сохраняет результаты выполнения переданной функции для оптимизации.
🎯 Решение:
```javascript
function cache(fn) {
  const results = new Map();

  return function (arg) {
    if (results.has(arg)) {
      return results.get(arg);
    }
    const result = fn(arg);
    results.set(arg, result);
    return result;
  };
}

function square(n) {
  return n * n;
}

const cachedSquare = cache(square);
console.log(cachedSquare(4)); // 16
console.log(cachedSquare(4)); // 16 (из кеша)
```
Объяснение:
- Замыкание сохраняет объект `results` для хранения вычисленных значений.
---
⌛ Задача 14: Таймер обратного отсчета
Создайте функцию `countdown`, которая принимает начальное значение и вызывает callback при каждом шаге.
🎯 Решение:
```javascript
function countdown(start, callback) {
  let current = start;

  return function tick() {
    if (current > 0) {
      callback(current);
      current--;
    } else {
      callback('Done!');
    }
  };
}

const tick = countdown(5, console.log);
tick(); // 5
tick(); // 4
tick(); // 3
tick(); // 2
tick(); // 1
tick(); // Done!
```
Объяснение:
- Замыкание сохраняет текущее значение `current`, уменьшая его при каждом вызове.
---
⌛ Задача 15: Фабрика событий
Напишите функцию `createEventEmitter`, которая позволяет подписываться на события и вызывать их.
🎯 Решение:
```javascript
function createEventEmitter() {
  const events = {};

  return {
    on: function (event, listener) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(listener);
    },
    emit: function (event, ...args) {
      if (events[event]) {
        events[event].forEach(listener => listener(...args));
      }
    }
  };
}

const emitter = createEventEmitter();
emitter.on('sayHello', name => console.log(`Hello, ${name}!`));
emitter.emit('sayHello', 'Alice'); // Hello, Alice!
```
Объяснение:
- Замыкание сохраняет объект `events`, который хранит подписки на события.
---
⌛ Задача 16: Трекер выполнения функций
Напишите функцию, которая отслеживает, сколько раз была вызвана переданная функция.
🎯 Решение:
```javascript
function trackCalls(fn) {
  let count = 0;

  return function (...args) {
    count++;
    console.log(`Called ${count} times`);
    return fn(...args);
  };
}

function add(a, b) {
  return a + b;
}

const trackedAdd = trackCalls(add);
console.log(trackedAdd(2, 3)); // Called 1 times, 5
console.log(trackedAdd(4, 5)); // Called 2 times, 9
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая увеличивается при каждом вызове.
---
⌛ Задача 17: Генератор паролей
Создайте функцию `passwordGenerator`, которая возвращает уникальные пароли.
🎯 Решение:
```javascript
function passwordGenerator() {
  let index = 0;

  return function () {
    return `pass-${++index}-${Date.now()}`;
  };
}

const generatePassword = passwordGenerator();
console.log(generatePassword()); // pass-1-<timestamp>
console.log(generatePassword()); // pass-2-<timestamp>
```
Объяснение:
- Замыкание сохраняет `index`, чтобы каждый пароль был уникальным.
---------------------
⋙ ❍ Контекст вызова:
---
⌛ 1. Определение контекста в глобальной функции
```javascript
function showThis() {
  console.log(this);
}
showThis();
```
🎯 Решение:
В строгом режиме (`"use strict"`) `this` в глобальной функции равно `undefined`. Без строгого режима `this` указывает на глобальный объект (в браузере это `window`).
Объяснение:
В глобальном контексте, если не указано явно, `this` зависит от режима исполнения (строгий или нет).
---
⌛ 2. Контекст в методе объекта
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    console.log(this.name);
  }
};
obj.showThis();
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
`this` внутри метода объекта указывает на сам объект `obj`.
---
⌛ 3. Потеря контекста при передаче метода
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    console.log(this.name);
  }
};
const detached = obj.showThis;
detached();
```
🎯 Решение:
Выведет: `undefined`.
Объяснение:
Когда метод передается в переменную, теряется привязка к объекту, и `this` становится `undefined` (в строгом режиме) или `window` (без строгого режима).
---
⌛ 4. Решение потери контекста через `.bind`
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    console.log(this.name);
  }
};
const bound = obj.showThis.bind(obj);
bound();
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
Метод `.bind(obj)` создает новую функцию, где `this` всегда будет ссылаться на переданный объект.
---
⌛ 5. Использование стрелочной функции
```javascript
const obj = {
  name: "Frontend",
  showThis: () => {
    console.log(this.name);
  }
};
obj.showThis();
```
🎯 Решение:
Выведет: `undefined`.
Объяснение:
Стрелочная функция не имеет своего `this`, оно берется из внешнего контекста. Здесь это глобальный объект.
---
⌛ 6. Передача стрелочной функции как метода
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    const inner = () => console.log(this.name);
    inner();
  }
};
obj.showThis();
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
В стрелочной функции `this` наследуется от контекста, в котором она была создана. Здесь это `obj`.
---
⌛ 7. Использование `call` для явного указания контекста
```javascript
function greet() {
  console.log(this.name);
}
const obj = { name: "Frontend" };
greet.call(obj);
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
Метод `.call()` вызывает функцию с явным указанием контекста.
---
⌛ 8. Разница между `.call` и `.apply`
```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const obj = { name: "Frontend" };
greet.call(obj, "Hello");
greet.apply(obj, ["Hello"]);
```
🎯 Решение:
Оба вызова выведут: `"Hello, Frontend"`.
Объяснение:
Разница в способе передачи аргументов: `.call` принимает их по одному, а `.apply` — в массиве.
---
⌛ 9. Использование `bind` с аргументами
```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const obj = { name: "Frontend" };
const bound = greet.bind(obj, "Hello");
bound();
```
🎯 Решение:
Выведет: `"Hello, Frontend"`.
Объяснение:
`bind` создает новую функцию с привязанным контекстом и фиксированными аргументами.
---
⌛ 10. Контекст в конструкторе
```javascript
function Person(name) {
  this.name = name;
}
const person = new Person("Frontend");
console.log(person.name);
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
В функциях-конструкторах `this` указывает на создаваемый объект.
---
⌛ 11. Потеря контекста в классе
```javascript
class Counter {
  count = 0;
  increment() {
    console.log(this.count++);
  }
}
const counter = new Counter();
const detached = counter.increment;
detached();
```
🎯 Решение:
Ошибка: `Cannot read properties of undefined`.
Объяснение:
При передаче метода `increment` теряется связь с объектом.
---
⌛ 12. Исправление через `bind` в классе
```javascript
class Counter {
  count = 0;
  increment = this.increment.bind(this);
  increment() {
    console.log(this.count++);
  }
}
const counter = new Counter();
counter.increment();
```
🎯 Решение:
Выведет: `0`.
Объяснение:
Использование `bind` привязывает метод к текущему объекту.
---
⌛ 13. Контекст в обработчиках событий
```javascript
const button = document.createElement("button");
button.textContent = "Click me";
button.onclick = function () {
  console.log(this);
};
document.body.appendChild(button);
```
🎯 Решение:
Выведет: `<button>`.
Объяснение:
В обработчике событий `this` указывает на элемент, на котором произошло событие.
---
⌛ 14. Стрелочные функции в обработчиках событий
```javascript
const button = document.createElement("button");
button.textContent = "Click me";
button.onclick = () => {
  console.log(this);
};
document.body.appendChild(button);
```
🎯 Решение:
Выведет: `undefined`.
Объяснение:
Стрелочная функция берет `this` из внешнего контекста. В данном случае это глобальный объект.
---
⌛ 15. Использование `this` в `setTimeout`
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
obj.showThis();
```
🎯 Решение:
Выведет: `undefined`.
Объяснение:
Внутри функции `setTimeout`, `this` указывает на глобальный объект.
---
⌛ 16. Исправление через стрелочную функцию в `setTimeout`
```javascript
const obj = {
  name: "Frontend",
  showThis() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
obj.showThis();
```
🎯 Решение:
Выведет: `"Frontend"`.
Объяснение:
Стрелочная функция наследует `this` от внешнего контекста.
---
⌛ 17. Контекст в цепочках вызовов
```javascript
const obj = {
  count: 0,
  increment() {
    this.count++;
    return this;
  },
  showCount() {
    console.log(this.count);
    return this;
  }
};
obj.increment().increment().showCount();
```
🎯 Решение:
Выведет: `2`.
Объяснение:
Возврат `this` позволяет вызывать методы объекта цепочкой.
---------------------
⋙ ❍ Работа с this:
---
1. Простая функция
⌛ Задача: Что выведет этот код?
```javascript
function showThis() {
  console.log(this);
}
showThis();
```
🎯 Решение:
```javascript
undefined // если strict mode включен
window // если strict mode выключен
```
Объяснение:
В строгом режиме (`strict mode`) значение `this` в обычной функции будет `undefined`. Без строгого режима `this` ссылается на глобальный объект (`window` в браузере).
---
2. Метод объекта
⌛ Задача: Что выведет код?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    console.log(this.name);
  }
};
obj.showThis();
```
🎯 Решение:
```javascript
"Frontend"
```
Объяснение:
При вызове метода объекта значение `this` ссылается на сам объект, в данном случае `obj`.
---
3. Метод объекта с потерей контекста
⌛ Задача: Исправьте код, чтобы он правильно вывел `"Frontend"`.
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    console.log(this.name);
  }
};
const fn = obj.showThis;
fn(); // Потеря контекста
```
🎯 Решение: Используйте `bind`:
```javascript
const fn = obj.showThis.bind(obj);
fn(); // "Frontend"
```
Объяснение: При присвоении метода переменной теряется контекст. Метод `bind` привязывает `this` к `obj`.
---
4. Стрелочная функция внутри метода
⌛ Задача: Что выведет этот код?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    const arrowFunc = () => console.log(this.name);
    arrowFunc();
  }
};
obj.showThis();
```
🎯 Решение:
```javascript
"Frontend"
```
Объяснение: Стрелочная функция не имеет собственного `this` и использует значение `this` внешнего контекста.
---
5. Стрелочная функция вне объекта
⌛ Задача: Что выведет этот код?
```javascript
const arrowFunc = () => console.log(this);
arrowFunc();
```
🎯 Решение:
```javascript
undefined // в strict mode
window // в не strict mode
```
Объяснение: У стрелочной функции нет собственного `this`, она берёт его из внешнего контекста. В данном случае внешним контекстом является глобальная область видимости.
---
6. this в конструкторе
⌛ Задача: Что выведет этот код?
```javascript
function User(name) {
  this.name = name;
}
const user = new User("Frontend");
console.log(user.name);
```
🎯 Решение:
```javascript
"Frontend"
```
Объяснение: При вызове функции с `new` создаётся новый объект, на который ссылается `this`.
---
7. Потеря контекста в обработчике событий
⌛ Задача: Как сделать так, чтобы код вывел `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    document.addEventListener("click", function() {
      console.log(this.name);
    });
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
document.addEventListener("click", () => {
  console.log(this.name);
});
```
Или `bind`:
```javascript
document.addEventListener("click", function() {
  console.log(this.name);
}.bind(obj));
```
---
8. Передача this через call
⌛ Задача: Что выведет код?
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Frontend" };
greet.call(user);
```
🎯 Решение:
```javascript
"Hello, Frontend"
```
Объяснение: Метод `call` позволяет вручную задать значение `this`.
---
9. this внутри setTimeout
⌛ Задача: Как исправить код, чтобы вывести `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
setTimeout(() => {
  console.log(this.name);
}, 1000);
```
---
10. this в классе
⌛ Задача: Что выведет код?
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  showThis() {
    console.log(this.name);
  }
}
const user = new User("Frontend");
user.showThis();
```
🎯 Решение:
```javascript
"Frontend"
```
Объяснение: `this` внутри метода класса указывает на экземпляр класса.
---
11. this в классе с потерей контекста
⌛ Задача: Исправьте код.
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  showThis() {
    console.log(this.name);
  }
}
const user = new User("Frontend");
const fn = user.showThis;
fn(); // Потеря контекста
```
🎯 Решение:
```javascript
const fn = user.showThis.bind(user);
fn(); // "Frontend"
```
---
12. this внутри forEach
⌛ Задача: Что выведет код?
```javascript
const obj = {
  name: "Frontend",
  items: [1, 2, 3],
  showThis: function() {
    this.items.forEach(function(item) {
      console.log(this.name);
    });
  }
};
obj.showThis();
```
🎯 Решение:
```javascript
undefined // Потеря контекста
```
Исправление:
```javascript
this.items.forEach(item => {
  console.log(this.name);
});
```
---
13. this и new.target
⌛ Задача: Что выведет код?
```javascript
function User(name) {
  if (!new.target) throw "Use new!";
  this.name = name;
}
const user = new User("Frontend");
```
🎯 Решение:
```javascript
No errors
```
Объяснение: `new.target` проверяет, вызвана ли функция с `new`.
---
14. Явное указание this через apply
⌛ Задача: Что выведет код?
```javascript
function sum(a, b) {
  console.log(this);
  return a + b;
}
const obj = { value: 10 };
console.log(sum.apply(obj, [5, 7]));
```
🎯 Решение:
```javascript
{ value: 10 }
12
```
---
15. this в наследовании
⌛ Задача: Что выведет код?
```javascript
class Parent {
  constructor() {
    this.name = "Parent";
  }
}
class Child extends Parent {
  showThis() {
    console.log(this.name);
  }
}
const child = new Child();
child.showThis();
```
🎯 Решение:
```javascript
"Parent"
```
---
16. this в замыкании
⌛ Задача: Как вывести `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
const inner = () => {
  console.log(this.name);
};
inner();
```
---
17. this в EventListener
⌛ Задача: Как вывести `"Frontend"` при клике?
```javascript
const obj = {
  name: "Frontend",
  init: function() {
    document.body.addEventListener("click", function() {
      console.log(this.name);
    });
  }
};
obj.init();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
document.body.addEventListener("click", () => {
  console.log(this.name);
});
```
---------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
1. Создание простого промиса
⌛ Задача: Создайте `Promise`, который выполняется через 1 секунду и возвращает строку `"Resolved"`.
🎯 Решение:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 1000);
});

promise.then(result => console.log(result)); // "Resolved"
```
Объяснение: `resolve` используется для успешного завершения промиса, а `reject` для ошибок.
---
2. Обработка ошибки
⌛ Задача: Обработайте ошибку в следующем коде.
```javascript
const promise = new Promise((resolve, reject) => {
  reject("Error occurred");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```
🎯 Решение:
```javascript
// Вывод: "Error occurred"
```
Объяснение: Метод `catch` используется для обработки ошибок.
---
3. Цепочка промисов
⌛ Задача: Используйте цепочку промисов, чтобы последовательно выполнить три шага.
🎯 Решение:
```javascript
new Promise(resolve => resolve(1))
  .then(result => {
    console.log(result); // 1
    return result + 1; // Передаём 2 в следующий then
  })
  .then(result => {
    console.log(result); // 2
    return result + 1; // Передаём 3 в следующий then
  })
  .then(result => {
    console.log(result); // 3
  })
  .catch((error) => {
    console.error("Ошибка:", error); // Ловим возможные ошибки
  });
```
Объяснение:
1. Создание промиса:
   ```javascript
   new Promise((resolve) => resolve(1))
   ```
   - Мы создаём новый `Promise`, который сразу же выполняется (`resolve(1)`).
   - Это означает, что первый `.then()` получит `1` в качестве `result`.
2. Первый `.then()`:
   ```javascript
   .then((result) => {
     console.log(result); // 1
     return result + 1; // Возвращаем 2
   })
   ```
   - Логируем `1` в консоль.
   - Возвращаем `result + 1`, то есть `2`, и передаём его в следующий `.then()`.
3. Второй `.then()`:
   ```javascript
   .then((result) => {
     console.log(result); // 2
     return result + 1; // Возвращаем 3
   })
   ```
   - Логируем `2` в консоль.
   - Возвращаем `3`, который передаётся в следующий `.then()`.
4. Третий `.then()`:
   ```javascript
   .then((result) => {
     console.log(result); // 3
   })
   ```
   - Логируем `3` в консоль.
   - Мы не возвращаем ничего, так как это последний шаг цепочки.
5. Обработка ошибок (`.catch()`):
   ```javascript
   .catch((error) => {
     console.error("Ошибка:", error);
   });
   ```
   - Если в любом `.then()` произойдёт ошибка, она будет поймана в `.catch()`, и мы увидим сообщение в консоли.
Каждый `then` возвращает новый `Promise`, который можно обработать в следующем `then`.
---
Вывод в консоли:
```
1
2
3
```
Почему это важно?
- Это показывает, как промисы позволяют управлять последовательным выполнением асинхронного кода.
- `.then()` возвращает значение, которое передаётся следующему `.then()`, создавая цепочку.
- `.catch()` обрабатывает возможные ошибки в любом шаге цепочки.
Этот подход широко используется при работе с API-запросами, асинхронными операциями и потоками данных в JavaScript.
---
Кратко:
```javascript
new Promise((resolve) => resolve(1))
  .then((result) => {
    console.log(result); // 1
    return result + 1;
  })
  .then((result) => {
    console.log(result); // 2
    return result + 1;
  })
  .then((result) => console.log(result)) // 3
  .catch((error) => console.error("Ошибка:", error));
```
Объяснение:
1. `resolve(1)` – создаём промис и сразу передаём `1` в цепочку.
2. Первый `.then()` – логируем `1`, передаём `2` дальше.
3. Второй `.then()` – логируем `2`, передаём `3` дальше.
4. Третий `.then()` – логируем `3`, завершаем цепочку.
5. `.catch()` – обрабатывает ошибки, если они появятся.
---
Вывод в консоли:
```
1
2
3
```
---
4. Promise.all
⌛ Задача: Как использовать `Promise.all`, чтобы дождаться выполнения всех промисов?
🎯 Решение:
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then(results => {
  console.log(results); // [1, 2, 3]
});
```
Объяснение: `Promise.all` ждёт выполнения всех переданных промисов и возвращает массив их результатов.
---
5. Promise.all с ошибкой
⌛ Задача: Что произойдёт, если один из промисов завершится с ошибкой?
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.log(error));
```
🎯 Решение:
```javascript
"Error"
```
Объяснение: Если один из промисов завершится с ошибкой, `Promise.all` сразу перейдёт в состояние `rejected`.
---
6. Promise.race
⌛ Задача: Используйте `Promise.race`, чтобы получить результат самого быстрого промиса.
🎯 Решение:
```javascript
const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 500));

Promise.race([promise1, promise2]).then(result => console.log(result)); // "Second"
```
Объяснение: `Promise.race` возвращает результат первого завершившегося промиса.
---
7. Наследование ошибок
⌛ Задача: Что произойдёт, если ошибка не будет обработана в одном из `then`?
```javascript
Promise.resolve(1)
  .then(result => {
    throw new Error("Something went wrong");
  })
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
```
🎯 Решение:
```javascript
"Something went wrong"
```
Объяснение: Если ошибка выброшена внутри `then`, она будет поймана в ближайшем `catch`.
---
8. finally
⌛ Задача: Как использовать `finally` для выполнения кода независимо от результата промиса?
🎯 Решение:
```javascript
Promise.resolve("Success")
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Finally executed"));
```
Результат:
```
"Success"
"Finally executed"
```
Объяснение: `finally` выполняется независимо от успешного или неуспешного завершения промиса.
---
9. Цепочка ошибок
⌛ Задача: Что выведет следующий код?
```javascript
Promise.reject("Error")
  .then(result => console.log(result))
  .catch(error => {
    console.log(error);
    throw new Error("New Error");
  })
  .catch(error => console.log(error.message));
```
🎯 Решение:
```
"Error"
"New Error"
```
---
10. Создание задержки
⌛ Задача: Напишите функцию `delay`, которая возвращает промис, разрешающийся через заданное количество миллисекунд.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("1 second passed"));
```
---
11. Последовательное выполнение
⌛ Задача: Как выполнить промисы последовательно?
🎯 Решение:
```javascript
const tasks = [1, 2, 3];

tasks.reduce((promise, task) => {
  return promise.then(() => {
    console.log(task);
    return Promise.resolve();
  });
}, Promise.resolve());
```
Результат:
```
1
2
3
```
---
12. Обработка ошибок в цепочке
⌛ Задача: Где нужно разместить `catch`, чтобы обработать любую ошибку?
🎯 Решение:
```javascript
Promise.resolve(1)
  .then(() => {
    throw new Error("First error");
  })
  .then(() => {
    throw new Error("Second error");
  })
  .catch(error => console.log(error.message)); // Ловит первую ошибку
```
Результат:
```
"First error"
```
Объяснение:
1. `Promise.resolve(1)` — создаёт промис, который сразу переходит в состояние `fulfilled` с результатом `1`.
2. Первый `.then()` — выбрасывает ошибку (`throw new Error("First error")`).
   - Из-за этого `Promise` немедленно переходит в состояние `rejected`.
3. Второй `.then()` не выполняется — потому что ошибка в предыдущем `.then()` прерывает цепочку.
4. `.catch(error => console.log(error.message))`*
   - Перехватывает первую ошибку `"First error"`, так как `.catch()` ловит первое `rejected` состояние в цепочке.
   - Ошибка `"Second error"` не выбрасывается, так как до неё выполнение не доходит.
Вывод в консоли:
```
First error
```
Как обработать ошибки на каждом этапе?
Если нужно обработать ошибки на каждом `.then()`, нужно добавить `.catch()` после каждого шага:
```javascript
Promise.resolve(1)
  .then(() => {
    throw new Error("First error");
  })
  .catch(error => {
    console.log("Caught in first catch:", error.message);
  })
  .then(() => {
    throw new Error("Second error");
  })
  .catch(error => {
    console.log("Caught in second catch:", error.message);
  });
```
Вывод в консоли:
```
Caught in first catch: First error
Caught in second catch: Second error
```
Теперь каждая ошибка обрабатывается отдельно.
Вывод:
- Один `catch` в конце цепочки — ловит только первую ошибку.
- Несколько `catch` на каждом этапе — ловят ошибки на каждом `.then()` по отдельности.
---
13. Повторная попытка промиса
⌛ Задача: Напишите функцию, которая повторяет промис 3 раза, если он завершается с ошибкой.
🎯 Решение:
```javascript
function retry(promiseFn, retries) {
  return promiseFn().catch(error => {
    if (retries > 0) {
      return retry(promiseFn, retries - 1);
    }
    throw error;
  });
}

retry(() => Promise.reject("Error"), 3).catch(error => console.log(error));
```
Результат:
```
"Error"
```
---
14. Промис с состоянием
⌛ Задача: Как узнать состояние промиса?
🎯 Решение:
```javascript
const promise = Promise.resolve(1);

promise
  .then(result => {
    console.log("Resolved:", result);
  })
  .catch(error => {
    console.log("Rejected:", error);
  });
```
---
15. Promise.any
⌛ Задача: Как использовать `Promise.any`?
🎯 Решение:
```javascript
const promise1 = Promise.reject("Error");
const promise2 = Promise.resolve("Success");

Promise.any([promise1, promise2]).then(result => console.log(result)); // "Success"
```
Объяснение: `Promise.any` возвращает первый успешно выполненный промис.
---
16. Параллельная обработка с результатами
⌛ Задача: Получите массив результатов промисов, включая ошибки.
🎯 Решение:
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then(results => console.log(results));
```
Результат:
```javascript
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Error" }
]
```
---
17. Использование async/await
⌛ Задача: Напишите функцию, которая последовательно выполняет два промиса с использованием `async/await`.
🎯 Решение:
```javascript
async function execute() {
  const result1 = await Promise.resolve(1);
  console.log(result1);

  const result2 = await Promise.resolve(2);
  console.log(result2);
}

execute();
```
Результат:
```
1
2
```
---------------------
⋙ ❍ async/await:
---
1. Простое использование `async/await`
⌛ Задача: Напишите функцию, которая возвращает `"Hello, Async/Await"` через 1 секунду с использованием `async/await`.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  await delay(1000);
  return "Hello, Async/Await";
}

greet().then(console.log); // "Hello, Async/Await"
```
Объяснение: `await` приостанавливает выполнение функции до выполнения промиса.
---
2. Обработка ошибки
⌛ Задача: Обработайте ошибку в `async` функции.
🎯 Решение:
```javascript
async function errorDemo() {
  throw new Error("Something went wrong");
}

async function run() {
  try {
    await errorDemo();
  } catch (error) {
    console.log(error.message); // "Something went wrong"
  }
}

run();
```
Объяснение: Используйте `try...catch` для обработки ошибок в `async` функциях.
---
3. Последовательное выполнение
⌛ Задача: Выполните два асинхронных вызова последовательно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const result1 = await task1();
  console.log(result1); // "Task 1 completed"
  const result2 = await task2();
  console.log(result2); // "Task 2 completed"
}

runTasks();
```
Объяснение: Выполнение асинхронных задач идёт по порядку.
---
4. Параллельное выполнение
⌛ Задача: Выполните два асинхронных вызова параллельно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const [result1, result2] = await Promise.all([task1(), task2()]);
  console.log(result1, result2); // "Task 1 completed", "Task 2 completed"
}

runTasks();
```
Объяснение: `Promise.all` выполняет задачи параллельно и возвращает массив результатов.
---
5. `await` внутри цикла
⌛ Задача: Последовательно обработайте массив задач.
🎯 Решение:
```javascript
async function processArray(arr) {
  for (const item of arr) {
    const result = await new Promise(resolve => setTimeout(() => resolve(item * 2), 500));
    console.log(result);
  }
}

processArray([1, 2, 3]); // 2, 4, 6
```
Объяснение: `await` можно использовать внутри цикла для последовательной обработки.
---
6. Параллельная обработка массива
⌛ Задача: Обработайте массив параллельно.
🎯 Решение:
```javascript
async function processArray(arr) {
  const results = await Promise.all(
    arr.map(item => new Promise(resolve => setTimeout(() => resolve(item * 2), 500)))
  );
  console.log(results); // [2, 4, 6]
}

processArray([1, 2, 3]);
```
Объяснение: Использование `Promise.all` позволяет выполнять задачи одновременно.
---
7. Функция с задержкой
⌛ Задача: Напишите функцию `wait`, которая задерживает выполнение кода на заданное время.
🎯 Решение:
```javascript
async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(1000);
  console.log("1 second passed");
}

run();
```
Объяснение: `await` позволяет ожидать выполнения промиса внутри функции.
---
8. Прекращение выполнения при ошибке
⌛ Задача: Что произойдёт, если в цепочке вызовов произойдёт ошибка?
🎯 Решение:
```javascript
async function task1() {
  return "Task 1";
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  try {
    const result1 = await task1();
    console.log(result1); // "Task 1"
    const result2 = await task2(); // Ошибка
    console.log(result2);
  } catch (error) {
    console.log(error.message); // "Task 2 failed"
  }
}

runTasks();
```
Объяснение: Если промис выбрасывает ошибку, она перехватывается в блоке `catch`.
---
9. Использование `finally`
⌛ Задача: Добавьте `finally` в `async` функцию.
🎯 Решение:
```javascript
async function run() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result); // "Success"
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Cleanup"); // "Cleanup"
  }
}

run();
```
Объяснение: `finally` выполняется независимо от результата промиса.
---
10. Обработка нескольких ошибок
⌛ Задача: Как обработать ошибки для нескольких асинхронных вызовов?
🎯 Решение:
```javascript
async function task1() {
  throw new Error("Task 1 failed");
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  const results = await Promise.allSettled([task1(), task2()]);
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log(result.reason.message);
    }
  });
}

runTasks();
```
Объяснение: `Promise.allSettled` возвращает результаты всех промисов, включая ошибки.
---
11. Асинхронная рекурсия
⌛ Задача: Реализуйте асинхронную рекурсию для подсчёта числа до 5.
🎯 Решение:
```javascript
async function countDown(n) {
  if (n === 0) return;
  console.log(n);
  await new Promise(resolve => setTimeout(resolve, 500));
  await countDown(n - 1);
}

countDown(5); // 5, 4, 3, 2, 1
```
---
12. Чтение данных через `fetch`
⌛ Задача: Используйте `fetch` для получения данных.
🎯 Решение:
```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```
---
13. Обработка ошибки сети
⌛ Задача: Обработайте ошибку при использовании `fetch`.
🎯 Решение:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();
```
---
14. Асинхронная функция в классе
⌛ Задача: Реализуйте асинхронный метод в классе.
🎯 Решение:
```javascript
class DataLoader {
  async load() {
    return "Data loaded";
  }
}

const loader = new DataLoader();
loader.load().then(console.log); // "Data loaded"
```
---
15. Промисификация функций
⌛ Задача: Превратите функцию с колбэком в `async/await`.
🎯 Решение:
```javascript
function delay(ms, callback) {
  setTimeout(() => callback(null, "Done"), ms);
}

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

const delayAsync = promisify(delay);
delayAsync(1000).then(console.log); // "Done"
```
---
16. Асинхронный таймер
⌛ Задача: Напишите асинхронный таймер с использованием `async/await`.
🎯 Решение:
```javascript
async function timer(seconds) {
  for (let i = seconds; i >= 0; i--) {
    console.log(i);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

timer(5); // 5, 4, 3, 2, 1, 0
```
---
17. Повторная попытка выполнения задачи
⌛ Задача: Напишите функцию, которая повторяет выполнение асинхронной задачи 3 раза при ошибке.
🎯 Решение:
```javascript
async function retry(task, retries) {
  try {
    return await task();
  } catch (error) {
    if (retries > 0) {
      console.log("Retrying...");
      return retry(task, retries - 1);
    }
    throw error;
  }
}

async function task() {
  throw new Error("Task failed");
}

retry(task, 3).catch(console.log); // "Task failed" после 3 попыток
```
---------------------
⋙ ❍ Event Loop:
---
1. Простая задача с таймаутом
⌛ Задача: Что выведет код?
```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
```
🎯 Решение:
```
Start
End
Timeout
```
Объяснение: `setTimeout` ставит callback в очередь, поэтому он выполняется после синхронного кода.
---
2. `Promise` vs `setTimeout`
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
🎯 Решение:
```
End
Promise
Timeout
```
Объяснение: `Promise.then` попадает в микротаски, которые выполняются перед макротасками (например, `setTimeout`).
---
3. Вложенные таймауты
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => {
  console.log("Timeout 1");
  setTimeout(() => console.log("Timeout 2"), 0);
}, 0);
```
🎯 Решение:
```
Timeout 1
Timeout 2
```
Объяснение: Первый таймаут ставит второй в очередь, который выполнится в следующей итерации Event Loop.
---
4. Очередность `setTimeout`
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => console.log("Timeout 1"), 100);
setTimeout(() => console.log("Timeout 2"), 50);
setTimeout(() => console.log("Timeout 3"), 0);
```
🎯 Решение:
```
Timeout 3
Timeout 2
Timeout 1
```
Объяснение: Таймауты с меньшим временем выполняются раньше.
---
5. Микротаски внутри макротасок
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => {
  console.log("Timeout");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);
Promise.resolve().then(() => console.log("Promise"));
```
🎯 Решение:
```
Promise
Timeout
Promise inside Timeout
```
Объяснение: Микротаски, такие как `Promise.then`, выполняются до следующей макротаски.
---
6. Вложенные промисы
⌛ Задача: Что выведет код?
```javascript
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 2"));
```
🎯 Решение:
```
Promise 1
Promise 2
```
Объяснение: Возврат нового промиса из `then` добавляет его обработчик в очередь микротасок.
---
7. Микротаски vs макротаски
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));
```
🎯 Решение:
```
Promise 1
Promise 2
Timeout
```
Объяснение: Все микротаски выполняются до первой макротаски.
---
8. `setImmediate` vs `setTimeout`
⌛ Задача: Что выведет код в Node.js?
```javascript
setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);
```
🎯 Решение:
```
Timeout
Immediate
```
Объяснение: В Node.js `setTimeout` с 0 выполняется перед `setImmediate`.
---
9. Рекурсивный `setTimeout`
⌛ Задача: Реализуйте интервал с использованием `setTimeout`.
🎯 Решение:
```javascript
function customInterval(callback, delay) {
  function execute() {
    callback();
    setTimeout(execute, delay);
  }
  setTimeout(execute, delay);
}

customInterval(() => console.log("Interval"), 1000);
```
---
10. `requestAnimationFrame`
⌛ Задача: Как вписывается `requestAnimationFrame` в Event Loop?
🎯 Решение:
```javascript
requestAnimationFrame(() => console.log("AnimationFrame"));
console.log("Sync code");
```
Результат:
```
Sync code
AnimationFrame
```
Объяснение: `requestAnimationFrame` выполняется перед следующей перерисовкой экрана.
---
11. `queueMicrotask`
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => console.log("Timeout"), 0);
queueMicrotask(() => console.log("Microtask"));
console.log("Sync code");
```
🎯 Решение:
```
Sync code
Microtask
Timeout
```
Объяснение: `queueMicrotask` добавляет задачу в очередь микротасок.
---
12. Задержка через промисы
⌛ Задача: Реализуйте задержку с использованием `Promise`.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await delay(1000);
  console.log("End");
}

run();
```
---
13. Вложенные микротаски
⌛ Задача: Что выведет код?
```javascript
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 2"))
  .then(() => console.log("Promise 3"));
```
🎯 Решение:
```
Promise 1
Promise 2
Promise 3
```
---
14. Макротаски в цикле
⌛ Задача: Что выведет код?
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
🎯 Решение:
```
0
1
2
```
Объяснение: Каждая итерация добавляет callback в очередь макротасок.
---
15. Задачи на паузе
⌛ Задача: Что произойдёт, если `while` блокирует Event Loop?
🎯 Решение:
```javascript
setTimeout(() => console.log("Timeout"), 0);

const start = Date.now();
while (Date.now() - start < 1000) {}

console.log("End");
```
Результат:
```
End
Timeout
```
Объяснение: Синхронный код блокирует Event Loop, задерживая выполнение других задач.
---
16. Очередь из микротасок
⌛ Задача: Что выведет код?
```javascript
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    Promise.resolve().then(() => console.log("Promise 2"));
  })
  .then(() => console.log("Promise 3"));
```
🎯 Решение:
```
Promise 1
Promise 2
Promise 3
```
Объяснение: Вложенный `then` добавляет микротаску в очередь.
---
17. Комбинированный пример
⌛ Задача: Что выведет код?
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
```
🎯 Решение:
```
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
```
Объяснение: Синхронный код выполняется сначала, затем микротаски (`Promise`), потом макротаски (`setTimeout`).
---------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
Современные стандарты JavaScript (ES6+) — это версии языка, которые появились после ECMAScript 5 (ES5). С каждым новым стандартом (начиная с ES6, который был выпущен в 2015 году) добавляются новые возможности и улучшения. Давайте рассмотрим ключевые особенности, которые были введены в ES6 и позже, а также те, которые уже широко используются в современных приложениях.
1. Стрелочные функции (Arrow Functions)
Стрелочные функции предоставляют более компактный синтаксис для определения функций и сохраняют контекст `this`.
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```
Особенности:
- Уменьшают количество кода.
- Автоматически сохраняют контекст `this` из внешней области видимости (особенно полезно в обработчиках событий и методах).
---
2. Шаблонные строки (Template Literals)
Шаблонные строки позволяют встраивать выражения в строку и использовать многострочные строки.
```javascript
const name = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // "Hello, my name is Alice and I am 25 years old."
```
Особенности:
- Интерполяция значений через `${}`.
- Многострочные строки без необходимости использования символов новой строки.
---
3. Деструктуризация (Destructuring)
Деструктуризация позволяет извлекать значения из объектов и массивов в переменные с минимальным кодом.
```javascript
// Деструктуризация объектов
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25

// Деструктуризация массивов
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1 2
```
Особенности:
- Разбиение объектов и массивов на переменные.
- Удобный способ для работы с данными из API или больших объектов.
---
4. Spread и Rest операторы (`...`)
Оператор spread используется для распространения элементов массива или объекта, а rest — для сбора аргументов в функции.
```javascript
// Spread для массивов
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Spread для объектов
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest параметры в функции
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```
Особенности:
- Spread позволяет копировать элементы в новые массивы/объекты.
- Rest позволяет собирать остаточные параметры функции в массив.
---
5. Модули (Modules)
Модули позволяют разделять код на отдельные файлы, делая его более удобным для поддержки и масштабирования.
```javascript
// module.js
export const add = (a, b) => a + b;

// app.js
import { add } from './module';
console.log(add(2, 3)); // 5
```
Особенности:
- Ключевые слова `export` и `import`.
- Модули поддерживают статический анализ и улучшенную производительность.
---
6. Классы (Classes)
ES6 представил синтаксис классов для удобной работы с объектно-ориентированным программированием (ООП).
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('Alice', 25);
person.greet(); // "Hello, my name is Alice."
```
Особенности:
- Синтаксис для создания классов и методов.
- Поддержка наследования через `extends`.
---
7. `let` и `const`
Вместо устаревших `var`, ES6 ввёл `let` и `const` для объявления переменных с блочной областью видимости.
```javascript
let x = 10; // переменная, значение которой можно изменить
const y = 20; // константа, значение которой нельзя изменить
```
Особенности:
- `let` позволяет объявлять переменные, которые можно изменять.
- `const` создаёт константы, значения которых нельзя переопределить.
---
8. Промисы (Promises)
Промисы предоставляют способ работы с асинхронными операциями.
```javascript
const fetchData = new Promise((resolve, reject) => {
  const data = { name: 'Alice' };
  resolve(data);
});

fetchData
  .then(data => console.log(data)) // { name: 'Alice' }
  .catch(error => console.log(error));
```
Особенности:
- Промисы помогают работать с асинхронным кодом и улучшать читаемость.
- Методы `.then()` и `.catch()` для обработки результата и ошибок.
---
9. Асинхронные функции (`async/await`)
`async` и `await` — это синтаксис для работы с промисами, который делает код асинхронных операций более читаемым.
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  console.log(data);
}

fetchData();
```
Особенности:
- `async` позволяет функции возвращать промис.
- `await` используется для ожидания завершения промиса, при этом код выглядит как синхронный.
---
10. Дефолтные параметры функции
ES6 добавил возможность задавать значения по умолчанию для параметров функции.
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}

greet(); // "Hello, Guest"
greet('Alice'); // "Hello, Alice"
```
Особенности:
- Если аргумент не передан, будет использовано значение по умолчанию.
---
11. Символы (Symbols)
Символы представляют уникальные и неизменяемые идентификаторы, которые могут быть использованы как ключи для свойств объектов.
```javascript
const symbol = Symbol('description');
const obj = {
  [symbol]: 'value'
};
console.log(obj[symbol]); // 'value'
```
Особенности:
- Уникальность значений символов.
- Используются для создания уникальных ключей, что предотвращает случайное переопределение.
---
12. Итераторы и Генераторы
Итераторы и генераторы позволяют создавать и работать с коллекциями данных с помощью специального синтаксиса.
```javascript
// Генератор
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const sequence = generateSequence();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
```
Особенности:
- Генераторы позволяют приостанавливать выполнение функции и продолжать его с того места, где было остановлено, с помощью `yield`.
---
13. `Object.assign`
Метод `Object.assign` позволяет копировать свойства одного объекта в другой.
```javascript
const obj1 = { name: 'Alice' };
const obj2 = { age: 25 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { name: 'Alice', age: 25 }
```
Особенности:
- Копирует все перечисляемые собственные свойства из одного или нескольких объектов в целевой объект.
---
14. `Array.includes`
Метод `includes` позволяет проверить, содержится ли элемент в массиве.
```javascript
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
```
Особенности:
- Метод возвращает `true`, если элемент найден, и `false`, если нет.
---
15. `Object.entries` и `Object.fromEntries`
Методы `Object.entries` и `Object.fromEntries` позволяют работать с парами ключ-значение объектов.
```javascript
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2]]

const newObj = Object.fromEntries(entries);
console.log(newObj); // { a: 1, b: 2 }
```
---
16. `Promise.finally`
Метод `finally` выполняется после успешного выполнения или отклонения промиса, не зависимо от результата.
```javascript
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Request completed'));
```
---
17. Классы и Наследование
ES6 ввёл поддержку классов и наследования в JavaScript.
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks
```
---
Заключение
С введением ES6 и последующих версий JavaScript стал гораздо мощнее и удобнее. Некоторые ключевые возможности включают:
- Модули для структурирования кода.
- Асинхронные функции (`async/await`) для удобной работы с промисами.
- Новые типы данных, такие как `Symbol`, и улучшенные возможности для работы с объектами и массивами.
Знание этих современных возможностей сделает код более чистым, продуктивным и удобным для работы.
---------------------
⋙ ❍ Стрелочные функции:
---
1. Простая срелочная функция
⌛ Задача: Напишите стрелочную функцию, которая принимает число и возвращает его квадрат.
🎯 Решение:
```javascript
const square = num => num ** 2;

console.log(square(4)); // 16
```
Объяснение: Если у функции один параметр, скобки вокруг него можно опустить. После `=>` следует выражение, которое автоматически возвращается.
---
2. Многострочная стрелочная функция
⌛ Задача: Напишите стрелочную функцию, которая возвращает произведение двух чисел.
🎯 Решение:
```javascript
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(3, 4)); // 12
```
Объяснение: Если функция выполняет несколько действий, используйте фигурные скобки и явный `return`.
---
3. Использование с `map`
⌛ Задача: Преобразуйте массив чисел, удвоив каждое значение.
🎯 Решение:
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```
Объяснение: Стрелочные функции удобно использовать в методах высшего порядка, таких как `map`.
---
4. Использование с `filter`
⌛ Задача: Оставьте только чётные числа из массива.
🎯 Решение:
```javascript
const nums = [1, 2, 3, 4];
const evens = nums.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]
```
Объяснение: Стрелочные функции лаконичны и удобны для фильтрации данных.
---
5. Стрелочные функции без параметров
⌛ Задача: Напишите функцию, которая возвращает строку `"Hello, world!"`.
🎯 Решение:
```javascript
const greet = () => "Hello, world!";

console.log(greet()); // "Hello, world!"
```
Объяснение: Если у функции нет параметров, используйте пустые круглые скобки `()`.
---
6. Сравнение с обычной функцией
⌛ Задача: Перепишите функцию ниже с использованием стрелочной функции:
```javascript
function add(a, b) {
  return a + b;
}
🎯 Решение:
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5
```
Объяснение: Стрелочные функции короче и избегают ключевого слова `function`.
---
7. Контекст `this`
⌛ Задача: Что выведет код?
```javascript
const obj = {
  name: "Frontend",
  greet: function() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};

obj.greet(); // ?
```
🎯 Решение:
```
"Frontend"
```
Объяснение: Стрелочные функции не имеют собственного `this`. Они наследуют его из окружающего контекста.
---
8. Стрелочные функции как методы
⌛ Задача: Что выведет код?
```javascript
const obj = {
  name: "Frontend",
  greet: () => console.log(this.name),
};

obj.greet(); // ?
```
🎯 Решение:
```
undefined
```
Объяснение: У стрелочных функций нет своего `this`, поэтому они берут его из внешнего контекста, который здесь — глобальная область.
---
9. Использование с `reduce`
⌛ Задача: Найдите сумму всех чисел в массиве.
🎯 Решение:
```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10
```
Объяснение: Стрелочные функции часто применяются в методе `reduce` для упрощения кода.
---
10. Деструктуризация параметров
⌛ Задача: Напишите стрелочную функцию, которая принимает объект `{ a, b }` и возвращает их сумму.
🎯 Решение:
```javascript
const sum = ({ a, b }) => a + b;

console.log(sum({ a: 2, b: 3 })); // 5
```
Объяснение: Используйте деструктуризацию для доступа к свойствам объекта.
---
11. Стрелочная функция с объектом как результатом
⌛ Задача: Напишите функцию, которая возвращает объект `{ key: "value" }`.
🎯 Решение:
```javascript
const createObject = () => ({ key: "value" });

console.log(createObject()); // { key: "value" }
```
Объяснение: Объект нужно оборачивать в круглые скобки, чтобы интерпретатор не принял `{}` за блок кода.
---
12. Стрелочные функции внутри классов
⌛ Задача: Как стрелочные функции работают внутри методов класса?
🎯 Решение:
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment = () => {
    this.count++;
  };
}

const counter = new Counter();
counter.increment();
console.log(counter.count); // 1
```
Объяснение: Стрелочные функции полезны, чтобы сохранить контекст `this` в классах.
---
13. Передача стрелочных функций
⌛ Задача: Используйте стрелочную функцию для сортировки массива по убыванию.
🎯 Решение:
```javascript
const nums = [1, 4, 2, 3];
nums.sort((a, b) => b - a);

console.log(nums); // [4, 3, 2, 1]
```
Объяснение: Стрелочные функции часто используются в `sort` для определения порядка сортировки.
---
14. Стрелочные функции и `arguments`
⌛ Задача: Что выведет код?
```javascript
const arrow = () => console.log(arguments);
arrow(1, 2, 3);
```
🎯 Решение:
```
ReferenceError: arguments is not defined
```
Объяснение: У стрелочных функций нет объекта `arguments`. Используйте rest-параметры:
```javascript
const arrow = (...args) => console.log(args);
arrow(1, 2, 3); // [1, 2, 3]
```
---
15. Использование `default` параметров
⌛ Задача: Напишите стрелочную функцию, которая принимает число и возвращает его, умноженное на 2. Если число не передано, по умолчанию используйте `1`.
🎯 Решение:
```javascript
const double = (num = 1) => num * 2;

console.log(double()); // 2
console.log(double(3)); // 6
```
Объяснение: Параметры по умолчанию задаются через `=`.
---
16. Стрелочные функции с таймерами
⌛ Задача: Используйте стрелочную функцию в `setTimeout`, чтобы сохранить контекст.
🎯 Решение:
```javascript
function Timer() {
  this.time = 0;

  setInterval(() => {
    this.time++;
    console.log(this.time);
  }, 1000);
}

new Timer();
```
Объяснение: Стрелочные функции сохраняют контекст `this`, поэтому `this.time` работает корректно.
---
17. Каррирование с помощью стрелочных функций
⌛ Задача: Напишите функцию, которая принимает два числа, но вызовы должны быть разделены.
🎯 Решение:
```javascript
const add = a => b => a + b;

console.log(add(2)(3)); // 5
```
Объяснение: Стрелочные функции позволяют легко реализовать каррирование.
---------------------
⋙ ❍ Деструктуризация:
---
1. Простая деструктуризация объекта
⌛ Задача: Извлеките значения `name` и `age` из объекта.
🎯 Решение:
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // "Alice"
console.log(age); // 25
```
Объяснение: Деструктуризация позволяет извлекать свойства объекта и присваивать их переменным.
---
2. Простая деструктуризация массива
⌛ Задача: Извлеките первый и второй элементы массива.
🎯 Решение:
```javascript
const arr = [10, 20, 30];
const [first, second] = arr;

console.log(first); // 10
console.log(second); // 20
```
Объяснение: Индексы массива соответствуют переменным при деструктуризации.
---
3. Деструктуризация с параметрами по умолчанию
⌛ Задача: Задайте значение по умолчанию для свойства `age`, если оно отсутствует.
🎯 Решение:
```javascript
const person = { name: "Alice" };
const { name, age = 30 } = person;

console.log(name); // "Alice"
console.log(age); // 30
```
Объяснение: Значения по умолчанию используются, если свойство отсутствует или равно `undefined`.
---
4. Пропуск элементов массива
⌛ Задача: Извлеките первый и третий элементы массива.
🎯 Решение:
```javascript
const arr = [10, 20, 30];
const [first, , third] = arr;

console.log(first); // 10
console.log(third); // 30
```
Объяснение: Используйте запятую, чтобы пропустить ненужные элементы.
---
5. Переименование переменных
⌛ Задача: Извлеките `name` из объекта, но присвойте его другой переменной.
🎯 Решение:
```javascript
const person = { name: "Alice", age: 25 };
const { name: fullName } = person;

console.log(fullName); // "Alice"
```
Объяснение: Переименование переменных полезно для избежания конфликтов имен.
---
6. Деструктуризация вложенных объектов
⌛ Задача: Извлеките `city` из вложенного объекта.
🎯 Решение:
```javascript
const person = { name: "Alice", address: { city: "London" } };
const { address: { city } } = person;

console.log(city); // "London"
```
Объяснение: Можно деструктурировать вложенные объекты, используя такую же структуру.
---
7. Деструктуризация вложенных массивов
⌛ Задача: Извлеките значение `6` из массива.
🎯 Решение:
```javascript
const arr = [1, [2, 3], [4, [5, 6]]];
const [ , , [ , [ , six]]] = arr;

console.log(six); // 6
```
Объяснение: Массивы деструктурируются по уровням вложенности.
---
8. Деструктуризация с остаточными параметрами
⌛ Задача: Извлеките первый элемент массива, а остальные соберите в другой массив.
🎯 Решение:
```javascript
const arr = [10, 20, 30, 40];
const [first, ...rest] = arr;

console.log(first); // 10
console.log(rest); // [20, 30, 40]
```
Объяснение: Оператор `...` собирает оставшиеся элементы в массив.
---
9. Деструктуризация в функциях
⌛ Задача: Напишите функцию, которая принимает объект с `name` и `age` и выводит их.
🎯 Решение:
```javascript
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet({ name: "Alice", age: 25 });
// "Hello, Alice. You are 25 years old."
```
Объяснение: Деструктуризация позволяет извлекать свойства прямо в параметрах функции.
---
10. Деструктуризация с параметрами по умолчанию в функциях
⌛ Задача: Напишите функцию, которая использует значения по умолчанию для параметров.
🎯 Решение:
```javascript
function greet({ name = "Guest", age = 18 } = {}) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet(); // "Hello, Guest. You are 18 years old."
```
Объяснение: Параметры по умолчанию задаются через `=`.
---
11. Объединение деструктуризации и деструктуризация массива
⌛ Задача: Извлеките имя первого пользователя из массива объектов.
🎯 Решение:
```javascript
const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
const [{ name }] = users;

console.log(name); // "Alice"
```
Объяснение: Деструктуризация массивов и объектов может использоваться вместе.
---
12. Деструктуризация с вложенными значениями
⌛ Задача: Извлеките `name` и `city` из объекта.
🎯 Решение:
```javascript
const person = { name: "Alice", address: { city: "London" } };
const { name, address: { city } } = person;

console.log(name); // "Alice"
console.log(city); // "London"
```
Объяснение: Вы можете деструктурировать несколько уровней объекта.
---
13. Извлечение значений из функции
⌛ Задача: Верните объект из функции и деструктурируйте его.
🎯 Решение:
```javascript
function getUser() {
  return { name: "Alice", age: 25 };
}

const { name, age } = getUser();

console.log(name); // "Alice"
console.log(age); // 25
```
Объяснение: Можно сразу деструктурировать значения, возвращаемые функцией.
---
14. Слияние значений через деструктуризацию
⌛ Задача: Объедините значения двух объектов в один объект.
🎯 Решение:
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };
const combined = { ...obj1, ...obj2 };

console.log(combined); // { a: 1, b: 2, c: 3 }
```
Объяснение: Оператор `...` можно использовать для объединения объектов.
---
15. Деструктуризация и переопределение значений
⌛ Задача: Переопределите значение `a` из объекта.
🎯 Решение:
```javascript
const obj = { a: 10, b: 20 };
const { a = 5, b } = obj;

console.log(a); // 10
console.log(b); // 20
```
Объяснение: Значения по умолчанию используются только если свойства равны `undefined`.
---
16. Деструктуризация с функцией `rest`
⌛ Задача: Извлеките одно свойство, а остальные соберите в отдельный объект.
🎯 Решение:
```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```
Объяснение: Оператор `...` собирает оставшиеся свойства в объект.
---
17. Деструктуризация и переименование с массивами
⌛ Задача: Извлеките второй элемент массива и назовите его `second`.
🎯 Решение:
```javascript
const arr = [10, 20, 30];
const [, second] = arr;

console.log(second); // 20
```
Объяснение: Вы можете использовать деструктуризацию с переименованием и пропуском элементов.
---------------------
⋙ ❍ Модули:
---
1. Экспорт и импорт простого значения
⌛ Задача: Экспортируйте и импортируйте число `42` из одного файла в другой.
🎯 Решение:
```javascript
// math.js
export const answer = 42;

// app.js
import { answer } from './math';

console.log(answer); // 42
```
Объяснение: `export` позволяет экспортировать переменные, функции и классы, а `import` — подключать их в другие модули.
---
2. Экспорт по умолчанию
⌛ Задача: Экспортируйте функцию `greet` как экспорт по умолчанию.
🎯 Решение:
```javascript
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// app.js
import greet from './greet';

console.log(greet('Alice')); // "Hello, Alice!"
```
Объяснение: Экспорт по умолчанию позволяет импортировать без использования фигурных скобок.
---
3. Именованный экспорт нескольких переменных
⌛ Задача: Экспортируйте две переменные и импортируйте их в другом модуле.
🎯 Решение:
```javascript
// constants.js
export const PI = 3.14;
export const E = 2.71;

// app.js
import { PI, E } from './constants';

console.log(PI, E); // 3.14 2.71
```
Объяснение: Именованный экспорт позволяет экспортировать несколько значений из одного файла.
---
4. Импорт с переименованием
⌛ Задача: Импортируйте переменную `PI` с новым именем.
🎯 Решение:
```javascript
// constants.js
export const PI = 3.14;

// app.js
import { PI as CirclePI } from './constants';

console.log(CirclePI); // 3.14
```
Объяснение: `as` позволяет переименовывать импортируемые переменные.
---
5. Динамический импорт
⌛ Задача: Импортируйте модуль динамически.
🎯 Решение:
```javascript
// math.js
export const multiply = (a, b) => a * b;

// app.js
async function loadMultiply() {
  const math = await import('./math');
  console.log(math.multiply(2, 3)); // 6
}

loadMultiply();
```
Объяснение: Динамический импорт используется для ленивой загрузки модулей.
---
6. Групповой экспорт
⌛ Задача: Экспортируйте все функции из файла и импортируйте их в другой модуль.
🎯 Решение:
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import * as math from './math';

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```
Объяснение: Использование `* as` позволяет импортировать все экспортированные значения в виде объекта.
---
7. Комбинированный экспорт
⌛ Задача: Экспортируйте переменные как именованные и по умолчанию.
🎯 Решение:
```javascript
// data.js
export const name = 'Alice';
export const age = 25;
export default { name, age };

// app.js
import user, { name, age } from './data';

console.log(user); // { name: 'Alice', age: 25 }
console.log(name, age); // Alice 25
```
Объяснение: Вы можете комбинировать экспорт по умолчанию с именованными.
---
8. Импорт из нескольких модулей
⌛ Задача: Импортируйте значения из двух разных файлов.
🎯 Решение:
```javascript
// file1.js
export const foo = 'foo';

// file2.js
export const bar = 'bar';

// app.js
import { foo } from './file1';
import { bar } from './file2';

console.log(foo, bar); // "foo bar"
```
Объяснение: Модули могут быть подключены из разных файлов.
---
9. Импорт React и JSX
⌛ Задача: Импортируйте `React` и создайте компонент.
🎯 Решение:
```javascript
// App.js
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```
Объяснение: `React` используется для работы с JSX, который преобразуется в JavaScript.
---
10. Переэкспорт модулей
⌛ Задача: Экспортируйте содержимое одного модуля через другой.
🎯 Решение:
```javascript
// utils.js
export const add = (a, b) => a + b;

// index.js
export * from './utils';

// app.js
import { add } from './index';

console.log(add(2, 3)); // 5
```
Объяснение: Переэкспорт удобен для создания центрального файла экспорта.
---
11. Экспорт класса
⌛ Задача: Экспортируйте класс и импортируйте его.
🎯 Решение:
```javascript
// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js
import User from './User';

const user = new User('Alice');
console.log(user.name); // Alice
```
Объяснение: Классы можно экспортировать так же, как и функции или переменные.
---
12. Ленивая загрузка компонента React
⌛ Задача: Загрузите компонент React динамически.
🎯 Решение:
```javascript
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
```
Объяснение: `React.lazy` позволяет лениво загружать компоненты.
---
13. Импорт JSON-файла
⌛ Задача: Импортируйте данные из JSON-файла.
🎯 Решение:
```javascript
// data.json
{
  "name": "Alice",
  "age": 25
}

// app.js
import data from './data.json';

console.log(data.name); // Alice
console.log(data.age); // 25
```
Объяснение: JSON-файлы можно импортировать как модули.
---
14. Использование алиасов
⌛ Задача: Настройте алиас для модуля.
🎯 Решение:
1. В `webpack.config.js`:
   ```javascript
   resolve: {
     alias: {
       '@components': '/src/components',
     },
   }
   ```
2. В коде:
   ```javascript
   import Header from '@components/Header';
   ```
Объяснение: Алиасы упрощают импорт модулей с длинными путями.
---
15. Модуль утилит
⌛ Задача: Создайте модуль, содержащий несколько утилит.
🎯 Решение:
```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './utils';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```
Объяснение: Утилиты удобно группировать в модули.
---
16. Использование модуля в браузере
⌛ Задача: Создайте ES-модуль, который подключается в браузере.
🎯 Решение:
```javascript
// math.js
export const square = x => x ** 2;

// index.html
<script type="module">
  import { square } from './math.js';
  console.log(square(4)); // 16
</script>
```
Объяснение: В браузере можно использовать модульные скрипты.
---
17. Работа с внешними библиотеками
⌛ Задача: Импортируйте функцию из внешней библиотеки.
🎯 Решение:
```javascript
// Установите lodash: npm install lodash
import _ from 'lodash';

console.log(_.capitalize('hello')); // "Hello"
```
Объяснение: Модули из `node_modules` импортируются так же, как локальные файлы.
---------------------
⋙ ❍ Другое в (ES6+):
---
1. Использование стрелочных функций
⌛ Задача: Напишите функцию, которая принимает два аргумента и возвращает их сумму, используя стрелочную функцию.
🎯 Решение:
```javascript
const sum = (a, b) => a + b;

console.log(sum(3, 5)); // 8
```
Объяснение:
- Стрелочные функции имеют более короткий синтаксис, чем обычные функции, и не имеют собственного контекста `this`.
---
2. Деструктуризация объектов
⌛ Задача: Используйте деструктуризацию для получения значений из объекта.
🎯 Решение:
```javascript
const person = { name: "Alice", age: 25 };

const { name, age } = person;

console.log(name, age); // "Alice", 25
```
Объяснение:
- Деструктуризация позволяет извлекать значения из объектов или массивов в переменные.
---
3. Деструктуризация массивов
⌛ Задача: Используйте деструктуризацию для получения значений из массива.
🎯 Решение:
```javascript
const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log(first, second, third); // 1, 2, 3
```
Объяснение:
- Деструктуризация массива позволяет присваивать элементы массива в переменные.
---
4. Шаблонные строки
⌛ Задача: Используйте шаблонные строки для вывода имени и возраста.
🎯 Решение:
```javascript
const name = "Bob";
const age = 30;

console.log(`Name: ${name}, Age: ${age}`); // "Name: Bob, Age: 30"
```
Объяснение:
- Шаблонные строки позволяют вставлять переменные в строки, используя синтаксис `${}`.
---
5. Оператор расширения (Spread)
⌛ Задача: Используйте оператор расширения для копирования массива и добавления нового элемента.
🎯 Решение:
```javascript
const arr = [1, 2, 3];

const newArr = [...arr, 4];

console.log(newArr); // [1, 2, 3, 4]
```
Объяснение:
- Оператор `...` позволяет копировать элементы массива и добавлять новые элементы.
---
6. Оператор остаточных параметров (Rest)
⌛ Задача: Напишите функцию, которая принимает любое количество аргументов и возвращает их сумму, используя остаточные параметры.
🎯 Решение:
```javascript
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(sum(1, 2, 3, 4)); // 10
```
Объяснение:
- Оператор `...` используется для сбора оставшихся аргументов в массив.
---
7. Модули в JavaScript (ES6)
⌛ Задача: Разделите код на два файла с использованием ES6 модулей.
🎯 Решение:
file1.js:
```javascript
export const greet = (name) => `Hello, ${name}!`;
```

file2.js:
```javascript
import { greet } from './file1.js';

console.log(greet("Alice")); // "Hello, Alice!"
```
Объяснение:
- `export` используется для экспорта функций или переменных из модуля.
- `import` используется для импорта из других модулей.
---
8. Классы в ES6
⌛ Задача: Напишите класс, который содержит метод для вывода имени.
🎯 Решение:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet(); // "Hello, my name is Alice"
```
Объяснение:
- В ES6 классы были добавлены как синтаксический сахар для создания объектов и работы с наследованием.
---
9. Promise (Асинхронный код)
⌛ Задача: Напишите функцию, которая возвращает промис, разрешающийся через 2 секунды.
🎯 Решение:
```javascript
function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
}

delay().then(message => console.log(message)); // "Resolved after 2 seconds"
```
Объяснение:
- `Promise` используется для асинхронных операций, и метод `then()` выполняется, когда промис резолвится.
---
10. Async/Await (Асинхронность с использованием async/await)
⌛ Задача: Напишите асинхронную функцию, которая ждёт 2 секунды перед выводом сообщения.
🎯 Решение:
```javascript
async function asyncFunction() {
  const result = await new Promise(resolve => {
    setTimeout(() => resolve("Resolved after 2 seconds"), 2000);
  });

  console.log(result); // "Resolved after 2 seconds"
}

asyncFunction();
```
Объяснение:
- `async/await` предоставляет более читаемый и удобный синтаксис для работы с асинхронными операциями.
---
11. Использование `Array.prototype.find()`
⌛ Задача: Найдите первый элемент массива, который больше 10.
🎯 Решение:
```javascript
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);

console.log(found); // 12
```
Объяснение:
- Метод `find()` возвращает первый элемент массива, который удовлетворяет условию в функции.
---
12. Использование `Array.prototype.filter()`
⌛ Задача: Отфильтруйте элементы массива, оставив только те, которые больше 10.
🎯 Решение:
```javascript
const numbers = [5, 12, 8, 130, 44];

const filtered = numbers.filter(num => num > 10);

console.log(filtered); // [12, 130, 44]
```
Объяснение:
- Метод `filter()` создает новый массив, содержащий все элементы, которые удовлетворяют условию.
---
13. Использование `Array.prototype.map()`
⌛ Задача: Преобразуйте массив чисел в массив их квадратов.
🎯 Решение:
```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16, 25]
```
Объяснение:
- Метод `map()` позволяет преобразовать каждый элемент массива с помощью функции.
---
14. Использование `Object.assign()` для клонирования объектов
⌛ Задача: Клонируйте объект, используя `Object.assign()`.
🎯 Решение:
```javascript
const original = { name: 'Alice', age: 25 };

const clone = Object.assign({}, original);

console.log(clone); // { name: 'Alice', age: 25 }
```
Объяснение:
- Метод `Object.assign()` используется для копирования свойств одного объекта в другой.
---
15. Преобразование строки в массив с использованием `split()`
⌛ Задача: Разбейте строку на массив слов.
🎯 Решение:
```javascript
const str = "Hello world, how are you?";
const words = str.split(" ");

console.log(words); // ["Hello", "world,", "how", "are", "you?"]
```
Объяснение:
- Метод `split()` разделяет строку на массив по указанному разделителю.
---
16. Применение `Object.entries()` для объекта
⌛ Задача: Преобразуйте объект в массив его пар ключ-значение.
🎯 Решение:
```javascript
const person = { name: "Alice", age: 25 };

const entries = Object.entries(person);

console.log(entries); // [["name", "Alice"], ["age", 25]]
```
Объяснение:
- `Object.entries()` возвращает массив, содержащий пары ключ-значение объекта.
---
17. Использование `for...of` для итерации по массиву
⌛ Задача: Используйте цикл `for...of` для вывода всех элементов массива.
🎯 Решение:
```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```
Объяснение:
- Цикл `for...of` позволяет легко итерировать по элементам массива или других итерируемых объектов.
---
Резюме:
Эти задачи охватывают ключевые нововведения в JavaScript (ES6+), такие как:
- Стрелочные функции, деструктуризация, шаблонные строки.
- Модули и классы.
- Асинхронный код с использованием `Promise` и `async/await`.
- Новые методы для работы с массивами и объектами: `find()`, `map()`, `filter()`, `Object.entries()`, `Object.assign()`.
---------------------
⋙ ❍ Работа с DOM:
-----
⋙ ❍ Поиск элементов:
В JavaScript можно находить элементы на странице с использованием различных методов. Вот основные варианты:
1. По ID
Метод `document.getElementById()` используется для поиска элемента с определённым `id`.
```javascript
const element = document.getElementById('myId');
console.log(element);
```
Объяснение: Возвращает первый элемент с указанным `id`.
---
2. По имени класса
Метод `document.getElementsByClassName()` возвращает HTMLCollection всех элементов с определённым классом.
```javascript
const elements = document.getElementsByClassName('myClass');
console.log(elements); // HTMLCollection
```
Объяснение: Возвращает "живую" коллекцию элементов.
---
3. По имени тега
Метод `document.getElementsByTagName()` возвращает все элементы с указанным тегом.
```javascript
const elements = document.getElementsByTagName('div');
console.log(elements); // HTMLCollection
```
Объяснение: Используется для выбора всех элементов определённого тега.
---
4. Универсальный поиск с querySelector
Метод `document.querySelector()` возвращает первый элемент, соответствующий указанному CSS-селектору.
```javascript
const element = document.querySelector('.myClass');
console.log(element); // Первый элемент с классом myClass
```
Объяснение: Очень гибкий метод для выбора элемента по любому CSS-селектору.
---
5. Множественный выбор с querySelectorAll
Метод `document.querySelectorAll()` возвращает статический NodeList всех элементов, соответствующих CSS-селектору.
```javascript
const elements = document.querySelectorAll('.myClass');
console.log(elements); // NodeList
```
Объяснение: Удобен для работы с группой элементов.
---
6. По атрибуту
Используйте `querySelector` или `querySelectorAll` для поиска по атрибуту.
```javascript
const element = document.querySelector('[data-id="123"]');
console.log(element);
```
Объяснение: CSS-селекторы позволяют искать элементы по произвольным атрибутам.
---
7. По имени элемента формы
Метод `document.getElementsByName()` возвращает все элементы с указанным атрибутом `name`.
```javascript
const elements = document.getElementsByName('username');
console.log(elements); // NodeList
```
Объяснение: Используется для работы с формами.
---
8. По отношению к другому элементу
Вы можете использовать `children`, `parentNode`, `nextElementSibling` и другие свойства DOM для поиска элементов относительно другого.
```javascript
const parent = document.getElementById('parent');
const child = parent.querySelector('.child');
console.log(child);
```
Объяснение: Эти методы помогают находить элементы относительно их местоположения в DOM.
---
9. По текстовому содержимому
Хотя JavaScript напрямую не предоставляет метод для поиска по тексту, можно использовать `textContent` или `innerText`.
```javascript
const elements = Array.from(document.querySelectorAll('p')).filter(el => el.textContent.includes('Hello'));
console.log(elements);
```
Объяснение: Используется для фильтрации элементов по тексту.
---
10. Использование XPath
Метод `document.evaluate()` позволяет выполнять поиск с помощью XPath.
```javascript
const xpathResult = document.evaluate('//div[@class="myClass"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
console.log(xpathResult.singleNodeValue);
```
Объяснение: XPath — мощный инструмент для поиска сложных элементов.
---
11. По пользовательскому атрибуту
Для кастомных атрибутов можно использовать `querySelector`.
```javascript
const element = document.querySelector('[data-custom="value"]');
console.log(element);
```
Объяснение: CSS-селекторы поддерживают кастомные атрибуты.
---
12. По контенту (например, тексту кнопки)
Если нужно найти элемент по его содержимому:
```javascript
const button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'Click Me');
console.log(button);
```
Объяснение: Это полезно, если идентификаторы или классы отсутствуют, но известен текст.
---
13. Использование библиотек (например, jQuery)
Если вы используете jQuery, поиск элементов значительно упрощается:
```javascript
const element = $('.myClass'); // Поиск по классу
console.log(element);
```
Объяснение: Библиотеки предоставляют более удобные методы для работы с DOM.
---
14. По свойствам элементов
Можно использовать `querySelector` в сочетании с JavaScript для фильтрации по свойствам:
```javascript
const element = Array.from(document.querySelectorAll('input')).find(el => el.type === 'text');
console.log(element);
```
Объяснение: Позволяет искать элементы с конкретными значениями свойств.
---
15. По составным селекторам
Вы можете комбинировать селекторы для более точного поиска:
```javascript
const element = document.querySelector('div.myClass > span.highlight');
console.log(element);
```
Объяснение: CSS-селекторы поддерживают сложные составные запросы.
---
16. По классу с использованием contains
Если нужно найти элемент, у которого есть определённый класс:
```javascript
const element = Array.from(document.querySelectorAll('.myClass')).find(el => el.classList.contains('special'));
console.log(element);
```
Объяснение: Это удобно, если элемент может содержать несколько классов.
---
17. По ближайшему родителю (closest)
Метод `closest` ищет ближайший родительский элемент, соответствующий селектору.
```javascript
const child = document.querySelector('.child');
const parent = child.closest('.parent');
console.log(parent);
```
Объяснение: `closest` поднимается вверх по дереву DOM в поисках соответствующего элемента.
---------------------
⋙ ❍ Изменение атрибутов:
---
1. Добавление атрибута к элементу
⌛ Задача: Добавьте атрибут `id` с значением `newId` к элементу.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.setAttribute('id', 'newId');

console.log(element.id); // "newId"
```
Объяснение: Метод `setAttribute` используется для добавления или изменения значения атрибута.
---
2. Получение значения атрибута
⌛ Задача: Получите значение атрибута `data-info` у элемента.
🎯 Решение:
```javascript
const element = document.querySelector('div');
const dataInfo = element.getAttribute('data-info');

console.log(dataInfo);
```
Объяснение: Метод `getAttribute` возвращает значение указанного атрибута.
---
3. Удаление атрибута
⌛ Задача: Удалите атрибут `disabled` у кнопки.
🎯 Решение:
```javascript
const button = document.querySelector('button');
button.removeAttribute('disabled');

console.log(button.hasAttribute('disabled')); // false
```
Объяснение: Метод `removeAttribute` удаляет указанный атрибут.
---
4. Проверка наличия атрибута
⌛ Задача: Проверьте, есть ли у элемента атрибут `data-visible`.
🎯 Решение:
```javascript
const element = document.querySelector('div');
const hasAttr = element.hasAttribute('data-visible');

console.log(hasAttr); // true или false
```
Объяснение: Метод `hasAttribute` возвращает `true`, если атрибут существует.
---
5. Изменение значения атрибута
⌛ Задача: Измените значение атрибута `src` у изображения.
🎯 Решение:
```javascript
const img = document.querySelector('img');
img.setAttribute('src', 'new-image.jpg');

console.log(img.src); // Абсолютный URL нового изображения
```
Объяснение: Используйте `setAttribute` для изменения значения атрибута.
---
6. Работа с `dataset`
⌛ Задача: Добавьте значение `active` в атрибут `data-status`.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.dataset.status = 'active';

console.log(element.dataset.status); // "active"
```
Объяснение: `dataset` — это объект для работы с `data-*` атрибутами.
---
7. Удаление атрибута через `dataset`
⌛ Задача: Удалите атрибут `data-status`.
🎯 Решение:
```javascript
const element = document.querySelector('div');
delete element.dataset.status;

console.log(element.hasAttribute('data-status')); // false
```
Объяснение: С помощью `delete` можно удалить `data-*` атрибут.
---
8. Динамическое добавление нескольких атрибутов
⌛ Задача: Добавьте атрибуты `class` и `title` к элементу.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.setAttribute('class', 'highlight');
element.setAttribute('title', 'Hover text');

console.log(element.className); // "highlight"
console.log(element.title); // "Hover text"
```
Объяснение: `setAttribute` позволяет добавлять сразу несколько атрибутов.
---
9. Добавление CSS-класса через атрибуты
⌛ Задача: Добавьте класс `active` к элементу через `classList`.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.classList.add('active');

console.log(element.className); // Содержит "active"
```
Объяснение: `classList` — это удобный способ работы с классами элемента.
---
10. Проверка наличия класса
⌛ Задача: Проверьте, содержит ли элемент класс `hidden`.
🎯 Решение:
```javascript
const element = document.querySelector('div');
const hasClass = element.classList.contains('hidden');

console.log(hasClass); // true или false
```
Объяснение: Метод `classList.contains` возвращает `true`, если класс присутствует.
---
11. Удаление класса
⌛ Задача: Удалите класс `highlight` у элемента.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.classList.remove('highlight');

console.log(element.className); // Класс "highlight" удалён
```
Объяснение: `classList.remove` удаляет указанный класс.
---
12. Переключение класса
⌛ Задача: Переключите класс `active` на элементе.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.classList.toggle('active');

console.log(element.className); // "active" добавлен или удалён
```
Объяснение: `classList.toggle` добавляет класс, если его нет, или удаляет, если он есть.
---
13. Изменение атрибута `style`
⌛ Задача: Измените цвет текста элемента на красный.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.style.color = 'red';

console.log(element.style.color); // "red"
```
Объяснение: `style` позволяет управлять инлайновыми стилями элемента.
---
14. Изменение нескольких стилей
⌛ Задача: Установите ширину и высоту элемента.
🎯 Решение:
```javascript
const element = document.querySelector('div');
element.style.width = '100px';
element.style.height = '50px';

console.log(element.style.cssText); // "width: 100px; height: 50px;"
```
Объяснение: Используйте `style` для установки нескольких CSS-свойств.
---
15. Изменение атрибута через ссылку
⌛ Задача: Измените значение ссылки (`href`) у тега `<a>`.
🎯 Решение:
```javascript
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');

console.log(link.href); // "https://example.com"
```
Объяснение: `setAttribute` изменяет значение атрибутов тега.
---
16. Добавление атрибута для нескольких элементов
⌛ Задача: Добавьте атрибут `data-index` ко всем элементам списка.
🎯 Решение:
```javascript
const items = document.querySelectorAll('li');
items.forEach((item, index) => {
  item.setAttribute('data-index', index);
});

console.log(items[0].dataset.index); // "0"
```
Объяснение: Используйте цикл для добавления атрибута ко множеству элементов.
---
17. Чтение и изменение `checked` у чекбокса
⌛ Задача: Установите флажок у чекбокса.
🎯 Решение:
```javascript
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.checked = true;

console.log(checkbox.checked); // true
```
Объяснение: Свойство `checked` позволяет управлять состоянием флажка.
---------------------
⋙ ❍ Обработка событий:
---
Часть 1: Обработка событий в Vanilla JS
---
1. Простое событие `click`
⌛ Задача: Добавьте обработчик события `click` к кнопке, чтобы вывести текст в консоль.
🎯 Решение:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked');
});
```
Объяснение: `addEventListener` добавляет обработчик события к элементу.
---
2. Удаление обработчика
⌛ Задача: Удалите обработчик события `click` у кнопки после первого клика.
🎯 Решение:
```javascript
const button = document.querySelector('button');
const handleClick = () => {
  console.log('Button clicked');
  button.removeEventListener('click', handleClick);
};
button.addEventListener('click', handleClick);
```
Объяснение: `removeEventListener` удаляет обработчик события.
---
3. Событие `input`
⌛ Задача: Отслеживайте изменения в поле ввода и выводите их в консоль.
🎯 Решение:
```javascript
const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  console.log(event.target.value);
});
```
Объяснение: Событие `input` срабатывает при каждом изменении значения в поле.
---
4. Событие `keydown`
⌛ Задача: Выведите код нажатой клавиши в консоль.
🎯 Решение:
```javascript
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```
Объяснение: Событие `keydown` срабатывает при нажатии клавиши.
---
5. Прекращение всплытия
⌛ Задача: Остановите всплытие события при клике по дочернему элементу.
🎯 Решение:
```javascript
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', () => console.log('Parent clicked'));
child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked');
});
```
Объяснение: `stopPropagation` предотвращает всплытие события к родительским элементам.
---
6. Прекращение действия по умолчанию
⌛ Задача: Отмените переход по ссылке при клике.
🎯 Решение:
```javascript
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Default action prevented');
});
```
Объяснение: `preventDefault` отменяет действие, назначенное по умолчанию для элемента.
---
7. Делегирование событий
⌛ Задача: Обрабатывайте клики на элементах списка через делегирование.
🎯 Решение:
```javascript
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`Clicked on item: ${event.target.textContent}`);
  }
});
```
Объяснение: Делегирование позволяет обрабатывать события для потомков через общий родительский элемент.
---
8. Событие `mousemove`
⌛ Задача: Отслеживайте координаты мыши.
🎯 Решение:
```javascript
document.addEventListener('mousemove', (event) => {
  console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});
```
Объяснение: Событие `mousemove` срабатывает при каждом движении мыши.
---
9. Один раз обработчик
⌛ Задача: Обработайте событие только один раз.
🎯 Решение:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked');
}, { once: true });
```
Объяснение: Опция `{ once: true }` автоматически удаляет обработчик после первого срабатывания.
---
10. Событие `change`
⌛ Задача: Отслеживайте изменение значения у чекбокса.
🎯 Решение:
```javascript
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', (event) => {
  console.log(`Checked: ${event.target.checked}`);
});
```
Объяснение: Событие `change` срабатывает при изменении состояния элемента.
---------
Часть 2: Обработка событий в React
---
11. Простое событие `onClick`
⌛ Задача: Добавьте обработчик события `onClick` к кнопке.
🎯 Решение:
```javascript
function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```
Объяснение: В React события обрабатываются через пропсы, такие как `onClick`.
---
12. Событие `onChange`
⌛ Задача: Отслеживайте изменения в поле ввода.
🎯 Решение:
```javascript
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}
```
Объяснение: Используйте `onChange` для работы с событиями изменения в элементах формы.
---
13. Передача параметров в обработчик
⌛ Задача: Передайте параметр в обработчик события.
🎯 Решение:
```javascript
function App() {
  const handleClick = (name) => {
    console.log(`Hello, ${name}`);
  };

  return <button onClick={() => handleClick('Alice')}>Greet</button>;
}
```
Объяснение: Передача параметров через стрелочную функцию позволяет вызывать обработчик с аргументами.
---
14. Использование `preventDefault`
⌛ Задача: Отмените действие по умолчанию у ссылки.
🎯 Решение:
```javascript
function App() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Link click prevented');
  };

  return <a href="https://example.com" onClick={handleClick}>Click me</a>;
}
```
Объяснение: В React нужно явно вызвать `preventDefault` в обработчике.
---
15. Событие `onSubmit`
⌛ Задача: Обработайте отправку формы.
🎯 Решение:
```javascript
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение: Событие `onSubmit` обрабатывает отправку формы.
---
16. Событие `onMouseEnter`
⌛ Задача: Реализуйте подсказку при наведении на элемент.
🎯 Решение:
```javascript
function App() {
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  return <div onMouseEnter={handleMouseEnter}>Hover over me</div>;
}
```
Объяснение: `onMouseEnter` срабатывает при наведении курсора на элемент.
---
17. Условная обработка события
⌛ Задача: Выполните обработчик события только при выполнении условия.
🎯 Решение:
```javascript
function App() {
  const isEnabled = true;

  const handleClick = () => {
    if (isEnabled) {
      console.log('Action executed');
    }
  };

  return <button onClick={handleClick}>Conditional Click</button>;
}
```
Объяснение: Условие проверяется внутри обработчика перед выполнением действия.
---------------------
⋙ ❍ Объекты:
---
1. Проверка, является ли объект пустым
⌛ Задача: Напишите функцию, которая проверяет, является ли объект пустым (не содержит собственных свойств).
Пример:
```javascript
isEmpty({}); // true
isEmpty({ name: 'Alex' }); // false
```
🎯 Решение:
```javascript
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
```
Объяснение:
- `Object.keys(obj)` возвращает массив всех собственных ключей объекта.
- Если массив пустой (`.length === 0`), значит, объект не содержит свойств.
Сложность: O(n), где `n` — количество свойств в объекте.
---
2. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта, где значения второго объекта перекрывают значения первого при совпадении ключей.
Пример:
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
mergeObjects(obj1, obj2); // { a: 1, b: 3, c: 4 }
```
🎯 Решение:
```javascript
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
```
Объяснение:
- Оператор расширения `{ ...obj1, ...obj2 }` копирует все свойства из `obj1`, затем добавляет свойства из `obj2`, перезаписывая совпадающие ключи.
Сложность: O(n + m), где `n` и `m` — количество свойств в объектах.
---
3. Перебор всех ключей и значений объекта
⌛ Задача: Напишите функцию, которая выводит в консоль все ключи и значения объекта.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
logObject(obj);
// Вывод:
// name: Alex
// age: 30
```
🎯 Решение:
```javascript
const logObject = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};
```
Объяснение:
- `Object.entries(obj)` возвращает массив пар `[ключ, значение]`, который мы обходим с помощью `for...of`.
Сложность: O(n), где `n` — количество свойств в объекте.
---
4. Глубокое сравнение двух объектов
⌛ Задача: Напишите функцию, которая проверяет, равны ли два объекта, включая вложенные объекты.
Пример:
```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
deepEqual(obj1, obj2); // true
```
🎯 Решение:
```javascript
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
};
```
Объяснение:
- Функция рекурсивно сравнивает все свойства объектов.
- Если объект содержит вложенные объекты, вызываем `deepEqual()` снова.
Сложность: O(n), где `n` — количество свойств, включая вложенные.
---
5. Подсчёт количества вхождений значений в объекте
⌛ Задача: Напишите функцию, которая считает, сколько раз встречаются определённые значения в объекте.
Пример:
```javascript
const obj = { a: 'apple', b: 'banana', c: 'apple' };
countOccurrences(obj); // { apple: 2, banana: 1 }
```
🎯 Решение:
```javascript
const countOccurrences = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
```
Объяснение:
- `Object.values(obj)` возвращает массив всех значений объекта.
- `reduce()` проходит по массиву и подсчитывает, сколько раз встречается каждое значение.
Сложность: O(n), где `n` — количество свойств в объекте.
---
6. Фильтрация объекта по предикату
⌛ Задача: Напишите функцию, которая удаляет из объекта свойства, не соответствующие заданному условию.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 3 };
filterObject(obj, value => value > 1); // { b: 2, c: 3 }
```
🎯 Решение:
```javascript
const filterObject = (obj, predicate) => {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
};
```
Объяснение:
- `Object.entries(obj)` создаёт массив пар `[ключ, значение]`.
- `filter()` оставляет только те пары, которые удовлетворяют предикату.
- `Object.fromEntries()` собирает объект обратно.
Сложность: O(n), где `n` — количество свойств в объекте.
---
7. Преобразование объекта в массив
⌛ Задача: Напишите функцию, которая преобразует объект в массив вида `{ key: 'ключ', value: 'значение' }`.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
objectToArray(obj);
// [{ key: 'name', value: 'Alex' }, { key: 'age', value: 30 }]
```
🎯 Решение:
```javascript
const objectToArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
```
Объяснение:
- `Object.entries(obj)` создаёт массив пар `[ключ, значение]`.
- `map()` преобразует каждую пару в объект `{ key, value }`.
Сложность: O(n), где `n` — количество свойств в объекте.
Вывод
Эти задачи часто встречаются в реальных проектах и на собеседованиях. Важно уметь:
- Перебирать объекты (`Object.keys()`, `Object.values()`, `Object.entries()`).
- Манипулировать свойствами (`delete`, `spread-оператор` и `Object.assign()`).
- Работать с вложенными структурами (глубокое сравнение и копирование).
---
1. Глубокое копирование объекта
⌛ Задача: Напишите функцию, которая создаёт глубокую копию объекта.
Пример:
```javascript
const obj = { a: 1, b: { c: 2 } };
const copy = deepClone(obj);
copy.b.c = 42;
console.log(obj.b.c); // 2 (исходный объект не изменился)
```
🎯 Решение:
```javascript
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
```
Объяснение:
- `JSON.stringify(obj)` превращает объект в строку.
- `JSON.parse()` создаёт новый объект из строки.
- Недостаток: теряются функции и `undefined`.
Альтернативный метод (рекурсия, работает с функциями):
```javascript
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
---
2. Подсчёт количества уникальных значений в объекте
⌛ Задача: Напишите функцию, которая подсчитывает, сколько раз встречается каждое значение в объекте.
Пример:
```javascript
const obj = { a: 'apple', b: 'banana', c: 'apple', d: 'banana', e: 'cherry' };
countValues(obj); // { apple: 2, banana: 2, cherry: 1 }
```
🎯 Решение:
```javascript
const countValues = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
```
Сложность: O(n).
---
3. Инвертировать ключи и значения в объекте
⌛ Задача: Напишите функцию, которая меняет местами ключи и значения в объекте.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 3 };
invertObject(obj); // { "1": "a", "2": "b", "3": "c" }
```
🎯 Решение:
```javascript
const invertObject = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
};
```
Сложность: O(n).
---
4. Найти ключ по значению
⌛ Задача: Напишите функцию, которая находит ключ по значению.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
findKeyByValue(obj, 30); // 'age'
```
🎯 Решение:
```javascript
const findKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key] === value) || null;
};
```
Сложность: O(n).
---
5. Группировка массива объектов по значению ключа
⌛ Задача: Напишите функцию, которая группирует массив объектов по значению ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' },
];
groupBy(people, 'city');
```
Выход:
```javascript
{
  'Moscow': [ { name: 'Alex', city: 'Moscow' }, { name: 'Ivan', city: 'Moscow' } ],
  'New York': [ { name: 'Joe', city: 'New York' } ]
}
```
🎯 Решение:
```javascript
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = acc[item[key]] || [];
    acc[item[key]].push(item);
    return acc;
  }, {});
};
```
Сложность: O(n).
---
6. Проверить, есть ли в объекте дубликаты значений
⌛ Задача: Напишите функцию, которая проверяет, есть ли в объекте повторяющиеся значения.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 1 };
hasDuplicates(obj); // true
```
🎯 Решение:
```javascript
const hasDuplicates = (obj) => {
  const values = Object.values(obj);
  return new Set(values).size !== values.length;
};
```
Сложность: O(n).
---
7. Найти максимальное значение в объекте
⌛ Задача: Напишите функцию, которая находит максимальное значение в объекте.
Пример:
```javascript
const obj = { a: 10, b: 20, c: 5 };
findMaxValue(obj); // 20
```
🎯 Решение:
```javascript
const findMaxValue = (obj) => {
  return Math.max(...Object.values(obj));
};
```
Сложность: O(n).
---
8. Фильтрация вложенного объекта
⌛ Задача: Напишите функцию, которая удаляет из объекта все `null` и `undefined` значения, включая вложенные объекты.
Пример:
```javascript
const obj = { a: 1, b: null, c: { d: 2, e: undefined } };
cleanObject(obj);
```
Выход:
```javascript
{ a: 1, c: { d: 2 } }
```
🎯 Решение:
```javascript
const cleanObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;

  return Object.entries(obj)
    .filter(([_, value]) => value !== null && value !== undefined)
    .reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'object' ? cleanObject(value) : value;
      return acc;
    }, {});
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
Вывод
Эти задачи охватывают ключевые концепции работы с объектами в JavaScript:
✅ Перебор (`Object.keys()`, `Object.values()`, `Object.entries()`).
✅ Глубокое копирование и сравнение.
✅ Фильтрация и группировка данных.
✅ Поиск и манипуляция значениями.
---------------------
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
1. Преобразование массива объектов в массив значений
⌛ Задача: Напишите функцию, которая извлекает все значения определенного ключа из массива объектов.
Пример:
```javascript
const people = [
  { name: 'Alex', age: 30 },
  { name: 'Ivan', age: 25 },
  { name: 'Joe', age: 35 }
];
getValuesByKey(people, 'name'); // ['Alex', 'Ivan', 'Joe']
```
🎯 Решение:
```javascript
const getValuesByKey = (arr, key) => {
  return arr.map(item => item[key]);
};
```
Объяснение:
- Метод `map()` используется для получения массива значений по ключу.
---
2. Умножение всех чисел в массиве на 2
⌛ Задача: Напишите функцию, которая умножает все элементы массива на 2.
Пример:
```javascript
const numbers = [1, 2, 3, 4];
multiplyByTwo(numbers); // [2, 4, 6, 8]
```
🎯 Решение:
```javascript
const multiplyByTwo = (arr) => {
  return arr.map(num => num * 2);
};
```
Объяснение:
- Метод `map()` применяется для умножения каждого элемента массива на 2.
---
3. Фильтрация чисел больше 10
⌛ Задача: Напишите функцию, которая фильтрует числа, большие 10, из массива.
Пример:
```javascript
const numbers = [5, 12, 8, 130, 44];
filterGreaterThanTen(numbers); // [12, 130, 44]
```
🎯 Решение:
```javascript
const filterGreaterThanTen = (arr) => {
  return arr.filter(num => num > 10);
};
```
Объяснение:
- Метод `filter()` используется для извлечения чисел, которые больше 10.
---
4. Преобразование массива строк в их длины
⌛ Задача: Напишите функцию, которая преобразует массив строк в массив их длин.
Пример:
```javascript
const words = ['apple', 'banana', 'cherry'];
getLengths(words); // [5, 6, 6]
```
🎯 Решение:
```javascript
const getLengths = (arr) => {
  return arr.map(word => word.length);
};
```
Объяснение:
- Метод `map()` преобразует строки в их длину с помощью свойства `.length`.
---
5. Подсчёт суммы чисел в массиве
⌛ Задача: Напишите функцию, которая считает сумму всех чисел в массиве.
Пример:
```javascript
const numbers = [1, 2, 3, 4];
sumArray(numbers); // 10
```
🎯 Решение:
```javascript
const sumArray = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};
```
Объяснение:
- Метод `reduce()` аккумулирует сумму всех элементов массива.
---
6. Нахождение самого длинного слова в массиве
⌛ Задача: Напишите функцию, которая находит самое длинное слово в массиве.
Пример:
```javascript
const words = ['apple', 'banana', 'cherry', 'kiwi'];
longestWord(words); // 'banana'
```
🎯 Решение:
```javascript
const longestWord = (arr) => {
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
};
```
Объяснение:
- Метод `reduce()` используется для сравнения длины строк и нахождения самой длинной.
---
7. Фильтрация четных чисел
⌛ Задача: Напишите функцию, которая фильтрует только четные числа из массива.
Пример:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
filterEvenNumbers(numbers); // [2, 4, 6]
```
🎯 Решение:
```javascript
const filterEvenNumbers = (arr) => {
  return arr.filter(num => num % 2 === 0);
};
```
Объяснение:
- Метод `filter()` используется для фильтрации четных чисел с помощью остатка от деления.
---
8. Преобразование объекта в массив ключей
⌛ Задача: Напишите функцию, которая преобразует объект в массив его ключей.
Пример:
```javascript
const person = { name: 'Alex', age: 30, city: 'Moscow' };
getObjectKeys(person); // ['name', 'age', 'city']
```
🎯 Решение:
```javascript
const getObjectKeys = (obj) => {
  return Object.keys(obj);
};
```
Объяснение:
- Метод `Object.keys()` возвращает массив ключей объекта.
---
9. Получение объектов с определённым значением
⌛ Задача: Напишите функцию, которая фильтрует массив объектов по значению ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' }
];
filterByCity(people, 'Moscow'); // [{ name: 'Alex', city: 'Moscow' }, { name: 'Ivan', city: 'Moscow' }]
```
🎯 Решение
```javascript
const filterByCity = (arr, city) => {
  return arr.filter(person => person.city === city);
};
```
Объяснение:
- Метод `filter()` применяется для фильтрации объектов по ключу `city`.
---
10. Преобразование массива объектов в массив строк
⌛ Задача: Напишите функцию, которая преобразует массив объектов в массив строк.
Пример:
```javascript
const people = [
  { name: 'Alex', age: 30 },
  { name: 'Ivan', age: 25 }
];
convertToStringArray(people); // ['Alex is 30 years old', 'Ivan is 25 years old']
```
🎯 Решение:
```javascript
const convertToStringArray = (arr) => {
  return arr.map(person => `${person.name} is ${person.age} years old`);
};
```
Объяснение:
- Метод `map()` преобразует каждый объект в строку.
---
11. Подсчёт количества объектов с одинаковыми значениями по ключу
⌛ Задача: Напишите функцию, которая подсчитывает количество объектов с одинаковыми значениями по ключу.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' }
];
countByCity(people); // { Moscow: 2, New York: 1 }
```
🎯 Решение:
```javascript
const countByCity = (arr) => {
  return arr.reduce((acc, person) => {
    acc[person.city] = (acc[person.city] || 0) + 1;
    return acc;
  }, {});
};
```
Объяснение:
- Метод `reduce()` создаёт объект с подсчётом объектов для каждого города.
---
12. Преобразование массива строк в массив объектов с длиной строк
⌛ Задача: Напишите функцию, которая преобразует массив строк в массив объектов с ключом `length`, указывающим на длину строки.
Пример:
```javascript
const words = ['apple', 'banana', 'cherry'];
getLengthObjects(words); // [{ length: 5 }, { length: 6 }, { length: 6 }]
```
🎯 Решение:
```javascript
const getLengthObjects = (arr) => {
  return arr.map(word => ({ length: word.length }));
};
```
Объяснение:
- Метод `map()` преобразует строки в объекты с их длиной.
---
13. Удаление объектов с определённым значением
⌛ Задача: Напишите функцию, которая удаляет из массива объектов все объекты с определённым значением для ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' }
];
removeByCity(people, 'Moscow'); // [{ name: 'Joe', city: 'New York' }]
```
🎯 Решение:
```javascript
const removeByCity = (arr, city) => {
  return arr.filter(person => person.city !== city);
};
```
Объяснение:
- Метод `filter()` используется для создания нового массива, в который попадут только те объекты, у которых значение по ключу `city` **не равно** переданному значению (в данном случае, `'Moscow'`).
- Мы проверяем условие `person.city !== city`, чтобы оставить только те объекты, которые не соответствуют этому значению.
---
14. Перевод объекта в массив значений с подсчётом уникальности
⌛ Задача: Напишите функцию, которая переведёт объект в массив значений, но каждое значение должно встречаться в массиве только один раз (удаление дубликатов).
Пример:
```javascript
const obj = { a: 1, b: 2, c: 2, d: 3 };
uniqueValues(obj); // [1, 2, 3]
```
🎯 Решение:
```javascript
const uniqueValues = (obj) => {
  return [...new Set(Object.values(obj))];
};
```
Объяснение:
- `Object.values(obj)` — получает массив всех значений объекта.
- `new Set()` удаляет дубликаты из массива (множество не допускает повторений).
- Оператор расширения (`...`) используется для преобразования множества обратно в массив.
---
15. Преобразование массива объектов в объект с ключами как ID
⌛ Задача: Напишите функцию, которая преобразует массив объектов в объект, где ключами будут значения из определённого поля (например, `id`), а значениями — сами объекты.
Пример:
```javascript
const items = [
  { id: 1, name: 'item1', price: 10 },
  { id: 2, name: 'item2', price: 20 },
  { id: 3, name: 'item3', price: 30 }
];
convertToObject(items);
// {
//   1: { id: 1, name: 'item1', price: 10 },
//   2: { id: 2, name: 'item2', price: 20 },
//   3: { id: 3, name: 'item3', price: 30 }
// }
```
🎯 Решение:
```javascript
const convertToObject = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};
```
Объяснение:
- Метод `reduce()` используется для преобразования массива в объект.
- В процессе работы аккумулятор (`acc`) заполняется новыми ключами, где ключом является `id` каждого объекта, а значением — сам объект.
---------------------
⋙ ❍ Концепции компонентов (функциональные и классовые компоненты):
---
1. Основы функциональных компонентов
⌛ Задача: Напишите простейший функциональный компонент, который выводит текст на экран.
Пример:
```javascript
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```
🎯 Решение:
- Функциональный компонент просто возвращает JSX, который будет отрисован на экране.
---
2. Использование пропсов в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который принимает пропс `name` и выводит его в тексте.
Пример:
```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
🎯 Решение:
- Пропсы передаются в функциональный компонент через параметры функции. Здесь мы деструктурируем объект пропсов, чтобы получить `name`.
---
3. Использование состояния в функциональном компоненте (useState)
⌛ Задача: Напишите функциональный компонент, который использует `useState` для хранения и изменения состояния (например, счётчик).
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- Мы используем хук `useState`, чтобы создать состояние и функцию для его обновления. `useState(0)` инициализирует счётчик значением 0.
---
4. Использование эффекта в функциональном компоненте (useEffect)
⌛ Задача: Напишите функциональный компонент, который выводит текст в консоль при каждом рендере компонента.
Пример:
```javascript
import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component rendered');
  });

  return <h1>Check your console!</h1>;
}
```
🎯 Решение:
- Хук `useEffect` выполняет побочные эффекты. Он будет вызываться после каждого рендера компонента.
---
5. Деструктуризация пропсов в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который принимает пропсы, используя деструктуризацию.
Пример:
```javascript
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
}
```
🎯 Решение:
- Пропсы могут быть деструктурированы прямо в аргументах функции, что упрощает доступ к значениям пропсов.
---
6. Классовый компонент с состоянием
⌛ Задача: Напишите классовый компонент с состоянием, который хранит и отображает счётчик.
Пример:
```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
🎯 Решение:
- В классовом компоненте состояние хранится в `this.state`, а для его обновления используется метод `this.setState()`.
- Для обработки событий нужно объявить методы как стрелочные функции, чтобы они не теряли контекст `this`.
---
7. Передача колбэков в пропсах
⌛ Задача: Напишите родительский компонент, который передает функцию в дочерний компонент через пропсы.
Пример:
```javascript
function Parent() {
  const handleClick = () => alert('Button clicked!');
  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
```
🎯 Решение:
- В родительском компоненте передаём функцию в дочерний компонент как пропс, и вызываем её внутри дочернего компонента при клике.
---
8. Обработчик событий в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который обрабатывает событие нажатия кнопки.
Пример:
```javascript
function Button() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
```
🎯 Решение:
- В функциональных компонентах обработчики событий передаются через атрибуты JSX, как в обычном HTML. Событие можно обработать с помощью функции.
---
9. Подключение к жизненному циклу в классовом компоненте (componentDidMount)
⌛ Задача: Напишите классовый компонент, который выводит текст в консоль после монтирования.
Пример:
```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}
```
🎯 Решение:
- В классовом компоненте для работы с жизненным циклом используется метод `componentDidMount()`, который вызывается после монтирования компонента.
---
10. Передача данных из дочернего компонента в родительский
⌛ Задача: Напишите компонент, который передаёт данные из дочернего компонента в родительский через колбэк.
Пример:
```javascript
function Parent() {
  const handleData = (data) => {
    console.log('Received data:', data);
  };

  return <Child sendData={handleData} />;
}

function Child({ sendData }) {
  return <button onClick={() => sendData('Hello, Parent!')}>Send Data</button>;
}
```
🎯 Решение:
- Родительский компонент передает функцию как пропс в дочерний компонент. Дочерний компонент вызывает эту функцию, передавая данные обратно родителю.
---
11. Хук useContext в функциональных компонентах
⌛ Задача: Напишите функциональный компонент, который использует `useContext` для получения данных из контекста.
Пример:
```javascript
import React, { useContext } from 'react';

const UserContext = React.createContext();

function UserProfile() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}

function App() {
  return (
    <UserContext.Provider value={{ name: 'Alice' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
```
🎯 Решение:
- `useContext` позволяет получать значение из контекста, который предоставляется через компонент-поставщик `UserContext.Provider`.
---
12. Передача данных через props в классовом компоненте
⌛ Задача: Напишите классовый компонент, который получает данные через пропсы и отображает их.
Пример:
```javascript
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
🎯 Решение:
- В классовых компонентах пропсы доступны через `this.props`. В данном примере, мы выводим имя, которое передаётся через пропс `name`.
---
13. Использование статических методов в классовых компонентах
⌛ Задача: Напишите классовый компонент с использованием статического метода.
Пример:
```javascript
class MyComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps);
    return null;
  }

  render() {
    return <h1>Static Method Example</h1>;
  }
}
```
🎯 Решение:
- Статические методы, такие как `getDerivedStateFromProps`, могут быть использованы в классовых компонентах для выполнения логики до рендера.
---
14. Условный рендеринг в функциональном компоненте
⌛ Задача: Напишите функциональный компонент, который отображает кнопку, если состояние `isLoggedIn` истинно, иначе — сообщение о необходимости войти в систему.
Пример:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) :
🎯 Решение: Условный рендеринг в функциональном компоненте
Функциональный компонент будет рендерить кнопку "Log out", если пользователь авторизован (`isLoggedIn === true`), и сообщение "Please log in", если нет.
Решение кода:
```javascript
import { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <p>Please log in</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default LoginButton;
```
Объяснение кода:
1. Создаём состояние `isLoggedIn` с помощью `useState(false)`, изначально оно `false` (пользователь не вошёл).
2. Используем тернарный оператор (`? :`) для условного рендеринга:
   - Если `isLoggedIn === true`, показываем кнопку "Log out".
   - Если `isLoggedIn === false`, показываем текст "Please log in".
3. Добавляем кнопку для смены состояния:
   - При нажатии переключает `isLoggedIn` между `true` и `false`.
   - Изменяет текст кнопки между "Log in" и "Log out".
Как это работает?
- Пользователь не вошёл → показывается текст `"Please log in"` и кнопка `"Log in"`.
- Нажатие на `"Log in"` → `isLoggedIn` меняется на `true`, ререндер компонента.
- Теперь показывается → кнопка `"Log out"` и дополнительная кнопка `"Log out"`.
- Нажатие на `"Log out"` → снова меняет `isLoggedIn` на `false`, снова `"Please log in"`.
Вывод:
- Используется `useState()` для хранения состояния авторизации.
- Тернарный оператор (`? :`) управляет рендерингом элементов.
- Кнопка переключает состояние между `"Log in"` и `"Log out"`.
---
15. Условный рендеринг в функциональном компоненте (более сложный пример)
⌛ Задача: Напишите функциональный компонент, который отображает одну из трёх кнопок в зависимости от состояния пользователя: "Login", "Logout" и "Profile", если пользователь залогинен.
Пример:
```javascript
import { useState } from 'react';

function UserAction() {
  const [user, setUser] = useState(null); // Если null - пользователь не залогинен

  const handleLogin = () => setUser({ name: 'John Doe' });
  const handleLogout = () => setUser(null);

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <button>Profile</button>
        </div>
      )}
    </div>
  );
}
```
🎯 Решение:
- Мы используем `useState` для отслеживания состояния пользователя.
- Если состояние пользователя — `null` (т.е. он не залогинен), отображается кнопка "Login".
- Если пользователь залогинен (состояние не `null`), отображаются две кнопки: "Logout" и "Profile".
- Условный рендеринг в React можно делать с помощью тернарного оператора, который позволяет менять вывод JSX в зависимости от состояния компонента.
Этот пример демонстрирует, как можно управлять рендерингом в зависимости от состояния с помощью простого условного рендеринга. Это один из самых распространённых паттернов в React.
---------------------
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
1. Использование `useState` для хранения состояния
⌛ Задача: Напишите компонент, который использует `useState` для хранения счётчика и кнопки для его увеличения.
Пример:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useState(0)` инициализирует состояние счётчика значением 0.
- `setCount(count + 1)` обновляет состояние при клике на кнопку.
---
2. Использование `useEffect` для выполнения побочных эффектов
⌛ Задача: Напишите компонент, который выводит сообщение в консоль при монтировании.
Пример:
```javascript
import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Check your console!</h1>;
}
```
🎯 Решение:
- Хук `useEffect` с пустым массивом зависимостей `[]` выполняется только один раз при монтировании компонента, аналогично `componentDidMount` в классовых компонентах.
---
3. Использование `useEffect` для очистки ресурсов
⌛ Задача: Напишите компонент, который устанавливает таймер, и очищает его при размонтировании компонента.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  return <p>{seconds} seconds</p>;
}
```
🎯 Решение:
- `useEffect` возвращает функцию очистки, которая вызывается при размонтировании компонента. В данном случае мы очищаем таймер.
---
4. Использование `useMemo` для оптимизации вычислений
⌛ Задача: Напишите компонент, который выполняет тяжёлые вычисления, и использует `useMemo` для оптимизации.
Пример:
```javascript
import { useMemo, useState } from 'react';

function FibonacciCalculator() {
  const [number, setNumber] = useState(0);

  const fib = useMemo(() => {
    const calculateFib = (n) => (n <= 1 ? n : calculateFib(n - 1) + calculateFib(n - 2));
    return calculateFib(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Fibonacci: {fib}</p>
    </div>
  );
}
```
🎯 Решение:
- `useMemo` используется для мемоизации результата вычислений. Ресчитает значение только при изменении `number`, что предотвращает повторные тяжёлые вычисления при каждом рендере.
---
5. Использование `useCallback` для мемоизации функции
⌛ Задача: Напишите компонент, который использует `useCallback` для мемоизации обработчика кликов.
Пример:
```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useCallback` мемоизирует функцию `increment`, предотвращая её пересоздание при каждом рендере компонента `Parent`.
---
6. Использование `useRef` для хранения мутируемого значения
⌛ Задача: Напишите компонент, который использует `useRef` для хранения предыдущего значения состояния.
Пример:
```javascript
import { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
🎯 Решение:
- `useRef` хранит мутируемое значение между рендерами. В данном случае мы сохраняем предыдущее значение состояния.
---
7. Обработка асинхронных запросов с `useEffect`
⌛ Задача: Напишите компонент, который загружает данные с API при монтировании.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
🎯 Решение:
- В `useEffect` выполняется асинхронная операция загрузки данных, и состояние обновляется по завершению запроса.
---
8. Управление состоянием нескольких значений с `useReducer`
⌛ Задача: Напишите компонент, который управляет состоянием нескольких значений с помощью `useReducer`.
Пример:
```javascript
import { useReducer } from 'react';

const initialState = { count: 0, name: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'setName':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'setName', payload: 'Alice' })}>Set Name</button>
    </div>
  );
}
```
🎯 Решение:
- `useReducer` используется для управления более сложными состояниями и логикой действий.
---
9. Задержка обновления состояния с `setTimeout` и `useEffect`
⌛ Задача: Напишите компонент, который задерживает обновление состояния на 2 секунды.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DelayedUpdate() {
  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    const timer = setTimeout(() => setMessage('Updated after 2 seconds'), 2000);
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return <p>{message}</p>;
}
```
🎯 Решение:
- `setTimeout` используется для задержки обновления состояния на определённое время. Функция очистки отменяет таймер при размонтировании.
---
10. Хранение значений, которые не рендерят компонент с `useRef`
⌛ Задача: Напишите компонент, который использует `useRef` для хранения значений, которые не должны вызывать рендер при изменении.
Пример:
```javascript
import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```
🎯 Решение:
- `useRef` позволяет хранить значения между рендерами, но не вызывает повторный рендер компонента при изменении этих значений.
---
11. Обновление состояния при изменении props с `useEffect`
⌛ Задача: Напишите компонент, который обновляет состояние на основе изменения пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Child({ value }) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return <p>{internalValue}</p>;
}
```
🎯 Решение:
- `useEffect` обновляет состояние `internalValue` при изменении пропса `value`.
---
12. Отслеживание изменений формы с `useState`
⌛ Задача: Напишите компонент, который отслеживает изменения в полях формы.
Пример:
```javascript
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
```
🎯 Решение:
- Используется `useState` для отслеживания значений формы, и `handleChange` обновляет состояние при изменении любого поля.
---
13. Использование `useEffect` для подписки на события
⌛ Задача: Напишите компонент, который подписывается на события и очищает подписку при размонтировании.
Пример:
```javascript
import { useEffect } from 'react';

function EventListener() {
  useEffect(() => {
    const handleResize = () => console.log('Window resized');
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Resize the window and check the console!</p>;
}
```
🎯 Решение:
- Используем `useEffect`, чтобы подписаться на событие `resize` и очистить подписку при размонтировании компонента.
---
14. Отображение состояния загрузки с `useState`
⌛ Задача: Напишите компонент, который отображает индикатор загрузки, пока данные не загружены.
Пример:
```javascript
import { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>{data.message}</p>;
}
```
🎯 Решение:
- Сначала показываем индикатор загрузки, а после завершения асинхронной операции отображаем полученные данные.
---
15. Использование `useEffect` для выполнения побочных эффектов при изменении пропсов
⌛ Задача: Напишите компонент, который выполняет побочный эффект при изменении пропса.
Пример:
```javascript
import { useState, useEffect } from 'react';

function Timer({ delay }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [delay]);  // Перезапускаем таймер, если изменился delay

  return <p>Time: {time}</p>;
}
```
🎯 Решение:
- `useEffect` с зависимостью от пропса `delay` позволяет перезапускать таймер, когда изменяется этот пропс.
---------------------
⋙ ❍ Архитектурные подходы в React (управление состоянием, Context API, Redux):
---
1. Управление состоянием с `useState` и передача данных между компонентами
⌛ Задача: Использование `useState` для управления состоянием и передачи данных между компонентами.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}
```
Объяснение:
- В данном примере состояние хранится в родительском компоненте, а дочерний компонент получает его через `props`. Это помогает избежать сложностей с состоянием в нескольких компонентах.
---
2. Использование `useContext` для передачи состояния через контекст
⌛ Задача: Передача состояния через Context API без необходимости передавать props на каждом уровне.
🎯 Решение:
```javascript
import React, { createContext, useState, useContext } from 'react';

// Создаем Context
const CountContext = createContext();

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildComponent />
    </CountContext.Provider>
  );
}

function ChildComponent() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
Объяснение:
- Контекст позволяет передавать данные напрямую всем компонентам внутри провайдера без необходимости прокидывать их через каждый промежуточный компонент.
---
3. Использование Redux для глобального состояния
⌛ Задача: Использование Redux для управления глобальным состоянием в приложении.
🎯 Решение:
```javascript
// actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

// reducer.js
const initialState = { count: 0 };
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

// store.js
import { createStore } from 'redux';
import { counterReducer } from './reducer';
export const store = createStore(counterReducer);

// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

Объяснение:
- Redux используется для централизованного управления состоянием. С помощью `useSelector` мы получаем состояние, а с помощью `useDispatch` отправляем экшены для обновления состояния.
---
4. Обновление состояния с `useReducer`
⌛ Задача: Использование `useReducer` для более сложного управления состоянием в компонентах.
🎯 Решение:
```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
```
Объяснение:
- `useReducer` полезен для сложных состояний, когда логика изменения состояния выходит за рамки простого использования `useState`. Он работает как Redux, но внутри компонента.
---
5. Создание глобального состояния с Context API + useReducer
⌛ Задача: Использование `useReducer` в связке с `Context API` для более сложного глобального состояния.
🎯 Решение:
```javascript
import React, { createContext, useReducer, useContext } from 'react';

// Создаем контекст
const CountContext = createContext();

// Определяем редуктор
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Провайдер
function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

// App
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

Объяснение:
- С помощью `useReducer` и `Context API` можно создать глобальное состояние с более сложной логикой обновления, при этом компоненты могут легко подписываться на это состояние через контекст.
---
6. Редукс с асинхронными действиями (Thunk)
⌛ Задача: Управление асинхронными действиями с использованием middleware `redux-thunk`.
🎯 Решение:
```javascript
// actions.js
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({ type: 'SET_POSTS', posts });
  };
};

// reducer.js
const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducer';

const store = createStore(postsReducer, applyMiddleware(thunk));
```
Объяснение:
- Используя `redux-thunk`, мы можем работать с асинхронными действиями в Redux, такими как запросы к API, и отправлять экшены после получения данных.
---
7. Параллельная загрузка данных с Redux и Thunks
⌛ Задача: Загружать несколько наборов данных одновременно с помощью асинхронных экшенов в Redux.
🎯 Решение:
```javascript
export const fetchData = () => {
  return async (dispatch) => {
    const [posts, users] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    ]);
    dispatch({ type: 'SET_DATA', payload: { posts, users } });
  };
};
```
Объяснение:
- Используем `Promise.all` для одновременной загрузки нескольких данных, улучшая производительность за счет уменьшения количества запросов.
---
8. Создание глобального состояния с Redux Toolkit
⌛ Задача: Упростить использование Redux с помощью `Redux Toolkit`.
🎯 Решение:
```javascript
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const store = configureStore({
  reducer: countSlice.reducer,
});

export const { increment, decrement } = countSlice.actions;
export default store;

// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function Counter() {
  const count = useSelector((state) =>

 state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```
Объяснение:
- `Redux Toolkit` упрощает работу с Redux, предоставляя готовые инструменты для создания редьюсеров и экшенов.
---
9. Ленивая загрузка с использованием Redux и Thunks
⌛ Задача: Загружать данные по мере необходимости с использованием Redux и middleware для асинхронных экшенов.
🎯 Решение:
```javascript
// actions.js
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({ type: 'SET_POSTS', posts });
  };
};

// reducer.js
const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => <div key={post.id}>{post.title}</div>)
      )}
    </div>
  );
}
```
Объяснение:
- В этом примере данные загружаются асинхронно, и состояние постов сохраняется в Redux. С помощью middleware `redux-thunk` мы можем загружать данные только при необходимости.
---
10. Использование `useContext` для централизованного состояния
⌛ Задача: Использование `useContext` для создания глобального состояния без использования Redux.
🎯 Решение:
```javascript
import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const CountContext = createContext();

// Провайдер
function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Компонент, использующий контекст
function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// App.js
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```
Объяснение:
- В этом примере мы создаём глобальное состояние с использованием `useContext` и `useState`. Мы не используем Redux, но можем централизовать состояние на уровне контекста, доступного всем дочерним компонентам.
---
11. Использование `React.memo` для предотвращения лишних ререндеров
⌛ Задача: Оптимизация производительности компонента с помощью `React.memo`, чтобы предотвратить лишние ререндеры.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <h2>Count: {count}</h2>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('Some text');

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState('Updated text')}>Update Other State</button>
    </div>
  );
}
```
Объяснение:
- `React.memo` помогает избежать лишних ререндеров, если пропсы компонента не изменились. В данном случае, `ChildComponent` будет перерисовываться только при изменении `count`.
---
12. Комбинирование `useState` и `useEffect` для работы с API
⌛ Задача: Загружать данные из API и обновлять состояние с помощью `useState` и `useEffect`.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
```
Объяснение:
- `useEffect` используется для выполнения побочных эффектов (например, асинхронных запросов) при монтировании компонента. С помощью `useState` мы сохраняем данные, полученные с сервера.
---
13. Динамическое обновление состояния с использованием `useReducer`
⌛ Задача: Управление сложным состоянием с помощью `useReducer`.
🎯 Решение:
```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0, text: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'UPDATE_TEXT':
      return { ...state, text: action.text };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>

      <input
        type="text"
        value={state.text}
        onChange={(e) => dispatch({ type: 'UPDATE_TEXT', text: e.target.value })}
      />
      <p>{state.text}</p>
    </div>
  );
}
```
Объяснение:
- `useReducer` используется для более сложных состояний, где нам нужно управлять несколькими значениями или выполнять различные операции с состоянием в одном редьюсере.
---
14. Встраивание сторонних библиотек с Redux
⌛ Задача: Интеграция сторонних библиотек с Redux для централизованного состояния.
🎯 Решение:
```javascript
// actions.js
export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({ type: 'FETCH_DATA', payload: posts });
  };
};

// reducer.js
const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducer';

const store = createStore(postsReducer, applyMiddleware(thunk));
```
Объяснение:
- В этом примере используется `redux-thunk` для асинхронных экшенов и централизованного управления данными, получаемыми с API. Это позволяет интегрировать сторонние API с Redux.
---
15. Использование Redux DevTools для дебага
⌛ Задача: Настройка Redux DevTools для дебага состояния и экшенов.
🎯 Решение:
```javascript
// store.js
import { createStore } from 'redux';
import { postsReducer } from './reducer';

const store = createStore(
  postsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```
Объяснение:
- В этом примере мы активируем Redux DevTools для дебага состояния и экшенов. Это позволяет разработчикам отслеживать изменения в состоянии приложения в реальном времени.
---------------------
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
1. Навигация с помощью React Router (React Router v6)
⌛ Задача: Реализовать простую навигацию между страницами с использованием `React Router`.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- `React Router` используется для организации клиентской навигации. Мы используем `Routes` и `Route` для определения маршрутов, а `Link` для перехода по ним.
---
2. Динамическая навигация с параметрами в React Router
⌛ Задача: Создать маршруты с динамическими параметрами (например, ID).
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}
```
Объяснение:
- Мы использовали параметр `:id` в маршруте, чтобы отображать информацию, которая зависит от переданного параметра в URL. `useParams` позволяет получить доступ к этим параметрам в компоненте.
---
3. Ленивая загрузка маршрутов с React Router
⌛ Задача: Ленивая загрузка компонентов для маршрутов, чтобы уменьшить начальный размер бандла.
🎯 Решение:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```
Объяснение:
- Для ленивой загрузки компонентов используется `React.lazy` и `Suspense`. Это позволяет загружать компоненты только по мере их необходимости, что улучшает производительность приложения.
---
4. Fetch данных с использованием React Query
⌛ Задача: Загружать данные с API с использованием `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- `useQuery` из `React Query` используется для получения данных с сервера и автоматического обновления компонентов при изменении данных.
---
5. Использование Mutation с React Query
⌛ Задача: Отправка данных через POST-запрос с использованием `useMutation` из `React Query`.
🎯 Решение:
```javascript
import { useMutation } from 'react-query';

async function postData(newData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}

function AddPost() {
  const mutation = useMutation(postData);

  const handleSubmit = () => {
    mutation.mutate({ title: 'New Post', body: 'This is a new post' });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Post</button>
      {mutation.isLoading && <div>Adding post...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Post added!</div>}
    </div>
  );
}
```
Объяснение:
- `useMutation` позволяет выполнять операции, такие как создание, обновление или удаление данных на сервере. Мы вызываем `mutate` для отправки данных.
---
6. Предотвращение повторных запросов с `React Query`
⌛ Задача: Обработать запросы, чтобы не отправлять их, если данные уже загружены.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    staleTime: 60000, // данные считаются актуальными 1 минуту
    cacheTime: 300000, // кэшированные данные сохраняются 5 минут
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Параметры `staleTime` и `cacheTime` помогают избежать повторных запросов, если данные уже загружены и актуальны в течение определенного времени.
---
7. Создание серверного рендеринга с Next.js
⌛ Задача: Реализовать серверный рендеринг (SSR) в Next.js.
🎯 Решение:
```javascript
// pages/index.js
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```

Объяснение:
- В Next.js серверный рендеринг осуществляется с помощью функции `getServerSideProps`. Она выполняется на сервере перед рендерингом страницы и передает данные как `props` в компонент.
---
8. Статическая генерация с Next.js (SSG)
⌛ Задача: Создать статически генерируемую страницу с данными, полученными во время сборки.
🎯 Решение:
```javascript
// pages/index.js
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
```
Объяснение:
- В Next.js статическая генерация осуществляется с помощью `getStaticProps`. Она выполняется на этапе сборки и генерирует HTML для страницы.
---
9. Динамическая маршрутизация в Next.js
⌛ Задача: Создать динамические маршруты с использованием Next.js.
🎯 Решение:
```javascript
// pages/posts/[id].js
import React from 'react';

function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export

 default Post;
```
Объяснение:
- В Next.js динамические маршруты создаются с помощью квадратных скобок в имени файла, например, `[id].js`. Функция `getServerSideProps` позволяет получить данные на сервере по переданному параметру маршрута.
---
10. Обработка ошибок с React Query
⌛ Задача: Обработка ошибок при запросах с помощью `React Query`.
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- `React Query` имеет встроенную обработку ошибок. Мы можем использовать свойство `error` для отображения ошибки в случае сбоя запроса.
---
11. Ленивая загрузка с `React Query`
⌛ Задача: Загружать данные только при необходимости (например, при прокрутке).
🎯 Решение:
```javascript
import { useQuery } from 'react-query';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function Posts() {
  const { data, error, isLoading } = useQuery('posts', fetchData, {
    enabled: false, // запрос не будет выполняться при монтировании компонента
  });

  const handleFetchData = () => {
    data.refetch();
  };

  return (
    <div>
      <button onClick={handleFetchData}>Load Posts</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
    </div>
  );
}
```
Объяснение:
- `enabled: false` предотвращает выполнение запроса при монтировании компонента. Запрос выполняется только после вызова `refetch`, например, при клике на кнопку.
---
12. Использование Next.js для рендеринга API на сервере
⌛ Задача: Создать серверный API в Next.js.
🎯 Решение:
```javascript
// pages/api/posts.js
export async function handler(req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  res.status(200).json(posts);
}
```
Объяснение:
- В Next.js можно создавать API-роуты внутри папки `pages/api`. Эти API-роуты могут выполнять серверные операции, такие как запросы к базе данных или другим API.
---
13. Автоматическая маршрутизация в Next.js (Pages Router)
⌛ Задача: Использовать автоматическую маршрутизацию, основанную на файлах, в Next.js.
🎯 Решение:
- В Next.js структура маршрутов соответствует структуре файлов в папке `pages`. Например:
  - `/pages/index.js` → маршрут `/`
  - `/pages/about.js` → маршрут `/about`
  - `/pages/blog/[id].js` → динамический маршрут `/blog/:id`
Объяснение:
- Next.js автоматически генерирует маршруты на основе файловой структуры, что значительно упрощает работу с роутингом и ускоряет разработку.
---
14. Оптимизация с использованием `next/image`
⌛ Задача: Использовать компонент `Image` для оптимизации изображений в Next.js.
🎯 Решение:
```javascript
import Image from 'next/image';

function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      <Image
        src="/static/post-image.jpg"
        alt="Blog Post Image"
        width={500}
        height={300}
      />
    </div>
  );
}
```
Объяснение:
- `next/image` автоматически оптимизирует изображения, включая поддержку различных размеров и форматов, что помогает ускорить загрузку страниц.
---
15. Группировка API-запросов с React Query
⌛ Задача: Загружать данные из нескольких источников одновременно с помощью `React Query`.
🎯 Решение:
```javascript
import { useQueries } from 'react-query';

function PostsAndUsers() {
  const queries = useQueries([
    { queryKey: 'posts', queryFn: fetchPosts },
    { queryKey: 'users', queryFn: fetchUsers },
  ]);

  const posts = queries[0].data;
  const users = queries[1].data;

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>

      <h2>Users</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
```
Объяснение:
- `useQueries` позволяет выполнять несколько запросов параллельно, что полезно для загрузки различных данных одновременно и синхронного отображения.
---------------------
⋙ ❍ Оптимизировать производительность компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
Оптимизация производительности компонентов — важная задача для любого фронтенд-разработчика, особенно когда приложение становится более сложным. Вот 15 популярных задач с решениями и объяснениями, которые помогут повысить производительность компонентов в React и других фреймворках.
1. Мемоизация функции с помощью `useMemo` (React)
⌛ Задача: Мемоизировать результат вычисления функции, чтобы избежать лишних вычислений при рендере компонента.
🎯 Решение:
```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ number }) {
  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);

  return <div>{expensiveResult}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveCalculation number={number} />
    </div>
  );
}
```
Объяснение:
- `useMemo` помогает мемоизировать результат вычислений. Он пересчитывает результат только при изменении зависимостей. Это предотвращает лишние вычисления при каждом рендере.
---
2. Мемоизация колбэков с помощью `useCallback` (React)
⌛ Задача: Мемоизировать функции-обработчики, чтобы избежать их пересоздания при каждом рендере.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` мемоизирует функцию-обработчик, предотвращая её пересоздание при каждом рендере компонента. Это полезно для оптимизации дочерних компонентов, которые могут реагировать на изменение переданных функций.
---
3. Разделение кода с использованием `React.lazy` и `Suspense`
⌛ Задача: Ленивая загрузка компонентов для оптимизации первоначальной загрузки приложения.
🎯 Решение:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```
Объяснение:
- `React.lazy` позволяет загружать компоненты только тогда, когда они требуются, что снижает начальную нагрузку на приложение.
- `Suspense` используется для отображения заглушки (fallback) во время загрузки компонента.
---
4. Оптимизация списка с помощью `React.memo`
⌛ Задача: Избежать лишних рендеров компонента списка, если его пропсы не изменились.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ListItem = React.memo(({ item }) => {
  console.log('Item rendered');
  return <li>{item}</li>;
});

function App() {
  const [list, setList] = useState(['Item 1', 'Item 2']);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
```
Объяснение:
- `React.memo` предотвращает повторный рендер компонента, если его пропсы не изменились. В примере `ListItem` будет рендериться только при изменении его пропса.
---
5. Использование `PureComponent` для предотвращения ненужных рендеров (React)
⌛ Задача: Использование `PureComponent` для автоматической оптимизации рендеринга.
🎯 Решение:
```javascript
import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
  render() {
    console.log('Item rendered');
    return <li>{this.props.item}</li>;
  }
}

class App extends React.Component {
  state = { list: ['Item 1', 'Item 2'], toggle: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Toggle
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
```
Объяснение:
- `PureComponent` автоматически реализует `shouldComponentUpdate`, предотвращая рендер, если пропсы или состояние не изменились.
---
6. Оптимизация вложенных компонентов с `React.memo` и `useCallback`
⌛ Задача: Использование `useCallback` и `React.memo` для оптимизации дочерних компонентов.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` предотвращает пересоздание функции, а `React.memo` оптимизирует рендер дочернего компонента, если его пропсы не изменились.
---
7. Использование `shouldComponentUpdate` для классовых компонентов (React)
⌛ Задача: Оптимизация рендеров в классовых компонентах с использованием `shouldComponentUpdate`.
🎯 Решение:
```javascript
class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item !== this.props.item;
  }

  render() {
    console.log('Item rendered');
    return <li>{this.props.item}</li>;
  }
}

class App extends React.Component {
  state = { list: ['Item 1', 'Item 2'], toggle: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Toggle
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
```
Объяснение:
- `shouldComponentUpdate` позволяет вручную контролировать, когда компонент должен быть перерендерен. В этом случае компонент будет перерендериваться только если `item` изменится.
---
8. Разделение кода с динамическим импортажом
⌛ Задача: Использование динамического импорта для уменьшения начального размера бандла.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function App() {
  const [Component, setComponent] = useState(null);

  const loadComponent = () => {
    import('./LazyComponent').then((comp) => {
      setComponent(comp.default);
    });
  };

  return (
    <div>
      <button onClick={loadComponent}>Load Component</button>
      {Component && <Component />}
    </div>
  );
}
```
Объяснение:
- Динамический импорт позволяет загружать компоненты только по мере необходимости, тем самым сокращая начальную нагрузку на приложение.
---
9. Оптимизация с помощью ключей в `v-for` (Vue)
⌛ Задача: Использование уникальных ключей для оптимизации рендеринга списков в Vue.
🎯 Решение:
```vue
<template>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    };
  },
};
</script>
```
Объяснение:
- Использование `:key` помогает Vue оптимизировать процесс обновления
 DOM при изменении данных списка, избегая повторных рендеров элементов, которые не изменились.
---
10. Использование `computed` в Vue для оптимизации вычислений
⌛ Задача: Использование `computed` свойств для мемоизации сложных вычислений.
🎯 Решение:
```vue
<template>
  <div>{{ expensiveCalculation }}</div>
</template>

<script>
export default {
  data() {
    return {
      number: 5,
    };
  },
  computed: {
    expensiveCalculation() {
      console.log('Calculating...');
      return this.number * 2;
    },
  },
};
</script>
```
Объяснение:
- В Vue `computed` автоматически кэширует результат вычисления, перезапуская его только при изменении зависимостей.
---
11. Использование `debounce` для оптимизации пользовательского ввода
⌛ Задача: Использование debounce для ограничения количества запросов при вводе текста.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleChange = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  useEffect(() => {
    console.log('Searching for:', query);
  }, [query]);

  return <input type="text" onChange={handleChange} />;
}
```
Объяснение:
- `debounce` ограничивает количество срабатываний функции. Это помогает снизить нагрузку, например, при поиске, избегая выполнения запросов на сервер при каждом вводе символа.
---
12. Использование `Intersection Observer` для ленивой загрузки
⌛ Задача: Реализовать ленивую загрузку изображений с использованием `IntersectionObserver`.
🎯 Решение:
```javascript
import React, { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return loaded ? <img ref={imgRef} src={src} alt={alt} /> : <div>Loading...</div>;
}
```
Объяснение:
- `IntersectionObserver` позволяет запускать загрузку изображений только тогда, когда они попадают в область видимости, что экономит ресурсы и повышает производительность.
---
13. Использование `requestIdleCallback` для отсрочки задач
⌛ Задача: Использование `requestIdleCallback` для выполнения задач, когда браузер не занят рендерингом.
🎯 Решение:
```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Task executed during idle time');
  });
}
```
Объяснение:
- `requestIdleCallback` позволяет запускать функции, когда браузер не занят рендерингом, что помогает не блокировать основной поток выполнения.
---
14. Пре-рендеринг для серверного рендеринга (SSR)
⌛ Задача: Использование серверного рендеринга для уменьшения времени до первого рендера.
🎯 Решение:
```javascript
import ReactDOMServer from 'react-dom/server';
import App from './App';

const html = ReactDOMServer.renderToString(<App />);
console.log(html);
```
Объяснение:
- SSR позволяет рендерить приложение на сервере, уменьшая время до первого рендера и улучшая SEO.
---
15. Использование Web Workers для обработки данных в фоновом режиме
⌛ Задача: Использование Web Workers для выполнения сложных вычислений в фоновом потоке.
🎯 Решение:
```javascript
const worker = new Worker('worker.js');

worker.onmessage = function (e) {
  console.log('Message from worker:', e.data);
};

worker.postMessage('Start heavy task');
```
Объяснение:
- Web Workers позволяют выполнять ресурсоемкие задачи в фоновом потоке, не блокируя основной поток выполнения приложения.
---------------------
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
1. Реактивность данных в Vue 2 и Vue 3
⌛ Задача: Объясните, как работает реактивность в Vue и создайте компонент, который обновляет текст на основе изменения переменной.
🎯 Решение:
```vue
<!-- Vue 2 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
};
</script>
```

```vue
<!-- Vue 3 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 2 используется `data`, а в Vue 3 — `ref` для создания реактивных переменных.
- В обоих случаях используется `v-model` для двусторонней привязки данных.
---
2. Использование `v-if` и `v-show`
⌛ Задача: Создайте компонент, который отображает сообщение на основе значения переменной, используя `v-if` и `v-show`.
🎯 Решение:
```vue
<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">This is a conditionally rendered message (v-if)</p>
    <p v-show="isVisible">This is a conditionally rendered message (v-show)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
```
Объяснение:
- `v-if` полностью удаляет элемент из DOM при условии, в то время как `v-show` лишь скрывает его с помощью CSS.
---
3. Использование `computed` и `watch`
⌛ Задача: Создайте компонент, который отображает вычисляемое свойство и реагирует на изменения данных с помощью `watch`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>Reversed Message: {{ reversedMessage }}</p>
    <p>Message length: {{ messageLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    message(newValue) {
      console.log(`Message changed to: ${newValue}`);
    },
  },
};
</script>
```
Объяснение:
- `computed` используется для создания вычисляемых свойств, которые кэшируются.
- `watch` позволяет отслеживать изменения переменной и выполнять действия при изменении.
---
4. Использование `v-model` для двухсторонней привязки данных
⌛ Задача: Создайте компонент с двумя полями ввода, где одно обновляет значение другого через `v-model`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ firstName }} {{ lastName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
};
</script>
```
Объяснение:
- `v-model` позволяет синхронизировать данные между полями ввода и переменными.
---
5. Создание компонента с пропсами и событиями
⌛ Задача: Создайте компонент, который принимает данные через пропс и отправляет событие обратно в родительский компонент.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" @updateMessage="handleUpdate" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
    };
  },
  methods: {
    handleUpdate(newMessage) {
      this.parentMessage = newMessage;
    },
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Parent Message</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    updateMessage() {
      this.$emit('updateMessage', 'Updated message from child!');
    },
  },
};
</script>
```
Объяснение:
- В родительском компоненте передаётся пропс `message` в дочерний.
- Дочерний компонент отправляет событие `updateMessage`, которое обрабатывается в родительском компоненте.
---
6. Использование Composition API в Vue 3
⌛ Задача: Используйте Composition API для создания реактивных данных и методов.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 3 мы используем функцию `ref` для создания реактивных переменных.
- Функция `setup` — это место для инициализации всех реактивных данных и методов в компоненте.
---
7. Использование `provide` и `inject` для передачи данных между компонентами
⌛ Задача: Используйте `provide` и `inject` для передачи данных от родительского компонента к дочерним.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    provide('message', 'Hello from Parent');
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return { message };
  },
};
</script>
```
Объяснение:
- `provide` используется в родительском компоненте для передачи данных.
- `inject` позволяет дочернему компоненту получить доступ к данным.
---
8. Использование `watchEffect` для наблюдения за реактивными данными (Vue 3)
⌛ Задача: Создайте компонент, который будет отслеживать изменение данных и выполнять побочные эффекты.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="count" />
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log(`Count has changed to: ${count.value}`);
    });

    return { count };
  },
};
</script>
```
Объяснение:
- `watchEffect` автоматически отслеживает реактивные данные и выполняет побочные эффекты при их изменении.
---
9. Динамическое добавление классов с `v-bind:class`
⌛ Задача: Используйте директиву `v-bind:class` для динамического добавления классов в элемент.
🎯 Решение:
```vue
<template>
  <div>
    <button :class="buttonClass" @click="toggleClass">Toggle Class</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonClass() {
      return {
        active: this.isActive,
        'inactive': !this.isActive,
      };
    },
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
```
Объяснение:
- Мы динамически добавляем классы в зависимости от значения `isActive`.
---
10. Использование слотов для создания гибких компонентов
⌛ Задача: Создайте компонент с пользовательскими слотами, чтобы добавить кастомное содержимое.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <BaseCard>
      <template v-slot:header>
        <h1>Custom Header</h1>
      </template>
      <p>This is the content of the card.</p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },
};
</script>
```

```vue
<!-- BaseCard.vue -->
<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
```
Объяснение:
- Используем именованные слоты для динамической вставки контента в компонент.
---
11. Создание глобального фильтра в Vue 2 и Vue 3
⌛ Задача: Создайте глобальный фильтр для форматирования даты.
🎯 Решение:
```javascript
// Vue 2
Vue.filter('formatDate', function (value) {
  return new Date(value).toLocaleDateString();
});
```

```vue
<!-- В шаблоне -->
<p>{{ date | formatDate }}</p>
```

```javascript
// Vue 3
import { createApp } from 'vue';
const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate(value) {
    return new Date(value).toLocaleDateString();
  },
};

app.mount('#app');
```
Объяснение:
- В Vue 2 фильтры создаются через `Vue.filter`, а в Vue 3 фильтры можно создавать через глобальные свойства `app.config.globalProperties`.
---
12. Отправка формы с использованием `v-model`
⌛ Задача: Создайте форму для отправки данных, используя `v-model` для привязки данных.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Username" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.username, this.email);
    },
  },
};
</script>
```
Объяснение:
- Используем `v-model` для двусторонней привязки данных формы с переменными компонента.
---
13. Асинхронные действия с `async`/`await` в Vue 3
⌛ Задача: Сделайте асинхронный запрос к API и отображайте данные.
🎯 Решение:
```vue
<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      data.value = await response.json();
      loading.value = false;
    });

    return { data, loading };
  },
};
</script>
```
Объяснение:
- Используется `async`/`await` для асинхронной загрузки данных в компонент Vue 3.
---
14. Валидация данных в форме с использованием `v-model`
⌛ Задача: Создайте форму с валидацией email.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Email" />
      <span v-if="!isValidEmail">Please enter a valid email.</span>
      <button type="submit" :disabled="!isValidEmail">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  computed: {
    isValidEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    submitForm() {
      console.log('Form submitted with email:', this.email);
    },
  },
};
</script>
```
Объяснение:
- Валидация email происходит с помощью регулярного выражения, и форма не отправляется, пока email не соответствует паттерну.
---
15. Использование `v-for` для отображения данных из массива
⌛ Задача: Отобразите список пользователей из массива с помощью `v-for`.
🎯 Решение:
```vue
<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Joe' },
      ],
    };
  },
};
</script>
```
Объяснение:
- `v-for` используется для итерации по массиву и вывода данных в шаблоне.
---------------------
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
1. Получение данных с REST API (GET)
⌛ Задача: Напишите код, который делает запрос к API и отображает полученные данные.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Используется `fetch()` для выполнения GET-запроса.
- В `useEffect` загружаем данные при монтировании компонента.
- Ответ обрабатывается через `.json()`, и данные сохраняются в состоянии с помощью `setData`.
---
2. Отправка данных на сервер с помощью POST
⌛ Задача: Напишите код, который отправляет данные формы на сервер с использованием метода POST.
🎯 Решение:
```javascript
import { useState } from 'react';

function PostData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Мы создаём форму, которая отправляет POST-запрос с данными через `fetch`.
- В запросе указываем заголовок `Content-Type: application/json`, чтобы сервер знал, что данные передаются в формате JSON.
---
3. Обновление данных на сервере с помощью PUT
⌛ Задача: Напишите код, который обновляет данные на сервере с использованием PUT.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- Мы используем метод `PUT`, чтобы обновить данные на сервере.
- URL в запросе включает идентификатор объекта, который обновляется (например, `/1`).
---
4. Удаление данных с сервера (DELETE)
⌛ Задача: Напишите код, который удаляет объект с сервера с использованием DELETE.
🎯 Решение:
```javascript
import { useState } from 'react';

function DeleteData() {
  const [userId, setUserId] = useState('');

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('User deleted');
        } else {
          console.log('Error deleting user');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID to delete"
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}
```
Объяснение:
- Используем метод `DELETE` для удаления объекта с указанным ID.
- В ответе проверяем `response.ok`, чтобы понять, прошёл ли запрос успешно.
---
5. Обработка ошибок при запросах
⌛ Задача: Напишите код для обработки ошибок, которые могут возникнуть при запросах к API.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchDataWithErrorHandling() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Если API не отвечает или URL неправильный, мы генерируем ошибку и выводим её пользователю.
---
6. Отправка данных с заголовками
⌛ Задача: Отправьте POST-запрос с дополнительными заголовками (например, для аутентификации).
🎯 Решение:
```javascript
import { useState } from 'react';

function PostDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- В `headers` добавляем заголовок `Authorization`, который может быть использован для аутентификации запросов.
---
7. Отправка данных в формате FormData
⌛ Задача: Отправьте данные формы через POST-запрос с использованием `FormData`.
🎯 Решение:
```javascript
function PostFormData() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('Form data submitted:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData` для отправки формы в формате multipart/form-data.
---
8. Отправка данных с использованием `PUT` с заголовками
⌛ Задача: Обновите данные на сервере с помощью PUT и передайте заголовки.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

 const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- В `PUT` запросе мы передаём данные в теле и указываем заголовки для аутентификации.
---
9. Получение данных с кастомными заголовками
⌛ Задача: Выполните GET-запрос с кастомными заголовками.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithHeaders() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
        'Custom-Header': 'CustomValue',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Мы добавляем кастомные заголовки в запрос для аутентификации и других нужд.
---
10. Использование `PATCH` для частичных обновлений
⌛ Задача: Частично обновить данные с использованием метода PATCH.
🎯 Решение:
```javascript
import { useState } from 'react';

function PatchData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data patched:', data))
      .catch((error) => console.error('Error patching data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Patch</button>
    </form>
  );
}
```
Объяснение:
- Метод `PATCH` используется для частичного обновления ресурса, обновляя только изменённые данные.
---
11. Получение данных с пагинацией
⌛ Задача: Получить данные с пагинацией.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithPagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page <= 1}>
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
```
Объяснение:
- Мы используем параметры запроса для пагинации (`_page`, `_limit`), чтобы запрашивать по 10 элементов за раз.
---
12. Получение данных с авторизацией
⌛ Задача: Получить данные с API с авторизацией через Bearer Token.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithAuth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Заголовок `Authorization: Bearer` используется для отправки токена аутентификации.
---
13. Заголовки для работы с CORS
⌛ Задача: Добавьте заголовки для работы с CORS.
🎯 Решение:
```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```
Объяснение:
- `Access-Control-Allow-Origin: *` позволяет запросам с других доменов обращаться к API.
---
14. Отправка данных с файлами (multipart/form-data)
⌛ Задача: Отправить форму с файлом на сервер.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://jsonplaceholder.typicode.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('File uploaded:', data))
      .catch((error) => console.error('Error uploading file:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData`, чтобы отправить файл на сервер через multipart/form-data.
---
15. Получение и отображение данных с кешированием
⌛ Задача: Кешировать данные для повторного использования.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithCache() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('posts');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('posts', JSON.stringify(data));
          setData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Данные кешируются в `localStorage` для использования при следующих запросах.
---------------------
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
1. Адаптивный заголовок с использованием `media queries`
⌛ Задача: Напишите адаптивный заголовок, который меняет размер шрифта в зависимости от ширины экрана.
Пример:
```css
h1 {
  font-size: 3rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
}
```
🎯 Решение:
- Используем `media queries`, чтобы уменьшать размер шрифта для разных ширин экранов.
- Для экрана меньше 768px размер шрифта уменьшается до 2rem, а для экранов менее 480px — до 1.5rem.
---
2. Адаптивный контейнер с использованием `Flexbox`
⌛ Задача: Создайте контейнер с тремя элементами, которые распределяются по ширине экрана с помощью `Flexbox`, а на маленьких экранах элементы должны располагаться в колонку.
Пример:
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Для ширины экрана больше 768px элементы расположены по горизонтали (с помощью `justify-content: space-between`).
- Для экранов меньше 768px элементы располагаются в колонку (с помощью `flex-direction: column`).
---
3. Центрирование блока с использованием `Flexbox`
⌛ Задача: Напишите стили, чтобы блок был всегда по центру экрана, как по горизонтали, так и по вертикали.
Пример:
```html
<div class="container">
  <div class="centered">Centered content</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered {
  padding: 20px;
  background-color: lightblue;
}
```
🎯 Решение:
- `justify-content: center` центрирует по горизонтали.
- `align-items: center` центрирует по вертикали.
- `height: 100vh` устанавливает высоту контейнера на весь экран.
---
4. Адаптивный grid-контейнер
⌛ Задача: Создайте grid-контейнер, который на широких экранах имеет 4 колонки, а на экранах меньше 768px — 2 колонки.
Пример:
```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
🎯 Решение:
- Используем `grid-template-columns: repeat(4, 1fr)` для 4 колонок на больших экранах.
- Для экранов меньше 768px меняем количество колонок на 2 с помощью `grid-template-columns: repeat(2, 1fr)`.
---
5. Адаптивная сетка с использованием `Grid` и разных колонок
⌛ Задача: Создайте адаптивную сетку, где на больших экранах будет 3 колонки, на средних — 2, а на маленьких — 1.
Пример:
```html
<div class="grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```
🎯 Решение:
- Для больших экранов используем 3 колонки (`repeat(3, 1fr)`).
- Для экранов меньше 1024px используем 2 колонки.
- Для экранов меньше 768px — 1 колонка.
---
6. Адаптивная кнопка с изменением размера
⌛ Задача: Напишите кнопку, которая меняет свой размер в зависимости от ширины экрана.
Пример:
```html
<button class="responsive-btn">Click Me</button>
```

```css
.responsive-btn {
  padding: 20px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .responsive-btn {
    padding: 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .responsive-btn {
    padding: 10px;
    font-size: 12px;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px и 480px меняем размеры кнопки с помощью `padding` и `font-size`.
---
7. Фиксированное положение элемента на экране с `position`
⌛ Задача: Напишите компонент, который фиксируется внизу экрана, если ширина экрана меньше 768px.
Пример:
```html
<div class="fixed-footer">This is a footer</div>
```

```css
.fixed-footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .fixed-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
```
🎯 Решение:
- Для экранов меньше 768px используем `position: fixed`, чтобы элемент оставался на месте при прокрутке.
---
8. Респонсивный фоновый рисунок с `background-size`
⌛ Задача: Установите фоновое изображение, которое будет адаптироваться под размер экрана.
Пример:
```css
body {
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
}
```
🎯 Решение:
- `background-size: cover` делает изображение адаптивным, растягивая его, чтобы оно заполнило весь контейнер, не искажаясь.
- `background-position: center` центрирует изображение на экране.
---
9. Адаптивные отступы с помощью `rem`
⌛ Задача: Напишите компонент с адаптивными отступами, используя `rem`, которые меняются в зависимости от ширины экрана.
Пример:
```css
.container {
  padding: 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }
}
```
🎯 Решение:
- Используем `rem` для адаптивных отступов, которые изменяются в зависимости от ширины экрана.
---
10. Респонсивное изображение с `srcset`
⌛ Задача: Используйте `srcset` для выбора разных изображений в зависимости от разрешения экрана.
Пример:
```html
<img src="small.jpg"
     srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w"
     alt="Responsive image" />
```
🎯 Решение:
- Используем `srcset`, чтобы указать разные изображения для разных ширин экрана.
---
11. Адаптивные шрифты с `clamp()`
⌛ Задача: Напишите шрифт, который будет адаптироваться в зависимости от ширины экрана с использованием `clamp()`.
Пример:
```css
h1 {
  font-size

: clamp(1.5rem, 5vw, 3rem);
}
```
🎯 Решение:
- `clamp()` устанавливает минимальный и максимальный размер шрифта, который будет изменяться в зависимости от ширины экрана (с помощью `vw`).
---
12. Адаптивный элемент с Flexbox на разных экранах
⌛ Задача: Используйте `Flexbox` для создания адаптивной навигации, которая на больших экранах расположена по горизонтали, а на маленьких — по вертикали.
Пример:
```html
<nav class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>
```

```css
.nav {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
}
```
🎯 Решение:
- Используем `flex-direction: column` на маленьких экранах, чтобы элементы располагались вертикально.
---
13. Адаптивный карточный компонент с `Flexbox`
⌛ Задача: Напишите компонент с карточками, которые на маленьких экранах отображаются в одну колонку, а на больших — в несколько.
Пример:
```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```css
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  background-color: lightgray;
  padding: 20px;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```
🎯 Решение:
- Для маленьких экранов карточки занимают всю ширину, используя `width: 100%`, а на больших экранах — 30% ширины.
---
14. Адаптивное меню с использованием `media queries`
⌛ Задача: Напишите адаптивное горизонтальное меню, которое при ширине экрана меньше 768px превращается в выпадающее меню.
Пример:
```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

```css
.menu ul {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .menu ul {
    display: block;
  }

  .menu ul li {
    margin: 10px 0;
  }
}
```
🎯 Решение:
- Для больших экранов меню горизонтальное с использованием `flex`, для маленьких — вертикальное с помощью `display: block`.
---
15. Адаптивная таблица с использованием `overflow-x`
⌛ Задача: Напишите таблицу, которая будет прокручиваться по горизонтали на маленьких экранах.
Пример:
```html
<div class="table-wrapper">
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>New York</td>
    </tr>
    <!-- more rows -->
  </table>
</div>
```

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
```
🎯 Решение:
- Используем `overflow-x: auto`, чтобы таблица могла прокручиваться по горизонтали на маленьких экранах.
---------------------
⋙ ❍ Знание подходов к организации CSS-кода (BEM, CSS Modules, Styled Components):
---
⌛ Задача: Необходимо обработать массив таким образом, чтобы распределить людей по группам городов
Данные на вход
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
]

 const groupByCity = (array) => {}

 Данные на выход
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
Для решения задачи нам нужно организовать функцию, которая будет группировать людей по их городам. Мы будем использовать метод `reduce()` для итерации по массиву и формирования объекта, где ключами будут города, а значениями — массивы с именами людей, которые проживают в этих городах.
🎯 Решение:
```javascript
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
];

const groupByCity = (array) => {
  return array.reduce((acc, person) => {
    // Если город еще не был добавлен в объект, добавляем его
    if (!acc[person.city]) {
      acc[person.city] = [];
    }
    // Добавляем имя человека в соответствующий город
    acc[person.city].push(person.name);
    return acc;
  }, {});
};

const groupedPeople = groupByCity(people);

console.log(groupedPeople);
```
Пояснение:
1. Метод `reduce()`:
   - Мы используем метод `reduce()` для того, чтобы пройтись по каждому элементу массива `people` и создать объект, где ключами будут города, а значениями — массивы с именами людей.
   - Каждый раз, когда встречаем человека с определённым городом, проверяем, существует ли уже массив для этого города. Если нет, создаём его. Затем добавляем имя человека в этот массив.
2. Инициализация аккумулятора:
   - Второй аргумент метода `reduce()` (`{}`) — это начальное значение аккумулятора, который будет представлять собой объект для хранения группировки по городам.
3. Результат:
   - На выходе мы получаем объект, где каждому городу соответствует массив людей, которые в нём живут.
Результат выполнения кода:
```javascript
{
  Moscow: ['Alex', 'Ivan'],
  'New York': ['Joe'],
  Berlin: ['Johan']
}
```
Это решение будет работать для любого массива людей с аналогичной структурой данных, распределяя их по городам.
---------------------
⋙ ❍ Массивы:
---
1. Удаление дубликатов из массива
⌛ Задача: Напишите функцию, которая удаляет все дубликаты из массива.
Пример:
```javascript
const arr = [1, 2, 3, 2, 4, 5, 5, 6];
removeDuplicates(arr);  // [1, 2, 3, 4, 5, 6]
```
🎯 Решение:
```javascript
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
```
Объяснение:
- В этом решении используется объект `Set`, который автоматически удаляет все дубликаты.
- Мы преобразуем `Set` обратно в массив с помощью оператора расширения `...`.
Сложность: O(n), где `n` — длина массива.
---
2. Поиск самого частого элемента в массиве
⌛ Задача: Напишите функцию, которая находит самый часто встречающийся элемент в массиве.
Пример:
```javascript
const arr = [1, 3, 3, 2, 2, 2, 5];
mostFrequentElement(arr);  // 2
```
🎯 Решение:
```javascript
const mostFrequentElement = (arr) => {
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequent = null;

  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxCount) {
      maxCount = frequencyMap[key];
      mostFrequent = key;
    }
  }

  return mostFrequent;
};
```
Объяснение:
- Мы используем объект `frequencyMap`, чтобы подсчитать, сколько раз каждый элемент встречается в массиве.
- Затем мы проходим по объекту и находим элемент с максимальной частотой.
Сложность: O(n), где `n` — длина массива.
---
3. Переворот массива
⌛ Задача: Напишите функцию, которая переворачивает массив.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5];
reverseArray(arr);  // [5, 4, 3, 2, 1]
```
🎯 Решение:
```javascript
const reverseArray = (arr) => {
  return arr.reverse();
};
```
Объяснение:
- Встроенный метод `reverse()` изменяет оригинальный массив и возвращает его в обратном порядке.
Сложность: O(n), где `n` — длина массива.
---
4. Выбор элементов из массива по индексу
⌛ Задача: Напишите функцию, которая возвращает элементы массива по заданным индексам.
Пример:
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
getElementsByIndices(arr, [1, 3]);  // ['b', 'd']
```
🎯 Решение:
```javascript
const getElementsByIndices = (arr, indices) => {
  return indices.map(index => arr[index]);
};
```
Объяснение:
- Мы используем метод `map()`, чтобы пройти по массиву индексов и для каждого индекса извлечь соответствующий элемент из исходного массива.
Сложность: O(m), где `m` — количество элементов в массиве индексов.
---
5. Поиск пересечений двух массивов
⌛ Задача: Напишите функцию, которая находит пересечение двух массивов.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
intersection(arr1, arr2);  // [3, 4]
```
🎯 Решение:
```javascript
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
};
```
Объяснение:
- Мы создаем `Set` из первого массива, чтобы ускорить поиск элементов.
- Затем фильтруем второй массив, оставляя только те элементы, которые есть в первом массиве.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---
6. Преобразование массива в объект
⌛ Задача: Напишите функцию, которая преобразует массив пар ключ-значение в объект.
Пример:
```javascript
const arr = [['name', 'Alex'], ['age', 30], ['city', 'Moscow']];
arrayToObject(arr);  // { name: 'Alex', age: 30, city: 'Moscow' }
```
🎯 Решение:
```javascript
const arrayToObject = (arr) => {
  return Object.fromEntries(arr);
};
```
Объяснение:
- Мы используем метод `Object.fromEntries()`, который преобразует массив пар [ключ, значение] в объект.
Сложность: O(n), где `n` — количество элементов в массиве.
---
7. Объединение массивов и удаление дубликатов
⌛ Задача: Напишите функцию, которая объединяет два массива и удаляет из них все дубликаты.
Пример:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
mergeAndRemoveDuplicates(arr1, arr2);  // [1, 2, 3, 4, 5]
```
🎯 Решение:
```javascript
const mergeAndRemoveDuplicates = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
```
Объяснение:
- Мы объединяем два массива с помощью оператора расширения `...` и затем применяем `Set`, чтобы удалить дубликаты.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---
8. Группировка элементов массива по условию
⌛ Задача: Напишите функцию, которая группирует элементы массива по заданному условию.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5, 6];
groupByCondition(arr, num => num % 2 === 0);  // { even: [2, 4, 6], odd: [1, 3, 5] }
```
🎯 Решение:
```javascript
const groupByCondition = (arr, condition) => {
  return arr.reduce((acc, item) => {
    const key = condition(item) ? 'even' : 'odd';
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};
```
Объяснение:
- Мы используем `reduce()` для создания объекта, где ключами будут "even" и "odd", в зависимости от условия. Внутри `reduce()` мы проверяем, подходит ли элемент под условие, и группируем его в соответствующий массив.
Сложность: O(n), где `n` — длина массива.
---
1. Перевод массива строк в массив объектов
⌛ Задача: Напишите функцию, которая преобразует массив строк в массив объектов с ключом `value`.
Пример:
```javascript
const arr = ['apple', 'banana', 'cherry'];
convertToObjects(arr);  // [{ value: 'apple' }, { value: 'banana' }, { value: 'cherry' }]
```
🎯 Решение:
```javascript
const convertToObjects = (arr) => {
  return arr.map(item => ({ value: item }));
};
```
Объяснение:
- Мы используем метод `map()`, чтобы пройтись по массиву строк и для каждого элемента возвращать объект с ключом `value`.
Сложность: O(n), где `n` — длина массива.
---
2. Отсортировать массив строк по длине
⌛ Задача: Напишите функцию, которая сортирует массив строк по длине каждой строки.
Пример:
```javascript
const arr = ['apple', 'banana', 'kiwi', 'cherry'];
sortByLength(arr);  // ['kiwi', 'apple', 'banana', 'cherry']
```
🎯 Решение:
```javascript
const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};
```
Объяснение:
- Мы используем метод `sort()`, который позволяет передать функцию сравнения. В нашем случае мы сортируем строки по их длине, сравнивая значения `a.length` и `b.length`.
Сложность: O(n log n) — сортировка.
---
3. Перевод массива объектов в одномерный массив значений
⌛ Задача: Напишите функцию, которая преобразует массив объектов в одномерный массив значений по определенному ключу.
Пример:
```javascript
const arr = [
  { name: 'Alex', age: 30 },
  { name: 'Ivan', age: 25 },
  { name: 'Joe', age: 35 }
];
extractValues(arr, 'name');  // ['Alex', 'Ivan', 'Joe']
```
🎯 Решение:
```javascript
const extractValues = (arr, key) => {
  return arr.map(item => item[key]);
};
```
Объяснение:
- Мы используем метод `map()`, чтобы извлечь значение по ключу из каждого объекта и вернуть новый массив этих значений.
Сложность: O(n), где `n` — количество объектов в массиве.
---
4. Проверка на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны).
Пример:
```javascript
const str = 'racecar';
isPalindrome(str);  // true
```
🎯 Решение:
```javascript
const isPalindrome = (str) => {
  const arr = str.split('');
  const reversedArr = arr.reverse();
  return arr.join('') === reversedArr.join('');
};
```
Объяснение:
- Мы разделяем строку на массив символов с помощью `split('')`, затем разворачиваем массив с помощью `reverse()` и снова соединяем элементы массива в строку с помощью `join('')`. Если исходная строка совпадает с перевёрнутой, то она является палиндромом.
Сложность: O(n), где `n` — длина строки.
---
5. Перемешивание массива (Shuffle)
⌛ Задача: Напишите функцию, которая случайным образом перемешивает элементы массива.
Пример:
```javascript
const arr = [1, 2, 3, 4, 5];
shuffle(arr);  // Массив будет перемешан, например [4, 2, 1, 5, 3]
```
🎯 Решение:
```javascript
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Обмен элементов
  }
  return arr;
};
```
Объяснение:
- Это алгоритм Фишера-Йейтса (или Рандомный обмен), который эффективно перемешивает массив с помощью случайных обменов элементов.
Сложность: O(n), где `n` — длина массива.
---
6. Нахождение разницы двух массивов
⌛ Задача: Напишите функцию, которая находит элементы, присутствующие в одном массиве, но отсутствующие в другом.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
difference(arr1, arr2);  // [1, 2]
```
🎯 Решение:
```javascript
const difference = (arr1, arr2) => {
  return arr1.filter(item => !arr2.includes(item));
};
```
Объяснение:
- Мы используем метод `filter()`, чтобы оставить только те элементы из `arr1`, которые не присутствуют в `arr2`. Метод `includes()` проверяет наличие элемента в другом массиве.
Сложность: O(n * m), где `n` и `m` — длины двух массивов.
---
7. Конкатенация и уникализация двух массивов
⌛ Задача: Напишите функцию, которая объединяет два массива и удаляет все дубликаты.
Пример:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
concatenateAndRemoveDuplicates(arr1, arr2);  // [1, 2, 3, 4, 5, 6]
```
🎯 Решение:
```javascript
const concatenateAndRemoveDuplicates = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
```
Объяснение:
- Мы объединяем два массива с помощью оператора расширения `...`, затем применяем `Set`, чтобы удалить все дубликаты и снова преобразуем результат в массив с помощью оператора расширения.
Сложность: O(n + m), где `n` и `m` — длины двух массивов.
---------------------
⋙ ❍ ⌛ Задача: Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min:
---
Для нахождения наибольшего и наименьшего элемента в массиве без использования встроенных методов **`Math.max`** и **`Math.min`**, можно воспользоваться различными подходами, например, с помощью цикла или метода `reduce`. Рассмотрим несколько вариантов реализации.
🎯 Решение:
1. Использование цикла `for`
Самый простой способ — пройти по массиву с помощью цикла и обновлять значения наибольшего и наименьшего элементов по мере обхода.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Инициализируем переменные `max` и `min` первым элементом массива.
- Проходим по массиву и, если текущий элемент больше или меньше текущих значений, обновляем `max` или `min`.
- В конце массива `max` и `min` содержат наибольшее и наименьшее значение.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива.
- Пространственная сложность: \( O(1) \), так как мы используем только две переменные.
---
2. Использование метода `reduce`
Метод `reduce` позволяет аккумулировать результат (в нашем случае максимальное и минимальное значение) за один проход по массиву.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const { max, min } = numbers.reduce(
  (acc, num) => {
    if (num > acc.max) acc.max = num;
    if (num < acc.min) acc.min = num;
    return acc;
  },
  { max: numbers[0], min: numbers[0] }
);

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Используем метод `reduce`, чтобы пройти по массиву и отслеживать минимальное и максимальное значения в объекте `acc`.
- На каждом шаге проверяем, если текущий элемент больше `max` или меньше `min`, обновляем соответствующие значения.
Сложность:
- Временная сложность: \( O(n) \).
- Пространственная сложность: \( O(1) \), поскольку мы храним только два значения (максимум и минимум).
---
3. Использование цикла `for...of`
Цикл `for...of` позволяет перебирать элементы массива, и таким же образом можно отслеживать наибольший и наименьший элементы.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (const num of numbers) {
  if (num > max) max = num;
  if (num < min) min = num;
}

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Этот метод использует цикл `for...of` для перебора всех элементов массива.
- В цикле проверяется, если текущий элемент больше или меньше максимального и минимального значений, обновляем их.
Сложность:
- Временная сложность: \( O(n) \).
- Пространственная сложность: \( O(1) \).
---
4. Использование метода `sort` (не оптимальный способ)
Можно отсортировать массив, а затем взять первый и последний элементы для нахождения минимального и максимального значений. Однако этот метод имеет худшую производительность, так как требует сортировки.
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const sortedNumbers = [...numbers].sort((a, b) => a - b);

const min = sortedNumbers[0];
const max = sortedNumbers[sortedNumbers.length - 1];

console.log("Максимум:", max); // 20
console.log("Минимум:", min); // -5
```
Объяснение:
- Мы создаём копию массива (чтобы не изменять оригинал) и сортируем его по возрастанию.
- После сортировки первый элемент массива — минимальный, а последний — максимальный.
Сложность:
- Временная сложность: \( O(n \log n) \) из-за сортировки массива.
- Пространственная сложность: \( O(n) \), так как мы создаём новый массив.
Резюме
| Способ                           | Временная сложность | Пространственная сложность | Примечание                              |
|----------------------------------|---------------------|----------------------------|----------------------------------------|
| Цикл `for`                   | \( O(n) \)          | \( O(1) \)                 | Простой и эффективный способ.         |
| `reduce`                     | \( O(n) \)          | \( O(1) \)                 | Функциональный подход.                 |
| Цикл `for...of`              | \( O(n) \)          | \( O(1) \)                 | Очень читаемый и современный подход.  |
| Сортировка                   | \( O(n \log n) \)   | \( O(n) \)                 | Не самый оптимальный метод.           |
Рекомендации
- Используйте цикл `for`, `for...of` или `reduce` для наилучшей производительности (все эти методы имеют сложность \( O(n) \)).
- Сортировка подходит только для случаев, когда нужно отсортировать весь массив или когда сортировка — это часть задачи.
---------------------
⋙ ❍ Обработка данных в массиве определенным образом с решением O(n):
---
Для обработки данных в массиве с временем работы O(n), нам нужно пройти по всем элементам массива один раз и выполнить необходимые операции. Это может включать:
- Фильтрацию элементов.
- Модификацию значений.
- Применение определённых вычислений.
- Группировку или агрегацию данных.
Предлагаю рассмотреть несколько вариантов задач и решений с O(n) сложностью.
---
1. Преобразование массива (например, умножение всех элементов на 2)
⌛ Задача:
Необходимо пройти по всем элементам массива и умножить их на 2.
🎯 Решение:
```javascript
function multiplyByTwo(arr) {
  return arr.map(num => num * 2); // Используем map для преобразования элементов массива
}

const numbers = [1, 2, 3, 4, 5];
console.log(multiplyByTwo(numbers)); // [2, 4, 6, 8, 10]
```
Объяснение:
- Метод `map()` создает новый массив, в котором каждый элемент преобразован в соответствии с заданной функцией.
- Мы просто умножаем каждый элемент на 2.
- Сложность: \( O(n) \), где \( n \) — длина массива.
---
2. Фильтрация элементов массива (например, все числа больше 10)
⌛ Задача:
Необходимо из массива выбрать все элементы, которые больше 10.
🎯 Решение:
```javascript
function filterGreaterThanTen(arr) {
  return arr.filter(num => num > 10); // Используем filter для фильтрации элементов
}

const numbers = [5, 12, 8, 15, 3, 20];
console.log(filterGreaterThanTen(numbers)); // [12, 15, 20]
```
Объяснение:
- Метод `filter()` создаёт новый массив, включающий только те элементы, которые соответствуют условию (в данном случае больше 10).
- Сложность: \( O(n) \), где \( n \) — длина массива.
---
3. Нахождение суммы всех элементов массива
⌛ Задача:
Необходимо вычислить сумму всех чисел в массиве.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0); // Используем reduce для суммирования элементов
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Метод `reduce()` позволяет аккумулировать результат, в данном случае сумму элементов массива.
- Начальное значение аккумулятора — 0.
- Сложность: \( O(n) \), так как мы проходим по всем элементам массива.
---
4. Группировка данных по ключу
⌛ Задача:
Необходимо сгруппировать объекты по определенному свойству, например, по возрасту.
🎯 Решение:
```javascript
function groupByAge(arr) {
  return arr.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {});
}

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

console.log(groupByAge(people));
/*
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35: [{ name: 'Eve', age: 35 }]
}
*/
```
Объяснение:
- Мы используем `reduce()` для создания объекта, где ключами будут возраст, а значениями — массивы людей с этим возрастом.
- Сложность: \( O(n) \), так как мы проходим по каждому элементу массива.
---
5. Нахождение максимального и минимального элементов массива
⌛ Задача:
Найти максимальный и минимальный элементы массива за один проход.
🎯 Решение:
```javascript
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

const numbers = [10, 5, 8, 20, 1, -5];
console.log(findMaxMin(numbers)); // { max: 20, min: -5 }
```
Объяснение:
- Мы проходим по массиву один раз и поддерживаем два значения — `max` и `min`.
- Каждый элемент сравнивается с текущими `max` и `min`, и если он больше/меньше, то обновляются соответствующие значения.
- Сложность: \( O(n) \), так как мы проходим по всем элементам массива.
---
6. Нахождение дубликатов в массиве
⌛ Задача:
Найти все повторяющиеся элементы в массиве.
🎯 Решение:
```javascript
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicates.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }

  return [...duplicates];
}

const numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 9, 1];
console.log(findDuplicates(numbers)); // [1, 2, 3]
```
Объяснение:
- Мы используем два набора (`Set`): один для отслеживания уже встреченных элементов, другой для хранения дубликатов.
- Когда элемент уже встречался, он добавляется в набор дубликатов.
- Сложность: \( O(n) \), так как проверка наличия элемента в `Set` и добавление происходят за O(1).
Резюме
- Время работы O(n) означает, что мы проходим по всем элементам массива только один раз.
- Для всех этих решений мы используем стандартные методы массива, такие как `map`, `filter`, `reduce`, и циклы, что обеспечивает эффективность и простоту кода.
---------------------
⋙ ❍ Объекты:
---
1. Клонирование объекта
⌛ Задача: Напишите функцию для клонирования объекта. Убедитесь, что вложенные объекты также клонируются.
🎯 Решение
```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // { a: 1, b: { c: 2 } }
```
Объяснение:
- Используем `JSON.stringify` для преобразования объекта в строку и `JSON.parse` для создания нового объекта.
- Это метод работает только для объектов, которые не содержат функций или циклических ссылок.
---
2. Проверка, является ли объект пустым
⌛ Задача: Напишите функцию для проверки, является ли объект пустым.
🎯 Решение:
```javascript
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
```
Объяснение:
- Метод `Object.keys()` возвращает массив ключей объекта. Если его длина равна 0, объект пуст.
---
3. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта.
🎯 Решение:
```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread (`...`) для объединения двух объектов. Если ключи совпадают, значение из второго объекта перезапишет значение из первого.
---
4. Глубокое сравнение объектов
⌛ Задача: Напишите функцию для глубокого сравнения двух объектов.
🎯 Решение:
```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1 }, { b: 1 })); // false
```
Объяснение:
- Используется рекурсивный метод для глубокого сравнения всех свойств объектов.
---
5. Копирование свойств одного объекта в другой
⌛ Задача: Напишите функцию для копирования всех свойств одного объекта в другой.
🎯 Решение:
```javascript
function copyProperties(target, source) {
  Object.assign(target, source);
}

const target = {};
const source = { a: 1, b: 2 };
copyProperties(target, source);
console.log(target); // { a: 1, b: 2 }
```
Объяснение:
- Используем `Object.assign()` для копирования всех свойств из одного объекта в другой.
---
6. Получение списка значений объекта
⌛ Задача: Напишите функцию, которая возвращает все значения объекта в виде массива.
🎯 Решение:
```javascript
function getValues(obj) {
  return Object.values(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(getValues(obj)); // [1, 2, 3]
```
Объяснение:
- `Object.values()` возвращает массив всех значений объекта.
---
7. Проверка, содержит ли объект ключ
⌛ Задача: Напишите функцию для проверки, существует ли ключ в объекте.
🎯 Решение:
```javascript
function hasKey(obj, key) {
  return key in obj;
}

const obj = { a: 1, b: 2 };
console.log(hasKey(obj, 'a')); // true
console.log(hasKey(obj, 'c')); // false
```
Объяснение:
- Используем оператор `in` для проверки наличия ключа в объекте.
---
8. Удаление ключа из объекта
⌛ Задача: Напишите функцию для удаления ключа из объекта.
🎯 Решение:
```javascript
function deleteKey(obj, key) {
  delete obj[key];
}

const obj = { a: 1, b: 2 };
deleteKey(obj, 'a');
console.log(obj); // { b: 2 }
```
Объяснение:
- Используем оператор `delete` для удаления свойства из объекта.
---
9. Создание объекта с дефолтными значениями
⌛ Задача: Напишите функцию, которая создаёт объект с дефолтными значениями для заданных ключей.
🎯 Решение:
```javascript
function createObjectWithDefaults(keys, defaultValue) {
  return keys.reduce((obj, key) => {
    obj[key] = defaultValue;
    return obj;
  }, {});
}

console.log(createObjectWithDefaults(['a', 'b', 'c'], 0)); // { a: 0, b: 0, c: 0 }
```
Объяснение:
- Используем метод `reduce` для создания объекта с заданными ключами и значением по умолчанию.
---
10. Объединение объектов с приоритетом последнего
⌛ Задача: Напишите функцию для объединения двух объектов, где свойства из второго объекта перезаписывают свойства из первого.
🎯 Решение:
```javascript
function mergeWithPriority(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeWithPriority(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread для объединения объектов, при этом значения из второго объекта перезаписывают значения первого.
---
11. Преобразование объекта в массив с парами [ключ, значение]
⌛ Задача: Напишите функцию для преобразования объекта в массив пар ключ-значение.
🎯 Решение:
```javascript
function objectToArray(obj) {
  return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]
```
Объяснение:
- `Object.entries()` возвращает массив с парами `[ключ, значение]`.
---
12. Изменение значения свойства в объекте по ключу
⌛ Задача: Напишите функцию, которая изменяет значение свойства объекта по ключу.
🎯 Решение:
```javascript
function updateValue(obj, key, value) {
  obj[key] = value;
}

const obj = { a: 1, b: 2 };
updateValue(obj, 'a', 10);
console.log(obj); // { a: 10, b: 2 }
```
Объяснение:
- Просто обновляем значение свойства по ключу.
---
13. Сравнение двух объектов
⌛ Задача: Напишите функцию для сравнения двух объектов на равенство.
🎯 Решение:
```javascript
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(objectsEqual(obj1, obj2)); // true
```
Объяснение:
- Сравниваем объекты, преобразуя их в строки с помощью `JSON.stringify()`.
---
14. Сортировка ключей объекта
⌛ Задача: Напишите функцию для сортировки ключей объекта.
🎯 Решение:
```javascript
function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  sortedKeys.forEach(key => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

const obj = { b: 2, a: 1, c: 3 };
console.log(sortObjectKeys(obj)); // { a: 1, b: 2, c: 3 }
```
Объяснение:
- Используем `Object.keys()` для получения ключей и сортируем их.
- Создаём новый объект с отсортированными ключами.
---
15. Получение всех значений определённого типа из объекта
⌛ Задача: Напишите функцию для получения всех значений объекта, которые имеют определённый тип.
🎯 Решение:
```javascript
function getValuesByType(obj, type) {
  return Object.values(obj).filter(value => typeof value === type);
}

const obj = { a: 1, b: 'hello', c: true, d: 42 };
console.log(getValuesByType(obj, 'number')); // [1, 42]
```
Объяснение:
- Используем `Object.values()` для получения всех значений и `filter()` для фильтрации по типу.
---
16. Создание нового объекта с изменёнными значениями
⌛ Задача: Напишите функцию для создания нового объекта, в котором все значения изменены.
🎯 Решение:
```javascript
function transformValues(obj, transformFunc) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, transformFunc(value)])
  );
}

const obj = { a: 1, b: 2, c: 3 };
const result = transformValues(obj, value => value * 2);
console.log(result); // { a: 2, b: 4, c: 6 }
```
Объяснение:
- Мы используем `Object.entries()` для получения массива пар ключ-значение, затем применяем функцию преобразования и восстанавливаем объект с помощью **`Object.fromEntries()`**.
---
17. Извлечение ключей и значений из объекта в массив
⌛ Задача: Напишите функцию для извлечения всех ключей и значений объекта в массив.
🎯 Решение:
```javascript

function extractKeysValues(obj) {
  return Object.entries(obj).flat();
}

const obj = { a: 1, b: 2, c: 3 };
console.log(extractKeysValues(obj)); // ['a', 1, 'b', 2, 'c', 3]
```
Объяснение:
- Используем `Object.entries()` для извлечения пар ключ-значение и метод `flat()` для превращения результата в плоский массив.
---------------------
⋙ ❍ Сортировки:
---
1. Сортировка массива чисел по возрастанию
⌛ Задача: Напишите функцию, которая сортирует массив чисел по возрастанию.
🎯 Решение:
```javascript
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortAscending(numbers)); // [1, 3, 5, 8, 10]
```
Объяснение:
- Используем метод `sort()` для сортировки массива.
- Сортировка происходит по числовому значению, поэтому мы передаем функцию сравнения `(a, b) => a - b`.
---
2. Сортировка массива строк по длине
⌛ Задача: Напишите функцию, которая сортирует массив строк по их длине.
🎯 Решение:
```javascript
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

const strings = ['apple', 'banana', 'cherry', 'kiwi'];
console.log(sortByLength(strings)); // ['kiwi', 'apple', 'banana', 'cherry']
```
Объяснение:
- Мы используем `sort()` с функцией сравнения по длине строк.
---
3. Сортировка по убыванию
⌛ Задача: Напишите функцию, которая сортирует массив чисел по убыванию.
🎯 Решение:
```javascript
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortDescending(numbers)); // [10, 8, 5, 3, 1]
```
Объяснение:
- Мы меняем местами a и b в функции сравнения, чтобы отсортировать массив по убыванию.
---
4. Сортировка массива объектов по значению поля
⌛ Задача: Напишите функцию, которая сортирует массив объектов по значению заданного поля.
🎯 Решение:
```javascript
function sortByField(arr, field) {
  return arr.sort((a, b) => a[field] - b[field]);
}

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
console.log(sortByField(users, 'age')); // [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```
Объяснение:
- Сортируем объекты по полю age.
- Используем метод `sort()`, передавая функцию, которая сравнивает значения поля объекта.
---
5. Сортировка массива объектов по строковому значению
⌛ Задача: Напишите функцию, которая сортирует массив объектов по строковому полю.
🎯 Решение:
```javascript
function sortByStringField(arr, field) {
  return arr.sort((a, b) => a[field].localeCompare(b[field]));
}

const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
console.log(sortByStringField(users, 'name')); // [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```
Объяснение:
- Для строковых данных используем метод `localeCompare()`, который выполняет сравнение строк с учётом локализации.
---
6. Сортировка массива с несколькими критериями
⌛ Задача: Напишите функцию, которая сортирует массив объектов по нескольким критериям.
🎯 Решение:
```javascript
function sortByMultipleFields(arr) {
  return arr.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
console.log(sortByMultipleFields(users));
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }, { name: 'Bob', age: 30 }]
```
Объяснение:
- Мы сортируем сначала по age, а если возраст одинаковый, то по имени.
---
7. Сортировка с использованием `sort()` и `reverse()`
⌛ Задача: Напишите функцию, которая сортирует массив по возрастанию, а затем переворачивает его.
🎯 Решение:
```javascript
function sortAndReverse(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

const numbers = [10, 5, 8, 1, 3];
console.log(sortAndReverse(numbers)); // [10, 8, 5, 3, 1]
```
Объяснение:
- Сначала сортируем массив по возрастанию, а затем применяем `reverse()` для переворота массива.
---
8. Сортировка массива чисел с учетом NaN
⌛ Задача: Напишите функцию, которая сортирует массив чисел, учитывая наличие значения **`NaN`**.
🎯 Решение:
```javascript
function sortWithNaN(arr) {
  return arr.sort((a, b) => {
    if (isNaN(a) && !isNaN(b)) return 1;
    if (!isNaN(a) && isNaN(b)) return -1;
    return a - b;
  });
}

const numbers = [10, NaN, 5, 8, NaN, 1];
console.log(sortWithNaN(numbers)); // [1, 5, 8, 10, NaN, NaN]
```
Объяснение:
- В функции сравнения сначала проверяем, является ли элемент `NaN` и правильно сортируем его в конец массива.
---
9. Сортировка массива строк по алфавиту
⌛ Задача: Напишите функцию, которая сортирует массив строк по алфавиту.
🎯 Решение:
```javascript
function sortAlphabetically(arr) {
  return arr.sort();
}

const words = ['banana', 'apple', 'cherry'];
console.log(sortAlphabetically(words)); // ['apple', 'banana', 'cherry']
```
Объяснение:
- Метод `sort()` для строк сортирует их по алфавиту.
---
10. Сортировка массива объектов с нестандартной функцией сравнения
⌛ Задача: Напишите функцию для сортировки массива объектов с использованием нестандартной функции сравнения.
🎯 Решение:
```javascript
function customSort(arr) {
  return arr.sort((a, b) => b.age - a.age);
}

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
console.log(customSort(users)); // [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]
```
Объяснение:
- Мы создаем собственную функцию сравнения, чтобы сортировать по age в порядке убывания.
---
11. Сортировка массива с использованием алгоритма пузырьковой сортировки
⌛ Задача: Реализуйте пузырьковую сортировку.
🎯 Решение:
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // обмен
      }
    }
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Пузырьковая сортировка повторно перебирает массив и меняет элементы местами, если они находятся в неправильном порядке.
---
12. Сортировка массива с использованием сортировки вставками
⌛ Задача: Реализуйте сортировку вставками.
🎯 Решение:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Мы перебираем массив и на каждом шаге вставляем текущий элемент в отсортированную часть массива.
---
13. Сортировка массива с использованием сортировки выбором
⌛ Задача: Реализуйте сортировку выбором.
🎯 Решение:
```javascript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // обмен
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(selectionSort(numbers)); // [1, 2, 5, 5, 6, 9]
```
Объяснение:
- Мы находим минимальный элемент в оставшейся части массива и меняем его местами с первым элементом не отсортированной части массива.
---
14. Сортировка массива чисел с нуля
⌛ Задача: Напишите функцию, которая сортирует массив, перемещая все нули в конец массива.
🎯 Решение:
```javascript
function moveZerosToEnd(arr) {
  const nonZeros = arr.filter(num => num !== 0);
  const zeros = arr.length - nonZeros.length;
  return [...nonZeros, ...Array(zeros).fill(0)];
}

const numbers = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(numbers)); // [1, 3, 12, 0, 0]
```
Объяснение:
- Сначала фильтруем все нули с помощью `filter`, затем заполняем конец массива нулями.
---
15. Сортировка массива по датам
⌛ Задача: Напишите функцию, которая сортирует массив объектов по датам.
🎯 Решение:
```javascript
function sortByDate(arr) {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
}

const events = [
  { name: 'Event 1', date: '2022-01-01' },
  { name: 'Event 2', date: '2023-01-01' },
  { name: 'Event 3', date: '2021-01-01' }
];

console.log(sortByDate(events)); // Сортировка по дате
```
Объяснение:
- Сравниваем даты, преобразованные в объект `Date`.
---
16. Сортировка массива строк с игнорированием регистра
⌛ Задача: Напишите функцию, которая сортирует массив строк, игнорируя регистр.
🎯 Решение:
```javascript
function sortIgnoringCase(arr) {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

const words = ['Banana', 'apple', 'cherry', 'date'];
console.log(sortIgnoringCase(words)); // ['apple', 'Banana', 'cherry', 'date']
```
Объяснение:
- Мы приводим строки к нижнему регистру перед сравнением с помощью `toLowerCase()`.
---
17. Сортировка массива по числовым значениям с учётом десятичных
⌛ Задача: Напишите функцию, которая сортирует массив строк, содержащих числа с десятичными точками.
🎯 Решение:
```javascript
function sortByDecimal(arr) {
  return arr.sort((a, b) => parseFloat(a) - parseFloat(b));
}

const numbers = ['10.5', '2.1', '5.7', '3.3'];
console.log(sortByDecimal(numbers)); // ['2.1', '3.3', '5.7', '10.5']
```
Объяснение:
- Мы используем `parseFloat()` для преобразования строк в числа перед сортировкой.
---------------------
⋙ ❍ События:
---
1. Обработчик события на клик
⌛ Задача: Напишите обработчик события для клика на кнопку, который изменяет текст в элементе.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('text').innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- Мы добавляем обработчик события `click` для кнопки, который изменяет текст внутри параграфа при клике.
---
2. Повторная привязка обработчика события
⌛ Задача: Напишите код, который будет привязывать обработчик события на клик с изменением текста, но только один раз.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  const button = document.getElementById('myButton');
  const text = document.getElementById('text');

  button.addEventListener('click', function handler() {
    text.innerText = 'Text changed!';
    button.removeEventListener('click', handler); // Удаляем обработчик после первого клика
  });
</script>
```
Объяснение:
- Мы используем `removeEventListener`, чтобы удалить обработчик после его выполнения один раз.
---
3. Событие на изменении значения в поле ввода
⌛ Задача: Напишите обработчик события на `input`, который будет выводить в консоль текущее значение введённого текста.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">

<script>
  document.getElementById('myInput').addEventListener('input', function(event) {
    console.log(event.target.value);
  });
</script>
```
Объяснение:
- Используем событие `input` для отслеживания изменений в поле ввода.
---
4. Остановка распространения события
⌛ Задача: Напишите код, который отменяет распространение клика по кнопке, предотвращая его от всплытия.
🎯 Решение:
```html
<div id="outerDiv" style="padding: 20px; background-color: lightblue;">
  <button id="myButton">Click me</button>
</div>

<script>
  document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Outer div clicked');
  });

  document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    alert('Button clicked');
  });
</script>
```
Объяснение:
- Используем `event.stopPropagation()` для предотвращения всплытия события от кнопки к родительскому элементу.
---
5. Делегирование событий
⌛ Задача: Реализуйте обработчик события для нескольких кнопок внутри одного контейнера с использованием делегирования событий.
🎯 Решение:
```html
<div id="buttonContainer">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

<script>
  document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      console.log('Clicked on:', event.target.innerText);
    }
  });
</script>
```
Объяснение:
- Делегируем событие на контейнер, и проверяем, что клик был сделан на `button`. Это позволяет обрабатывать события на множестве элементов без привязки обработчиков к каждому из них.
---
6. Событие на фокус
⌛ Задача: Напишите обработчик события `focus`, который меняет цвет рамки вокруг поля ввода при его фокусе.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Focus me">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.borderColor = 'green';
  });

  document.getElementById('myInput').addEventListener('blur', function() {
    this.style.borderColor = '';
  });
</script>
```
Объяснение:
- Используем событие `focus` для изменения стиля при получении фокуса, и `blur` для восстановления исходного состояния.
---
7. Отслеживание перемещения мыши
⌛ Задача: Напишите обработчик для события `mousemove`, который отслеживает позицию мыши на странице.
🎯 Решение:
```html
<script>
  document.addEventListener('mousemove', function(event) {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
</script>
```
Объяснение:
- `mousemove` отслеживает движение мыши, и мы выводим координаты позиции мыши в консоль.
---
8. Прокачка события колесика мыши
⌛ Задача: Напишите обработчик события `wheel`, который выводит в консоль, прокручивает ли пользователь страницу вверх или вниз.
🎯 Решение:
```html
<script>
  document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      console.log('Scrolling down');
    } else {
      console.log('Scrolling up');
    }
  });
</script>
```
Объяснение:
- Событие `wheel` отслеживает прокрутку мыши, а `deltaY` сообщает о направлении прокрутки.
---
9. Ключевое событие клавиатуры
⌛ Задача: Напишите обработчик для события `keydown`, который выводит нажатую клавишу.
🎯 Решение:
```html
<script>
  document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
</script>
```
Объяснение:
- Событие `keydown` отслеживает нажатие клавиш и выводит соответствующую клавишу через `event.key`.
---
10. Использование события `submit`
⌛ Задача: Напишите обработчик для события `submit` формы, который отменяет её отправку и выводит данные на экран.
🎯 Решение:
```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
  });
</script>
```
Объяснение:
- Используем `submit`* для перехвата отправки формы и `event.preventDefault()`, чтобы предотвратить её отправку. С помощью `FormData` получаем данные формы.
---
11. Использование события `resize`
⌛ Задача: Напишите обработчик для события `resize`, который выводит новые размеры окна браузера.
🎯 Решение:
```html
<script>
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });
</script>
```
Объяснение:
- `resize` отслеживает изменение размера окна браузера.
---
12. Отслеживание события `focus` и `blur`
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые изменяют стиль элемента при фокусе.
🎯 Решение:
```html
<input type="text" id="focusInput" placeholder="Focus me">

<script>
  const input = document.getElementById('focusInput');
  input.addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
  input.addEventListener('blur', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- При фокусе изменяем стиль элемента, а при потере фокуса восстанавливаем его.
---
13. Событие на двойной клик
⌛ Задача: Напишите обработчик для события `dblclick`, который меняет текст в элементе.
🎯 Решение:
```html
<p id="dblclickText">Double-click me</p>

<script>
  document.getElementById('dblclickText').addEventListener('dblclick', function() {
    this.innerText = 'Text changed!';
  });
</script>
```
Объяснение:
- `dblclick` срабатывает при двойном клике по элементу, и в данном случае изменяет текст.
---
14. Отслеживание состояния кнопки (нажатие и отпускание)
⌛ Задача: Напишите обработчики для событий `mousedown` и `mouseup`, которые изменяют стиль кнопки.
🎯 Решение:
```html
<button id="pressButton">Press me</button>

<script>
  const button = document.getElementById('pressButton');

  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightgreen';
  });

  button.addEventListener('mouseup', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- `mousedown` срабатывает, когда кнопка мыши нажата, и `mouseup` — когда отпущена.
---
15. Использование события `input` для отслеживания ввода текста
⌛ Задача: Напишите обработчик для события `input`, который будет выводить количество символов в текстовом поле.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="charCount">Characters: 0</p>

<script>
  document.getElementById('myInput').addEventListener('input', function() {
    document.getElementById('charCount').innerText = 'Characters: ' + this.value.length;
  });
</script>
```
Объяснение:
- `input` отслеживает изменения в поле ввода и обновляет количество символов.
---
16. Отслеживание фокуса в нескольких полях
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые подсвечивают поле ввода при фокусе и удаляют подсветку при потере фокуса.
🎯 Решение:
```html
<input type="text" placeholder="Name">
<input type="text" placeholder="Email">

<script>
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = 'blue';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '';
    });
  });
</script>
```
Объяснение:
- Мы используем `querySelectorAll` для выбора всех полей ввода и отслеживания фокуса и потери фокуса.
---
17. Событие перетаскивания (drag and drop)
⌛ Задача: Напишите код для перетаскивания элемента по экрану.
🎯 Решение:
html
Копировать
Редактировать
<div id="dragMe" draggable="true" style="width: 100px; height: 100px; background-color: lightblue; cursor: pointer;">Drag me</div>

<script>
  const element = document.getElementById('dragMe');

  element.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Dragging');
  });

  element.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  element.addEventListener('drop', function(event) {
    event.preventDefault();
    console.log('Dropped');
  });
</script>
Объяснение:
Используем события dragstart, dragover и drop для реализации перетаскивания элемента.
---------------------
⋙ ❍ Браузер API:
---
1. Получение геолокации пользователя
⌛ Задача: Напишите код, который получает текущее местоположение пользователя.
🎯 Решение:
```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
```
Объяснение:
- Используем `navigator.geolocation.getCurrentPosition` для получения текущего местоположения пользователя.
- Выводим координаты в консоль.
---
2. Открытие нового окна браузера
⌛ Задача: Напишите код для открытия нового окна с заданным URL.
🎯 Решение:
```javascript
const newWindow = window.open('https://example.com', '_blank', 'width=600, height=400');
```
Объяснение:
- Используем `window.open()` для открытия нового окна или вкладки с указанным URL и параметрами окна (ширина, высота и другие).
---
3. Хранение данных в localStorage
⌛ Задача: Напишите код для сохранения и извлечения данных из `localStorage`.
🎯 Решение:
```javascript
// Сохранение
localStorage.setItem('username', 'JohnDoe');

// Извлечение
const username = localStorage.getItem('username');
console.log(username); // JohnDoe
```
Объяснение:
- Используем `localStorage.setItem()` для сохранения данных и `localStorage.getItem()` для их извлечения.
- Данные сохраняются в браузере даже после перезагрузки страницы.
---
4. Уведомление пользователя
⌛ Задача: Напишите код, который отправляет уведомление пользователю.
🎯 Решение:
```javascript
if (Notification.permission === 'granted') {
  new Notification('Hello, world!');
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello, world!');
    }
  });
}
```
Объяснение:
- Используем `Notification` для создания уведомлений.
- Сначала проверяем разрешение пользователя. Если оно не отклонено, запрашиваем разрешение через `Notification.requestPermission()`.
---
5. Управление сессиями с sessionStorage
⌛ Задача: Напишите код для сохранения данных в `sessionStorage` и извлечения их.
🎯 Решение:
```javascript
// Сохранение
sessionStorage.setItem('sessionData', 'Some session data');

// Извлечение
const sessionData = sessionStorage.getItem('sessionData');
console.log(sessionData); // Some session data
```
Объяснение:
- Используем `sessionStorage`, чтобы хранить данные только для текущей сессии. Эти данные исчезают при закрытии браузера.
---
6. Работа с API событиями нажатия клавиш (KeyboardEvent)
⌛ Задача: Напишите обработчик события, который выводит нажатую клавишу в консоль.
🎯 Решение:
```javascript
document.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.key}`);
});
```
Объяснение:
- Используем событие `keydown`, чтобы отслеживать нажатия клавиш и выводить название клавиши через `event.key`.
---
7. Прокачка события мыши
⌛ Задача: Напишите код, который выводит координаты мыши в консоль при её движении.
🎯 Решение:
```javascript
document.addEventListener('mousemove', function(event) {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
```
Объяснение:
- Используем событие `mousemove`, чтобы отслеживать позицию мыши на экране и выводить координаты `clientX` и `clientY`.
---
8. Управление фокусом с использованием события `focus`
⌛ Задача: Напишите обработчик события `focus` для поля ввода, который меняет его фон.
🎯 Решение:
```html
<input type="text" id="myInput">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
</script>
```
Объяснение:
- При получении фокуса через событие `focus` изменяется стиль фона элемента.
---
9. Использование Web API для работы с файлами
⌛ Задача: Напишите код, который позволяет пользователю выбрать файл и вывести его имя в консоль.
🎯 Решение:
```html
<input type="file" id="fileInput">

<script>
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log(file.name);
  });
</script>
```
Объяснение:
- Используем событие `change` для отслеживания изменения в поле выбора файла. Извлекаем выбранный файл и выводим его имя.
---
10. Работа с таймерами (setTimeout)
⌛ Задача: Напишите код, который через 3 секунды после загрузки страницы выводит сообщение в консоль.
🎯 Решение:
```javascript
setTimeout(function() {
  console.log('This message appears after 3 seconds');
}, 3000);
```
Объяснение:
- Используем `setTimeout` для отложенного выполнения функции через заданное время (в миллисекундах).
---
11. Работа с таймерами (setInterval)
⌛ Задача: Напишите код, который каждую секунду выводит текущее время.
🎯 Решение:
```javascript
setInterval(function() {
  console.log(new Date().toLocaleTimeString());
}, 1000);
```
Объяснение:
- Используем `setInterval` для повторяющегося выполнения функции каждую секунду.
---
12. Прослушивание события изменения размера окна (resize)
⌛ Задача: Напишите обработчик для события `resize`, который выводит новые размеры окна.
🎯 Решение:
```javascript
window.addEventListener('resize', function() {
  console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
});
```
Объяснение:
- Используем событие `resize` для отслеживания изменения размера окна браузера.
---
13. Ожидание загрузки страницы с использованием события `DOMContentLoaded`
⌛ Задача: Напишите обработчик для события `DOMContentLoaded`, который сообщает, что страница загружена.
🎯 Решение:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page has been loaded');
});
```
Объяснение:
- Событие `DOMContentLoaded` срабатывает, когда DOM полностью загружен, но не обязательно загружены изображения и другие ресурсы.
---
14. Работа с Web Storage API (localStorage)
⌛ Задача: Напишите код, который сохраняет данные в `localStorage` и выводит их при загрузке страницы.
🎯 Решение:
```javascript
localStorage.setItem('user', 'Alice');
console.log(localStorage.getItem('user')); // Alice
```
Объяснение:
- `localStorage` используется для хранения данных на стороне клиента в браузере, которые сохраняются после перезагрузки страницы.
---
15. Работа с API сессий (sessionStorage)
⌛ Задача: Напишите код, который сохраняет данные в `sessionStorage` и выводит их при перезагрузке страницы.
🎯 Решение:
```javascript
sessionStorage.setItem('sessionData', 'Session data');
console.log(sessionStorage.getItem('sessionData')); // Session data
```
Объяснение:
- `sessionStorage` сохраняет данные только на текущую сессию и удаляется после закрытия вкладки или браузера.
---
16. Использование Web Workers
⌛ Задача: Создайте новый веб-воркер, который будет выполнять вычисления в фоновом потоке.
🎯 Решение:
```javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Start work');

worker.onmessage = function(event) {
  console.log('Worker says:', event.data);
};
```

```javascript
// worker.js
onmessage = function(event) {
  postMessage('Work is done');
};
```
Объяснение:
- Веб-воркеры позволяют выполнять JavaScript код в фоновом потоке без блокировки основного потока.
---
17. Использование события `beforeunload`
⌛ Задача: Напишите обработчик для события `beforeunload`, который предупреждает пользователя о возможной потере данных при закрытии страницы.
🎯 Решение:
```javascript
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave?'; // Старый стандарт для Chrome
});
```
Объяснение:
- Событие `beforeunload` позволяет вывести предупреждение пользователю перед тем, как он покинет страницу.
---------------------
⋙ ❍ ⌛ Задача: Сумма элементов массива. №1, №2, №3:
---
Вот три разных подхода для нахождения суммы элементов массива в JavaScript:
1. Использование цикла `for`
Этот метод перебирает элементы массива с помощью цикла `for` и аккумулирует их сумму в переменной.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 100
```
Объяснение:
- Мы инициализируем переменную `sum` как 0.
- Проходим по каждому элементу массива с помощью цикла `for`.
- Каждый элемент добавляется к `sum`.
Когда использовать:
- Простой и понятный способ, хорошо работает для небольших массивов.
- Используется, если требуется максимальный контроль над итерацией.
---
2. Использование метода `reduce`
Метод `reduce` является встроенным способом обработки массива и аккумулирования результата, в данном случае суммы.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 100
```
Объяснение:
- `reduce` принимает функцию с двумя аргументами:
  - `acc` (аккумулятор): хранит промежуточный результат (здесь сумма).
  - `curr` (текущий элемент): текущий элемент массива.
- Вторым аргументом функции `reduce` передаётся начальное значение аккумулятора (`0`).
- Каждый элемент массива добавляется к аккумулятору.
Когда использовать:
- Элегантный и краткий способ суммирования.
- Предпочтительно для работы в функциональном стиле.
---
3. Использование цикла `for...of`
Цикл `for...of` позволяет перебирать элементы массива и аккумулировать их сумму.
🎯 Решение:
Код:
```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;
for (const num of numbers) {
  sum += num;
}

console.log(sum); // 100
```
Объяснение:
- Цикл `for...of` обходит каждый элемент массива.
- Каждый элемент добавляется к переменной `sum`.
Когда использовать:
- Читаемый и лаконичный способ, особенно для простых операций.
---
Сравнение методов
| Метод          | Простота реализации | Читаемость   | Сложность   |
|----------------|---------------------|--------------|-------------|
| Цикл `for` | Высокая             | Средняя      | \( O(n) \)  |
| `reduce`   | Средняя             | Высокая      | \( O(n) \)  |
| `for...of` | Высокая             | Очень высокая| \( O(n) \)  |
---
Пример для более сложных данных
Для массивов объектов, где необходимо предварительно обработать данные перед суммированием, можно комбинировать эти методы.
Пример с использованием `reduce`:
```javascript
const items = [
  { name: 'Apple', price: 10 },
  { name: 'Banana', price: 20 },
  { name: 'Cherry', price: 30 }
];

const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice); // 60
```
Пример с использованием цикла `for`:
```javascript
let total = 0;
for (let i = 0; i < items.length; i++) {
  total += items[i].price;
}
console.log(total); // 60
```
Резюме
1. `for`:
   - Простое решение, подходит для начинающих.
   - Максимальный контроль над процессом итерации.
2. `reduce`:
   - Более функциональный и лаконичный способ.
   - Удобен для сложных вычислений (например, извлечение данных перед суммированием).
3. `for...of`:
   - Читаемый и современный способ.
   - Рекомендуется для простых операций.
---------------------
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. №1 - №4:
---
1. Использование `Math.max` и `Math.min` с оператором Spread (`...`)
Методы `Math.max` и `Math.min` возвращают максимальное или минимальное значение из списка аргументов. Для передачи массива используем оператор spread (`...`).
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Оператор spread разворачивает массив в список отдельных аргументов, которые передаются в `Math.max` или `Math.min`.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива (проход по массиву выполняется при разворачивании).
- Пространственная сложность: \( O(1) \).
---
2. Использование цикла `for`
Вы можете найти максимум и минимум вручную, перебирая элементы массива.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Сравниваем каждый элемент массива с текущими значениями `max` и `min`.
- Если элемент больше текущего `max`, обновляем `max`. Если меньше текущего `min`, обновляем `min`.
Сложность:
- Временная сложность: \( O(n) \) — один проход по массиву.
- Пространственная сложность: \( O(1) \).
---
3. Использование метода `reduce()`
Метод `reduce()` позволяет обойти массив и вычислить максимум или минимум в одном вызове.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
const min = numbers.reduce((acc, curr) => (curr < acc ? curr : acc), numbers[0]);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- В `reduce` аккумулируем максимум или минимум, сравнивая текущий элемент (`curr`) с накопленным значением (`acc`).
- Начальное значение аккумулятора (`acc`) — первый элемент массива.
Сложность:
- Временная сложность: \( O(n) \) — один проход по массиву.
- Пространственная сложность: \( O(1) \).
---
4. Сортировка массива
Мы можем отсортировать массив и взять первый или последний элемент для нахождения минимума или максимума.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

// Сортируем массив по возрастанию
const sorted = [...numbers].sort((a, b) => a - b);

const min = sorted[0]; // Первый элемент — минимальный
const max = sorted[sorted.length - 1]; // Последний элемент — максимальный

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Используем метод `sort()`, чтобы отсортировать массив по возрастанию.
- Первый элемент отсортированного массива — минимальный, а последний — максимальный.
Сложность:
- Временная сложность: \( O(n \log n) \) — время сортировки массива.
- Пространственная сложность: \( O(n) \) — из-за создания копии массива (`[...numbers]`).
Сравнение подходов
| Подход                  | Простота реализации | Временная сложность | Пространственная сложность | Подходит для |
|-------------------------|---------------------|----------------------|----------------------------|--------------|
| `Math.max`/`Math.min` | Легко              | \( O(n) \)           | \( O(1) \)                 | Маленьких массивов |
| Цикл `for`          | Средне             | \( O(n) \)           | \( O(1) \)                 | Больших массивов |
| `reduce`            | Удобно             | \( O(n) \)           | \( O(1) \)                 | Функциональный стиль |
| Сортировка          | Легко              | \( O(n \log n) \)    | \( O(n) \)                 | Маленьких массивов |
Вывод
- Используйте `Math.max`/`Math.min` для простоты, если массив небольшой.
- Используйте `for` или `reduce`, если массив большой.
- Сортировка подходит, если массив нужно упорядочить дополнительно.
---------------------
⋙ ❍ ⌛ Задача: Максимальный / минимальный элемент массива. Вариации первого способа:
---
Если использовать `Math.max` и `Math.min`, то можно предложить несколько вариаций первого способа для нахождения максимального и минимального элемента массива в JavaScript.
1. Использование `Math.max`/`Math.min` с оператором Spread
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Оператор spread (`...`) разворачивает массив в список аргументов.
- Передаётся в `Math.max` и `Math.min`, чтобы найти максимальное или минимальное значение.
Когда использовать:
- Простые массивы с небольшим числом элементов.
---
2. Использование `apply` вместо Spread
До появления оператора `...` (в ES6), использовался метод `apply`, который позволяет передать массив в функцию как список аргументов.
🎯 Решение:
Код:
```javascript
const numbers = [10, 5, 8, 20, 1, -5];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 20
console.log(min); // -5
```
Объяснение:
- Метод `apply` принимает два аргумента:
  - `thisArg` (контекст функции, здесь `null`).
  - Массив аргументов.
- Это альтернатива оператору `...`.
Когда использовать:
- Если вы работаете в старых окружениях, которые не поддерживают ES6 (например, старый браузер).
---
3. Сравнение значений в частях массива
Если массив очень большой, вы можете разбить его на части и находить максимум или минимум каждой части, а затем искать максимальное/минимальное значение среди результатов.
🎯 Решение:
Код:
```javascript
function getMaxMinInChunks(arr, chunkSize) {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push({
      max: Math.max(...chunk),
      min: Math.min(...chunk),
    });
  }

  const overallMax = Math.max(...results.map(r => r.max));
  const overallMin = Math.min(...results.map(r => r.min));

  return { overallMax, overallMin };
}

const numbers = [10, 5, 8, 20, 1, -5, 15, 30, -10, 50];
const { overallMax, overallMin } = getMaxMinInChunks(numbers, 3);

console.log(overallMax); // 50
console.log(overallMin); // -10
```
Объяснение:
- Массив делится на куски с помощью `slice`.
- Для каждого куска находится локальный максимум/минимум.
- Находим общий максимум/минимум из результатов.
Когда использовать:
- Когда массив очень большой, и вы хотите разделить его обработку.
---
4. Переопределение `Math.max`/`Math.min` для кастомных структур
Если в массиве находятся объекты, нужно передавать значения, вычисленные из объектов.
🎯 Решение:
Код:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 35 },
];

const maxAge = Math.max(...people.map(person => person.age));
const minAge = Math.min(...people.map(person => person.age));

console.log(maxAge); // 35
console.log(minAge); // 22
```
Объяснение:
- Используем `map`, чтобы извлечь из объектов только поле `age`.
- Применяем `Math.max`/`Math.min` к полученному массиву возрастов.
Когда использовать:
- Для массивов объектов или сложных структур, где требуется извлечение значений перед сравнением.
Преимущества `Math.max`/`Math.min`
- Простота кода: однострочные решения.
- Высокая читаемость, особенно с использованием `...`.
Ограничения
- Ограничение длины массива: Если массив содержит слишком много элементов (больше, чем стек вызовов функции), `Math.max(...numbers)` вызовет ошибку:
  - В большинстве браузеров максимальная длина массива ограничена примерно \( 10^4 \)–\( 10^6 \) элементами.
  - Для больших массивов лучше использовать методы с итерацией, такие как `reduce()` или `for`.
Когда использовать каждый подход
| Подход                           | Особенности                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| Spread (`Math.max(...arr)`)  | Лучший выбор для простых массивов с поддержкой ES6.                         |
| `apply`                      | Альтернатива для старых окружений, где оператор `...` недоступен.           |
| Частичный подсчёт (Chunking) | Полезно для больших массивов, когда нужно уменьшить нагрузку на память.     |
| Кастомные структуры          | Используйте `map` для предварительной обработки данных (например, массив объектов). |
---------------------
⋙ ❍ Сортировка массива:
---
Сортировка массива — это операция, в которой элементы массива упорядочиваются в определённом порядке (по возрастанию или убыванию). В JavaScript можно использовать как встроенные методы, так и реализовать собственные алгоритмы сортировки.
Вот несколько популярных методов сортировки массива в JavaScript:
1. Сортировка с использованием метода `sort()`
Метод `sort()` позволяет сортировать массивы. Он изменяет сам массив.
🎯 Пример сортировки по возрастанию (по умолчанию)
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort(); // Сортировка по умолчанию (лексикографическая сортировка)
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по возрастанию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => a - b); // Сортировка по возрастанию
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по убыванию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => b - a); // Сортировка по убыванию
console.log(array); // [8, 7, 5, 4, 2, 1]
```
Объяснение:
- Метод `sort()` по умолчанию сортирует элементы как строки, поэтому для чисел нужно указать функцию сравнения `(a, b) => a - b` для сортировки по возрастанию, или `(a, b) => b - a` для сортировки по убыванию.
---
2. Реализация сортировки слиянием (Merge Sort)
Алгоритм сортировки слиянием — это один из эффективных алгоритмов сортировки с временем выполнения O(N log N). Он работает по принципу "разделяй и властвуй".
🎯 Пример реализации сортировки слиянием
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Рекурсивно сортируем левую половину
  const right = mergeSort(arr.slice(mid)); // Рекурсивно сортируем правую половину

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const array = [5, 2, 8, 1, 4, 7];
console.log(mergeSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Алгоритм делит массив пополам, сортирует каждую половину рекурсивно и затем сливает отсортированные части.
- Сложность: O(N log N).
---
3. Реализация сортировки пузырьком (Bubble Sort)
Сортировка пузырьком — это простой, но медленный алгоритм сортировки с временем выполнения O(N^2). Он повторно проходит через массив, сравнивает соседние элементы и меняет их местами, если они в неправильном порядке.
🎯 Пример реализации сортировки пузырьком
```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Меняем местами
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Уменьшаем размер оставшегося массива для оптимизации
  } while (swapped);

  return arr;
}

const array = [5, 2, 8, 1, 4, 7];
console.log(bubbleSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Сортировка пузырьком последовательно сравнивает и меняет местами соседние элементы, пока весь массив не будет отсортирован.
---
4. Реализация сортировки вставками (Insertion Sort)
Сортировка вставками — это ещё один алгоритм сортировки с временем выполнения O(N^2). Он работает, проходя по массиву и вставляя каждый элемент в отсортированную часть массива.
🎯 Пример реализации сортировки вставками
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

const array = [5, 2, 8, 1, 4, 7];
console.log(insertionSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Алгоритм вставки последовательно вставляет элементы в отсортированную часть массива.
- Это эффективный алгоритм для сортировки маленьких массивов.
---
5. Реализация сортировки быстрой сортировки (Quick Sort)
Быстрая сортировка — это ещё один эффективный алгоритм сортировки с временем выполнения O(N log N) в среднем, но O(N^2) в худшем случае.
🎯 Пример реализации быстрой сортировки
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [5, 2, 8, 1, 4, 7];
console.log(quickSort(array)); // [1, 2, 4, 5, 7, 8]
```
Объяснение:
- Быстрая сортировка выбирает опорный элемент (pivot) и разделяет массив на два подмассива: один с элементами меньше опорного и другой с элементами больше.
- Затем рекурсивно сортирует эти подмассивы.
Вывод
Вот несколько популярных алгоритмов сортировки в JavaScript:
1. Метод `sort()` — быстрое решение для сортировки с использованием встроенных методов.
2. Сортировка слиянием — эффективный алгоритм с O(N log N).
3. Сортировка пузырьком — медленный алгоритм с O(N^2), но легко реализуемый.
4. Сортировка вставками — подходит для малых массивов с O(N^2).
5. Быстрая сортировка — эффективный алгоритм с O(N log N), но в худшем случае может быть O(N^2).
---------------------
⋙ ❍ Сортировка массива с объектами по их полям (по алфавиту и по возрастанию):
---
Сортировка массива объектов по их полям — довольно часто встречающаяся задача.
1. Сортировка массива объектов по алфавиту
⌛ Задача: Сортировать массив объектов по строковому полю (например, по имени) в алфавитном порядке.
Пример данных:
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];
```
🎯 Решение (по алфавиту по имени):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по имени (алфавитный порядок)
users.sort((a, b) => {
  if (a.name < b.name) return -1; // a приходит раньше
  if (a.name > b.name) return 1;  // b приходит раньше
  return 0; // одинаковые
});

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 }
// ]
```
Объяснение:
- Мы используем метод `sort()`, который принимает функцию сравнения. Внутри функции мы сравниваем строки `a.name` и `b.name`.
- Если `a.name` меньше `b.name`, возвращаем `-1`, что означает, что `a` должно идти раньше.
- Если наоборот, возвращаем `1`, что означает, что `b` должно идти раньше.
- Если они равны, возвращаем `0`.
---
2. Сортировка массива объектов по числовому полю (по возрастанию)
⌛ Задача: Сортировать массив объектов по числовому полю (например, по возрасту) в порядке возрастания.
🎯 Решение (по возрастанию по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по возрасту (по возрастанию)
users.sort((a, b) => a.age - b.age);

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 3, name: "Charlie", age: 28 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- В данном случае мы просто вычитаем `a.age` из `b.age`. Если результат отрицателен, значит, `a` должно идти раньше.
- Этот способ работает для числовых данных (в том числе для возраста).
---
3. Сортировка по убыванию (по числовому полю)
⌛ Задача: Сортировать массив объектов по числовому полю (например, по возрасту) в порядке убывания.
🎯 Решение (по убыванию по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по возрасту (по убыванию)
users.sort((a, b) => b.age - a.age);

console.log(users);
// Результат: [
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 },
//   { id: 1, name: "Alice", age: 25 }
// ]
```
Объяснение:
- Для сортировки по убыванию достаточно изменить порядок вычитания: `b.age - a.age`.
---
4. Сортировка по алфавиту (по строковому полю с учётом регистра)
⌛ Задача: Сортировать массив объектов по строковому полю с учётом регистра.
🎯 Решение (по имени с учётом регистра):
```javascript
const users = [
  { id: 1, name: "alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "charlie", age: 28 },
];

// Сортируем по имени с учётом регистра
users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);
// Результат: [
//   { id: 1, name: "alice", age: 25 },
//   { id: 3, name: "charlie", age: 28 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- `localeCompare()` сравнивает строки с учётом локали и возвращает результат с учётом регистра (в алфавитном порядке).
- Если `a.name` меньше, `localeCompare()` возвращает отрицательное значение, если больше — положительное, если одинаково — 0.
---
5. Сортировка по числовому полю с несколькими критериями
⌛ Задача: Сортировать массив объектов сначала по одному полю (по имени), а затем по другому (по возрасту).
🎯 Решение (сначала по имени, затем по возрасту):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Alice", age: 28 },
  { id: 4, name: "Charlie", age: 22 },
];

// Сортируем сначала по имени, потом по возрасту
users.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age; // Если имена одинаковые, сортируем по возрасту
  }
  return a.name.localeCompare(b.name); // Сортируем по имени
});

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 3, name: "Alice", age: 28 },
//   { id: 4, name: "Charlie", age: 22 },
//   { id: 2, name: "Bob", age: 30 }
// ]
```
Объяснение:
- Сначала сортируем объекты по полю `name` с использованием `localeCompare`.
- Если имена одинаковые, тогда применяем сортировку по возрасту (`age`).
Итог
Основные моменты:
- Для строк используем `localeCompare` для корректной сортировки.
- Для числовых полей достаточно просто вычитать одно значение из другого.
- Для сортировки по нескольким полям можно комбинировать сравнения.
---------------------
⋙ ❍ Задания со строками + Примитивы:
---
1. Проверка на пустую строку
⌛ Задача: Напишите функцию, которая проверяет, является ли строка пустой. Строка считается пустой, если она состоит только из пробелов.
🎯 Решение:
```javascript
function isEmpty(str) {
  return str.trim() === "";
}

console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // true
console.log(isEmpty("Hello")); // false
```
Объяснение: Используем `trim()` для удаления пробелов с начала и конца строки. Если результат пустой, значит строка пуста.
---
2. Поворот строки
⌛ Задача: Напишите функцию, которая принимает строку и возвращает её перевёрнутую версию.
🎯 Решение:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение: Мы разбиваем строку на массив символов с помощью `split("")`, затем переворачиваем его методом `reverse()`, и снова соединяем с помощью `join("")`.
---
3. Сравнение строк без учёта регистра
⌛ Задача: Напишите функцию, которая сравнивает две строки без учёта регистра.
🎯 Решение:
```javascript
function compareStringsIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareStringsIgnoreCase("hello", "HELLO")); // true
```
Объяснение: Метод `toLowerCase()` приводит обе строки к нижнему регистру перед сравнением.
---
4. Преобразование строки в массив
⌛ Задача: Напишите функцию, которая принимает строку и возвращает массив её символов.
🎯 Решение:
```javascript
function stringToArray(str) {
  return [...str];
}

console.log(stringToArray("hello")); // ["h", "e", "l", "l", "o"]
```
Объяснение: Используем оператор расширения (`...`), чтобы преобразовать строку в массив символов.
---
5. Удаление пробелов в начале и в конце строки
⌛ Задача: Напишите функцию, которая удаляет пробелы в начале и в конце строки.
🎯 Решение:
```javascript
function trimString(str) {
  return str.trim();
}

console.log(trimString("  Hello World  ")); // "Hello World"
```
Объяснение: Метод `trim()` удаляет все пробелы с начала и конца строки.
---
6. Подсчёт количества вхождений подстроки в строку
⌛ Задача: Напишите функцию, которая считает количество вхождений подстроки в строку.
🎯 Решение:
```javascript
function countSubstring(str, substring) {
  return (str.match(new RegExp(substring, "g")) || []).length;
}

console.log(countSubstring("Hello world, hello!", "hello")); // 2
```
Объяснение: Мы используем регулярное выражение с флагом `g`, чтобы найти все вхождения подстроки в строке.
---
7. Преобразование строки в число
⌛ Задача: Напишите функцию, которая принимает строку и пытается преобразовать её в число.
🎯 Решение:
```javascript
function stringToNumber(str) {
  const number = Number(str);
  return isNaN(number) ? null : number;
}

console.log(stringToNumber("123")); // 123
console.log(stringToNumber("abc")); // null
```
Объяснение: Мы используем функцию `Number()`, чтобы преобразовать строку в число. Если это невозможно, возвращаем `null`.
---
8. Проверка строки на наличие чисел
⌛ Задача: Напишите функцию, которая проверяет, содержит ли строка хотя бы одно число.
🎯 Решение:
```javascript
function containsNumber(str) {
  return /\d/.test(str);
}

console.log(containsNumber("hello123")); // true
console.log(containsNumber("hello")); // false
```
Объяснение: Используем регулярное выражение `\d`, которое проверяет наличие хотя бы одной цифры в строке.
---
9. Преобразование строки в заглавные буквы
⌛ Задача: Напишите функцию, которая преобразует все буквы в строке в верхний регистр.
🎯 Решение:
```javascript
function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(toUpperCase("hello")); // "HELLO"
```
Объяснение: Метод `toUpperCase()` преобразует все символы строки в верхний регистр.
---
10. Преобразование строки в строчные буквы
⌛ Задача: Напишите функцию, которая преобразует все буквы в строке в нижний регистр.
🎯 Решение:
```javascript
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO")); // "hello"
```
Объяснение: Метод `toLowerCase()` преобразует все символы строки в нижний регистр.
---
11. Форматирование числа с разделением на группы по 3 знака
⌛ Задача: Напишите функцию, которая принимает число и форматирует его с разделением на группы по 3 знака.
🎯 Решение:
```javascript
function formatNumber(number) {
  return number.toLocaleString();
}

console.log(formatNumber(123456789)); // "123,456,789"
```
Объяснение: Используем метод `toLocaleString()`, который автоматически добавляет разделители тысяч в зависимости от локали.
---
12. Инвертирование регистра букв в строке
⌛ Задача: Напишите функцию, которая инвертирует регистр каждой буквы в строке (маленькая → большая, большая → маленькая).
🎯 Решение:
```javascript
function invertCase(str) {
  return str.split("").map((char) =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  ).join("");
}

console.log(invertCase("HeLLo WoRLd")); // "hEllO wOrlD"
```
Объяснение: Мы разделяем строку на массив символов, меняем регистр каждого символа и снова собираем строку.
---
13. Удаление всех пробелов из строки
⌛ Задача: Напишите функцию, которая удаляет все пробелы из строки.
🎯 Решение:
```javascript
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
console.log(removeSpaces("  Hello   World  ")); // "HelloWorld"
```
Объяснение: Используем регулярное выражение `\s+`, которое удаляет все пробелы и символы пробела (включая табуляцию, переводы строки).
---
14. Разделение строки на слова
⌛ Задача: Напишите функцию, которая разделяет строку на слова, используя пробел как разделитель.
🎯 Решение:
```javascript
function splitIntoWords(str) {
  return str.split(" ");
}

console.log(splitIntoWords("Hello world! How are you?")); // ["Hello", "world!", "How", "are", "you?"]
```
Объяснение: Метод `split(" ")` разбивает строку на массив по пробелам.
---
15. Проверка строки на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом (то есть она читается одинаково слева направо и справа налево).
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, "").toLowerCase(); // Убираем все не-буквенные символы и приводим к нижнему регистру
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```
Объяснение: Мы очищаем строку от всех ненужных символов и проверяем, равна ли строка своему перевёрнутому варианту.
---
16. Подсчёт количества уникальных символов в строке
⌛ Задача: Напишите функцию, которая подсчитывает количество уникальных символов в строке.
🎯 Решение:
```javascript
function countUniqueChars(str) {
  const uniqueChars = new Set(str);
  return uniqueChars.size;
}

console.log(countUniqueChars("hello")); // 4
```
Объяснение: Мы используем объект `Set`, который хранит только уникальные элементы, и возвращаем количество уникальных символов.
---
17. Преобразование строки в формат с заглавными буквами для каждого слова
⌛ Задача: Напишите функцию, которая преобразует строку в формат, где каждое слово начинается с заглавной буквы.
🎯 Решение:
```javascript
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"
```
Объяснение: Мы разделяем строку на слова, приводим первую букву каждого слова к верхнему регистру и снова собираем строку.
---------------------
⋙ ❍ Задания с Примитивами:
---
1. Проверка типа данных с использованием `typeof`
⌛ Задача: Напишите функцию, которая принимает значение и возвращает его тип с использованием оператора `typeof`.
🎯 Решение:
```javascript
function checkType(value) {
  return typeof value;
}

console.log(checkType(123)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(true)); // "boolean"
console.log(checkType({})); // "object"
console.log(checkType(undefined)); // "undefined"
```
Объяснение: Оператор `typeof` возвращает строку, указывающую тип переданного значения.
---
2. Преобразование строки в число
⌛ Задача: Напишите функцию, которая принимает строку и преобразует её в число.
🎯 Решение:
```javascript
function stringToNumber(str) {
  return Number(str);
}

console.log(stringToNumber("123")); // 123
console.log(stringToNumber("abc")); // NaN
```
Объяснение: Используем `Number()` для преобразования строки в число. Если строка не может быть преобразована, возвращается `NaN`.
---
3. Проверка на NaN с использованием `isNaN`
⌛ Задача: Напишите функцию, которая проверяет, является ли переданное значение `NaN`.
🎯 Решение:
```javascript
function isNotANumber(value) {
  return isNaN(value);
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(123)); // false
```
Объяснение: Функция `isNaN()` проверяет, является ли значение `NaN`.
---
4. Округление числа до ближайшего целого
⌛ Задача: Напишите функцию, которая округляет число до ближайшего целого.
🎯 Решение:
```javascript
function roundNumber(num) {
  return Math.round(num);
}

console.log(roundNumber(4.5)); // 5
console.log(roundNumber(4.4)); // 4
```
Объяснение: Используем `Math.round()`, который округляет число до ближайшего целого.
---
5. Округление числа вверх и вниз
⌛ Задача: Напишите функцию, которая округляет число вверх или вниз, в зависимости от значения.
🎯 Решение:
```javascript
function ceilAndFloor(num) {
  return {
    ceil: Math.ceil(num),
    floor: Math.floor(num),
  };
}

console.log(ceilAndFloor(4.3)); // { ceil: 5, floor: 4 }
```
Объяснение: `Math.ceil()` округляет число в большую сторону, а `Math.floor()` — в меньшую.
---
6. Преобразование числа в строку
⌛ Задача: Напишите функцию, которая преобразует число в строку.
🎯 Решение:
```javascript
function numberToString(num) {
  return num.toString();
}

console.log(numberToString(123)); // "123"
```
Объяснение: Используем метод `toString()` для преобразования числа в строку.
---
7. Сравнение двух чисел
⌛ Задача: Напишите функцию, которая сравнивает два числа и возвращает большее из них.
🎯 Решение:
```javascript
function compareNumbers(a, b) {
  return a > b ? a : b;
}

console.log(compareNumbers(5, 10)); // 10
console.log(compareNumbers(15, 10)); // 15
```
Объяснение: Мы используем тернарный оператор, чтобы вернуть большее из двух чисел.
---
8. Преобразование числа в строку с добавлением ведущих нулей
⌛ Задача: Напишите функцию, которая преобразует число в строку и добавляет ведущие нули, если длина строки меньше 4 символов.
🎯 Решение:
```javascript
function addLeadingZeros(num) {
  return num.toString().padStart(4, "0");
}

console.log(addLeadingZeros(5)); // "0005"
console.log(addLeadingZeros(123)); // "0123"
```
Объяснение: Метод `padStart()` добавляет символы в начало строки до достижения необходимой длины.
---
9. Преобразование булевого значения в строку
⌛ Задача: Напишите функцию, которая преобразует булевое значение в строку.
🎯 Решение:
```javascript
function booleanToString(bool) {
  return bool.toString();
}

console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"
```
Объяснение: Используем метод `toString()` для преобразования булевого значения в строку.
---
10. Получение абсолютного значения числа
⌛ Задача: Напишите функцию, которая возвращает абсолютное значение числа.
🎯 Решение:
```javascript
function getAbsoluteValue(num) {
  return Math.abs(num);
}

console.log(getAbsoluteValue(-5)); // 5
console.log(getAbsoluteValue(5)); // 5
```
Объяснение: Используем `Math.abs()` для получения абсолютного значения числа.
---
11. Получение случайного числа
⌛ Задача: Напишите функцию, которая генерирует случайное число от 1 до 10.
🎯 Решение:
```javascript
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber()); // Рандомное число от 1 до 10
```
Объяснение: `Math.random()` генерирует случайное число от 0 до 1. Умножаем его на 10 и округляем с помощью `Math.floor()`.
---
12. Преобразование строки в массив
⌛ Задача: Напишите функцию, которая разделяет строку на массив по пробелам.
🎯 Решение:
```javascript
function stringToArray(str) {
  return str.split(" ");
}

console.log(stringToArray("Hello World")); // ["Hello", "World"]
```
Объяснение: Метод `split(" ")` разделяет строку на массив по пробелам.
---
13. Проверка строки на содержание подстроки
⌛ Задача: Напишите функцию, которая проверяет, содержится ли подстрока в строке.
🎯 Решение:
```javascript
function containsSubstring(str, substring) {
  return str.includes(substring);
}

console.log(containsSubstring("Hello World", "World")); // true
console.log(containsSubstring("Hello World", "Java")); // false
```
Объяснение: Метод `includes()` проверяет наличие подстроки в строке и возвращает `true` или `false`.
---
14. Получение символа по индексу
⌛ Задача: Напишите функцию, которая возвращает символ строки по указанному индексу.
🎯 Решение:
```javascript
function getCharacterAt(str, index) {
  return str.charAt(index);
}

console.log(getCharacterAt("Hello", 1)); // "e"
```
Объяснение: Метод `charAt()` возвращает символ по указанному индексу.
---
15. Подсчёт вхождений символа в строку
⌛ Задача: Напишите функцию, которая подсчитывает количество вхождений символа в строку.
🎯 Решение:
```javascript
function countCharInString(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharInString("hello", "l")); // 2
```
Объяснение: Мы разбиваем строку по символу и считаем количество частей, вычитая 1.
---
16. Преобразование строки в массив символов
⌛ Задача: Напишите функцию, которая преобразует строку в массив символов.
🎯 Решение:
```javascript
function stringToCharArray(str) {
  return [...str];
}

console.log(stringToCharArray("Hello")); // ["H", "e", "l", "l", "o"]
```
Объяснение: Мы используем оператор расширения (`...`), чтобы преобразовать строку в массив символов.
---
17. Проверка строки на полиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```
Объяснение: Мы очищаем строку от всех не-буквенных символов, приводим её к нижнему регистру и проверяем, равна ли она своему перевёрнутому варианту.
---------------------
⋙ ❍ Суммы элементов массива + array flat:
---
Давайте рассмотрим задачи на суммирование элементов массива и использование метода `flat()` в JavaScript.
1. Суммирование элементов массива
⌛ Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
🎯 Решение:
1.1. Использование цикла `for`
```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение: Мы используем цикл `for`, чтобы пройти по всем элементам массива и сложить их.
1.2. Использование `reduce()`
```javascript
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение: Метод `reduce()` используется для аккумуляции значений массива. Мы начинаем с 0 и на каждом шаге прибавляем текущий элемент.
---
2. Применение метода `flat()` для массивов
Метод `flat()` используется для выравнивания вложенных массивов на определённую глубину.
⌛ Задача: Напишите функцию, которая выравнивает массив и возвращает его плоскую версию, а затем возвращает сумму всех элементов.
🎯 Решение:
2.1. Пример с одноуровневым массивом
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];

function sumFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до максимальной глубины
  return flatArray.reduce((sum, current) => sum + current, 0);
}

console.log(sumFlattenedArray(nestedArray)); // 21
```
Объяснение:
- Метод `flat()` с параметром `Infinity` позволяет выровнять массив до самого глубокого уровня вложенности.
- Затем с помощью `reduce()` считаем сумму всех элементов массива.
2.2. Пример с массивом, содержащим несколько уровней вложенности
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];

function sumFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до самого глубокого уровня
  return flatArray.reduce((sum, current) => sum + current, 0);
}

console.log(sumFlattenedArray(nestedArray)); // 36
```
Объяснение:
- Метод `flat(Infinity)` используется для того, чтобы полностью "разгладить" (выравнять) все уровни вложенности массива.
---
3. Пример с массивом строк и чисел (смешанный тип)
⌛ Задача: Напишите функцию, которая сначала выравнивает массив, затем суммирует только числа, игнорируя строки.
🎯 Решение:
```javascript
const mixedArray = [1, 'two', [3, 'four'], [5, 6]];

function sumNumbersInFlattenedArray(arr) {
  const flatArray = arr.flat(Infinity); // Разворачиваем массив до максимальной глубины
  return flatArray.reduce((sum, current) => {
    return typeof current === 'number' ? sum + current : sum;
  }, 0);
}

console.log(sumNumbersInFlattenedArray(mixedArray)); // 15
```
Объяснение:
- Сначала выравниваем массив с помощью `flat(Infinity)`.
- В `reduce()` проверяем, является ли элемент числом, и только в этом случае добавляем его к сумме.
---
4. Суммирование элементов массива с фильтрацией (смешанный тип данных)
⌛ Задача: Напишите функцию, которая фильтрует только числовые элементы в массиве и находит их сумму.
🎯 Решение:
```javascript
const mixedArray = [1, 'hello', 3, 'world', 5, 7];

function sumNumbers(arr) {
  return arr.filter(item => typeof item === 'number').reduce((sum, current) => sum + current, 0);
}

console.log(sumNumbers(mixedArray)); // 16
```
Объяснение:
- С помощью `filter()` мы отбираем только числовые элементы массива.
- Затем с помощью `reduce()` вычисляем их сумму.
Резюме
1. Метод `reduce()`: Это основной метод для суммирования элементов массива.
2. Метод `flat()`: Используется для "выравнивания" вложенных массивов. Параметр `Infinity` позволяет выровнять массив на любой глубине.
3. Фильтрация данных: Можно отфильтровывать данные по типу (например, оставлять только числа) перед суммированием.
---------------------
⋙ ❍ Задача на Timeout внутри цикла:
---
⌛ Задача: Напишите функцию, которая внутри цикла выполняет асинхронную операцию с использованием `setTimeout` и выводит элементы массива с задержкой в 1 секунду для каждого элемента.
Усложнение: Важно, чтобы вывод элементов был выполнен с правильной задержкой, а не сразу.
🎯 Решение с использованием `setTimeout` внутри цикла
Проблема: Если использовать `setTimeout` внутри цикла без учёта асинхронности, все таймеры будут запускаться сразу, а не по очереди. Это происходит из-за того, что цикл не ждёт завершения каждого таймера.
🎯 Решение:
1. Простой вариант с использованием `let`:
```javascript
function printWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(arr[i]);
    }, 1000 * i); // Задержка увеличивается на i секунд
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Объяснение:
- Используем `let` в цикле, чтобы `i` была "замкнута" в каждой итерации, что позволяет корректно увеличивать задержку для каждого элемента.
- `setTimeout()` выполняется с задержкой, которая зависит от индекса элемента массива (`1000 * i`).
🎯 Решение с использованием `var` (неправильный вариант)
```javascript
function printWithDelay(arr) {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(arr[i]);
    }, 1000 * i); // Это неправильно, так как i будет иметь одно значение по завершению цикла
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Почему это не работает:
- При использовании `var` переменная `i` будет иметь одно значение после завершения цикла (после того как цикл завершится, `i` будет равен `arr.length`), и `setTimeout` для всех элементов массива будет выполняться с одинаковой задержкой.
---
2. 🎯 Решение с использованием `async/await` и `Promise`:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    await delay(1000); // Ожидаем 1 секунду
    console.log(arr[i]);
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
printWithDelay(arr);
```
Объяснение:
- Функция `delay` возвращает `Promise`, который выполняется через заданное количество миллисекунд.
- В цикле мы используем `await` для того, чтобы при каждой итерации цикл ждал завершения `setTimeout` перед тем, как перейти к следующей итерации.
- Этот метод позволяет синхронизировать асинхронные операции в цикле.
Пояснение:
- Использование `let` в цикле: В отличие от `var`, `let` имеет блочную область видимости, что позволяет каждому таймеру быть независимым и корректно работать с задержкой.
- Использование `async/await`: Это решение позволяет синхронизировать асинхронные операции в цикле, что удобно и читабельно. Это лучший вариант для асинхронных задач, когда необходимо делать паузы между итерациями.
Резюме:
1. `setTimeout` внутри цикла с `let`: Используйте `let`, чтобы корректно привязать каждую итерацию цикла к своему времени выполнения.
2. Использование `async/await`: Это более современный и удобный подход для синхронизации асинхронных операций внутри цикла.
---------------------
⋙ ❍ Задача на асинхронность + eventLoop:
---
1. Вызов асинхронной функции с использованием `setTimeout`
⌛ Задача: Напишите функцию, которая использует `setTimeout` для задержки выполнения кода на 2 секунды.
🎯 Решение:
```javascript
function delayedLog() {
  setTimeout(() => {
    console.log("Hello after 2 seconds");
  }, 2000);
}

delayedLog();
```
Объяснение: `setTimeout` вызывает переданную функцию через заданную задержку (в данном случае 2000 мс).
---
2. Создание промиса и использование `.then()`
⌛ Задача: Напишите функцию, которая возвращает промис, который резолвится через 3 секунды.
🎯 Решение:
```javascript
function createPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3 seconds");
    }, 3000);
  });
}

createPromise().then((message) => {
  console.log(message);
});
```
Объяснение: Промис создается с использованием конструктора `new Promise`, и в нем используется `setTimeout` для асинхронного выполнения через 3 секунды.
---
3. Использование `async`/`await`
⌛ Задача: Используя `async`/`await`, напишите функцию, которая асинхронно получает данные и выводит их через 2 секунды.
🎯 Решение:
```javascript
async function fetchData() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 2000)
  );
  console.log(data);
}

fetchData();
```
Объяснение: `await` используется для ожидания завершения промиса перед продолжением выполнения функции.
---
4. Понимание работы с несколькими промисами
⌛ Задача: Напишите функцию, которая запускает два промиса одновременно, и когда оба из них завершатся, выводит результат.
🎯 Решение:
```javascript
function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve("Data 1"), 2000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve("Data 2"), 3000));
}

Promise.all([fetchData1(), fetchData2()])
  .then(([data1, data2]) => {
    console.log(data1, data2); // Data 1 Data 2
  });
```
Объяснение: `Promise.all` ждёт, пока все промисы в массиве не завершатся, после чего возвращает результат.
---
5. Преобразование колбэков в промисы
⌛ Задача: Напишите функцию, которая использует колбэк с `setTimeout`, но преобразует его в промис.
🎯 Решение:
```javascript
function timeoutPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

timeoutPromise(2000).then(() => {
  console.log("2 seconds passed");
});
```
Объяснение: Используем `new Promise`, чтобы обернуть колбэк в промис и использовать его с `.then()`.
---
6. Понимание Event Loop и очереди микрозадач
⌛ Задача: Напишите код, который покажет, что микрозадачи выполняются перед макрозадачами в JavaScript (используйте `Promise` и `setTimeout`).
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
```
Объяснение: Код выводит:
1. "Start"
2. "End"
3. "Inside Promise" (микрозадача)
4. "Inside setTimeout" (макрозадача)
Микрозадачи (например, промисы) выполняются перед макрозадачами (например, `setTimeout`), даже если задержка `setTimeout` равна 0.
---
7. Понимание асинхронной очереди
⌛ Задача: Напишите код, который демонстрирует порядок выполнения задач, когда используются несколько промисов и таймеров.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");
```
Объяснение: Порядок вывода будет следующим:
1. "Start"
2. "End"
3. "Promise 1"
4. "Promise 2"
5. "Timeout 1"
6. "Timeout 2"
---
8. Использование `setInterval` для асинхронных задач
⌛ Задача: Напишите код, который выводит сообщение каждую секунду и прекращает вывод через 5 секунд.
🎯 Решение:
```javascript
const interval = setInterval(() => {
  console.log("Hello every second");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped");
}, 5000);
```
Объяснение: Используем `setInterval` для повторяющихся задач и `clearInterval` для их остановки.
---
9. Реализация асинхронной очереди задач
⌛ Задача: Напишите функцию, которая выполняет задачи из очереди поочередно, где каждая задача возвращает промис.
🎯 Решение:
```javascript
async function processQueue(queue) {
  for (const task of queue) {
    await task();
  }
}

const queue = [
  () => new Promise(resolve => setTimeout(() => { console.log("Task 1"); resolve(); }, 1000)),
  () => new Promise(resolve => setTimeout(() => { console.log("Task 2"); resolve(); }, 1000)),
];

processQueue(queue);
```
Объяснение: В этой задаче мы выполняем задачи последовательно, ожидая завершения каждой из них перед выполнением следующей.
---
10. Асинхронная функция с исключениями
⌛ Задача: Напишите асинхронную функцию, которая использует `try/catch` для обработки ошибок.
🎯 Решение:
```javascript
async function asyncFunction() {
  try {
    const result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (error) {
    console.log(error); // "Something went wrong"
  }
}

asyncFunction();
```
Объяснение: Используем `try/catch` для обработки ошибок в асинхронной функции с `await`.
---
11. Параллельное выполнение нескольких асинхронных задач
⌛ Задача: Напишите код, который запускает несколько асинхронных операций параллельно и выводит результат после завершения всех.
🎯 Решение:
```javascript
async function fetchData() {
  const data1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
  const data2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

  const results = await Promise.all([data1, data2]);
  console.log(results); // ["Data 1", "Data 2"]
}

fetchData();
```
Объяснение: Мы используем `Promise.all()` для параллельного выполнения нескольких промисов.
---
12. Использование `setImmediate`
⌛ Задача: Напишите код, который выполняет задачу немедленно, но в следующем цикле Event Loop.
🎯 Решение:
```javascript
console.log("Start");

setImmediate(() => {
  console.log("Executed immediately");
});

console.log("End");
```
Объяснение: `setImmediate` используется для выполнения задачи в конце текущего цикла событий.
---
13. Задержка выполнения с использованием `setTimeout`
⌛ Задача: Напишите код, который задерживает выполнение функции на 3 секунды.
🎯 Решение:
```javascript
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
```
Объяснение: Используем `setTimeout` для задержки выполнения кода.
---
14. Промис с таймаутом
⌛ Задача: Напишите функцию, которая возвращает промис, но с таймаутом на 3 секунды.
🎯 Решение:
```javascript
function timeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timed out");
    }, 3000);
  });
}

timeoutPromise().catch((err) => console.log(err)); // Timed out
```
Объяснение: Мы создаем промис, который отклоняется через 3 секунды.
---
15. Использование микрозадач с `Promise.resolve()`
⌛ Задача: Напишите код, который сначала выводит сообщение синхронно, а затем использует микрозадачу.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Inside promise");
});

console.log("End");
```
Объяснение: Микрозадачи выполняются после завершения текущего синхронного кода, но перед макрозадачами (например, `setTimeout`).
---
16. Очередность выполнения с использованием `setTimeout` и промисов
⌛ Задача: Напишите код, который сначала выполняет промис, а затем `setTimeout`.
🎯 Решение:
```javascript
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("Timeout executed");
}, 0);
```
Объяснение: Микрозадачи (промисы) выполняются перед макрозадачами (`setTimeout`).
---
17. Вложенные промисы с асинхронной обработкой
⌛ Задача: Напишите код, который сначала ожидает один промис, а затем запускает второй после его завершения.
🎯 Решение:
```javascript
async function asyncFunction() {
  const firstResult = await new Promise((resolve) => setTimeout(() => resolve("First task"), 1000));
  console.log(firstResult); // First task

  const secondResult = await new Promise((resolve) => setTimeout(() => resolve("Second task"), 2000));
  console.log(secondResult); // Second task
}

asyncFunction();
```
Объяснение: Мы используем `await` для ожидания каждого промиса перед запуском следующего.
---------------------
⋙ ❍ Задача на eventLoop:
---
1. Различие между `setTimeout` и `setImmediate`
⌛ Задача: Напишите код, который использует и `setTimeout()`, и `setImmediate()`, и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("End");
```
Объяснение:
- `setTimeout()` с задержкой 0 миллисекунд будет выполнен в макрозадаче после завершения текущего кода.
- `setImmediate()` будет выполнен в следующем цикле Event Loop, но после всех микрозадач.
- Порядок вывода будет:
  1. "Start"
  2. "End"
  3. "setImmediate"
  4. "setTimeout"
---
2. Использование `Promise.resolve()` для микрозадач
⌛ Задача: Напишите код, который демонстрирует выполнение промиса как микрозадачи.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```
Объяснение:
- Промисы (микрозадачи) выполняются после выполнения синхронного кода и до макрозадач (таких как `setTimeout`).
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise resolved"
---
3. Смешивание `setTimeout()` и `Promise`
⌛ Задача: Напишите код, в котором сначала выполняется промис, а затем таймер с `setTimeout()`.
🎯 Решение:
```javascript
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);
```
Объяснение:
- Промисы всегда выполняются перед макрозадачами (`setTimeout()`).
- Порядок вывода:
  1. "Promise resolved"
  2. "setTimeout executed"
---
4. Задержка с `setTimeout()` внутри цикла
⌛ Задача: Напишите цикл, который выводит числа от 1 до 5, но с задержкой в 1 секунду между каждым числом.
🎯 Решение:
```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
```
Объяснение:
- Используем `let` для корректной работы замыкания в цикле. Переменная `i` будет иметь уникальное значение для каждого вызова `setTimeout`.
---
5. Что будет выведено в консоль?
⌛ Задача: Напишите код, который использует микрозадачи и макрозадачи, и объясните, что будет выведено в консоль.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise" (микрозадача)
  4. "setTimeout" (макрозадача)
---
6. Как вывести все элементы массива с задержкой?
⌛ Задача: Напишите функцию, которая выводит каждый элемент массива с задержкой 1 секунда.
🎯 Решение:
```javascript
const array = [1, 2, 3, 4, 5];

function printArrayWithDelay(arr) {
  arr.forEach((item, index) => {
    setTimeout(() => {
      console.log(item);
    }, 1000 * index);
  });
}

printArrayWithDelay(array);
```
Объяснение:
- Каждый вызов `setTimeout` имеет уникальную задержку, зависящую от индекса элемента.
---
7. Вложенные промисы и их порядок выполнения
⌛ Задача: Напишите код с вложенными промисами и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("First Promise");
  return Promise.resolve();
}).then(() => {
  console.log("Second Promise");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "First Promise"
  4. "Second Promise"
Промисы всегда выполняются после текущего синхронного кода.
---
8. Проверка работы с многократными таймерами
⌛ Задача: Напишите код с несколькими `setTimeout` и объясните их порядок выполнения.
🎯 Решение:
```javascript
setTimeout(() => {
  console.log("First Timeout");
}, 0);

setTimeout(() => {
  console.log("Second Timeout");
}, 0);

console.log("End");
```
Объяснение:
- Все макрозадачи с задержкой 0 выполняются после синхронного кода. Порядок вывода:
  1. "End"
  2. "First Timeout"
  3. "Second Timeout"
---
9. Асинхронная функция с несколькими `await`
⌛ Задача: Напишите асинхронную функцию с двумя `await` и объясните, как будет выполняться код.
🎯 Решение:
```javascript
async function asyncFunction() {
  console.log("Start");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 1 second");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 2 seconds");

  console.log("End");
}

asyncFunction();
```
Объяснение:
- Код выполнится последовательно, с задержкой в 1 секунду между каждым выводом.
---
10. Микрозадачи и макрозадачи в одном цикле
⌛ Задача: Напишите код, который смешивает микрозадачи и макрозадачи и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise 1" (микрозадача)
  4. "Promise 2" (микрозадача)
  5. "setTimeout" (макрозадача)
---
11. Работа с `setTimeout` и циклами
⌛ Задача: Напишите цикл с `setTimeout` и покажите, как работает асинхронность в этом случае.
🎯 Решение:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```
Объяснение:
- Используем `let` в цикле, чтобы сохранить правильное значение `i` на каждой итерации.
- В случае с `var`, цикл бы вывел 3 одинаковых значения.
---
12. Ожидание нескольких асинхронных операций
⌛ Задача: Напишите код, который ждёт завершения нескольких асинхронных операций с помощью `Promise.all`.
🎯 Решение:
```javascript
async function fetchData() {
  const promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["Data 1", "Data 2"]
}

fetchData();
```
Объяснение:
- `Promise.all()` ждёт выполнения всех промисов и возвращает массив их результатов.
---
13. Очередность выполнения асинхронных операций
⌛ Задача: Напишите код, который демонстрирует очередность выполнения нескольких асинхронных операций с разной задержкой.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("End");
```
Объяснение:
- Порядок выполнения:
  1. "Start"
  2. "End"
  3. "Promise 1" (микрозадача)
  4. "setTimeout 1"
  5. "setTimeout 2"
---
14. Важность использования `async/await` внутри цикла
⌛ Задача: Напишите асинхронную функцию с циклом, который использует `await`.
🎯 Решение:
```javascript
async function asyncLoop() {
  const values = [1, 2, 3];

  for (const value of values) {
    await new Promise(resolve => setTimeout(() => resolve(value), 1000));
    console.log(value);
  }
}

asyncLoop();
```

Объяснение:
- Используем `await` внутри цикла, чтобы каждая итерация ожидала завершения предыдущей.
---
15. Таймеры и промисы
⌛ Задача: Напишите код с использованием `setTimeout()` и `Promise`, и объясните, как они работают в Event Loop.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
Объяснение:
- "Start" и "End" выводятся синхронно.
- Промис (`Promise.resolve()`) будет выполнен первым, так как это микрозадача.
- `setTimeout` будет выполнен после всех микрозадач.
---
16. Использование `Promise.race()` для выбора первого завершившегося промиса
⌛ Задача: Напишите код, который использует `Promise.race()` и выбирает первый завершившийся промис.
🎯 Решение:
```javascript
const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Second'));

Promise.race([promise1, promise2]).then(result => {
  console.log(result); // 'Second'
});
```
Объяснение:
- `Promise.race()` возвращает первый завершившийся промис, независимо от того, успешно он завершился или нет.
---
17. Ожидание всех промисов с задержкой
⌛ Задача: Напишите функцию, которая ждёт завершения всех промисов с задержкой и выводит результат.
🎯 Решение:
```javascript
async function waitForAll() {
  const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
  const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'Second'));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["First", "Second"]
}

waitForAll();
```
Объяснение:
- Все промисы в `Promise.all()` будут ждать друг друга, и результат будет выведен только после завершения всех.
---------------------
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
Давайте рассмотрим, как отправлять HTTP-запросы на сервер с помощью двух популярных методов в JavaScript: `XMLHttpRequest` и `fetch`.
1. Использование `XMLHttpRequest`
`XMLHttpRequest` — это старый API для выполнения HTTP-запросов. Несмотря на то, что он всё ещё используется, рекомендуется использовать более современные решения, такие как `fetch`.
Пример с использованием `XMLHttpRequest`
⌛ Задача: Напишите запрос GET на сервер с использованием `XMLHttpRequest`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  const xhr = new XMLHttpRequest();  // Создание объекта XMLHttpRequest

  // Устанавливаем метод и URL
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  // Устанавливаем обработчик для события "load"
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка: ', xhr.status, xhr.statusText);
    }
  };

  // Устанавливаем обработчик для события ошибки
  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  // Отправляем запрос
  xhr.send();
}

getData();
```
Объяснение:
- `xhr.open(method, url, async)` — указывает метод (GET, POST и т.д.), URL и флаг асинхронности.
- `xhr.onload` — срабатывает, когда запрос успешно выполнен.
- `xhr.onerror` — срабатывает в случае ошибки.
- `xhr.send()` — отправляет запрос на сервер.
2. Использование `fetch`
`fetch` — это современный API для выполнения HTTP-запросов. Он предоставляет более удобный интерфейс и возвращает промис, что делает его гораздо более удобным для работы с асинхронным кодом.
Пример с использованием `fetch`
⌛ Задача: Напишите запрос GET на сервер с использованием `fetch`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Сетевой ответ не ок');
      }
      return response.json();  // Преобразуем тело ответа в JSON
    })
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

getData();
```
Объяснение:
- `fetch(url)` — отправляет запрос GET по указанному URL.
- `.then(response => response.json())` — преобразует ответ в формат JSON.
- `.catch(error => {...})` — обрабатывает любые ошибки, включая ошибки сети и ошибок обработки данных.
3. ⌛ Задача: Отправка данных на сервер (POST-запрос)
🎯 Решение:
Пример с `XMLHttpRequest`
```javascript
function sendData() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.setRequestHeader('Content-Type', 'application/json');  // Устанавливаем заголовок для отправки JSON

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка:', xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  xhr.send(JSON.stringify(data));  // Отправляем данные в формате JSON
}

sendData();
```
Объяснение:
- Мы используем метод `POST` и устанавливаем заголовок `Content-Type: application/json`, чтобы сервер знал, что мы отправляем данные в формате JSON.
- Данные отправляются с помощью `JSON.stringify()`.
Пример с `fetch`
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

sendData();
```
Объяснение:
- В `fetch` мы указываем объект с дополнительными параметрами (`method`, `headers`, `body`).
- Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
- `body: JSON.stringify(data)` преобразует объект в строку JSON перед отправкой.
4. Различие между `XMLHttpRequest` и `fetch`
- `XMLHttpRequest`: Более старый способ работы с HTTP-запросами. Использует события для обработки ответа. Требует более сложной работы с асинхронностью.
- `fetch`: Современный API, возвращающий промис, что упрощает работу с асинхронностью. Более гибкий и читаемый код, но не поддерживает старые браузеры (например, Internet Explorer).
Резюме:
1. `XMLHttpRequest` подходит для старого кода или проектов с совместимостью с устаревшими браузерами.
2. `fetch` является более современным и удобным способом работы с асинхронными запросами, использует промисы и проще для интеграции с современными фреймворками.
---------------------
⋙ ❍ ⌛ Задача: Написать свой Promise.all(); - Сумма элементов через замыкание:
---
Давайте напишем собственную реализацию `Promise.all()`, а также решим задачу на сумму элементов через замыкание.
1. Реализация `Promise.all()` с использованием замыкания
`Promise.all()` выполняет несколько промисов параллельно и возвращает один промис, который резолвится, когда все переданные промисы завершены успешно. Если один из промисов отклоняется, `Promise.all()` отклоняется.
Для реализации собственной версии `Promise.all()` мы можем использовать замыкание и отслеживание завершения всех промисов. Важно помнить, что результат должен быть в виде массива значений, полученных от всех промисов.
🎯 Решение:
```javascript
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];  // Массив для хранения результатов
    let completed = 0; // Счётчик завершённых промисов

    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      // Для каждого промиса обрабатываем его результат
      Promise.resolve(promise)
        .then(result => {
          results[index] = result; // Записываем результат по соответствующему индексу
          completed++;

          // Если все промисы завершены, резолвим основной промис
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error); // Если любой промис отклоняется, отклоняем основной промис
        });
    });
  });
}

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

myPromiseAll([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });
```
Объяснение:
- Мы создаём массив `results`, чтобы хранить результаты каждого промиса.
- Каждый промис обрабатывается через `Promise.resolve()`, чтобы гарантировать, что мы всегда получим промис, даже если передан обычный результат.
- Для каждого промиса добавляем его результат в массив `results`, используя индекс.
- Как только все промисы завершены (проверяем через `completed === promises.length`), вызываем `resolve()`.
---
2. ⌛ Задача: Сумма элементов через замыкание
В этой задаче мы создадим функцию, которая будет суммировать элементы массива, используя замыкание. Это будет полезно, чтобы понять, как работают замыкания при накоплении состояния.
🎯 Решение:
```javascript
function sumArray(arr) {
  let sum = 0;  // Переменная для хранения суммы

  // Возвращаем функцию, которая будет вызываться для каждого элемента массива
  return arr.reduce((acc, num) => {
    acc += num;  // Добавляем текущий элемент к накопленной сумме
    return acc;  // Возвращаем текущую сумму
  }, sum);
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Мы используем `reduce()` для итерации по массиву и накопления суммы.
- Замыкание создаётся за счет того, что в `reduce` функция накопления имеет доступ к внешней переменной `sum`, которая накапливает сумму.
- Функция возвращает результат, который является суммой всех элементов массива.
Итог
1. Реализация `myPromiseAll()`: Мы использовали замыкание для отслеживания всех завершённых промисов и их результатов, возвращая их в массив.
2. Суммирование через замыкание: Мы использовали замыкание в комбинации с методом `reduce()` для создания функции, которая суммирует элементы массива.
---------------------
⋙ ❍ Интеграция:
---
1. Интеграция с REST API (GET-запрос)
⌛ Задача: Напишите код для выполнения GET-запроса на внешний REST API и вывода данных в консоль.
🎯 Решение:
```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
}

fetchData();
```
Объяснение: Используется `fetch` для выполнения GET-запроса. Ответ преобразуется в JSON с помощью `.json()`, и затем выводится в консоль.
---
2. Интеграция с REST API (POST-запрос)
⌛ Задача: Напишите код для отправки данных с помощью POST-запроса на внешний API.
🎯 Решение:
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
}

sendData();
```
Объяснение: Мы отправляем JSON-данные в теле запроса с помощью метода `POST`. Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
---
3. Интеграция с Google Maps API
⌛ Задача: Интегрируйте Google Maps API для отображения карты на странице.
🎯 Решение:
1. Вставьте следующий код в HTML для подключения Google Maps API:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```
2. Реализуйте код для инициализации карты:
```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
```
Объяснение: Мы подключаем Google Maps API с помощью тега `<script>`, инициализируем карту в функции `initMap()`.
---
4. Интеграция с Firebase (аутентификация)
⌛ Задача: Реализуйте аутентификацию пользователя с помощью Firebase.
🎯 Решение:
1. Установите Firebase SDK:
```bash
npm install firebase
```
2. Реализуйте аутентификацию с использованием email и пароля:
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User signed in:', userCredential.user);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}
```
Объяснение: Мы интегрируем Firebase, инициализируем его с помощью конфигурации и используем метод `signInWithEmailAndPassword` для аутентификации пользователя.
---
5. Интеграция с Stripe (платежи)
⌛ Задача: Реализуйте кнопку для оплаты через Stripe.
🎯 Решение:
1. Установите Stripe SDK:
```bash
npm install @stripe/stripe-js
```
2. Используйте `Stripe.js` для создания платежной формы:
```javascript
import { loadStripe } from '@stripe/stripe-js';

let stripe;
let elements;

async function initializeStripe() {
  stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
  elements = stripe.elements();
  const cardElement = elements.create('card');
  cardElement.mount('#card-element');
}

async function handlePayment() {
  const { token, error } = await stripe.createToken(elements.getElement('card'));
  if (error) {
    console.error('Payment error:', error);
  } else {
    console.log('Payment token:', token);
  }
}
```
Объяснение: Мы используем Stripe для создания элемента карты и обработки платежа. Полученный токен можно отправить на сервер для завершения транзакции.
---
6. Интеграция с Twilio (отправка SMS)
⌛ Задача: Используйте Twilio API для отправки SMS.
🎯 Решение:
1. Установите Twilio SDK:
```bash
npm install twilio
```
2. Реализуйте код для отправки SMS:
```javascript
const twilio = require('twilio');

const client = new twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

function sendSMS(to, body) {
  client.messages.create({
    body: body,
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    to: to
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
}

sendSMS('+1234567890', 'Hello, this is a test message!');
```
Объяснение: Используем Twilio для отправки SMS через API. Для работы необходимо иметь аккаунт в Twilio и ключи доступа.
---
7. Интеграция с OpenWeather API (получение погоды)
⌛ Задача: Напишите код для получения информации о погоде через OpenWeather API.
🎯 Решение:
```javascript
function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

getWeather('London');
```
Объяснение: Мы используем OpenWeather API для получения данных о погоде для указанного города. Замените `YOUR_API_KEY` на ваш ключ API.
---
8. Интеграция с GraphQL API
⌛ Задача: Напишите запрос к GraphQL API.
🎯 Решение:
```javascript
const query = `
  query {
    posts {
      title
      body
    }
  }
`;

fetch('https://graphql.example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: query })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы выполняем запрос GraphQL с помощью `fetch`, отправляя строку запроса в теле POST-запроса.
---
9. Интеграция с Redux для состояния приложения
⌛ Задача: Настройте Redux для хранения состояния и взаимодействия с компонентами React.
🎯 Решение:
1. Установите Redux и React-Redux:
```bash
npm install redux react-redux
```
2. Реализуйте хранилище и компонент:
```javascript
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
Объяснение: Мы создаём Redux store с простым редьюсером, который управляет состоянием счётчика, и используем React-Redux для подключения состояния к компонентам.
---
10. Интеграция с OAuth 2.0
⌛ Задача: Реализуйте аутентификацию через Google OAuth 2.0.
🎯 Решение:
1. Настройте OAuth 2.0 в консоли разработчика Google.
2. Используйте клиентскую библиотеку Google для аутентификации.
```html
<script src="https://apis.google.com/js/platform.js" async defer></script>

<button id="google-sign-in">Sign in with Google</button>

<script>
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
  }

  gapi.load('auth2', function() {
    gapi.auth2.init().then(function () {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.attachClickHandler('google-sign-in', {}, onSignIn);
    });
  });
</script>
```
Объяснение: В этом примере используется Google OAuth 2.0 для аутентификации через Google. После успешного входа пользовательские данные выводятся в консоль.
---
11. Интеграция с AWS S3 для загрузки файлов
⌛ Задача: Напишите код для загрузки файла в S3 с использованием AWS SDK.
🎯 Решение:
```javascript
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

function uploadFile(file) {
  const params = {
    Bucket: 'your-bucket-name',
    Key: file.name,
    Body: file,
    ACL: 'public-read'
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error('Error uploading file:', err);
    } else {
      console.log('File uploaded successfully:', data.Location);
    }
  });
}

uploadFile(fileInput.files[0]); // Example of uploading file from an input field
```
Объяснение: Этот код использует AWS SDK для загрузки файла в S3. Мы передаём файл и параметры для загрузки.
---
12. Интеграция с MongoDB (с помощью Mongoose)
⌛ Задача: Настройте MongoDB и Mongoose для взаимодействия с базой данных.
🎯 Решение:
```bash
npm install mongoose
```

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'John', age: 30 });
user.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error:', err));
```
Объяснение: Мы подключаем Mongoose к базе данных MongoDB и создаём модель для работы с коллекцией пользователей.
---
13. Интеграция с Firebase Realtime Database
⌛ Задача: Напишите код для взаимодействия с Firebase Realtime Database.
🎯 Решение:
```javascript
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeData() {
  database.ref('users/1').set({
    name: 'John',
    age: 30
  });
}

writeData();
```
Объяснение: Мы подключаем Firebase и используем его Realtime Database для записи данных.
---
14. Интеграция с Socket.io для WebSocket-соединений
⌛ Задача: Реализуйте простое соединение WebSocket с сервером через Socket.io.
🎯 Решение:
```bash
npm install socket.io-client
```

```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.emit('sendMessage', 'Hello, Server!');
```
Объяснение: Мы используем `socket.io-client` для установления WebSocket-соединения и обмена сообщениями между клиентом и сервером.
---
15. Интеграция с Contentful для управления контентом
⌛ Задача: Используйте Contentful API для получения данных контента.
🎯 Решение:
```javascript
const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

client.getEntries()
  .then(entries => console.log(entries.items))
  .catch(err => console.log(err));
```
Объяснение: Мы используем Contentful API для получения данных контента из CMS.
---
16. Интеграция с Algolia для поиска
⌛ Задача: Настройте поисковую систему с помощью Algolia.
🎯 Решение:
```bash
npm install algoliasearch
```

```javascript
import algoliasearch from 'algoliasearch';

const client = algoliasearch('YOUR_APPLICATION_ID', 'YOUR_SEARCH_ONLY_API_KEY');
const index = client.initIndex('your_index_name');

index.search('query')
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => console.log(err));
```
Объяснение: Используем Algolia для выполнения поиска по индексу.
---
17. Интеграция с HubSpot (CRM)
⌛ Задача: Интегрируйте HubSpot API для получения контактов.
🎯 Решение:
```javascript
const apiUrl = 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all';
const apiKey = 'YOUR_API_KEY';

fetch(`${apiUrl}?hapikey=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы используем HubSpot API для получения списка контактов из CRM.
---------------------
⋙ ❍ Уникальность всех символов в строке:
---
⌛ Задача заключается в проверке, содержит ли строка только уникальные символы, то есть, не повторяются ли символы в строке.
Мы можем решить эту задачу различными способами. Рассмотрим несколько решений с объяснением.
1. Использование Set (самый эффективный способ)
Множество (`Set`) в JavaScript хранит только уникальные значения. Мы можем воспользоваться этим, чтобы проверить, не содержатся ли в строке повторяющиеся символы.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Мы создаём `Set`, который автоматически удаляет все дублирующиеся символы.
- Если размер множества (`Set`) равен длине строки, это значит, что в строке нет повторений.
---
2. Использование объекта для отслеживания символов
Мы можем использовать объект для хранения уже встреченных символов. Если мы встречаем символ, который уже был в объекте, значит, строка не уникальна.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      return false;  // Если символ уже встречался
    }
    charMap[str[i]] = true;
  }

  return true;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Мы проходим по строке, используя объект `charMap` для отслеживания символов.
- Если символ уже встречался (то есть он есть в `charMap`), сразу возвращаем `false`.
- Если все символы уникальны, возвращаем `true`.
---
3. Использование метода `indexOf()`
Мы можем использовать метод `indexOf()` для проверки индекса каждого символа в строке. Если символ встречается более одного раза, это значит, что строка не уникальна.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) {
      return false; // Если символ найден после текущего индекса
    }
  }
  return true;
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Для каждого символа мы ищем его индекс начиная с позиции, следующей за текущей.
- Если метод `indexOf()` находит этот символ, значит, он уже встречался в строке.
---
4. Использование регулярных выражений
Этот метод подходит, если строка состоит только из букв или чисел, но это менее эффективное решение, чем другие.
🎯 Решение:
```javascript
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}

console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aabbcc")); // false
```
Объяснение:
- Регулярное выражение `/(.).*\1/` ищет повторяющиеся символы.
- Если оно находит такие символы, то возвращает `false`, иначе `true`.
Резюме:
1. Использование `Set` — самый эффективный и лаконичный способ для проверки уникальности символов.
2. Использование объекта — также эффективный способ, особенно если нужно делать дополнительные проверки.
3. Использование `indexOf()` — менее эффективный, но всё ещё работоспособный метод.
4. Использование регулярных выражений — подход, который вряд ли стоит использовать для этой задачи, так как оно сложнее и менее оптимально, чем другие методы.
---------------------
⋙ ❍ ⌛ Задача: Плоский массив:
---
Плоский массив (или flattened array) — это одномерный массив, который получается путем "разворачивания" многомерного массива. Например, если у вас есть массив с вложенными массивами, вы можете привести его к "плоскому" виду, объединив все элементы в один массив.
Пример:
- Исходный массив:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
```
- Плоский массив (результат):
```javascript
const flattenedArray = [1, 2, 3, 4, 5, 6, 7, 8];
```
1. Простое разворачивание массива с помощью `flat()`
С ES6 был введен метод массива `flat()`, который позволяет "расплющить" многомерные массивы. По умолчанию метод `flat()` выполняет одноуровневое разворачивание, но также можно указать глубину для более сложных случаев.
🎯 Решение (с использованием `flat()`):
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Разворачиваем массив на один уровень
const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // [1, 2, 3, 4, 5, [6, 7], 8]
```
Объяснение:
- `flat()` по умолчанию разворачивает массив на один уровень. Массив `[6, 7]` остаётся вложенным.
🎯 Решение с указанием глубины:
Чтобы полностью расплющить массив, можно передать глубину:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Разворачиваем массив до полной глубины
const fullyFlattenedArray = nestedArray.flat(Infinity);

console.log(fullyFlattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Указав глубину `Infinity`, мы расплющиваем массив на все возможные уровни вложенности.
---
2. Ручное разворачивание с использованием рекурсии
Если по каким-то причинам необходимо вручную "расплющить" массив (например, в старых браузерах или для более гибкой реализации), можно использовать рекурсивную функцию для обхода всех вложенных массивов.
🎯 Решение (рекурсивная функция):
```javascript
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Если элемент является массивом, рекурсивно обрабатываем его
      result = result.concat(flattenArray(arr[i]));
    } else {
      // Если элемент не массив, добавляем его в результат
      result.push(arr[i]);
    }
  }

  return result;
}

const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Функция `flattenArray` рекурсивно проходит по каждому элементу массива. Если элемент является массивом, она снова вызывает себя для этого элемента и добавляет результаты в итоговый массив. Если элемент не является массивом, он просто добавляется в `result`.
---
3. Использование `reduce()` для плоского массива
Также можно использовать метод `reduce()` для решения задачи, комбинируя его с рекурсией.
🎯 Решение (с использованием `reduce()`):
```javascript
function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Мы используем `reduce()` для аккумуляции результата. Если текущий элемент является массивом, мы рекурсивно разворачиваем его и добавляем в результат. Если это не массив, то просто добавляем элемент.
---
4. Использование `flatMap()`
Метод `flatMap()` является комбинацией методов `map()` и `flat()`. Он сначала применяет функцию к каждому элементу, а затем "расплющивает" результат на один уровень.
🎯 Решение с использованием `flatMap()`:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Применяем flatMap для преобразования и расплющивания
const flattenedArray = nestedArray.flatMap(item => Array.isArray(item) ? item : [item]);

console.log(flattenedArray); // [1, 2, 3, 4, 5, [6, 7], 8]
```
Объяснение:
- Метод `flatMap()` сначала применяет функцию ко всем элементам массива. В этой функции мы проверяем, является ли элемент массивом, и, если это так, возвращаем его. Если элемент не является массивом, мы преобразуем его в массив с одним элементом (для корректного объединения).
---
5. Преобразование в строку и удаление разделителей
🎯 Если нужно "расплющить" массив в строку (например, для отображения), можно использовать метод `join()`:
```javascript
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8];

// Преобразуем в строку и удалим вложенность
const flattenedString = nestedArray.flat(Infinity).join(', ');

console.log(flattenedString); // "1, 2, 3, 4, 5, 6, 7, 8"
```
Объяснение:
- Мы используем `flat(Infinity)` для полного расплющивания массива, а затем `join(', ')` для объединения всех элементов в строку с разделителями.
Заключение:
1. Используйте `flat()` для простого и эффективного расплющивания массива в один уровень или на указанную глубину.
2. В случае необходимости рекурсивного разворачивания массива можно использовать рекурсию или методы `reduce()` и `flatMap()`.
3. Решение с `flatMap()` эффективно, если нужно выполнить преобразование и одновременно расплющить массив.
---------------------
⋙ ❍ ⌛ Задача: Удаление всех повторяющихся значения в строке:
---
Для удаления всех повторяющихся символов в строке, оставляя только первое их вхождение, можно использовать несколько различных подходов. Рассмотрим несколько решений, включая использование встроенных методов JavaScript.
1. Использование `Set`
Мы можем использовать `Set` для хранения уникальных символов, поскольку `Set` автоматически удаляет дубликаты. Затем мы преобразуем его обратно в строку.
🎯 Решение с использованием `Set`:
```javascript
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы используем оператор распространения (`...`) для преобразования строки в массив символов.
- Затем создаём новый `Set` из массива, который автоматически удаляет все дубликаты.
- В конце мы соединяем элементы обратно в строку с помощью `join('')`.
---
2. Использование объекта для отслеживания символов
Другим способом является использование объекта (или `Map`), чтобы отслеживать, какие символы мы уже встречали.
🎯 Решение с использованием объекта:
```javascript
function removeDuplicates(str) {
  let seen = {};
  let result = '';

  for (let char of str) {
    if (!seen[char]) {
      result += char;  // Добавляем символ, если его ещё не было
      seen[char] = true;  // Отмечаем, что символ встречен
    }
  }

  return result;
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы используем объект `seen`, чтобы отслеживать символы, которые уже были встречены.
- Для каждого символа проверяем, есть ли он в объекте. Если нет, добавляем его в результат и помечаем как встреченный.
---
3. Использование регулярных выражений
Если нужно удалить только все повторяющиеся символы (оставляя только одно их вхождение) в строке, можно использовать регулярные выражения.
🎯 Решение с использованием регулярного выражения:
```javascript
function removeDuplicates(str) {
  return str.replace(/([a-zA-Z0-9])\1+/g, '$1');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Регулярное выражение `(/([a-zA-Z0-9])\1+/g)` ищет повторяющиеся символы.
- `([a-zA-Z0-9])` — это символ, который может повторяться.
- `\1+` означает "повторение предыдущего символа".
- Мы заменяем все такие повторения на один символ с помощью `'$1'`.
---
4. Использование `reduce()`
Можно использовать метод `reduce()` для более функционального подхода к решению задачи.
🎯 Решение с использованием `reduce()`:
```javascript
function removeDuplicates(str) {
  return str.split('').reduce((acc, char) => {
    if (!acc.includes(char)) acc += char;
    return acc;
  }, '');
}

console.log(removeDuplicates("programming")); // "progamin"
```
Объяснение:
- Мы разбиваем строку на массив символов с помощью `split('')`.
- Затем используем `reduce()` для аккумулирования результата. Каждый символ добавляется в результат только если его ещё нет в строке.
Резюме:
1. Использование `Set` — самый простой и эффективный способ, так как `Set` автоматически удаляет дубликаты.
2. Использование объекта — позволяет вручную отслеживать повторяющиеся символы.
3. Использование регулярных выражений — полезно для более сложных случаев с паттернами.
4. Использование `reduce()` — функциональный подход с возможностью дополнительной настройки.
---------------------
⋙ ❍ ⌛ Задача: Какая строка встречается чаще всего:
---
Для того чтобы найти строку, которая встречается чаще всего в массиве строк, мы можем использовать объект для подсчёта количества повторений каждой строки. Затем мы просто находим строку с наибольшим количеством повторений.
🎯 Решение:
1. Пройдем по всем строкам в массиве и будем подсчитывать количество каждого элемента.
2. Найдем строку с наибольшим числом повторений.
🎯 Решение с использованием объекта для подсчета повторений:
```javascript
function mostFrequentString(arr) {
  const countMap = {};

  // Подсчитываем количество повторений каждой строки
  arr.forEach(str => {
    countMap[str] = (countMap[str] || 0) + 1;
  });

  // Находим строку с наибольшим количеством повторений
  let maxCount = 0;
  let mostFrequent = '';

  for (let str in countMap) {
    if (countMap[str] > maxCount) {
      maxCount = countMap[str];
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

// Пример использования:
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);

console.log(frequentString); // "apple"
```
Объяснение:
1. Мы создаём объект `countMap`, где ключи — это строки, а значения — количество их повторений.
2. Мы проходим по массиву и увеличиваем значение для каждой строки в объекте.
3. Затем мы проходим по объекту, чтобы найти строку с максимальным количеством повторений.
4. Функция возвращает строку, которая встречается чаще всего.
Пример 1:
```javascript
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "apple"
```
Пример 2:
```javascript
const strings = ["dog", "cat", "dog", "dog", "fish", "fish"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "dog"
```
Оптимизация:
- Этот метод работает за O(n), где n — количество элементов в массиве, так как мы проходим по массиву один раз и затем по объекту.
---
🎯 Решение с использованием `Map`
Вместо обычного объекта можно использовать `Map`, если вам нужно сохранять порядок вставки или работать с ключами, которые могут быть любыми типами данных.
```javascript
function mostFrequentString(arr) {
  const countMap = new Map();

  // Подсчитываем количество повторений каждой строки
  arr.forEach(str => {
    countMap.set(str, (countMap.get(str) || 0) + 1);
  });

  // Находим строку с наибольшим количеством повторений
  let maxCount = 0;
  let mostFrequent = '';

  for (let [str, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

const strings = ["dog", "cat", "dog", "dog", "fish", "fish"];
const frequentString = mostFrequentString(strings);
console.log(frequentString); // "dog"
```
Объяснение:
- Мы используем `Map` для подсчёта повторений строк. `get()` используется для получения текущего значения, а `set()` — для обновления.
- В остальном логика остаётся такой же.
Резюме:
- Для нахождения строки, которая встречается чаще всего, можно использовать объект или `Map` для подсчёта повторений.
- Алгоритм работает за O(n), где n — это количество строк в массиве.
- Вы можете легко адаптировать решение под свои нужды, например, для работы с числами или более сложными данными.
---------------------
⋙ ❍ ⌛ Задача: Повернута ли строка:
---
Для проверки, является ли строка повёрнутой (палиндромом), то есть она одинаково читается слева направо и справа налево, можно использовать несколько различных подходов.
Алгоритм:
1. Преобразуем строку в её обратный вариант.
2. Сравниваем оригинальную строку с перевёрнутой.
3. Если строки совпадают, значит, это палиндром, иначе — нет.
🎯 Решение:
1. Проверка с использованием `reverse()`
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы разбиваем строку на массив символов с помощью `split('')`.
- Затем используем `reverse()` для переворачивания массива.
- После этого соединяем массив обратно в строку с помощью `join('')`.
- Сравниваем оригинальную строку с перевёрнутой.
---
2. Проверка с использованием циклов
Мы можем вручную пройтись по строке и сравнивать её символы с противоположных концов.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы проходим по строке до середины и сравниваем символы с начала и конца.
- Если хотя бы один символ не совпадает, возвращаем `false`. Если все символы совпадают, возвращаем `true`.
---
3. Проверка с использованием метода `every()`
Можно также использовать метод `every()` для проверки всех соответствующих пар символов.
🎯 Решение:
```javascript
function isPalindrome(str) {
  return [...str].every((char, index) => char === str[str.length - 1 - index]);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем оператор распространения (`...`), чтобы превратить строку в массив.
- С помощью метода `every()` проверяем, что для каждого символа с начала строки его противоположный символ (с конца строки) равен ему.
---
4. Учет регистра и пробелов
Если необходимо игнорировать пробелы и регистр символов (например, в строках "A man a plan a canal Panama"), можно сначала привести строку к нижнему регистру и удалить пробелы.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем регулярное выражение `\s+`, чтобы удалить все пробелы.
- Преобразуем строку в нижний регистр с помощью `toLowerCase()`.
- Далее проверяем строку на палиндром.
Резюме:
1. Мы рассмотрели несколько способов проверки, является ли строка палиндромом:
   - Использование метода `reverse()`.
   - Ручное сравнение символов с двух концов строки.
   - Использование метода `every()`.
2. Для более гибкой проверки, включая игнорирование пробелов и регистра, можно предварительно очистить строку.
---------------------
⋙ ❍ ⌛ Задача: Является ли массив подмножеством другого массива:
---
Чтобы проверить, является ли один массив подмножеством другого, нужно убедиться, что все элементы первого массива присутствуют во втором, при этом учёт количества повторений элементов также важен, если требуется точная проверка.
Что такое подмножество?
Массив `A` является подмножеством массива `B`, если все элементы массива `A` присутствуют в массиве `B`, но не обязательно в том же порядке. Важно, что элементы массива `A` могут повторяться в массиве `B`.
🎯 Решение задачи:
1. Метод с использованием `every()`:
   Мы можем пройтись по каждому элементу первого массива и проверять, существует ли этот элемент в втором массиве.
2. Метод с использованием объекта (для оптимизации):
   Можно использовать объект для подсчета количества элементов в обоих массивах, чтобы гарантировать, что элементы из первого массива есть в необходимом количестве во втором массиве.
🎯 Решение с использованием `every()`
```javascript
function isSubset(arr1, arr2) {
  return arr1.every(element => arr2.includes(element));
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
```
Объяснение:
- Мы используем метод `every()`, чтобы пройти по всем элементам массива `arr1` и проверять, есть ли каждый элемент в массиве `arr2` с помощью `includes()`.
- Этот метод работает корректно, но его время работы — O(n * m), где `n` — длина первого массива, а `m` — длина второго массива.
---
🎯 Решение с использованием объекта для подсчета элементов
Для более эффективной реализации (особенно для массивов с большим количеством элементов) можно использовать объект или карту для подсчета количества каждого элемента в массивах.
```javascript
function isSubset(arr1, arr2) {
  const countMap = {};

  // Подсчитываем количество каждого элемента во втором массиве
  arr2.forEach(element => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  // Проверяем, все ли элементы из arr1 есть в countMap с достаточным количеством
  return arr1.every(element => {
    if (countMap[element] > 0) {
      countMap[element]--;
      return true;
    }
    return false;
  });
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
console.log(isSubset([1, 2, 2], [1, 2, 2, 3])); // true
console.log(isSubset([1, 2, 2], [1, 2, 3])); // false
```
Объяснение:
- Мы создаём объект `countMap`, в котором считаем, сколько раз каждый элемент встречается в массиве `arr2`.
- Затем проверяем каждый элемент массива `arr1`. Если элемент присутствует в `countMap` с положительным значением, то уменьшаем счётчик, иначе возвращаем `false` (что означает, что это не подмножество).
- Это решение работает за O(n + m), где `n` — длина первого массива, а `m` — длина второго массива.
---
Дополнительный пример с использованием `Set` для подмножеств без учета повторений
Если подмножество не должно учитывать количество повторений, можно использовать `Set` для оптимизации поиска.
```javascript
function isSubset(arr1, arr2) {
  const set2 = new Set(arr2);  // Преобразуем второй массив в Set
  return arr1.every(element => set2.has(element));
}

console.log(isSubset([1, 2, 3], [1, 2, 3, 4])); // true
console.log(isSubset([1, 5], [1, 2, 3, 4])); // false
```
Объяснение:
- В этом примере мы используем `Set`, чтобы проверить, содержатся ли элементы из `arr1` в `arr2`, игнорируя количество повторений.
- Это решение работает за O(n + m), где `n` — длина первого массива, а `m` — длина второго массива, благодаря использованию структуры данных `Set`, которая позволяет эффективно проверять наличие элементов.
Резюме:
1. Использование `every()` и `includes()`: Простой способ проверки, но работает за O(n * m).
2. Использование объекта для подсчёта: Оптимальный подход для массива с большим количеством элементов, работает за O(n + m).
3. Использование `Set`: Простой и эффективный метод, если не нужно учитывать количество повторений элементов.
---------------------
⋙ ❍ ⌛ Задача: Анаграммы:
---
Анаграммы — это слова или фразы, полученные путём перестановки букв другого слова или фразы, при этом должны быть использованы все буквы, и их количество должно совпадать.
Для проверки, являются ли два слова анаграммами, нужно выполнить несколько шагов:
1. Проверить, что обе строки имеют одинаковую длину.
2. Проверить, что у обеих строк одинаковое количество каждого символа.
🎯 Решение на JavaScript
1. Преобразуем обе строки в массивы символов.
2. Отсортируем массивы.
3. Сравним отсортированные строки.
🎯 Решение с использованием сортировки:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Преобразуем строки в массивы символов, сортируем их и соединяем обратно в строки
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы разделяем строки на массивы символов с помощью `split('')`.
- Сортируем массивы с помощью `sort()`, чтобы символы были в алфавитном порядке.
- Затем мы соединяем отсортированные массивы обратно в строки с помощью `join('')`.
- Если отсортированные строки совпадают, значит, это анаграммы.
---
🎯 Решение с использованием объекта для подсчёта символов
Вместо сортировки можно подсчитать количество каждого символа в обеих строках и сравнить их.
🎯 Решение с подсчётом символов:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countMap = {};

  // Подсчитываем символы в первой строке
  for (let char of str1) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  // Проверяем, есть ли такие же символы во второй строке
  for (let char of str2) {
    if (!countMap[char]) {
      return false;
    }
    countMap[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы создаём объект `countMap`, чтобы подсчитать количество каждого символа в первой строке.
- Затем проходим по второй строке и уменьшаем счетчик символов в `countMap`. Если какой-то символ отсутствует в объекте или его количество меньше, чем требуется, значит строки не являются анаграммами.
- В конце проверяем, что все значения в `countMap` равны нулю, что подтверждает, что строки содержат одинаковые символы.
🎯 Решение с использованием `Map`
Для улучшенной читаемости можно использовать `Map` для подсчёта символов.
🎯 Решение с использованием `Map`:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countMap = new Map();

  // Подсчитываем символы в первой строке
  for (let char of str1) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  // Проверяем, есть ли такие же символы во второй строке
  for (let char of str2) {
    if (!countMap.has(char)) {
      return false;
    }
    countMap.set(char, countMap.get(char) - 1);
  }

  // Убедимся, что все значения в countMap равны 0
  for (let count of countMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы используем `Map` для подсчёта символов в строках.
- Для каждого символа мы увеличиваем или уменьшаем его счетчик в `Map`.
- В конце проверяем, что все счётчики равны нулю, что подтверждает, что строки содержат одинаковые символы.
---
🎯 Решение с использованием регулярных выражений
Если строки содержат только буквы, можно использовать регулярное выражение для проверки анаграмм. Однако этот метод не столь гибок, как предыдущие, и не будет работать, если строки содержат пробелы или специальные символы.
Пример (не рекомендуемый метод для общего использования):
```javascript
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // true
```
Этот метод идентичен подходу с использованием сортировки и `join`, только это скорее нестандартное решение, которое мы разобрали раньше.
Резюме:
1. Сортировка строк: Самый простой способ — отсортировать символы в строках и сравнить их.
2. Подсчёт символов с использованием объекта или `Map`: Это более эффективный способ, который работает за O(n), так как мы не сортируем строки, а просто подсчитываем символы.
3. Регулярные выражения — подходят только для специфичных случаев (например, без пробелов и символов).
---------------------
⋙ ❍ ⌛ Задача: Перевернуть матрицу 3х3:
---
Перевёрнутая матрица для 3x3 подразумевает её транспонирование, то есть замену строк на столбцы. Другими словами, элемент на позиции `[i][j]` в исходной матрице становится элементом на позиции `[j][i]` в новой матрице.
⌛ Задача: Напишите функцию, которая переворачивает (транспонирует) матрицу 3x3.
🎯 Решение:
Для решения задачи мы можем создать новый массив, который будет хранить перевёрнутую матрицу.
🎯 Решение с объяснением:
```javascript
function transposeMatrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = matrix[j][i]; // Транспонируем
    }
  }

  return result;
}

// Пример использования:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposed = transposeMatrix(matrix);
console.log(transposed);
```
Результат:
```
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```
Объяснение:
- Внешний цикл (`for (let i = 0; i < matrix.length; i++)`) итерирует по строкам исходной матрицы.
- Внутренний цикл (`for (let j = 0; j < matrix[i].length; j++)`) итерирует по столбцам.
- Мы присваиваем элементы исходной матрицы новому массиву `result[i][j]`, где индексы местами меняются, что и является процессом транспонирования.
🎯 Альтернативное решение с использованием `map()`
Можно также использовать метод `map()` для транспонирования матрицы:
```javascript
function transposeMatrix(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

// Пример использования:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposed = transposeMatrix(matrix);
console.log(transposed);
```
Объяснение:
- Метод `map()` позволяет нам пройти по каждому столбцу исходной матрицы.
- Внутренний `map()` помогает нам извлечь элементы столбца и перестроить их в строки нового массива.
Результат:
```
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```
Резюме:
1. Транспонирование матрицы — это процесс замены строк на столбцы.
2. Мы использовали два подхода: один с использованием циклов, другой с методом `map()`, который является более функциональным и удобным.
---------------------
⋙ ❍ ⌛ Задача: Простой поиск:
---
Простой поиск — это процесс нахождения элемента в массиве или другой структуре данных. Самый простой алгоритм поиска — линейный поиск, который перебирает элементы последовательно, пока не найдёт нужный.
---
Линейный поиск (Linear Search)
Линейный поиск проходит по массиву слева направо, сравнивая каждый элемент с искомым значением. Это простой, но не самый эффективный способ, особенно для больших массивов.
🎯 Реализация:
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Возвращаем индекс найденного элемента
    }
  }
  return -1; // Возвращаем -1, если элемент не найден
}

// Пример использования:
const numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30)); // 2
console.log(linearSearch(numbers, 60)); // -1
```
Объяснение:
- Мы перебираем массив с помощью цикла `for`.
- Сравниваем каждый элемент с искомым значением `target`.
- Если элемент найден, возвращаем его индекс. Если нет, возвращаем `-1`.
Сложность:
- Временная сложность: \( O(n) \), где \( n \) — длина массива.
- Пространственная сложность: \( O(1) \), так как мы не используем дополнительную память.
---
Поиск в отсортированном массиве (Бинарный поиск)
Если массив отсортирован, можно использовать бинарный поиск. Этот метод делит массив на две части и исключает половину элементов за одну итерацию.
🎯 Реализация:
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Элемент найден
    } else if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

// Пример использования:
const sortedNumbers = [10, 20, 30, 40, 50];
console.log(binarySearch(sortedNumbers, 30)); // 2
console.log(binarySearch(sortedNumbers, 60)); // -1
```
Объяснение:
- Устанавливаем указатели на начало (`left`) и конец (`right`) массива.
- Находим средний элемент массива.
- Если средний элемент равен искомому значению, возвращаем его индекс.
- Если значение меньше среднего элемента, сужаем поиск до левой половины.
- Если значение больше, сужаем поиск до правой половины.
- Повторяем процесс до тех пор, пока не найдём элемент или не исчерпаем массив.
Сложность:
- Временная сложность: \( O(\log n) \), так как мы каждый раз делим массив пополам.
- Пространственная сложность: \( O(1) \).
---------------------
⋙ ❍ ⌛ Задача: Поиск в объектах (Hash Search)
---
Если данные представлены в виде объекта или карты, можно использовать прямой доступ по ключу, что делает поиск мгновенным.
🎯 Реализация:
```javascript
const data = {
  alice: 25,
  bob: 30,
  charlie: 35,
};

console.log(data['bob']); // 30
console.log(data['dave']); // undefined
```
Объяснение:
- В объектах (или структурах типа `Map`) доступ по ключу имеет сложность \( O(1) \).
- Если ключ отсутствует, возвращается `undefined`.
---
Пример сложного поиска в массиве объектов
Для более сложных данных, например, массива объектов, можно использовать линейный поиск с проверкой по свойству.
🎯 Реализация:
```javascript
function findByName(arr, name) {
  return arr.find(person => person.name === name) || null;
}

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

console.log(findByName(people, 'Bob')); // { name: 'Bob', age: 30 }
console.log(findByName(people, 'Dave')); // null
```
Объяснение:
- Метод `find()` возвращает первый элемент массива, удовлетворяющий переданному условию.
- Если элемент не найден, возвращаем `null`.
Сложность:
- Временная сложность: \( O(n) \).
Выбор метода поиска
| Тип данных          | Лучший метод           | Сложность       |
|--------------------------|----------------------------|---------------------|
| Несортированный массив   | Линейный поиск            | \( O(n) \)          |
| Отсортированный массив   | Бинарный поиск            | \( O(\log n) \)     |
| Объекты (или Map)        | Прямой доступ (хэш-поиск) | \( O(1) \)          |
| Массив объектов          | Линейный поиск с фильтром | \( O(n) \)          |
Резюме
1. Линейный поиск подходит для небольших массивов или несортированных данных.
2. Для отсортированных массивов используйте бинарный поиск, который быстрее при больших данных.
3. Для доступа по ключу в объектах используйте прямой доступ (`O(1)`).
4. В сложных структурах, таких как массив объектов, можно использовать фильтры или `find`.
---------------------
⋙ ❍ Сбалансированные скобки:
---
⌛ Задача: Проверка сбалансированности скобок
Дано строку, содержащую скобки следующих типов: `()`, `{}`, `[]`. Необходимо написать функцию, которая определяет, являются ли скобки в строке сбалансированными.
Что значит сбалансированные скобки?
1. Каждая открывающая скобка должна быть закрыта соответствующей закрывающей скобкой.
2. Порядок вложенности должен быть правильным.
Пример:
- Сбалансированные: `"(){}[]"`, `"{[()]}"`, `""` (пустая строка).
- Несбалансированные: `"(}"`, `"({[)]}"`, `"("`.
---
🎯 Алгоритм решения
1. Используем стек:
   - Каждый раз, когда встречаем открывающую скобку, кладём её в стек.
   - Когда встречаем закрывающую скобку, проверяем, соответствует ли она верхнему элементу стека.
   - Если стек в конце пуст, скобки сбалансированы.
2. Если на каком-либо этапе закрывающая скобка не соответствует верхней открывающей скобке, строка несбалансирована.
---
🎯 Реализация
```javascript
function isBalanced(s) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      // Открывающую скобку кладем в стек
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      // Проверяем соответствие верхней скобки в стеке
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  // Если стек пуст, скобки сбалансированы
  return stack.length === 0;
}

// Примеры использования:
console.log(isBalanced("(){}[]")); // true
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("(}"));     // false
console.log(isBalanced("({[)]}")); // false
console.log(isBalanced("("));      // false
```
Объяснение
1. Карта соответствий скобок:
   - Используем объект `brackets` для проверки соответствия закрывающей и открывающей скобок.
   - Например: `')'` соответствует `'('`, `'}'` соответствует `'{'`.
2. Алгоритм:
   - Когда видим открывающую скобку, кладём её в стек.
   - Когда видим закрывающую скобку, сравниваем её с верхним элементом стека:
     - Если соответствует, удаляем верхний элемент из стека.
     - Если не соответствует или стек пуст, скобки несбалансированы.
   - После обработки всей строки, если стек пуст, скобки сбалансированы.
3. Сложность:
   - Временная сложность: \( O(n) \), где \( n \) — длина строки, так как мы проходим строку один раз.
   - Пространственная сложность: \( O(n) \), так как в худшем случае все скобки могут быть открывающими и добавлены в стек.
Расширенные примеры
Пример 1: Смешанные символы
Строка может содержать другие символы, помимо скобок. Их нужно игнорировать.
```javascript
function isBalanced(s) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("a + b * (c - d)")); // true (скобки в строке сбалансированы)
console.log(isBalanced("{a + [b * (c - d)]}")); // true
console.log(isBalanced("{a + (b * c - d]}")); // false
```
---
Пример 2: Пустая строка
Если строка пустая, скобки считаются сбалансированными.

```javascript
console.log(isBalanced("")); // true
```
---
Пример 3: Сложные строки
```javascript
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("{[(()])}")); // false
console.log(isBalanced("()[]{}{()}")); // true
```
Резюме
1. Подход с использованием стека — самый эффективный способ проверки сбалансированности скобок.
2. Ключевые моменты:
   - Добавление открывающих скобок в стек.
   - Сопоставление закрывающих скобок с верхним элементом стека.
   - Проверка пустоты стека в конце.
3. Сложность:
   - Временная: \( O(n) \).
   - Пространственная: \( O(n) \).
---------------------
⋙ ❍ ⌛ Задача: Очередь с О(1) сложностью операций:
---
🎯 Реализация очереди с операциями добавления (enqueue) и удаления (dequeue) за O(1) сложность возможна с использованием двух подходов:
1. Двух указателей: Голова (`head`) и хвост (`tail`) для управления массивом.
2. Связанный список: Используется для эффективного добавления/удаления.
---
1. Очередь на массиве с двумя указателями
Мы создаём фиксированный массив и управляем двумя указателями: `head` для удаления элементов и `tail` для добавления. Благодаря этому операции вставки и удаления работают за O(1).
🎯 Реализация:
```javascript
class Queue {
  constructor(size = 1000) {
    this.queue = new Array(size); // Фиксированный массив
    this.head = 0; // Указатель на первый элемент
    this.tail = 0; // Указатель на место вставки
    this.length = 0; // Количество элементов в очереди
    this.capacity = size; // Максимальный размер очереди
  }

  // Добавить элемент в очередь
  enqueue(value) {
    if (this.length === this.capacity) {
      throw new Error("Queue is full");
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity; // Циклическое перемещение
    this.length++;
  }

  // Удалить элемент из очереди
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity; // Циклическое перемещение
    this.length--;
    return value;
  }

  // Вернуть первый элемент без удаления
  peek() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.head];
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.length === 0;
  }

  // Получить размер очереди
  size() {
    return this.length;
  }
}

// Пример использования:
const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);            // Очередь заполнена
console.log(queue.size());    // 4
```
Объяснение:
1. Добавление (`enqueue`):
   - Значение вставляется в позицию `tail`.
   - Указатель `tail` перемещается вперёд (циклически).
   - Сложность: O(1).
2. Удаление (`dequeue`):
   - Элемент удаляется из позиции `head`.
   - Указатель `head` перемещается вперёд (циклически).
   - Сложность: O(1).
---
2. Очередь на связанном списке
Связанный список — это ещё один способ реализовать очередь с O(1) сложностью для операций добавления и удаления. Мы используем узлы (`Node`), где каждый узел хранит данные и ссылку на следующий.
🎯 Реализация:
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Указатель на первый элемент
    this.tail = null; // Указатель на последний элемент
    this.length = 0;  // Размер очереди
  }

  // Добавить элемент в очередь
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Удалить элемент из очереди
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return value;
  }

  // Вернуть первый элемент без удаления
  peek() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.head.value;
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.length === 0;
  }

  // Получить размер очереди
  size() {
    return this.length;
  }
}

// Пример использования:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
```
Объяснение:
1. Добавление (`enqueue`):
   - Новый узел добавляется в конец списка.
   - Указатель `tail` обновляется на новый узел.
   - Сложность: O(1).
2. Удаление (`dequeue`):
   - Указатель `head` перемещается на следующий узел.
   - Если очередь становится пустой, `tail` также обнуляется.
   - Сложность: O(1).
Сравнение двух подходов
| Характеристика         | Реализация на массиве      | Реализация на связанном списке |
|------------------------|----------------------------|--------------------------------|
| Сложность операций | O(1)                  | O(1)                      |
| Использование памяти | Фиксированный размер массива | Гибкий (динамический) размер   |
| Управление памятью | Требуется фиксированный объём | Требует дополнительной памяти для ссылок |
| Подходит для        | Очередей с известным размером | Динамических очередей          |
Резюме
1. Очередь на массиве:
   - Подходит, если заранее известен максимальный размер очереди.
   - Проста в реализации, требует управления указателями.
2. Очередь на связанном списке:
   - Динамическая очередь, нет ограничений по размеру.
   - Использует больше памяти из-за ссылок в каждом узле.
---------------------
⋙ ❍ ⌛ Задача: Deep Equal:
---
Deep Equal (глубокое сравнение) — это процесс сравнения двух объектов или структур данных для проверки, являются ли они структурно идентичными. В отличие от поверхностного сравнения (`===`), которое сравнивает только ссылки для объектов, глубокое сравнение рекурсивно проверяет каждое свойство объектов или элементов массивов.
⌛ Задача: Сравнить два объекта (или массивы) и определить, являются ли они полностью идентичными, включая вложенные свойства.
---
🎯 Решение 1: Реализация с использованием рекурсии
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если обе ссылки указывают на одно и то же, объекты равны
  if (obj1 === obj2) return true;

  // Если один из них null или не является объектом, они не равны
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Получаем массивы ключей обоих объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Если количество ключей не совпадает, объекты не равны
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проверяем каждое свойство
  for (let key of keys1) {
    // Рекурсивно сравниваем значения свойств
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Bob', details: { age: 25, city: 'NY' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Объяснение:
1. Сравнение ссылок:
   Если обе переменные указывают на одну и ту же ссылку (`===`), возвращаем `true`.
2. Проверка типов:
   Если один из объектов `null` или не является объектом, они не равны.
3. Ключи объектов:
   Сравниваем массивы ключей объектов. Если количество ключей отличается, объекты не равны.
4. Рекурсия:
   Рекурсивно вызываем функцию для каждого свойства объекта.
---
🎯 Решение 2: Сравнение массивов и объектов
Этот подход поддерживает сравнение как массивов, так и объектов.
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если объекты идентичны
  if (obj1 === obj2) return true;

  // Если это массивы
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((value, index) => deepEqual(value, obj2[index]));
  }

  // Если это не объекты или null
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Если это объекты
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// Пример использования:
const arr1 = [1, { a: 1 }, [2, 3]];
const arr2 = [1, { a: 1 }, [2, 3]];
const arr3 = [1, { a: 2 }, [2, 3]];

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(arr1, arr3)); // false
```
---
🎯 Решение 3: С использованием `JSON.stringify`
Иногда, если объекты не содержат функций или циклических ссылок, можно использовать преобразование в JSON для сравнения.
Код:
```javascript
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Alice', details: { age: 25, city: 'LA' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Недостатки:
- `JSON.stringify` не поддерживает циклические ссылки.
- Сравнение чувствительно к порядку ключей в объектах.
---
🎯 Решение 4: Обработка циклических ссылок
Если объекты содержат циклические ссылки (ссылаются сами на себя), необходимо обработать их с помощью, например, `WeakMap`.
Код:
```javascript
function deepEqual(obj1, obj2, visited = new WeakMap()) {
  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Обработка циклических ссылок
  if (visited.has(obj1)) return visited.get(obj1) === obj2;

  visited.set(obj1, obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice' };
objA.self = objA;

const objB = { name: 'Alice' };
objB.self = objB;

console.log(deepEqual(objA, objB)); // true
```
Резюме
| Метод                      | Особенности                                                                                      | Сложность       |
|----------------------------|--------------------------------------------------------------------------------------------------|-----------------|
| Рекурсия               | Работает с объектами, массивами, вложенными структурами. Не поддерживает циклические ссылки.    | O(n)        |
| JSON.stringify         | Простое решение, но не подходит для циклических ссылок. Чувствительно к порядку ключей.         | O(n)        |
| С мемоизацией (`WeakMap`) | Поддерживает циклические ссылки. Работает с любыми объектами и структурами.                     | O(n)       |
Для большинства задач, особенно без циклических ссылок, достаточно рекурсивного подхода. Для сложных случаев с циклическими ссылками лучше использовать вариант с `WeakMap`.
---------------------
⋙ ❍ ⌛ Задача: Последовательность Фибоначчи:
---
Последовательность Фибоначчи — это последовательность чисел, в которой каждое число является суммой двух предыдущих. Начальные числа последовательности: \( F(0) = 0 \), \( F(1) = 1 \), а для всех \( n > 1 \):
\[
F(n) = F(n-1) + F(n-2)
\]
Несколько способов вычисления последовательности Фибоначчи в JavaScript:
1. Генерация последовательности Фибоначчи с использованием итерации
Если вы хотите создать последовательность Фибоначчи до определённого числа \( n \), можно использовать итеративный подход:
🎯 Решение:
Код:
```javascript
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы начинаем с массива `[0, 1]`, содержащего первые два числа последовательности.
- Затем, начиная с \( i = 2 \), добавляем сумму двух предыдущих чисел в массив.
---
2. Генерация с использованием рекурсии
Рекурсивный подход вычисляет каждое число Фибоначчи путём вызова функции для двух предыдущих чисел.
🎯 Решение:
Код:
```javascript
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Генерация последовательности
function generateFibonacciRecursive(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciRecursive(i));
  }
  return sequence;
}

console.log(generateFibonacciRecursive(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Функция `fibonacciRecursive` возвращает число Фибоначчи для заданного индекса.
- Мы используем цикл, чтобы сгенерировать последовательность чисел.
Недостатки:
- Рекурсивный метод имеет экспоненциальную сложность O(2^n).
- Он повторно вычисляет одни и те же значения, что делает его медленным.
---
3. Оптимизированная рекурсия с мемоизацией
Мемоизация сохраняет уже вычисленные значения, чтобы избежать повторных расчётов.
🎯 Решение:
Код:
```javascript
function fibonacciMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

// Генерация последовательности
function generateFibonacciMemoized(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciMemoized(i));
  }
  return sequence;
}

console.log(generateFibonacciMemoized(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы используем объект `memo` для хранения уже вычисленных значений.
- Функция проверяет, существует ли значение в `memo`. Если да, то оно возвращается, иначе выполняется вычисление.
Преимущества:
- Сложность уменьшается до O(n).
---
4. Генерация последовательности с использованием формулы Бине
Число Фибоначчи можно вычислить напрямую с помощью формулы Бине:
\[
F(n) = \frac{\varphi^n - \psi^n}{\sqrt{5}}
\]
где \( \varphi = \frac{1 + \sqrt{5}}{2} \) (золотое сечение), а \( \psi = \frac{1 - \sqrt{5}}{2} \).
🎯 Решение:
Код:
```javascript
function fibonacciBinet(n) {
  const phi = (1 + Math.sqrt(5)) / 2; // Золотое сечение
  const psi = (1 - Math.sqrt(5)) / 2; // Обратное золотое сечение

  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

// Генерация последовательности
function generateFibonacciBinet(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciBinet(i));
  }
  return sequence;
}

console.log(generateFibonacciBinet(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Этот метод основан на математической формуле, но может быть менее точным для больших значений \( n \), из-за ошибок округления.
- Формула полезна для быстрого расчёта отдельных чисел, но менее эффективна для последовательностей.
---
5. Генерация последовательности с использованием `while`
Если нужно сгенерировать последовательность до определённого значения, а не индекса \( n \), используем цикл `while`.
🎯 Решение:
Код:
```javascript
function generateFibonacciUntil(maxValue) {
  const sequence = [0, 1];
  let nextValue = 0;

  while ((nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= maxValue) {
    sequence.push(nextValue);
  }

  return sequence;
}

console.log(generateFibonacciUntil(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы продолжаем вычислять числа Фибоначчи до тех пор, пока следующее число не превысит `maxValue`.
Резюме:
| Метод                          | Сложность | Особенности                                                   |
|--------------------------------|-----------|---------------------------------------------------------------|
| Итерация                   | O(n)  | Эффективный метод, занимает мало памяти.                     |
| Рекурсия                   | O(2^n)| Медленный метод, неэффективен для больших значений \( n \).   |
| Рекурсия с мемоизацией     | O(n)  | Ускоренная версия рекурсии, сохраняет вычисленные значения.   |
| Формула Бине               | O(1)  | Быстрый способ для вычисления отдельного числа Фибоначчи.     |
| Генерация до предела       | O(n)  | Позволяет сгенерировать последовательность до заданного значения. |
Для большинства задач рекомендуется использовать итеративный метод или рекурсию с мемоизацией, так как они наиболее эффективны.
---------------------
⋙ ❍ ⌛ Задача: Своя функция bind:
---
Создание собственной реализации функции `bind` в JavaScript — интересная задача, которая помогает понять, как работает метод `Function.prototype.bind`. Давайте разберем шаги для создания собственной функции `myBind`.
Что делает `bind`:
1. `bind` позволяет привязать контекст (`this`) к функции.
2. Возвращает новую функцию, которую можно вызывать позже с тем же контекстом и (при необходимости) переданными аргументами.
Пример использования:
```javascript
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: 'Alice' };
const boundGreet = greet.bind(person);
boundGreet('Hello'); // "Hello, my name is Alice"
```
🎯 Пошаговая реализация `myBind`:
Шаги для реализации:
1. `myBind` должна принимать:
   - контекст (`this`), к которому будет привязана функция.
   - начальные аргументы, которые нужно передать функции.
2. Возвращаемая функция должна:
   - сохранять переданный контекст.
   - принимать дополнительные аргументы, если они передаются при вызове.
   - учитывать передачу начальных и дополнительных аргументов.
3. Работать корректно для функций-конструкторов (то есть сохранять прототип оригинальной функции).
🎯 Реализация:
```javascript
Function.prototype.myBind = function(context, ...args) {
  const originalFunction = this; // Сохраняем ссылку на исходную функцию

  return function boundFunction(...newArgs) {
    // Проверяем, вызвана ли функция как конструктор
    if (this instanceof boundFunction) {
      // Если вызвана через `new`, используем оригинальную функцию с текущим контекстом
      return new originalFunction(...args, ...newArgs);
    }
    // Иначе вызываем с привязанным контекстом
    return originalFunction.apply(context, [...args, ...newArgs]);
  };
};
```
Объяснение кода:
1. Сохранение оригинальной функции:
   - `this` внутри метода `myBind` указывает на функцию, которую мы привязываем (например, `greet`).
2. Передача контекста и аргументов:
   - `args` — это массив начальных аргументов, которые передаются при вызове `myBind`.
   - `newArgs` — это аргументы, которые передаются при вызове возвращённой функции.
3. Использование `apply` для вызова функции:
   - `apply` позволяет передать контекст (`context`) и объединённый список аргументов (`args` и `newArgs`).
4. Поддержка конструктора:
   - Если `boundFunction` вызывается с помощью `new`, то `this instanceof boundFunction` будет `true`, и мы вызываем исходную функцию с новым контекстом.
---
Примеры использования:
Пример 1: Привязка контекста
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };

const boundGreet = greet.myBind(person, 'Hello');
boundGreet('!'); // "Hello, my name is Alice!"
```
---
Пример 2: Добавление аргументов во время вызова
```javascript
function add(a, b) {
  return a + b;
}

const addFive = add.myBind(null, 5); // Привязываем первый аргумент как 5
console.log(addFive(10)); // 15
```
---
Пример 3: Использование с `new`
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const BoundPerson = Person.myBind(null, 'Alice');
const person = new BoundPerson(30); // Используем `new` для создания объекта
console.log(person.name); // "Alice"
console.log(person.age); // 30
```
---
Проверка работоспособности:
- Обычный вызов с привязкой контекста: работает корректно.
- Передача аргументов: поддерживает как начальные аргументы, так и аргументы, переданные при вызове.
- Использование с `new`: корректно работает с функциями-конструкторами.
Резюме:
Метод `myBind` реализует ключевые функции стандартного `Function.prototype.bind`. Он:
1. Привязывает контекст (`this`) к функции.
2. Поддерживает передачу аргументов.
3. Корректно работает при вызове с `new`.
---------------------
⋙ ❍ Универсальная сумма:
---
⌛ Задача "Универсальная сумма" может означать вычисление суммы элементов в различных структурах данных или суммирование элементов с разными типами данных (например, чисел, строк и других типов). В контексте JavaScript можно рассматривать такие задачи как:
- Суммирование чисел в массиве.
- Суммирование элементов в более сложных структурах данных (например, массив объектов).
- Преобразование данных перед суммированием.
Я покажу несколько вариантов реализации "универсальной суммы" для различных случаев.
1. Сумма чисел в массиве
Простой случай: у нас есть массив чисел, и мы хотим вычислить их сумму.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```
Объяснение:
- Метод `reduce()` используется для суммирования всех элементов массива.
- Начальное значение суммы — `0`.
- В результате мы получаем сумму всех элементов массива.
---
2. Универсальная сумма для смешанных типов данных (например, чисел и строк)
Предположим, у нас есть массив, содержащий различные типы данных, такие как числа и строки. Мы хотим суммировать только числовые значения и игнорировать строки.
🎯 Решение:
```javascript
function universalSum(arr) {
  return arr.reduce((sum, item) => {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string' && !isNaN(Number(item))) {
      sum += Number(item);
    }
    return sum;
  }, 0);
}

const mixedArray = [1, '2', 3, '4', 'hello', 5];
console.log(universalSum(mixedArray)); // 15
```
Объяснение:
- В этом примере мы проверяем тип каждого элемента в массиве.
- Если элемент — это число, мы добавляем его к сумме.
- Если элемент — это строка, и её можно преобразовать в число (с помощью `Number()`), то мы также добавляем его к сумме.
- В случае, если элемент не является числом или строкой, мы его игнорируем.
---
3. Суммирование числовых значений в объекте
Иногда данные могут быть представлены в виде объекта, и нам нужно суммировать все числовые значения этого объекта.
🎯 Решение:
```javascript
function sumObjectValues(obj) {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === 'number') {
      sum += value;
    }
    return sum;
  }, 0);
}

const data = {
  a: 10,
  b: 20,
  c: 30,
  d: 'hello',
  e: 40
};

console.log(sumObjectValues(data)); // 100
```
Объяснение:
- Мы используем `Object.values(obj)`, чтобы получить все значения объекта.
- Затем с помощью `reduce()` суммируем только числовые значения.
---
4. Универсальная сумма с условием (например, суммировать только чётные числа)
Иногда может понадобиться суммировать только те элементы, которые удовлетворяют определённому условию (например, только чётные числа).
🎯 Решение:
```javascript
function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumEvenNumbers(numbers)); // 20 (2 + 4 + 6 + 8)
```
Объяснение:
- Мы используем метод `filter()`, чтобы отфильтровать только чётные числа.
- Затем применяем `reduce()`, чтобы суммировать отфильтрованные числа.
---
5. Универсальная сумма для вложенных массивов (плоский массив)
Иногда требуется выполнить сумму элементов, даже если данные находятся в глубоко вложенных массивах. Для этого можно использовать метод, который разворачивает массив.
🎯 Решение с использованием `flat()`:
```javascript
function sumFlattenedArray(arr) {
  return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}

const nestedArray = [1, [2, 3], [4, [5, [6]]]];
console.log(sumFlattenedArray(nestedArray)); // 21 (1 + 2 + 3 + 4 + 5 + 6)
```
Объяснение:
- Мы используем метод `flat(Infinity)`, чтобы "расплющить" массив на все уровни вложенности.
- После этого применяем `reduce()`, чтобы посчитать сумму всех элементов.
---
6. Суммирование с учётом типов (например, строки и числа)
Предположим, что нам нужно суммировать числовые значения, а строки при этом объединять.
🎯 Решение:
```javascript
function sumOrConcatenate(arr) {
  return arr.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc.sum += item;
    } else if (typeof item === 'string') {
      acc.concat += item;
    }
    return acc;
  }, { sum: 0, concat: '' });
}

const mixedArray = [1, 'hello', 2, 'world', 3];
const result = sumOrConcatenate(mixedArray);

console.log(result.sum); // 6
console.log(result.concat); // "helloworld"
```
Объяснение:
- Мы используем `reduce()`, чтобы пройти по всем элементам массива.
- Если элемент является числом, мы добавляем его к сумме.
- Если элемент является строкой, мы добавляем его к строке.
---
7. Суммирование с учётом ключей объектов
Иногда объекты могут содержать числовые значения в разных ключах, и нам нужно посчитать сумму значений всех этих ключей.
🎯 Решение:
```javascript
function sumObjectValuesByKey(obj) {
  return Object.keys(obj).reduce((sum, key) => {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
    return sum;
  }, 0);
}

const object = {
  a: 10,
  b: 20,
  c: 30,
  d: 'hello'
};

console.log(sumObjectValuesByKey(object)); // 60
```
Объяснение:
- Мы используем `Object.keys()` для получения всех ключей объекта и затем с помощью `reduce()` суммируем все числовые значения.
Резюме:
1. Сумма чисел в массиве: Простая задача, решаемая с использованием `reduce()`.
2. Суммирование смешанных типов данных: Мы фильтруем и преобразуем данные перед суммированием.
3. Суммирование значений объектов: Для объектов можно использовать методы `Object.values()` или `Object.keys()` в сочетании с `reduce()`.
4. Суммирование с условием: Например, сумма чётных чисел с использованием `filter()` и `reduce()`.
5. Плоский массив: Если массив вложен, используем `flat()` перед суммированием.
---------------------
⋙ ❍ ⌛ Задача: GroupBy:
---
Метод `groupBy` в JavaScript используется для группировки элементов массива по какому-либо критерию. Например, можно сгруппировать элементы по определённому свойству объекта или по значению.
JavaScript не предоставляет встроенный метода `groupBy`, но его можно легко реализовать с помощью стандартных методов массивов, таких как `reduce()` или с использованием библиотеки, например, Lodash.
Давайте рассмотрим, как можно реализовать `groupBy` в чистом JavaScript, а затем пример с использованием Lodash.
1. 🎯 Реализация `groupBy` с использованием `reduce()`
⌛ Пример задачи:
Нам нужно сгруппировать массив объектов по определённому ключу.
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

function groupBy(arr, key) {
  return arr.reduce((result, currentValue) => {
    // Получаем значение ключа для текущего элемента
    const groupKey = currentValue[key];

    // Если в объекте нет такого ключа, создаём новый массив для этой группы
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Добавляем текущий элемент в соответствующую группу
    result[groupKey].push(currentValue);

    return result;
  }, {});  // Начальный результат — это пустой объект
}

const groupedByAge = groupBy(people, 'age');
console.log(groupedByAge);
```
Вывод:
```javascript
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35: [
    { name: 'Eve', age: 35 }
  ]
}
```
Объяснение:
- Мы используем метод `reduce()`, чтобы пройти по каждому элементу массива и сгруппировать элементы по ключу (в данном случае `age`).
- Для каждого элемента мы проверяем, существует ли уже группа с таким ключом. Если не существует, создаём новую.
- В результате возвращается объект, где ключами являются значения из поля `age`, а значениями — массивы людей с этим возрастом.
---
2. 🎯 Реализация `groupBy` с использованием `Map`
Иногда для группировки данных удобно использовать структуру данных `Map`, которая предоставляет быстрый доступ и порядок вставки.
```javascript
function groupBy(arr, key) {
  return arr.reduce((map, obj) => {
    // Получаем значение ключа для текущего объекта
    const groupKey = obj[key];

    // Если группа не существует, создаём её
    if (!map.has(groupKey)) {
      map.set(groupKey, []);
    }

    // Добавляем текущий объект в соответствующую группу
    map.get(groupKey).push(obj);

    return map;
  }, new Map()); // Используем Map вместо объекта
}

const groupedByAgeMap = groupBy(people, 'age');
console.log(groupedByAgeMap);
```
Вывод:
```javascript
Map(3) {
  25 => [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30 => [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35 => [{ name: 'Eve', age: 35 }]
}
```
Объяснение:
- В отличие от обычного объекта, `Map` сохраняет порядок добавления элементов.
- Для группировки мы использовали `Map` с ключами, равными значению поля `age`.
---
3. 🎯 Использование Lodash для `groupBy`
Lodash — это популярная библиотека с набором полезных функций для работы с коллекциями. В Lodash уже есть готовая функция `groupBy()`, которая упрощает задачу.
Чтобы использовать Lodash, необходимо сначала установить его:
```bash
npm install lodash
```
Затем можно использовать его функцию `groupBy()`:
```javascript
const _ = require('lodash');

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 35 }
];

const groupedByAge = _.groupBy(people, 'age');
console.log(groupedByAge);
```
Вывод:
```javascript
{
  '25': [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  '30': [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  '35': [
    { name: 'Eve', age: 35 }
  ]
}
```
Объяснение:
- Функция `_.groupBy` из Lodash работает аналогично нашему решению с использованием `reduce()`, но она гораздо короче и автоматически поддерживает различные типы данных.
---
4. 🎯 Группировка по нескольким полям
Иногда бывает полезно группировать данные по нескольким полям, например, по возрасту и полу. Для этого можно комбинировать ключи.
```javascript
function groupByMultiple(arr, keys) {
  return arr.reduce((result, obj) => {
    // Создаем ключ для каждой группы по всем переданным ключам
    const groupKey = keys.map(key => obj[key]).join('-');

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(obj);
    return result;
  }, {});
}

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 25, gender: 'male' },
  { name: 'David', age: 30, gender: 'male' },
  { name: 'Eve', age: 35, gender: 'female' }
];

const groupedByAgeAndGender = groupByMultiple(people, ['age', 'gender']);
console.log(groupedByAgeAndGender);
```
Вывод:
```javascript
{
  '25-female': [ { name: 'Alice', age: 25, gender: 'female' } ],
  '30-male': [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'David', age: 30, gender: 'male' }
  ],
  '25-male': [ { name: 'Charlie', age: 25, gender: 'male' } ],
  '35-female': [ { name: 'Eve', age: 35, gender: 'female' } ]
}
```
Объяснение:
- Мы создаём уникальный ключ для каждой группы, соединяя значения по указанным полям (в данном случае `age` и `gender`).
- Это позволяет группировать данные по нескольким атрибутам.
Резюме:
1. Использование `reduce()`: Мы можем легко группировать данные, используя метод `reduce()` для накопления результатов в объект или `Map`.
2. Использование Lodash: Если вы используете библиотеку Lodash, то можете использовать её готовую функцию `_.groupBy()`, которая сокращает код.
3. Группировка по нескольким полям: Мы можем комбинировать несколько полей в ключ для создания групп, что позволяет делать сложную группировку.
---------------------
⋙ ❍ ⌛ Задача: + - Числа Фибоначчи - РЕКУРСИЯ:
---
Пример с комментариями
function fibonacci(n) {
  if (n <= 1) return n;  // Базовые случаи: F(0) = 0, F(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов для F(n-1) и F(n-2)
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
Для вычисления чисел Фибоначчи с использованием рекурсии в JavaScript, нам нужно создать функцию, которая будет вызывать сама себя для вычисления предыдущих значений последовательности, пока не дойдёт до базовых случаев (0 и 1).
🎯 Решение с рекурсией
Функция для вычисления чисел Фибоначчи будет рекурсивно вызывать себя для \( F(n-1) \) и \( F(n-2) \), пока не достигнет базовых значений:
\[
F(0) = 0
\]
\[
F(1) = 1
\]
🎯 Решение:
```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение:
1. Базовые случаи:
   - Если \( n \) равно 0 или 1, функция сразу возвращает \( n \), так как эти значения являются начальными числами последовательности Фибоначчи.
2. Рекурсивный случай:
   - Для \( n > 1 \) функция возвращает сумму двух предыдущих чисел, вызывая саму себя для \( n - 1 \) и \( n - 2 \).

   Например, для \( n = 5 \):
   \[
   F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1))
   \]
   Этот процесс продолжается до достижения базовых значений.
Проблемы с рекурсией:
- Медленная производительность: Рекурсивный метод может быть неэффективным для больших значений \( n \), так как многократно вычисляются одни и те же подзадачи. Например, для \( F(5) \), функция будет дважды вычислять \( F(3) \) и \( F(2) \), что приводит к экспоненциальному времени выполнения — O(2^n).
- Решение проблемы (мемоизация): Для оптимизации рекурсивного подхода можно использовать технику мемоизации, которая будет хранить результаты уже вычисленных значений.
Оптимизация с использованием мемоизации:
Мемоизация позволяет нам запоминать результаты вычислений, чтобы не повторять одни и те же вычисления.
```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;

  // Проверяем, есть ли уже результат в мемоизации
  if (memo[n]) return memo[n];

  // Сохраняем результат в мемоизации и возвращаем
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение оптимизации:
- Мы добавляем объект `memo`, который будет хранить уже вычисленные значения для каждого \( n \).
- При каждом рекурсивном вызове мы проверяем, есть ли уже результат для текущего значения \( n \). Если есть, мы сразу возвращаем его, чтобы не пересчитывать.
- Мемоизация снижает время выполнения до O(n), так как каждое значение вычисляется только один раз.
Резюме:
1. Рекурсивный способ решения задачи даёт понятный и элегантный способ вычисления чисел Фибоначчи, но для больших значений \( n \) может быть неэффективен из-за экспоненциальной сложности O(2^n).
2. Мемоизация позволяет значительно улучшить производительность, снижая время выполнения до O(n).
Рекурсия является хорошим способом понять саму структуру задачи, но для реальных приложений и больших чисел лучше использовать более эффективные методы (например, итеративные решения или методы с мемоизацией).
---------------------
⋙ ❍ ⌛ Задача: Числа Фибоначчи - Итеративный способ:
---
Числа Фибоначчи — это последовательность чисел, в которой каждое следующее число является суммой двух предыдущих. Начинается последовательность с 0 и 1. Формально, \( F(0) = 0 \), \( F(1) = 1 \), а для всех \( n > 1 \), \( F(n) = F(n-1) + F(n-2) \).
Для вычисления чисел Фибоначчи существует несколько способов, включая рекурсивный и итеративный. Итеративный способ является более эффективным с точки зрения времени выполнения и памяти, особенно для больших значений.
Итеративный способ вычисления чисел Фибоначчи
В итеративном подходе мы будем использовать два числа для хранения предыдущих значений последовательности и будем обновлять их по мере необходимости, избегая использования рекурсии.
🎯 Решение:
```javascript
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение:
1. Инициализация: Мы начинаем с двух переменных `a` и `b`, которые хранят два первых числа последовательности (0 и 1).
2. Цикл: В цикле мы начинаем с 2 и доходим до \( n \), каждый раз обновляя значения переменных `a` и `b` для вычисления следующего числа Фибоначчи.
   - В каждой итерации мы вычисляем новое число как сумму текущих значений `a` и `b`.
   - Затем обновляем `a` и `b`, чтобы `a` стало равно старому значению `b`, а `b` — новому числу.
3. Возвращаем результат: В конце цикла `b` содержит нужное значение числа Фибоначчи для заданного индекса \( n \).
Пример:
- Для \( n = 10 \), вывод будет `55`, так как 10-е число Фибоначчи в последовательности равно 55:
  \[
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  \]
Преимущества итеративного подхода:
- Время выполнения: Итеративный подход работает за O(n) времени, так как мы проходим по циклу от 2 до \( n \).
- Память: Итеративный подход использует O(1) памяти, поскольку нам нужно хранить только два числа на каждом шаге, а не весь массив.
Резюме:
Итеративный метод является самым эффективным способом вычисления чисел Фибоначчи с точки зрения времени и памяти. Он подходит для расчёта чисел Фибоначчи даже для больших значений \( n \), где рекурсивные методы с высокой сложностью могут быть менее эффективны.
---------------------
⋙ ❍ Палиндром:
---
Палиндром — это слово, фраза, число или другая последовательность символов, которая читается одинаково в обоих направлениях (слева направо и справа налево), игнорируя пробелы, знаки препинания и регистр букв.
⌛ Задача: Проверка палиндрома на JavaScript
Для того чтобы проверить, является ли строка палиндромом, можно использовать несколько методов. Рассмотрим основные подходы.
🎯 Решение 1: Простой способ с использованием метода `split()`, `reverse()` и `join()`
1. Мы удаляем все неалфавитные символы и приводим строку к одному регистру.
2. Переворачиваем строку и сравниваем её с оригинальной.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Переворачиваем строку и сравниваем с оригиналом
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы используем регулярное выражение `[^a-zA-Z0-9]`, чтобы удалить все символы, не являющиеся буквами и цифрами.
- Приводим строку к нижнему регистру с помощью `toLowerCase()`.
- С помощью `split('')` преобразуем строку в массив символов, затем `reverse()` переворачиваем массив, и `join('')` снова объединяем массив в строку.
- Если оригинальная строка и перевёрнутая строки одинаковы, значит, это палиндром.
---
🎯 Решение 2: Использование цикла для проверки палиндрома
Если мы не хотим использовать дополнительные методы, такие как `split()`, `reverse()`, `join()`, можно использовать цикл для проверки каждого символа с обеих сторон строки.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanedStr.length - 1;

  // Сравниваем символы с двух сторон
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы начинаем с двух указателей: один указывает на начало строки, другой — на конец.
- В цикле мы сравниваем символы на соответствующих позициях. Если они не совпадают, то строка не является палиндромом.
- Если мы прошли всю строку и символы с обеих сторон совпали, возвращаем `true`.
---
🎯 Решение 3: Использование `every()` для проверки палиндрома
Метод `every()` позволяет проверить, что все элементы массива удовлетворяют условию. Мы можем использовать его для проверки палиндрома.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return [...cleanedStr].every((char, i) => char === cleanedStr[cleanedStr.length - 1 - i]);
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы превращаем строку в массив с помощью оператора распространения (`...`).
- Метод `every()` проверяет, что каждый символ с позиции `i` совпадает с символом на соответствующей позиции с конца строки.
---
🎯 Решение 4: Проверка палиндрома с помощью стека
Можно использовать структуру данных стек, чтобы проверить, является ли строка палиндромом.
```javascript
function isPalindrome(str) {
  // Убираем все символы, кроме букв и цифр, и приводим к нижнему регистру
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const stack = [];

  // Помещаем все символы в стек
  for (let i = 0; i < cleanedStr.length; i++) {
    stack.push(cleanedStr[i]);
  }

  // Сравниваем строку с элементами стека
  for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i] !== stack.pop()) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение:
- Мы помещаем все символы строки в стек.
- Стек работает по принципу LIFO (последний пришёл — первый ушёл), поэтому при извлечении элементов из стека мы будем проверять их с начала строки.
Резюме:
1. Метод с использованием `reverse()`:
   - Простой способ, но требует больше памяти, так как создаёт новые массивы и строки.
   - Работает за O(n) по времени и O(n) по памяти.
2. Метод с использованием цикла:
   - Экономичен по памяти, так как не требует создания дополнительных структур данных.
   - Работает за O(n) по времени и O(1) по памяти.
3. Метод с использованием `every()`:
   - Функциональный стиль решения, также работает за O(n) по времени и O(n) по памяти.
4. Метод с использованием стека:
   - Использует стек для хранения символов строки.
   - Работает за O(n) по времени и O(n) по памяти.
В зависимости от задачи, вы можете выбрать подход, который лучше всего соответствует вашим требованиям по времени и памяти.
---------------------
⋙ ❍ Задача на понимание замыканий\колбеков:
---
1. Создание простого замыкания
⌛ Задача: Напишите функцию, которая создаёт и возвращает другую функцию, запоминающую значение.
🎯 Решение:
```javascript
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```
Объяснение: `inner` является замыканием, потому что оно имеет доступ к переменной `counter` из внешней функции `outer`, даже после того как `outer` завершит выполнение.
---
2. Колбек с асинхронной функцией
⌛ Задача: Напишите функцию, которая принимает колбек и вызывает его после задержки в 1 секунду.
🎯 Решение:
```javascript
function delayedCall(callback) {
  setTimeout(() => {
    callback('Hello after 1 second');
  }, 1000);
}

delayedCall(message => console.log(message)); // "Hello after 1 second" через 1 секунду
```
Объяснение: Мы используем `setTimeout`, чтобы имитировать асинхронную операцию и вызвать переданный колбек через 1 секунду.
---
3. Применение замыкания для счётчика
⌛ Задача: Напишите функцию, которая создаёт счётчик с функциями для увеличения и сброса значения.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    reset: () => { count = 0; },
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
counter.reset();
console.log(counter.getCount()); // 0
```
Объяснение: Мы создаём объект с методами для увеличения, сброса и получения значения счётчика. Переменная `count` остаётся доступной через замыкание.
---
4. Использование замыкания для скрытия данных
⌛ Задача: Напишите функцию, которая инкапсулирует переменную и предоставляет только методы для её изменения.
🎯 Решение:
```javascript
function secretData() {
  let data = 'secret';
  return {
    getData: () => data,
    setData: (newData) => { data = newData; }
  };
}

const secret = secretData();
console.log(secret.getData()); // "secret"
secret.setData('new secret');
console.log(secret.getData()); // "new secret"
```
Объяснение: Переменная `data` инкапсулирована в замыкании и доступна только через публичные методы `getData` и `setData`.
---
5. Колбеки с обработкой ошибок
⌛ Задача: Напишите функцию, которая выполняет операцию и вызывает переданный колбек с ошибкой или результатом.
🎯 Решение:
```javascript
function doOperation(callback) {
  const error = false;
  if (error) {
    callback('Error occurred', null);
  } else {
    callback(null, 'Operation successful');
  }
}

doOperation((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result); // "Operation successful"
  }
});
```
Объяснение: В функции `doOperation` проверяется ошибка, и вызывается колбек с соответствующим значением: ошибкой или результатом.
---
6. Замыкание для формирования уникального идентификатора
⌛ Задача: Напишите функцию, которая генерирует уникальные идентификаторы.
🎯 Решение:
```javascript
function uniqueIdGenerator() {
  let id = 0;
  return function() {
    return ++id;
  };
}

const getId = uniqueIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
```
Объяснение: Функция `uniqueIdGenerator` создаёт замыкание для переменной `id`, которая инкрементируется при каждом вызове внутренней функции.
---
7. Асинхронные колбеки с использованием `setTimeout`
⌛ Задача: Напишите функцию, которая вызывает колбек после 2 секунд задержки.
🎯 Решение:
```javascript
function delayedMessage(callback) {
  setTimeout(() => {
    callback('Message after 2 seconds');
  }, 2000);
}

delayedMessage(msg => console.log(msg)); // "Message after 2 seconds" через 2 секунды
```
Объяснение: Мы используем `setTimeout`, чтобы задержать выполнение колбека на 2 секунды.
---
8. Замыкание для создания приватных переменных
⌛ Задача: Напишите функцию, которая инкапсулирует переменные, предоставляя доступ только через методы.
🎯 Решение:
```javascript
function createPerson(name, age) {
  return {
    getName: () => name,
    getAge: () => age,
    setName: (newName) => { name = newName; },
    setAge: (newAge) => { age = newAge; }
  };
}

const person = createPerson('Alice', 30);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
person.setName('Bob');
person.setAge(35);
console.log(person.getName()); // Bob
console.log(person.getAge()); // 35
```
Объяснение: Переменные `name` и `age` скрыты внутри замыкания, и их можно изменить только через публичные методы.
---
9. Колбек для асинхронной загрузки данных
⌛ Задача: Напишите функцию, которая имитирует асинхронную загрузку данных и вызывает переданный колбек.
🎯 Решение:
```javascript
function loadData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

loadData(data => console.log(data)); // "Data loaded" через 1 секунду
```
Объяснение: Используем `setTimeout`, чтобы симулировать асинхронную операцию, которая вызывает колбек после 1 секунды.
---
10. Колбек с фильтрацией данных
⌛ Задача: Напишите функцию, которая фильтрует элементы массива с использованием колбека.
🎯 Решение:
```javascript
function filterArray(arr, callback) {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```
Объяснение: Функция `filterArray` использует колбек для фильтрации элементов массива, возвращая только чётные числа.
---
11. Замыкание для создания счётчика с ограничением
⌛ Задача: Напишите функцию, которая создаёт счётчик с максимальным значением.
🎯 Решение:
```javascript
function createLimitedCounter(max) {
  let count = 0;
  return function() {
    if (count < max) {
      count++;
    }
    return count;
  };
}

const counter = createLimitedCounter(5);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
console.log(counter()); // 5 (дальше не увеличивается)
```
Объяснение: Внутри замыкания переменная `count` ограничена максимальным значением `max`.
---
12. Замыкание для создания таймера
⌛ Задача: Напишите функцию, которая отсчитывает время, вызывая колбек каждую секунду.
🎯 Решение:
```javascript
function startTimer(callback) {
  let time = 0;
  setInterval(() => {
    time++;
    callback(time);
  }, 1000);
}

startTimer(time => console.log(`Time: ${time}s`));
```
Объяснение: Используем `setInterval`, чтобы вызывать колбек каждую секунду и отслеживать время.
---
13. Замыкание для создания и отслеживания состояния
⌛ Задача: Напишите функцию, которая инкапсулирует состояние и изменяет его через публичные методы.
🎯 Решение:
```javascript
function createState(initialValue) {
  let state = initialValue;
  return {
    getState: () => state,
    setState: (newState) => { state = newState; }
  };
}

const state = createState(0);
console.log(state.getState()); // 0
state.setState(10);
console.log(state.getState()); // 10
```
Объяснение: Состояние инкапсулировано внутри замыкания и доступно только через публичные методы.
---
14. Колбек с асинхронной обработкой нескольких данных
⌛ Задача: Напишите функцию, которая принимает массив данных и вызывает колбек для каждого элемента.
🎯 Решение:
```javascript
function processData(data, callback) {
  data.forEach(item => {
    callback(item);
  });
}

processData([1, 2, 3, 4], item => console.log(item * 2)); // 2 4 6 8
```
Объяснение: Мы проходим по всем данным и вызываем колбек для каждого элемента массива.
---
15. Внешний и внутренний счётчик
⌛ Задача: Напишите функцию, которая увеличивает счётчик в зависимости от внешнего значения.
🎯 Решение:
```javascript
function createCounter(increment) {
  let count = 0;
  return function() {
    count += increment;
    return count;
  };
}

const counter = createCounter(2);
console.log(counter()); // 2
console.log(counter()); // 4
console.log(counter()); // 6
```
Объяснение: Внутренний счётчик зависит от значения, переданного в качестве аргумента функции `createCounter`.
---
16. Колбек с выводом результата
⌛ Задача: Напишите функцию, которая выводит результат асинхронной операции через колбек.
🎯 Решение:
```javascript
function asyncOperation(callback) {
  setTimeout(() => {
    callback('Operation completed');
  }, 1500);
}

asyncOperation(result => console.log(result)); // "Operation completed" через 1.5 секунды
```
Объяснение: Мы используем `setTimeout`, чтобы симулировать асинхронную операцию и вызвать колбек через 1.5 секунды.
---
17. Закрытие доступа через замыкание
⌛ Задача: Напишите функцию, которая защищает доступ к приватным данным через замыкание.
🎯 Решение:
```javascript
function createPrivateData() {
  let privateData = 'secret';
  return {
    getPrivateData: () => privateData,
    setPrivateData: (newData) => { privateData = newData; }
  };
}

const data = create
---------------------
⋙ ❍ Задача с концертами?:
---
Задача с концертами обычно может быть связана с выбором времени для мероприятий, например, когда вам нужно организовать несколько концертов и обеспечить, чтобы они не пересекались по времени, либо найти оптимальный способ организовать концерты, чтобы они не конфликтовали.
Давайте рассмотрим типичную задачу, связанную с расписанием концертов:
⌛ Задача: Найти максимальное количество концертов, которые можно посетить
У нас есть список концертов, каждый из которых имеет начальное и конечное время. Нужно найти максимальное количество концертов, которые можно посетить, если концерты не должны пересекаться по времени.
Алгоритм решения:
1. Сначала отсортируем концерты по времени их завершения.
2. Для каждого концерта будем проверять, можно ли его посетить, не пересекаясь с уже выбранными концертами.
3. Для этого будем хранить время окончания последнего выбранного концерта.
🎯 Решение:
Пример данных:
- Каждый концерт представлен объектом с полями `start` (начало концерта) и `end` (конец концерта).
```javascript
function maxConcerts(concerts) {
  // Сортируем концерты по времени их завершения
  concerts.sort((a, b) => a.end - b.end);

  let count = 0;
  let lastEndTime = 0;

  // Итерируем по всем концертам
  for (let i = 0; i < concerts.length; i++) {
    const concert = concerts[i];

    // Если начало концерта позже времени окончания последнего выбранного концерта, можно посетить этот концерт
    if (concert.start >= lastEndTime) {
      count++;
      lastEndTime = concert.end;  // Обновляем время окончания последнего выбранного концерта
    }
  }

  return count;
}

// Пример использования:
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 },
  { start: 5, end: 7 }
];

const result = maxConcerts(concerts);
console.log(result); // 3 (можно посетить концерты с временем [1-3], [3-5] и [5-7])
```
Объяснение:
1. Мы начинаем с сортировки концертов по времени их завершения (`concert.end`), так как это позволяет нам эффективно выбирать концерты, которые заканчиваются как можно раньше.
2. Затем мы начинаем с первого концерта и проверяем, можем ли посетить его, учитывая, что концерт может быть посещён, если его начало не совпадает с или позже времени завершения предыдущего выбранного концерта.
3. Если можем посетить концерт, увеличиваем счётчик `count` и обновляем `lastEndTime` на время окончания этого концерта.
Пример 1:
```javascript
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 },
  { start: 5, end: 7 }
];

const result = maxConcerts(concerts);
console.log(result); // 3
```
Здесь мы можем посетить:
- Концерт с временем [1-3],
- Концерт с временем [3-5],
- Концерт с временем [5-7].
Итого: 3 концерта.
Пример 2:
```javascript
const concerts = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 5, end: 7 },
  { start: 6, end: 8 },
  { start: 8, end: 9 }
];

const result = maxConcerts(concerts);
console.log(result); // 4
```
Здесь можно посетить:
- Концерт с временем [1-3],
- Концерт с временем [5-7],
- Концерт с временем [8-9].
Итого: 4 концерта.
Объяснение алгоритма:
- Сортировка: Мы сортируем концерты по времени окончания, потому что нужно всегда выбирать концерт, который заканчивается раньше, чтобы освободить время для следующего.
- Перебор: После сортировки мы просто перебираем массив и выбираем те концерты, которые не перекрывают друг друга.
Этот алгоритм работает за O(n log n), где `n` — это количество концертов, так как основное время уходит на сортировку массива концертов. После сортировки выбор концертов происходит за O(n).
Резюме:
Этот метод позволяет эффективно найти максимальное количество концертов, которые можно посетить, не сталкиваясь с пересечениями. Мы используем жадный алгоритм, который на каждом шаге выбирает концерт, который завершится как можно раньше, освобождая время для последующих мероприятий.
---------------------
⋙ ❍ Периметр закрашенной области:
---
Для нахождения периметра закрашенной области (например, области на двумерной сетке или в некоторой фигуре), необходимо учитывать как саму область, так и её границы. Если область ограничена определенной формой (например, прямоугольником или многоугольником), то задача сводится к вычислению длины периметра этой фигуры.
Допустим, у нас есть массив координат, представляющий вершины закрашенной области (например, многоугольника), и мы хотим вычислить периметр этой области.
⌛ Задача: Найти периметр закрашенной области (многоугольника)
Предположим, что нам даны координаты вершин многоугольника (в двумерной системе координат), и мы должны вычислить периметр, соединяя эти вершины.
Периметр многоугольника можно вычислить, сложив расстояния между каждой парой соседних вершин.
Формула для вычисления расстояния между двумя точками \((x_1, y_1)\) и \((x_2, y_2)\) в 2D пространстве:
\[
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\]
🎯 Решение на JavaScript
1. Мы будем рассчитывать расстояние между каждой парой соседних точек.
2. Учитываем, что многоугольник замкнут, т.е. последняя точка соединяется с первой.
```javascript
function calculatePerimeter(coords) {
  let perimeter = 0;

  for (let i = 0; i < coords.length; i++) {
    // Индекс следующей точки, если i == последняя точка, то следующая точка - первая
    const nextIndex = (i + 1) % coords.length;

    const x1 = coords[i][0];
    const y1 = coords[i][1];
    const x2 = coords[nextIndex][0];
    const y2 = coords[nextIndex][1];

    // Вычисление расстояния между точками (x1, y1) и (x2, y2)
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    perimeter += distance;
  }

  return perimeter;
}

// Пример использования:
const polygonCoordinates = [
  [0, 0],  // Точка 1
  [4, 0],  // Точка 2
  [4, 3],  // Точка 3
  [0, 3]   // Точка 4
];

const perimeter = calculatePerimeter(polygonCoordinates);
console.log(perimeter); // 14 (периметр прямоугольника)
```
Объяснение:
1. Перебор координат: Мы перебираем все точки массива, где каждая точка имеет координаты в виде `[x, y]`.
2. Расстояние между соседними точками: Для каждой пары соседних точек (с учётом того, что последняя точка соединяется с первой), мы вычисляем расстояние с использованием формулы Евклида.
3. Замкнутый многоугольник: Поскольку последний узел соединяется с первым, для последней точки мы берём индекс первой точки (через операцию `(i + 1) % coords.length`).
Пример 1: Прямоугольник
- Вершины: `[0, 0], [4, 0], [4, 3], [0, 3]`
- Периметр будет \(4 + 3 + 4 + 3 = 14\).
Пример 2: Треугольник
- Вершины: `[0, 0], [4, 0], [2, 3]`
- Периметр будет \(5 + 4 + 3 = 12\).
```javascript
const triangleCoordinates = [
  [0, 0],  // Точка 1
  [4, 0],  // Точка 2
  [2, 3]   // Точка 3
];

const perimeterTriangle = calculatePerimeter(triangleCoordinates);
console.log(perimeterTriangle); // 12
```
Общий случай:
Этот алгоритм работает для любого многоугольника с любым количеством вершин (и выпуклого, и вогнутого), так как мы учитываем все его стороны и замкнутость.
Дополнительные замечания:
- Этот подход работает только для двумерных многоугольников.
- Если нужно учитывать многоугольники, имеющие "вырезанные" или полые области, подход должен быть доработан (например, с использованием метода для вычисления площади, например, с учётом Внешнего и Внутреннего периметра).
Заключение:
Для нахождения периметра закрашенной области в JavaScript можно использовать методы, подобные приведённому решению. Важно учитывать, что каждый многоугольник может иметь разное количество сторон, и периметр следует вычислять через сумму расстояний между соседними вершинами.
---------------------
⋙ ❍ Задачи с числами и массивом:
---
1. Сумма всех элементов массива
⌛ Задача: Напишите функцию, которая находит сумму всех элементов массива.
🎯 Решение:
```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
```
Объяснение: Используем метод `reduce()` для нахождения суммы элементов массива.
---
2. Уникальные элементы в массиве
⌛ Задача: Напишите функцию, которая возвращает новый массив, содержащий только уникальные элементы из исходного массива.
🎯 Решение:
```javascript
function uniqueElements(arr) {
  return [...new Set(arr)];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```
Объяснение: Используем `Set`, который автоматически удаляет дубликаты, и оператор расширения для преобразования его обратно в массив.
---
3. Найти наибольшее число в массиве
⌛ Задача: Напишите функцию, которая находит наибольшее число в массиве.
🎯 Решение:
```javascript
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
```
Объяснение: Используем метод `Math.max()` в сочетании с оператором расширения для нахождения максимального значения в массиве.
---
4. Перевернуть массив
⌛ Задача: Напишите функцию, которая переворачивает массив.
🎯 Решение:
```javascript
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```
Объяснение: Метод `reverse()` изменяет массив, переставляя его элементы в обратном порядке.
---
5. Проверка на палиндром
⌛ Задача: Напишите функцию, которая проверяет, является ли строка или массив палиндромом.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
Объяснение: Сначала переворачиваем строку и сравниваем её с исходной.
---
6. Найти второй по величине элемент в массиве
⌛ Задача: Напишите функцию, которая находит второй по величине элемент в массиве.
🎯 Решение:
```javascript
function secondLargest(arr) {
  const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArr[1] || null;
}

console.log(secondLargest([1, 3, 2, 4])); // 3
```
Объяснение: Сначала удаляем дубликаты с помощью `Set`, затем сортируем массив по убыванию и возвращаем второй элемент.
---
7. Проверка массива на отсортированность
⌛ Задача: Напишите функцию, которая проверяет, отсортирован ли массив по возрастанию.
🎯 Решение:
```javascript
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false
```
Объяснение: Проверяем, что каждый элемент массива не меньше предыдущего.
---
8. Нахождение индекса первого вхождения элемента
⌛ Задача: Напишите функцию, которая находит индекс первого вхождения элемента в массиве.
🎯 Решение:
```javascript
function findIndex(arr, value) {
  return arr.indexOf(value);
}

console.log(findIndex([1, 2, 3, 4], 3)); // 2
```
Объяснение: Метод `indexOf()` возвращает индекс первого вхождения элемента в массив или `-1`, если элемент не найден.
---
9. Сумма четных чисел в массиве
⌛ Задача: Напишите функцию, которая находит сумму всех чётных чисел в массиве.
🎯 Решение:
```javascript
function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4])); // 6
```
Объяснение: Мы используем `filter()` для выбора чётных чисел и `reduce()` для вычисления их суммы.
---
10. Умножить все элементы массива на число
⌛ Задача: Напишите функцию, которая умножает все элементы массива на заданное число.
🎯 Решение:
```javascript
function multiplyArray(arr, multiplier) {
  return arr.map(num => num * multiplier);
}

console.log(multiplyArray([1, 2, 3], 2)); // [2, 4, 6]
```
Объяснение: Используем `map()`, чтобы умножить каждый элемент массива на заданное число.
---
11. Перевести строку в массив чисел
⌛ Задача: Напишите функцию, которая принимает строку чисел, разделённых пробелами, и преобразует её в массив чисел.
🎯 Решение:
```javascript
function stringToArray(str) {
  return str.split(' ').map(Number);
}

console.log(stringToArray("1 2 3 4")); // [1, 2, 3, 4]
```
Объяснение: Используем `split()` для разделения строки на элементы массива, затем используем `map(Number)` для преобразования их в числа.
---
12. Удалить дубликаты в массиве
⌛ Задача: Напишите функцию, которая удаляет все дубликаты из массива.
🎯 Решение:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 1, 2])); // [1, 2, 3]
```
Объяснение: Используем `Set`, который хранит только уникальные значения.
---
13. Разделить массив на два подмассива
⌛ Задача: Напишите функцию, которая делит массив на два подмассива.
🎯 Решение:
```javascript
function splitArray(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}
console.log(splitArray([1, 2, 3, 4, 5])); // [[1, 2], [3, 4, 5]]
```
Объяснение: Мы используем `slice()`, чтобы разделить массив на два подмассива по середине.
---
14. Найти минимальное значение в массиве
⌛ Задача: Напишите функцию, которая находит минимальное значение в массиве.
🎯 Решение:
```javascript
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 1, 8, 2])); // 1
```
Объяснение: Мы используем `Math.min()` с оператором расширения для поиска минимального значения.
---
15. Преобразовать массив строк в одну строку
⌛ Задача: Напишите функцию, которая преобразует массив строк в одну строку, разделённую пробелами.
🎯 Решение:
```javascript
function joinStrings(arr) {
  return arr.join(' ');
}

console.log(joinStrings(["Hello", "world"])); // "Hello world"
```
Объяснение: Метод `join()` объединяет элементы массива в строку, используя заданный разделитель.
---
16. Сортировать массив по убыванию
⌛ Задача: Напишите функцию, которая сортирует массив по убыванию.
🎯 Решение:
```javascript
function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 2])); // [4, 3, 2, 1]
```
Объяснение: Мы используем метод `sort()` с функцией сравнения, чтобы отсортировать массив по убыванию.
---
17. Найти среднее значение массива
⌛ Задача: Напишите функцию, которая находит среднее значение всех чисел в массиве.
🎯 Решение:
```javascript
function average(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log(average([1, 2, 3, 4])); // 2.5
```
Объяснение: Мы используем `reduce()` для нахождения суммы всех элементов массива и делим её на длину массива.
---------------------
⋙ ❍ ⌛ Задача: Обход n-го дерево:
---
Обход n-арного дерева (или дерева с произвольным числом дочерних узлов) в JavaScript можно выполнить различными методами, такими как обход в глубину (DFS) или обход в ширину (BFS).
🎯 Решение:
1. Определение структуры n-арного дерева
Прежде чем приступить к обходу, давайте определим структуру n-арного дерева. В n-арном дереве каждый узел может иметь произвольное количество дочерних узлов.
Каждый узел будет представлять собой объект, в котором:
- `value` — значение узла.
- `children` — массив дочерних узлов.
Пример структуры n-арного дерева:
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}
```
Теперь давайте реализуем два типа обхода: обход в глубину (DFS) и обход в ширину (BFS).
---
2. Обход в глубину (DFS)
Обход в глубину можно реализовать двумя способами:
1. Рекурсивно — через рекурсивные вызовы.
2. Итеративно — через стек.
🎯 Решение (Рекурсивный DFS):
```javascript
function depthFirstSearch(root) {
  console.log(root.value); // Обрабатываем текущий узел

  // Рекурсивно обходим всех дочерних узлов
  for (let child of root.children) {
    depthFirstSearch(child);
  }
}

// Пример использования:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

depthFirstSearch(root);
// Вывод: 1 2 3 4 (обход в глубину)
```
Объяснение:
- Мы начинаем с корня дерева и рекурсивно обходим все дочерние узлы.
- Для каждого узла выводим его значение, затем рекурсивно вызываем функцию для каждого из дочерних узлов.
🎯 Решение (Итеративный DFS):
```javascript
function depthFirstSearchIterative(root) {
  const stack = [root]; // Стек для хранения узлов

  while (stack.length > 0) {
    const node = stack.pop(); // Берем последний элемент из стека
    console.log(node.value); // Обрабатываем узел

    // Добавляем детей в стек (в порядке обхода)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
}

// Пример использования:
depthFirstSearchIterative(root);
// Вывод: 1 2 3 4 (обход в глубину)
```
Объяснение:
- В итеративной версии мы используем стек, чтобы вручную управлять обходом. Мы добавляем дочерние узлы в стек, начиная с последнего, чтобы сохранить правильный порядок обхода.
---
3. Обход в ширину (BFS)
Обход в ширину используется для обхода дерева уровни за уровнем. Для этого мы используем очередь.
🎯 Решение (BFS):
```javascript
function breadthFirstSearch(root) {
  const queue = [root]; // Очередь для хранения узлов

  while (queue.length > 0) {
    const node = queue.shift(); // Берем первый элемент из очереди
    console.log(node.value); // Обрабатываем узел

    // Добавляем детей в очередь
    for (let child of node.children) {
      queue.push(child);
    }
  }
}

// Пример использования:
breadthFirstSearch(root);
// Вывод: 1 2 3 4 (обход в ширину)
```
Объяснение:
- В BFS мы используем очередь для обхода дерева уровни за уровнем.
- Сначала обрабатываем корень, затем добавляем всех его детей в очередь, и так продолжаем, пока очередь не станет пустой.
---
4. Пример использования
🎯 Давайте создадим пример дерева и используем оба алгоритма обхода.
```javascript
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

const child11 = new Node(5);
const child12 = new Node(6);

child1.addChild(child11);
child1.addChild(child12);

// Обход в глубину (рекурсивно)
console.log("DFS (рекурсивно):");
depthFirstSearch(root);

// Обход в ширину
console.log("BFS:");
breadthFirstSearch(root);
```
Результат:
```
DFS (рекурсивно):
1
2
5
6
3
4

BFS:
1
2
3
4
5
6
```
5. Вывод:
- DFS (Обход в глубину): Рекурсивно или итеративно исследуется каждый узел в глубину. Это полезно для поиска элементов или выполнения операций, которые требуют полного изучения пути в дереве.
- BFS (Обход в ширину): Обрабатывает все узлы на текущем уровне, прежде чем переходить к следующему уровню. Это полезно, например, для поиска наименьшего пути в графах.
---------------------
⋙ ❍ ⌛ Задача: Объединить отсорт. масссивы:
---
Объединение отсортированных массивов в JavaScript можно выполнить с помощью различных методов. Так как оба массива уже отсортированы, самым эффективным способом будет использование метода слияния двух отсортированных массивов, который работает за O(n) (где n — это количество элементов в обоих массивах).
Алгоритм объединения отсортированных массивов:
1. Используем два указателя, которые будут перемещаться по двум массивам.
2. Сравниваем элементы с текущих позиций в обоих массивах.
3. Добавляем наименьший элемент в новый массив и сдвигаем соответствующий указатель.
4. Если один массив заканчивается, добавляем оставшиеся элементы из другого массива.
🎯 Решение:
```javascript
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0; // Указатель для первого массива
  let j = 0; // Указатель для второго массива

  // Пока оба массива не пусты
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Добавляем оставшиеся элементы из первого массива, если они есть
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Добавляем оставшиеся элементы из второго массива, если они есть
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Пример использования:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
1. Два указателя:
   - `i` и `j` — это указатели для двух массивов `arr1` и `arr2`.
   - Мы сравниваем элементы на позициях `i` и `j` и добавляем наименьший элемент в новый массив.
2. Цикл объединения:
   - Пока оба массива не пусты, мы добавляем наименьший элемент в массив `result` и двигаем указатель на тот массив, откуда был выбран элемент.
3. Остаточные элементы:
   - После завершения основного цикла, если один из массивов ещё не был полностью обработан, мы добавляем оставшиеся элементы из другого массива в результат.
Пример с другими массивами:
```javascript
const arr1 = [1, 4, 6, 8];
const arr2 = [2, 3, 5, 7, 9];

const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Альтернативный подход (с использованием `concat()` и `sort()`)
Если вам не важна эффективность (когда массивы маленькие или вам не требуется строгая оптимизация), вы можете просто объединить два массива и отсортировать их:
```javascript
function mergeAndSortArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Пример использования:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = mergeAndSortArrays(arr1, arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Объяснение:
- Мы объединяем два массива с помощью оператора распространения (`...`) и затем сортируем объединённый массив с помощью метода `.sort()`. Однако этот метод работает за O(n log n), что медленнее, чем метод слияния, если массивы уже отсортированы.
Резюме:
1. Если оба массива отсортированы, лучше использовать метод **слияния с двумя указателями**, который работает за O(n).
2. Если массивы не отсортированы, можно использовать метод объединения с `concat()` и `sort()`, но это менее эффективно для больших массивов.
---------------------
⋙ ❍ ⌛ Задача: найти простые числа в массиве:
---
Чтобы найти простые числа в массиве с использованием Vanilla JavaScript, нам нужно создать функцию, которая будет проверять, является ли число простым, и затем использовать её для фильтрации чисел в массиве.
Простое число — это число больше 1, которое делится только на 1 и на себя.
Алгоритм:
1. Число считается простым, если оно больше 1 и не имеет делителей, кроме 1 и самого себя.
2. Для проверки делимости можно пройтись по числам от 2 до квадратного корня из проверяемого числа, так как если число делится на какое-то число больше, его делители будут найдены раньше.
🎯 Решение:
```javascript
function isPrime(num) {
  if (num <= 1) return false; // Число должно быть больше 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Если находим делитель, число не простое
    }
  }
  return true; // Если делителей не найдено, число простое
}

function findPrimes(arr) {
  return arr.filter(isPrime); // Фильтруем массив, оставляя только простые числа
}
// Пример использования
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15];
const primes = findPrimes(numbers);

console.log(primes); // [2, 3, 5, 7, 11, 13]
```
Объяснение:
1. `isPrime(num)` — функция для проверки простоты числа. Мы проверяем, делится ли число на другие числа от 2 до квадратного корня из числа. Если делитель найден, то число не простое.
2. `findPrimes(arr)` — эта функция фильтрует массив, оставляя только простые числа. Мы используем метод массива `.filter()`, чтобы пройти по всем элементам и оставить только те, для которых `isPrime()` возвращает `true`.
Оптимизация:
- Вместо проверки делимости на все числа до самого числа, мы проверяем только до квадратного корня. Это значительно уменьшает количество операций, особенно для больших чисел.
Пример с выводом:
```javascript
const numbers = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 23, 24];
const primes = findPrimes(numbers);
console.log(primes);  // [2, 3, 5, 17, 19, 23]
```
---------------------
⋙ ❍ ⌛ Задача: Конвертировать цену:
---
Конвертация цены в JavaScript и React может быть полезной в различных ситуациях, например, при изменении валюты или форматировании чисел. Давайте рассмотрим два примера — один с чистым JavaScript и другой с использованием React.
1. Конвертация цены с использованием JavaScript
Предположим, что у нас есть цена в одной валюте, и мы хотим конвертировать её в другую валюту, используя фиксированный курс.
🎯 Решение с JavaScript:
```javascript
// Функция для конвертации цены
function convertPrice(amount, conversionRate) {
  return (amount * conversionRate).toFixed(2); // Округление до двух знаков после запятой
}
// Пример использования
const priceInUSD = 100; // Цена в долларах
const conversionRateToEUR = 0.85; // Курс 1 USD = 0.85 EUR
const priceInEUR = convertPrice(priceInUSD, conversionRateToEUR);
console.log(`Цена в долларах: $${priceInUSD}`);
console.log(`Цена в евро: €${priceInEUR}`);
```
Объяснение:
- Мы создаём функцию `convertPrice`, которая принимает сумму и курс конверсии.
- Метод `toFixed(2)` используется для округления результата до двух знаков после запятой.
---
2. Конвертация цены с использованием React
В React, мы можем создать компонент для отображения и конвертации цен, который будет принимать значения через props и вычислять цену на основе выбора валюты.
🎯 Решение с React:
```jsx
import React, { useState } from 'react';

function PriceConverter() {
  const [price, setPrice] = useState(100); // Начальная цена
  const [currency, setCurrency] = useState('USD');

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * conversionRates[currency]).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
      </div>

      <div>
        <p>Цена в {currency}: {convertedPrice}</p>
      </div>
    </div>
  );
}

export default PriceConverter;
```
Объяснение:
- `useState` используется для управления состоянием цены и выбранной валюты.
- `conversionRates` содержит коэффициенты для каждой валюты.
- Мы отображаем цену в выбранной валюте, вычисляя её с помощью коэффициента преобразования и округляя до двух знаков после запятой с помощью `.toFixed(2)`.
- Пользователь может изменять цену и валюту через поля ввода и выпадающий список.
---
3. Пример использования с реальными данными (API)
Если вам нужно использовать реальный API для получения курсов валют, вы можете использовать API, такие как [ExchangeRate-API](https://www.exchangerate-api.com/), чтобы получить актуальные курсы валют.
```javascript
import React, { useState, useEffect } from 'react';

function PriceConverterWithAPI() {
  const [price, setPrice] = useState(100);
  const [currency, setCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      });
  }, []);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertedPrice = (price * (rates[currency] || 1)).toFixed(2);

  return (
    <div>
      <h2>Конвертер цены с использованием реального API</h2>

      <div>
        <label>
          Введите цену (в USD):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            disabled={loading}
          />
        </label>
      </div>

      <div>
        <label>
          Выберите валюту:
          <select onChange={handleCurrencyChange} value={currency} disabled={loading}>
            {Object.keys(rates).map((currencyCode) => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        <div>
          <p>Цена в {currency}: {convertedPrice}</p>
        </div>
      )}
    </div>
  );
}

export default PriceConverterWithAPI;
```
Объяснение:
- `useEffect` используется для загрузки актуальных курсов валют через API при монтировании компонента.
- При изменении валюты или цены происходит пересчёт с учётом актуального курса.
- Компонент отображает «Загрузка данных...» до тех пор, пока курсы валют не будут получены.
Резюме:
- В JavaScript можно создать простую функцию для конвертации цен, используя фиксированные курсы валют.
- В React мы можем сделать это интерактивно, позволяя пользователю выбирать цену и валюту.
- Для получения актуальных курсов валют можно использовать внешний API.
---------------------
⋙ ❍ ⌛ Задача: Индексы бд на алгоритмах:
---
Индексы в базах данных используются для ускорения поиска и извлечения данных. Индексы помогают ускорить выполнение запросов, не сканируя всю таблицу, а только определённые данные, например, через бинарные деревья или хэш-таблицы.
В контексте реализации на JavaScript, можно имитировать работу с базой данных, создавая индексы для поиска по данным, например, с использованием бинарного поиска или хэш-таблиц.
1. Индексы на основе бинарного дерева поиска (BST)
Бинарное дерево поиска — это структура данных, где для каждого узла выполняется условие, что левый дочерний узел имеет меньшее значение, а правый — большее.
🎯 Решение: Реализация бинарного дерева поиска
```javascript
class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new TreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (key > current.key) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        current.value = value; // Обновляем значение, если ключ существует
        return;
      }
    }
  }

  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) return current.value;
      if (key < current.key) current = current.left;
      else current = current.right;
    }
    return null; // Если элемент не найден
  }

  delete(key) {
    this.root = this._deleteRecursively(this.root, key);
  }

  _deleteRecursively(node, key) {
    if (!node) return node;

    if (key < node.key) {
      node.left = this._deleteRecursively(node.left, key);
    } else if (key > node.key) {
      node.right = this._deleteRecursively(node.right, key);
    } else {
      // Если ключ найден
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      node.key = this._findMin(node.right).key; // Находим минимальный элемент в правом поддереве
      node.right = this._deleteRecursively(node.right, node.key);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
}

const bst = new BinarySearchTree();
bst.insert(50, "value 50");
bst.insert(30, "value 30");
bst.insert(70, "value 70");
bst.insert(20, "value 20");
bst.insert(40, "value 40");

console.log(bst.search(30)); // "value 30"
bst.delete(30);
console.log(bst.search(30)); // null
```
Объяснение:
- В этом примере мы создаем бинарное дерево поиска (BST), где:
  - Каждый узел имеет ключ и значение.
  - Для поиска и вставки мы рекурсивно сравниваем ключи и находим правильную позицию для каждого нового узла.
  - Метод `delete` позволяет удалять узлы с учётом трех вариантов: отсутствие детей, один ребенок и два ребенка.
---
2. Индексы с использованием хэш-таблиц
Хэш-таблица использует хэш-функцию для вычисления индекса в массиве, где каждый ключ будет хранить своё значение. Это позволяет делать поиск, вставку и удаление за O(1) в среднем случае.
🎯 Решение: Реализация хэш-таблицы
```javascript
class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  search(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return null;

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) return value;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("country", "USA");

console.log(hashTable.search("age")); // 25
console.log(hashTable.search("country")); // "USA"
hashTable.delete("age");
console.log(hashTable.search("age")); // null
```
Объяснение:
- В хэш-таблице мы используем массив для хранения элементов, а каждый элемент вычисляется с использованием хэш-функции.
- Хэш-функция генерирует индекс на основе строки ключа.
- В случае коллизий (когда два ключа хэшируются в одинаковый индекс) мы используем массив внутри ячейки для хранения пары ключ-значение.
- Методы `insert`, `search` и `delete` работают с хэш-таблицей с использованием индекса.
---
3. Индексы на основе сортированного массива (двойной индексации)
Этот метод используется для ускорения поиска в таблицах, когда индексы отсортированы. Такой подход полезен для хранения данных, которые могут быть отсортированы по определённому ключу.
🎯 Решение: Реализация индекса с сортировкой
```javascript
class SortedIndex {
  constructor() {
    this.data = [];
  }

  insert(key, value) {
    this.data.push([key, value]);
    this.data.sort((a, b) => a[0] - b[0]);  // Сортируем по ключу
  }

  search(key) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.data[mid][0] === key) return this.data[mid][1];
      if (this.data[mid][0] < key) left = mid + 1;
      else right = mid - 1;
    }

    return null;  // Если ключ не найден
  }

  delete(key) {
    const index = this.data.findIndex(item => item[0] === key);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;  // Если элемент не найден
  }
}

const index = new SortedIndex();
index.insert(1, "apple");
index.insert(3, "banana");
index.insert(2, "cherry");

console.log(index.search(2)); // "cherry"
index.delete(2);
console.log(index.search(2)); // null
```
Объяснение:
- Мы создаем отсортированный индекс, который поддерживает сортировку по ключу.
- Метод `insert` добавляет элементы и сразу сортирует массив.
- Для поиска мы используем бинарный поиск, чтобы найти элемент по ключу за O(log N).
- Метод `delete` удаляет элемент, используя поиск по индексу.
Резюме:
1. Бинарное дерево поиска (BST) — используется для хранения элементов с быстрым поиском, добавлением и удалением. Каждый узел хранит ключ и значение, и структура данных поддерживает быструю вставку и поиск по ключу.
2. Хэш-таблица — более эффективная структура данных для быстрого поиска с использованием хэш-функции. Столкновение решается через связанный список внутри ячеек.
3. Сортированный массив — полезен для задач, где важен порядок и нужно быстро находить элементы через бинарный поиск.
---------------------
⋙ ❍ Хэш-таблицы (!хэшмап)(массив, остаток от деления и два вида разрешения коллизий разрешаются связанным списком):
---
Реализация хэш-таблицы с разрешением коллизий с использованием связанного списка
⌛ Задача: Реализуйте хэш-таблицу, используя массив для хранения элементов и метод разрешения коллизий через связанные списки. В хэш-таблице данные будут храниться в виде пар ключ-значение. При коллизии (когда два ключа имеют одинаковый хэш) элементы будут храниться в связанном списке.
🎯 Решение:
1. Массив как базовая структура: Хэш-таблица использует массив для хранения элементов. Индекс для каждого элемента будет вычисляться как остаток от деления хэш-функции.
2. Хэш-функция: Для получения индекса мы будем использовать простую хэш-функцию, которая возвращает остаток от деления на размер массива.
3. Разрешение коллизий: В случае коллизий (когда два элемента имеют одинаковый индекс) мы будем хранить элементы в связанном списке на этом индексе. Связанный список будет содержать элементы с одинаковым хэшом.
4. Операции:
   - Добавление: Добавление элемента в хэш-таблицу с использованием хэш-функции.
   - Поиск: Поиск элемента в хэш-таблице по ключу.
   - Удаление: Удаление элемента из хэш-таблицы.
---
Реализация хэш-таблицы с разрешением коллизий через связанный список
Шаг 1: Определим структуру данных для связанного списка.
```javascript
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
```
- `ListNode` представляет собой элемент связанного списка. Каждый узел содержит пару `key-value` и указатель на следующий узел.
Шаг 2: Реализуем хэш-таблицу.
```javascript
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size); // Массив для хранения связанных списков
  }

  // Хэш-функция (остаток от деления)
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Добавление элемента в хэш-таблицу
  set(key, value) {
    const index = this.hash(key);

    // Создаём новый узел
    const newNode = new ListNode(key, value);

    if (!this.table[index]) {
      // Если на этом индексе нет элемента, добавляем новый
      this.table[index] = newNode;
    } else {
      // Если на индексе уже есть элементы, разрешаем коллизию через связанный список
      let current = this.table[index];

      // Проверим, есть ли уже элемент с таким же ключом
      while (current) {
        if (current.key === key) {
          current.value = value; // Обновляем значение, если ключ найден
          return;
        }
        if (!current.next) break;
        current = current.next;
      }

      // Если элемент с таким ключом не найден, добавляем его в конец связанного списка
      current.next = newNode;
    }
  }

  // Поиск элемента по ключу
  get(key) {
    const index = this.hash(key);
    let current = this.table[index];

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        return current.value; // Возвращаем значение, если ключ найден
      }
      current = current.next;
    }

    return undefined; // Возвращаем undefined, если ключ не найден
  }

  // Удаление элемента по ключу
  remove(key) {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        if (prev) {
          // Если элемент не первый в списке, удаляем его
          prev.next = current.next;
        } else {
          // Если элемент первый, просто меняем указатель
          this.table[index] = current.next;
        }
        return true; // Элемент удален
      }
      prev = current;
      current = current.next;
    }

    return false; // Элемент не найден
  }
}
```
Пример использования хэш-таблицы
```javascript
const hashTable = new HashTable();

// Добавление элементов
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("occupation", "developer");

// Поиск элементов
console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("occupation")); // developer

// Обновление значения
hashTable.set("age", 26);
console.log(hashTable.get("age")); // 26

// Удаление элемента
hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
```
Объяснение:
1. Хэш-функция: Простой способ вычисления хэша, основанный на вычислении суммы кодов символов и взятии остатка от деления на размер хэш-таблицы.
2. Обработка коллизий: Если два элемента имеют одинаковый хэш, они хранятся в связном списке на одном индексе массива. Мы используем метод перебора элементов в списке, чтобы найти нужный элемент или добавить новый.
3. Операции:
   - `set()`: Добавляет новый элемент или обновляет существующий.
   - `get()`: Ищет элемент по ключу, пробегая по связанному списку, если коллизия произошла.
   - `remove()`: Удаляет элемент по ключу, также обрабатывая случаи с коллизиями.
Резюме:
- Хэш-таблица — это структура данных, использующая хэш-функцию для быстрого поиска элементов.
- Связанные списки используются для разрешения коллизий, когда два элемента имеют одинаковый хэш.
- Это решение эффективно для большинства задач, где требуется хранить и быстро искать элементы по ключу.
---------------------
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
1. Инкапсуляция через приватные свойства
⌛ Задача: Реализуйте класс `Counter` с приватным свойством `count`, которое нельзя изменить напрямую.
🎯 Решение:
```javascript
class Counter {
  #count = 0; // Приватное свойство

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.#count); // Ошибка: приватное свойство
```
Объяснение: Свойство `#count` доступно только внутри класса. Внешний код не может его прочитать или изменить напрямую.
---
2. Приватные методы
⌛ Задача: Реализуйте класс `User`, в котором есть приватный метод для проверки пароля.
🎯 Решение:
```javascript
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  #checkPassword(input) {
    return input === this.#password;
  }

  login(input) {
    return this.#checkPassword(input) ? "Login successful" : "Access denied";
  }
}

const user = new User("secret");
console.log(user.login("secret")); // Login successful
// console.log(user.#checkPassword("secret")); // Ошибка: приватный метод
```
Объяснение: Метод `#checkPassword` доступен только внутри класса.
---
3. Инкапсуляция через функции и замыкания
⌛ Задача: Реализуйте функцию `createCounter` с приватным состоянием.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined
```
Объяснение: Переменная `count` скрыта внутри замыкания и доступна только через методы объекта.
---
4. Использование Symbol для приватных свойств
⌛ Задача: Реализуйте класс с приватными свойствами через `Symbol`.
🎯 Решение:
```javascript
const _id = Symbol("id");

class Product {
  constructor(id, name) {
    this[_id] = id;
    this.name = name;
  }

  getId() {
    return this[_id];
  }
}

const product = new Product(123, "Laptop");
console.log(product.getId()); // 123
// console.log(product[_id]); // undefined
```
Объяснение: Символы создают уникальные свойства, которые невозможно случайно перезаписать или прочитать напрямую.
---
5. Геттеры и сеттеры
⌛ Задача: Реализуйте класс `Rectangle` с инкапсулированными свойствами `width` и `height`.
🎯 Решение:
```javascript
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    if (value > 0) this.#width = value;
  }

  get width() {
    return this.#width;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 200
```
Объяснение: Геттеры и сеттеры позволяют управлять доступом к приватным свойствам.
---
6. Создание singleton через инкапсуляцию
⌛ Задача: Реализуйте класс `Database` с шаблоном Singleton.
🎯 Решение:
```javascript
class Database {
  static #instance;

  constructor(connectionString) {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connectionString = connectionString;
    Database.#instance = this;
  }
}

const db1 = new Database("db://localhost");
const db2 = new Database("db://remote");

console.log(db1 === db2); // true
```
Объяснение: Приватное статическое свойство `#instance` обеспечивает наличие только одного экземпляра класса.
---
7. Инкапсуляция через фабричные функции
⌛ Задача: Реализуйте фабричную функцию для создания объекта с приватными данными.
🎯 Решение:
```javascript
function createUser(name) {
  let balance = 0;

  return {
    name,
    addBalance(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const user = createUser("Alice");
user.addBalance(100);
console.log(user.getBalance()); // 100
// console.log(user.balance); // undefined
```
Объяснение: `balance` защищён внутри замыкания.
---
8. Использование WeakMap для приватных данных
⌛ Задача: Реализуйте класс с приватными данными через `WeakMap`.
🎯 Решение:
```javascript
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User("Bob");
console.log(user.getName()); // Bob
// console.log(privateData.get(user)); // Приватные данные недоступны извне
```
Объяснение: `WeakMap` используется для хранения приватных данных, связанных с экземпляром.
---
9. Инкапсуляция в модулях ES6
⌛ Задача: Реализуйте модуль с приватными данными.
🎯 Решение:
`user.js`:
```javascript
const users = [];

export function addUser(user) {
  users.push(user);
}

export function getUsers() {
  return users;
}
```

`main.js`:
```javascript
import { addUser, getUsers } from "./user.js";

addUser("Alice");
console.log(getUsers()); // ["Alice"]
// console.log(users); // Ошибка: users недоступен
```
Объяснение: Приватные данные инкапсулируются в модуле.
---
10. Полиморфизм с инкапсуляцией
⌛ Задача: Создайте класс `Shape` и наследников `Circle` и `Square`.
🎯 Решение:
```javascript
class Shape {
  #type;

  constructor(type) {
    this.#type = type;
  }

  getType() {
    return this.#type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) =>
  console.log(`${shape.getType()} Area: ${shape.getArea()}`)
);
```
---
11. Создать класс `BankAccount` с приватными методами для депозита и снятия
⌛ Задача: Реализовать класс `BankAccount` с приватными методами для депозита, снятия денег и проверки баланса.
🎯 Решение:
```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 300
// console.log(account.#balance); // Ошибка: приватное свойство
```
Объяснение:
- Свойство `#balance` инкапсулировано, и его нельзя изменить напрямую снаружи класса.
- Методы `deposit` и `withdraw` предоставляют интерфейс для работы с балансом.
---
12. Реализовать класс `Logger` с ограниченным доступом к логам
⌛ Задача: Реализовать класс `Logger`, который хранит логи и предоставляет методы для записи и получения логов. Логи должны быть приватными, и внешний код не должен иметь доступа к ним напрямую.
🎯 Решение:
```javascript
class Logger {
  #logs = [];

  log(message) {
    this.#logs.push(message);
  }

  getLogs() {
    return this.#logs.slice();
  }
}

const logger = new Logger();
logger.log("Лог 1");
logger.log("Лог 2");
console.log(logger.getLogs()); // ["Лог 1", "Лог 2"]
// console.log(logger.#logs); // Ошибка: приватное свойство
```
Объяснение:
- Логи хранятся в приватном свойстве `#logs`.
- Метод `getLogs` возвращает копию массива логов, предотвращая прямой доступ к внутренним данным.
---
13. Сделать фабрику для управления доступом к данным
⌛ Задача: Реализовать фабричную функцию, которая создаёт объект с приватными данными, а внешним кодом можно управлять только через предоставленный интерфейс.
🎯 Решение:
```javascript
function createUser(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    setName(newName) {
      if (newName) _name = newName;
    },
    setAge(newAge) {
      if (newAge > 0) _age = newAge;
    }
  };
}

const user = createUser("Alice", 25);
console.log(user.getName()); // Alice
user.setName("Bob");
console.log(user.getName()); // Bob
// console.log(user._name); // undefined
```
Объяснение:
- Приватные данные инкапсулируются внутри замыкания и доступны только через публичные методы.
---
14. Инкапсулировать состояние в React-компоненте с `useState`
⌛ Задача: В React создайте компонент, в котором инкапсулировано состояние. Только внутренние методы могут изменять это состояние, а наружу оно передается через геттер.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Внутренний метод для изменения состояния
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Геттер для состояния
  const getCount = () => count;

  return (
    <div>
      <h1>Counter: {getCount()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
Обяснение:
- Внутренние методы `increment` и `decrement` изменяют состояние с помощью `setCount`.
- Внешний код не может напрямую изменять `count`, он только может использовать геттер `getCount`.
---
15. Создать модуль для работы с API, скрывающий реализацию запросов
⌛ Задача: Создать модуль для работы с API, который инкапсулирует логику выполнения HTTP-запросов и предоставляет только публичный интерфейс.
🎯 Решение:
```javascript
// api.js
const api = (() => {
  const apiUrl = "https://api.example.com/";

  const fetchData = async (endpoint) => {
    const response = await fetch(apiUrl + endpoint);
    const data = await response.json();
    return data;
  };

  return {
    getUserData: (userId) => fetchData(`users/${userId}`),
  };
})();

api.getUserData(1).then((data) => console.log(data));
```
Объяснение:
- Вся логика работы с API инкапсулирована внутри модуля `api`, а наружу доступен только метод `getUserData`.
- Приватная функция `fetchData` скрыта и не доступна извне.
---
16. Реализовать класс `Cache`, защищающий данные от прямого доступа
⌛ Задача: Реализовать класс `Cache`, который инкапсулирует кэшированные данные и предоставляет методы для работы с ними, скрывая внутреннюю структуру данных.
🎯 Решение:
```javascript
class Cache {
  #data = {};

  get(key) {
    return this.#data[key] || null;
  }

  set(key, value) {
    this.#data[key] = value;
  }

  clear() {
    this.#data = {};
  }
}

const cache = new Cache();
cache.set("user", { name: "Alice", age: 25 });
console.log(cache.get("user")); // { name: "Alice", age: 25 }
// console.log(cache.#data); // Ошибка: приватное свойство
```
Объяснение:
- Приватное свойство `#data` скрывает структуру данных.
- Внешний код может только использовать методы `get`, `set` и `clear` для работы с кэшем.
---
17. Инкапсулировать сложную логику в модули и экспортировать только интерфейс
⌛ Задача: Реализовать модуль, который инкапсулирует сложную логику (например, для работы с датами) и предоставляет только интерфейс для работы.
🎯 Решение:
```javascript
// dateUtils.js
const dateUtils = (() => {
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return {
    format: formatDate,
  };
})();

console.log(dateUtils.format(new Date())); // Форматирует дату: 21/9/2021
```
Объяснение:
- Сложная логика работы с датами инкапсулирована в модуле `dateUtils`.
- Наружу экспортируется только функция `format`, скрывая другие детали реализации.
Итог
Эти задачи охватывают различные аспекты инкапсуляции в JavaScript и React:
- Использование приватных свойств и методов в классах.
- Применение фабричных функций и замыканий.
- Инкапсуляция состояния в React.
- Скрытие сложной логики и взаимодействия с API.
---------------------
⋙ ❍ ⌛ Задача: Разворот массива:
---
Разворот массива — это операция, при которой элементы массива меняют порядок на обратный.
🎯 Решение: Вот несколько способов реализации на JavaScript:
1. С использованием встроенного метода `reverse`
Самый простой способ — использовать метод `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();

console.log("Оригинальный массив:", array);      // [5, 4, 3, 2, 1]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `reverse` изменяет исходный массив, так что будьте осторожны при использовании.
---
2. С использованием цикла `for`
Если вы хотите оставить исходный массив неизменным, используйте цикл для создания нового массива:
```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
---
3. С использованием деструктуризации и `reduce`
```javascript
function reverseArray(arr) {
  return arr.reduce((acc, curr) => [curr, ...acc], []);
}
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Функция `reduce` добавляет текущий элемент в начало результирующего массива.
---
4. С использованием двух указателей
Этот метод изменяет исходный массив на месте, минимизируя использование памяти:
```javascript
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Меняем местами элементы
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);

console.log("Развёрнутый массив:", array); // [5, 4, 3, 2, 1]
```
Особенность:
- Этот метод не создаёт новый массив и экономит память.
- Используется деструктуризация для обмена элементов местами.
---
5. С использованием рекурсии
```javascript
function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Рекурсивный метод хорошо работает для небольших массивов.
- При больших массивах может вызвать переполнение стека вызовов.
---
6. С использованием `Array.from`
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = Array.from(array).reverse();

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `Array.from(array)` создаёт копию массива, поэтому `reverse` не изменяет оригинал.
Итог
Когда использовать какой метод:
1. `reverse`: Когда нужно быстро изменить порядок, и исходный массив может быть изменён.
2. Цикл `for`: Если вы хотите сохранить оригинальный массив неизменным.
3. `reduce`: Когда требуется функциональный стиль программирования.
4. Два указателя: Для экономии памяти и работы на месте.
5. Рекурсия: Для учебных целей или когда массивы небольшие.
---------------------
⋙ ❍ Переложить данные из коллекции в коллекцию:
---
⌛ Задача: Переложить данные из одной коллекции в другую
🎯 Решение: Реализация включает:
1. На чистом JavaScript (Vanilla): Работа с массивами, объектами или другими структурами данных.
2. На React: С использованием состояния (`useState`) и компонентов.
---
1. Реализация на JavaScript
Пример 1. Перенос данных из массива в массив
```javascript
function transferData(source, destination) {
  while (source.length > 0) {
    // Удаляем элемент из исходного массива и добавляем в целевой
    const item = source.shift();
    destination.push(item);
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

transferData(sourceArray, destinationArray);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [1, 2, 3, 4, 5]
```
---
Пример 2. Перенос данных из объекта в объект
```javascript
function transferObjectData(source, destination) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
      delete source[key]; // Удаляем из исходного объекта
    }
  }
}

const sourceObject = { a: 1, b: 2, c: 3 };
const destinationObject = {};

transferObjectData(sourceObject, destinationObject);

console.log("Source:", sourceObject);       // {}
console.log("Destination:", destinationObject); // { a: 1, b: 2, c: 3 }
```
---
Пример 3. Перенос данных с преобразованием
```javascript
function transferAndTransform(source, destination, transformFn) {
  while (source.length > 0) {
    const item = source.shift();
    destination.push(transformFn(item)); // Преобразуем элемент перед добавлением
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

// Увеличиваем значения на 10 перед переносом
transferAndTransform(sourceArray, destinationArray, (x) => x + 10);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [11, 12, 13, 14, 15]
```
---
2. Реализация на React
В React перенос данных между коллекциями может быть реализован с использованием состояния (`useState`).
Пример 1. Перенос элементов из одного списка в другой
```jsx
import React, { useState } from "react";

function TransferList() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = () => {
    if (source.length > 0) {
      const item = source[0];
      setSource(source.slice(1)); // Удаляем элемент из исходного списка
      setDestination([...destination, item]); // Добавляем элемент в целевой список
    }
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferItem}>Transfer Next Item</button>
    </div>
  );
}

export default TransferList;
```
---
Пример 2. Перенос всех элементов
```jsx
import React, { useState } from "react";

function TransferAll() {
  const [source, setSource] = useState(["Apple", "Banana", "Cherry"]);
  const [destination, setDestination] = useState([]);

  const transferAllItems = () => {
    setDestination([...destination, ...source]); // Добавляем все элементы
    setSource([]); // Очищаем исходный список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferAllItems}>Transfer All Items</button>
    </div>
  );
}

export default TransferAll;
```
---
Пример 3. Перенос с удалением по клику
```jsx
import React, { useState } from "react";

function TransferOnClick() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = (item) => {
    setSource(source.filter((i) => i !== item)); // Удаляем элемент из источника
    setDestination([...destination, item]); // Добавляем в целевой список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => transferItem(item)}>Transfer</button>
          </li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransferOnClick;
```
Объяснение React-кодов
1. Состояние:
   - Используется `useState` для хранения данных коллекций (`source` и `destination`).
   - Перенос выполняется с обновлением этих состояний.
2. Методы:
   - В первом примере: по одному элементу из `source` перемещается в `destination`.
   - Во втором примере: все элементы из `source` перемещаются в `destination` одним кликом.
   - В третьем примере: элементы переносятся с удалением по клику.
3. Рендеринг:
   - Используется метод `map` для отображения списков.
---------------------
⋙ ❍ ⌛ Задача: Пройти циклом и суммировать данные за исключением указанного отрезка:
---
🎯 Решение: Вот пример кода на JavaScript, где данные суммируются, исключая указанный отрезок индексов:
Код
```javascript
function sumExcludingRange(arr, start, end) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Пропускаем элементы из указанного диапазона
    if (i >= start && i <= end) {
      continue;
    }

    sum += arr[i];
  }

  return sum;
}

// Пример использования
const data = [10, 20, 30, 40, 50, 60];
const startIndex = 2; // Индекс начала отрезка (включительно)
const endIndex = 4;   // Индекс конца отрезка (включительно)

const result = sumExcludingRange(data, startIndex, endIndex);

console.log("Итоговая сумма:", result); // 10 + 20 + 60 = 90
```
Объяснение:
1. Входные параметры:
   - `arr`: Массив данных, в котором будет выполняться суммирование.
   - `start`: Начальный индекс отрезка (включительно).
   - `end`: Конечный индекс отрезка (включительно).
2. Цикл `for`:
   - Перебирает все элементы массива.
   - С помощью `if (i >= start && i <= end)` мы определяем, попадает ли текущий индекс в исключаемый отрезок.
   - Если индекс попадает в исключаемый отрезок, выполняется `continue`, что пропускает текущую итерацию.
3. Сложение:
   - Элементы за пределами указанного диапазона суммируются в переменной `sum`.
4. Результат:
   - Возвращается итоговая сумма, за исключением значений в указанном отрезке.
---
Пример с пустым отрезком
Если отрезок пустой (например, `startIndex > endIndex`), все элементы будут учтены:
```javascript
const data = [10, 20, 30, 40];
console.log(sumExcludingRange(data, 5, 3)); // Сумма всех: 100
```
Пример с использованием `reduce`
Альтернативный способ через метод `reduce`:
```javascript
function sumExcludingRange(arr, start, end) {
  return arr.reduce((sum, value, index) => {
    return index >= start && index <= end ? sum : sum + value;
  }, 0);
}
// Пример использования
const data = [10, 20, 30, 40, 50];
console.log(sumExcludingRange(data, 1, 3)); // Сумма: 10 + 50 = 60
```
---------------------
⋙ ❍ ⌛ Задача: Реализовать DAO даошку:
---
🎯 Решение: Реализация DAO (Data Access Object)
DAO (Data Access Object) — это шаблон проектирования, который используется для абстракции работы с данными. Он обеспечивает интерфейс для доступа к базе данных, файлам или другим хранилищам данных.
Мы реализуем DAO-шку, которая:
1. Предоставляет методы для чтения, создания, обновления и удаления данных.
2. Абстрагирует источник данных (локальный массив, API, база данных).
---
1. Реализация DAO на JavaScript (Vanilla)
Код
```javascript
class UserDAO {
  constructor() {
    this.users = []; // Локальное хранилище данных (может быть заменено на API/БД)
    this.nextId = 1; // Счётчик для уникальных ID
  }

  // Получить всех пользователей
  getAllUsers() {
    return this.users;
  }

  // Найти пользователя по ID
  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  // Добавить нового пользователя
  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  // Обновить пользователя по ID
  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  // Удалить пользователя по ID
  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

// Пример использования
const userDAO = new UserDAO();

// Создаём пользователей
userDAO.addUser({ name: "Alice", age: 25 });
userDAO.addUser({ name: "Bob", age: 30 });

// Получаем всех пользователей
console.log("Все пользователи:", userDAO.getAllUsers());

// Обновляем пользователя
userDAO.updateUser(1, { age: 26 });
console.log("Обновлённый пользователь:", userDAO.getUserById(1));

// Удаляем пользователя
userDAO.deleteUser(2);
console.log("После удаления:", userDAO.getAllUsers());
```
Объяснение:
1. Конструктор:
   - Создаётся массив `users` для хранения пользователей.
   - `nextId` используется для генерации уникальных идентификаторов.
2. Методы:
   - `getAllUsers`: Возвращает всех пользователей.
   - `getUserById`: Ищет пользователя по ID.
   - `addUser`: Добавляет нового пользователя.
   - `updateUser`: Обновляет данные пользователя.
   - `deleteUser`: Удаляет пользователя.
---
2. Реализация DAO на React
В React мы реализуем DAO как сервисный класс, который будет вызываться из компонентов.
Код
1. Сервисный класс (`UserDAO`)
```javascript
class UserDAO {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UserDAO(); // Экспортируем экземпляр DAO
```
---
2. Компонент React
```jsx
import React, { useState, useEffect } from "react";
import userDAO from "./UserDAO"; // Импортируем DAO

function UserManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Загружаем пользователей при монтировании
  useEffect(() => {
    setUsers(userDAO.getAllUsers());
  }, []);

  // Обработчик для добавления пользователя
  const handleAddUser = () => {
    const addedUser = userDAO.addUser({
      name: newUser.name,
      age: parseInt(newUser.age),
    });
    setUsers([...users, addedUser]); // Обновляем состояние
    setNewUser({ name: "", age: "" }); // Очищаем форму
  };

  // Обработчик для удаления пользователя
  const handleDeleteUser = (id) => {
    userDAO.deleteUser(id);
    setUsers(userDAO.getAllUsers()); // Обновляем состояние
  };

  return (
    <div style={styles.container}>
      <h1>User Manager</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.age} years old)
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserManager;
```
Объяснение:
1. Сервисный класс `UserDAO`:
   - Инкапсулирует логику работы с данными (CRUD).
   - Может быть заменён на реализацию с API или базой данных.
2. React-компонент `UserManager`:
   - Подключается к `UserDAO` для управления состоянием.
   - Использует `useState` для управления пользователями и формой.
   - Использует `useEffect` для загрузки данных при монтировании.
Итог
1. На JavaScript DAO предоставляет интерфейс для работы с локальными данными.
2. На React реализуется UI для взаимодействия с DAO.
3. DAO можно легко адаптировать для работы с REST API или базой данных.
---------------------
⋙ ❍ ПоМапить классы (map):
---
Маппинг классов на JavaScript и React
Маппинг классов — это задача, в которой необходимо применить определённые классы к элементам, например, динамически добавлять CSS-классы в зависимости от данных или состояния.
1. Реализация на чистом JavaScript
В этом примере мы маппим классы к элементам списка на основе их состояния (например, выбранный элемент получает класс `selected`).
Код JavaScript
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class Mapping</title>
  <style>
    .item {
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .selected {
      background-color: #007bff;
      color: white;
    }

    .highlight {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <ul id="itemList"></ul>

  <script>
    // Данные
    const items = [
      { id: 1, name: "Item 1", isSelected: false },
      { id: 2, name: "Item 2", isSelected: true },
      { id: 3, name: "Item 3", isSelected: false },
    ];

    // Контейнер для списка
    const itemList = document.getElementById("itemList");

    // Рендерим элементы списка
    function renderItems() {
      itemList.innerHTML = ""; // Очищаем контейнер

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;

        // Маппим классы
        li.className = "item";
        if (item.isSelected) li.classList.add("selected");

        // Обработчик клика для выбора элемента
        li.addEventListener("click", () => toggleSelection(item.id));

        itemList.appendChild(li);
      });
    }

    // Переключение состояния "isSelected"
    function toggleSelection(id) {
      items.forEach((item) => {
        item.isSelected = item.id === id ? !item.isSelected : false;
      });

      renderItems(); // Перерисовываем список
    }

    renderItems(); // Первичный рендер
  </script>
</body>
</html>
```
Объяснение JavaScript-кода
1. Маппинг классов:
   - К каждому элементу применяется базовый класс `item`.
   - Если элемент выбран (`isSelected`), добавляется класс `selected`:
     ```javascript
     if (item.isSelected) li.classList.add("selected");
     ```
2. Динамическое обновление:
   - При клике состояние элемента (`isSelected`) меняется.
   - После этого вызывается `renderItems`, чтобы перерисовать список.
---
2. Реализация на React
В React маппинг классов реализуется с помощью библиотеки `classnames` или встроенной логики.
🎯 Реализация без библиотек
```jsx
import React, { useState } from "react";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`item ${item.isSelected ? "selected" : ""}`}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
🎯 Реализация с использованием библиотеки `classnames`
Установите библиотеку:
```bash
npm install classnames
```
Используем `classnames` для динамического маппинга классов:
```jsx
import React, { useState } from "react";
import classNames from "classnames";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={classNames("item", { selected: item.isSelected })}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
---
CSS для React
```css
.item {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.selected {
  background-color: #007bff;
  color: white;
}
```
Объяснение React-кода
1. Состояние:
   - Используется `useState` для хранения массива элементов с их состоянием.
2. Маппинг классов:
   - Без `classnames`:
     ```jsx
     className={`item ${item.isSelected ? "selected" : ""}`}
     ```
   - С использованием `classnames`:
     ```jsx
     classNames("item", { selected: item.isSelected })
     ```
3. Динамическое обновление:
   - `setItems` обновляет состояние списка, чтобы отобразить изменение класса.
---
Сравнение JavaScript и React
| Характеристика   | Vanilla JavaScript                             | React                                |
|-----------------------|----------------------------------------------------|------------------------------------------|
| Обновление данных | Ручная перерисовка DOM                             | Использование `state` и автоматический рендер |
| Маппинг классов   | `classList.add` и `classList.remove`               | Использование `className` или `classnames` |
| Простота в использовании | Быстрее для простых задач                     | Более подходящий для сложных интерфейсов |
---------------------
⋙ ❍ ⌛ Задача: Напишите бинарный поиск по памяти или канстомный линкед лист, обход графа за N сложность:
---
🎯 Решение: Реализация бинарного поиска, пользовательского связного списка и обхода графа
Ниже представлены три отдельных реализации:
1. Бинарный поиск (по массиву).
2. Кастомный связный список (Linked List).
3. Обход графа за линейное время O(N) с помощью BFS или DFS.
---
1. Бинарный поиск
Бинарный поиск применяется к отсортированным массивам, имеет сложность O(log N).
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Элемент найден
    }

    if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);

console.log(result); // Индекс элемента: 3
```
Объяснение:
1. Алгоритм:
   - Определяем центральный элемент массива (`mid`).
   - Сравниваем центральный элемент с `target`.
   - Сужаем область поиска, удаляя половину массива на каждой итерации.
2. Сложность:
   - Время: O(log N), так как на каждой итерации мы делим массив пополам.
   - Память: O(1), так как не используется рекурсия.
---
2. Кастомный связный список
Реализация пользовательского `LinkedList`
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Добавить элемент в конец списка
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Удалить элемент
  delete(value) {
    if (!this.head) return;

    // Удаляем голову
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }

    if (!current.next) {
      this.tail = current; // Обновляем хвост, если удалён последний элемент
    }
  }

  // Поиск элемента
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Печать всех элементов
  print() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Пример использования
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30

list.delete(20);
list.print(); // 10 -> 30

console.log(list.find(10)); // Node { value: 10, next: Node { ... } }
```
Объяснение:
1. Операции:
   - `append(value)`: Добавляет элемент в конец списка. Сложность O(1).
   - `delete(value)`: Удаляет элемент. Сложность O(N) в худшем случае.
   - `find(value)`: Поиск элемента. Сложность O(N).
2. Использование:
   - Связный список полезен для сценариев, где часто добавляются или удаляются элементы.
---
3. Обход графа за линейное время O(N)
Обход графа может быть выполнен с использованием DFS (глубина) или BFS (ширина). Оба алгоритма имеют сложность O(V + E), где:
- V — количество вершин.
- E — количество рёбер.
Реализация обхода в ширину (BFS)
```javascript
function bfs(graph, start) {
  const visited = new Set(); // Чтобы не заходить в одну вершину дважды
  const queue = [start]; // Очередь для BFS
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      // Добавляем всех соседей в очередь
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(bfs(graph, startNode)); // [1, 2, 3, 4, 5, 6]
```
---
Реализация обхода в глубину (DFS)
```javascript
function dfs(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return;

  visited.add(start);
  result.push(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(dfs(graph, startNode)); // [1, 2, 4, 3, 5, 6]
```
Объяснение BFS и DFS:
1. BFS (ширина):
   - Использует очередь (`queue`) для обхода.
   - Проходит уровень за уровнем.
2. DFS (глубина):
   - Использует рекурсию (или стек) для обхода.
   - Проходит до конца одного пути, затем возвращается.
Вывод
- Бинарный поиск: Для отсортированных массивов, O(log N).
- Кастомный связный список: Гибкость в работе с элементами, O(N) для операций поиска/удаления.
- Обход графа:
  - BFS и DFS обходят граф за O(V + E).
  - Выбор зависит от задачи (поиск кратчайшего пути — BFS, поиск путей вглубь — DFS).
---------------------
⋙ ❍ ⌛ Задача: !!!Написать функцию глубокого копирования объекта с доп условием - внутри есть циклические и иные ссылки между элементами, т.е. объект - не дерево:
---
Глубокое копирование объекта с учетом циклических ссылок — это сложная задача, которая требует хранения уже посещённых объектов. Для её решения мы можем использовать Map для отслеживания уже обработанных ссылок и избегания бесконечной рекурсии.
🎯 Решение:
```javascript
function deepClone(obj, map = new Map()) {
  // Если объект не является объектом или массивом, возвращаем его
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Если объект уже клонирован (циклическая ссылка), возвращаем его копию из Map
  if (map.has(obj)) {
    return map.get(obj);
  }

  // Создаем копию объекта или массива
  const clone = Array.isArray(obj) ? [] : {};

  // Сохраняем объект в Map, чтобы учесть циклические ссылки
  map.set(obj, clone);

  // Рекурсивно копируем свойства объекта или элементы массива
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
// Пример использования
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
obj.b.e = obj; // Циклическая ссылка

const copiedObj = deepClone(obj);
console.log(copiedObj);
```
Объяснение:
1. Проверка типа:
   - Если объект не является объектом или массивом (`typeof obj !== "object"`), он возвращается без изменений, так как примитивы копируются по значению.
2. Обработка циклических ссылок:
   - Используется `Map`, чтобы отслеживать уже обработанные объекты.
   - Если объект уже находится в `Map`, возвращается его ранее созданная копия:
     ```javascript
     if (map.has(obj)) {
       return map.get(obj);
     }
     ```
3. Копирование свойств:
   - Рекурсивно обходим все свойства объекта с помощью `for...in` и создаём их копии.
4. Работа с массивами:
   - Если объект — массив, создаётся пустой массив:
     ```javascript
     const clone = Array.isArray(obj) ? [] : {};
     ```
5. Поддержка сложных объектов:
   - Копируются свойства объектов и массивов любого уровня вложенности, включая циклические ссылки.
---
Тесты:
Пример с циклическими ссылками:
```javascript
const obj = { a: 1 };
obj.b = obj; // Циклическая ссылка

const cloned = deepClone(obj);
console.log(cloned); // { a: 1, b: [Circular] }
console.log(cloned.b === cloned); // true
```
Пример с массивом:
```javascript
const arr = [1, 2, 3];
arr.push(arr); // Циклическая ссылка

const clonedArr = deepClone(arr);
console.log(clonedArr); // [1, 2, 3, [Circular]]
console.log(clonedArr[3] === clonedArr); // true
```
Улучшение: Копирование специальных объектов
Если нужно поддерживать такие структуры как `Date`, `Set`, `Map`, можно дополнить функцию:
```javascript
function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  // Копирование специальных объектов
  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Map) {
    const clonedMap = new Map();
    map.set(obj, clonedMap);
    for (const [key, value] of obj.entries()) {
      clonedMap.set(deepClone(key, map), deepClone(value, map));
    }
    return clonedMap;
  }

  if (obj instanceof Set) {
    const clonedSet = new Set();
    map.set(obj, clonedSet);
    for (const value of obj.values()) {
      clonedSet.add(deepClone(value, map));
    }
    return clonedSet;
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
```
---
Пример использования с `Map` и `Set`
```javascript
const complexObj = {
  date: new Date(),
  map: new Map([[1, "one"]]),
  set: new Set([1, 2, 3]),
};
complexObj.self = complexObj; // Циклическая ссылка

const clonedComplexObj = deepClone(complexObj);
console.log(clonedComplexObj);
console.log(clonedComplexObj.map.get(1)); // "one"
console.log(clonedComplexObj.set.has(2)); // true
console.log(clonedComplexObj.self === clonedComplexObj); // true
```
Итог
- Функция поддерживает:
  - Глубокое копирование объектов и массивов.
  - Циклические ссылки.
  - Специальные объекты: `Date`, `Set`, `Map`.
- Решение эффективно для работы с любыми вложенными структурами. Если нужно добавить поддержку других типов, например, `RegExp`, это легко сделать.
---------------------
⋙ ❍ В цикле переложить элементы, меняя первые с последними. (фильтр-отсев кандитатов):
---
⌛ Задача: Переложить элементы массива так, чтобы первые элементы стали последними, а последние — первыми.
🎯 Решение на Vanilla JavaScript
```javascript
function reverseArray(arr) {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    // Меняем первый и последний элементы
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

// Пример использования
const array = [1, 2, 3, 4, 5];
console.log("Исходный массив:", array);
console.log("Перевернутый массив:", reverseArray(array));
```
Объяснение:
1. Итерация до середины массива:
   - Мы используем цикл `for` с условием `i < length / 2`, чтобы обменивать элементы только до середины массива.
   - Это исключает лишние обмены, т. к. элементы в середине не требуют изменений.
2. Обмен элементов:
   - Используем временную переменную `temp` для сохранения текущего элемента:
     ```javascript
     const temp = arr[i];
     arr[i] = arr[length - 1 - i];
     arr[length - 1 - i] = temp;
     ```
3. Результат:
   - Первый элемент меняется местами с последним, второй — с предпоследним, и так далее.
---
🎯 Решение с использованием встроенных методов
Если вы хотите использовать встроенные методы, можно использовать `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log("Перевернутый массив:", reversedArray);
```
Примечание: Этот метод изменяет исходный массив.
---
🎯 Пример для строк
Если вы хотите перевернуть строку:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
---------------------
⋙ ❍ ⌛ Задача: Написать калькулятор:
---
Вот реализация простого калькулятора на Vanilla JavaScript и React. Пример включает базовые арифметические операции: сложение, вычитание, умножение и деление.
🎯 Решение:
1. Калькулятор на Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }

    .calculator {
      width: 300px;
      margin: 0 auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .display {
      width: 100%;
      height: 50px;
      font-size: 20px;
      text-align: right;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      box-sizing: border-box;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    button {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
    }

    button:hover {
      background-color: #0056b3;
    }

    button.operation {
      background-color: #ff4d4d;
    }

    button.operation:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" class="display" disabled />
    <div class="buttons">
      <button class="number">7</button>
      <button class="number">8</button>
      <button class="number">9</button>
      <button class="operation">/</button>
      <button class="number">4</button>
      <button class="number">5</button>
      <button class="number">6</button>
      <button class="operation">*</button>
      <button class="number">1</button>
      <button class="number">2</button>
      <button class="number">3</button>
      <button class="operation">-</button>
      <button class="number">0</button>
      <button class="clear">C</button>
      <button class="equals">=</button>
      <button class="operation">+</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ""; // Текущее введённое значение
let previousInput = ""; // Предыдущее введённое значение
let operation = null; // Текущая операция

// Обработка нажатия кнопок
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      currentInput += value;
      display.value = currentInput;
    } else if (button.classList.contains("operation")) {
      if (currentInput === "") return; // Игнорируем, если нет текущего значения
      previousInput = currentInput;
      currentInput = "";
      operation = value;
    } else if (button.classList.contains("equals")) {
      if (operation && previousInput !== "" && currentInput !== "") {
        currentInput = calculate(previousInput, currentInput, operation);
        display.value = currentInput;
        previousInput = "";
        operation = null;
      }
    } else if (button.classList.contains("clear")) {
      currentInput = "";
      previousInput = "";
      operation = null;
      display.value = "";
    }
  });
});

// Функция для выполнения операций
function calculate(a, b, operation) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operation) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 !== 0 ? (num1 / num2).toString() : "Error";
    default:
      return "";
  }
}
```
---------------------
2. Калькулятор на React
---
Код React
```jsx
import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (value) => {
    setDisplay(display + value);
  };

  const handleOperationClick = (value) => {
    if (!display) return;
    setPreviousInput(display);
    setDisplay("");
    setOperation(value);
  };

  const handleEqualsClick = () => {
    if (!operation || !previousInput || !display) return;
    const result = calculate(previousInput, display, operation);
    setDisplay(result);
    setPreviousInput("");
    setOperation(null);
  };

  const handleClearClick = () => {
    setDisplay("");
    setPreviousInput("");
    setOperation(null);
  };

  const calculate = (a, b, operation) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operation) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return num2 !== 0 ? (num1 / num2).toString() : "Error";
      default:
        return "";
    }
  };

  return (
    <div style={styles.calculator}>
      <input type="text" value={display} readOnly style={styles.display} />
      <div style={styles.buttons}>
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "/" ? handleOperationClick("/") : handleNumberClick(btn)
            }
            style={btn === "/" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "*" ? handleOperationClick("*") : handleNumberClick(btn)
            }
            style={btn === "*" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "-" ? handleOperationClick("-") : handleNumberClick(btn)
            }
            style={btn === "-" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
        {["0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClearClick();
              else if (btn === "=") handleEqualsClick();
              else if (btn === "+") handleOperationClick("+");
              else handleNumberClick(btn);
            }}
            style={btn === "+" || btn === "=" ? styles.operationButton : styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  display: {
    width: "100%",
    height: "50px",
    fontSize: "20px",
    textAlign: "right",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    boxSizing: "border-box",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  },
  operationButton: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "white",
  },
};

export default Calculator;
```
Объяснение
Vanilla JS:
- Состояние:
  - `currentInput` и `previousInput` хранят текущее и предыдущее введённые значения.
- Обработка событий:
  - Кнопки добавляют цифры, задают операции или очищают экран.
- Выполнение операций:
  - Функция `calculate` выполняет вычисления.
React:
- Состояния:
  - Хуки `useState` хранят текущие значения и выбранную операцию.
- Обработчики событий:
  - `handleNumberClick`, `handleOperationClick` и другие функции обновляют состояния и выполняют действия.
- UI:
  - Кнопки генерируются с помощью массива для упрощения кода.
---------------------
⋙ ❍ Расчёт стоимости:
---
⌛ Задача: Написать расчёт стоимости:
🎯 Решение:
1. Vanilla JavaScript
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cost Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    input, select, button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    .result {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Cost Calculator</h1>
    <input type="number" id="quantity" placeholder="Enter quantity" />
    <select id="pricePerUnit">
      <option value="10">Price per unit: $10</option>
      <option value="20">Price per unit: $20</option>
      <option value="30">Price per unit: $30</option>
    </select>
    <button id="calculateBtn">Calculate</button>
    <p class="result" id="result">Total cost: $0</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
JavaScript
```javascript
// Получение элементов из DOM
const quantityInput = document.getElementById('quantity');
const priceSelect = document.getElementById('pricePerUnit');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

// Обработчик для расчёта стоимости
calculateBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value) || 0;
  const pricePerUnit = parseInt(priceSelect.value) || 0;

  const totalCost = quantity * pricePerUnit;

  result.textContent = `Total cost: $${totalCost}`;
});
```
Объяснение (Vanilla JS):
1. HTML:
   - Поле ввода `<input>` используется для ввода количества.
   - Селект `<select>` позволяет выбрать цену за единицу.
   - Кнопка `<button>` запускает расчёт.
   - Элемент `<p>` отображает итоговую стоимость.
2. JS:
   - Получаем значения из полей с помощью `value`.
   - Рассчитываем итоговую стоимость, умножая количество на цену.
   - Выводим результат в текст элемента `<p>`.
---
2. Реализация на React
Код React
```jsx
import React, { useState } from "react";

function CostCalculator() {
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(10);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    setTotalCost(quantity * pricePerUnit);
  };

  return (
    <div style={styles.container}>
      <h1>Cost Calculator</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Enter quantity"
        style={styles.input}
      />
      <select
        value={pricePerUnit}
        onChange={(e) => setPricePerUnit(Number(e.target.value))}
        style={styles.input}
      >
        <option value={10}>Price per unit: $10</option>
        <option value={20}>Price per unit: $20</option>
        <option value={30}>Price per unit: $30</option>
      </select>
      <button onClick={calculateCost} style={styles.button}>
        Calculate
      </button>
      <p style={styles.result}>Total cost: ${totalCost}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default CostCalculator;
```
Объяснение (React):
1. Состояния (`useState`):
   - `quantity`: Сохраняет введённое количество.
   - `pricePerUnit`: Хранит выбранную цену за единицу.
   - `totalCost`: Рассчитанная общая стоимость.
2. Обновление состояний:
   - При изменении значения в поле ввода или селекте вызывается `onChange`, который обновляет соответствующее состояние через `setQuantity` или `setPricePerUnit`.
3. Рассчёт стоимости:
   - При нажатии кнопки `Calculate` вызывается функция `calculateCost`, которая умножает `quantity` на `pricePerUnit` и сохраняет результат в `totalCost`.
4. Стили:
   - Стили задаются в объекте `styles` для упрощения.
---
Как запустить React-приложение:
1. Создайте новый проект React:
   ```bash
   npx create-react-app cost-calculator
   cd cost-calculator
   ```
2. Замените содержимое `src/App.js` на код React.
3. Запустите проект:
   ```bash
   npm start
   ```
Результат:
И в версии Vanilla JS, и в версии React пользователь может:
- Вводить количество.
- Выбирать цену за единицу.
- Нажимать кнопку для расчёта стоимости.
- Видеть общий результат в реальном времени.
---------------------
⋙ ❍ Список to do:
---
⌛ Задача: Реализовать To-Do List с возможностью добавления, удаления и отметки задач как выполненных. Используйте React.
Функциональность:
1. Пользователь может добавлять задачи.
2. Пользователь может удалять задачи.
3. Пользователь может отмечать задачи как выполненные.
4. Список задач отображается на экране.
🎯 Решение:
1. Начальная структура приложения
Создадим компонент `TodoApp`, который будет содержать все функции и рендерить список задач.
```jsx
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // Игнорируем пустые задачи
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask(""); // Сброс поля ввода
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
Объяснение:
1. Состояние задач:
   - Используем хук `useState` для хранения списка задач:
     ```jsx
     const [tasks, setTasks] = useState([]);
     ```
   - Каждая задача представлена объектом с тремя свойствами:
     - `id`: Уникальный идентификатор задачи.
     - `text`: Текст задачи.
     - `completed`: Флаг выполнения (`true`/`false`).
2. Добавление задачи:
   - Создаётся новый объект задачи:
     ```jsx
     const task = { id: Date.now(), text: newTask, completed: false };
     ```
   - Новая задача добавляется к списку с помощью:
     ```jsx
     setTasks([...tasks, task]);
     ```
3. Удаление задачи:
   - Фильтруем список задач, исключая задачу с соответствующим `id`:
     ```jsx
     setTasks(tasks.filter((task) => task.id !== id));
     ```
4. Отметка задачи как выполненной:
   - Используем метод `map`, чтобы изменить свойство `completed` для нужной задачи:
     ```jsx
     setTasks(
       tasks.map((task) =>
         task.id === id ? { ...task, completed: !task.completed } : task
       )
     );
     ```
5. Рендеринг задач:
   - Используем `map` для отображения каждой задачи в списке:
     ```jsx
     tasks.map((task) => (
       <li key={task.id}>
         <span>{task.text}</span>
       </li>
     ));
     ```
   - Добавляем стили для зачёркивания выполненных задач:
     ```jsx
     style={{ textDecoration: task.completed ? "line-through" : "none" }}
     ```
Дополнительные улучшения:
1. Пустой список
Добавьте сообщение, если список задач пуст:
```jsx
{tasks.length === 0 && <p>Список задач пуст</p>}
```
2. Валидация
Игнорируйте ввод пустых задач:
```jsx
if (newTask.trim() === "") return;
```
3. Сохранение задач в `localStorage`
Сохраните задачи в `localStorage`, чтобы они сохранялись между перезагрузками страницы:
```jsx
useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
---
Пример стилей (CSS):
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  cursor: pointer;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1a1a;
}
```
Как это использовать:
1. Создайте новый проект React с помощью:
   ```bash
   npx create-react-app todo-app
   cd todo-app
   ```
2. Замените содержимое `App.js` на код из задачи.
3. Добавьте стили в файл `App.css`.
4. Запустите проект:
   ```bash
   npm start
   ```
---------------------
⋙ ❍ React компоненты:
---
Вот подробная реализация задачи To-Do List на Vanilla JavaScript:
⌛ Описание задачи:
1. Создайте список задач.
2. Реализуйте добавление новых задач.
3. Позвольте пользователю удалять задачи.
4. Позвольте отмечать задачи как выполненные.
---
🎯 Решение:
1. HTML-разметка
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
    }

    .todo-container {
      max-width: 400px;
      margin: 0 auto;
    }

    .input-container {
      display: flex;
      margin-bottom: 20px;
    }

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      margin-left: 10px;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    li.completed span {
      text-decoration: line-through;
      color: gray;
    }

    .delete-btn {
      background-color: #ff4d4d;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      padding: 5px 10px;
    }

    .delete-btn:hover {
      background-color: #ff1a1a;
    }
  </style>
</head>
<body>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <div class="input-container">
      <input type="text" id="taskInput" placeholder="Enter a new task">
      <button id="addTaskBtn">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
---
2. JavaScript
```javascript
// Получаем элементы из DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Функция добавления задачи
function addTask() {
  const taskText = taskInput.value.trim(); // Убираем лишние пробелы
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Создаём новую задачу
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Отметить задачу как выполненную
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Кнопка удаления
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Удалить задачу
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Собираем задачу
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Добавляем в список
  taskList.appendChild(li);

  // Очищаем поле ввода
  taskInput.value = "";
}

// Событие на кнопку добавления
addTaskBtn.addEventListener("click", addTask);

// Событие на клавишу Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
```
Объяснение работы кода:
1. HTML:
   - Поле `<input>` для ввода задачи и кнопка `<button>` для добавления задачи.
   - `<ul>` отображает список задач, добавленных пользователем.
2. CSS:
   - Стилизация элементов списка (`<li>`) и кнопок (`Add`, `Delete`).
   - Класс `.completed` задаёт зачёркнутый стиль текста для выполненных задач.
3. Добавление задачи:
   - Поле ввода очищается после добавления задачи:
     ```javascript
     taskInput.value = "";
     ```
   - Проверка на пустую строку:
     ```javascript
     if (taskText === "") {
       alert("Task cannot be empty!");
       return;
     }
     ```
4. Удаление задачи:
   - Кнопка "Delete" удаляет соответствующий элемент `<li>`:
     ```javascript
     deleteBtn.addEventListener("click", () => {
       taskList.removeChild(li);
     });
     ```
5. Отметка выполнения:
   - Клик по тексту задачи добавляет/удаляет класс `completed`, чтобы зачеркнуть текст:
     ```javascript
     span.addEventListener("click", () => {
       li.classList.toggle("completed");
     });
     ```
6. Обработка клавиши `Enter`:
   - При нажатии `Enter` задача добавляется:
     ```javascript
     taskInput.addEventListener("keypress", (event) => {
       if (event.key === "Enter") {
         addTask();
       }
     });
     ```
Дополнительные улучшения
1. Сохранение задач в `localStorage`
Добавьте сохранение задач, чтобы они не исчезали при перезагрузке страницы:
```javascript
function saveTasks() {
  const tasks = Array.from(taskList.children).map((li) => ({
    text: li.querySelector("span").textContent,
    completed: li.classList.contains("completed"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    span.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Загружаем задачи при загрузке страницы
window.addEventListener("load", loadTasks);
// Сохраняем задачи при изменении
taskList.addEventListener("DOMSubtreeModified", saveTasks);
```
---
Запуск проекта:
1. Сохраните HTML-код в файл `index.html`.
2. Сохраните JavaScript-код в файл `script.js`.
3. Откройте файл `index.html` в браузере.
---
1. Функциональный компонент
⌛ Задача: Создайте простой функциональный компонент, который возвращает текст "Hello, React!".
🎯 Решение:
```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;
```
Объяснение: Функциональные компоненты возвращают JSX, который рендерится в DOM.
---
2. Класс-компонент
⌛ Задача: Создайте класс-компонент, который выводит "Hello, React!".
🎯 Решение:
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Greeting;
```
Объяснение: Класс-компоненты содержат метод `render`, который возвращает JSX.
---
3. Пропсы в функциональном компоненте
⌛ Задача: Создайте компонент, который принимает проп `name` и выводит его.
🎯 Решение:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;

// Использование
<Greeting name="Alice" />;
```
Объяснение: Пропсы передаются в компонент как аргументы.
---
4. Пропсы в класс-компоненте
⌛ Задача: Создайте класс-компонент, который принимает проп `name`.
🎯 Решение:
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;

// Использование
<Greeting name="Alice" />;
```
Объяснение: В класс-компонентах пропсы доступны через `this.props`.
---
5. Состояние (state) в класс-компоненте
⌛ Задача: Создайте класс-компонент, который хранит и отображает счётчик.
🎯 Решение:
```jsx
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
Объяснение: Состояние (`state`) обновляется через `setState`.
---
6. Хук состояния (`useState`)
⌛ Задача: Создайте функциональный компонент со счётчиком.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
Объяснение: Хук `useState` используется для управления состоянием в функциональных компонентах.
---
7. Обработка событий
⌛ Задача: Создайте кнопку, которая выводит сообщение в консоль при клике.
🎯 Решение:
```jsx
function ClickButton() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickButton;
```
Объяснение: События обрабатываются через атрибуты, такие как `onClick`.
---
8. Дочерние компоненты (children)
⌛ Задача: Создайте компонент, который принимает детей через `props.children`.
🎯 Решение:
```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;

// Использование
<Container>
  <h1>Hello, World!</h1>
</Container>;
```
Объяснение: `props.children` используется для передачи вложенного содержимого.
---
9. Передача данных через события
⌛ Задача: Передайте данные из дочернего компонента в родительский через событие.
🎯 Решение:
```jsx
function Child({ onSend }) {
  return <button onClick={() => onSend("Hello from Child")}>Send</button>;
}

function Parent() {
  const handleReceive = (message) => {
    console.log(message);
  };

  return <Child onSend={handleReceive} />;
}

export default Parent;
```
Объяснение: Дочерний компонент вызывает функцию, переданную через пропсы.
---
10. Использование `useEffect`
⌛ Задача: Создайте компонент, который выводит сообщение в консоль при монтировании.
🎯 Решение:
```jsx
import React, { useEffect } from "react";

function Message() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <p>Hello, World!</p>;
}

export default Message;
```
Объяснение: Хук `useEffect` с пустым массивом зависимостей вызывается только при монтировании.
---
11. Рендеринг списков
⌛ Задача: Отобразите список элементов.
🎯 Решение:
```jsx
function List() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
```
Объяснение: У каждого элемента списка должен быть уникальный `key`.
---
12. Условный рендеринг
⌛ Задача: Рендерьте текст в зависимости от условия.
🎯 Решение:
```jsx
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

export default Greeting;
```
Объяснение: Условный рендеринг осуществляется через тернарный оператор.
---
13. Контекст React (`useContext`)
⌛ Задача: Используйте контекст для передачи данных между компонентами.
🎯 Решение:
```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}

function Parent() {
  return (
    <UserContext.Provider value="Alice">
      <Child />
    </UserContext.Provider>
  );
}

export default Parent;
```
Объяснение: Контекст позволяет передавать данные через дерево компонентов без пропсов.
---
14. Хранение состояния в `useReducer`
⌛ Задача: Используйте `useReducer` для управления состоянием.
🎯 Решение:
```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default Counter;
```
Объяснение: `useReducer` используется для более сложного управления состоянием.
---
15. Компоненты высшего порядка (HOC)
⌛ Задача: Напишите HOC, который добавляет заголовок к компоненту.
🎯 Решение:
```jsx
function withHeader(Component) {
  return function WrappedComponent(props) {
    return (
      <>
        <h1>Header</h1>
        <Component {...props} />
      </>
    );
  };
}

function Content() {
  return <p>Content goes here</p>;
}

export default withHeader(Content);
```
Объяснение: HOC оборачивает компонент и добавляет дополнительные свойства или функциональность.
---
16. Ленивая загрузка компонента
⌛ Задача: Загрузите компонент лениво.
🎯 Решение:
```jsx
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
```
Объяснение: `React.lazy` используется для ленивой загрузки компонентов.
---
17. Мемоизация компонента (`React.memo`)
⌛ Задача: Используйте `React.memo` для предотвращения ненужного ререндеринга.
🎯 Решение:
```jsx
import React from "react";

const MemoizedComponent = React.memo(({ name }) => {
  console.log("Rendered");
  return <h1>Hello, {name}!</h1>;
});

export default MemoizedComponent;

// Использование
<MemoizedComponent name="Alice" />;
```
Объяснение: `React.memo` предотвращает повторный ререндеринг, если пропсы не изменились.
---------------------
⋙ ❍ Typescript:
---
1. Простая типизация переменной
⌛ Задача: Объявите переменную с типом `string`.
🎯 Решение:
```typescript
const message: string = "Hello, TypeScript!";
console.log(message);
```
Объяснение: `: string` указывает, что переменная `message` должна быть строкой.
---
2. Типизация функции
⌛ Задача: Напишите функцию, которая принимает два числа и возвращает их сумму.
🎯 Решение:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // 5
```
Объяснение: Указывается тип аргументов (`a: number, b: number`) и тип возвращаемого значения (`: number`).
---
3. Типизация массива
⌛ Задача: Создайте массив чисел.
🎯 Решение:
```typescript
const numbers: number[] = [1, 2, 3, 4];
console.log(numbers);
```
Объяснение: Тип `number[]` указывает, что массив должен содержать только числа.
---
4. Типизация объекта
⌛ Задача: Определите объект с заданными свойствами.
🎯 Решение:
```typescript
const user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
console.log(user);
```
Объяснение: Указываются типы свойств объекта: `name: string` и `age: number`.
---
5. Опциональные свойства
⌛ Задача: Создайте объект, где одно из свойств является необязательным.
🎯 Решение:
```typescript
type User = {
  name: string;
  age?: number;
};

const user: User = { name: "Bob" }; // Возраст необязателен
console.log(user);
```
Объяснение: `age?: number` указывает, что свойство `age` необязательно.
---
6. Типизация функции с параметром по умолчанию
⌛ Задача: Напишите функцию с параметром по умолчанию.
🎯 Решение:
```typescript
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
```
Объяснение: Параметру `name` задано значение по умолчанию `"Guest"`.
---
7. Использование `enum`
⌛ Задача: Создайте перечисление для ролей пользователя.
🎯 Решение:
```typescript
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

const userRole: Role = Role.User;
console.log(userRole); // "User"
```
Объяснение: `enum` используется для создания набора значений.
---
8. Типизация функции обратного вызова (callback)
⌛ Задача: Напишите функцию, которая принимает колбэк.
🎯 Решение:
```typescript
function processUser(id: number, callback: (id: number) => string): string {
  return callback(id);
}

const result = processUser(1, (id) => `User ID: ${id}`);
console.log(result); // "User ID: 1"
```
Объяснение: Тип колбэка задаётся `(id: number) => string`.
---
9. Интерфейс
⌛ Задача: Определите интерфейс для типизации объекта пользователя.
🎯 Решение:
```typescript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 30 };
console.log(user);
```
Объяснение: `interface` используется для описания структуры объекта.
---
10. Объединение типов (Union Types)
⌛ Задача: Создайте переменную, которая может быть строкой или числом.
🎯 Решение:
```typescript
let value: string | number;
value = "Hello";
console.log(value); // "Hello"
value = 42;
console.log(value); // 42
```
Объяснение: `string | number` указывает, что переменная может иметь оба типа.
---
11. Тип `any`
⌛ Задача: Создайте переменную, которая может содержать значение любого типа.
🎯 Решение:
```typescript
let value: any = "Hello";
console.log(value); // "Hello"
value = 42;
console.log(value); // 42
```
Объяснение: Тип `any` позволяет хранить значения любого типа, но рекомендуется избегать его использования.
---
12. Неизменяемый массив (`readonly`)
⌛ Задача: Создайте массив, который нельзя изменить.
🎯 Решение:
```typescript
const readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4); // Ошибка
console.log(readonlyArray);
```
Объяснение: `readonly` запрещает изменение массива.
---
13. Типизация деструктуризации
⌛ Задача: Деструктурируйте объект с типизацией.
🎯 Решение:
```typescript
const user: { name: string; age: number } = { name: "Alice", age: 25 };
const { name, age }: { name: string; age: number } = user;

console.log(name, age); // "Alice", 25
```
Объяснение: Указывается тип для деструктурируемых переменных.
---
14. Типизация возвращаемого значения функции
⌛ Задача: Укажите тип возвращаемого значения.
🎯 Решение:
```typescript
function square(num: number): number {
  return num * num;
}

console.log(square(4)); // 16
```
Объяснение: Тип возвращаемого значения функции задаётся через `: number`.
---
15. Кастомные типы (`type`)
⌛ Задача: Создайте пользовательский тип для массива строк.
🎯 Решение:
```typescript
type StringArray = string[];

const names: StringArray = ["Alice", "Bob", "Charlie"];
console.log(names);
```
Объяснение: `type` создаёт псевдоним для типов.
---
16. Типизация `React` компонента
⌛ Задача: Напишите функциональный компонент с типизацией пропсов.
🎯 Решение:
```typescript
import React from "react";

type Props = {
  name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```
Объяснение: Используется `React.FC<Props>` для типизации пропсов.
---
17. Типизация `fetch` запроса
⌛ Задача: Сделайте типизацию данных, возвращаемых запросом.
🎯 Решение:
```typescript
type User = {
  id: number;
  name: string;
};

async function fetchUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}

fetchUser().then((user) => console.log(user));
```
Объяснение: `Promise<User>` указывает тип данных, возвращаемых запросом.
---------------------
⋙ ❍ Вёрстка:
---
1. Центрирование текста
⌛ Задача: Сделайте текст внутри блока по центру (горизонтально и вертикально).
🎯 Решение:
```html
<div class="center">
  Центрированный текст
</div>
```

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
}
```
Объяснение: `display: flex` с `justify-content: center` и `align-items: center` центрирует содержимое по горизонтали и вертикали.
---
2. Создание сетки (grid layout)
⌛ Задача: Сделайте 3x3 сетку с одинаковыми ячейками.
🎯 Решение:
```html
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```
Объяснение: `grid-template-columns: repeat(3, 1fr)` создаёт 3 столбца одинаковой ширины.
---
3. Фиксированная шапка
⌛ Задача: Сделайте шапку, которая фиксируется сверху при прокрутке.
🎯 Решение:
```html
<header class="header">Шапка</header>
<div class="content">Содержимое страницы...</div>
```

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 60px;
  z-index: 10;
}

.content {
  margin-top: 60px; /* Отступ для фиксированной шапки */
}
```
Объяснение: `position: fixed` фиксирует шапку относительно окна браузера.
---
4. Круглая кнопка
⌛ Задача: Сделайте круглую кнопку с иконкой.
🎯 Решение:
```html
<button class="round-button">+</button>
```

```css
.round-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
```
Объяснение: `border-radius: 50%` делает кнопку круглой.
---
5. Тень для элемента
⌛ Задача: Добавьте тень к блоку.
🎯 Решение:
```html
<div class="box">С тенью</div>
```

```css
.box {
  width: 200px;
  height: 100px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
```
Объяснение: `box-shadow` создаёт тень с заданным смещением, размерами и размытием.
---
6. Создание адаптивного изображения
⌛ Задача: Сделайте изображение, которое масштабируется под размер родителя.
🎯 Решение:
```html
<img class="responsive-img" src="image.jpg" alt="Image">
```

```css
.responsive-img {
  width: 100%;
  height: auto;
}
```
Объяснение: `width: 100%` подстраивает ширину изображения под родителя, а `height: auto` сохраняет пропорции.
---
7. Вертикальный текст
⌛ Задача: Сделайте текст вертикальным.
🎯 Решение:
```html
<div class="vertical-text">Вертикальный текст</div>
```

```css
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```
Объяснение: `writing-mode` задаёт направление текста, а `text-orientation` выравнивает символы вертикально.
---
8. Таблица с фиксированным заголовком
⌛ Задача: Создайте таблицу с фиксированным заголовком.
🎯 Решение:
```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Заголовок 1</th>
        <th>Заголовок 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Данные 1</td>
        <td>Данные 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.table-wrapper {
  max-height: 200px;
  overflow-y: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #f4f4f4;
}
```
Объяснение: `position: sticky` фиксирует заголовок таблицы.
---
9. Градиентный фон
⌛ Задача: Сделайте фон с градиентом.
🎯 Решение:
```css
.gradient {
  width: 100%;
  height: 200px;
  background: linear-gradient(to right, red, yellow);
}
```
Объяснение: `linear-gradient` создаёт градиентный переход.
---
10. Фиксированное изображение на фоне
⌛ Задача: Сделайте фоновое изображение, которое остаётся на месте при прокрутке.
🎯 Решение:
```css
.fixed-bg {
  height: 300px;
  background-image: url('image.jpg');
  background-attachment: fixed;
  background-size: cover;
}
```
Объяснение: `background-attachment: fixed` фиксирует изображение на фоне.
---
11. Липкий футер
⌛ Задача: Сделайте футер, который всегда находится внизу страницы.
🎯 Решение:
```html
<div class="wrapper">
  <div class="content">Контент</div>
  <footer class="footer">Футер</footer>
</div>
```

```css
html, body {
  height: 100%;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.content {
  flex: 1;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
```
Объяснение: Используется `flexbox` для создания "липкого" футера.
---
12. Кнопка с эффектом наведения
⌛ Задача: Сделайте кнопку, которая меняет цвет при наведении.
🎯 Решение:
```css
.hover-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.hover-button:hover {
  background-color: darkblue;
}
```
Объяснение: Используйте псевдокласс `:hover` для изменения стиля при наведении.
---
13. Стилизация чекбокса
⌛ Задача: Создайте стилизованный чекбокс.
🎯 Решение:
```html
<label class="checkbox-wrapper">
  <input type="checkbox" class="checkbox">
  <span class="custom-checkbox"></span>
  Чекбокс
</label>
```

```css
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid black;
  margin-right: 10px;
  cursor: pointer;
}

.checkbox:checked + .custom-checkbox {
  background-color: black;
}
```
Объяснение: Скройте стандартный чекбокс и стилизуйте через соседний элемент.
---
14. Анимация кнопки
⌛ Задача: Добавьте анимацию при наведении на кнопку.
🎯 Решение:
```css
.animated-button {
  padding: 10px 20px;
  border: 2px solid blue;
  background-color: transparent;
  color: blue;
  transition: all 0.3s ease;
}

.animated-button:hover {
  background-color: blue;
  color: white;
}
```
Объяснение: Свойство `transition` создаёт плавный переход.
---
15. Боковая панель
⌛ Задача: Сделайте фиксированную боковую панель.
🎯 Решение:
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
}
```
Объяснение: `position: fixed` фиксирует панель сбоку экрана.
---
16. Полупрозрачный слой
⌛ Задача: Создайте слой с прозрачностью поверх фона.
🎯 Решение:
```css
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
```
Объяснение: Используйте `rgba` для задания прозрачности.
---
17. Адаптивный блок
⌛ Задача: Сделайте блок, который меняет цвет на меньших экранах.
🎯 Решение:
```css
.responsive-box {
  background-color: lightblue;
}

@media (max-width: 600px) {
  .responsive-box {
    background-color: pink;
  }
}
```
Объяснение: Медиа-запросы позволяют задавать стили для определённых размеров экрана.
---------------------
⋙ ❍ styled-components:
---
1. Создание простого компонента
⌛ Задача: Создайте кнопку с зелёным фоном.
🎯 Решение:
```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: green;
  color: white;
`;

const App = () => <Button>Click me</Button>;

// Вывод: <button style="background-color: green; color: white;">Click me</button>
```
Объяснение: `styled-components` позволяет создавать компоненты с инкапсулированными стилями.
---
2. Использование пропсов
⌛ Задача: Измените цвет кнопки через проп.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => props.bgColor || 'blue'};
  color: white;
`;

const App = () => <Button bgColor="red">Click me</Button>;

// Вывод: <button style="background-color: red; color: white;">Click me</button>
```
Объяснение: `props` можно использовать для динамического изменения стилей.
---
3. Динамическая стилизация по состоянию
⌛ Задача: Сделайте кнопку красной, если она отключена.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => (props.disabled ? 'red' : 'green')};
  color: white;
`;

const App = () => <Button disabled>Click me</Button>;

// Вывод: <button style="background-color: red; color: white;" disabled>Click me</button>
```
Объяснение: Вы можете использовать логические выражения для динамических стилей.
---
4. Компонент с псевдоклассами
⌛ Задача: Измените цвет кнопки при наведении.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;

  &:hover {
    background-color: darkgreen;
  }
`;

const App = () => <Button>Hover me</Button>;

// Наведение: background-color станет darkgreen.
```
Объяснение: Используйте псевдоклассы CSS, такие как `:hover` или `:focus`.
---
5. Расширение стилей
⌛ Задача: Создайте кнопку `PrimaryButton`, которая наследует стили базовой кнопки.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;
`;

const PrimaryButton = styled(Button)`
  background-color: blue;
`;

const App = () => <PrimaryButton>Click me</PrimaryButton>;

// Вывод: <button style="background-color: blue; color: white;">Click me</button>
```
Объяснение: Расширение стилей позволяет легко переиспользовать базовые стили.
---
6. Медиа-запросы
⌛ Задача: Сделайте текст кнопки меньше на экранах шириной менее 600px.
🎯 Решение:
```javascript
const Button = styled.button`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const App = () => <Button>Responsive Button</Button>;

// На экранах < 600px текст станет меньше.
```
Объяснение: Используйте медиа-запросы для адаптивного дизайна.
---
7. Передача класса через `className`
⌛ Задача: Добавьте стили через `className`.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;
`;

const App = () => <Button className="custom-class">Click me</Button>;

// Можно дополнительно стилизовать с помощью `custom-class`.
```
Объяснение: `styled-components` поддерживает передачу `className`.
---
8. Работа с анимациями
⌛ Задача: Сделайте анимацию кнопки при наведении.
🎯 Решение:
```javascript
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: green;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
`;

const App = () => <Button>Animated Button</Button>;
```
Объяснение: `keyframes` позволяет определять анимации для компонентов.
---
9. Стилизация вложенных компонентов
⌛ Задача: Стилизуйте вложенный тег `<span>`.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: green;
  color: white;

  span {
    font-weight: bold;
  }
`;

const App = () => (
  <Button>
    <span>Click me</span>
  </Button>
);

// <span> будет стилизован как жирный.
```
Объяснение: Вложенные селекторы позволяют стилизовать дочерние элементы.
---
10. Компоненты с `attrs`
⌛ Задача: Добавьте атрибут `type="button"` по умолчанию.
🎯 Решение:
```javascript
const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: green;
  color: white;
`;

const App = () => <Button>Click me</Button>;

// Вывод: <button type="button" style="background-color: green; color: white;">Click me</button>
```
Объяснение: `attrs` задаёт атрибуты по умолчанию.
---
11. Глобальные стили
⌛ Задача: Определите глобальный стиль для всего приложения.
🎯 Решение:
```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <h1>Hello, World!</h1>
  </>
);
```
Объяснение: `createGlobalStyle` позволяет задавать стили для всего приложения.
---
12. Стилизация по типу тега
⌛ Задача: Стилизуйте все `<h1>`.
🎯 Решение:
```javascript
const StyledH1 = styled.h1`
  color: red;
`;

const App = () => <StyledH1>Styled Heading</StyledH1>;

// Все h1 с использованием StyledH1 будут красными.
```
Объяснение: Вы можете стилизовать HTML-теги, используя `styled-components`.
---
13. Переопределение стилей
⌛ Задача: Переопределите базовые стили с помощью пропсов.
🎯 Решение:
```javascript
const Button = styled.button`
  background-color: ${props => props.bg || 'green'};
  color: ${props => props.color || 'white'};
`;

const App = () => <Button bg="blue" color="yellow">Click me</Button>;
```
Объяснение: Пропсы позволяют динамически переопределять стили.
---
14. Тематизация с `ThemeProvider`
⌛ Задача: Используйте тему для управления цветами.
🎯 Решение:
```javascript
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'blue',
  secondary: 'green',
};

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>
);

// Кнопка будет синей, используя тему.
```
Объяснение: `ThemeProvider` позволяет управлять стилями через тему.
---
15. Переопределение темы
⌛ Задача: Задайте новую тему для дочернего компонента.
🎯 Решение:
```javascript
const darkTheme = {
  primary: 'black',
  secondary: 'gray',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Default Theme</Button>
    <ThemeProvider theme={darkTheme}>
      <Button>Dark Theme</Button>
    </ThemeProvider>
  </ThemeProvider>
);
```
Объяснение: Вы можете переопределить тему для определённых компонентов.
---
16. Создание адаптивных компонентов
⌛ Задача: Сделайте компонент, который меняет размер текста на маленьких экранах.
🎯 Решение:
```javascript
const Title = styled.h1`
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const App = () => <Title>Responsive Title</Title>;
```
Объяснение: Медиа-запросы обеспечивают адаптивность компонента.
---
17. Подключение CSS файла
⌛ Задача: Используйте CSS-файл в `styled-components`.
🎯 Решение:
```javascript
import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: green;
  color: white;
`;

const Button = styled.button`
  ${buttonStyles}
`;

const App = () => <Button>Click me</Button>;
```
Объяснение: `css` используется для создания переиспользуемых блоков стилей.
---------------------
⋙ ❍ React classnames:
---
1. Простое использование `classnames`
⌛ Задача: Добавьте класс `active` к компоненту, если передан пропс `isActive`.
🎯 Решение:
```javascript
import classNames from 'classnames';

const Button = ({ isActive }) => {
  const buttonClass = classNames({ active: isActive });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isActive={true} />; // <button class="active">Click me</button>
```
Объяснение: Если `isActive` равен `true`, класс `active` будет добавлен.
---
2. Условные классы
⌛ Задача: Добавьте классы `enabled` или `disabled` в зависимости от пропса `isEnabled`.
🎯 Решение:
```javascript
const Button = ({ isEnabled }) => {
  const buttonClass = classNames({
    enabled: isEnabled,
    disabled: !isEnabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isEnabled={false} />; // <button class="disabled">Click me</button>
```
Объяснение: `classnames` позволяет удобно управлять добавлением классов на основе условий.
---
3. Комбинирование строковых классов
⌛ Задача: Объедините статические и динамические классы.
🎯 Решение:
```javascript
const Button = ({ isPrimary }) => {
  const buttonClass = classNames('button', { primary: isPrimary });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} />; // <button class="button primary">Click me</button>
```
Объяснение: Статические классы (`button`) остаются всегда, а динамические (`primary`) добавляются в зависимости от условия.
---
4. Передача массивов
⌛ Задача: Используйте массив для управления классами.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isLarge }) => {
  const buttonClass = classNames([
    'button',
    { primary: isPrimary, large: isLarge },
  ]);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isLarge={false} />; // <button class="button primary">Click me</button>
```
Объяснение: Массив помогает комбинировать классы из разных источников.
---
5. Передача объектов
⌛ Задача: Добавьте несколько классов с объектом условий.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames({
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={true} />; // <button class="btn-primary btn-disabled">Click me</button>
```
Объяснение: Объект позволяет удобно добавлять классы на основе условий.
---
6. Комбинация строк, массивов и объектов
⌛ Задача: Объедините все способы указания классов.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isDisabled }) => {
  const buttonClass = classNames('button', ['extra-class'], {
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isDisabled={false} />; // <button class="button extra-class btn-primary">Click me</button>
```
Объяснение: `classnames` позволяет смешивать строки, массивы и объекты в одном вызове.
---
7. Динамическая передача классов
⌛ Задача: Добавьте дополнительные классы через проп `className`.
🎯 Решение:
```javascript
const Button = ({ isPrimary, className }) => {
  const buttonClass = classNames('button', { primary: isPrimary }, className);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} className="custom-class" />; // <button class="button primary custom-class">Click me</button>
```
Объяснение: Вы можете комбинировать проп `className` с динамическими классами.
---
8. Отсутствие класса по условию
⌛ Задача: Не добавляйте класс, если условие ложно.
🎯 Решение:
```javascript
const Button = ({ isPrimary }) => {
  const buttonClass = classNames('button', { primary: isPrimary || false });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={false} />; // <button class="button">Click me</button>
```
Объяснение: Если условие ложно, класс не добавляется.
---
9. Работа с булевыми значениями
⌛ Задача: Используйте `classnames` для работы с булевыми значениями.
🎯 Решение:
```javascript
const Button = ({ isVisible }) => {
  const buttonClass = classNames({ hidden: !isVisible });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isVisible={false} />; // <button class="hidden">Click me</button>
```
Объяснение: Булевые значения легко использовать в объектах `classnames`.
---
10. Сложное комбинирование условий
⌛ Задача: Добавьте классы на основе нескольких условий.
🎯 Решение:
```javascript
const Button = ({ isPrimary, isLarge }) => {
  const buttonClass = classNames('button', {
    primary: isPrimary && !isLarge,
    large: isLarge,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} isLarge={true} />; // <button class="button large">Click me</button>
```
Объяснение: Вы можете использовать сложные логические выражения в объектах.
---
11. Использование с `classnames/bind`
⌛ Задача: Используйте `classnames/bind` для настройки префиксов.
🎯 Решение:
```javascript
import classNames from 'classnames/bind';

const styles = {
  button: 'button-class',
  primary: 'primary-class',
};

const cx = classNames.bind(styles);

const Button = ({ isPrimary }) => {
  const buttonClass = cx('button', { primary: isPrimary });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isPrimary={true} />; // <button class="button-class primary-class">Click me</button>
```
Объяснение: `classnames/bind` связывает классы с вашими стилями.
---
12. Динамическое управление видимостью
⌛ Задача: Добавьте класс `hidden`, если проп `isHidden` равен `true`.
🎯 Решение:
```javascript
const Button = ({ isHidden }) => {
  const buttonClass = classNames({ hidden: isHidden });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isHidden={true} />; // <button class="hidden">Click me</button>
```
Объяснение: Динамические классы легко использовать для управления видимостью.
---
13. Работа с модификаторами
⌛ Задача: Добавьте модификаторы в классы через пропы.
🎯 Решение:
```javascript
const Button = ({ size, color }) => {
  const buttonClass = classNames('button', `button--${size}`, `button--${color}`);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button size="large" color="red" />; // <button class="button button--large button--red">Click me</button>
```
Объяснение: Вы можете динамически добавлять модификаторы через шаблонные строки.
---
14. Классы с условными модификаторами
⌛ Задача: Добавьте модификатор только при выполнении условия.
🎯 Решение:
```javascript
const Button = ({ isDisabled }) => {
  const buttonClass = classNames('button', {
    'button--disabled': isDisabled,
  });

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button isDisabled={true} />; // <button class="button button--disabled">Click me</button>
```
---
15. Комбинирование классов через пропы
⌛ Задача: Добавьте пользовательский класс через проп `extraClass`.
🎯 Решение:
```javascript
const Button = ({ extraClass }) => {
  const buttonClass = classNames('button', extraClass);

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button extraClass="my-custom-class" />; // <button class="button my-custom-class">Click me</button>
```
---
16. Статические классы
⌛ Задача: Добавьте постоянный класс независимо от условий.
🎯 Решение:
```javascript
const Button = () => {
  const buttonClass = classNames('button', 'static-class');

  return <button className={buttonClass}>Click me</button>;
};

// Использование
<Button />; // <button class="button static-class">Click me</button>
```
---
17. Динамическая смена состояния
⌛ Задача: Меняйте классы при нажатии на кнопку.
🎯 Решение:
```javascript
import { useState } from 'react';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const buttonClass = classNames('button', { active: isActive });

  return (
    <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
      Click me
    </button>
  );
};

// Использование
<Button />;
```
Объяснение: Вы можете динамически изменять классы через состояние компонента.
---------------------------------------------------------------------------------------------
📌 [Livecode Таски]:
---------------------
1. Напишите функцию, которая принимает массив целых чисел и возвращает сумму всех чисел, кратных 3 –
function sumMultipleOfThree(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
---
Ваш код написан корректно, но его можно улучшить, сделав его лаконичнее и современнее с использованием метода массива `reduce`:
```javascript
function sumMultipleOfThree(arr) {
    return arr.reduce((sum, num) => num % 3 === 0 ? sum + num : sum, 0);
}
```
Как это работает:
1. Метод `reduce` проходит по каждому элементу массива.
2. Накапливает сумму (`sum`), добавляя только те числа (`num`), которые делятся на 3 без остатка (`num % 3 === 0`).
3. Начальное значение аккумулятора (`sum`) — это `0`.
Пример использования:
```javascript
const numbers = [1, 3, 4, 6, 9, 11, 12];
console.log(sumMultipleOfThree(numbers)); // Вывод: 30
```
Этот вариант короче, проще читается и соответствует современному JavaScript-коду.
-----
2. Напишите функцию, которая принимает строку и возвращает обратную ей –
function reverseString(str) {
    return str.split('').reverse().join('');
}
// ---
Ваша функция для переворота строки уже написана правильно. Вот она:
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```
Давайте разберем, что она делает:
1. `str.split('')` — разбивает строку на массив символов.
2. `.reverse()` — переворачивает массив символов.
3. `.join('')` — соединяет массив обратно в строку.
Это эффективный и понятный способ перевернуть строку в JavaScript.
-----
3. Напишите функцию, которая принимает массив объектов и сортирует его по возрастанию значения свойства “age” –
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
Ваше решение для сортировки массива объектов по свойству `age` тоже правильное. Вот оно:
```javascript
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
```
Давайте разберем, что происходит в этой функции:
1. `arr.sort()` — сортирует массив на месте.
2. `(a, b) => a.age - b.age` — это функция сравнения, которая используется для определения порядка сортировки:
   - Если `a.age` меньше `b.age`, функция возвращает отрицательное число, что означает, что объект `a` будет стоять перед объектом `b`.
   - Если `a.age` больше `b.age`, возвращается положительное число, и объект `a` будет стоять после объекта `b`.
   - Если `a.age === b.age`, оба объекта останутся в исходном порядке.
Пример использования:
```javascript
const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
];

const sortedPeople = sortByAge(people);
console.log(sortedPeople);
```
Результат:
```javascript
[
  { name: 'Bob', age: 20 },
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 }
]
```
-----
4. Напишите функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов, которые содержатся только в одном из переданных массивов –
function getUniqueElements(arr1, arr2) {
    const uniqueElements = [];
    arr1.forEach((el) => {
        if (!arr2.includes(el)) {
            uniqueElements.push(el);
        }

    });

    arr2.forEach((el) => {
        if (!arr1.includes(el)) {
            uniqueElements.push(el);
        }
    });
    return uniqueElements;
}
Ваш код для нахождения элементов, которые содержатся только в одном из двух массивов, написан правильно. Он проверяет каждый элемент одного массива на наличие в другом массиве и добавляет его в новый массив, если он не встречается во втором.
Вот ваш код с небольшими улучшениями для повышения эффективности (заменил использование `.includes()` на использование `Set`, чтобы ускорить проверку наличия элемента):
```javascript
function getUniqueElements(arr1, arr2) {
    const set1 = new Set(arr1);  // Создаем Set для быстрого поиска
    const set2 = new Set(arr2);

    const uniqueElements = [];

    arr1.forEach((el) => {
        if (!set2.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    arr2.forEach((el) => {
        if (!set1.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    return uniqueElements;
}
```
Объяснение:
- `Set` — это структура данных, которая хранит уникальные значения и предоставляет эффективные методы для проверки наличия элемента (`has()`), что делает операцию проверки присутствия быстрее, чем использование `.includes()` в массиве.
- Мы сначала создаем два `Set` из массивов `arr1` и `arr2`, а затем используем `has` для проверки, существует ли элемент во втором наборе, что значительно ускоряет работу функции, особенно для больших массивов.
Пример использования:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const result = getUniqueElements(arr1, arr2);
console.log(result);  // [1, 2, 5, 6]
```
Результат: элементы `1`, `2`, `5`, и `6` присутствуют только в одном из массивов.
Альтернативное решение с использованием фильтрации и `concat`:
Для компактности можно использовать методы `.filter()` и `.concat()`:
```javascript
function getUniqueElements(arr1, arr2) {
    const uniqueInArr1 = arr1.filter(el => !arr2.includes(el));
    const uniqueInArr2 = arr2.filter(el => !arr1.includes(el));
    return uniqueInArr1.concat(uniqueInArr2);
}
```
Этот код работает точно так же, но выглядит короче и чище.
-----
5. Напишите функцию, которая принимает число и возвращает его факториал –
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
Ваш код для вычисления факториала числа написан корректно. Это классический подход с использованием цикла для умножения чисел от 1 до `num`. Вот он:
```javascript
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // Умножаем result на текущее число
    }
    return result;
}
```
Объяснение:
1. В случае, если `num` равно 0 или 1, сразу возвращаем 1, так как по определению факториал этих чисел равен 1.
2. В цикле от 2 до `num` умножаем все числа подряд, начиная с 2, на переменную `result`, чтобы получить результат факториала.
Пример использования:
```javascript
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
```
Результат для `factorial(5)` будет 120, так как \( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Альтернативное решение с рекурсией:
Вы можете также вычислить факториал с помощью рекурсивной функции:
```javascript
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    return num * factorial(num - 1); // Рекурсивный вызов для вычисления факториала
}
```
Этот код делает то же самое, но с использованием рекурсии. Он более компактный, но с большими числами может привести к переполнению стека из-за слишком глубоких рекурсивных вызовов.
-----
6. Напишите функцию, которая принимает строку и возвращает количество гласных букв в этой строке –
function countVowels(str) {
    const vowelsPattern = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsPattern.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
Ваше решение для подсчета количества гласных в строке выглядит отлично. Оно правильно проходит по каждому символу строки и проверяет, является ли он гласной, с учетом того, что символы могут быть в разных регистрах.
Вот ваш код:
```javascript
function countVowels(str) {
    const vowelsPattern = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsPattern.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
```
Объяснение:
1. Массив `vowelsPattern` содержит все гласные буквы русского алфавита в нижнем регистре.
2. Мы проходим по каждому символу строки и проверяем, является ли этот символ гласной буквой (с помощью метода `.includes()`).
3. Метод `.toLowerCase()` используется для приведения символов к нижнему регистру, чтобы не зависеть от регистра входной строки.
4. Каждый раз, когда мы находим гласную, увеличиваем счетчик `count`.
Пример использования:
```javascript
console.log(countVowels("Привет, мир!"));  // 3
console.log(countVowels("А я люблю кодить!"));  // 7
console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));  // 0
```
Результат для строки `"Привет, мир!"` будет 3, так как гласные — это "и", "е", "и".
Альтернативное решение с регулярными выражениями:
Можно немного улучшить этот код, используя регулярные выражения для поиска гласных. Это сделает код более компактным:
```javascript
function countVowels(str) {
    const matches = str.toLowerCase().match(/[аеёиоуыэюя]/g);  // Используем регулярное выражение для поиска гласных
    return matches ? matches.length : 0;  // Возвращаем количество найденных гласных
}
```
Объяснение:
- Регулярное выражение `[аеёиоуыэюя]` находит все гласные буквы в строке.
- `str.toLowerCase()` — преобразует строку в нижний регистр перед применением регулярного выражения.
- Метод `.match()` возвращает массив всех найденных гласных или `null`, если гласные не найдены.
- Мы проверяем, существует ли результат, и если да, возвращаем его длину. Если нет, возвращаем 0.
Этот способ более компактный и также хорошо работает. Однако первый вариант с массивом и `.includes()` будет более читаемым, особенно для новичков.
-----
7. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа увеличены на 1 –
function incrementNumbers(arr) {
    return arr.map((num) => num + 1);
}
Ваш код для увеличения всех чисел в массиве на 1 написан правильно и очень лаконично. Использование метода `.map()` идеально подходит для этой задачи, так как он позволяет преобразовать каждый элемент массива и вернуть новый массив с результатами.
Вот ваш код:
```javascript
function incrementNumbers(arr) {
    return arr.map((num) => num + 1);
}
```
Объяснение:
- Метод `.map()` проходит по каждому элементу массива `arr` и выполняет указанную операцию (в данном случае — добавление 1).
- Каждый результат этой операции возвращается в новый массив, который и будет возвращен функцией.
Пример использования:
```javascript
console.log(incrementNumbers([1, 2, 3]));  // [2, 3, 4]
console.log(incrementNumbers([0, -1, 10]));  // [1, 0, 11]
```
Результат для массива `[1, 2, 3]` будет `[2, 3, 4]`, так как каждое число увеличено на 1.
Альтернативное решение с циклом:
Можно также решить задачу с использованием обычного цикла `for`:
```javascript
function incrementNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }
    return result;
}
```
Этот способ также работает, но требует больше кода. Метод `.map()` является более современным и предпочтительным для подобных задач, так как делает код более читаемым и функциональным.
-----
8. Напишите функцию, которая принимает две строки и возвращает true, если одна строка является анаграммой другой (имеют одинаковые символы, но в разном порядке) –
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
Ваш код для проверки, являются ли две строки анаграммами, написан правильно и эффективно. В нем используется метод сортировки строк, который упорядочивает символы, чтобы затем сравнить их. Если строки являются анаграммами, их отсортированные версии будут одинаковыми.
Вот ваш код:
```javascript
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
```
Объяснение:
1. `str1.split('')` — разделяет строку на массив символов.
2. `.sort()` — сортирует массив символов в алфавитном порядке.
3. `.join('')` — соединяет отсортированные символы обратно в строку.
4. Затем сравниваются отсортированные строки `sortedStr1` и `sortedStr2`. Если они одинаковы, значит, строки являются анаграммами.
Пример использования:
```javascript
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));    // false
console.log(isAnagram('evil', 'vile'));      // true
```
Результат:
- Для строк `'listen'` и `'silent'` функция вернет `true`, так как они являются анаграммами.
- Для строк `'hello'` и `'world'` функция вернет `false`, так как они не имеют одинаковых символов.
Возможные улучшения:
Этот метод хорошо работает для строк, состоящих только из букв, но можно улучшить его, чтобы он игнорировал пробелы, заглавные буквы и другие символы (например, для более универсальной проверки). Вот улучшенная версия:
```javascript
function isAnagram(str1, str2) {
    const normalize = (str) => str.toLowerCase().replace(/[^a-zа-я]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
```
Объяснение:
1. `toLowerCase()` — приводит обе строки к нижнему регистру, чтобы избежать проблем с различием в регистре.
2. `.replace(/[^a-zа-я]/g, '')` — удаляет все символы, которые не являются буквами (например, пробелы, знаки препинания и цифры).
3. После этого строки приводятся к нормализованному виду, сортируются и сравниваются.
Пример использования улучшенной версии:
```javascript
console.log(isAnagram('Astronomer', 'Moon starer'));  // true
console.log(isAnagram('The eyes', 'They see'));       // true
```
Это решение будет работать с пробелами и различным регистром символов.
-----
9. Напишите функцию, которая принимает массив чисел и возвращает самое большое число из массива –
function getMaxNumber(arr) {
    return Math.max(...arr);
}
Ваше решение для нахождения самого большого числа в массиве правильно и эффективно использует метод `Math.max()` в сочетании с оператором расширения (`...`), который разворачивает массив в отдельные аргументы функции.
Вот ваш код:
```javascript
function getMaxNumber(arr) {
    return Math.max(...arr);
}
```
Объяснение:
1. Оператор `...` (spread) разворачивает массив `arr` в отдельные значения, которые передаются в функцию `Math.max()`.
2. `Math.max()` возвращает наибольшее число среди переданных аргументов.
Пример использования:
```javascript
console.log(getMaxNumber([1, 2, 3, 4, 5]));  // 5
console.log(getMaxNumber([-10, -5, 0, 10])); // 10
console.log(getMaxNumber([100, 200, 300]));  // 300
```
Результат:
- Для массива `[1, 2, 3, 4, 5]` функция вернет 5, так как это самое большое число в массиве.
- Для массива `[-10, -5, 0, 10]` функция вернет 10, так как это наибольшее число.
Альтернативное решение с использованием цикла:
Если по каким-то причинам вы не хотите использовать `Math.max()` с оператором `...`, можно найти максимальное число вручную с помощью цикла:
```javascript
function getMaxNumber(arr) {
    let max = arr[0];  // Начинаем с первого элемента массива
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  // Обновляем max, если текущий элемент больше
        }
    }
    return max;
}
```
Этот способ также работает, но он немного длиннее и менее элегантен по сравнению с использованием `Math.max()`.
Пример использования:
```javascript
console.log(getMaxNumber([1, 2, 3, 4, 5]));  // 5
console.log(getMaxNumber([-10, -5, 0, 10])); // 10
```
Этот подход тоже вернет правильный результат, но для большинства случаев метод с `Math.max()` более предпочтителен из-за его краткости и понятности.
-----
10. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых имеется свойство “name” –
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
Ваш код для фильтрации объектов, содержащих свойство `"name"`, правильный и эффективный. Он использует метод `.filter()`, чтобы создать новый массив, в котором будут только те объекты, у которых есть это свойство. Метод `hasOwnProperty()` проверяет, имеется ли у объекта непосредственно свойство `"name"` (не наследуемое от прототипа).
Вот ваш код:
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
```
Объяснение:
1. `.filter()` — создает новый массив, состоящий из элементов, которые проходят проверку в предоставленной функции.
2. `obj.hasOwnProperty('name')` проверяет, имеет ли объект `obj` свойство `name`. Если да, объект остается в новом массиве.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Результат:
- В новом массиве будут только те объекты, которые имеют свойство `"name"`, а объекты без этого свойства будут исключены.
Альтернативное решение:
Вместо метода `hasOwnProperty()` можно использовать просто проверку существования свойства (если вам не нужно исключать наследуемые свойства):
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.name !== undefined);
}
```
Это также будет работать, если свойство `"name"` в объекте определено, даже если оно имеет значение `undefined`. Однако, если вам нужно точно проверять только собственные свойства объекта, то вариант с `hasOwnProperty()` является более надежным.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Оба подхода дадут одинаковый результат. Выбор зависит от того, нужно ли вам точно проверять только собственные свойства или можно учитывать и значения `undefined`.
---------------------
⋙ ❍ Развернуть массив без .reverse(): ?
---
Чтобы развернуть массив в JavaScript без использования метода `.reverse()`, можно использовать цикл:
1: С помощью цикла `for`
```javascript
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
2: С использованием метода `reduce`
```javascript
function reverseArray(arr) {
    return arr.reduce((reversed, item) => [item, ...reversed], []);
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
3: Обмен значений местами внутри исходного массива
Если нужно развернуть массив на месте, без создания нового:
```javascript
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Обмен значений
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

let original = [1, 2, 3, 4, 5];
reverseArrayInPlace(original);

console.log(original); // [5, 4, 3, 2, 1]
```
Выбирайте метод в зависимости от ваших задач: создание нового массива или изменение исходного.
---------------------
⋙ ❍ Отфильтровать falsy значения: ?
---
Чтобы отфильтровать falsy значения в массиве JavaScript, можно использовать метод `.filter()` и передать в него встроенную функцию, которая проверяет истинность значений.
Falsy значения в JavaScript:
- `false`
- `0`
- `""` (пустая строка)
- `null`
- `undefined`
- `NaN`

Пример кода:
```javascript
const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];

const filteredArray = array.filter(Boolean);

console.log(filteredArray); // [1, 2, 3, 4]
```
Почему это работает?
- Функция `Boolean` приводит каждый элемент массива к булевому значению.
- Все truthy значения (`true`, ненулевые числа, непустые строки, объекты и т.д.) остаются в массиве.
- Все falsy значения исключаются.
Если хотите фильтровать без встроенной функции `Boolean`, можно использовать явную проверку:
```javascript
const filteredArray = array.filter(value => value);

console.log(filteredArray); // [1, 2, 3, 4]
```
---------------------------------------------------------------------------------------------
📌 [РЕАЛЬНЫЕ ЗАДАЧИ JUNIOR]:
---------------------
⋙ ❍ Как показать пользователю уведомление о том, что в его браузере не включен javascript ?
---
Чтобы показать пользователю уведомление о том, что в его браузере JavaScript отключен, вы можете использовать тег `<noscript>` в HTML для вывода сообщения, которое будет видно только в случае отключенного JavaScript. Вот пример:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уведомление о JavaScript</title>
    <style>
        .noscript-message {
            display: none; /* Скрываем по умолчанию */
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
    <script>
        // Скрываем сообщение, если JavaScript включен
        document.addEventListener('DOMContentLoaded', function() {
            var noscriptMessage = document.querySelector('.noscript-message');
            noscriptMessage.style.display = 'none';
        });
    </script>
</head>
<body>
    <!-- Сообщение для отключенного JavaScript -->
    <noscript class="noscript-message">
        <p>JavaScript отключен в вашем браузере. Для корректной работы этого сайта, вам необходимо включить JavaScript.</p>
    </noscript>

    <!-- Ваш контент здесь -->
    <h1>Добро пожаловать на сайт!</h1>
    <p>Здесь ваш контент.</p>
</body>
</html>
```
Этот код покажет уведомление в теге `<noscript>`, если JavaScript отключен в браузере пользователя. Когда JavaScript включен, это сообщение будет скрыто.
/Чтобы показать пользователю уведомление о том, что в его браузере не включен JavaScript, можно использовать тег `<noscript>` в HTML. Этот тег используется для предоставления контента, который будет отображаться только в случае, если JavaScript отключен или не поддерживается. Вот пример:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уведомление о JavaScript</title>
</head>
<body>
    <noscript>
        <div style="background-color: #f8d7da; color: #721c24; padding: 10px;">
            Для корректной работы этого сайта необходимо включить JavaScript в вашем браузере.
        </div>
    </noscript>
    <div id="app">
        <!-- Содержимое вашего приложения -->
    </div>
    <!-- Ваши скрипты JavaScript -->
</body>
</html>
```
Этот код покажет сообщение "Для корректной работы этого сайта необходимо включить JavaScript в вашем браузере", если JavaScript отключен или не поддерживается в браузере пользователя.
---------------------
⋙ ❍ Как получить текущий URL ?
---
В браузерной среде JavaScript можно получить текущий URL с помощью объекта `window.location`. Вот несколько способов получения текущего URL:
1. window.location.href: Это свойство возвращает полный URL текущей страницы в виде строки.
```javascript
var currentUrl = window.location.href;
console.log(currentUrl);
```
2. window.location.toString(): Этот метод возвращает текущий URL в виде строки.
```javascript
var currentUrl = window.location.toString();
console.log(currentUrl);
```
3. window.location.pathname: Это свойство возвращает часть URL после домена (т.е. путь к текущему ресурсу).
```javascript
var pathName = window.location.pathname;
console.log(pathName);
```
4. window.location.origin: Это свойство возвращает протокол, хост и порт текущего URL.
```javascript
var origin = window.location.origin;
console.log(origin);
```
Каждый из этих способов позволяет получить различные части текущего URL в зависимости от потребностей вашего приложения.
---------------------
⋙ ❍ Как проверить, что переменная не является неопределенной? Как проверить, что свойство существует в объекте ?
---
Чтобы проверить, что переменная не является неопределенной (undefined), можно использовать условное выражение с оператором строгого сравнения (===) или оператором typeof. Вот примеры:
1. Оператор typeof:
```javascript
if (typeof myVar !== 'undefined') {
    // myVar не является неопределенной
    console.log('Переменная определена');
} else {
    console.log('Переменная неопределена');
}
```
2. Оператор строгого сравнения (===):
```javascript
if (myVar !== undefined) {
    // myVar не является неопределенной
    console.log('Переменная определена');
} else {
    console.log('Переменная неопределена');
}
```
Чтобы проверить, что свойство существует в объекте, можно использовать оператор in или метод hasOwnProperty(). Вот примеры:
1. Оператор in:
```javascript
if ('propertyName' in myObject) {
    // Свойство существует в объекте
    console.log('Свойство существует');
} else {
    console.log('Свойство не существует');
}
```
2. Метод hasOwnProperty():
```javascript
if (myObject.hasOwnProperty('propertyName')) {
    // Свойство существует в объекте
    console.log('Свойство существует');
} else {
    console.log('Свойство не существует');
}
```
В обоих случаях, если свойство 'propertyName' существует в объекте myObject, будет выполнен блок кода внутри условия, иначе будет выполнен блок кода после else.
---------------------
⋙ ❍ Написать простую функцию, чтобы проверить, является ли число целым?
---
Вот пример простой функции на JavaScript, которая проверяет, является ли число целым:
```javascript
function isInteger(number) {
    return Number.isInteger(number);
}

// Пример использования:
console.log(isInteger(5)); // true
console.log(isInteger(3.14)); // false
```
Эта функция использует метод `Number.isInteger()`, который возвращает `true`, если переданное значение является целым числом, и `false` в противном случае.
---------------------
⋙ ❍ Как остановить функцию setInterval?
---
Чтобы остановить выполнение функции, запущенной с помощью `setInterval()` в JavaScript, можно использовать функцию `clearInterval()`. Эта функция принимает идентификатор интервала, который был возвращен при вызове `setInterval()`, и останавливает выполнение соответствующего интервала. Вот пример:
```javascript
// Запуск функции с интервалом 1 секунда
let intervalId = setInterval(function() {
    console.log('Функция выполняется каждую секунду');
}, 1000);

// Через 5 секунд остановить выполнение функции
setTimeout(function() {
    clearInterval(intervalId); // Остановить выполнение функции с интервалом
    console.log('Функция остановлена');
}, 5000);
```
В этом примере, после запуска функции с помощью `setInterval()`, ее выполнение останавливается через 5 секунд с помощью `clearInterval()` и идентификатора интервала `intervalId`.
---------------------
⋙ ❍ Что такое функция имени в JavaScript и как ее определить?
---
Именованная функция в JavaScript - это функция, имеющая определенный идентификатор. Он определяется с помощью ключевого слова `function`, за которым следует название функции и параметры, если таковые имеются. Вот краткий пример:
/Именованные функции полезны для организации кода, удобства чтения и повторного использования. Они могут быть определены в любом месте вашего кода JavaScript, а их имена привязаны к содержащему их блоку или функции, что делает их доступными в пределах этой области.
``
функция javascript functionName(параметры) {
  // Функциональный орган
}
```
Например:
``
функция javascript получает(имя) {
  возвращает "Привет", "+ имя + "!";
}
```
Затем вы можете вызвать эту функцию по ее имени, например, так: "great("Джон")`.
--------------------------------------------------------------------------------------------
📌 [Правильные ответы на задачи JUNIOR]:
---------------------
⋙ ❍ Разница в уровне охвата ?
Var – Оператор переменных JavaScript используется для объявления переменной и, при желании, мы можем инициализировать значение этой переменной.
var a = 10;
Объявления переменных обрабатываются перед выполнением кода.
Const – идея константных функций не позволяет им изменять объект, для которого они вызываются. Когда функция объявлена ​​как const, ее можно вызывать для любого типа объекта.
Let – это сигнал о том, что переменная может быть переназначена, например, счетчик в цикле или замена значения в алгоритме. Он также сигнализирует, что переменная будет использоваться только в блоке, в котором она определена.
-----
⋙ ❍ Показать пользователю уведомление о том, что в его браузере не включен JavaScript ?
<noscript>Your browser does not support JavaScript!</noscript>
-----
⋙ ❍ Библиотеки следует добавлять раньше, чем скрипты, которые их используют ?
Например, следующий фрагмент приведет к ошибке «Uncaught ReferenceError: jQuery is not defined»
<script src="js/jquery.easing.js"></script>
<script src="js/jquery.js"></script>
-----
⋙ ❍ Получить текущий URL ?
window.location.href
document.URL
-----
⋙ ❍ Проверить, что переменная не является неопределенной, что свойство существует в объекте ?
 if (typeof someVar !== "undefined") {
    // делаем что-то
}
проверяем свойство с наследованием
if ('someProperty' in object) {
    // делаем что-то
}
проверяем свойство без наследования
if (object.hasOwnProperty('someProperty')) {
    // делаем что-то
}
-----
⋙ ❍ Функция, чтобы проверить, является ли число целым ?
function verifyInt(num) {
  return num % 1 === 0;
}
Функция `verifyInt`, представленная вами, корректно проверяет, является ли число целым, используя операцию остатка от деления. Однако можно рассмотреть также другие способы выполнения этой проверки. Давайте сначала посмотрим на вашу функцию, а затем на альтернативные варианты.
Ваша функция
```javascript
function verifyInt(num) {
  return num % 1 === 0;
}
```
Эта функция возвращает `true`, если остаток от деления числа `num` на `1` равен `0`, что означает, что `num` является целым числом. Это работает, потому что для любого целого числа остаток от деления на 1 всегда будет равен 0.
Альтернативные способы проверки
1. Использование `Number.isInteger`:
   Встроенный метод `Number.isInteger` в JavaScript проверяет, является ли значение целым числом.
 ```javascript
 function verifyInt(num) {
   return Number.isInteger(num);
 }
 ```
2. Использование метода `Math.floor`:
   Если число равно его целой части, то оно является целым числом.
 ```javascript
 function verifyInt(num) {
   return Math.floor(num) === num;
 }
 ```
3. Сравнение с приведенным к целому числу значением:
   Использование побитового оператора НЕ (`~~`) или метода `parseInt`.
 ```javascript
 function verifyInt(num) {
   return ~~num === num;
 }
 ```
Или
 ```javascript
 function verifyInt(num) {
   return parseInt(num, 10) === num;
 }
 ```
Каждый из этих методов имеет свои преимущества, но все они проверяют одно и то же условие — является ли число целым. В реальных приложениях рекомендуется использовать встроенные методы, такие как `Number.isInteger`, так как они наиболее читаемы и понятны.
Полный код с альтернативами
Вот несколько реализаций функции проверки целого числа:
```javascript
Вариант 1: Ваш метод с использованием остатка от деления
function verifyInt(num) {
  return num % 1 === 0;
}
Вариант 2: Использование Number.isInteger
function verifyInt(num) {
  return Number.isInteger(num);
}
Вариант 3: Использование Math.floor
function verifyInt(num) {
  return Math.floor(num) === num;
}
Вариант 4: Использование побитового оператора НЕ
function verifyInt(num) {
  return ~~num === num;
}
Вариант 5: Использование parseInt
function verifyInt(num) {
  return parseInt(num, 10) === num;
}
```
Вы можете выбрать любой из этих методов в зависимости от ваших предпочтений и требований вашего проекта.
-----
⋙ ❍ Остановить функцию setInterval ?
повторяем с интервалом в 1 секунду
let intervalId = setInterval(() => console.log('tick'), 1000);
остановимся через 10 секунд
setTimeout(() => { clearInterval(intervalId); console.log('stop'); }, 10000);
-----
⋙ ❍ Список примитивных типов ?
Тип числа представляет как целые числа, так и числа с плавающей запятой.
Тип строки должен быть заключен в кавычки.
Логический тип имеет только два значения: true и false.
-----
⋙ ❍ Функция имени ?
Именованная функция объявляет имя, как только оно определено. Ее можно определить с помощью ключевого слова функции как:
function named(){
write code here
}
Именованные функции определяются с помощью ключевого слова `function`, за которым следует имя функции. Вот пример именованной функции:
```javascript
function named() {
    // Код функции
}
```
Имя функции (`named` в этом случае) является идентификатором, который можно использовать для вызова функции из других частей кода, а также для рекурсивных вызовов функции (если необходимо).
/Вот пример определения именованной функции с использованием ключевого слова `function`:
```javascript
function named(){
    console.log("This is a named function");
}
```
Этот код определяет именованную функцию с именем `named`, которая просто выводит сообщение в консоль. После определения функции вы можете вызвать ее по имени, например:
```javascript
named(); // Вызовет функцию и выведет "This is a named function" в консоль
---------------------------------------------------------------------------------------------
📌 [ПРАКТИЧЕСКИЕ РЕАЛЬНЫЕ ЗАДАНИЯ / LIFECODING]:
---------------------
⋙ ❍ Расскажите, какие есть способы копирования простого объекта типа obj = {a: 1, b: 2, c: 3}?
---
1. Присваивание объекта:
Простейший способ - это просто присвоить объект другой переменной. Это создаст ссылку на существующий объект, а не его копию.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = original; // Это создает ссылку на тот же самый объект, а не его копию
```
2. Object.assign():
Метод `Object.assign()` используется для копирования значений всех перечисляемых свойств из одного или нескольких исходных объектов в целевой объект.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = Object.assign({}, original);
```
3. Spread оператор (...) (ES6):
Оператор распространения (spread operator) позволяет раскрыть элементы массива или объекта.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = {...original};
```
4. JSON.parse() и JSON.stringify():
Другой способ - использовать `JSON.stringify()` для преобразования объекта в строку JSON, а затем `JSON.parse()` для преобразования обратно в объект.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = JSON.parse(JSON.stringify(original));
```
Все эти методы копируют объект `{a: 1, b: 2, c: 3}`, но у каждого из них есть свои особенности. Например, присваивание объекта и `Object.assign()` создают поверхностную копию, тогда как распространение объекта и использование `JSON.stringify()` и `JSON.parse()` создают глубокую копию.
---------------------
⋙ ❍ Напишите deep clone для объекта?
---
Вот пример реализации глубокого клонирования объекта в JavaScript:
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Возвращаем простые типы данных и null как есть
  }

  let clone;

  // Обрабатываем массивы
  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
    return clone;
  }

  // Обрабатываем объекты
  clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// Пример использования:
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'running']
};

const cloned = deepClone(original);
console.log(cloned);
```
Этот код рекурсивно обходит объект и его свойства, создавая копии каждого вложенного объекта и массива. Таким образом, функция `deepClone()` создает глубокую копию исходного объекта.
---------------------
⋙ ❍ Назовите различные способы, как поменять местами значения двух переменных?
---
Есть несколько способов поменять местами значения двух переменных в JavaScript.
1. С использованием временной переменной:
```javascript
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b); // 10, 5
```
2. С помощью деструктуризации массива:
```javascript
let a = 5;
let b = 10;

[b, a] = [a, b];

console.log(a, b); // 10, 5
```
3. С помощью арифметических операций (подходит только для числовых значений):
```javascript
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // 10, 5
```
4. С использованием оператора XOR (исключающее ИЛИ) для логического обмена (подходит только для числовых значений):
```javascript
let a = 5;
let b = 10;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, b); // 10, 5
```
Все эти способы достигают одного и того же результата: значения переменных `a` и `b` меняются местами. Выбор конкретного метода может зависеть от контекста и типов данных, с которыми вы работаете.
---------------------
⋙ ❍ Менеджер попросил в задаче поменять статусы с «active, inactive» на «active, removed», но в коде фигурируют только цифры и непонятно, какой статус соответствует какой цифре. Как помочь будущим программистам не лезть в документацию по коду (Вопрос ставят на конкретном примере с кодом)?
---
Чтобы помочь будущим программистам легко понять, какая цифра соответствует какому статусу, вы можете использовать объект или Map для создания соответствия между цифрами и статусами. Вот пример, как это можно сделать:
```javascript
const statusMap = {
  1: 'active',
  0: 'removed'
};

// Пример использования:
const status = 1;
console.log(statusMap[status]); // 'active'
```
В этом примере `statusMap` - это объект, который сопоставляет цифры со строковыми статусами. Таким образом, если программист видит число в коде, он может легко определить, какому статусу оно соответствует, обратившись к `statusMap`. Это делает код более читаемым и понятным без необходимости обращаться к документации.
---------------------
⋙ ❍ Нужно сделать минипроект — список пользователей с формой создания/редактирования пользователя:?
---
- Для хранения пользователей используйте Firebase (это бесплатно).
- Для стилизации используйте Bootstrap.
- Минимальный набор полей пользователя:
- имя;
- фамилия;
- электронная почта;
- телефон (в формате +380 (XX) XXX-XX-XX)
- дата рождения;
- будет плюсом добавление аватара и возможность crop-картинки.
- Список пользователей должен иметь возможность фильтрации и пагинацию.
- Проект должен содержать README-файл с шагами для запуска.
---------------------
⋙ ❍ Реализуйте асинхронный метод filter для Array (должны работать await)?
---
Вот пример реализации асинхронного метода `filterAsync()` для массива, который позволяет использовать `await`:
```javascript
Array.prototype.filterAsync = async function(predicate) {
  const results = await Promise.all(this.map(async (element, index, array) => {
    const result = await predicate(element, index, array);
    return { element, result };
  }));
  return results.filter(({ result }) => result).map(({ element }) => element);
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];

async function isEven(value) {
  return value % 2 === 0;
}

(async () => {
  const filtered = await arr.filterAsync(isEven);
  console.log(filtered); // [2, 4]
})();
```
В этой реализации метод `filterAsync()` принимает асинхронный предикат (`predicate`), который возвращает промис с булевым значением. Он применяет предикат к каждому элементу массива с помощью метода `map()`, а затем собирает результаты с помощью `Promise.all()`. После этого он фильтрует результаты и возвращает массив отфильтрованных элементов, для которых предикат возвращает `true`.
---------------------
⋙ ❍ Реализуйте функцию reduce с помощью рекурсии?
---
Вот пример реализации функции `reduce()` с использованием рекурсии:
```javascript
function reduce(arr, callback, initialValue) {
  // Проверка наличия начального значения
  if (initialValue !== undefined) {
    return reduceHelper(arr, callback, initialValue, 0);
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    return reduceHelper(arr.slice(1), callback, arr[0], 1);
  }
}

function reduceHelper(arr, callback, accumulator, index) {
  // Базовый случай: если индекс достиг длины массива, возвращаем аккумулятор
  if (index === arr.length) {
    return accumulator;
  }
  // Рекурсивный случай: применяем функцию callback к текущему элементу и результату предыдущего вызова
  const newAccumulator = callback(accumulator, arr[index], index, arr);
  // Рекурсивный вызов с обновленными значениями
  return reduceHelper(arr, callback, newAccumulator, index + 1);
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const sum = reduce(arr, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
```
Эта реализация `reduce()` работает как стандартный метод `reduce()`. Она принимает массив, функцию обратного вызова и (опционально) начальное значение аккумулятора. Рекурсивная функция `reduceHelper()` обходит массив, применяя функцию обратного вызова к каждому элементу и обновляя аккумулятор на каждом шаге.
---------------------
⋙ ❍ Как можно было бы сделать toggle-компонент, как в iPhone, без использования JS?
---
Вы можете реализовать toggle-компонент, подобный тому, что используется в iPhone, с помощью HTML и CSS, без использования JavaScript. Для этого можно воспользоваться элементами формы и псевдоклассами CSS для изменения внешнего вида в зависимости от состояния переключателя. Вот пример такой реализации:
```html
<input type="checkbox" id="toggle" class="toggle-checkbox">
<label for="toggle" class="toggle-label"></label>
```

```css
.toggle-checkbox {
  display: none; /* Скрываем фактический переключатель */
}

.toggle-label {
  display: inline-block;
  width: 50px; /* Размер переключателя */
  height: 30px;
  background-color: #ccc; /* Цвет фона */
  border-radius: 15px; /* Округление краев */
  position: relative;
  cursor: pointer;
}

.toggle-label::before {
  content: '';
  display: block;
  width: 26px; /* Размер ползунка */
  height: 26px;
  background-color: #fff; /* Цвет ползунка */
  border-radius: 50%; /* Округление краев ползунка */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px; /* Начальное положение ползунка */
  transition: left 0.2s; /* Анимация при изменении состояния */
}

.toggle-checkbox:checked + .toggle-label::before {
  left: calc(100% - 28px); /* Положение ползунка в положении "включено" */
}
```
Этот код создает стилизованный переключатель, который изменяет свое состояние при щелчке на него. При этом используются скрытый фактический чекбокс и псевдоэлементы CSS для создания внешнего вида переключателя и его ползунка.
---------------------
⋙ ❍ Напишите функцию Sleep (ms), останавливающую выполнение async-функции на заданный промежуток времени?
---
Для реализации функции `sleep(ms)` в асинхронном контексте можно воспользоваться промисами и функцией `setTimeout()`, чтобы приостановить выполнение асинхронной функции на определенное количество миллисекунд. Вот пример реализации этой функции:
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Пример использования:
async function example() {
  console.log('Начало выполнения');
  await sleep(2000); // Приостанавливаем выполнение на 2 секунды
  console.log('Прошло 2 секунды');
}

example();
```
Эта функция `sleep(ms)` возвращает промис, который будет выполнен после указанного количества миллисекунд. При использовании в асинхронной функции с помощью `await` выполнение будет приостановлено до завершения указанного времени.
---------------------
⋙ ❍ Реализуйте один из методов массива (например, splice)?
---
`splice()` позволяет изменять содержимое массива, удаляя существующие элементы и/или добавляя новые элементы на их место. Вот простая реализация этого метода:
```javascript
Array.prototype.customSplice = function(start, deleteCount, ...items) {
  // Проверка наличия параметра start
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }

  const deletedItems = [];

  // Удаление элементов из массива
  const removeCount = Math.min(deleteCount, this.length - start);
  for (let i = 0; i < removeCount; i++) {
    const index = start + i;
    deletedItems.push(this[index]);
    // Сдвигаем все элементы после удаленного налево
    for (let j = index; j < this.length - 1; j++) {
      this[j] = this[j + 1];
    }
    // Удаляем последний элемент
    this.length--;
  }

  // Добавление новых элементов в массив
  const len = this.length;
  const numNewElements = items.length;
  const numMoveElements = len - start;
  this.length = len + numNewElements - removeCount;
  for (let i = len - 1; i >= start; i--) {
    this[i + numNewElements - removeCount] = this[i];
  }
  for (let i = 0; i < numNewElements; i++) {
    this[start + i] = items[i];
  }

  return deletedItems;
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const deleted = arr.customSplice(2, 2, 'a', 'b', 'c');
console.log('Массив после splice:', arr); // [1, 2, "a", "b", "c", 5]
console.log('Удаленные элементы:', deleted); // [3, 4]
```
Эта реализация `customSplice()` принимает три аргумента: `start` (индекс, с которого начинается удаление/вставка), `deleteCount` (количество удаляемых элементов) и `items` (элементы для вставки). Метод изменяет исходный массив и возвращает массив удаленных элементов.
---------------------
⋙ ❍ Напишите функцию с RegExp для нахождения всех HTML-ссылок в строке?
---
Для нахождения всех HTML-ссылок в строке можно использовать регулярное выражение, которое будет соответствовать шаблону HTML-ссылки. Вот пример функции с регулярным выражением для этой задачи:
```javascript
function findHTMLLinks(text) {
  const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
  const links = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    links.push(match[1]);
  }

  return links;
}

// Пример использования:
const text = '<a href="https://example.com">Example</a> <a href="https://google.com">Google</a>';
const links = findHTMLLinks(text);
console.log(links); // ["https://example.com", "https://google.com"]
```
Это регулярное выражение ищет все совпадения с шаблоном HTML-ссылки в тексте. Затем функция извлекает значения атрибута `href` из каждого совпадения и добавляет их в массив `links`.
---------------------
⋙ ❍ Реализуйте функцию, которая исполнит callback для всех элементов определенной ветви DOM-дерева?
---
Для выполнения этой задачи можно использовать рекурсивный обход DOM-дерева, чтобы найти все элементы ветви и вызвать callback для каждого из них. Вот пример реализации такой функции:
```javascript
function executeCallbackForBranch(rootElement, callback) {
  // Функция для рекурсивного обхода DOM-дерева
  function traverse(element) {
    // Вызываем callback для текущего элемента
    callback(element);

    // Рекурсивно обходим дочерние элементы
    for (let i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  // Начинаем обход с корневого элемента
  traverse(rootElement);
}

// Пример использования:
// Предположим, у нас есть корневой элемент #root
const rootElement = document.getElementById('root');

// Callback функция, которая добавляет класс "highlight" к каждому элементу
function highlightElement(element) {
  element.classList.add('highlight');
}

// Вызываем функцию для выполнения callback для всех элементов ветви
executeCallbackForBranch(rootElement, highlightElement);
```
Этот код рекурсивно обходит все дочерние элементы начиная с заданного корневого элемента `rootElement` и вызывает переданный `callback` для каждого элемента ветви. В данном примере `highlightElement` добавляет класс "highlight" к каждому найденному элементу.
---------------------
⋙ ❍ Реализуйте таблицу с виртуальным скроллом?
---
Для создания таблицы с виртуальным скроллом в React можно воспользоваться библиотеками или реализовать это самостоятельно. Вот пример простой реализации таблицы с виртуальным скроллом без использования сторонних библиотек:
```javascript
import React, { useState, useEffect, useRef } from 'react';

const VirtualizedTable = ({ data, rowHeight, visibleRowCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const tableRef = useRef();

  const handleScroll = () => {
    const scrollTop = tableRef.current.scrollTop;
    const startIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(startIndex);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
      return () => {
        tableRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const visibleData = data.slice(startIndex, startIndex + visibleRowCount);

  return (
    <div style={{ height: `${rowHeight * visibleRowCount}px`, overflow: 'auto' }} ref={tableRef}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VirtualizedTable;
```
Этот компонент принимает данные `data`, высоту строки `rowHeight` и количество видимых строк `visibleRowCount`. Он использует состояние для отслеживания индекса начальной строки, а затем рендерит только видимые строки на основе этого индекса и количества видимых строк. Когда пользователь прокручивает таблицу, обработчик `handleScroll` обновляет начальный индекс в соответствии с положением прокрутки.
---------------------
⋙ ❍ Реализуйте функцию преобразования URL query строки в JSON?
---
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
function queryObjectify(arg) {
// ??
}
queryObjectify(inData)
/* Результатом выполнения для входной строки должен быть следующий объект
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};
*/
Для преобразования URL-запроса в JSON можно использовать циклы и разбиение строки на подстроки. Вот один из способов реализации этой функции:
```javascript
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
    const result = {};

    // Разбить строку по символу '&', чтобы получить отдельные пары ключ-значение
    const pairs = arg.split('&');

    pairs.forEach(pair => {
        // Разбить каждую пару по символу '=', чтобы получить ключ и значение
        const [key, value] = pair.split('=');

        // Разделить ключ на уровни объекта и создать структуру JSON
        const keys = key.split('.');

        let current = result;
        keys.forEach((key, index) => {
            // Проверить, существует ли уже объект с этим ключом
            if (!current[key]) {
                // Если объект не существует, создать новый объект или массив
                current[key] = index === keys.length - 1 ? decodeURIComponent(value) : {};
            }
            // Перейти к следующему уровню объекта
            current = current[key];
        });
    });

    return result;
}

console.log(queryObjectify(inData));
```
Эта функция разбивает URL-запрос на отдельные пары ключ-значение, затем разбивает каждую пару на ключи и значения. Далее она создает структуру JSON, соответствующую ключам и значениям. При этом значения URL-кодируются с помощью `decodeURIComponent()`, чтобы преобразовать закодированные символы (%20 и др.) обратно в их исходное представление.
---------------------
⋙ ❍ Реализуйте функцию поиска пересечения двух массивов?
---
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
function intersection (a, b) {
// ??
}
intersection(first, second) // -> [3, 4]
Для поиска пересечения двух массивов можно воспользоваться методом `filter()`, который позволяет отфильтровать элементы массива на основе определенного условия. Вот как можно реализовать функцию поиска пересечения двух массивов:
```javascript
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
    // Отфильтровать элементы первого массива, оставив только те, которые также присутствуют во втором массиве
    return a.filter(item => b.includes(item));
}

console.log(intersection(first, second)); // -> [3, 4]
```
Эта функция принимает два массива в качестве аргументов и возвращает новый массив, содержащий элементы, которые присутствуют и в первом, и во втором массиве.
---------------------
⋙ ❍ Реализуйте функцию/класс для генерации HTML?
---
const HTMLConstruct = {};
HTMLConstruct.span('foo'); // -> <span>foo</span>
HTMLConstruct.div.span('bar'); // -> <div><span>bar</span></div>
HTMLConstruct.div.p(
HTMLConstruct.span('bar'),
HTMLConstruct.div.span('baz')
);
-> <div><p><span>bar</span><span>baz</span></p></div>
Для генерации HTML-кода в JavaScript можно создать класс, который будет представлять HTML-элемент и предоставлять методы для добавления атрибутов, вложенных элементов и получения итогового HTML-кода. Это позволит динамически создавать и управлять HTML-структурами в вашем приложении.
Ниже представлен пример такого класса:
```javascript
class HTMLElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.attributes = {};
    this.children = [];
    this.selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  toString() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    const isSelfClosing = this.selfClosingTags.includes(this.tagName);
    const childrenHTML = this.children.map(child => child.toString()).join('');
    return isSelfClosing
      ? `<${this.tagName}${attrs} />`
      : `<${this.tagName}${attrs}>${childrenHTML}</${this.tagName}>`;
  }
}
```
Пример использования:
```javascript
// Создаем элемент <div>
const div = new HTMLElement('div');
div.setAttribute('class', 'container');

// Создаем вложенный элемент <p>
const paragraph = new HTMLElement('p');
paragraph.setAttribute('class', 'text');
paragraph.appendChild({
  toString: () => 'Привет, мир!'
});

// Добавляем <p> как дочерний элемент <div>
div.appendChild(paragraph);

// Получаем итоговый HTML
console.log(div.toString());
```
В результате выполнения этого кода в консоли будет выведено:
```html
<div class="container"><p class="text">Привет, мир!</p></div>
```
Объяснение:
- Конструктор `constructor(tagName)`: Инициализирует новый элемент с заданным тегом, пустыми атрибутами и дочерними элементами.
- Метод `setAttribute(name, value)`: Устанавливает атрибут для элемента.
- Метод `appendChild(child)`: Добавляет дочерний элемент. Дочерний элемент должен иметь метод `toString`, который возвращает его HTML-представление.
- Метод `toString()`: Генерирует HTML-код для элемента, включая его атрибуты и дочерние элементы. Учитывает самозакрывающиеся теги.
Этот подход позволяет программно создавать сложные HTML-структуры, управлять их атрибутами и вложенностью, что особенно полезно при динамическом формировании контента на стороне клиента.
---------------------------------------------------------------------------------------------
📌 [РЕАЛЬНЫЕ ЗАДАЧИ MIDDLE ИЗ РАЗНЫХ КОМПАНИЙ]:
---------------------
⋙ ❍ Что выведет консоль?
---
console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 500);
console.log(4);
1
2
3
4
console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 500);
console.log(4);
Первый вызов `console.log(1);` будет сразу же выведен, затем код продолжит выполнение.
Далее, второй `console.log(2)` будет выведен через 1000 миллисекунд (1 секунда), так как он установлен с помощью `setTimeout` на 1000 миллисекунд.
Третий `console.log(3)` будет выведен через 500 миллисекунд, так как он установлен с помощью `setTimeout` на 500 миллисекунд.
Наконец, `console.log(4);` будет выведен после первого `console.log(2)` и второго `console.log(3)`, потому что он идет сразу после них.
Таким образом, вывод будет:
```
1
4
3
2
```
---------------------
⋙ ❍ Что выведет консоль?
---
console.log(0.1 + 0.2 == 0.3)
1
console.log(0.1 + 0.2 == 0.3)
Оба вызова `console.log` вернут `false`.
Это происходит из-за особенностей представления чисел с плавающей точкой в JavaScript. Внутренне, числа с плавающей точкой представлены в двоичном виде, и иногда точность при вычислениях может теряться из-за ограничений в точности представления.
В данном случае, когда вы складываете `0.1` и `0.2`, результат не будет идентичен `0.3` из-за потери точности при представлении чисел с плавающей точкой.
---------------------
⋙ ❍ Как можно прокинуть value, чтобы получилось 2?
---
const [value, setValue] = useState(0);

1) setState(2);
2) setState(value + 1); setState(value + 1);
3) setState(value => value + 1); setState(value => value +1);

const [value, setValue] = useState(0);

1) setState(2);
2) setState(value + 1); setState(value + 1);
3) setState(value => value + 1); setState(value => value +1);
Для обоих вариантов прокидывания значения `value` в функцию `setState` в React можно использовать функциональный подход в `setState`.
1) setState(2):
```javascript
setState(2);
```
2) setState(value + 1); setState(value + 1);:
```javascript
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
```
3) setState(value => value + 1); setState(value => value +1);:
```javascript
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
```
В обоих случаях будет достигнуто значение `2`. Использование функционального подхода в `setState` гарантирует, что значение `value`, используемое для обновления состояния, будет актуальным на момент вызова функции `setState`.
---------------------
⋙ ❍ Тайпскрипт. Как описать в интерфейсе компонента: ?
---
– value, которое может быть строкой или числом;
– функцию getValue, которая возвращает value;
– функцию setValue, которая принимает параметры и сетает value;
Вот как можно описать интерфейс компонента в TypeScript:
```typescript
interface MyComponent {
  value: string | number;
  getValue: () => string | number;
  setValue: (newValue: string | number) => void;
}
```
В данном интерфейсе:
- `value` имеет тип `string | number`, что означает, что он может быть строкой или числом.
- `getValue` - это функция без параметров, которая возвращает значение типа `string | number`.
- `setValue` - это функция, принимающая параметр `newValue` типа `string | number`, которая ничего не возвращает (`void`) и устанавливает новое значение для `value`.
---------------------
⋙ ❍ Что появится в DOMе если вызвать компоненты следующим образом: ?
---
<>
  <name/>
  <User/>
<>
1
2
3
4
<>
  <name/>
  <User/>
<>
Если вы вызовете компоненты `<name/>` и `<User/>` в контексте JSX без явного закрытия тега (например, в React), то они будут интерпретированы как пустые элементы самозакрывающегося тега. Таким образом, они не будут иметь закрывающего тега, а их содержимым будет `null`. Вот как это будет выглядеть в DOM:
```html
<>
  <name/>
  <User/>
</>
```

```html
<div>
  <name></name>
  <User></User>
</div>
```
В этом примере `<name/>` и `<User/>` - это пустые компоненты, которые будут вставлены в DOM без содержимого.
---------------------
⋙ ❍ Кастомные тег, компонент или ошибка (примеры) ?
---
Вот примеры:
1. Кастомный тег:
```html
<x-custom-tag></x-custom-tag>
```
Это кастомный тег, так как он не является стандартным HTML-тегом, но может использоваться в веб-разработке для добавления собственных функциональных элементов.
2. Компонент:
```html
<my-custom-component></my-custom-component>
```
Это может быть как кастомный тег, представляющий компонент, так и настоящий компонент, реализованный с помощью фреймворка или библиотеки, таких как React, Vue или Angular. В компонентах обычно содержится какая-то логика, стили и разметка, которые могут быть повторно использованы.
3. Ошибка:
```html
<custom-component>
```
Если это не определенный кастомный тег или компонент, а просто опечатка или неверное использование, то это может рассматриваться как ошибка.
---------------------
⋙ ❍ Вес селекторов. С каким цветом будет отображаться текст ?
---
<div id="id" class="class">
  <span>Some text</span>
</div>
.class span {color: red};
#p > span {color: green};
#p span {color: blue};
1
2
3
4
5
6
7
<div id="id" class="class">
  <span>Some text</span>
</div>
.class span {color: red};
#p > span {color: green};
#p span {color: blue};
Селекторы в CSS имеют различный вес в зависимости от их специфичности. Более специфичные селекторы имеют более высокий вес и переопределяют стили менее специфичных селекторов.
В данном случае:
1. `.class span {color: red};` - селектор имеет вес 2 (комбинированный селектор), цвет текста устанавливается как красный.
2. `#p > span {color: green};` - селектор имеет вес 101 (ID селектор с дочерним элементом), но нет элемента с ID `p`, поэтому это правило не применяется.
3. `#p span {color: blue};` - селектор имеет вес 100 (ID селектор), но нет элемента с ID `p`, поэтому это правило не применяется.
Таким образом, текст будет отображаться красным, так как это правило имеет более высокий вес.
---------------------
⋙ ❍ Есть элемент, стилизованная под ссылку и элемент, стилизованная под кнопку. Первый элемент открывает попап, второй – редиректит юзера на страницу с корзиной. Какие теги нужно использовать в этих случаях ?
---
Для открытия попапа чаще всего используется тег `<a>` с атрибутом `href`, который указывает на адрес страницы или якорь, а для редиректа на другую страницу - также тег `<a>` с атрибутом `href`, но с указанием адреса страницы, куда нужно перенаправить пользователя. Вот примеры:
1. Открытие попапа:
```html
<a href="#popup" class="popup-link">Открыть попап</a>
```
где `#popup` - это якорь, указывающий на блок с попапом.
2. Редирект на страницу с корзиной:
```html
<a href="/cart" class="button">Перейти в корзину</a>
```
где `"/cart"` - это адрес страницы с корзиной.
Также можно использовать кнопку `<button>`, но в данном случае, когда нет необходимости в отправке формы, тег `<a>` является более уместным, так как его прямое использование для ссылок на внешние ресурсы или якори улучшает доступность для пользователей и поисковых систем.
---------------------------------------------------------------------------------------------
📌 [MIDDLE РЕАЛЬНЫЕ ЗАДАЧИ]:
---------------------
✎ Иногда Javascript ведет себя не совсем очевидно. Разработчик должен знать правила, по которым выполняется преобразование типов во время выполнения операций. Знание правил может предотвратить множество ошибок.
✎ Примеры кода, результат выполнения которого должен быть очевиден для разработчика:
---------------------
⋙ ❍ Преобразование типов ?
---
Преобразование типов в JavaScript может происходить автоматически (неявное) или явным образом (явное). Вот основные способы преобразования типов:
1. Неявное преобразование типов/Неявным (автоматическим): Это автоматическое преобразование типов, которое выполняется JavaScript при выполнении операций или сравнении значений разных типов.
/Происходит автоматически при выполнении операций или сравнении значений разных типов.
Примеры:
```javascript
// Строковое преобразование
var num = 10;
var str = "Number is: " + num; // num неявно преобразуется в строку

// Арифметическое преобразование
var result = "3" * 2; // "3" неявно преобразуется в число
```
2. Явное преобразование типов/Явным (эксплицитным): Это преобразование типов, которое выполняется с помощью встроенных функций или операторов.
/Происходит с помощью встроенных функций или операторов, когда требуется явно указать тип данных.
Примеры:
```javascript
// Преобразование в число
var str = "42";
var num = parseInt(str);

// Преобразование в строку
var num = 42;
var str = num.toString();
```
Необходимость в явном преобразовании типов может возникнуть, когда требуется точный контроль над типами данных или когда необходимо привести данные к определенному формату для их обработки.
---------------------
⋙ ❍ 5 + ‘2’ Что на выходе ?
---
`5 + '2'` выведет `"52"`. При использовании оператора `+` со строкой JavaScript преобразует число в строку, и происходит конкатенация строк, а не сложение чисел.
---------------------
⋙ ❍ 5 – «2» Что на выходе ?
---
`5 - '2'` выведет `3`. При использовании оператора `-` JavaScript пытается преобразовать строку в число и выполняет вычитание.
---------------------
⋙ ❍ true + true Что на выходе ?
---
`true + true` выведет `2`. При попытке использования оператора `+` со значениями `true`, JavaScript автоматически преобразует `true` в число, где `true` равно `1`, поэтому `true + true` равно `1 + 1`, что дает `2`.
/JavaScript выполнит автоматическое преобразование типов данных в этих операциях:
1. `5 + '2'`: Оператор `+` используется для сложения чисел и строк. Поскольку один из операндов (строка `'2'`) является строкой, JavaScript выполнит конкатенацию и преобразует число 5 в строку, результат будет строкой `'52'`.
2. `5 - '2'`: Оператор `-` используется для вычитания чисел. JavaScript автоматически преобразует строку `'2'` в число, результатом будет число `3`.
3. `true + true`: Оператор `+` используется для сложения чисел. Логические значения `true` и `false` в JavaScript могут быть преобразованы в числа 1 и 0 соответственно. Поэтому `true + true` преобразуется в `1 + 1`, результатом которого будет число `2`.
Итак, результаты будут:
1. `'52'`
2. `3`
3. `2`
---------------------
⋙ ❍ Promise ?
---
Promise - это объект в JavaScript, представляющий асинхронную операцию, которая может завершиться успешно (выполниться) или с ошибкой (отклониться). Он используется для управления асинхронными операциями и обработки их результатов в будущем.
Promise имеет три состояния:
1. Pending (ожидание): Начальное состояние, когда асинхронная операция еще не завершена.
2. Fulfilled (выполнено): Состояние, когда асинхронная операция завершилась успешно.
3. Rejected (отклонено): Состояние, когда асинхронная операция завершилась с ошибкой.
Promise обладает методами для добавления обработчиков для успешного завершения (`then`) и для обработки ошибок (`catch`). Эти методы позволяют структурировать асинхронный код таким образом, что он становится более понятным и управляемым.
Пример использования Promise был показан в предыдущем ответе, где асинхронная операция (задержка) обернута в Promise, а затем последовательно вызываются операции через цепочку методов `then`.
---------------------
⋙ ❍ Перепишите пример, используя promise: ?
---
const printSec = (number, callback) => {
  setTimeout(() => {
      console.log(`${number} sec`)
      callback()
    },
    1000)
}
printSec(1, () => {
  printSec(2, () => {
    printSec(3, () => {})
  })
})
Вот пример переписанного кода с использованием промисов:
```javascript
const printSec = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${number} sec`);
            resolve();
        }, 1000);
    });
};

printSec(1)
    .then(() => {
        return printSec(2);
    })
    .then(() => {
        return printSec(3);
    })
    .then(() => {
        // Код для завершения цепочки промисов
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
```
В этом примере:
- Функция `printSec` возвращает новый промис, который завершится через заданное количество секунд.
- После каждого завершения промиса вызывается следующий промис через метод `then`.
- Метод `catch` используется для обработки любых ошибок, которые могут возникнуть в процессе выполнения промисов.
/1. `printSec` теперь возвращает промис, который выполнится через одну секунду.
2. Мы используем метод `then`, чтобы вызывать `printSec` для каждой секунды по порядку.
3. Каждый вызов `printSec` будет дожидаться завершения предыдущего, благодаря цепочке методов `then`.
4. После завершения всех промисов, мы выводим сообщение "All seconds printed".
---------------------
⋙ ❍ Как работает прототип?
---
Прототип в JavaScript - это механизм, позволяющий объектам наследовать свойства и методы других объектов.
Каждый объект в JavaScript имеет свойство `prototype`, которое указывает на другой объект, называемый прототипом. Когда свойство или метод вызывается у объекта, JavaScript сначала ищет его в самом объекте. Если свойство не найдено, JavaScript будет искать его в прототипе объекта. Этот процесс может продолжаться до тех пор, пока не будет найдено свойство или будет достигнут конечный прототип `null`.
Прототипы используются для создания наследования в JavaScript. Когда объект наследует свойства и методы от своего прототипа, он может использовать их, как если бы они были его собственными. Это позволяет избегать дублирования кода и создавать более гибкую иерархию объектов.
Вот простой пример цикла событий на JavaScript:
```javascript
// Создаем обработчик события
function eventHandler() {
    console.log('Событие обработано!');
}

// Добавляем обработчик события к элементу
document.getElementById('myButton').addEventListener('click', eventHandler);

// Создаем событие, которое будет помещено в очередь событий
document.getElementById('myButton').click();

// Цикл событий обрабатывает события из очереди
```
В этом примере:
1. Мы создаем обработчик события `eventHandler`, который просто выводит сообщение в консоль.
2. Затем мы добавляем этот обработчик к элементу с идентификатором `myButton`, который, например, может быть кнопкой на странице.
3. После этого мы создаем и программно вызываем событие `click` для кнопки `myButton`.
4. Это событие добавляется в очередь событий браузера.
5. Цикл событий браузера обрабатывает события из очереди, и обработчик `eventHandler` выполняется, выводя сообщение в консоль.
Это демонстрирует базовый принцип работы цикла событий: события добавляются в очередь, а затем обрабатываются одно за другим.
---------------------
⋙ ❍ Цикл событий ?
---
Вот простой пример цикла событий на JavaScript:
```javascript
// Создаем обработчик события
function eventHandler() {
    console.log('Событие обработано!');
}

// Добавляем обработчик события к элементу
document.getElementById('myButton').addEventListener('click', eventHandler);

// Создаем событие, которое будет помещено в очередь событий
document.getElementById('myButton').click();

// Цикл событий обрабатывает события из очереди
```
В этом примере:
1. Мы создаем обработчик события `eventHandler`, который просто выводит сообщение в консоль.
2. Затем мы добавляем этот обработчик к элементу с идентификатором `myButton`, который, например, может быть кнопкой на странице.
3. После этого мы создаем и программно вызываем событие `click` для кнопки `myButton`.
4. Это событие добавляется в очередь событий браузера.
5. Цикл событий браузера обрабатывает события из очереди, и обработчик `eventHandler` выполняется, выводя сообщение в консоль.
Это демонстрирует базовый принцип работы цикла событий: события добавляются в очередь, а затем обрабатываются одно за другим.
---------------------
⋙ ❍ Что произойдет со страничкой в результате выполнения этого кода?
---
function foo() {
    setTimeout(foo, 0);
}
foo();
Этот код создает бесконечно рекурсивную функцию `foo`, которая будет вызывать саму себя с помощью `setTimeout` с нулевой задержкой. Это означает, что функция `foo` будет вызываться снова и снова, практически мгновенно.
В результате выполнения этого кода произойдет блокировка интерфейса браузера, так как браузер будет занят вызовом `foo` снова и снова, не давая браузеру выполнить другие задачи или обновить интерфейс страницы. Это приведет к зависанию или краху страницы.
Этот код представляет собой пример бесконечного цикла, который не завершится никогда, пока браузер не перестанет отвечать из-за перегрузки стека вызовов.
---------------------
⋙ ❍ Как найти сумму элементов массива, если вложенность массива неизвестна?
---
arraySum([[1, 2, [3, 4]], [9], [10, 12]])
[ОТВЕТ НИЖЕ В ПРАВИЛЬНЫХ ОТВЕТАХ] или следом:
/Для нахождения суммы элементов массива с неизвестной вложенностью можно использовать рекурсивную функцию, которая будет перебирать все элементы массива и рекурсивно обрабатывать вложенные массивы. Вот пример такой функции:
```javascript
function arraySum(arr) {
    let sum = 0;
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            sum += arraySum(item); // Рекурсивно вызываем arraySum для вложенного массива
        } else {
            sum += item; // Если элемент не массив, просто добавляем его к сумме
        }
    });
    return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]])); // Выведет 41
```
Этот код рекурсивно перебирает все элементы массива, и если элемент является массивом, вызывает `arraySum` для этого массива. Когда достигается элемент, который не является массивом, его значение добавляется к сумме.
---------------------
⋙ ❍ В чем причина помещения всего содержимого исходного файла JavaScript в книгу функций?
---
Помещение всего содержимого исходного файла JavaScript в книгу функций (IIFE - Immediately Invoked Function Expression) имеет несколько причин:
/Помещение всего содержимого исходного файла JavaScript в книгу функций (IIFE) помогает изолировать переменные и функции от глобальной области видимости, предотвращая конфликты имён, улучшая безопасность, обеспечивая контроль зависимостей и оптимизируя код.
1. Изоляция переменных: Помещение кода в IIFE позволяет изолировать переменные и функции от глобальной области видимости. Это предотвращает конфликты имён с другими скриптами и библиотеками.
2. Предотвращение конфликтов: Использование IIFE позволяет избежать возможных конфликтов с глобальными переменными и функциями, которые могут быть определены в других частях приложения.
3. Улучшение безопасности: Поскольку переменные и функции находятся внутри IIFE и не доступны извне, это может помочь защитить код от несанкционированного доступа и модификаций.
4. Контроль зависимостей: IIFE позволяет явно управлять порядком выполнения кода и зависимостями между модулями, что способствует более структурированному и предсказуемому поведению приложения.
5. Оптимизация и уменьшение объема кода: Помещение кода в IIFE может помочь оптимизировать его для выполнения и уменьшить его объем, например, путем минификации или удаления ненужных переменных и функций.
В целом, использование IIFE является распространенной практикой в JavaScript разработке для создания модульной и безопасной структуры кода.
---------------------
⋙ ❍ Перечислите специальные числовые значения ?
---
Вот несколько специальных числовых значений, которые могут использоваться в различных контекстах:
1. NaN (Not a Number): Представляет значение, которое не является числом/нечисловое. Обычно возникает при математических операциях, которые не могут быть выполнены или не имеют смысла.
2. Infinity (Бесконечность): Представляет положительную бесконечность. Обычно возникает при делении числа на ноль или при выполнении математических операций, которые приводят к бесконечному результату.
3. -Infinity (Отрицательная бесконечность): Представляет отрицательную бесконечность. Аналогично Infinity, но для отрицательных значений.
4. 0 (Ноль): Представляет значение нуля/Нулевое. Это специальное числовое значение, которое имеет свои уникальные математические свойства.
5. -0 (Отрицательный ноль): Ноль с отрицательным знаком. В большинстве случаев ведет себя так же, как обычный ноль, но есть некоторые математические операции, где он может иметь различное поведение.
Эти специальные числовые значения часто используются в JavaScript и других языках программирования для обозначения определенных состояний или результатов математических операций.
---------------------
⋙ ❍ Какое предназначение файла package-lock.json?
---
Файл `package-lock.json` используется в проектах Node.js для фиксации точных версий всех зависимостей проекта. Его основное назначение - обеспечить повторяемость установки зависимостей при разработке, тестировании и развертывании проекта.
Вот основные задачи, которые выполняет `package-lock.json`:
1. Фиксация версий зависимостей: Файл содержит информацию о конкретных версиях каждого пакета, установленного в проекте. Это включает в себя версии основных пакетов, их зависимостей и подзависимостей.
2. Гарантированная повторяемость установки: `package-lock.json` гарантирует, что при установке зависимостей на разных машинах или в разные моменты времени будут установлены те же версии пакетов. Это помогает избежать неожиданных изменений в окружении разработки.
3. Ускорение установки зависимостей: Файл позволяет npm или yarn использовать кэш для ускорения процесса установки, так как они знают, какие версии пакетов уже установлены.
4. Решение проблем с зависимостями: `package-lock.json` помогает предотвратить конфликты версий и несовместимости пакетов, поскольку фиксирует точные версии, используемые в проекте.
В целом, `package-lock.json` повышает стабильность и надежность управления зависимостями в проектах Node.js, делая процесс разработки более предсказуемым и устойчивым.
---------------------
⋙ ❍ Что такое запросы между источниками и CDN?
---
Запросы между источниками (CORS) и CDN (Content Delivery Network) - это два различных концепта, связанных с веб-разработкой и доставкой контента в Интернете.
/это механизм безопасности веб-браузера, который контролирует, как веб-страницы на одном домене получают доступ к ресурсам (например, изображениям, скриптам, стилям) на других доменах.
1. Запросы между источниками (CORS - Cross-Origin Resource Sharing): Это механизм, позволяющий веб-страницам запрашивать ресурсы с других доменов, чем тот, на котором расположена сама страница. CORS предотвращает проблемы безопасности, связанные с запросами к другим доменам, путем добавления заголовков в HTTP-запросы и ответы, которые разрешают или запрещают доступ к ресурсам с других источников.
2. CDN (Content Delivery Network): Это сеть серверов, распределенных по всему миру, которая предоставляет контент (такой как изображения, стили, скрипты) для веб-сайтов. CDN помогает ускорить загрузку контента для пользователей, размещая его на серверах, близких к местоположению пользователя. Это также помогает снизить нагрузку на сервер основного хостинга и улучшить производительность веб-сайта.
Связь между этими концепциями может быть такова, что CDN может быть использован для доставки ресурсов, требуемых CORS. Например, если ваш веб-сайт находится на домене `example.com`, а ваши скрипты хранятся на CDN, расположенном на домене `cdn.examplecdn.com`, для успешного выполнения запросов между источниками браузер должен иметь правильные настройки CORS для разрешения доступа к ресурсам на CDN.
/CDN (Content Delivery Network) - это сеть серверов, распределенных по всему миру, которая предоставляет контент для веб-сайтов, улучшая скорость и производительность загрузки.
/Связь между ними заключается в том, что CDN может использоваться для хранения и доставки ресурсов (например, изображений, стилей, скриптов), и для успешной загрузки этих ресурсов на веб-странице через CDN может потребоваться правильная настройка CORS.
--------------------------------------------------------------------------------------------
📌 [Правильные ответы на вопросы ниже]:
---------------------
⋙ ❍ Преобразование типов ?
5 + '2' // "52"
5 + '2' == '5' + '2' == '52'
5 - "2" // 3
5 - "2" == 5-2 == 3
true + true // 2
true + true == 1 + 1 == 2
-----
⋙ ❍ Promise ?
Это достаточно современный подход написания асинхронного кода. Ранее использовался подход с использованием колбеков. При большой вложенности получался т.н. «ад обратных вызовов».
При использовании промисов код выглядит читабельно и удобен для редактирования:
const printSec = (number) => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
        console.log(`${number} sec`)
        resolve()
      },
      1000)
  })
}
printSec(1)
  .then(() => printSec(2))
  .then(() => printSec(3))
-----
⋙ ❍ Прототипное наследование ?
Каждый объект в JS имеет базовый объект – прототип. Если свойство не находится в исходном объекте, то поиск продолжается в его «родительском» объекте.
Установить прототип объекта можно только во время создания объекта: если вы создаете новый объект с помощью новой Func(), свойство объекта [[Prototype]] будет установлено на объект, на который ссылается Func.prototype.
-----
⋙ ❍ Цикл событий ?
Задачи будут добавляться в цикл событий, но они не вызовут ни переполнения стека, ни бесконечной очереди, которая затормозит весь сайт.
Так как макротаски после выполнения пропускают один цикл для отрисовки контента и выполнения микротасков, в отличие от микротасков, которые выполняются все в очереди перед тем, как передать управление следующему пункту в цикле событий.
function foo() {
    return Promise.resolve(1).then(foo);
}
foo();
Выполнение данного кода вызовет затормаживание интерфейса, т.к. при выполнении одного микротаска в очередь добавляется новый микротаск, который сразу же должен выполниться, без передачи управления другому пункту цикла событий.
-----
⋙ ❍ Типы данных: ?
Чтобы узнать тип переменной JavaScript, мы можем использовать оператор typeof.
String – представляет собой серию символов и записывается в кавычках. Строку можно представить в одинарных или двойных кавычках.
Number – представляет собой число и может быть записано с десятичными знаками или без них.
BigInt – используется для хранения чисел, превышающих ограничение типа данных Number. Он может хранить большие целые числа и представлен добавлением «n» к целочисленному литералу.
Boolean – представляет собой логическую сущность и может иметь только два значения: истина или ложь. Логические значения обычно используются для условного тестирования.
Undefined – когда переменная объявлена, но не назначена, она имеет значение undefined, и ее тип также не определен.
Null – представляет несуществующее или недопустимое значение.
Symbol – это новый тип данных, представленный в версии JavaScript для ES6. Он используется для хранения анонимного и уникального значения.
Object – используется для хранения коллекции данных.Важно помнить, что любой тип данных, который не является примитивным типом данных, относится к типу объекта в javascript.
Array – это не отдельный тип данных, на самом деле это Object. `typeof null` равен «object» и это нужно учитывать в проверках.typeof «John Doe» // Возвращает «string»
typeof  3.14 // Возвращает "number"
typeof  true // Возвращает "boolean"
typeof  234567890123456789012345678901234567890 n // Возвращает bigint
typeof  undefined // Возвращает undefined
typeof  null // Возвращает "object"
typeof Symbol ( 'symbol' ) // Возвращает символ
```
Найти сумму элементов массива, если вложенность массива неизвестна, используя рекурсию
function arraySum(arr) {
    let sum = 0;
    arr.map((item) => {
        if (Array.isArray(item)) {
            sum += arraySum(item);
        } else {
            sum += item;
        }
    });
    return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));
Ваш подход к использованию рекурсии для нахождения суммы элементов массива вполне верен. Однако, в вашей функции есть несколько моментов, которые можно улучшить. Вот исправленная версия:
```javascript
function arraySum(arr) {
    let sum = 0;
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            sum += arraySum(item); // Рекурсивно вызываем arraySum для вложенного массива
        } else {
            sum += item; // Если элемент не массив, просто добавляем его к сумме
        }
    });
    return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]])); // Выведет 41
```
Этот код рекурсивно перебирает все элементы массива, и если элемент является массивом, вызывает `arraySum` для этого массива. Когда достигается элемент, который не является массивом, его значение добавляется к сумме.
-----
⋙ ❍ Причина помещения всего содержимого исходного файла JavaScript в книгу функций ?
Этот метод создает замыкание вокруг всего содержимого файла, что создает частное пространство имен и тем самым помогает избежать потенциальных конфликтов имен между различными модулями и библиотеками JavaScript.
Еще одна особенность этого метода – легко создать псевдоним для глобальной переменной. Это часто используется в плагинах jQuery.
-----
⋙ ❍ Специальные числовые значения ?
Infinity больше любого числа
-Infinity меньше любого числа
NaN представляет собой ошибку (не число)
-----
⋙ ❍ Предназначение файла package-lock.json ?
package-lock.json автоматически создается для любых операций, когда npm изменяет дерево node_modules или package.json. Он описывает точное дерево, которое было сгенерировано, так что последующие установки могут генерировать идентичные деревья, независимо от промежуточных обновлений зависимостей.
-----
⋙ ❍ Запросы между источниками и CDN ?
Если мы сделаем выборку с произвольного веб-сайта, это, вероятно, не удастся. Основная концепция здесь – триплет домен/порт/протокол.
Запросы из разных источников, отправленные в другой домен (даже субдомен), протокол или порт требуют специальных заголовков с удаленной стороны. Эта политика называется «CORS»: совместное использование ресурсов между источниками.
-----
⋙ ❍ CDN (сеть доставки контента) ?
это группа серверов, расположенных во многих местах. Эти серверы хранят дублированные копии данных, чтобы серверы могли выполнять запросы данных в зависимости от того, какие серверы находятся ближе всего к соответствующим конечным пользователям. CDN обеспечивают быстрое обслуживание и меньше подвержены влиянию высокого трафика.
CDN (Content Delivery Network) — это географически распределённая сеть серверов, предназначенная для быстрой доставки контента пользователям. Сервера CDN хранят копии статического контента, такого как изображения, видео и скрипты, и предоставляют его пользователям с ближайшего к ним сервера. Это сокращает время загрузки и снижает нагрузку на основной сервер.
-----
⋙ ❍ Опишите, как бы вы реализовали примитивное слайд-шоу ?
Реализация примитивного слайд-шоу может быть выполнена с использованием HTML, CSS и JavaScript. Вот шаг за шагом, как это можно сделать.
Шаг 1: HTML Структура
Сначала создадим базовую HTML структуру для слайд-шоу.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="image1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="image2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="image3.jpg" style="width:100%">
        </div>

        <!-- Navigation buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!-- Dots navigation -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
Шаг 2: CSS для стилей
Добавим стили для слайдов и навигационных элементов.
```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

/* Navigation buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

/* Dots navigation */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```
Шаг 3: JavaScript для функционала
Теперь добавим JavaScript для управления слайдами.
```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
```
Объяснение
1. HTML:
- Контейнер с классом `slideshow-container` содержит все слайды.
- Каждый слайд представлен как `div` с классом `slide` и содержит изображение.
- Добавлены навигационные кнопки (`prev` и `next`) для переключения слайдов.
- Навигационные точки (`dot`) для перехода к определенному слайду.
2. CSS:
- Стили для контейнера слайд-шоу, слайдов, изображений, кнопок навигации и точек.
- Анимация для плавного перехода между слайдами.
3. JavaScript:
- Управляет показом слайдов и навигационными элементами.
- Функция `showSlides` скрывает все слайды и показывает текущий.
- Функции `plusSlides` и `currentSlide` обновляют текущий индекс слайда и вызывают `showSlides` для отображения соответствующего слайда.
---
✐ Таски На примере проектов:
Пример 1: Реализация слайд-шоу для корпоративного сайта
Ситуация: На корпоративном сайте клиента требуется создать слайд-шоу на главной странице для отображения ключевых продуктов компании.
- "На одном из проектов для корпоративного сайта клиента я реализовал примитивное слайд-шоу с помощью HTML, CSS и JavaScript. Это слайд-шоу позволяло демонстрировать ключевые продукты компании с возможностью навигации между слайдами. Вот как я это сделал:
1. HTML Структура: Создал контейнер для слайдов и добавил изображения продуктов.
2. CSS Стилизация: Добавил стили для слайдов, кнопок навигации и точек индикатора.
3. JavaScript Логика: Написал скрипты для переключения слайдов по таймеру и по нажатию на кнопки.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="product1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="product2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="product3.jpg" style="width:100%">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```

```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
```
Эта реализация обеспечила плавное переключение между слайдами и возможность пользователям вручную переключаться между продуктами. Это улучшило пользовательский опыт и позволило клиенту эффективно демонстрировать свои продукты."
Пример 2: Слайд-шоу для портфолио
Ситуация: На личном сайте-резюме требуется создать слайд-шоу для демонстрации выполненных проектов.
- "Для своего личного сайта-резюме я реализовал слайд-шоу для демонстрации проектов. Это слайд-шоу помогло посетителям быстро ознакомиться с моими работами. Вот как я это сделал:
1. HTML: Создал контейнер для слайдов и добавил изображения проектов.
2. CSS: Стили для слайдов, кнопок и индикаторов.
3. JavaScript: Скрипты для автоматического и ручного переключения слайдов.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Slideshow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="project1.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="project2.jpg" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="project3.jpg" style="width:100%">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
    width: 100%;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```

```javascript
// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className
-----
⋙ ❍ Что происходит в следующем коде:?
var foo = 'bim'
var getFoo = function () { return foo }
foo = 'boum'
console.log(getFoo());
Ответ — ‘boum’, поскольку на третьей строке значение foo изменяется на ‘boum’, и функция getFoo вернет переменную foo в своей области видимости.
Вот ваш код с объяснением:
```javascript
var foo = 'bim';                  // 1. Объявляем переменную foo и присваиваем ей значение 'bim'
var getFoo = function () {       // 2. Объявляем функцию getFoo, которая возвращает значение переменной foo
    return foo;
}
foo = 'boum';                     // 3. Меняем значение переменной foo на 'boum'
console.log(getFoo());            // 4. Вызываем функцию getFoo, которая возвращает текущее значение переменной foo
```
Пошаговое объяснение:
1. `var foo = 'bim';`
   Здесь создается переменная `foo` и присваивается ей строка `'bim'`. Это значение будет доступно во всей глобальной области видимости, так как используется `var`.
2. `var getFoo = function () { return foo; };`
   Создается функция `getFoo`, которая возвращает значение переменной `foo`. Важно заметить, что на момент объявления этой функции, значение переменной `foo` еще `'bim'`, так как это значение было присвоено на первом шаге.
3. `foo = 'boum';`
   Здесь значение переменной `foo` меняется на `'boum'`. Эта переменная все еще находится в глобальной области видимости, так что теперь `foo` равно `'boum'`.
4. `console.log(getFoo());`
   Когда мы вызываем `getFoo()`, функция возвращает текущее значение переменной `foo`. Важно понимать, что функции в JavaScript запоминают (или "захватывают") внешние переменные, с которыми они работают, в момент их выполнения. Это называется **замыкание** (closure).
   Так как переменная `foo` была изменена на `'boum'` до вызова функции, то при вызове функции `getFoo()` будет возвращено актуальное (последнее) значение переменной `foo`, а не то, которое было на момент ее объявления (то есть `'bim'`).
Результат:
```javascript
console.log(getFoo());  // 'boum'
```
Функция `getFoo` возвращает строку `'boum'`, так как это текущее значение переменной `foo` в глобальной области видимости на момент вызова функции.
Ключевые моменты:
- Замыкание: функция `getFoo` не "сохраняет" значение `foo` в момент ее объявления. Вместо этого, она всегда ссылается на актуальное значение переменной `foo`, когда она вызывается.
- В JavaScript переменные, объявленные с помощью `var`, имеют функциональную или глобальную область видимости. В этом примере, так как `foo` объявлена в глобальной области видимости, она изменяется и доступна для всех функций в этой области видимости.
-----
⋙ ❍ Измените данный массив, добавив ‘Ten’ в его конец ?
var arr = [‘One’, ‘Two’, ‘Three’, ‘Four’, ‘Five’, ‘Six’, ‘Seven’, ‘Eight’, ‘Nine’];
Это можно сделать несколькими способами, используя метод .push.
arr.push('Ten');
или можно было использовать свойство “length” в качестве индекса.
arr[arr.length] = 'Ten';
-----
⋙ ❍ Измените этот массив, добавьте в его начало слово “Zero” ?
var arr = [‘One’, ‘Two’, ‘Three’, ‘Four’, ‘Five’, ‘Six’, ‘Seven’, ‘Eight’, ‘Nine’];
Мы можем сделать это по-разному, используя .unshift.
arr.unshift('Zero');
или, используя метод splice…
arr.splice(0, 0, 'Zero');
-----
⋙ ❍ Что происходит здесь?
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
Ответом является неопределенность и 2.
Переменная “a” неопределена на первой строке, что выводится в консоль. Функция “foo()” поднимается в начало функции и может быть выполнена на второй строке.
-----
⋙ ❍ Что здесь происходит?
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
Ответом являются Aurelio De Rosa и John Doe.
Вызов функции obj.prop.getFullname() вернет свойство fullname объекта obj.prop, потому что область видимости функции находится внутри obj.prop.
Однако присвоение функции переменной test изменяет ее область выполнения на область переменной test, которая в данном случае является объектом window.
-----
⋙ ❍ Что здесь происходит?
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
Код выводит 4, 4, 4, 4 в консоль, потому что setTimeout выполняется после for-цикла, который устанавливает значение i равным 4 на последнем цикле.
Этот код создает цикл, который выполняет функцию `console.log(i)` с задержкой в 0 миллисекунд после каждой итерации. Но что происходит на самом деле?
1. Цикл начинается с переменной `i` установленной в 0.
2. `setTimeout(() => console.log(i), 0)` создает таймер, который запланирует выполнение функции `console.log(i)` после 0 миллисекунд.
3. Поскольку задержка равна 0, функция не выполняется немедленно, а добавляется в очередь событий.
4. Цикл продолжается, `i` увеличивается на 1.
5. Опять же, `setTimeout(() => console.log(i), 0)` создает таймер для выполнения `console.log(i)` снова после 0 миллисекунд, и так происходит для каждой итерации цикла.
После завершения цикла `i` будет равно 4, так как это условие прекращения цикла. Теперь, когда все функции `console.log(i)` добавлены в очередь событий, они начнут выполняться. Но к этому моменту значение `i` уже станет 4. Поэтому при выполнении функций `console.log(i)` на самом деле будет выведено 4 раза число 4.
-----
⋙ ❍ Как сделать, чтобы он выводил вместо этого 0, 1, 2, 3?
Просто замените var i на let i. Это изменит, как i обрабатывается внутри скобок {} области видимости for-цикла. Это новая функция ES6, блочная область видимости.
for (let i = 0; i < 4; i++) {
  setTimeout((function () { console.log(this.i) }).bind({i}), 0)
}
Результат приведенного выше цикла for аналогичен следующему, где мы используем безымянную функцию, чтобы контролировать область видимости переменной i, передав ее в безымянную функцию и тем самым имитируя блочную область видимости.
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () { console.log(i) }, 0)
  })(i);
}
Или же вы можете использовать метод bind, чтобы привязать объект с i к области функции.
for (var i = 0; i < 4; i++) {
  setTimeout((function () { console.log(this.i) }).bind({i}), 0)
}
-----
⋙ ❍ Подсчёт элементов в массив?
✎ Оно простое и должно определить, как они справятся со следующими вызовами. Это должно занять не более 5–10 минут, но для кого-то это может превратиться в 20–30 минут.
✎ Вы можете подумать, что живые кодовые вызовы — хорошая идея, но я использую их с определенной осторожностью, потому что даже лучшие из нас могут нервничать.
✎ Помните, что программирование обычно выполняется без чьего-либо присмотра.
Ищите через массив ‘arr’, используя элементы из ‘inputs’. Напишите функцию, которая возвращает объект, содержащий количество каждого из элементов из ‘inputs’.
var arr = [“A”, “B”, “C”, “D”, “S”, “W”, “A”, “B”, “B”, “C”, “G”];
var inputs = [“C”, “B”];
function search(arr, inputs) {
  ...
}
let res = search(arr, inputs);
console.log(res.B);
console.log(res.C);
Для подсчета количества элементов в массиве в JavaScript можно использовать свойство `.length` массива. Это свойство возвращает количество элементов в массиве.
Вот пример:
```javascript
const arr = [1, 2, 3, 4, 5];
const count = arr.length;

console.log(count);  // 5
```
Объяснение:
- `arr.length` возвращает количество элементов в массиве `arr`. В данном примере массив содержит 5 элементов, и `arr.length` вернет 5.
---
Если вам нужно подсчитать количество определенных элементов в массиве (например, количество вхождений какого-то числа), вы можете использовать метод `.filter()`.
Пример подсчета количества вхождений определенного элемента в массив:
```javascript
const arr = [1, 2, 3, 4, 1, 5, 1];
const countOfOnes = arr.filter(item => item === 1).length;

console.log(countOfOnes);  // 3
```
Объяснение:
1. `.filter(item => item === 1)` — фильтрует массив, оставляя только те элементы, которые равны 1.
2. `.length` — возвращает количество элементов, которые прошли фильтрацию.
---
Пример подсчета количества уникальных элементов в массиве:
Если вам нужно подсчитать количество уникальных элементов, вы можете использовать `Set` для удаления дубликатов, а затем измерить длину полученного набора.
```javascript
const arr = [1, 2, 3, 1, 4, 2, 5];
const uniqueCount = new Set(arr).size;

console.log(uniqueCount);  // 5
```
Объяснение:
1. `new Set(arr)` — создает множество, в котором будут только уникальные элементы из массива `arr`.
2. `.size` — возвращает количество уникальных элементов в этом множестве.
-----
⋙ ❍ Ищем шаблон внутри массива?
✎ Это упражнение очень похоже на первое, но вместо поиска каждого элемента мы ищем весь шаблон. В данном случае шаблоном является B & C, который повторяется внутри массива дважды.
var arr = [“A”, “B”, “C”, “D”, “S”, “W”, “A”, “B”, “B”, “C”, “G”];
var pattern = [“B”, “C”];
function search(arr, pattern) {
  ...
}
let count = search(arr, inputs);
console.log(count);
Для поиска шаблона внутри массива можно использовать следующий подход на JavaScript:
```javascript
var arr = ["A", "B", "C", "D", "S", "W", "A", "B", "B", "C", "G"];
var pattern = ["B", "C"];

function search(arr, pattern) {
  var count = 0;
  for (var i = 0; i < arr.length - pattern.length + 1; i++) {
    var match = true;
    for (var j = 0; j < pattern.length; j++) {
      if (arr[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      count++;
    }
  }
  return count;
}

let count = search(arr, pattern);
console.log(count); // Выводит 2
```
Этот код проходит по массиву `arr`, начиная с каждого элемента, и сравнивает его с шаблоном. Если найденное соответствие совпадает с шаблоном, счетчик увеличивается. В конце возвращается количество найденных шаблонов.
-----
⋙ ❍ Преобразование строки элементов в массив?
Преобразование строки элементов в массив можно сделать с помощью метода разделения строки на подстроки по определенному разделителю. В большинстве языков программирования для этого используется встроенная функция или метод. Например, вот как это можно сделать на примере JavaScript:
```javascript
let str = "apple,banana,orange";
let arr = str.split(","); // Разделение строки по запятой
console.log(arr); // ["apple", "banana", "orange"]
```
В этом примере `split(",")` разбивает строку `str` на подстроки, используя запятую в качестве разделителя, и возвращает массив строк.
На других языках программирования алгоритм будет похожим, хотя синтаксис может отличаться. Вот примеры на Python и Java:
Python:
```python
str = "apple,banana,orange"
arr = str.split(",") # Разделение строки по запятой
print(arr) # ['apple', 'banana', 'orange']
```
Java:
```java
String str = "apple,banana,orange";
String[] arr = str.split(","); // Разделение строки по запятой
System.out.println(Arrays.toString(arr)); // [apple, banana, orange]
```
Каждый элемент строки между запятыми становится отдельным элементом в результирующем массиве.
Преобразование строки элементов в массив:
JavaScript: `str.split(",")`
Python: `str.split(",")`
Java: `str.split(",")`
-----
⋙ ❍ Напишите функцию, которая преобразует любую из этих строк в массив?
const temp1 = 'One,Two,Three,Four,Five,Six,Seven,Eight,Nine';
const temp2 = 'Two, One,Four, Three, Six, Five, Seven, Nine, Eight';
Результат должен быть.
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[2, 1, 4, 3, 6, 5, 7, 9, 8]
✎ Это упражнение немного затруднительно, потому что им нужно понять, что для преобразования слов в числа необходимо использовать словарь или операторы условия/выбора.
Вот функция на JavaScript, которая преобразует строки в массивы:
```javascript
const temp1 = 'One,Two,Three,Four,Five,Six,Seven,Eight,Nine';
const temp2 = 'Two, One,Four, Three, Six, Five, Seven, Nine, Eight';

function stringToArray(str) {
  // Словарь для соответствия чисел словам
  const dict = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5,
    'Six': 6,
    'Seven': 7,
    'Eight': 8,
    'Nine': 9
  };

  // Разбиваем строку на массив слов
  const words = str.split(',');

  // Преобразуем каждое слово в числовое значение, используя словарь
  const result = words.map(word => dict[word.trim()]);

  return result;
}
console.log(stringToArray(temp1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(stringToArray(temp2)); // [2, 1, 4, 3, 6, 5, 7, 9, 8]
```
Эта функция использует словарь `dict`, чтобы соответствовать словам числа от 1 до 9. Затем она разбивает строку на массив слов, преобразует каждое слово в числовое значение с помощью словаря и возвращает массив чисел.
-----
⋙ ❍ Реализуйте следующий метод, который повторяет строку несколько раз?
✎ Если бы они упомянули прототипное наследование, то не было бы никаких проблем с реализацией пользовательского метода прототипа.
console.log(‘hello’.repeatify(3));
Для добавления метода `repeatify` к прототипу строк на JavaScript можно использовать следующий код:
```javascript
String.prototype.repeatify = function(n) {
  return Array(n + 1).join(this);
};
console.log('hello'.repeatify(3)); // Выводит "hellohellohello"
```
Этот код расширяет прототип `String`, добавляя метод `repeatify`, который принимает число `n` и повторяет текущую строку `n` раз. Внутри метода используется `Array(n + 1).join(this)`, чтобы создать новую строку, повторяя текущую строку `n` раз.
-----
⋙ ❍ Реализация специального метода reverse?
Надо добавить метод ‘customReverse’ в объект Array, который бы переворачивал порядок элементов в массиве.
console.log([0,1,2,3,4,5].customReverse());
Для добавления метода `customReverse` к объекту `Array` на JavaScript можно использовать следующий код:
```javascript
Array.prototype.customReverse = function() {
  return this.slice().reverse();
};
console.log([0, 1, 2, 3, 4, 5].customReverse()); // Выводит [5, 4, 3, 2, 1, 0]
```
Этот код расширяет прототип `Array`, добавляя метод `customReverse`, который использует `slice()` для создания копии массива и `reverse()` для изменения порядка элементов в копии. Таким образом, исходный массив остается неизменным, а метод `customReverse` возвращает перевернутую копию.
-----
⋙ ❍ Создайте функцию array_sum, которая суммирует все числа в многомерной структуре массива?
array_sum([1,2,[3,4,[5]]])
Вы можете реализовать функцию `array_sum`, используя рекурсивный подход для обхода всех элементов многомерного массива и суммирования чисел. Вот пример на JavaScript:
```javascript
function array_sum(arr) {
  let sum = 0;

  // Рекурсивная функция для обхода элементов массива
  function sumArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Если текущий элемент массива - это массив, вызываем sumArray рекурсивно
      if (Array.isArray(arr[i])) {
        sumArray(arr[i]);
      } else {
        // Если элемент массива - число, добавляем его к сумме
        sum += arr[i];
      }
    }
  }

  // Начинаем обход массива
  sumArray(arr);

  return sum;
}
console.log(array_sum([1, 2, [3, 4, [5]]])); // Выводит 15 (1 + 2 + 3 + 4 + 5)
```
Этот код пройдет по всем элементам массива, проверяя, является ли текущий элемент массивом или числом. Если это массив, функция вызывает саму себя для этого вложенного массива. Если это число, оно добавляется к общей сумме.
-----
⋙ ❍ Реализуйте метод, который вычисляет среднюю длину всех пакетов в структуре данных?
var packages = {
  UPS: { length: 120, weight: 44 },
  FedeX: { length: 135, weight: 130 },
  USPS: { length: 150 }
}
function calculateAvgLength(packages) {
  ...
}
console.log(calculateAvgLength(packages));
Вы можете реализовать функцию `calculateAvgLength`, которая вычисляет среднюю длину всех пакетов в данной структуре данных. Вот пример на JavaScript:
```javascript
var packages = {
  UPS: { length: 120, weight: 44 },
  FedEx: { length: 135, weight: 130 },
  USPS: { length: 150 }
};

function calculateAvgLength(packages) {
  let totalLength = 0;
  let count = 0;

  // Проходим по каждому пакету в структуре данных
  for (let key in packages) {
    if (packages.hasOwnProperty(key) && packages[key].length !== undefined) {
      totalLength += packages[key].length;
      count++;
    }
  }

  // Вычисляем среднюю длину
  const avgLength = count !== 0 ? totalLength / count : 0;

  return avgLength;
}

console.log(calculateAvgLength(packages)); // Выводит 135 (средняя длина пакетов)
```
Этот код проходит через все пакеты в объекте `packages`, суммирует их длины и подсчитывает общее количество пакетов. Затем он вычисляет среднее значение длины и возвращает его.
-----
⋙ ❍ Реализуйте метод, который сортирует данную строку в другую?
let str = “Addy 2 Daddy 3 WoW 9 Modern 4 Architecture 87”;
Должно быть отсортировано на:
"acdehinortuyADMW234789"
✎ Кандидат должен выводить, что делать в рамках заданной процедуры, исходя из входных данных и ожидаемого результата.
Чтобы реализовать метод, который сортирует данную строку в другую, вы можете использовать следующий код на JavaScript:
```javascript
let str = "Addy 2 Daddy 3 WoW 9 Modern 4 Architecture 87";

function sortString(str) {
  // Удаляем пробелы из строки
  let cleanedStr = str.replace(/\s/g, '');

  // Отсортируем символы строки в алфавитном порядке
  let sortedStr = cleanedStr.split('').sort().join('');

  // Удаляем все не-цифровые символы из строки
  let digitsOnly = sortedStr.replace(/\D/g, '');

  return digitsOnly + sortedStr.replace(/\d/g, '');
}
console.log(sortString(str)); // Выводит "acdehinortuyADMW234789"
```
Этот код удаляет пробелы из исходной строки, затем сортирует символы строки в алфавитном порядке. После этого он удаляет все не-цифровые символы из отсортированной строки и объединяет их в нужном порядке.
-----
⋙ ❍ Прошу их создать класс, который преобразует JSON в XML и XML в JSON. Я даю им следующую структуру класса и прошу их заполнить ее?
class Transformer
{
public convertXMLtoJSON();
public convertJSONtoXML();
}
convertXMLtoJSON — Программа преобразует любой XML-документ в структуру JSON, которую они реализуют самостоятельно.
convertJSONtoXML — Преобразует JSON, сгенерированный функцией convertXMLtoJSON, обратно в документ XML.
Пример реализации класса `Transformer`, который преобразует JSON в XML и XML в JSON на JavaScript:
```javascript
class Transformer {
  convertXMLtoJSON(xmlString) {
    let xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
    let json = this.xmlToJSON(xmlDoc);
    return json;
  }

  convertJSONtoXML(jsonObject) {
    let xmlString = this.jsonToXML(jsonObject);
    return xmlString;
  }

  xmlToJSON(xmlNode) {
    let obj = {};

    if (xmlNode.nodeType === Node.ELEMENT_NODE) {
      if (xmlNode.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let i = 0; i < xmlNode.attributes.length; i++) {
          let attribute = xmlNode.attributes.item(i);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xmlNode.nodeType === Node.TEXT_NODE) {
      return xmlNode.nodeValue.trim();
    }

    if (xmlNode.hasChildNodes()) {
      for (let i = 0; i < xmlNode.childNodes.length; i++) {
        let item = xmlNode.childNodes.item(i);
        let nodeName = item.nodeName;
        if (nodeName === '#text') {
          continue;
        }
        if (obj[nodeName] === undefined) {
          obj[nodeName] = this.xmlToJSON(item);
        } else {
          if (obj[nodeName].push === undefined) {
            let old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJSON(item));
        }
      }
    }

    return obj;
  }

  jsonToXML(obj) {
    let xml = '';

    for (let prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }
      if (prop === '@attributes') {
        for (let attr in obj[prop]) {
          if (obj[prop].hasOwnProperty(attr)) {
            xml += ` ${attr}="${obj[prop][attr]}"`;
          }
        }
      } else if (Array.isArray(obj[prop])) {
        obj[prop].forEach((item) => {
          xml += `<${prop}>${this.jsonToXML(item)}</${prop}>`;
        });
      } else if (typeof obj[prop] === 'object') {
        xml += `<${prop}${this.jsonToXML(obj[prop])}></${prop}>`;
      } else {
        xml += `<${prop}>${obj[prop]}</${prop}>`;
      }
    }

    return xml;
  }
}
Пример использования:
// let transformer = new Transformer();

Преобразование XML в JSON
// let xmlString = '<root><person name="John"><age>30</age></person></root>';
let jsonObject = transformer.convertXMLtoJSON(xmlString);
console.log(jsonObject);

Преобразование JSON в XML
let json = {
  root: {
    person: {
      '@attributes': {
        name: 'John'
      },
      age: '30'
    }
  }
};
let xmlString2 = transformer.convertJSONtoXML(json);
console.log(xmlString2);
```
Этот класс принимает XML-строку и JSON-объект в методах `convertXMLtoJSON` и `convertJSONtoXML` соответственно и возвращает преобразованный JSON-объект или XML-строку.
-----
⋙ ❍ Как сделать так, чтобы выводило цифры по порядку?
Чтобы вывести цифры по порядку, вы можете использовать самовызывающуюся функцию или использовать замыкание для сохранения значения переменной `i` на каждой итерации цикла. Вот пример, как это можно сделать:
```javascript
for (var i = 0; i < 10; i++) {
  (function(index) {
    setTimeout(function () {
      console.log(index);
    }, 0);
  })(i);
}
```
В этом примере мы создаем самовызывающуюся функцию, которая получает значение переменной `i` как аргумент и сохраняет его в переменной `index`. Это позволяет каждой функции обратного вызова `setTimeout` использовать правильное значение `index`, сохраненное в замыкании. Таким образом, цифры будут выводиться по порядку от 0 до 9.
-----
⋙ ❍ Напишите функцию принимающую строку с именем файла и возвращающую расширение (фрагмент после последней точки)?
Вы можете написать функцию, которая найдет расширение файла, используя методы строки JavaScript. Вот пример:
```javascript
function getFileExtension(filename) {
  // Находим последнее вхождение точки в строке
  let lastDotIndex = filename.lastIndexOf('.');
  // Если точка найдена и она не является последним символом в строке
  if (lastDotIndex !== -1 && lastDotIndex < filename.length - 1) {
    // Возвращаем подстроку после последней точки
    return filename.substring(lastDotIndex + 1);
  } else {
    // Если точка не найдена или является последним символом, возвращаем пустую строку
    return '';
  }
}
// Пример использования
console.log(getFileExtension('document.txt')); // Выведет: "txt"
console.log(getFileExtension('image.jpg')); // Выведет: "jpg"
console.log(getFileExtension('script.js.map')); // Выведет: "map"
console.log(getFileExtension('file')); // Выведет: ""
```
Эта функция использует метод `lastIndexOf()` для поиска последнего вхождения точки в имени файла и метод `substring()` для получения подстроки после последней точки. Если точка не найдена или является последним символом в строке, функция вернет пустую строку.
-----
⋙ ❍ У вас есть строка “abcd”, и вам поручено написать функцию, которая переворачивает ее на “dcba”. Как бы вы это сделали? Подробно объясните?
Многие вспоминают метод .reverse у массивов.
s.split('').reverse().join('');
Однако некоторые могут использовать цикл for и метод charAt для разворота строки.
function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}
-----
⋙ ❍ Что вернет выражение +new Date()? Чем отличается от Date.now()?
Ответ в том, что +new Date(); создаст экземпляр объекта Date и благодаря + переведет его в числовой формат. Во втором случае вызовется статический метод конструктора, который является более приоритетным, т.к. во-первых он не требует создания экземпляра, а во-вторых является более понятным.
Правильно, выражение `+new Date()` создаст экземпляр объекта `Date` и затем преобразует его в числовой формат, представляющий количество миллисекунд, прошедших с начала эпохи Unix. Этот подход используется для быстрого получения текущего времени в миллисекундах.
В то время как `Date.now()` является статическим методом объекта `Date`, который возвращает текущее время в миллисекундах, также представляющее количество миллисекунд, прошедших с начала эпохи Unix. Этот метод не требует создания экземпляра объекта `Date`, что делает его более эффективным и читаемым в некоторых случаях.
-----
⋙ ❍ Напишите регулярное выражение для проверки строк соответствующих формату даты dd.mm.yyyy?
Каков будет результат выполнения следующего кода:
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
Регулярное выражение для проверки строк соответствующих формату даты `dd.mm.yyyy` будет выглядеть так:
```regex
/^\d{2}\.\d{2}\.\d{4}$/
```
Это регулярное выражение соответствует строке, которая начинается с двух цифр (`\d{2}`), затем точка, затем две цифры, точка, и четыре цифры в конце (`\d{4}`).
Относительно кода, который вы предоставили, результат выполнения будет таким:
```plaintext
10
10
10
10
10
10
10
10
10
10
```
Это происходит из-за того, что переменная `i` используется в замыкании функции обратного вызова внутри `setTimeout`. Когда функция обратного вызова выполняется позже, она использует последнее значение `i`, которое стало равным 10 после завершения цикла.
-----
⋙ ❍ Как поменять контекст функции. Частичное применение функции?
В JavaScript вы можете изменить контекст функции с помощью методов `call()`, `apply()` и `bind()`. Частичное применение функции обычно осуществляется с помощью метода `bind()`.
Изменение контекста функции:
1. call(): Метод `call()` вызывает функцию с указанным контекстом и аргументами.
```javascript
function greet() {
  console.log('Hello, ' + this.name);
}

var person = { name: 'John' };
greet.call(person); // Выведет: "Hello, John"
```
2. apply(): Метод `apply()` вызывает функцию с указанным контекстом и массивом аргументов.
```javascript
function greet(message) {
  console.log(message + ', ' + this.name);
}

var person = { name: 'John' };
greet.apply(person, ['Hello']); // Выведет: "Hello, John"
```
Частичное применение функции:
Метод `bind()` создает новую функцию, связывая указанный контекст с функцией. Возвращаемая функция также может иметь некоторые параметры, которые будут переданы при вызове.
```javascript
function greet(message) {
  console.log(message + ', ' + this.name);
}

var person = { name: 'John' };
var greetJohn = greet.bind(person, 'Hello');
greetJohn(); // Выведет: "Hello, John"
```
В этом примере `greet.bind(person, 'Hello')` создает новую функцию `greetJohn`, которая будет вызывать `greet` с контекстом `person` и аргументом `'Hello'`. При вызове `greetJohn()` будет выведено `"Hello, John"`.
Таким образом, частичное применение функции с помощью метода `bind()` позволяет задать некоторые параметры функции заранее, оставив другие параметры для передачи при вызове.
-----
⋙ ❍ Как создать приватную переменную в JavaScript, используя ‘let’ или замыкание?
Замыкание может возвращать ссылку на функцию, которая позволяет нам получить доступ к приватному пространству.
let getX = (function () {
  let x = 100;
  return function () {
        return x;
     }
})();
console.log("x: " + getX());
Переменная, созданная с помощью ‘let’, привязана к своим скобкам.
let getX;
let x = 500;
{
    let x = 100;
    getX = function () {
        return x;
    }
}
console.log("x1: " + getX());
getX = function () {
    return x;
}
console.log("x2: " + getX());
-----
⋙ ❍ Чем отличается: ?
var something = function
&
function something();
Функция something() поднимается в начале, когда скрипт интерпретируется. В то время как переменная var something = function становится доступной для использования после соответствующего оператора.
---------------------------------------------------------------------------------------------
📌 [ЗАДАЧИ MIDDLE/SENIOR В ОДНОМ ИЗВЕСТНОМ БАНКЕ ✅]:
---------------------
⋙ ❍ Задача: Дан массив [1,1,1,2,4,5]. Нужно вернуть true в случае если в нём есть хотя бы один повторяющийся элемент?
---
Для решения этой задачи можно использовать различные подходы, но одним из самых простых способов является использование хэш-таблицы для отслеживания уникальных элементов массива.
Вот пример JavaScript-кода, который решает задачу:
```javascript
function hasDuplicate(arr) {
  // Создаем объект для отслеживания уникальных элементов
  const seen = {};

  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Если текущий элемент уже был ранее добавлен в объект,
    // значит, у нас есть повторяющийся элемент
    if (seen[arr[i]]) {
      return true;
    } else {
      // Иначе помечаем текущий элемент как присутствующий в массиве
      seen[arr[i]] = true;
    }
  }

  // Если цикл завершился, и повторяющихся элементов не найдено
  return false;
}

// Пример использования:
const arr = [1, 1, 1, 2, 4, 5];
console.log(hasDuplicate(arr)); // Выведет: true
```
Этот код создает объект `seen`, где ключами являются элементы массива, а значениями - логические значения, указывающие на то, встречался ли элемент ранее. Если элемент уже присутствует в объекте `seen`, значит, у нас есть повторяющийся элемент, и функция возвращает `true`. Если цикл завершится без обнаружения повторяющихся элементов, функция вернет `false`.
---------------------
⋙ ❍ Что выведет console.log(1==‘1’) и console.log(1===‘1’) и почему?
---
Выражение `1 == '1'` вернет `true`, а выражение `1 === '1'` вернет `false`.
При сравнении с использованием оператора `==`, JavaScript выполняет преобразование типов данных (type coercion), чтобы сравнить значения с одинаковым типом. В этом случае строка `'1'` будет преобразована в число, и оба значения станут числовыми. Поскольку числовые значения равны, результат будет `true`.
Однако, при использовании оператора `===`, сравнение выполняется без преобразования типов данных (strict equality). Значения сравниваются по их типу и значению. Таким образом, число `1` и строка `'1'` не равны по строгому равенству, поскольку они имеют разные типы данных (number и string), даже если их значения по сути одинаковы. Поэтому результат сравнения `1 === '1'` будет `false`.
---------------------
⋙ ❍ В каком порядке выведется console.log()?
---
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
1
2
3
4
5
6
7
8
9
10
11
12
13
14
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
Чтобы определить порядок вывода `console.log()`, нужно учитывать асинхронность выполнения кода. Давайте разберем, в каком порядке будут выполняться операции:
1. Сначала выполняются все синхронные операции, то есть:
- Выводится 'Создание промиса'.
- Создается и резолвится промис.
- Выводится 'Конец скрипта'.
2. Затем выполняются обработчики промисов и асинхронные операции из очереди микрозадач (microtask queue):
- Обработчик промиса выводит 'Обработка промиса'.
3. В конце выполняются функции обратного вызова таймаутов (setTimeout) и асинхронные операции из очереди задач (task queue):
- Выводится 'Таймаут'.
Таким образом, порядок вывода будет следующим:
```
- Создание промиса
- Конец скрипта
- Обработка промиса
- Таймаут
```
---------------------
⋙ ❍ Как можно скопировать объект (вопрос про Object.assign(), перебор в цикле, Spread оператор, JSON.stringify -> JSON.parse)?
---
Вы правы, существует несколько способов скопировать объект в JavaScript. Рассмотрим каждый из них:
1. Object.assign():
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```
2. Перебор в цикле:
```javascript
const original = { a: 1, b: 2 };
const copy = {};
for (let key in original) {
  copy[key] = original[key];
}
```
3. Spread оператор:
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```
4. JSON.stringify() -> JSON.parse():
```javascript
const original = { a: 1, b: 2 };
const copy = JSON.parse(JSON.stringify(original));
```
Каждый из этих способов имеет свои особенности:
- `Object.assign()`: Копирует только значения свойств объекта. Если объект содержит вложенные объекты или ссылки на другие объекты, они будут скопированы по ссылке, а не по значению.
- Перебор в цикле: Простой и понятный способ копирования объекта, но не работает с вложенными объектами и массивами.
- Spread оператор: Позволяет создать поверхностную копию объекта. Как и `Object.assign()`, не обрабатывает вложенные объекты глубоко.
- `JSON.stringify() -> JSON.parse()`: Создает глубокую копию объекта, копируя значения свойств и их вложенные объекты или массивы. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или тех объектов, которые содержат специфичные свойства, такие как `Symbol`.
При выборе способа копирования объекта следует учитывать структуру объекта, необходимость глубокого или поверхностного копирования и возможные нежелательные побочные эффекты, такие как потеря функций или круговые ссылки.
---------------------
⋙ ❍ Как копируется объект (по ссылке или по значению)?
---
В JavaScript объекты копируются по ссылке, а не по значению, за исключением некоторых специальных случаев или методов, которые создают глубокие копии. Это означает, что при присваивании одного объекта другой переменной создается копия ссылки на объект, а не самого объекта.
Рассмотрим пример:
```javascript
const original = { a: 1, b: 2 };
const copy = original;
copy.a = 3;

console.log(original.a); // Выведет: 3
```
В этом примере `original` и `copy` указывают на один и тот же объект в памяти. Поэтому при изменении свойств через одну переменную изменения будут видны и через другую.
Есть несколько способов создания копии объекта:
1. Поверхностная копия: Методы такие как `Object.assign()`, Spread оператор `{ ...obj }` или перебор в цикле создают поверхностные копии объектов. Они копируют только свойства объекта, но не их значения. Если объект содержит вложенные объекты, они будут скопированы по ссылке.
2. Глубокая копия: Методы такие как `JSON.stringify()` и `JSON.parse()` могут использоваться для создания глубоких копий объектов. Они сериализуют объект в строку JSON, а затем снова парсят эту строку в новый объект. Этот метод создает новые объекты для каждого свойства и их значений, что гарантирует, что копии объектов не будут иметь ссылок на исходные объекты. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или специфичные свойства, такие как `Symbol`.
Выбор между поверхностной и глубокой копией зависит от ваших потребностей. Если вам нужна простая поверхностная копия, используйте `Object.assign()` или Spread оператор. Если вам нужна полная копия объекта с вложенными структурами, используйте методы сериализации и десериализации JSON или другие библиотеки для глубокого копирования.
---------------------
⋙ ❍ Что будет если объекту, объявленному через const, изменить значения полей?
---
Если объект объявлен с использованием `const`, это означает, что ссылка на этот объект не может быть изменена. Однако содержимое объекта может быть изменено, если оно не является неизменяемым.
Давайте рассмотрим пример:
```javascript
const person = {
  name: 'John',
  age: 30
};

person.name = 'Jane'; // Изменяем значение поля name
person.age = 35;      // Изменяем значение поля age

console.log(person); // Выведет: { name: 'Jane', age: 35 }
```
В этом примере, хотя `person` объявлен с использованием `const`, мы можем изменить значения его полей. Это происходит потому, что `const` ограничивает изменение ссылки на объект, но не его содержимое.
Однако, если попытаться присвоить объекту новое значение или перезаписать ссылку на объект, JavaScript выдаст ошибку:
```javascript
const person = {
  name: 'John',
  age: 30
};

person = {}; // Ошибка: "Assignment to constant variable."
```
Поэтому, если вам нужно полностью предотвратить изменение объекта, вам следует использовать методы для глубокого замораживания объекта, такие как `Object.freeze()`, которые защищают от изменений как ссылку на объект, так и его содержимое.
---------------------
⋙ ❍ Как можно сделать объект иммутабельным? Вопрос об Object.freeze?
---
Для создания иммутабельного объекта в JavaScript вы можете использовать метод `Object.freeze()`. Этот метод "замораживает" объект, делая его неизменяемым: нельзя добавлять новые свойства, изменять существующие или удалять их.
Вот как вы можете использовать `Object.freeze()` для создания иммутабельного объекта:
```javascript
const obj = {
  property1: 'value1',
  property2: 'value2'
};

// Замораживаем объект
Object.freeze(obj);

// Попытка изменить свойство объекта
obj.property1 = 'new value'; // Не будет совершено никаких изменений
```
Вы также можете использовать `Object.freeze()` в сочетании с рекурсивным проходом по объекту для замораживания всех вложенных объектов и создания глубокой иммутабельности:
```javascript
function deepFreeze(obj) {
  // Получаем имена всех свойств объекта
  const propNames = Object.getOwnPropertyNames(obj);

  // Замораживаем все свойства объекта
  propNames.forEach(function(name) {
    const prop = obj[name];

    // Если свойство является объектом и не было заморожено ранее, замораживаем его
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Замораживаем сам объект
  return Object.freeze(obj);
}

const obj = {
  nested: {
    property1: 'value1',
    property2: 'value2'
  }
};

deepFreeze(obj);

// Попытка изменить вложенное свойство объекта
obj.nested.property1 = 'new value'; // Не будет совершено никаких изменений
```
Таким образом, использование `Object.freeze()` позволяет создать объект, который не может быть изменен, что обеспечивает безопасность данных и предотвращает неожиданные изменения в приложении.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ)?
---
(function() {
    f();
    f = function() {
        console.log(1);
    }
})()
function f() {
    console.log(2)
}
f();
1
2
3
4
5
6
7
8
9
10
11
12
13
(function() {
    f();

    f = function() {
        console.log(1);
    }
})()

function f() {
    console.log(2)
}

f();
Этот код вызовет ошибку "TypeError: f is not a function".
При первом вызове `f();` функция `f` еще не определена, так как вызов `f();` происходит перед присваиванием новой функции `f = function() { console.log(1); }`.
В результате, будет выброшено исключение TypeError, потому что при попытке вызвать `f()` до определения функции, `f` будет равно `undefined`, а не функции.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ) ?
---
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
1
2
3
4
5
6
7
8
9
10
11
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
В консоль будет выведено:
```
John undefined
```
Это происходит из-за того, что контекст выполнения функции `getName` изменяется при вызове отдельно от объекта `obj`.
1. Переменная `name1` получает значение `John`, потому что функция `getName` вызывается в контексте объекта `obj`, и `this.name` возвращает свойство `name` этого объекта.
2. Переменная `getName` присваивается ссылка на функцию `getName` объекта `obj`, но без привязки к контексту. Поэтому, когда функция `getName` вызывается в контексте глобального объекта (или `undefined` в строгом режиме), `this.name` возвращает `undefined`.
Поэтому, при использовании интерполяции строк `${name1} ${name2}`, первая переменная `name1` будет иметь значение `'John'`, а вторая переменная `name2` будет иметь значение `undefined`.
---------------------
⋙ ❍ Создайте метод у объекта String, который многократно повторяет строку (не используя метод .repeat()). ?
---
console.log("hello". customRepeat(3)); // “hellohellohello”
1
console.log("hello". customRepeat(3)); // “hellohellohello”
Вы можете создать метод `customRepeat` для объекта `String`, который будет многократно повторять строку. Вот пример, как это можно сделать:
```javascript
String.prototype.customRepeat = function(count) {
  let repeatedString = '';
  for (let i = 0; i < count; i++) {
    repeatedString += this;
  }
  return repeatedString;
};
console.log("hello".customRepeat(3)); // Выведет: "hellohellohello"
```
В этом примере мы расширяем прототип `String`, добавляя метод `customRepeat`, который принимает количество повторений и возвращает новую строку, содержащую исходную строку, повторенную заданное количество раз.
---------------------
⋙ ❍ Есть список элементов button, на которые навешен обработчик события ‘click’. Что попадет в консоль, если пользователь нажмет первую и последнюю кнопку в списке? Аргументируйте свой ответ.
---
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
1
2
3
4
5
6
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
• При нажатии на первую и последнюю кнопку в списке будут выведены следующие строки в консоль:
```
You clicked element #6
You clicked element #6
```
Это происходит из-за того, что переменная `i` используется внутри функции обратного вызова для обработчика события 'click'. В JavaScript область видимости переменных объявленных через ключевое слово `var` - это вся функция. В результате, значение переменной `i` будет равно последнему значению, которое она принимает в цикле, то есть `6`. Когда функция обработчика события вызывается при нажатии на кнопку, она видит последнее значение `i`, которое было установлено, то есть `6`, и выводит его в консоль для обоих кнопок.
---------------------
⋙ ❍ Что выведет в консоль следующий код (Аргументируйте свой ответ) ?
---
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
1
2
3
4
5
6
7
8
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
В консоль будет выведено следующее:
```
1
4
3
2
```
При вызове функции `printme`, сначала будет выведено `1`, затем `4`, потому что они находятся в синхронном коде функции. Затем будет добавлено два таймера с задержками: один на 1000 миллисекунд (1 секунду) и один на 0 миллисекунд (почти мгновенно). Далее, когда таймер с задержкой в 0 миллисекунд сработает, будет выведено `3`. И, наконец, после истечения 1 секунды, выведется `2`.
Это происходит из-за того, что даже если задержка таймера равна 0, функция обратного вызова все равно помещается в очередь событий и выполнится после завершения текущего кода. Таким образом, порядок выполнения будет сохранен.
---------------------
⋙ ❍ Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом ?
---
console.log(isPalindrome('asdsa')) // true
1
console.log(isPalindrome('asdsa')) // true
Вы можете создать функцию `isPalindrome`, которая будет принимать строку и проверять, является ли она палиндромом. Палиндром - это строка, которая читается одинаково как с начала, так и с конца. Вот как это можно сделать:
```javascript
function isPalindrome(str) {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  const formattedStr = str.replace(/\s/g, '').toLowerCase();

  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('asdsa')); // Выведет: true
```
Эта функция сначала форматирует строку, удаляя все пробелы и приводя к нижнему регистру. Затем она сравнивает символы с обоих концов строки, чтобы определить, является ли она палиндромом. Если строка является палиндромом, функция возвращает `true`, в противном случае - `false`.
---------------------
⋙ ❍ Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом: ?
---
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
1
2
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
Вы можете создать функцию `sum`, которая будет принимать один или два аргумента и возвращать сумму этих чисел. Вот как это можно сделать:
```javascript
function sum(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2, 3));   // Выведет: 5
console.log(sum(2)(3));   // Выведет: 5
```
Эта функция проверяет, сколько аргументов ей передано. Если передан только один аргумент, она возвращает функцию, которая ожидает второй аргумент и возвращает их сумму. Если передано два аргумента, она просто возвращает их сумму.
---------------------
⋙ ❍ Поменяйте местами значения целочисленных переменных, не используя временные переменные. Первый вариант – используя ES6, и второй вариант – используя ES5. ?
---
var a = 1;
var b = 2;

// b = 1;
// a = 2;
1
2
3
4
5
var a = 1;
var b = 2;

// b = 1;
// a = 2;
Используя ES6:
```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b); // Выведет: 2 1
```
Используя ES5:
```javascript
var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // Выведет: 2 1
```
---------------------
⋙ ❍ Напишите функцию, проверяющую число на четность, используя только битовые операции ?
---
Функция, которая проверяет число на четность, используя только битовые операции:
```javascript
function isEven(number) {
  // Проверяем младший бит числа
  // Если младший бит равен 0, число четное, иначе нечетное
  return (number & 1) === 0;
}

// Пример использования функции
console.log(isEven(4)); // Выведет true, потому что 4 - четное число
console.log(isEven(7)); // Выведет false, потому что 7 - нечетное число
```
Эта функция использует побитовое И (`&`) с числом 1, чтобы проверить младший бит числа. Если младший бит равен 0, это означает, что число четное, иначе это нечетное число.
---------------------
⋙ ❍ Дан не сложный компонент на реакте и необходимо провести ревью (заюзать хуки useMemo / useCallback, вынести повторяющийся код в функцию или переменную и что-то там еще было) ?
---
Давайте посмотрим на ваш компонент и проведем ревью, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Давайте оптимизируем этот компонент:
1. Хранение удвоенного значения с помощью `useMemo`:
 ```javascript
 const doubleCount = useMemo(() => count * 2, [count]);
 ```
2. Оптимизация обработчиков событий с помощью `useCallback`:
 ```javascript
 const handleIncrement = useCallback(() => {
   setCount((prevCount) => prevCount + 1);
 }, []);

 const handleDecrement = useCallback(() => {
   setCount((prevCount) => prevCount - 1);
 }, []);
 ```
3. Вынос повторяющегося кода в функцию или переменную:
 ```javascript
 const increment = () => {
   setCount((prevCount) => prevCount + 1);
 };

 const decrement = () => {
   setCount((prevCount) => prevCount - 1);
 };
 ```
Вот полный код с примененными оптимизациями:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
/Давайте проведем ревью компонента, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Оптимизированный код:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
---------------------
⋙ ❍ Задача на рекурсию ?
---
Простая задача на рекурсию: написать функцию для вычисления факториала числа.
Факториал числа \( n \) (обозначается как \( n! \)) - это произведение всех положительных целых чисел от 1 до \( n \). Например, факториал 5 (обозначается как \( 5! \)) равен \( 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Вот решение на JavaScript с использованием рекурсии:
```javascript
function factorial(n) {
  // Базовый случай: если n равно 0 или 1, вернуть 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивный случай: вычислить факториал числа n как произведение n и факториала (n - 1)
  else {
    return n * factorial(n - 1);
  }
}

// Пример использования функции
console.log(factorial(5)); // Выведет 120
```
Эта функция рекурсивно вызывает саму себя до достижения базового случая (когда \( n = 0 \) или \( n = 1 \)), а затем возвращает результат.
---------------------------------------------------------------------------------------------
