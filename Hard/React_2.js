RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как я могу использовать несколько ссылок для массива элементов с хуками?
Вопросы
JAVASCRIPT
Как я могу использовать несколько ссылок для массива элементов с хуками?
Насколько я понял, я могу использовать refs для одного элемента следующим образом:

const { useRef, useState, useEffect } = React;

const App = () => {
  const elRef = useRef();
  const [elWidth, setElWidth] = useState();

  useEffect(() => {
    setElWidth(elRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref = {elRef} style = {{ width: "100px" }}>
        Width is: {elWidth}
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Как я могу реализовать это для массива элементов? Явно не так: (я это знал, даже не пробовал :)

const { useRef, useState, useEffect } = React;

const App = () => {
  const elRef = useRef();
  const [elWidth, setElWidth] = useState();

  useEffect(() => {
    setElWidth(elRef.current.offsetWidth);
  }, []);

  return (
    <div>
      {[1, 2, 3].map(el => (
        <div ref = {elRef} style = {{ width: `${el * 100}px` }}>
          Width is: {elWidth}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Я видел это и, следовательно, это. Но я все еще не понимаю, как реализовать это предложение для этого простого случая.

 11.02.2019 16:18
141
4
146 526
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Ссылка изначально является просто объектом { current: null }. useRef хранит ссылку на этот объект между рендерами компонентов. Значение current в первую очередь предназначено для ссылок на компоненты, но может содержать что угодно.

В какой-то момент должен быть массив ссылок. В случае, если длина массива может варьироваться между рендерами, массив должен масштабироваться соответствующим образом:

const arrLength = arr.length;
const [elRefs, setElRefs] = React.useState([]);

React.useEffect(() => {
  // add or remove refs
  setElRefs((elRefs) =>
    Array(arrLength)
      .fill()
      .map((_, i) => elRefs[i] || createRef()),
  );
}, [arrLength]);

return (
  <div>
    {arr.map((el, i) => (
      <div ref = {elRefs[i]} style = {...}>
        ...
      </div>
    ))}
  </div>
);
Этот фрагмент кода можно оптимизировать, развернув useEffect и заменив useState на useRef, но следует отметить, что использование побочных эффектов в функции рендеринга обычно считается плохой практикой:

const arrLength = arr.length;
const elRefs = React.useRef([]);

if (elRefs.current.length !== arrLength) {
  // add or remove refs
  elRefs.current = Array(arrLength)
    .fill()
    .map((_, i) => elRefs.current[i] || createRef());
}

return (
  <div>
    {arr.map((el, i) => (
      <div ref = {elRefs.current[i]} style = {...}>
        ...
      </div>
    ))}
  </div>
);
 11.02.2019 16:32
Обратите внимание, что вы не должны использовать useRef в цикле по простой причине: порядок используемых хуков имеет значение!

В документации говорится

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

Но учтите, что это, очевидно, относится к динамическим массивам... но если вы используете статические массивы (вы ВСЕГДА визуализируете одно и то же количество компонентов), не беспокойтесь об этом слишком сильно, знайте, что вы делаете, и используйте это. ?

 11.02.2019 17:09
Как вы нельзя использовать хуки внутри циклов, вот решение, чтобы заставить его работать, когда массив меняется с течением времени.

Я полагаю, что массив исходит из реквизита:

const App = props => {
    const itemsRef = useRef([]);
    // you can access the elements with itemsRef.current[n]

    useEffect(() => {
       itemsRef.current = itemsRef.current.slice(0, props.items.length);
    }, [props.items]);

    return props.items.map((item, i) => (
      <div 
          key = {i} 
          ref = {el => itemsRef.current[i] = el} 
          style = {{ width: `${(i + 1) * 100}px` }}>
        ...
      </div>
    ));
}
 09.05.2019 17:42
Вы можете использовать массив (или объект), чтобы отслеживать все ссылки и использовать метод для добавления ссылок в массив.

ПРИМЕЧАНИЕ. Если вы добавляете и удаляете ссылки, вам придется очищать массив каждый цикл рендеринга.

import React, { useRef } from "react";

const MyComponent = () => {
   // intialize as en empty array
   const refs = useRefs([]); // or an {}
   // Make it empty at every render cycle as we will get the full list of it at the end of the render cycle
   refs.current = []; // or an {}

   // since it is an array we need to method to add the refs
   const addToRefs = el => {
     if (el && !refs.current.includes(el)) {
       refs.current.push(el);
     }
    };
    return (
     <div className = "App">
       {[1,2,3,4].map(val => (
         <div key = {val} ref = {addToRefs}>
           {val}
         </div>
       ))}
     </div>
   );

}
рабочий пример https://codesandbox.io/s/serene-hermann-kqpsu

 26.01.2020 04:07
Мы не можем использовать состояние, потому что нам нужно, чтобы ссылка была доступна до вызова метода рендеринга. Мы не можем вызывать useRef произвольное количество раз, но можем вызвать его один раз:

Предполагая, что arr - это реквизит с множеством вещей:

const refs = useRef([]);
// free any refs that we're not using anymore
refs.current = refs.current.slice(0, arr.length);
// initialize any new refs
for (let step = refs.current.length; step < arr.length; step++) {
    refs.current[step] = createRef();
}
 19.02.2020 22:51
Есть два способа

используйте один ссылка с несколькими элементами Текущий
const inputRef = useRef([]);

inputRef.current[idx].focus();

<input
  ref = {el => inputRef.current[idx] = el}
/>
const {useRef} = React;
const App = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = idx => e => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus()
    }
  };
  return (
    <div className = "App">
      <div className = "input_boxes">
        {list.map(x => (
        <div>
          <input
            key = {x}
            ref = {el => inputRef.current[x] = el} 
            onChange = {handler(x)}
            type = "number"
            className = "otp_box"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
используйте массив ссылка

Как сказано в приведенном выше сообщении, это не рекомендуется, поскольку официальное руководство (и внутренняя проверка на ворсинки) не позволит ему пройти.

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders.

Однако, поскольку это не наш текущий случай, приведенная ниже демонстрация все еще работает, но не рекомендуется.

const inputRef = list.map(x => useRef(null));

inputRef[idx].current.focus();

<input
  ref = {inputRef[idx]}
/>
const {useRef} = React;
const App = () => {
const list = [...Array(8).keys()];
const inputRef = list.map(x => useRef(null));
const handler = idx => () => {
  const next = inputRef[idx + 1];
  if (next) {
    next.current.focus();
  }
};
return (
  <div className = "App">
    <div className = "input_boxes">
      {list.map(x => (
      <div>
        <input
          key = {x}
          ref = {inputRef[x]}
          onChange = {handler(x)}
          type = "number"
          className = "otp_box"
        />
      </div>
      ))}
    </div>
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("root"));
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
 01.04.2020 20:08
Предполагая, что ваш массив содержит не примитивы, вы можете использовать WeakMap в качестве значения Ref.

function MyComp(props) {
    const itemsRef = React.useRef(new WeakMap())

    // access an item's ref using itemsRef.get(someItem)

    render (
        <ul>
            {props.items.map(item => (
                <li ref = {el => itemsRef.current.set(item, el)}>
                    {item.label}
                </li>
            )}
        </ul>
    )
}
 10.06.2020 10:21
Если я правильно понимаю, useEffect следует использовать только для побочных эффектов, по этой причине вместо этого я решил использовать useMemo.

const App = props => {
    const itemsRef = useMemo(() => Array(props.items.length).fill().map(() => createRef()), [props.items]);

    return props.items.map((item, i) => (
        <div 
            key = {i} 
            ref = {itemsRef[i]} 
            style = {{ width: `${(i + 1) * 100}px` }}>
        ...
        </div>
    ));
};
Затем, если вы хотите манипулировать элементами/использовать побочные эффекты, вы можете сделать что-то вроде:

useEffect(() => {
    itemsRef.map(e => e.current).forEach((e, i) => { ... });
}, [itemsRef.length])
 18.10.2020 03:28
Самый простой и эффективный способ — вообще не использовать useRef. Просто используйте ссылка обратного вызова, который создает новый массив ссылок при каждом рендеринге.

function useArrayRef() {
  const refs = []
  return [refs, el => el && refs.push(el)]
}
Демо
<div id = "root"></div>

<script type = "text/babel" defer>
const { useEffect, useState } = React

function useArrayRef() {
  const refs = []
  return [refs, el => el && refs.push(el)]
}

const App = () => {
  const [elements, ref] = useArrayRef()
  const [third, setThird] = useState(false)
  
  useEffect(() => {
    console.info(elements)
  }, [third])

  return (
    <div>
      <div ref = {ref}>
        <button ref = {ref} onClick = {() => setThird(!third)}>toggle third div</button>
      </div>
      <div ref = {ref}>another div</div>
      { third && <div ref = {ref}>third div</div>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
</script>

<script src = "https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
<script src = "https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
 24.07.2021 12:47
React будет повторно отображать элемент при изменении его ссылки (ссылочное равенство/проверка «тройного равенства»).

Большинство ответов здесь не учитывают это. Еще хуже: когда родитель визуализирует и повторно инициализирует объекты ref, все дочерние элементы будут повторно визуализированы, даже если это запомненные компоненты (React.PureComponent или React.memo)!

Приведенное ниже решение не имеет ненужных повторных рендеров, работает с динамическими списками и даже не создает реальных побочных эффектов. Доступ к неопределенной ссылке невозможен. Ссылка инициализируется при первом чтении. После этого он остается референциально устойчивым.

const useGetRef = () => {
  const refs = React.useRef({})
  return React.useCallback(
    (idx) => (refs.current[idx] ??= React.createRef()),
    [refs]
  )
}

const Foo = ({ items }) => {
  const getRef = useGetRef()
  return items.map((item, i) => (
    <div ref = {getRef(i)} key = {item.id}>
      {/* alternatively, to access refs by id: `getRef(item.id)` */}
      {item.title}
    </div>
  ))
}
Предостережение: Когда items со временем сжимается, неиспользуемые объекты ref не удаляются. Когда React размонтирует элемент, он правильно установит ref[i].current = null, но «пустые» ссылки останутся.

 03.01.2022 23:53
Другие вопросы по теме
GatsbyJS: ошибка TS2451: невозможно повторно объявить переменную блочной области 'react_1'
Как передать переменную при отправке функции выборки в реагирующем компоненте?
Как обновить THREE.DataTexture в ответ из буфера массива
TypeError: Object(...) не является функцией при экспорте страницы
SyntaxError: JSON.parse: неожиданный конец данных в строке 1 столбца 1 данных JSON[Подробнее]
Параметр маршрута на первом месте всегда перемонтирует компонент - React Router v4
Функция вызова передается как реквизит в Enzym
Невозможно воспроизвести эффект затухания в React
Переменные состояния связаны с именами редукторов в избыточности
Как проверить конкретное значение css-свойства React-элемента?
Похожие вопросы
Открыть в новой вкладке, но не сгруппировать с родительской вкладкой
GatsbyJS: ошибка TS2451: невозможно повторно объявить переменную блочной области 'react_1'
Как передать переменную при отправке функции выборки в реагирующем компоненте?
Массив фильтров (с вложенными объектами) с помощью динамических реквизитов
Среднее значение каждого часа в массиве
Как получить свойства нижнего уровня из массива объектов внутри другого массива объектов в JavaScript
SyntaxError: JSON.parse: неожиданный конец данных в строке 1 столбца 1 данных JSON[Подробнее]
Скрытие и отображение определенного элемента
Инициализировать var одного компонента, когда я вызываю функцию этого компонента?
Поиск чисел в массиве с определенной суммой
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Преобразование массива объектов в новую структуру массива
Вопросы
JAVASCRIPT
Преобразование массива объектов в новую структуру массива
Извиняюсь, но я изучаю манипулирование массивами, пробовал кое-что, как и раньше, но просто не могу понять это. Я создаю приложение для реагирования и получил свои данные обратно из пользовательского интерфейса, но мне нужно переформатировать для API. Мой груз выглядит так...

0: {from: "U20", Id: "1922", to: "U21"}
1: {from: "U20", Id: "9338", to: "U21"}
2: {from: "U20", Id: "1927", to: "U21"}
3: {from: "U20", Id: "1730", to: "U21"}
Мне нужно создать группу для всех ids и опубликовать поля from и to.

{
    "from": "U20",
    "Ids": ["1922","9338","1927","1730"],
    "to:": "U21"
}
У меня есть lodash в качестве вспомогательной библиотеки.

 12.02.2019 14:50
1
2
89
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Для группировки по 2-м ключам можно сделать что-то подобное с помощью reduce. Создайте объект-аккумулятор с новым ключом, представляющим собой комбинацию from и to.

const input = [
    { from: "U20", Id: "1922", to: "U21" },
    { from: "U20", Id: "9338", to: "U21" },
    { from: "U20", Id: "1927", to: "U21" },
    { from: "U20", Id: "1730", to: "U21" }
];

const merged = input.reduce((acc, { from, to, Id }) => {
    const key = `${from}-${to}`;
    acc[key] = acc[key] || { from, to, Ids:[] };
    acc[key]["Ids"].push(Id);
    return acc;
}, {})

const output = Object.values(merged);
console.info(output);
В вашем случае, если вы хотите просто первый объект, то output[0]

 12.02.2019 14:57
Если есть вероятность того, что в полях from и to будут разные значения, тогда ваш API должен измениться, чтобы принимать массив значений вместо одной строки. Однако, работая в предположении, что значения from и to всегда будут одинаковыми для каждого элемента в массиве...

const payload = [
  {from: "U20", Id: "9338", to: "U21"},
  {from: "U20", Id: "1927", to: "U21"},
  {from: "U20", Id: "1730", to: "U21"},
];

const newValue = {
  from: payload[0].from,
  to: payload[0].to,
  Ids: payload.map(item => item.Id)
};
 12.02.2019 15:01
Используйте уменьшение массива и в аккумуляторе передайте пустой объект. С помощью hasOwnProperty проверить, есть ли у объекта свойство from и если его значение совпадает, то в массив id протолкнуть значение

let data = [{
    from: "U20",
    Id: "1922",
    to: "U21"
  },
  {
    from: "U20",
    Id: "9338",
    to: "U21"
  },
  {
    from: "U20",
    Id: "1927",
    to: "U21"
  },
  {
    from: "U20",
    Id: "1730",
    to: "U21"
  }
]


let newData = data.reduce(function(acc, curr) {
  if (acc.hasOwnProperty('from') && acc.from === curr.from) {
    acc.id.push(curr.Id)
  } else {
    acc = {
      from: curr.from,
      id: [curr.Id],
      to: curr.to
    }

  }
  return acc;
}, {});

console.info(newData)
 12.02.2019 15:02
const a = [
  {from: "U20", Id: "1922", to: "U21"},
  {from: "U20", Id: "9338", to: "U21"},
  {from: "U20", Id: "1927", to: "U21"},
  {from: "U20", Id: "1730", to: "U21"},
  {from: "U21", Id: "1745", to: "U22"},
  {from: "U21", Id: "1755", to: "U22"},
]

const f = array => {
  const result = []
  // key-value storage
  const variations = {}
  array.forEach(item => {
    // set storage key
    const key = `${item.from}-${item.to}`;
    // check if key exists
    // if exists use it, if not - create empty array
    variations[key] = variations[key] || []
    // push item ids to storage
    variations[key].push(item.Id)
  })
  Object.keys(variations).map(variation => {
    // deconstruct storage key back to "from" and "to" values
    const [from, to] = variation.split('-');
    const obj = {};
    // write "from" and "to" values
    obj.from = from;
    obj.to = to;
    // add stored values
    obj.ids = variations[variation]
    // save
    result.push(obj)
  })
  console.info(result)
}

f(a)
 12.02.2019 15:03
С помощью следующего вы можете вести учет каждого списка Ids для каждой пары ключей from -> to.

const entries = [
	{ from: 'U20', to: 'U21', Id: '1922' },
	{ from: 'U20', to: 'U21', Id: '9338' },
	{ from: 'U20', to: 'U21', Id: '1927' },
	{ from: 'U20', to: 'U21', Id: '1730' },
]

const output = entries.reduce((map, {from, to, Id}) =>
{
	if (!map[from])
	{
		map[from] = {}
	}
	
	if (!map[from][to])
	{
		map[from][to] = {from, to, Ids: []}
	}
	
	map[from][to].Ids.push(Id)
	
	return map
}, {})

console.info(output)
 12.02.2019 15:06
Попробуй это

var idArray = [];
var newObj = {};
 var objArray = [{
    "from": "U20",
    "Id": "1922",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "9338",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "1927",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "1730",
    "to": "U21"
}
]

      for(var i=0; i<objArray.length; i++) {
    for(var key in objArray[i]) {
      if (key == 'Id') idArray.push(objArray[i][key])
    }
  }
  newObj.from = objArray[0].from;
  newObj.to = objArray[0].to;
  newObj.Id = idArray;
  console.info(JSON.stringify(newObj));
 12.02.2019 15:17
Немного другой подход, использующий Map и объединенный ключ для группировки с двумя значениями.

var data = [{ from: "U20", Id: "1922", to: "U21" }, { from: "U20", Id: "9338", to: "U21" }, { from: "U20", Id: "1927", to: "U21" }, { from: "U20", Id: "1730", to: "U21" }, { from: "U20", Id: "1730", to: "U22" }, { from: "U21", Id: "1730", to: "U22" }],
    result = Array.from(data
        .reduce(
             (m, { from, to, Id }) =>
                 (k => m.set(k, { from, to, Ids: [...(m.has(k) ? m.get(k).Ids : []), Id] }))
                 ([from, to].join('|')),
             new Map
        )
        .values()
    );

console.info(result);
.as-console-wrapper { max-height: 100% !important; top: 0; }
 12.02.2019 15:18
И еще одно решение:

const compare = (o1, o2) => o1.from === o2.from && o1.to === o2.to
return entries
    .reduce((arr,entry) => !arr.find(a=>compare(a,entry)) ? arr.concat(entry) : arr, [])
    .map( ({from,to})=> ({
        from,
        to,
        ids: entries.filter(i=>compare(i,{from,to})).map(({id})=>id)
        }))
 12.02.2019 16:39
Это решение использует Лодаш/fp для группировки всех объектов в массиве с помощью комбинации реквизитов from и to. Затем он отображает все группы обратно в массив, объединяя все объекты в каждой группе. Если объединенный реквизит — Id, он объединяет значения в массив.

const { flow, groupBy, props, join, map, mergeAllWith, cond, nthArg, eq, concat } = _;

const fn = flow(
  groupBy(flow(                // group by joining from and to as the key
    props(['from', 'to']),
    join('-')
  )),
  map(mergeAllWith(cond([[     // merge all objects in each group
    flow(nthArg(2), eq('Id')), // if the prop name is Id, concat the values
    concat
  ]])))
);

const input = [
    { from: "U20", Id: "1922", to: "U21" },
    { from: "U20", Id: "9338", to: "U21" },
    { from: "U20", Id: "1927", to: "U21" },
    { from: "U20", Id: "1730", to: "U21" }
];

const result = fn(input);

console.info(result);
<script src='https://cdn.jsdelivr.net/g/lodash@4(lodash.min.js+lodash.fp.min.js)'></script>
 12.02.2019 20:51
Это просто. Ты можешь это сделать

const arr = [
     {from: "U20", Id: "1922", to: "U21"},
     {from: "U20", Id: "9338", to: "U21"},
     {from: "U20", Id: "1927", to: "U21"},
     {from: "U20", Id: "1730", to: "U21"}]

const newObject = {
    from: arr[0].from,
    Ids: arr.map(record => (record.Id)),
    to: arr[0].to
    }
 13.02.2019 07:40
Другие вопросы по теме
Как привязать цветовую карту к массиву?
Почему я не могу вводить значения по 0-му индексу массива строк?
Распечатать каждый N-й элемент из массива JS
Python – сортировка огромного массива на несколько
PHP вставляет mysql NULL в значение пустого массива для вставки PDO
Упорядочить массив и сгруппировать по типам ввода
Как получить значение, которое присутствует в атрибуте массива?
Преобразование многомерного массива в разные массивы в javascript
Итерация массива внутри массива и привязка данных в html с использованием интерполяции строк в angular
Удаление элементов из списка массивов без использования позиции
Похожие вопросы
Как использовать канал значения ключа Angular 6.1 и указать отображаемые пары значений ключа?
Подключить ECONNREFUSED 127.0.0.1:443 при вызове запроса POST внутри запроса GET
Автообновление страницы JSP по таймеру
Не удается отобразить pdf, передав Uint8Array в параметре файла viewer.html при использовании pdfjs
Как скрыть/отобразить кнопку маршрутизатора для определенного компонента в vuejs
Собственный способ JavaScript для просмотра дерева документов при сравнении объектов
Как преобразовать kebab-case в PascalCase?
Фильтр JQuery на основе совпадения текста в строке
Я хочу запустить пользовательский JS, но браузер говорит, что это небезопасно, и не загружает его, не разрешив скрипт вручную в браузере
Решить Минимизировать глубину критических запросов - Производительность страницы
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Метод push в React Hooks (useState)?
Вопросы
JAVASCRIPT
Метод push в React Hooks (useState)?
Как вставить элемент внутрь массива useState React hook? Это старый метод в состоянии реакции? Или что-то новое?

Например. Пример push-уведомления setState ?

 13.02.2019 19:21
232
0
284 931
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Когда вы используете useState, вы можете получить метод обновления для элемента состояния:

const [theArray, setTheArray] = useState(initialArray);
затем, когда вы хотите добавить новый элемент, вы используете эту функцию и передаете новый массив или функцию, которая создаст новый массив. Обычно последнее, поскольку обновления состояния являются асинхронными и иногда пакетными:

setTheArray(oldArray => [...oldArray, newElement]);
Иногда вы можете обойтись без использования этой формы обратного вызова, если вы Только обновите массив в обработчиках для определенных конкретных пользовательских событий, таких как click (но не как mousemove):

setTheArray([...theArray, newElement]);
События, для которых React гарантирует, что рендеринг сбрасывается, являются «дискретными событиями», перечисленными здесь.

Живой пример (передача обратного вызова в setTheArray):

const {useState, useCallback} = React;
function Example() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray(oldArray => [...oldArray, `Entry ${oldArray.length}`]);
    };
    return [
        <input type = "button" onClick = {addEntryClick} value = "Add" />,
        <div>{theArray.map(entry =>
          <div>{entry}</div>
        )}
        </div>
    ];
}

ReactDOM.render(
    <Example />,
    document.getElementById("root")
);
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
Поскольку единственное обновление для theArray есть в событии click (одно из «дискретных» событий), я мог бы обойтись прямым обновлением в addEntry:

const {useState, useCallback} = React;
function Example() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray([...theArray, `Entry ${theArray.length}`]);
    };
    return [
        <input type = "button" onClick = {addEntryClick} value = "Add" />,
        <div>{theArray.map(entry =>
          <div>{entry}</div>
        )}
        </div>
    ];
}

ReactDOM.render(
    <Example />,
    document.getElementById("root")
);
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
 13.02.2019 19:25
Точно так же вы делаете это с «нормальным» состоянием в компонентах класса React.

пример:

function App() {
  const [state, setState] = useState([]);

  return (
    <div>
      <p>You clicked {state.join(" and ")}</p>
      //destructuring
      <button onClick = {() => setState([...state, "again"])}>Click me</button>
      //old way
      <button onClick = {() => setState(state.concat("again"))}>Click me</button>
    </div>
  );
}
 13.02.2019 19:27
Чтобы немного расшириться, вот несколько распространенных примеров. Начиная с:

const [theArray, setTheArray] = useState(initialArray);
const [theObject, setTheObject] = useState(initialObject);
Вставить элемент в конец массива

setTheArray(prevArray => [...prevArray, newValue])
Нажмите/обновите элемент в конце объекта

setTheObject(prevState => ({ ...prevState, currentOrNewKey: newValue}));
Нажмите/обновите элемент в конце массива объектов

setTheArray(prevState => [...prevState, {currentOrNewKey: newValue}]);
Вставьте элемент в конец объекта массивов

let specificArrayInObject = theObject.array.slice();
specificArrayInObject.push(newValue);
const newObj = { ...theObject, [event.target.name]: specificArrayInObject };
theObject(newObj);
Вот несколько рабочих примеров. https://codesandbox.io/s/reacthooks-push-r991u

 25.10.2019 11:44
setTheArray([...theArray, newElement]); — самый простой ответ, но будьте осторожны с изменением элементов в массив. Используйте глубокое клонирование элементов массива.

 13.12.2019 06:20
Наиболее рекомендуемый метод — совместное использование функции-оболочки и оператора распространения. Например, если вы инициализировали состояние под названием name вот так,

const [names, setNames] = useState([])

Вы можете нажать на этот массив следующим образом:

setNames(names => [...names, newName])
Надеюсь, это поможет.

 09.04.2020 16:21
// Save search term state to React Hooks with spread operator and wrapper function

// Using .concat(), no wrapper function (not recommended)
setSearches(searches.concat(query))

// Using .concat(), wrapper function (recommended)
setSearches(searches => searches.concat(query))

// Spread operator, no wrapper function (not recommended)
setSearches([...searches, query])

// Spread operator, wrapper function (recommended)
setSearches(searches => [...searches, query])
https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc

 13.05.2020 20:20
Я попробовал описанные выше методы для помещения объекта в массив объектов в useState, но при использовании Машинопись возникла следующая ошибка:

Type 'TxBacklog[] | undefined' must have a 'Symbol.iterator' method that returns an iterator.ts(2488)

Настройка для tsconfig.json, по-видимому, была правильной:

{
   "compilerOptions": {
   "target": "es6",
   "lib": [
      "dom",
      "dom.iterable",
      "esnext",
      "es6",
],
Этот обходной путь решил проблему (мой пример кода):

Интерфейс:

   interface TxBacklog {
      status: string,
      txHash: string,
   }
Переменная состояния:

    const [txBacklog, setTxBacklog] = React.useState<TxBacklog[]>();
Вставьте новый объект в массив:

    // Define new object to be added
    const newTx = {
       txHash: '0x368eb7269eb88ba86..',
       status: 'pending'
    };
    // Push new object into array
    (txBacklog) 
       ? setTxBacklog(prevState => [ ...prevState!, newTx ])
       : setTxBacklog([newTx]);
 13.11.2020 11:40
если вы хотите нажать после определенного индекса, вы можете сделать следующее:

   const handleAddAfterIndex = index => {
       setTheArray(oldItems => {
            const copyItems = [...oldItems];
            const finalItems = [];
            for (let i = 0; i < copyItems.length; i += 1) {
                if (i === index) {
                    finalItems.push(copyItems[i]);
                    finalItems.push(newItem);
                } else {
                    finalItems.push(copyItems[i]);
                }
            }
            return finalItems;
        });
    };
 16.11.2020 15:00
Вы можете добавить массив данных в конце пользовательского состояния:

  const [vehicleData, setVehicleData] = React.useState<any[]>([]);
  setVehicleData(old => [...old, ...newArrayData]);
Например, ниже вы видите пример аксиом:

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        {
          url: `http://localhost:4000/api/vehicle?page=${page + 1}&pageSize=10`,
          method: 'get',
        }
      );
      setVehicleData(old => [...old, ...result.data.data]);
    };

    fetchData();
  }, [page]);
 22.12.2020 18:25
Создание состояния массива с помощью useState() Во-первых, давайте посмотрим, как использовать хук useState() для создания переменной состояния массива.

import React from "react";

const { useState } = React;

const [myArray, setMyArray] = useState([]);
Однако с React нам нужно использовать метод, возвращаемый из useState, для обновления массива.

setMyArray(oldArray => [...oldArray, newElement]);
узнать больше

 27.08.2021 00:30
Другие вопросы по теме
Можно ли анимировать вид при обновлении состояния в родном реагировании
Yelp API (fusion) в интерфейсном проекте React
При отправке редукционной формы циклическая запись axios для множественных значений
Как использовать Tinypaginator с шрифтом в ReactJS?
Реагировать на диспетчеризацию асинхронных действий
Ответ не конвертируется в JSON
Приложение React аварийно завершает работу, если API-URL недействителен
Как показать компонент в React и обновить его жизненный цикл каждый раз, когда он показывается?
Нечетный красивый отступ с React
DraftJS сохраняет данные и управляет данными в блоке рендеринга
Похожие вопросы
Как создать линейный график QChart.js
Я хотел бы добавить кнопку удаления в свое приложение Angular
Функция сумматора процентного калькулятора Javascript не работает
Динамически изменять функцию обработчика onPress в реактивном нативе
Как выровнять и избавиться от перекрывающихся видео?
Как мне иметь несколько классов для прослушивания события click в Javascript?
Неожиданное поведение при экранировании обратной косой черты JS
Yelp API (fusion) в интерфейсном проекте React
React-Native FlatList с индивидуальным состоянием для каждого компонента
У меня проблема в случае переключения *javascript
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Reactjs «Ошибка: ENOENT: нет такого файла или каталога, откройте ..» после преобразования файла jsx в tsx
Вопросы
REACTJS
Reactjs «Ошибка: ENOENT: нет такого файла или каталога, откройте ..» после преобразования файла jsx в tsx
У меня есть приложение create-react-app, и я перевожу файлы с jsx на typescript. Например, один файл называется /code/app_react/src/common/Action.jsx, и я переименовал его в /code/app_react/src/common/Action.tsx. Я внес необходимые изменения, чтобы успешно преобразовать его в tsx, но получаю сообщение об ошибке, связанное с изменением имени:

./src/common/Action.jsx Error: ENOENT: no such file or directory, open '/code/src/common/Action.jsx'

переустановка не помогает
почему-то ожидается старая версия файла
Файл, импортирующий этот файл, является файлом jsx, но теперь я импортирую в него файл tsx.

Это приложение CRA, так есть ли правильный способ устранить эту ошибку?

РЕШЕНИЕ: Мне пришлось удалить их из репозитория git, используя команду git rm, вот так:

git rm /code/src/common/Action.jsx
Как только я это сделал, он удалил jsx из зафиксированных файлов, а затем я смог использовать новые tsx файлы.

 06.03.2019 04:55
34
6
55 101
10
 Ответы 10
Возможно, вы не импортировали файл. Вам нужно импортировать файл, чтобы использовать его.

import Action from '/code/app_react/src/common/Action.tsx';
Также добавьте это в свой webpack.config.js.

resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
},
Вы готовы идти!

 06.03.2019 05:38
У меня была эта проблема (хотя я переименовал js в jsx, а не jsx в tsx), и решение, добавленное к вопросу (запуск git rm в исходном файле), у меня не сработало.

Что сработало, было предложено эта ветка r/reactjs Reddit: удаление и переустановка node_modules:

rm -rf node_modules && npm i
 29.10.2019 11:15
У меня была такая же проблема, не нужно удалять node_modules или удалять целевой файл, вам просто нужно убить процесс узла.

Если вы на windows:

ctrl+alt+delete для запуска диспетчера задач
найти node
завершить процесс
Если вы на linux:

наверное что-то вроде pkill node и т.д.
После того, как я убил процесс node и снова запустил npm start, он находит целевой файл.

 05.02.2020 07:30
Убил мой запущенный процесс пряжи, убил vscode, перезапустил оба, и он работает

 14.02.2020 16:38
Я работал с редуксом, а потом наткнулся на эту ошибку!

Я попытался убить узел, удалить модули узла, перезагрузить ноутбук, но он все равно выдавал ту же ошибку, а позже я начал отлаживать index.js.

Я прокомментировал каждую строку и начал раскомментировать сверху, чтобы увидеть, где код ломается, а затем заметил

I had not installed

redux

I had only installed react-redux

 27.09.2020 02:57
Просто перезапустите сервер npm, он автоматически обнаружит файл машинописного текста и внесет коррективы.

 27.09.2020 04:47
У меня была такая же проблема с преобразованием .jsx в .tsx. Если вы используете Parcel для создания своего приложения, удалите папку .cache. Вот где Parcel кэширует файлы сборки. Это исправило это для меня.

 22.10.2020 19:07
Это происходит из-за предустановленного кеша. Простым решением было бы перезапустить ваше приложение nodejs и реагировать.

В Linux

$ pkill node   

$ killall node  

$ kill -9 <pid>
В Windows

C:\>taskkill /im node.exe

C:\>taskkill /f /im node.exe

C:\>taskkill /pid <PID of node>
В MacOS

$sudo killall -9 node
А затем снова запустите приложение React.

npm start
 07.01.2021 12:51
Я вручную удалил папку node_modules и переустановил их, запустив npm i, и трюк у меня сработал.

 24.01.2021 16:40
Простой перезапуск сервера работает.

Например: NPM RUN DEV или любой стартовый скрипт у меня работал.

 01.12.2021 06:53
Другие вопросы по теме
GAS/clasp: как заставить автозаполнение/intellisense работать в VSCode для сторонних библиотек
Проблемы с записью во вложенный массив объектов в Angular
Тестирование типизированных исключений с помощью Jest
Облачная транзакция Firebase вызывает ошибку
Каков вариант использования? Класс машинописного текста только со статическими членами и объектом со свойствами
Код Visual Studio с использованием JavaScript с файлом TypeScript в качестве эталона для Intellisense
Как определить тип TypeScript для оболочки объекта, которая имеет строку в качестве ключа и React SFC в качестве значения?
Фабрика компонентов не найдена для... Открытие модального окна
Как вы получаете свойства универсального типа в Typescript
Angular CanDeactivate Guard не работает с Sweet Alert JS
Похожие вопросы
Сортировка массива со значениями состояния в React и JSX
Как отображать уведомления из инструментов разработчика веб-браузера с помощью JavaScript?
Создание выпадающего меню - константная ошибка - Непредвиденная ошибка, требуется синтаксис ';'
Как получить событие клика в строке таблицы в реакции js
Можно ли передать функцию с параметрами в качестве реквизита, а затем ссылаться на эту функцию как на реквизит?
Пользовательские маркеры react-map-gl не остаются в точном положении при увеличении
Как получить внешний файл JSON в Django Rest Framework для использования с React?
ReactJs: Input onChange требует обновления каждый раз, чтобы изменить значение на входе
Как передать данные модальному дизайну Ant
Реагировать на состояние значения пусто после обновления состояния в ComponentDidMount
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на красивое DnD перетаскивание проблемы с позиции
Вопросы
REACTJS
Реагировать на красивое DnD перетаскивание проблемы с позиции
Я создал перетаскиваемую таблицу с перетаскиваемыми строками.
Я использую react beautiful-dnd для этого.
Когда я перетаскиваю строку, она смещается с места, а не на позицию моего курсора.
Когда я перетаскиваю строку, она получает position: fixed и некоторые top и left стили.
Я подозреваю, что проблема в этом, но почему он получает неправильные числа, из-за чего он не отображается в правильной позиции? Этот гифка покажет проблему.
Реагировать на красивое DnD перетаскивание проблемы с позиции

Это мой полный код:

import update from "immutability-helper";
import * as React from "react";
import * as ReactDnD from "react-dnd";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { toastr } from "react-redux-toastr";
import * as HttpHelper from "../../httpHelper";
import { FormState } from "../common/ValidatedForm";
import Addtagmodal from "../common/AttributeModal";
import AttributeModal from "./AttributeModal";
import PreviewModal from "./PreviewModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
/* import locale from "react-json-editor-ajrm/locale/en"; */
type Props = WithNamespaces & {
  id: number;
  displayName: string;
};

interface Fields {
  columns: any;
}

type State = FormState<Fields> & {
  isLoading: boolean,
  canSave: boolean,
  isSaving: boolean,
  possibleTags: any,
  configTagModalActive: boolean,
  previewModalActive: boolean,
  activeTag: any
};
const getItemStyle = (draggableStyle: any) => ({
  ...draggableStyle
});
const Card = (props: any) => {
  const opacitys = props.isDragging ? 0.3 : 1;

  function findindex(val: any) {
    return props.tags.some((item: any) => val === item.name);
  }
  let select;
  let selectStyle = {};
  let tagInputStyle = {};
  if (props.tags.length == 0 || props.tags.length > 3) {
    selectStyle = { border: "0px", outline: "none", width: "100%", height: "20px", backgroundColor: "transparent", zIndex: 0, float: "left", position: "relative" };
    tagInputStyle = {border: "1px solid #ced4da", height: "auto", width: "400px", padding: "8px", minHeight: "38px", background: "white"};
  }
  else {
    selectStyle = { border: "0px", outline: "none", width: "100%", height: "20px", backgroundColor: "transparent", zIndex: 0, float: "left", top: "-20px", position: "relative" };
    tagInputStyle = {border: "1px solid #ced4da", height: "auto", width: "400px", padding: "8px", minHeight: "38px", background: "white", marginTop: "10px"};
  }
  if (props.tags.length < 4) {
    select =
  <select value = "" className = "autocomplete-select" style = {selectStyle} id = {props.index} onChange = {props.onaddtag}>
    <option value = "" disabled ></option>
    {props.possibleTags.map((i: any) =>

      <option value = {i.name} disabled = {i.uses == 0 || findindex(i.name) == true ? true : false}>{i.name}</option>

    )}
  </select>;
  }
  else {
    select = undefined;
  }
  return (
        <tr ref = {props.provided.innerRef}
        {...props.provided.draggableProps} style = {getItemStyle(props.provided.draggableProps.style)} className = {(props.indexnr % 2 ? "whiterow" : "grayrow")} key = {props.indexnr} data-id = {props.indexnr} >
          <td {...props.provided.dragHandleProps} style = {{width: "50px", textAlign: "center"}}><i className = "fa fa-bars" style = {{lineHeight: "40px", fontSize: "24px"}}></i></td>
          <td style = {{ textAlign: "center", width: "80px" }}>
            <input
              type = "checkbox"
              className = "flipswitch"
              id = {props.index}
              checked = {props.export}
              onChange = {props.oncheck}
            />
          </td>
          <td>
            <input
              type = "text"
              name = "caption"
              id = {props.index}
              className = "form-control"
              value = {props.caption}
              onChange = {props.ontextupdate}
            />
          </td>
          <td>
            <input
              type = "text"
              name = "fieldname"
              id = {props.index}
              className = "form-control"
              value = {props.fieldname}
              onChange = {props.ontextupdate}
            />
          </td>
          <td style = {{width: "400px"}}>
            <div className = "tags-input" style = {tagInputStyle}>
            {Object.keys(props.tags).map((key, i) =>
              <div key = {key} style = {{backgroundColor: "#0753ad", height: "20px", borderRadius: "3px", display: "inline-block", padding: "5px", lineHeight: "12px", float: "left", color: "white", marginRight: "5px", fontSize: "10px", width: "90px", position: "relative", zIndex: 20}}>
                {props.tags[i].name} <i className = "fa fa-trash" id = {props.index} data-key = {i} data-name = {props.tags[i].name} onClick = {props.ondeletetag} style = {{float: "right"}} ></i><i className = "fa fa-cog" data-id = {i} data-parent = {props.index} style = {{float: "right", marginRight: "5px"}} onClick = {props.onConfigButtonClicked}></i>
              </div>
            )}
            {select}
            </div>
           </td>
          <td style = {{ textAlign: "center", width: "80px" }}>
          <button onClick = {() => props.ondeleterow(props.index)} type = "button" style = {{padding : "8px 16px" }} className = "btn btn-danger btn-rounded"><i className = "fa fa-trash"></i></button>
          </td>
        </tr>
  );
};
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  console.info(startIndex, endIndex, removed);
  result.splice(endIndex, 0, removed);

  return result;
};
interface SetColumnsResponse extends HttpHelper.ResponseData { columns: any; }

class CrmConnectorColumns extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.oncheck = this.oncheck.bind(this);
    this.ontextupdate = this.ontextupdate.bind(this);
    this.ondeleterow = this.ondeleterow.bind(this);
    this.onaddnewrow = this.onaddnewrow.bind(this);
    this.ondeletetag = this.ondeletetag.bind(this);
    this.onaddtag = this.onaddtag.bind(this);
    this.onConfigButtonClicked = this.onConfigButtonClicked.bind(this);
    this.onPreviewButtonClicked = this.onPreviewButtonClicked.bind(this);
    this.onClosePreview = this.onClosePreview.bind(this);
    this.state = {
      isLoading: true,
      isSaving: false,
      canSave: false,
      errorColor: "danger",
      fields: { columns: {} },
      deleteModalActive: false,
      configTagModalActive: false,
      previewModalActive: false,
      activeTag: {name: "", attributes: [{name: "", value: ""}]},
      possibleTags: [
        {name: "SUBTITLE", status: "new", helptexts: [{language: "nl", helptext: "Dit is de subtitel van een record"}], attributes: [], uses: 1},
        {name: "URL", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien als html link."}], attributes: [{name: "link", status: "new", helptexts: [{language: "nl", helptext: "De link is deze waarde. Voorbeeld waarde is \"http://www.google.nl?search=[naam]\". op de plaats van \"[naam]\" wordt de waarde van het veld \"naam\" ingevuld."}], uses: undefined}]},
        {name: "TITLE", status: "new", helptexts: [{language: "nl", helptext: "Dit is de hoofdtitel van een record"}], attributes: [], uses: 1},
        {name: "PHONE", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien telefoonnummer"}], attributes: [], uses: undefined},
        {name: "BUTTON", status: "new", helptexts: [{language: "nl", helptext: "Uiterlijk van een knop"}], attributes: [], uses: undefined},
        {name: "EMAIL", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien e-mail adres"}], attributes: [], uses: undefined},
        {name: "IMAGE", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt als afbeelding weergegeven"}], attributes: [], uses: undefined},
        {name: "HTML", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien als HTML"}], attributes: [{name: "HTML code", status: "new", helptexts: [{language: "nl", helptext: "Vul hier je custom HTML code in. De waarde tussen de [] word vervangen door de data."}], uses: undefined}]}
      ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result: any) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    let newlist = [...this.state.fields.columns];
    newlist = reorder(
      newlist,
      result.source.index,
      result.destination.index
    );
    Object.keys(newlist).forEach((nr) => {
      newlist[parseInt(nr, 10)].index = parseInt(nr, 10);
      });
    this.setState({ fields: { columns: newlist } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });




  }
  async componentDidMount() {
    console.info("Start select columns");

    const fields = await HttpHelper.getJson<Fields>(`/connectortypes/${this.props.id}/columns`);
    this.setState(prevState => {
      return update(prevState, {
        fields: { $set: fields },
        isLoading: { $set: false },
      });
    });
    for (let i = 0; i < fields.columns.length; i++) {
      fields.columns[i].index = i;
    }
    this.setState({ fields: { columns: fields.columns } });
    const newlist = [...this.state.possibleTags];
    console.info(newlist);
    for (const column of fields.columns) {
      for (const tags of column.tags) {
        const index = newlist.findIndex(item => item.name == tags.name);
        if (newlist[index].uses > 0) {
          newlist[index].uses = 0;
        }
      }
    }
    this.setState({ possibleTags: newlist });
    console.info(this.state.possibleTags);

  }
  moveCard (index: any, indexnr: any) {
    const cards = this.state.fields.columns;
    const sourceCard = cards.find((card: any) => card.index === index);
    const sortCards = cards.filter((card: any) => card.index !== index);
    sortCards.splice(indexnr, 0, sourceCard);
     Object.keys(sortCards).forEach((nr) => {
    sortCards[nr].index = parseInt(nr, 10);
    });
    this.setState({ fields: { columns: sortCards } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  oncheck(e: any) {
    const cards = this.state.fields.columns;
    cards[e.target.id].export = e.target.checked;
    this.setState({ fields: { columns: cards } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  ondeleterow(nr: any) {
    console.info(nr);
    const array = [...this.state.fields.columns]; // make a separate copy of the array
    const arrayCopy = array.filter((row: any) => row.index !== nr);
    this.setState({ fields: { columns: arrayCopy }});
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  ontextupdate(e: any) {
    const cards = this.state.fields.columns;
    cards[e.target.id][e.target.name] = e.target.value;
    this.setState({ fields: { columns: cards } });
    this.setState({ canSave: true });
  }
  onaddnewrow() {
    const columnsCopy = this.state.fields.columns;
    columnsCopy.push({index: this.state.fields.columns.length, export: true, editable: false, fieldname: "", caption: "", tags: [] });
    this.setState({ fields: { columns: columnsCopy } });
    this.setState({ canSave: true });
  }
  onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }
  ondragOver(e: any) {
    e.preventDefault();
    const columnsCopy = this.state.fields.columns;
    columnsCopy.pop();
    columnsCopy.push({index: e.target.dataset.id, export: true, editable: false, fieldname: "", caption: "", tags: [] });
    this.setState({ fields: { columns: columnsCopy } });
  }
  onaddtag(e: any) {
    function findindex(element: any) {
      return element.name == e.target.value;
    }
    const index = this.state.possibleTags.findIndex(findindex);
    const array = this.state.fields.columns;

    for (const column of array) {

      if (column.index == e.target.id) {
         const newArray = [ ...array[e.target.id].tags, {name: this.state.possibleTags[index].name, attributes: [] } ];
         array[e.target.id].tags = newArray;
      }
      else {
        const newArray = [...column.tags];
        column.tags = newArray;
      }
      this.setState({ fields: { columns: array } });
    }
    this.setState({ canSave: true });
    const tags = this.state.possibleTags;
    if (tags[index].uses > 0) {
      tags[index].uses = 0;
    }
    this.setState({ possibleTags: tags });
  }
  ondeletetag(e: any) {
    const array = this.state.fields.columns;
    for (const column of array) {
      if (column.index == e.target.id) {
        const newlist = [].concat(array[e.target.id].tags); // Clone array with concat or slice(0)
        newlist.splice(e.target.dataset.key, 1);
        array[e.target.id].tags = newlist;
      }
      else {
        const newArray = [...column.tags];
        column.tags = newArray;
      }
    }
    this.setState({ fields: { columns: array } });
    this.setState({ canSave: true });
    function findindex(element: any) {
      return element.name == e.target.dataset.name;
    }
    const index = this.state.possibleTags.findIndex(findindex);
    const tags = this.state.possibleTags;
    if (tags[index].uses == 0) {
      tags[index].uses = 1;
    }
    this.setState({ possibleTags: tags });
  }
  onUpdateAttribute() {
    this.setState({ configTagModalActive: false });
    this.setState({ canSave: true });
  }
  onPreviewButtonClicked() {
    this.setState({ previewModalActive: true });
  }
  onClosePreview() {
    this.setState({ previewModalActive: false });
  }
  onCancelUpdateAttribute() {
    this.setState({ configTagModalActive: false });
  }
  onConfigButtonClicked(e: any) {
    e.preventDefault();
    this.setState({ activeTag: this.state.fields.columns[e.target.dataset.parent].tags[e.target.dataset.id]});
    this.setState({ configTagModalActive: true, errorMessage: undefined });
    console.info(this.state.activeTag);
  }
  onSubmit = (e: any) => {
    e.preventDefault();
    console.info("Start saving changes");
    this.setState({ isSaving: true }, () => {
      if (this.state.fields) {
        HttpHelper.postJson<SetColumnsResponse>(`/connectortypes/${this.props.id}/columns/`, { columns: this.state.fields.columns }).then((responseData) => {
          if (responseData.responseStatus !== undefined && responseData.responseStatus !== null && responseData.responseStatus.message !== null) {
            this.setState({ isSaving: false, errorMessage: responseData.responseStatus.message });
          }
          else {
            this.setState({ canSave: false, isSaving: false, fields: { columns: responseData.columns } }, () => {
              toastr.success(this.props.displayName, this.props.t("columnsUpdated"));
            });
          }
        });
      }
    });
  }
  public render() {
    const columns = this.state.fields.columns || [] ;
    const { t } = this.props;
    return (
    <form>
      <div className = "App">
        <main>
          <button onClick = {this.onSubmit} className = "btn btn-primary" type = "submit" style = {{float: "right"}} disabled = {!this.state.canSave || this.state.isSaving}>{this.state.isSaving ? <i className = "fa fa-spinner fa-spin"></i> : ""} {this.props.t("update")}</button><br/><br/>
          <DragDropContext onDragEnd = {this.onDragEnd}>
          <Droppable droppableId = "droppable">
          {(provided: any) => (
          <table ref = {provided.innerRef} className = "col-8 table columns" style = {{border: "1px solid #dee2e6"}} >
          <thead className = "thead-dark" style = {{border: "1px solid #1b2847"}}>
          <tr>
          <th colSpan = {2}>
            <button onClick = {this.onaddnewrow} type = "button" style = {{padding : "8px 16px" }} className = "btn btn-primary btn-rounded"><i className = "fa fa-plus"></i> </button>
          </th>
           <th>{t("displayname")}</th>
           <th>Element</th>
           <th>Tags</th>
           <th>
             <button onClick = {this.onPreviewButtonClicked} type = "button" className = "btn btn-primary"  style = {{float: "right"}} >Preview</button>
          </th>
          </tr>
        </thead>
        <tbody>
            {Object.keys(columns).map((key, i) => (
              <Draggable key = {i} draggableId = {key} index = {i}>
              {(provided) => (
             <Card
             key = {columns[i].index}
             indexnr = {i}
             oncheck = {this.oncheck}
             ontextupdate = {this.ontextupdate}
             ondeleterow = {this.ondeleterow}
             ondeletetag = {this.ondeletetag}
             onaddtag = {this.onaddtag}
             possibleTags = {this.state.possibleTags}
             onConfigButtonClicked = {this.onConfigButtonClicked}
             onPreviewButtonClicked = {this.onPreviewButtonClicked}
             onClosePreview = {this.onClosePreview}
             provided = {provided}
             {...columns[i]}
           />
           )}
           </Draggable>
           ))}
            </tbody>
          </table>
          )}
         </Droppable>
      </DragDropContext>
        </main>
      </div>
      <AttributeModal
        startAction = {this.onUpdateAttribute.bind(this)}
        isOpen = {this.state.configTagModalActive}
        headerText = {t("header")}
        activeTag = {this.state.activeTag}
        addText = {t("close")}
        possibleTags = {this.state.possibleTags} >
      </AttributeModal>

      <PreviewModal
        startAction = {this.onClosePreview.bind(this)}
        isOpen = {this.state.previewModalActive}
        headerText = "Preview"
        addText = {t("close")}
        columns = {this.state.fields.columns} >
      </PreviewModal>
    </form>
    );
  }
}

export default withNamespaces("crmConnectorColumns")(CrmConnectorColumns);
Кто-нибудь знает, почему мой перетаскиваемый элемент смещается?
Единственный css, который я использую, это bootstrap и те, что в моем коде.

 04.03.2019 12:20
15
0
24 117
10
Данный вопрос помечен как решенный
 Ответы 10
Подобная вещь случилась со мной во время использования react-beautiful-dnd. В моем случае причина заключалась в том, что у меня было два элемента с одинаковым идентификатором.

 04.03.2019 20:56
 Ответ принят как подходящий
У меня была такая же проблема, и я понял это! :-)

Решение можно найти здесь: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/using-a-portal.md

В основном, когда библиотека использует position: fixed, как упоминалось в OP, иногда возникают непредвиденные последствия - и в этих случаях вам нужно использовать портал.

Я заставил его работать, посмотрев на пример портала здесь: https://github.com/atlassian/react-beautiful-dnd/blob/master/stories/src/portal/portal-app.jsx

решение найдено благодаря этому комментарию: https://github.com/atlassian/react-beautiful-dnd/issues/485#issuecomment-385816391

 16.05.2019 08:09
В моем случае проблема заключалась в том, что один из родительских элементов Draggable имел свойство css «преобразование» внутри анимации «ключевые кадры». Удаление решило проблему.

 12.06.2019 13:21
В моем случае помогло переопределение position: 'fixed' перетаскиваемого элемента с помощью position: 'static'.

 20.09.2019 22:53
Найдите в дереве отверстий элементы с атрибутами transition или transform, как упоминалось в @Glib, и удалите их. Если вы обновляете устаревший код или интегрируетесь с другими библиотеками, могут быть основные элементы с этими атрибутами, о которых вы не знаете.

 08.01.2020 13:28
Я продолжаю натыкаться на эту тему, так что вот еще одна (очень простая) ошибка, которая вызовет такое поведение: Вы поставили {provided.placeholder} не туда или вообще не поставили, или недостаточно раз :).

Пример (у вас вложенная настройка):

<DragDropContext ...>
    <Droppable ...>
      {(provided) => (
        <div
          ref = {provided.innerRef}
        >
          {items.map((item, index) => (
            <Draggable ...>
              {(provided, snapshot) => (
                <div>
                  <div ref = {provided.innerRef} ...>
                    <ComponentWithDroppableInsideWithItsOwnPlaceHolder item = {item}/>
                  </div>
                  {provided.placeholder} //<--- Observe our "out of place" placeholder
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
Таким образом, «обычно» вам нужен только 1 заполнитель в качестве последнего тега каждого выпадающего элемента (обычно прямо под перетаскиваемыми элементами). Так что, если у вас есть дроппинг, вложенный в другой, вам нужно только два, верно? Неа. Вам нужно три, потому что вы хотите, чтобы каждый droppable обрабатывал свои собственные dragables И хотите также перетаскивать droppables второго уровня, и они должны оказаться где-то во время перетаскивания.

Отсутствие этого вызовет очень похожую проблему, как в опубликованном gif, где все элементы можно перетаскивать, но они выпадают из экрана, когда вы перемещаете их куда-то, где они ожидают заполнителя, но его нет.

One more
В аналогичном вложенном случае вы хотите отсортировать свой атрибут типа на Droppable-s из документы:

type: A TypeId(string) that can be used to simply accept only the specified class of <Draggable />. <Draggable />s always inherit type from the <Droppable /> they are defined in. For example, if you use the type PERSON then it will only allow <Draggable />s of type PERSON to be dropped on itself. <Draggable />s of type TASK would not be able to be dropped on a <Droppable /> with type PERSON. If no type is provided, it will be set to 'DEFAULT'.

 18.08.2020 10:11
У меня была похожая проблема (к моему <Draggable/> применялось преобразование из родительского элемента). Я решил это, используя Клонирование API, чтобы переназначить мой <Draggable/> в правильное местоположение DOM во время перетаскивания. react-beautiful-dnd теперь рекомендует этот метод вместо создания собственного портала.

 22.08.2020 19:38
Исправьте, удалив transform из родительского элемента
Если для какого-либо родительского элемента установлено правило transform, отличное от none, а также наличие will-change: transform на родительском элементе вызовет эту проблему.

Я обнаружил, что Chrome Dev Tools может очень помочь в этом случае, чтобы найти родительский элемент с таким правилом:

Перейдите в Elements -> Styles -> Computed -> filter transform и найдите во всех родительских элементах любые правила, которые могут быть причиной этого.

Исправьте, переназначив <Draggable />
Если удаление этого правила невозможно, в библиотеке есть решение и для этого, потому что вы можете использовать родитель или использовать портал в React (что они, однако, не рекомендуют)

 17.11.2020 09:21
У меня была такая же проблема с положением, когда я пытался показать react-beautiful-dnd внутри react-modal, и я нашел решение, добавив эти CSS к перетаскиваемым элементам.

.draggable {
  top: auto !important;
  left: auto !important;
}
 13.04.2021 15:37
Если вы не установили ключевую опору для перетаскиваемого компонента, ее установка может решить проблему. Это было для меня.

 14.09.2021 17:47
Другие вопросы по теме
Отказаться от функции «уйти с дороги»?
Как протестировать функцию «перетаскивания» из библиотеки react-beautiful-dnd с помощью Selenium в Java?
Draggables в react-beautiful-dnd не перетаскиваются, а только создают заполнитель
React-beautiful-dnd: не удается найти элемент ручки перетаскивания внутри Draggable
Есть ли способ добавить метку к перетаскиваемым и отбрасываемым элементам в react-dnd
Измените Json, чтобы использовать его в React, красивое перетаскивание
Response-beautiful-dnd draggable не отображается во время перетаскивания
Издевательство над react-beautiful-dnd с помощью Jest
React MaterialUI <ListItemSecondaryAction> зависает при перетаскивании внутрь react-beautiful-dnd Draggable?
Перетащить задачу в React JS с помощью кнопок
Похожие вопросы
Шуточный снимок прерывается эмоциями 10 / вавилон 7 с использованием фермента
React Router - не удается прочитать «историю» свойств неопределенного
Настройка видео реакции opentok для использования полной высоты вложенного div
Адаптивный макет в приложении React
Невозможно сопоставить массив в React
Созданная React Router ссылка запрещена по умолчанию
React-router не отображает функциональный компонент
Ленивая загрузка react-router-dom, webpack не работает
Как вызвать функцию генератора редукционной саги?
Обновите состояние с помощью setState ReactJs
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на ловушки в реагирующей библиотеке, выдающие неверную ошибку вызова ловушки
Вопросы
REACTJS
Реагировать на ловушки в реагирующей библиотеке, выдающие неверную ошибку вызова ловушки
Я создаю библиотеку реагирования, используя https://www.npmjs.com/package/create-react-library И успешно использовал его в другом проекте React. Но когда я попытался использовать функциональные возможности реагирующих хуков внутри библиотеки, это дало мне следующую ошибку.

Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
.....
Моя библиотека Я только что попытался использовать useState в своем компоненте следующим образом.

import React, { useState } from 'react'

const General = (props) => {

    const [count, setCount] = useState(0);
    return (
        <div>
           General component
        </div>
    )
}

export default General
я использую "react": "^16.8.6" и "react-dom": "^16.8.6"

Мое приложение React Создал приложение с использованием https://github.com/facebook/создать-реагировать-приложение и использовал вышеуказанную библиотеку следующим образом.

import Reactfrom 'react'
import { General } from 'my.lib'
const accountSummary = props => {

  return (
    <div>
      <General>
    </div>
  )
}

export default accountSummary
Оба имеют одинаковые версии реакции, и библиотека использует те же версии реакции и реакции, что и peerDependencies

 07.05.2019 13:00
30
12
15 328
10
Данный вопрос помечен как решенный
 Ответы 10
Я создал библиотеку React с create-react-library этой библиотекой — вашим General компонентом. Я опубликовал его в npm здесь https://www.npmjs.com/package/stackoverflow-тест и в приложении React для использования здесь https://codesandbox.io/s/mm7yl83o28.

Просто нажмите на General component текст, и count будет увеличено.

Я не могу воспроизвести вашу проблему, просто используйте этот тест, чтобы проверить вашу реализацию.

 07.05.2019 15:25
 Ответ принят как подходящий
Я включил свою библиотеку компонентов (в этом отношении любую библиотеку) в свое приложение, как это сделал @Janith, используя my-comp-lib:"file:../.." (я не хочу публиковать каждый раз, когда хочу протестировать), и столкнулся с той же проблемой.

Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app See react-invalid-hook-call for tips about how to debug and
fix this problem

Я смог исправить это, заставив мое приложение и библиотеку указывать на одно и то же место реакции (пакета).

Below are the steps I followed :
1. In Your Application:
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your Library
a) npm link react
b) npm link react-dom

3)Stop your dev-server and do `npm start` again.
Оно работает!!

Пожалуйста, обратитесь к ссылкам ниже для получения более подробной информации ..

https://github.com/facebook/реагировать/issues/14721

https://github.com/facebook/реагировать/тянуть/14690

https://github.com/facebook/реагировать/issues/13991

Примечание. Эта проблема не возникнет, если вы опубликуете свой пакет в Artifactory и установите, потому что у вас будут react и react-dom в качестве одноранговых зависимостей, и они не будут включены в дистрибутив. Таким образом, ваш пакет и приложение используют ту же реакцию, которая установлена ​​в приложении.

 09.08.2019 02:40
Я только что столкнулся с той же проблемой. Я смог это исправить, указав на ту же реакцию в моем примере приложения, что и в моей библиотеке:

Структура приложения

Корень

Пример
пакет.json
источник (библиотека)
пакет.json
Итак, из примера > package.json я изменил реакцию на:

    "react": "link:../node_modules/react",
Это очень похоже на npm link, перечисленное выше, но оно не исчезнет при каждой установке npm.

 10.09.2019 20:38
У меня это сработало, когда я изменил ссылку из приложения на библиотеку на «ссылка:../» вместо «файл:../», в дополнение к связыванию реакции и реакции-дом.

 07.01.2020 21:53
Добавьте в свою библиотеку компонентов package.json

"peerDependencies": {
  "react": "<your version>"
}
так что ваш пакет lib будет использовать тот же пакет react, что и ваше основное приложение. https://nodejs.org/es/blog/npm/peer-dependencies/

 28.06.2020 14:46
React 17 + Библиотека тестирования React + Umi (интерфейсный фреймворк, встроенный реагирующий маршрутизатор)

В моем случае, когда я запускаю модульный тест, я получаю сообщение об ошибке «неверный вызов ловушки».

После периода попыток я нашел два способа решения.

Перейдите на React 16.x, тогда все будет хорошо.
Продолжайте использовать React 17.x и
Надо еще написать import React from 'react'
Установить react-router-dom отдельно
Я думаю, что это может быть проблема с реактивным маршрутизатором, но из-за моего ограниченного понимания у меня пока нет лучшего решения.

 24.04.2021 17:18
Также проверьте свою версию npm. У меня была версия 7.0.8 которая устарела, после смены на 6.14.8 все заработало нормально!

 03.06.2021 22:36
ПРИ ТЕСТИРОВАНИИ РЕАЛЬНОГО ПРИЛОЖЕНИЯ В REACT NATIVE

У меня такая же проблема, и я удаляю файл node_module в своей пользовательской библиотеке, и я исправил его.

проблема при установке прямого модуля

пряжа добавить c:/user......./react-native-some-lib

 05.07.2021 15:47
У меня была та же проблема, когда я работал с срочным монорепозиторием, настраивал пользовательский интерфейс и создавал приложения с использованием nextjs.

Решения были добавлены в следующий код на package.json

"resolutions": {
  "react": "17.0.1", // verificate your react version
  "react-dom": "17.0.1"
}
В библиотеке package.json:

"peerDependencies": {
   "react": "17.0.1",
   "react-dom": "17.0.1"
 },
Подробнее здесь: https://github.com/vercel/next.js/issues/9022#issuecomment-728688452

 03.08.2021 06:12
В моем случае я создаю свою собственную общую библиотеку. Хотя я экспортировал createContext, useContext и useState из "react", я просто забыл также импортировать экспорт по умолчанию, React.

Изменение моего оператора импорта с этого:
import { createContext, useContext, useState } from "react";

на это:
import React, { createContext, useContext, useState } from "react";

исправил это для меня. Возможно, вам придется сделать это в каждом компоненте/контексте React и т. д., которые вы экспортируете из своей библиотеки реагирования.

Редактировать:

В другом из моих приложений, использующих эту общую библиотеку, эта проблема также была исправлена ​​с помощью npm link, как описано в документации React (Предупреждение о недопустимом хуке):

This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

Итак, в моем случае я перешел к своей общей библиотеке и запустил npm link ../path-to-my-app/node_modules/react.

Изменить (23.02.2022)

Надеемся, что окончательное редактирование - другое решение состоит в том, чтобы просто глобально установить проблемную зависимость, если все приложения предполагают использовать одну и ту же версию, например. npm install react -g

 16.02.2022 11:42
Другие вопросы по теме
This.props.history.push работает сразу после обновления
Заменить текущий URL без перезагрузки страницы
Я пытаюсь добавить компоненты, которые хранятся в отдельных файлах .js, на новую страницу при использовании Redirect из react-router-dom?
Вложенные маршруты вместе с редукционной интеграцией не работают?
Передать переменную в реквизитах компонента Route в 'react-router-dom'
Показать github, youtube как прогресс при каждом изменении маршрута
Ссылка отображается, но не перенаправляется с помощью <Link>
Реагировать на добавление события для перехода пользователя на маршрут
Компонент Firebase/React/Redux имеет странное поведение при обновлении, состояние должно быть в порядке
Вложенные маршруты в реакции не отображают вложенный компонент
Похожие вопросы
Добавление пользовательских цветов в палитру приводит к тому, что объект, возможно, «не определен». ТС2532
Реакция: стиль шрифта большого календаря
Увеличение и уменьшение высоты div при прокрутке (React)
Как получить доступ к свойству в функции, отправив значения из вызова функции
Как сохранить URL-адрес загруженного файла в firebase, используя реакцию
TypeScript: создание типа или интерфейса значений перечисления
Мой сервер NodeJS падает после 6 запросов на отправку Axios
Как визуализировать svg в реагирующем компоненте
Как протестировать стилизованный компонент, чтобы иметь свойство с Jest и Enzyme
Хуки и Redux Saga
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Уведомление об устаревании: ReactDOM.render больше не поддерживается в React 18
Вопросы
JAVASCRIPT
Уведомление об устаревании: ReactDOM.render больше не поддерживается в React 18
Я получаю эту ошибку каждый раз, когда создаю новое приложение React, и я не знаю, как это исправить:

Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

Я создал свое приложение для реагирования, используя: npx create-react-app my-app

 29.03.2022 22:11
22
0
21 265
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
В вашем файле index.js измените на:

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
 29.03.2022 22:29
Как указано в вашей ошибке, ReactDOM.render больше не поддерживается. Так что используйте новый createRoot. Как видно из приведенного ниже кода (который был взят из документы), все, что вам нужно сделать, это заменить ReactDOM.render на createRoot.

// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab = "home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab = "home" />);
 29.03.2022 22:31
Чтобы обеспечить более или менее эквивалент предыдущих версий реакции, я использую эту слегка сжатую версию вышеизложенного, по-прежнему окружая <App><React.StrictMode>. Еще одна причина, по которой я сокращаю это, заключается в том, что мне никогда не нужен доступ к корневой переменной, в результате чего операторы объединяются в цепочку, и весь файл состоит всего из 5 строк кода:

import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';

    ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);
[P.S. Не забудьте, если вам нужна функциональность webvitals, чтобы также добавить к приведенному выше коду]

 30.03.2022 08:16
Как вы сказали, вы создали свое приложение React, используя: npx создать-реагировать-приложение мое-приложение.

Ваш index.js должен выглядеть так после выполнения команды.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
Ваш код после правок, упомянутых в консоли
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

reportWebVitals();
 30.03.2022 13:17
React 18 был отправлен вчера (29 марта). ReactDOM.render устарела в React18 и в настоящее время выдает предупреждение и работает в совместимом режиме.

Устаревшие

Устаревшие

react-dom: ReactDOM.render устарело. Его использование предупредит и запустит ваше приложение в режиме React 17.
react-dom: ReactDOM.hydrate устарело. Его использование предупредит и запустит ваше приложение в режиме React 17.
react-dom: ReactDOM.unmountComponentAtNode устарело.
react-dom: ReactDOM.renderSubtreeIntoContainer устарело.
react-dom/server: ReactDOMServer.renderToNodeStream устарело.
Чтобы решить эту проблему, вы можете либо вернуться к предыдущей версии React, либо обновить файл index.js, чтобы он соответствовал синтаксису React 18.

Пример:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
 31.03.2022 04:42
В вашем файле index.js:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Используйте это, прежде чем реагировать на версию 18

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// Используйте это в версии реакции 18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 31.03.2022 11:38
Это должно сделать это:

import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById("root"))
root.render
  (
    <App />
  )
 31.03.2022 21:54
React 18 был выпущен 29 марта 2022 года, и нам нужно знать о нескольких критические изменения и Устаревшие.

react-dom: ReactDOM.render устарел. Использование этого предупредит и запустите свое приложение в режиме React 17.
react-dom: ReactDOM.hydrate устарел. Использование этого предупредит и запустите свое приложение в режиме React 17.
react-dom: ReactDOM.unmountComponentAtNode устарел.
react-dom: ReactDOM.renderSubtreeIntoContainer устарел.
react-dom/server: ReactDOMServer.renderToNodeStream был устарел.
React 18 поставляет два корневых API: Legacy Root API и New Root API.

Устаревший корневой API: Это существующий API с именем ReactDOM.render. Он создает корень, работающий в «устаревшем» режиме, который работает так же, как React 17. Перед выпуском мы добавим в этот API предупреждение о том, что он устарел, и переключимся на New Root API.

Новый корневой API: Новый корневой API вызывается с помощью ReactDOM.createRoot. Он создает корень, работающий в React 18, который добавляет все улучшения React 18 и позволяет вам использовать параллельные функции. Это будет корневой API в будущем.

В New Root API вызывающая сторона создает корень, а затем вызывает для него рендеринг:

import * as ReactDOMClient from 'react-dom/client';
import App from 'App';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab = "home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab = "profile" />);
Также проверьте официальную документацию React для обновление до реактивной версии 18.

Ссылка: ReactDOM.render больше не поддерживается в React 18.

 02.04.2022 00:30
// До

import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab = "home" />, container);
// После

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab = "home" />);
//До того, как в вашем файле index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
// Измените, как показано ниже, в файл index.js импортировать React из «реагировать»;

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);


reportWebVitals();
 06.04.2022 09:34
Если ваше приложение использует React-Router, то следующий код будет работать нормально:

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
Он будет работать отлично (с реактивным маршрутизатором)

 06.04.2022 10:46
Другие вопросы по теме
Не удается сопоставить полученные данные из пользовательского хука useFetch()
Ошибка при повторном развертывании моего реагирующего приложения с помощью nodemon, он продолжает говорить: «Плагин «реагировать» конфликтовал между «package.json» eslint-config-react»-app »
Реагировать на проблему добавления className
Как вызвать компонент класса с переменной?
Отображение ответа от API в компоненте реакции
Изменить значок с FontAwesomeIcon на функцию (onChange Text Input)
Почему мой onSubmit не работает в диалоговом окне PrimeReact?
Шаги Antd формируют проверку в reactjs
Маршрутизатор React с ленивым и приостановкой всегда возвращается к маршруту с подстановочными знаками при обновлении страницы
Использование node-fetch в приложении React — «Не удается найти модуль «узел: http»»
Похожие вопросы
Javascript: как захватить «DOMException: Aborted» из AbortController в операторе IF?
Плагин Croppie неправильно обрезает изображение, когда я использую модальное окно
Ошибка при повторном развертывании моего реагирующего приложения с помощью nodemon, он продолжает говорить: «Плагин «реагировать» конфликтовал между «package.json» eslint-config-react»-app »
Jacascript Loop — пропустить шаг на основе переменной
Правило Firestore не работает на игровой площадке правил (как и ожидалось), но проходит на моем действующем сайте
Как я могу остановить цикл от завершения, когда он получает первый возвращенный объект из API?
Отображение ответа от API в компоненте реакции
Как включить/отключить кнопку на основе определенного входного значения?
Как мне сделать этот вывод более аккуратной строкой меньшего размера?
API карты Google показывает маркеры внутри многоугольника рисования
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Вопросы
PYTHON
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Вот мои настройки.py:

INSTALLED_APPS = [
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig'
]
 19.12.2020 12:57
19
4
23 765
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Если вы используете VSCode, Ctrl + Shift + P -> Введите и выберите «Python: Select Interpreter» и войдите в виртуальную среду вашего проекта. Это то, что сработало для меня.

 21.12.2020 23:26
Запустить в терминале

pip install django-rest-framework
Добавьте 'rest_framework' в УСТАНОВЛЕННЫЕ ПРИЛОЖЕНИЯ в settings.py

Если это не работает, перезапустите редактор (vscode или что-то в этом роде)

 22.07.2021 20:41
Добавьте свой файл python, например C:\Users\hendrialqory\AppData\Local\Programs\Python\Python39-32\Lib\site-packages, перейдите к настройке переменных среды и введите свой файл python.

 31.08.2021 05:22
Контрол + шифт + р.
введите «Python: Select Interpreter» и выберите то же самое.
выберите свою виртуальную среду из списка если его нет в списке, выберите Введите путь интерпретатора'
Укажите путь следующим образом: «c:\users\user\django\myvenv\scripts\python.ex»
 10.02.2022 18:30
Что делать, если вы выбрали правильный интерпретатор (интерпретатор виртуальной среды), но все равно получаете эту ошибку?

Затем сначала проверьте путь вашего пипа в терминале этой виртуальной среды.
Используйте эту команду: which pip
Он должен указывать только на путь, по которому находится папка вашей виртуальной среды, например:

name_of_virtualenv/bin/pip
name_of_virtualenv/скрипты/пип

Если показано иначе, для решения этой проблемы:

удалите папку виртуальной среды и создайте ее снова.
which pip теперь должен показывать правильный путь в новом виртуальном терминале env.
переустановите пакеты.
 29.04.2022 22:09
У меня была аналогичная проблема.

перейдите в папку venv> Lib
убедитесь, что вы видите папку djangorestframework и rest_framework
если они отсутствуют, вы должны знать, что вы устанавливаете эти пакеты. в неправильном venv.
 27.05.2022 17:05
Мне помогли ответы @nayburz и @Faseela.

Контрол + шифт + р.
введите «Python: Select Interpreter» и выберите то же самое.
выберите свою виртуальную среду из списка, если ее нет в списке, выберите «Ввести путь к интерпретатору».
путь к вашему виртуальному файлу env python.exe.
мой был: D:\Python\Python_Django\trydjango\env\Scripts\python.exe

Вы можете найти аналогичный путь в соответствии с вашим проектом

 23.09.2022 03:32
для других, использующих venv, и если выполнение «Python: выбор интерпретатора» и выбор вашего venv не работает, попробуйте выполнить следующие действия. Это для Мака.

открыть терминал
перейдите в папку вашего проекта.
активировать виртуальную среду (> source {path_to_venv_home}\bin\activate)
теперь откройте vscode с помощью «кода».
В случае «код .» не работает, тогда следует добавить к вашему пути. Попробуйте раздел «Запуск из командной строки» из https://code.visualstudio.com/docs/setup/mac

 24.09.2022 11:51
Если вы установили все, как указано здесь, и у вас все еще есть эта ошибка. убедитесь, что вы проверили в своем редакторе кода, находитесь ли вы в каталоге, где находится ваша виртуальная среда.

Стоит отметить, что когда вы открываете редактор кода (например, код VS), убедитесь, что вы открываете его в каталоге, где находится ваша виртуальная среда (venv). это обязательно будет так.

 30.10.2022 08:09
Для тех, кто использует VSCode, если выбор интерпретатора Python все еще не удался, а также, когда вы запускаете which pip, результат не указывает на вашу виртуальную среду, что-то path/to/myvenv/bin/pip, тогда сделайте следующее:

Удалить текущую виртуальную среду
Перейдите в каталог, в котором должна находиться ваша виртуальная среда.
Создайте новый, выполнив команду: python3 -m venv myvenv
Активируйте виртуальную среду, выполнив команду: source venv/bin/activate
Если все пойдет хорошо, вы сможете увидеть имя вашей виртуальной среды в командной строке терминала. Например, (myvenv) user@computer:~$
Теперь запуск which pip должен вывести что-то вроде /path/to/myvenv/bin/pip как подтверждение того, что ваша виртуальная среда настроена и активирована.
Теперь вы можете переустановить пакет rest_framework как pip install djangorestframework, и pylance сможет распознать rest_framework
По крайней мере, это сработало для меня, когда я столкнулся с теми же проблемами с линтером. Также обратите внимание, что вам нужно будет активировать виртуальную среду каждый раз, когда вы открываете новое окно терминала перед выполнением любой команды, например pip, python и других.

 28.04.2023 10:08
Другие вопросы по теме
Результат теста - имя класса не обновлено
В React Hook useEffect отсутствует зависимость: «История»
ReactDOM не определяется с помощью react/17.0.1/umd/react.development.js
Почему автоматическое определение otp не отображает код в React
Ссылки маршрутизатора ReactJS не работают при нажатии на них
Преобразование проекта React/Relay в TypeScript — ошибка синтаксического анализа при импорте типа
Добавляйте элементы React динамически в зависимости от высоты контента
Есть ли способ загрузить весь оставшийся фрагмент после загрузки основного фрагмента или вручную указать, какой фрагмент загружать - Webpack
Как показать местоположение маркера из localStorage в листовке реакции
Запрос PUT API выборки Javascript
Похожие вопросы
Невозможно автоматически определить частоту кадра данных Quandl Time Series
Как обновить графический интерфейс Python?
Проблема с отображением вывода DFT с imshow openCV
Как перехватить первое значение генератора и прозрачно вывести из остальных
«exists_or_mkdir» не определено после использования Oct2Py в файле *.m (Matlab) в Google Colab
Как скопировать один элемент списка по ссылке, а не по значению?
Ошибка в цикле Python при попытке очистки с помощью BeautifulSoup
Обучение модели Fasttext
Itertools Permutation: возврат только определенных комбинаций
Работа с прозрачным фоном с помощью OpenCV
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
React Router V6 — ошибка: useRoutes () может использоваться только в контексте компонента <Router>
Вопросы
REACTJS
React Router V6 — ошибка: useRoutes () может использоваться только в контексте компонента <Router>
Я установил react-router-domV6-beta. Следуя примеру с веб-сайта, я могу использовать новую опцию useRoutes. Я настроил маршруты страниц и возвращаю их в файл App.js.

После сохранения получаю следующую ошибку:

Ошибка: useRoutes() можно использовать только в контексте компонента.

Мне интересно, если я что-то пропустил здесь? Я создал страницы внутри папки src/pages.

Мой код:

import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'o-nama', element: <About /> },
        { path: 'usluge', element: <Services /> },
        { path: 'galerija', element: <Gallery /> },
        { path: 'cjenovnik', element: <Prices /> },
        { path: 'kontakt', element: <Contact /> }
    ]);

    return routes;
};

export default App;
 23.12.2020 15:26
95
0
192 866
10
Данный вопрос помечен как решенный
 Ответы 10
Я думаю, проблема в том, что вам все еще нужно обернуть routes (Routes/useRoutes) внутри элемента Router.

Таким образом, пример будет выглядеть примерно так:

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    { path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
Рефакторинг в соответствии с вашими потребностями.

 23.12.2020 17:04
это означает, что в вашем индексе js или приложение JS обертывается с помощью BrowserRouter, как это

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <BrowserRouter>  // Like This here I am using
                <App />
           </BrowserRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

 02.02.2021 21:24
Упомяните ниже код в index.js

import { BrowserRouter as Router } from "react-router-dom";
 07.04.2021 12:17
 Ответ принят как подходящий
У вас должен быть <BrowserRouter> (или любой из предоставленных маршрутизаторов) выше в дереве. Причина этого в том, что <BrowserRouter> предоставляет контекст истории, который необходим во время создания маршрутов с использованием useRoutes(). Обратите внимание, что более высокий уровень означает, что он не может быть в самом <App>, но, по крайней мере, в компоненте, который его отображает.

Вот как может выглядеть ваша точка входа:

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

 01.11.2021 12:05
Просто хочу сообщить о похожей проблеме — на момент написания (v6.2.1) кажется, что вы действительно сталкиваетесь с этой ошибкой, если вы импортируете из react-router вместо react-router-dom. Дорогостоящая опечатка с моей стороны.

То есть убедитесь, что вы импортируете Routes и Route из react-router-dom, а НЕ react-router

// This is deceptively valid as the components exist, but is not the intended usage
import { Routes, Route } from 'react-router';

// This works and is the intended usage
import { Routes, Route } from 'react-router-dom';
 11.01.2022 01:04
Код: index.js

import {BrowserRouter as Router}  from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
app.js

function App() {
  return (
  <>
    <Routes>
    <Route path  = "/" element = {<Main />} />
    <Route path  = "gigs" element = {<Gigs />} />
    </Routes>
</>
  );
}
 16.03.2022 15:28
> Following codes works since react-router-dom syntax changed because of React 18.

  import logo from './logo.svg';
    import './App.css';
    import Header from './components/Header';
    import Login from './components/Login';
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      useRoutes,
    } from 'react-router-dom';
    import Signup from './components/Signup';
    
    function AppRoutes() {
      const routes = useRoutes(
        [
          {path:'/',element:<Login/>},
          {path:'/signup',element:<Signup/>}
        ]
      )
      return routes;
    }
    function App(){
      return (
        <Router>
          <Header/>
          <AppRoutes />
        </Router>
      )
    }
    
    export default App;
 29.03.2022 22:46
Пытаться

const Routes = () => useRoutes([]) 
а затем оберните это так в App.js

<BrowserRouter> 
    <Routes />
</BrowserRouter>
Это сработало для меня

 15.11.2022 09:18
Попробуйте добавить свои маршруты в index.js, а не в App.js. Ваш App.js вызывается из index.js. В index.js ваша внешняя страница называется так

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navbar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 17.11.2022 16:39
Я получил эту ошибку, потому что у меня были две разные версии react-router-dom в комплекте.

Если вы используете рабочие пространства npm/yarn, убедитесь, что в папке node_modules верхнего уровня установлена ​​только одна версия react-router-dom.

 06.02.2023 05:05
Другие вопросы по теме
Реагируйте на маршрутизацию, чтобы получить пакеты во вложенной папке
Как интегрировать React Router в Meteor?
Как настроить NGINX для перенаправления приложения React Router, созданного на поддоменах?
Реагировать-маршрутизатор с контекстом - почему он не работает с якорем и ссылкой
Почему реагирующая одностраничная навигация работает только в компонентах без конструктора и состояния?
React router Ссылка на кнопку условного рендеринга
Как перенаправить успешный вход с Axios на другую страницу?
Как сформировать URL-адрес обратного вызова в строку запроса в ответных хуках
Вложение маршрутизатора React
Typescript не может разрешить реакцию-маршрутизатор-дом
Похожие вопросы
Как передать строку запроса из Shopify во встроенное приложение?
Как создать функцию в Reactjs, которая не вызывается прослушивателем событий?
Как я могу обновить хук из одного компонента и в результате обновить другой компонент?
Как удалить дочерний элемент div в реакции с помощью хука useRef?
Проблема в создании, обновлении и удалении куки с использованием реактивного куки
Рендеринг внутреннего цикла React JSX
Переключить неработающие флажки пользовательского интерфейса материала при печати в цикле
Как сделать запрос API автоматически в React?
Не удалось поймать ошибку в axios react.js
Компонент автозаполнения React, вызывайте конечную точку каждый раз, когда набирается буква
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
ComponentWillReceiveProps, componentDidUpdate для React Hook
Вопросы
JAVASCRIPT
ComponentWillReceiveProps, componentDidUpdate для React Hook
Я сталкиваюсь с двумя проблемами:

Даже если в соответствии с рекомендациями React производное состояние не рекомендуется, но в некоторых крайних случаях он все же нужен.
С точки зрения функционального компонента с React Hook, Какова эквивалентная реализация с React Hook, если мне нужно производное состояние, которое в компоненте класса будет обновляться в componentWillReceiveProps при каждом родительском рендеринге
см. пример кода ниже:

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count > 100 ? 100 : props.count,
    }

  }

  /*What is the equivalent implementation when React Hook is used here componentWillReceiveProps*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
      this.setState({
        count: nextProps.count > 100 ? 100 : nextProps.count
      });
    }
  }

  render() {
    return ( <
      div > {
        this.state.count
      } <
      /div>
    );
  }
}

export default App;
Что касается componentDidUpdate, у componentDidUpdate есть аналог, когда используется React Hook, вы должны использовать его так:

  React.useEffect(() => {
    return () => {

     };
  }, [parentProp]);
Второй параметр для useEffect гарантирует, что код будет выполняться только при изменении пропса, но что, если я хочу выполнять соответствующие задачи на основе нескольких соответствующих изменений реквизита? как это сделать с использованиемЭффект?

см. пример кода ниже:

class App extends Component {


  /*What is the equivalent implementation when functional component with React Hook is used here */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.groupName !== this.props.groupName) {
      console.info('Let'
        's say, I do want to do some task here only when groupName differs');
    } else if (prevProps.companyName !== this.props.companyName) {
      console.info('Let'
        's say, I do want to do some different task here only when companyName differs');
    }

  }


  render() {
    /*for simplicity, render code is ignored*/
    return null;
  }
}

export default App;
 23.02.2019 17:35
63
0
71 647
10
 Ответы 10
Вы можете использовать хук useMemo для хранения вычислений и поместить props.count в массив, указанный в качестве второго аргумента, чтобы пересчитать значение при его изменении.

const { useState, useEffect, useMemo } = React;

function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    setTimeout(() => {
      setCount(150);
    }, 2000);
  }, []);

  return <DisplayCount count = {count} />;
}

function DisplayCount(props) {
  const count = useMemo(() => props.count > 100 ? 100 : props.count, [props.count]);

  return <div> {count} </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Самый простой способ сделать отдельные эффекты при изменении отдельных реквизитов — создать несколько хуков useEffect, которые запускаются только при изменении одного из отдельных реквизитов.

const { useState, useEffect } = React;

function App() {
  const [groupName, setGroupName] = useState('foo');
  const [companyName, setCompanyName] = useState('foo');

  useEffect(() => {
    setTimeout(() => {
      setGroupName('bar');
    }, 1000);
    setTimeout(() => {
      setCompanyName('bar');
    }, 2000);
  }, []);

  return <DisplayGroupCompany groupName = {groupName} companyName = {companyName} />;
}

function DisplayGroupCompany(props) {
  useEffect(() => {
    console.info("Let's say, I do want to do some task here only when groupName differs");
  }, [props.groupName])
  useEffect(() => {
    console.info("Let's say,I do want to do some different task here only when companyName differs");
  }, [props.companyName])

  return <div> {props.groupName} - {props.companyName} </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
 23.02.2019 18:18
Я понимаю, что ваш пример «производного состояния» намеренно прост, но поскольку существует так мало законных случаев производного состояния, трудно дать рекомендацию по замене, кроме как в каждом конкретном случае, поскольку это зависит от причины, по которой вы используют производное состояние. В приведенном вами конкретном примере не было причин использовать производное состояние в случае класса, и поэтому по-прежнему нет причин в случае ловушки (значение может быть просто получено локально, не помещая его в состояние). Если полученное значение дорого, вы можете использовать useMemo как подарок Tholle. Если они не соответствуют более реалистичным случаям, которые вы имеете в виду, вам нужно будет представить более конкретный случай, который действительно требует производного состояния.

Что касается вашего примера componentDidUpdate, если то, что вы хотите сделать для разных реквизитов, является независимым, то вы можете использовать отдельные эффекты для каждого (например, несколько вызовов useEffect). Если вы хотите сделать точно, как в вашем примере (т. е. сделать что-то только для companyName изменения, если groupName также не изменилось, как указано вашим else if), вы можете использовать судьи для более сложных условий. Вы должны нет изменить ссылку во время рендеринга (всегда существует вероятность того, что рендеринг будет отброшен/переделан после поддержки параллельного режима), поэтому в примере используется последний эффект для обновления ссылок. В моем примере я использую ссылку, чтобы избежать работы с эффектами при первоначальном рендеринге (см. ответ Толле в этот связанный вопрос) и определить, изменилось ли groupName, при принятии решения о том, следует ли выполнять работу на основе companyName изменения.

const { useState, useEffect, useRef } = React;

const DerivedStateFromProps = ({ count }) => {
  const derivedCount = count > 100 ? 100 : count;

  return (
    <div>
      Derived from {count}: {derivedCount}{" "}
    </div>
  );
};
const ComponentDidUpdate = ({ groupName, companyName }) => {
  const initialRender = useRef(true);
  const lastGroupName = useRef(groupName);
  useEffect(
    () => {
      if (!initialRender.current) {
        console.info("Do something when groupName changes", groupName);
      }
    },
    [groupName]
  );
  useEffect(
    () => {
      if (!initialRender.current) {
        console.info("Do something when companyName changes", companyName);
      }
    },
    [companyName]
  );
  useEffect(
    () => {
      if (!initialRender.current && groupName === lastGroupName.current)
        console.info(
          "Do something when companyName changes only if groupName didn't also change",
          companyName
        );
    },
    [companyName]
  );
  useEffect(
    () => {
      // This effect is last so that these refs can be read accurately in all the other effects.
      initialRender.current = false;
      lastGroupName.current = groupName;
    },
    [groupName]
  );

  return null;
};
function App() {
  const [count, setCount] = useState(98);
  const [groupName, setGroupName] = useState("initial groupName");
  const [companyName, setCompanyName] = useState("initial companyName");
  return (
    <div>
      <div>
        <DerivedStateFromProps count = {count} />
        <button onClick = {() => setCount(prevCount => prevCount + 1)}>
          Increment Count
        </button>
      </div>
      <div>
        <ComponentDidUpdate groupName = {groupName} companyName = {companyName} />
        groupName:{" "}
        <input
          type = "text"
          value = {groupName}
          onChange = {event => setGroupName(event.target.value)}
        />
        <br />
        companyName:{" "}
        <input
          type = "text"
          value = {companyName}
          onChange = {event => setCompanyName(event.target.value)}
        />
        <br />
        change both{" "}
        <input
          type = "text"
          onChange = {event => {
            const suffix = event.target.value;
            setGroupName(prev => prev + suffix);
            setCompanyName(prev => prev + suffix);
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
<div id = "root"></div>
<script crossorigin src = "https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src = "https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
Edit Derived state and componentDidUpdate

 23.02.2019 19:09
В вашем сценарии вам вообще не нужно использовать или повторно реализовывать getDerivedStateFromProps. Вам просто нужно создать новую переменную, чтобы получить новую форму данных. Использование состояния в этом сценарии просто вызовет еще один повторный рендеринг, что не очень хорошо с точки зрения производительности.

import React from 'react';

const App = ({ count }) => {
  const derivedCount = count > 100 ? 100 : count;

  return (
    <div>Counter: {derivedCount}</div>
  );
}

App.propTypes = {
  count: PropTypes.number.isRequired
}
Демо здесь: https://codesandbox.io/embed/qzn8y9y24j?fontsize=14

Вы можете узнать больше о различных способах решения таких сценариев без использования getDerivedStateFromProps здесь: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

Если вам действительно нужно использовать отдельное состояние, вы можете использовать что-то вроде этого

import React, { useState } from 'react';

const App = ({ count }) => {
  const [derivedCounter, setDerivedCounter] = useState(
    count > 100 ? 100 : count
  );

  useEffect(() => {
    setDerivedCounter(count > 100 ? 100 : count);
  }, [count]); // this line will tell react only trigger if count was changed

  return <div>Counter: {derivedCounter}</div>;
};
 29.04.2019 10:06
Хук реакции, эквивалентный старому реквизиту componentWillReceive, можно сделать с помощью хука useEffect, просто указав реквизит, который мы хотим прослушивать на предмет изменений в массиве зависимостей.

То есть:

export default (props) => {

    useEffect( () => {
        console.info('counter updated');
    }, [props.counter])

    return <div>Hi {props.counter}</div>
}
Для componentDidUpdate просто опуская массив зависимостей, функция useEffect будет вызываться после каждого повторного рендеринга.

То есть:

export default (props) => {

    useEffect( () => {
        console.info('counter updated');
    })

    return <div>Hi {props.counter}</div>
}
 11.10.2019 18:17
setCount вызовет повторный рендеринг. Использование useEffect с [count] в качестве массива зависимостей гарантирует, что хук будет вызывать setCount только при изменении значения count.

Вот как вы заменяете любую componentWillReceiveProps логику, которую вы могли бы написать в старом стиле React, основанном на классах. Я считаю полезным принцип «Каждый рендер имеет свои реквизиты и состояние»: если вы хотите инициировать повторный рендеринг только при изменении определенных свойств, у вас может быть несколько хуков useEffect.

useEffect(() => {
  count > 100 ? setCount(100) : setCount(count)
}, [count]) 
 
useEffect(() => {
  console.info('groupName has changed');
  // do something with groupName
}, [groupName])
    
useEffect(() => {
  console.info('companyName has changed');
  // do something with companyName
}, [companyName]) 
 24.10.2019 11:09
просто используя useEffect вот так.

useEffect( () => {
    props.actions.fetchSinglePost(props.match.params.id); //> I'm dispatching an action here.
}, [props.comments]) //> and here to watch comments and call the action in case there is any change.
 01.04.2020 00:50
1.) What is the equivalent implementation with React Hook, If I do need derived state?

Производное состояние для хуков = установить состояние условно и напрямую на этапе рендеринга:

constComp = (props) => {
  const [derivedState, setDerivedState] = useState(42);
  if (someCondition) {
    setDerivedState(...);
  }
  // ...
}
Это обновляет состояние без дополнительной фазы фиксации, в отличие от useEffect. Приведенный выше шаблон поддерживается Реагировать на строгий режим (без предупреждений):

const App = () => {
  const [row, setRow] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      setRow(2);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      <Comp row = {row} />
    </React.StrictMode>
  );
}

const Comp = ({ row }) => {
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [prevRow, setPrevRow] = React.useState(null);

  console.info("render, prevRow:", prevRow)

  if (row !== prevRow) {
    console.info("derive state");
    // Row changed since last render. Update isScrollingDown.
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }

  return `Scrolling down: ${isScrollingDown}`;
};

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.development.js" integrity = "sha256-4gJGEx/zXAxofkLPGXiU2IJHqSOmYV33Ru0zw0TeJ30 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.development.min.js" integrity = "sha256-9xBa2Hcuh2S3iew36CzJawq7T9iviOAcAVz3bw8h3Lo = " crossorigin = "anonymous"></script>
<div id = "root"></div>
Примечание 1: componentWillReceiveProps уже давно устарел. getDerivedStateFromProps является преемником компонентов класса с точки зрения производного состояния.

Заметка 2: Проверьте предпочтительные решения, прежде чем вы прибегнете к производному состоянию.

2.) What if I want to do respective tasks based on multiple respective props changes?

Вы можете либо полностью убрать useEffect deps, либо добавить еще один реквизит:

React.useEffect(() => {
  return () => { };
}, [parentProp, secondProp]);
 20.04.2020 20:40
Если вы используете хук useMemo поверх вашего компонента и он зависит от всех ваших реквизитов, он запускается перед всем при каждом изменении реквизитов. useEffect срабатывает после обновленного рендеринга и, поскольку зависит от всех реквизитов, он срабатывает после повторного рендеринга в зависимости от всех реквизитов.

const Component = (...props) => {
   // useState, useReducer if have
   useMemo(() => {
     // componentWillReceiveProps
   },[...props]);
   // ...other logic and stuff
   useEffect(() => {
     // componentDidUpdate
   }, [...props]);
};
 02.07.2020 19:29
В случае, если вы хотите реплицировать систему журналов, такую ​​как почему ты рендерил, и вам нужен nextProps здесь помогает хук.

в соответствии со старой функцией lifeCycle переименуйте вещи в props и nextProps
nextProps означает текущий реквизит
реквизит означает предыдущий реквизит
const useComponentWillReceiveProps(nextProps, callback) {
  const props = useRef(nextProps) 

  useEffect(() => {
    callback(nextProps, props.current)
    props.current = nextProps
  })
}
использование
const diffLogger = (nextProps, props, { name = "Component" } = {}) => {
  Object.keys(nextProps)
    .filter((key) => nextProps[key] !== props[key])
    .forEach((key) => {
      console.info(
        `%c${name}:%c${key}`,
        "color:#ff5722; font-size:1rem; font-weight:bold;",
        "color:#ffc107; font-size:1.2rem; font-weight:bold;",
        {
          from: props[key],
          to: nextProps[key],
        }
      )
    })
}
const Button = (props) => {
 useComponentWillReceiveProps(props, diffLogger, {name: 'Button'})
 return <button onClick = {props.onClick}>Button</button>
}
В настоящее время Если ваша кнопка перерисовывается, например. по onClick новой ссылке вы получите что-то вроде этого: 

 02.04.2021 14:34
Я использую React Native. Я добавил это в свой экранный компонент, где мне нужна была функциональность componentWillReceiveProps:

    const propsRef = useRef(props)

    // component will receive props
    const componentWillReceiveProps = () => {
        const propsHaveChanged = !isEqual(propsRef.current, props)

        propsRef.current = props

        if (propsHaveChanged){
            setIndex(0)
        }

        
    }
Здесь isEqual — это функция lodash, которая выполняет глубокое сравнение. Затем просто вызовите функцию.

componentWillReceiveProps()
Это вызывается в верхней части функционального компонента. Таким образом, его следует вызывать до того, как функциональный компонент отобразит свое представление.

 24.08.2021 17:01
Другие вопросы по теме
Столкнулся с проблемой при создании нового приложения в reactjs
Как отобразить несколько компонентов в reactjs, что я делаю не так?
ReactJS Bootstrap Navbar и маршрутизация не работают вместе
Как правильно загружать готовые базы данных SQlite с PouchDB или без него в приложении React
Пользовательский замечательный плагин уценки, анализирующий только первый экземпляр совпадающего регулярного выражения
Размытие фонового модального окна, когда в нем открывается другое модальное модальное окно
Styled-components переключает классы
Состояние не обновляется в ответ
Firebase + React Native — получите идентификатор каждого документа
Горизонтальный шаг React Semantic-UI
Похожие вопросы
Утверждение Chai не терпит неудачу при использовании асинхронной команды?
Как аутентифицировать администратора?
Хранилище Firebase возвращает странные результаты для snapshot.bytesTransferred
Разрешить запуск функции n раз только с функцией-оболочкой
ReferenceError: клиент Discord не определен
Ошибка lint кортежа машинописного текста не согласована [vscode]
Журнал консоли TypeScript только в режиме разработки
Вложенная функция внутри функции цикла for | добавить/удалить класс | анимация ключевых кадров
Jquery — управление свойствами CSS элементов в соответствии со свойствами CSS других элементов
Множественный выбор раскрывающегося списка AngularJS не снимается при изменении выбора
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Инвариантное нарушение: вы не должны использовать <Switch> вне <Router>
Вопросы
JAVASCRIPT
Инвариантное нарушение: вы не должны использовать <Switch> вне <Router>
У меня проблема, которую я не знаю, как решить, я получаю эту ошибку при запуске теста npm

Invariant Violation: You should not use <Switch> outside a <Router>

В чем может быть проблема и как ее решить? Тест, который я провожу, - это стандартный app.test.js, который поставляется с response.

class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <nav>
          <ul>
            <li><Link exact activeClassName = "current" to='/'>Home</Link></li>
            <li><Link exact activeClassName = "current" to='/TicTacToe'>TicTacToe</Link></li>
            <li><Link exact activeClassName = "current" to='/NumGame'>Quick Maths</Link></li>
            <li><Link exact activeClassName = "current" to='/HighScore'>Highscore</Link></li>
            <li><Link exact activeClassName = "current" to='/Profile'>Profile</Link></li>
            <li><Link exact activeClassName = "current" to='/Login'>Sign out</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/TicTacToe' component = {TicTacToe}></Route>
          <Route path='/NumGame' component = {NumberGame}></Route>
          <Route path='/HighScore' component = {HighScore}></Route>
          <Route path='/Profile' component = {Profile}></Route>
          <Route path='/Login' component = {SignOut1}></Route>
        </Switch>
      </div>
    );
  }
};
 29.05.2018 14:38
69
1
77 110
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Ошибка правильная. Вам нужно обернуть SwitchBrowserRouter или другими альтернативами, такими как HashRouter, MemoryRouter. Это связано с тем, что BrowserRouter и альтернативы являются общим низкоуровневым интерфейсом для всех компонентов маршрутизатора, и они используют HTML 5 history API, и вам это нужно для перехода между вашими маршрутами.

Попробуй сделать это скорее

import { BrowserRouter, Switch, Route } from 'react-router-dom';
А потом все так завернуть

<BrowserRouter>
 <Switch>
  //your routes here
 </Switch>
</BrowserRouter>
 29.05.2018 14:44
Всегда помещайте BrowserRouter в компоненты навигации, следуйте примеру:

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

var Componente1 = () => (<div>Componente 1</div>)
var Componente2 = () => (<div>Componente 2</div>)
var Componente3 = () =>  (<div>Componente 3</div>)

class Rotas extends Component {
    render() {

        return (
                <Switch>
                    <Route exact path='/' component = {Componente1}></Route>
                    <Route exact path='/comp2' component = {Componente2}></Route>
                    <Route exact path='/comp3' component = {Componente3}></Route>
                </Switch>
        )
    }
}


class Navegacao extends Component {
    render() {
        return (

                <ul>
                    <li>
                        <NavLink to = "/">Comp1</NavLink>
                    </li>
                    <li>
                        <NavLink exact  to = "/comp2">Comp2</NavLink>
                    </li>
                    <li>
                        <NavLink exact to = "/comp3">Comp3</NavLink>
                    </li>
                </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navegacao />
                    <Rotas />
                </div>
            </BrowserRouter>
        )
    }
}

render(<App/>, document.getElementById("root"))
Примечание: BrowserRouter принимает только один дочерний элемент.

 30.12.2018 14:43
Я столкнулся с той же проблемой. Это разрешается, когда я «импортирую BrowserRouter из дома-реактора». и написать код

<BrowserRouter>
 <Switch>
  //your routes here
 </Switch>
</BrowserRouter>
 27.10.2019 08:30
Правильный способ справиться с этим, по мнению разработчиков React Router, - обернуть свой модульный тест в Router. Рекомендуется использовать MemoryRouter, чтобы иметь возможность перезагружать маршрутизатор между тестами.

Вы все еще можете сделать что-то вроде следующего:

<BrowserRouter>
  <App />
</BrowserRouter>
Затем в App:

<Switch>
  <Route />
  <Route />
</Switch>
Ваши модульные тесты для App обычно выглядят примерно так:

const content = render(<App />); // Fails Unit test
Обновите модульный тест до:

const content = render(<MemoryRouter><App /></MemoryRouter>); // Passes Unit test
 12.01.2020 03:05
Вы не можете использовать response-router 4.3 с react-router-dom 4.4 или наоборот. (Обновлено: написать это так: почему это не считается критическим изменением?)

Убедитесь, что у вас будут одинаковые версии

 29.04.2020 14:20
Убедитесь, что у всех вложенных компонентов есть правильный импорт. Вы можете получить эту ошибку, если один из них импортирует Switch из response-router вместо response-router-dom. Сохранение всего согласованного с 'response-router-dom' (который в любом случае реэкспортирует компоненты реактивного маршрутизатора). Проверено:

"react-router": "^5.2.0",
"react-router-dom": "^5.2.0",
 09.06.2020 13:28
Вы должны написать свой код вот так

import {BrowserRouter, Switch, Router} from 'react-router-dom
 
 class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <nav>
          <ul>
            <li><Link exact activeClassName = "current" to='/'>Home</Link></li>
            <li><Link exact activeClassName = "current" to='/TicTacToe'>TicTacToe</Link></li>
            <li><Link exact activeClassName = "current" to='/NumGame'>Quick Maths</Link></li>
            <li><Link exact activeClassName = "current" to='/HighScore'>Highscore</Link></li>
            <li><Link exact activeClassName = "current" to='/Profile'>Profile</Link></li>
            <li><Link exact activeClassName = "current" to='/Login'>Sign out</Link></li>
          </ul>
        </nav>

     <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/TicTacToe' component = {TicTacToe}></Route>
          <Route path='/NumGame' component = {NumberGame}></Route>
          <Route path='/HighScore' component = {HighScore}></Route>
          <Route path='/Profile' component = {Profile}></Route>
          <Route path='/Login' component = {SignOut1}></Route>
        </Switch>
      <BrowserRouter/>
      </div>
    );
  }
};
 23.06.2020 05:42
Я обновил зависимости с помощью yarn add react-router-dom или npm install react-router-dom, удалил папку node_modules и снова запустил yarn или npm install.

 30.08.2020 20:18
Error: Invariant failed: You should not use <Link>,<Switch>,<Route> outside a <Router>[][1]

[Error: Invariant failed: You should not use <Link>,<Switch>,<Route> outside a <Router> ][1]

 1. Open Index.js or Index.jsx
 2. add-> import { BrowserRouter } from "react-router-dom";
 3.Rap <App /> in <BrowserRouter> and </BrowserRouter> 
should  look like :
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
 19.09.2020 10:32
я нашел решение для решения этой проблемы

вот пример кода

import React from 'react';
import Home from './HomeComponent/Home';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
class App extends React.Component{
render(){
return(
         <BrowserRouter>
           <Switch>
            <Route path = "/" render = {props => (
                <Home {...props}/>
            )}/>
          </Switch>
        </BrowserRouter>
    )
  }
}
export default App;
 22.12.2020 13:14
Мои NavLink и Route находятся в отдельных файлах, чтобы устранить эту ошибку, мне пришлось обернуть их оба в BrowserRouter:

import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom'
const MainNav = () => (
  <BrowserRouter>
      <nav>
      <ul>
        <li>
          <NavLink exact activeClassName='current' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='current' to='/users'>Users</NavLink>
        </li>
      </ul>
    </nav>
  </BrowserRouter>
);


export default MainNav;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/HomeView';
import UsersView from '../views/UsersView';
import { BrowserRouter } from 'react-router-dom';

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component = {Home}></Route>
      <Route exact path='/users' component = {UsersView}></Route>
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;`
 30.04.2021 21:29
Другие вопросы по теме
Как создать вспомогательную (компонент более высокого порядка) в преакте?
Как импортировать контакт Outlook с помощью Reactjs
Как получить значения из одного и того же типа ввода из нескольких полей в React?
Значение jest.fn () должно быть фиктивной функцией или полученной шпионской функцией: [Function getTemplates]
React HOC with Context - не следует использовать <Route render> и <Route children> в одном маршруте
React-bootstrap-table установить общее количество столбцов таблицы в состоянии
Как вызвать последовательные действия одно за другим - и убедиться, что оба отрисовываются (response-redux)?
MongoDB получает undefined при поиске
Добавить ввод с помощью кнопки добавления в React
Отправить форму после проверки данных
Похожие вопросы
Вызов события дочернего щелчка при щелчке по родительскому элементу
(элемент управления: AbstractControl):
Активировать вкладку на основе текущего URL
Получить путь к рабочему столу локального компьютера с помощью javascript
Использование javascript для установки поля (форма редактирования элемента SharePoint 2013)
Как изменить теги привязки и заголовки в ckeditor, нажав опцию удаления формата в ckeditor.js
Как создать вспомогательную (компонент более высокого порядка) в преакте?
Элементы массива не помещаются в async.queue
WebDriver JavaScriptExecutor не нажимает кнопку
Blockchain Tierion API - загрузка файлов в реальном времени с использованием Node.js
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
--fix не исправляет ошибки с помощью eslint
Вопросы
JAVASCRIPT
--fix не исправляет ошибки с помощью eslint
Я использую eslint в визуальном коде для форматирования файлов js, но он выдает ошибки каждый раз, когда я запускаю его, вот моя командная строка для его запуска node ./node_modules/eslint/bin/eslint -- src --fix сообщение об ошибке

E:\PATH\src\reducers\roote-reducer.js
  1:8   error  There should be no space after '{'                object-curly-spacing
  1:26  error  There should be no space before '}'               object-curly-spacing
  6:1   error  Expected indentation of 1 tab but found 2 spaces  indent
  7:1   error  Expected indentation of 1 tab but found 2 spaces  indent
  8:4   error  Newline required at end of file but not found     eol-last

E:\PATH\src\reducers\schedule-reducer.js
   1:8   error  There should be no space after '{'                  object-curly-spacing
   1:22  error  There should be no space before '}'                 object-curly-spacing
   4:1   error  Expected indentation of 1 tab but found 4 spaces    indent
   7:24  error  Missing space before function parentheses           space-before-function-paren
   7:54  error  Missing space before opening brace                  space-before-blocks
   8:1   error  Expected indentation of 1 tab but found 4 spaces    indent
   9:1   error  Expected indentation of 1 tab but found 4 spaces    indent

E:\PATH\src\register-service-worker.js
   12:1  error  Expected indentation of 1 tab but found 2 spaces    indent
   17:1  error  Expected indentation of 5 tabs but found 6 spaces   indent
   17:7  error  Use regex shorthands to improve readability         unicorn/regex-shorthand
   22:1  error  Expected indentation of 1 tab but found 2 spaces    indent

✖ 309 problems (309 errors, 0 warnings)
  309 errors, 0 warnings potentially fixable with the `--fix` option.
Как я могу их исправить автоматически?

 10.07.2018 14:39
24
2
43 516
11
 Ответы 11
Чтобы использовать опцию --fix, вам нужно запустить eslint напрямую.

Попробуй это

./node_modules/.bin/eslint src --fix
В Windows:

.\node_modules\.bin\eslint src\** --fix
 10.07.2018 14:48
Формат должен быть:

./node_modules/.bin/eslint --fix path/to/file.js
См. эта ветка (и ответ aravind1078) для получения дополнительной информации.

 30.01.2019 17:50
Если это не так

extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
You. You can use this on the first page
    const colors = require('vuetify/es5/util/colors').default
    const pkg = require('./package')
    require('dotenv').config()

    module.exports = {
      mode: 'universal',
      /*
      ** Headers of the page
      */
      head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      },
      /*
      ** Customize the progress-bar color
      */
      loading: { color: '#fff' },
      /*
      ** Global CSS
      */
      css: [],
      /*
      ** Plugins to load before mounting the App
      */
      plugins: [],
      /*
      ** Nuxt.js dev-modules
      */
      buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify'
      ],
      /*
      ** Nuxt.js modules
      */
      modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
      ],
      /*
      ** Axios module configuration
      ** See https://axios.nuxtjs.org/options
      */
      axios: {},
      /*
      ** vuetify module configuration
      ** https://github.com/nuxt-community/vuetify-module
      */
      /*
      ** Build configuration
      */
      build: {
        extend(config, ctx) {
          // Run ESLint on save
          if (ctx.isDev && ctx.isClient) {
            config.module.rules.push({
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /(node_modules)/,
              options: {
                fix: true
              }
            })
          }
        }
      }
    }
If you still don't understand me.

 22.02.2020 18:11
Попробуй бежать

eslint --fix
вам нужно сначала установить eslint

npm install -g eslint
 15.04.2020 11:45
У меня была та же проблема, что и я

eslint --fix fileName.extention
 16.04.2020 23:03
Выполните следующую команду в новом терминале:

./node_modules/.bin/eslint --fix . --ext .js,.vue src

 09.06.2020 09:48
Пакет первой установки: npm install -g eslint

а также

Запустить: eslint --fix

 22.07.2020 13:34
Сначала установите eslint, если вы еще этого не сделали

npm install -g eslint
Тогда беги

eslint --fix path/to/file.extension

Note: You will have to run the the above command every time after making changes to that particular file.

 10.08.2020 16:08
в каталоге, в котором существует код, запустите:

eslint --fix .
вместо

eslint --fix 
поскольку команде нужен аргумент, который указывает каталог, в котором существует код, или сам файл, к которому вы хотите применить линтинг

 04.10.2020 13:31
Используйте Терминал командной строки, чтобы выполнить приведенные ниже команды в Visual Studio Code.

Убедитесь, что файл .eslintrc.yml настроен для рабочего проекта.

Чтобы исправить проблемы с ворсом в файле

npx eslint file1.js --fix
Чтобы исправить проблемы с ворсом во всех файлах в папке

npx eslint ./folder_name --fix
 28.12.2020 15:43
У меня возникли трудности при использовании --fix, когда я использую eslint-config-airbnb-base вместо @ nuxtjs / eslint-модуль в проекте Nuxt.js
В то время у меня работал eslint direclty: ./node_modules/.bin/eslint --fix

Однако я предпочитаю написать еще два скрипта в package.json.

"lint": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
"lint-fix": "npm run lint -- --fix"
И запустите yarn lint-fix или npm run lint-fix

 17.03.2021 16:05
Другие вопросы по теме
Использование compose () и connect () вместе в React JS redux
Почему он возвращает undefined из этой отправки?
Lodash создает новый массив из выбранных ключей
Ошибка: не удается установить заголовки после их отправки SSR React + Node
Реагировать на ошибку карты листовок при рендеринге на стороне сервера
Есть ли способ определить, удалил ли пользователь какой-либо элемент из локального хранилища
Создать кнопку с текстом слева и изображением / значком справа на reactjs
Операция FooQuery, обертывающая Foo, ожидает переменную, но она не была найдена с помощью response-apollo
Адаптивная таблица React js Material-UI
Флажок Handle в приложении React
Похожие вопросы
Всплывающая подсказка в three.js
Прокрутка к следующему или предыдущему DIV при нажатии с помощью jQuery
Установка значений по умолчанию в модальном диалоговом окне
Почему он возвращает undefined из этой отправки?
TypeError <анонимный> ошибка javascript
Lodash создает новый массив из выбранных ключей
Не удается найти способ заменить часть текста в ячейке из столбца с помощью скрипта Google App
Веб-сервис, использующий NodeJS, который имитирует выполнение браузера со страницы html с помощью javascript
Почему я не вижу $ (this) ссылки в console.info?
'Поменять местами' значения в пределах диапазона
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на загрузку пакета javascript на 100% зависает
Вопросы
REACTJS
Реагировать на загрузку пакета javascript на 100% зависает
когда я пытаюсь выполнить npm start, он работает нормально, но когда я пытаюсь запустить приложение с помощью expo, процесс идет до 100%, и после этого ничего не происходит. Я не понимаю, в чем именно заключается проблема. У меня есть следующие вещи в package.json .... пожалуйста, помогите мне решить эту проблему.

{
  "name": "ProMeeting",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "jest-expo": "~29.0.0",
    "react-native-scripts": "^1.14.0",
    "react-test-renderer": "16.3.1"
  },
  "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
  "scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo"
  },
  "dependencies": {
    "@babel/preset-react": "^7.0.0-beta.56",
    "expo": "^29.0.0",
    "firebase": "^5.3.1",
    "native-base": "^2.7.2",
    "react": "16.3.1",
    "react-native": "^0.55.4",
    "react-native-firebase": "^4.3.8",
    "react-native-vector-icons": "^5.0.0",
    "react-navigation": "^2.11.2"
  }
}
Снимок экрана добавлен для иллюстрации

Реагировать на загрузку пакета javascript на 100% зависает

 22.08.2018 14:30
44
1
16 083
11
 Ответы 11
Вам следует попробовать настроить новый проект, поддерживающий реакцию, и перенести ваши файлы в новый проект, а затем попробовать запустить его снова, эта проблема возникает, когда файлы сборки отсутствуют.

 22.08.2018 16:33
Кажется, это могло произойти по нескольким причинам. Я попытался запустить другие приложения на своем симуляторе, перезапустил симулятор и даже попытался удалить папки сборки и перестроить с нуля, но ни один из этих подходов не решил проблему.

Что в итоге сработало, так это перезапуск React Native Debugger, который у меня был в фоновом режиме все время.

Вы также можете проверить вкладку «Сеть» в React Native Debugger, если вы включили автономное регулирование. Отключение его также должно решить проблему в некоторых случаях.

 23.01.2019 00:52
response-native-firebase часто вызывает ту же проблему.

ниже - официальное руководство по интеграции react-native-firebase. https://rnfirebase.io/docs/v5.x.x/installation/ios

Б) В начале метода didFinishLaunchingWithOptions: (NSDictionary *) launchOptions добавьте следующую строку:

[Настройка FIRApp]; «Рекомендуется добавить строку в метод ПЕРЕД созданием RCTRootView. В противном случае инициализация может произойти после того, как уже требуется в вашем коде JavaScript, что приведет к исключениям, которые приложение не инициализирует».

У вас есть GoogleService-Info.plist? Вы установили pod? Вы «Аппаратное обеспечение»> «Стереть все содержимое и настройки в симуляторе»?

 23.01.2019 03:16
что ж, этот пост старый, но пойдем, как я решил для себя эту проблему:

> install yarn
> run: yarn remove react-native
> run: yarn add react-native
> run: react-native run-android
 23.01.2019 05:22
В моем случае мой код работал в Android, но не в симуляторе iOS.

SplashScreen.preventAutoHide(); был проблемой.

Я дважды вызвал метод, App.js и Main.js соответственно.

После удаления в App.js все заработало.

(Думаю, restarting the React Native Debugger тоже помог)

 02.08.2019 14:54
В моем случае это всегда происходило при включенной удаленной отладке JS. Пакет JS загружался до 100%, но затем приложение зависало. React Native Debugger не может подключиться, появляется сообщение об ошибке Another debugger is already connected.

Попробовав все виды вещей (сброс кеша, перезапуск Metro Builder, перезапуск симулятора) безуспешно, я вспомнил, что единственным «другим отладчиком», который я когда-либо использовал, были Chrome Devtools, поэтому я вышел из Chrome, и сразу все снова заработало. .

Оказывается, даже несмотря на то, что я закрыл вкладку Chrome, на которой отлаживал приложение, какой-то фоновый процесс в Chrome все еще был прикреплен к приложению в качестве отладчика (также после перезагрузки симулятора). Затем он достиг какой-то точки останова или исключения при запуске, поэтому он приостановился, и все, что я мог видеть, было сообщение Downloading Javascript bundle 100%.

 05.09.2019 22:13
Вот как я решил проблему на Mac.

Мой экран завис при загрузке пакета javascript 100%
Screen stuck Downloading javascript bundle 100%

Выберите Simulator, нажмите (Command + D) на Mac, симулятор отобразит набор параметров.
Click on Stop RemoteJS Debugging

Приложение загрузится
Application will load now

 05.04.2020 09:54
Что ж, в моем случае я удалил цикл for, который был у меня в моем коде, и этого было достаточно, чтобы исправить эту проблему. По-видимому, мое приложение для реагирования вылетало каждый раз при запуске этого цикла.

 27.05.2020 15:32
в моем случае ;

Я добавил новый пакет (@ khanshamshad32 / carousel) v1.0.1. Я предполагаю, что у пакета есть проблемы, и моя выставка на реальном устройстве застряла% 100 .. и я собираюсь удалить все элементы пакета.

1- из package.json (относительный экземпляр)

2- из package-lock.json (относительный экземпляр)

3- из папки "имя пакета" node_modules

и это сработало

 09.08.2020 22:08
Я тоже застрял на той же проблеме и делал все возможное, но это не сработало, я возвращаю все изменения, но проблема все еще существует ..

I created my own solution and it works perfectly for me, maybe it might help someone, you can try it with Apple and Android too

Обновите expo-cli и react-native с npm update -g expo-cli и npm update -g react-native
Удалите приложение expo на эмуляторе или устройстве и переустановите его.
Создайте новый проект с expo init project_name (используйте исходное имя проекта, переименуйте предыдущее для резервного копирования).
Попробуйте запустить это новое пустое приложение в своем приложении expo, оно должно работать правильно.
Теперь установите каждую зависимость из неработающего package.json по одной или сразу, но без указания версии с помощью команды expo install package_name (вручную, потому что это может быть возможно из-за конфликта версий).
Теперь добавьте файлы и каталоги старого проекта, включая app.json и App.js, в этот новый проект.
Снова запустите свой проект с помощью команды expo start -c.
И вот вам рабочий проект!
Удачного кодирования !!!

 28.10.2020 09:14
По состоянию на январь 2021 года версия вашего узла может быть одной из причин этой проблемы.

Проверьте версию своего узла с помощью node -v, и если версия - 15.x.x, попробуйте понизить версию до 14.15.1:

$ npm install -g n
$ n 14.15.1
 30.01.2021 10:51
Другие вопросы по теме
Отсутствует разрешение камеры на выставке
Обновление response-native 56.0: разные тесты снимков
React Native + Enzyme + Jest: вызов фиктивной функции redux не зарегистрирован / вызывается ноль раз
Ошибка при обновлении преобразования свойств представления, управляемого RCTView
Ширина поля анимации в React Native
React Native Книжная анимация
Где указывать материалы Firebase в структуре проекта React Native
Плоский список данных рендеринга из json api как 3 элемента в строке
React Navigation - не удается обновить заголовок
Что такое реквизит в приложении класса
Похожие вопросы
React - заменяется двоеточие
React pass props на onChange
Размер холста карты MapboxGL JS
Использование записи Immutable.js в качестве состояния компонента
Node.js в Webpack, что такое роль?
Reactjs дает модуль ошибки не найден
Передайте аргумент анонимной функции
Почему response-router совмещает предыдущий маршрут с новым?
Компонент React дает мне непредсказуемые результаты
Как работает определение класса?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
Есть ли способ изменить заголовок страницы с помощью React-Router v4 +?
Вопросы
REACTJS
Есть ли способ изменить заголовок страницы с помощью React-Router v4 +?
Я ищу способ изменить заголовок страницы, когда React-Router v4 + меняет местоположение. Раньше я прислушивался к действию изменения местоположения в Redux и проверял этот маршрут на объект metaData.

При использовании React-Router v4 + нет списка фиксированных маршрутов. Фактически, различные компоненты сайта могут использовать Route с одной и той же строкой пути. Это означает, что старый метод, который я использовал, больше не будет работать.

Есть ли способ обновить заголовок страницы, вызывая действия при изменении определенных основных маршрутов, или есть лучший способ обновить метаданные сайта?

 21.09.2018 18:30
64
4
52 648
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
В вашем методе componentDidMount() сделайте это для каждой страницы

componentDidMount() {
  document.title = 'Your page title here';
}
Это изменит заголовок вашей страницы, сделайте вышеупомянутое для каждого маршрута.

Также, если это больше, чем просто часть заголовка, проверьте реактивный шлем. Это очень удобная библиотека для этого, и она также обрабатывает некоторые приятные граничные случаи.

 21.09.2018 18:53
Компоненты <Route /> имеют свойство оказывать. Таким образом, вы можете изменить заголовок страницы при изменении местоположения, объявив свои маршруты следующим образом:

<Route
  exact
  path = "/"
  render = {props => (
    <Page {...props} component = {Index} title = "Index Page" />
  )}
/>

<Route
  path = "/about"
  render = {props => (
    <Page {...props} component = {About} title = "About Page" />
  )}
/>
В компоненте Page вы можете указать название маршрута:

import React from "react"

/* 
 * Component which serves the purpose of a "root route component". 
 */
class Page extends React.Component {
  /**
   * Here, we define a react lifecycle method that gets executed each time 
   * our component is mounted to the DOM, which is exactly what we want in this case
   */
  componentDidMount() {
    document.title = this.props.title
  }
  
  /**
   * Here, we use a component prop to render 
   * a component, as specified in route configuration
   */
  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent />
    )
  }
}

export default Page
Обновление 1 августа 2019 г.. Это работает только с response-router> = 4.x. Благодаря @ su Supremebeing7

Обновленный ответ с использованием Реагировать на хуки:

Вы можете указать название любого маршрута с помощью компонента ниже, который построен с использованием useEffect.

import { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return props.children;
};

export default Page;
А затем используйте Page в опоре render маршрута:

<Route
  path = "/about"
  render = {(props) => (
    <Page title = "Index">
      <Index {...props} />
    </Page>
  )}
/>

<Route
  path = "/profile"
  render = {(props) => (
    <Page title = "Profile">
      <Profile {...props} />
    </Page>
  )}
/>
 09.01.2019 15:50
Исходя из отличного ответ phen0menon, почему бы не расширить Route вместо React.Component?

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Page = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = title;
  });
  return <Route {...rest} />;
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Page };
Это приведет к удалению служебного кода, как показано ниже:

// old:
(
  <Route
    exact
    path = "/"
    render = {props => (
      <Page {...props} component = {Index} title = "Index Page" />
    )}
  />
);

// improvement:
(
  <Page
    exact
    path = "/"
    component = {Index}
    title = "Index Page"
  />
);
Обновлять:, другой способ сделать это - Хуки:

import { useEffect } from 'react';

/** Hook for changing title */
export const useTitle = title => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
};
 29.03.2019 11:46
Я немного поработал над решением Thierry Prosts и в итоге получил следующее:

ОБНОВЛЕНИЕ Январь 2020: Теперь я обновил свой компонент, чтобы он тоже был в Typescript:

ОБНОВЛЕНИЕ Август 2021: Я добавил свой частный маршрут в TypeScript

import React, { FunctionComponent, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IPageProps extends RouteProps {
  title: string;
}

const Page: FunctionComponent<IPageProps> = props => {
  useEffect(() => {
    document.title = "Website name | " + props.title;
  });

  const { title, ...rest } = props;
  return <Route {...rest} />;
};

export default Page;
Обновлено: Компонент My Page.jsx теперь является функциональным и с хуком useEffect:

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const Page = (props) => {
  useEffect(() => {    
    document.title = "Website name | " + props.title;
  });

  const { title, ...rest } = props;
  return <Route {...rest} />;
}

export default Page;
Ниже вы можете найти мое исходное решение:

// Page.jsx
import React from 'react';
import { Route } from 'react-router-dom';

class Page extends Route {
  componentDidMount() {
    document.title = "Website name | " + this.props.title;
  }

  componentDidUpdate() {      
      document.title = "Website name | " + this.props.title;
  }

  render() {
    const { title, ...rest } = this.props;
    return <Route {...rest} />;
  }
}

export default Page;
И моя реализация Router выглядела так:

// App.js / Index.js
<Router>
    <App>
      <Switch>
         <Page path = "/" component = {Index} title = "Index" />
         <PrivateRoute path = "/secure" component = {SecurePage} title = "Secure" />
      </Switch>
    </App>    
  </Router>
Настройка частного маршрута:

// PrivateRoute
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Page
      {...rest}
      render = {props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to = {{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
Частный маршрут в TypeScript:

export const PrivateRoute = ({ Component, ...rest }: IRouteProps): JSX.Element => {
  return (
    <Page
      {...rest}
      render = {(props) =>
        userIsAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to = {{
              pathname: Paths.login,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
Это позволило мне обновить как общие области с новым заголовком, так и частные области.

 29.03.2019 13:50
С небольшой помощью Helmet:

import React from 'react'
import Helmet from 'react-helmet'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function RouteWithTitle({ title, ...props }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Route {...props} />
    </>
  )
}

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithTitle title = "Hello world" exact = {true} path = "/" component = {Home} />
      </Switch>
    </BrowserRouter>
  )
}
 17.05.2019 17:33
Вот мое решение, которое почти такое же, как простая установка document.title, но с использованием useEffect

/**
* Update the document title with provided string
 * @param titleOrFn can be a String or a function.
 * @param deps? if provided, the title will be updated when one of these values changes
 */
function useTitle(titleOrFn, ...deps) {
  useEffect(
    () => {
      document.title = isFunction(titleOrFn) ? titleOrFn() : titleOrFn;
    },
    [...deps]
  );
}
Это имеет то преимущество, что повторная визуализация выполняется только в том случае, если предоставленное вами изменение deps. Никогда не перерисовывать:

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home Page</p> 
    </div>
  );
}
Выполните повторную визуализацию, только если мой userId изменится:

const UserProfile = ({ match }) => {
  const userId = match.params.userId;
  useTitle(() => `Profile of ${userId}`, [userId]);
  return (
    <div>
      <h1>User page</h1>
      <p>
        This is the user page of user <span>{userId}</span>
      </p>
    </div>
  );
};

// ... in route definitions
<Route path = "/user/:userId" component = {UserProfile} />
// ...
CodePen здесь, но не может обновить заголовок фрейма

Если вы осмотрите <head> рамы, вы увидите изменение: screenshot

 17.05.2019 17:52
Используя функциональный компонент на вашей главной странице маршрутизации, вы можете изменить заголовок при каждом изменении маршрута с помощью useEffect.

Например,

const Routes = () => {
    useEffect(() => {
      let title = history.location.pathname
      document.title = title;
    });

    return (
      <Switch>
        <Route path='/a' />
        <Route path='/b' />
        <Route path='/c' />
      </Switch>
    );
}
 30.05.2019 23:52
Вы также можете использовать метод render

const routes = [
 {
   path: "/main",
   component: MainPage,
   title: "Main Page",
   exact: true
 },
 {
   path: "/about",
   component: AboutPage,
   title: "About Page"
 },
 {
   path: "/titlessPage",
   component: TitlessPage
 }
];

const Routes = props => {
 return routes.map((route, idx) => {
   const { path, exact, component, title } = route;
   return (
     <Route
       path = {path}
       exact = {exact}
       render = {() => {
         document.title = title ? title : "Unknown title";
         console.info(document.title);
         return route.component;
       }}
     />
   );
 });
};
пример в коды (Открыть результат в новом окне, см. заголовок)

 06.02.2020 16:40
Пожалуйста, используйте реактивный шлем. Я хотел привести пример машинописного текста:

import { Helmet } from 'react-helmet';

const Component1Title = 'All possible elements of the <head> can be changed using Helmet!';
const Component1Description = 'No only title, description etc. too!';

class Component1 extends React.Component<Component1Props, Component1State> {
  render () {
    return (
      <>
        <Helmet>
          <title>{ Component1Title }</title>
          <meta name = "description" content = {Component1Description} />

        </Helmet>
        ...
      </>
    )
  }
}
Подробнее: https://github.com/nfl/react-helmet#readme

 18.04.2020 15:10
Дэн Абрамов (создатель Redux и нынешний член команды React) создал компонент для установки заголовка, который также работает с новыми версиями React Router. Его очень легко использовать, и вы можете прочитать об этом здесь:

https://github.com/gaearon/react-document-title

Например:

<DocumentTitle title='My Web App'>
 17.05.2020 19:22
Я отвечаю на это, потому что чувствую, что вы могли бы сделать дополнительный шаг, чтобы избежать повторений в ваших компонентах, и вы могли бы просто обновить заголовок из одного места (модуля маршрутизатора).

Обычно я объявляю свои маршруты как массив, но вы можете изменить свою реализацию в зависимости от вашего стиля. так что в основном что-то вроде этого ==>

import {useLocation} from "react-router-dom";
const allRoutes = [
  {
        path: "/talkers",
        component: <Talkers />,
        type: "welcome",
        exact: true,
    },
    {
        path: "/signup",
        component: <SignupPage />,
        type: "onboarding",
        exact: true,
    },
  ]

const appRouter = () => {
    const theLocation = useLocation();
    const currentLocation = theLocation.pathname.split("/")[1];
    React.useEffect(() => {
        document.title = `Grade | 
        ${currentLocation[0].toUpperCase()}${currentLocation.slice(1,)}`
    }, [currentLocation])

   return (
     <Switch>
      {allRoutes.map((route, index) => 
        <Route key = {route.key} path = {route.path} exact = {route.exact} />}
    </Switch>

   )

}

Другой подход заключался бы в объявлении заголовка уже в каждом объекте allRoutes и наличии здесь чего-то вроде решения @Denis Skiba.

 24.10.2020 03:09
Другие вопросы по теме
Маршрутизация с итерационным списком в React JS
Получение синтаксической ошибки при использовании const {icon, ... other} = this.props;
React-Router Link to = пытается загрузить x.app.js при нажатии
Response-router: не отображать компонент после обновления URL
ReactRouter v4 Prompt - переопределить предупреждение по умолчанию
Изменение компонента корневого уровня приводит к повторному рендерингу дочернего компонента маршрута
Метод React Head 404
React Router v4 Разница в маршрутах
Невозможно прочитать свойство push of undefined в реакции
React Router - Создание панировочных сухарей
Похожие вопросы
Маршрутизация с итерационным списком в React JS
React: Импорт состояния из одного компонента в другой компонент?
Неожиданное использование глобальных переменных без ограничений
Как реализовать тернарный обработчик в обработчике по клику
Проверка реквизита в методе обратного вызова с помощью jest
React Redux - мутация редуктора
Детский компонент focus с использованием createRef не работает
Как установить прокси для axios или fetch в React на стороне клиента
Переход на Webpack 4 из Webpack 3
Вызов экспортируемой функции по строковому значению имени функции
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как использовать Jest для тестирования функций с помощью crypto или window.msCrypto
Вопросы
JAVASCRIPT
Как использовать Jest для тестирования функций с помощью crypto или window.msCrypto
При запуске модульных тестов с Jest в реакции API window.crypto вызывает проблемы. Я не нашел способа включить криптовалюту в Jest без установки других пакетов, чего я не могу сделать. Итак, без использования другого пакета npm, есть ли способ протестировать функции, которые используют: crypto.getRandomValues() в них, что не приводит к сбою Jest? Любые ссылки, советы или подсказки приветствуются.

 02.10.2018 17:58
17
0
10 579
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Это должно сработать. Используйте следующий код для глобальной настройки свойства crypto. Это позволит Jest получить доступ к window.crypto и не вызовет никаких проблем.

const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});
 02.10.2018 18:13
Добавьте crypto global для вашей среды шуток, как если бы он был в браузере. Ваш jest.config.js должен выглядеть так:

const {defaults} = require('jest-config');

module.exports = {
  globals: {
    ...defaults.globals,
    crypto: require('crypto')
  }
};
Ссылка: https://jestjs.io/docs/en/configuration#globals-object

 17.06.2020 18:03
Как и @RwwL, принятый ответ у меня не сработал. Я обнаружил, что полифилл, используемый в этой библиотеке, действительно работает: совершить с помощью полифилла

//setupTests.tsx
const nodeCrypto = require('crypto');
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};
//jest.config.js
module.exports = {
 //...
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
};
 26.06.2020 21:18
Для nodeJS + typescript просто используйте global вместо global.self

import crypto from 'crypto'

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr:any) => crypto.randomBytes(arr.length)
  }
});
 05.09.2020 03:56
У меня есть эта проблема в Angular 8 с тестами Jest для lib, которые используют генератор uuid. В шутливой тестовой настройке я издеваюсь над этим:

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => arr
  },
});
 16.10.2020 16:11
const crypto = require('crypto');
global.crypto = crypto;
 10.02.2021 21:28
Начиная с узла 15.x вы можете использовать crypto.webcrypto

например.

import crypto from "crypto";

Object.defineProperty(global.self, "crypto", {
  value: {
    subtle: crypto.webcrypto.subtle,
  },
});
 18.03.2021 09:12
Исходя из ответа AIVeligs:

Поскольку в Jest я использую среду "node", мне пришлось использовать

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    crypto: {
      getRandomValues: (arr) => require("crypto").randomBytes(arr.length),
    },
  },
};
 22.04.2021 16:39
Я использую vue-jest, и у меня сработала следующая конфигурация в файле jest.config.js:

module.exports = {
   ...
   setupFiles: [
      '<rootDir>/tests/settings/jest.crypto-setup.js',
   ],
};
и в jest.crypto-setup.js:

global.crypto = { 
     getRandomValues: (arr) => require('crypto').randomBytes(arr.length) 
};
Добавление определения функции getRandomValues непосредственно в module.exports не сработало, поскольку объект globals должен быть json-сериализуемым (как указано здесь: https://jestjs.io/docs/configuration#globals-object).

 30.04.2021 12:17
Зависимость crypto по умолчанию у меня не работала во время тестирования с Jest.

Вместо этого я использовал библиотеку @peculiar/webcrypto:

yarn add -D @peculiar/webcrypto
Затем в вашем установочном файле Jest просто добавьте это:

import { Crypto } from "@peculiar/webcrypto";


window.crypto = new Crypto();
 13.08.2021 06:14
Полифиллы в текущих ответах неполные, поскольку Crypto.getRandomValues() изменяет свой аргумент на месте, а также возвращает его. Вы можете проверить это, запустив что-то вроде const foo = new Int8Array(8); console.info(foo === crypto.getRandomValues(foo)) в консоли вашего браузера, которая напечатает true.

getRandomValues() также не принимает Array в качестве аргумента, он принимает только целое число TypedArrays. Функция crypto.randomBytes() в Node.js не подходит для этого полифилла, поскольку она выводит необработанный байты, тогда как getRandomValues() может принимать массивы целых чисел со знаком с элементами до 32 бит. Если вы попробуете crypto.getRandomValues(new Int32Array(8)) в своем браузере, вы можете увидеть что-то вроде [ 304988465, -2059294531, 229644318, 2114525000, -1735257198, -1757724709, -52939542, 486981698 ]. Но если вы попробуете node -e 'console.info([...require("crypto").randomBytes(8)])' в командной строке, вы можете увидеть [ 155, 124, 189, 86, 25, 44, 167, 159 ]. Ясно, что они не эквивалентны, и ваш тестируемый компонент может вести себя не так, как ожидалось, если тестируется с последним.

Последние версии Node.js решают эту проблему с помощью webcrypto модуль (это должно быть связано с настройкой globalThis.crypto = require('crypto').webcrypto). Если вы используете старую версию Node (v14 или ниже), возможно, вам больше повезет с использованием crypto.randomFillSync(), который следует использовать в качестве замены для getRandomValues(), поскольку он изменяет переданный буфер / TypedArray на месте.

В вашем установочном файле Jest (не может быть установлен через Конфигурация globals, поскольку он допускает только JSON-совместимые значения):

const { randomFillSync } = require('crypto')

Object.defineProperty(globalThis, 'crypto', {
  value: { getRandomValues: randomFillSync },
})
 15.09.2021 23:25
Другие вопросы по теме
Какое лицо дальше в параллельных проекциях?
React Native анимация flexDirection
Node.js не может создать приложение после обновления
Кнопка Reactjs в родительском компоненте, которая отправляет форму Redux в дочерний компонент
Как размонтировать все компоненты корневого уровня в ReactJs
Firefox не загружает правильный файл на компьютер
React-redux подключает HOC как декоратор классов, @connect
React Modal в reactjs
Звук не воспроизводится в React
Как я могу заставить Google Map Marker отображать поверх наложенных видов?
Похожие вопросы
Отображение - только один объект свойства - среди множества объектов свойств, в которых объекты заключены в массив
NgModel во входном радио?
Как отредактировать пакет NPM для индивидуальных требований в Angular
Какое лицо дальше в параллельных проекциях?
S3-amazon image Проблема CORS (произошла только в некоторых браузерах через 5-8 часов)
Как выполнить обещания и избежать дублирования ответов?
Оптимизация обновлений Firestore в реальном времени в приложении чата
Перезагрузка и выгрузка CSS в модальных слушателях событий
Поиску фильтра jquery необходимо выполнять поиск по категориям
Связывание данных JavaScript в объекте с элементами HTML
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»


RedDeveloper
Блог
Вопросы
Теги
Поиск...
React Native 0.57.1 ​​Android дублирующиеся ресурсы
Вопросы
ANDROID
React Native 0.57.1 ​​Android дублирующиеся ресурсы
При запуске ./android/gradlew assembleRelease я получаю следующую ошибку:

`` '' * Что пошло не так: Не удалось выполнить задачу ': app: mergeReleaseResources'.

[drawable-xhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-xhdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-xhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-xhdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-xxhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-xxhdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-xxhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-xxhdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-hdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-hdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-hdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-hdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_5.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_5.png [drawable-mdpi-v4/app_assets_images_coins_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_2.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_unlockablecharacters] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_unlockablecharacters.png [drawable-mdpi-v4/app_assets_images_unlockablecharacters] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_unlockablecharacters.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_6.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_3.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coinsmodal_mostpopularlabel] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coinsmodal_mostpopularlabel.png [drawable-mdpi-v4/app_assets_images_coinsmodal_mostpopularlabel] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coinsmodal_mostpopularlabel.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_4.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_4.png [drawable-mdpi-v4/app_assets_images_coins_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo30x.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_earthbg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_earthbg.png [drawable-mdpi-v4/app_assets_images_earthbg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_earthbg.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_6.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry10x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry10x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo10x.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo10x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_angry_2.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_angry_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_profile] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_profile.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_profile] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_profile.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_4.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry30x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_6.png [drawable-mdpi-v4/app_assets_images_coins_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_6.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_bg.jpg [drawable-mdpi-v4/app_assets_images_characters_einee_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_bg.jpg: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_2.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_4.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_2.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coinsmodal_coins500] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coinsmodal_coins500.png [drawable-mdpi-v4/app_assets_images_coinsmodal_coins500] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coinsmodal_coins500.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_3.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_5.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_3.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry100x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry100x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry100x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry100x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_donald_trump_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_donald_trump_bg.jpg [drawable-mdpi-v4/app_assets_images_characters_donald_trump_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_donald_trump_bg.jpg: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_trophies_allconversations3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_trophies_allconversations3x.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_trophies_allconversations3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_trophies_allconversations3x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6.png: Error: Duplicate resources ```

Я уже безуспешно пробовал следующее из ответов, которые нашел на React Native Duplicate resources:

Попытка №1:

«Удаление чертежей с помощью rm -rf android / app / src / main / res / drawable- * и создание APK в Android Studio сработало для меня».

Попытка №2:

"rm -rf android / app / src / main / res / drawable- *

пакет response-native --platform android --dev false --entry-file index.js --bundle-output android / app / src / main / assets / index.android.bundle --assets-dest android / app / src / main / res /

И скомпилируйте андроид снова, реагируй-родной run-android "

Есть другие идеи?

 03.10.2018 19:50
42
5
20 284
11
Данный вопрос помечен как решенный
 Ответы 11
llya сегодня я столкнулся с подобной проблемой и исправился следующими шагами:

обновлен путь к классам com.android.tools.build:gradle:3.1.3 на путь к классам com.android.tools.build:gradle:3.2.0 в build.gradle.

изменен distributionUrl = https: //services.gradle.org/distributions/gradle-4.4-all.zip на distributionUrl = https: //services.gradle.org/distributions/gradle-4.6-all.zip в / android / gradle / обертка / gradle-wrapper.properties

Удален android.enableAapt2 = false из gradle.properties.

Обновлен buildTools, версия: 27.0.3.

чистый проект

снова синхронизировать gradle в студии Android.

bundle и повторите попытку, чтобы создать сборку выпуска.

 03.10.2018 20:53
Была такая же ошибка. Что я сделал, чтобы решить эту проблему:

удалить все картинки в вытяжной папке Android / приложение / SRC / основной / res
сгенерировать apk cd android && gradlew buildRelease
 17.10.2018 15:27
Я просто удалил папку android/app/build/generated/, и сборка прошла успешно.

 18.01.2019 12:42
Последние версии React Native (> 0.57.0) повысили уровень оболочки Gradle до 4.4, а плагин Gradle до 3.1.4, как указано в журнале изменений. Это приводит к тому, что процесс сборки Gradle сохраняет результаты AAPT, которые теперь требуются, в другом каталоге, чем раньше. Итак, в основном вам нужно отредактировать файл /node_modules/react-native/react.gradle и добавьте doLast сразу после блока doFirst вручную.

doFirst { ... }
doLast {
    def moveFunc = { resSuffix ->
        File originalDir = file("$buildDir/generated/res/react/release/drawable-${resSuffix}");
        if (originalDir.exists()) {
            File destDir = file("$buildDir/../src/main/res/drawable-${resSuffix}");
            ant.move(file: originalDir, tofile: destDir);
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}
 06.03.2019 18:16
 Ответ принят как подходящий
Вот простое решение:

Удалить строить внутри папки Android / приложение
Удалить строить внутри папки андроид
запустить rm -rf $HOME/.gradle/caches/
Откройте build.gradle -> Android / приложение / build.gradle
прокомментируйте эту строку
//apply from: "../../node_modules/react-native/react.gradle"

Удалите файл index.android.bundle из папки ресурсов и создайте заново с помощью react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

запустить react-native run-androidИли запустить react-native run-android --variant=release

Удачного кодирования ..

 19.03.2019 17:06
Эта проблема возникает, когда у вас есть 2 изображения с одинаковыми именами и разными типами.

Просто проверьте свои активы и не называйте их одинаковыми.

 29.04.2019 16:07
удалите все файлы с именами вроде node_modules_ {some_path} _ {imagename}. {extension} или src_images_ {imagename}. {extension}

из всех папок в android / app / src / main / res, например

android / приложение / src / main / res / drawable-xhdpi / node_modules_reactnavigation_src_views_assets_backicon.png Android / приложение / SRC / основной / res / вытяжка-xhdpi / src_images_mylogo.jpg

Вероятно, они были помещены туда с помощью пакета response-native, и они вызывают ошибку дублирования ресурса

 22.05.2019 19:54
Перейдите по пути android/app/src/res/ и затем удалите все папки drawable-hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi, raw.

 08.11.2019 07:33
Если сборка завершится неудачно после выполнения Задача: приложение: bundleReleaseJsAndAssets, вы увидите эту ошибку при следующей попытке.

Самый простой способ найти повторяющиеся записи - использовать контроль версий.

Если вы используете Git. Вы можете получить все неотслеживаемые файлы с помощью команды

git status

& удалите файлы в каталогах / android / app / src / main / res / drawable **.

Повторно запустить сборку должно работать.

 23.12.2019 11:57
Удалить необработанный файл в SRC / основной / res / raw

Затем запустите This cmd =>

npx response-native bundle --platform android --dev false --entry-file index.js --bundle-output android / app / src / main / assets / index.android.bundle --assets-dest android / app / сборка / промежуточные / res / объединенные / выпуск /

Потом иди беги / android => agradlew assemblyRelease

 24.11.2020 12:09
Лучший ответ, который я могу сказать, - когда вы впервые успешно создаете собственное приложение для реагирования, вы сгенерируете некоторые ресурсы сборки выпуска.

Удалите их все и удалите папку сборки в android / app / build.

И перезапустите npm, запустите android.

 27.12.2020 09:36
Другие вопросы по теме
Возвращаемое значение в обещаниях
React-Apollo: вызовы запроса для списка переменных
Связывание двух входных текстов с помощью React
Реагировать - 'отклонить' не определено
React: create-response-app завершается с ошибкой «Не удается найти модуль lodash»
Как можно построить React поверх Drupal?
Состояние не меняется в reactjs
Заголовок набора appolo-link-rest
Выровнять текст с предыдущим текстом после разрыва строки
Response-dropzone - Как читать файлы через папку?
Похожие вопросы
RecyclerView.onScrolled () не вызывается
Оберните метод в команды с помощью обработки аннотаций
Флажок для Android
Работает ли Web Worker в основном потоке пользовательского интерфейса Android или в отдельном потоке?
Создание квадрата на основе ширины экрана android с использованием макета ограничений
Плагин аутентификации телефона Ionic firebase не установлен
Проблема преобразования речи в текст Android
Прокрутка MapView и Expandablelistview
Виджет с отслеживанием состояния в теле Scaffold
Выражение регулярного выражения не работает для специальных символов перед строкой в ​​Android Studio
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»


RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как установить переменную окружения в React JS ..?
Вопросы
JAVASCRIPT
Как установить переменную окружения в React JS ..?
Я новичок в React JS. Я пытаюсь создать военный файл из приложения React, но застрял где-то внизу. Это дает мне ошибки ниже.

Creating an optimized production build...

Treating warnings as errors because process.env.CI = true.
Most CI servers set it automatically.

Failed to compile.



./src/Home.js
  Line 2:   'AppNavbar' is defined but never used  no-unused-vars
  Line 3:  'Link' is defined but never used       no-unused-vars
  Line 4:  'Button' is defined but never used     no-unused-vars
  Line 4:  'Container' is defined but never used  no-unused-vars

./src/App.js
  Line 5:   'MenuBar' is defined but never used        no-unused-vars
  Line 6:   'PrivilegeList' is defined but never used  no-unused-vars
  Line 8:   'logo' is defined but never used           no-unused-vars


  npm ERR! code ELIFECYCLE
  npm ERR! errno 1
  npm ERR! my-app@0.1.0 build: `react-scripts build`
  npm ERR! Exit status 1
  npm ERR!
  npm ERR! Failed at the my-app@0.1.0 build script.
  npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

  npm ERR! A complete log of this run can be found in:
    npm ERR!     D:\ReactJS-workspace\my-app\npm\cache\_logs\2018-10-19T07_44_19_233Z-debug.log
    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD FAILURE
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 01:36 min
    [INFO] Finished at: 2018-10-19T13:14:19+05:30
    [INFO] ------------------------------------------------------------------------
    [ERROR] Failed to execute goal org.codehaus.mojo:exec-maven-plugin:1.3.2:exec (npm run build (compile)) on project my-app: Command execution failed.: Process exited with an error: 1 (Exit value: 1) -> [Help 1]
    [ERROR]
    [ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
    [ERROR] Re-run Maven using the -X switch to enable full debug logging.
    [ERROR]
    [ERROR] For more information about the errors and possible solutions, please read the following articles:
    [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
Ниже представлена ​​моя структура папок.

Как установить переменную окружения в React JS ..?

Я хочу установить process.env.CI = false, как установить переменную среды в React JS?

 19.10.2018 10:05
15
5
32 621
11
Данный вопрос помечен как решенный
 Ответы 11
Создайте файл с именем .eslintrc в корневой папке и добавьте в этот файл следующие правила -

{
    "rules": {
        "no-unused-vars": "off"
    }
}
Это отключит строгую проверку правила eslint no-unused-vars. Вы можете добавить больше правил в этот файл, если хотите их отключить.

Подробнее читайте в руководстве - https://eslint.org/docs/user-guide/configuring.

 19.10.2018 10:14
проверьте этот пакет dotenv,

создайте новый файл .env в вашем рабочем каталоге

установить dotenv с помощью npm install dotenv

добавьте это в свое приложение require('dotenv').config()

в этом файле напишите process.env.CI = false

добавьте .env к вашему .gitignore [при использовании git]

перезапустите ваше приложение.

ИЛИ запустите этот CI=false npm run build

 19.10.2018 10:15
Похоже, вам нужно, чтобы ваше приложение имело доступ к переменным process.env.

Для этого у вас есть несколько вариантов (один из которых включает использование сторонней библиотеки, указанной выше, что является хорошим вариантом, но выполняет несколько задач).

1) Задайте переменные среды в вашей команде запуска, например: CI=travis npm start. В этом случае у вас будет доступ к process.env.CI в вашем приложении.

2) Установите переменную окружения в вашем, вы знаете, окружении. Если вы используете Mac или Linux, просто добавьте переменную среды, как обычно, если ваша оболочка будет экспортировать. Проверить с echo $VAR

3) Вручную сделайте что-нибудь глупое в своем приложении для записи в глобальные переменные. Наверное, не беспокойтесь.

4) Просто используйте .dotenv. То, что он делает, на самом деле несложно, но он предлагает решение, которое практически необходимо для большинства проектов по нескольким причинам.

 19.10.2018 10:52
 Ответ принят как подходящий
Чтобы установить его для выполнения текущего процесса, просто отредактируйте файл package.json и измените сценарий "build" следующим образом:

"scripts": {
"start": "react-scripts start",
"build": "set \"CI=false\" && react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject" }
Это установит для переменной среды CI значение «false». Теперь вы можете выполнить команду сборки с установленной переменной CI:

npm run build
 08.01.2019 07:12
Заголовок вашего вопроса сильно отличается от того, что происходит в описании.

Чтобы использовать переменные среды в React, они должны иметь префикс REACT_APP_.

Например, приложение React уловит следующее:

REACT_APP_API_URL=/api

В то время как это не будет:

API_URL=/api

Для получения дополнительной информации см. Официальную документацию:

 17.04.2019 11:19
Я пришел к этому вопросу, когда искал интеграцию с Bitbucket Pipelines.

Для всех, кто ищет то же самое, вы можете добавить CI как false в Settings/Repository Variables для своего репо (если вы не хотите, чтобы он был частью вашего кода, контролируемого версиями).

Если вы хотите добавить его для всех ваших репозиториев в битбакете, вы должны добавить его в свои глобальные настройки, но, вероятно, лучше всего добавить его на основе репо за репо.

 23.03.2020 13:52
"scripts": {
    "start": "react-scripts start",
    "build": "CI=false react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"  
  },
Попробуйте это ... Это установит для CI значение false

 14.04.2020 11:54
Вы должны создать файл .env в корневом каталоге и определить переменную в этом файле. Пожалуйста, убедитесь, что каждый варибал начинается с REACT_APP_, как REACT_APP_IS_PROD=1

Вам необходимо перезапускать сервер каждый раз, когда вы меняете или создаете новую переменную.

Ссылка

 27.09.2020 07:37
Создайте файл .env или еще .env.dev, .env.qa, .env.stg ... и т. д.

Добавьте в этот файл следующую строку

CI=false
если вы еще не установили env-cmd, сначала установите его и включите в package.json

Затем добавьте следующие строки в «скрипты» package.json.

  "scripts": {
    "start": "env-cmd -f .env.dev react-scripts start",
    "build": "react-scripts build",
    "build:dev": "env-cmd -f .env.dev npm run-script build",
    "build:qa": "env-cmd -f .env.qa npm run-script build",
    "build:stg": "env-cmd -f .env.stg npm run-script build",
    "build:prod": "env-cmd -f .env.prod npm run-script build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
Затем выполните сборку с помощью "npm run build: dev" или соответствующей команды.

 14.05.2021 08:40
Для Windows

установить REACT_APP_ENV = разработка && запуск сценариев реакции

Для Linux, Ubuntu, macOs

REACT_APP_ENV = запуск сценариев реакции разработки

 09.07.2021 13:04
Вы можете установить переменные среды в файле .env

Вот шаги

создать файл с именем .env в корневой папке проекта

Теперь, когда вы добавляете переменную, вам нужно добавить префикс REACT_APP например: вы хотите добавить переменную API_URL для своего API. Поэтому вам нужно добавить переменную с префиксом RECT_APP, как показано ниже.

REACT_APP_API_URL

Остановите свой работающий сервер и перезапустите, используя npm start

Чтобы получить доступ к переменной env, вы должны вызвать: process.env.REACT_APP_API_URL

Ну вот. Теперь вы можете получить доступ к переменной env

Примечание:

Убедитесь, что вы добавили префикс (REACT_APP)
Пожалуйста, остановите свой сервер и перезапустите, чтобы он загрузил переменную env, если она добавлена
 14.09.2021 17:48
Другие вопросы по теме
Как npm установить все каталоги функций с помощью AWS CodeBuild
Проблема с запуском проекта на сервере с nodejs
Получить метаданные с любого веб-сайта, используя только интерфейс для расширений Chrome?
Может ли mocha запускать тесты .skip вместе с обычными тестами?
Приложение Node.js подключается к существующему веб-сайту
Где хранить файлы локально, чтобы они не удалялись после удаления приложения Electron?
Webpack может конвертировать js в es6?
Выполните проверку схемы для индексов массива в javascript
"недостаточные области аутентификации" из Google API при вызове из кластера K8S
MongoDB Aggregation - производительность поиска $
Похожие вопросы
Как преобразовать объект json в массив json в javascript
Самый быстрый способ получить определенные поля в объекте - Javascript
Проблема с запуском проекта на сервере с nodejs
Вызов функции компонентов из службы - возможная циклическая зависимость - Angular
Адаптивная круговая диаграмма с React-Vis
Получить метаданные с любого веб-сайта, используя только интерфейс для расширений Chrome?
Как определить, нажата ли карта или маркер
Javascript Vanilla - обработчик событий двойного щелчка на входах / GetElementsByTagName
Тестовый кейс в жасмине
Приложение Node.js подключается к существующему веб-сайту
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»
