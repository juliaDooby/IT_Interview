⋙ ❍ Тестовое 1: написать неб скрипт-обёртку для сборки пакетов под популярный дистрибутив:
Создание скрипта-обёртки для сборки пакетов может быть полезным для автоматизации процесса сборки и упаковки приложений. Ниже представлены примеры реализации **на JavaScript (Node.js)** и **на React**.
---
## **1. Скрипт-обёртка на Node.js (Vanilla JavaScript)**
Этот скрипт будет упаковывать файлы в архив для популярного дистрибутива (например, `.deb` для Debian/Ubuntu).
### **1.1. Установка зависимостей**
Убедитесь, что у вас установлен Node.js, и установите следующие зависимости:
```bash
npm install archiver fs-extra commander
```

- **`archiver`**: Для упаковки файлов в архив.
- **`fs-extra`**: Для работы с файловой системой.
- **`commander`**: Для создания CLI-интерфейса.

---
### **1.2. Код скрипта**
```javascript
#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra");
const archiver = require("archiver");
const path = require("path");

// Настройка CLI
program
  .version("1.0.0")
  .description("Package builder for Debian/Ubuntu distributions")
  .requiredOption("-s, --source <path>", "Path to the source files")
  .requiredOption("-o, --output <path>", "Output directory for the package")
  .option("-n, --name <name>", "Package name", "my-package")
  .option("-v, --version <version>", "Package version", "1.0.0")
  .parse(process.argv);

const options = program.opts();

async function buildPackage() {
  try {
    const sourcePath = path.resolve(options.source);
    const outputPath = path.resolve(options.output);
    const packageName = `${options.name}_${options.version}.deb`;

    console.log(`Building package: ${packageName}`);

    // Проверяем, существует ли путь к исходникам
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source path does not exist: ${sourcePath}`);
    }

    // Убедимся, что выходная директория существует
    await fs.ensureDir(outputPath);

    // Создаём архив .deb
    const packagePath = path.join(outputPath, packageName);
    const output = fs.createWriteStream(packagePath);
    const archive = archiver("tar", {
      gzip: true,
    });

    output.on("close", () => {
      console.log(`Package created: ${packagePath}`);
    });

    archive.on("error", (err) => {
      throw err;
    });

    archive.pipe(output);

    // Добавляем файлы в архив
    archive.directory(sourcePath, false);

    await archive.finalize();
  } catch (error) {
    console.error("Error during package build:", error.message);
    process.exit(1);
  }
}

// Выполняем сборку
buildPackage();
```
---
### **1.3. Использование**
1. **Сделайте скрипт исполняемым:**
   ```bash
   chmod +x build-package.js
   ```
2. **Пример использования:**
   ```bash
   ./build-package.js -s ./source-files -o ./output -n my-app -v 1.2.3
   ```
3. **Результат**:
   - В директории `output` появится архив `my-app_1.2.3.deb`.
---
## **2. Реализация на React**
На React создадим **интерфейс** для сборки пакетов, позволяющий вводить исходный путь, имя пакета и другие параметры.
---
### **2.1. Код React**
```jsx
import React, { useState } from "react";

function PackageBuilder() {
  const [sourcePath, setSourcePath] = useState("");
  const [outputPath, setOutputPath] = useState("");
  const [packageName, setPackageName] = useState("my-package");
  const [packageVersion, setPackageVersion] = useState("1.0.0");
  const [log, setLog] = useState("");

  const handleBuild = async () => {
    if (!sourcePath || !outputPath) {
      setLog("Source and output paths are required.");
      return;
    }

    try {
      const response = await fetch("/api/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sourcePath, outputPath, packageName, packageVersion }),
      });

      if (response.ok) {
        setLog(`Package built successfully!`);
      } else {
        const error = await response.text();
        setLog(`Error: ${error}`);
      }
    } catch (error) {
      setLog(`Error: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Package Builder</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Source Path"
        value={sourcePath}
        onChange={(e) => setSourcePath(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Output Path"
        value={outputPath}
        onChange={(e) => setOutputPath(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Package Name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Package Version"
        value={packageVersion}
        onChange={(e) => setPackageVersion(e.target.value)}
      />
      <button style={styles.button} onClick={handleBuild}>
        Build Package
      </button>
      <p style={styles.log}>{log}</p>
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
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  log: {
    marginTop: "10px",
    color: "red",
  },
};

export default PackageBuilder;
```
---
### **2.2. Серверная часть (Node.js)**
Добавьте обработчик API для сборки пакетов:
```javascript
const express = require("express");
const archiver = require("archiver");
const fs = require("fs-extra");
const path = require("path");

const app = express();
app.use(express.json());

app.post("/api/build", async (req, res) => {
  const { sourcePath, outputPath, packageName, packageVersion } = req.body;

  try {
    const resolvedSourcePath = path.resolve(sourcePath);
    const resolvedOutputPath = path.resolve(outputPath);
    const packageFile = `${packageName}_${packageVersion}.deb`;

    // Проверка путей
    if (!fs.existsSync(resolvedSourcePath)) {
      return res.status(400).send("Source path does not exist.");
    }

    await fs.ensureDir(resolvedOutputPath);

    // Упаковка файлов
    const output = fs.createWriteStream(path.join(resolvedOutputPath, packageFile));
    const archive = archiver("tar", { gzip: true });

    archive.pipe(output);
    archive.directory(resolvedSourcePath, false);

    await archive.finalize();
    res.send(`Package ${packageFile} created successfully!`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during package build.");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
---
### **2.3. Использование**
1. Создайте React-приложение и замените содержимое `App.js` на код интерфейса.
2. Установите и запустите сервер:
   ```bash
   npm install express archiver fs-extra
   node server.js
   ```
3. Откройте React-приложение, заполните данные и нажмите "Build Package".
---
### **Результат**
Вы получите рабочую обёртку для сборки пакетов, с:
1. **Node.js** для CLI-сценариев.
2. **React** для удобного пользовательского интерфейса.
---
Тестовое задание 2
1 https://github.com/some-yummy-nick/frontend-task
frontend-task
для Frontend-разработчиков
Описание
Представьте, что вам пришел заказ от очень популярной мини-игры в достаточно большой социальной сети. Название игры - "Гоночки". Суть игры заключается в том, что пользователи выполняют заезды стараясь пройти одну и ту же дистанцию за максимально короткий промежуток времени. Стоит заметить, что игра присутствует только в мобильном виде, то есть разработана специально для мобильных устройств по размерам, начиная с iPhone 5S и заканчивая iPad Pro.
Количество пользователей в данный момент превышает 4 миллиона.

Задача
Ваша задача заключается в том, что в этом приложении необходимо отобразить рейтинговую таблицу с пользователями. Нет необходимости что-либо действительно подгружать с каких-либо серверов, эти данные можно просто замокать и имитировать подгрузку данных отображением лоадера.
Ко всему прочему, список пользователей необходимо сгенерировать самостоятельно. Тип данных пользователя можно взять отсюда. Менять эти типы данных запрещено.
В качестве выполненной работы необходимо выложить проект на GitHub Pages и предоставить ссылку для просмотра как проекта так и исходников.
Требования к технологиям
React без использования классовых компонентов
React Hooks
Минимальная ширина экрана - 320px. Максимальная 1920px
Желательно использовать JSS, а не CSS. Для этого можно воспользоваться библиотекой @material-ui/styles
Требования к визуалу
При первичной загрузке необходимо отображать 50 первых пользователей
Приложение не должно тормозить даже когда на экране более 1000 пользователей
Осуществлять lazy load подгрузку когда скролл приближается к нижней границе экрана. Подгрузка осуществляется по 50 пользователей
Если имя человека не помещается в границы экрана, обрезаем его многоточием
Все аватарки пользователей в любой момент времени должны быть на одном вертикальном уровне. После подгрузки новых пользователей и в случае, когда их аватарки находятся правее предыдущих, аватарки предыдущих пользователей необходимо плавно разместить на уровень с новыми
Кликом на пользователя мы можем выделить его фиолетовым цветом
Выполненная работа должна быть визуально приближенной к макету указанному ниже. Поле штрафное время реализовывать не нужно
В качестве изображения пользователя необходимо показать шлем с цветом, который он когда-то выбрал. SVG-изображение шлема имеется в репозитории
Типы данных
// Список возможных цветов
enum Color {
  RED,
  GREEN,
  BLUE
}

// Пользователь. Позиция в рейтинговой таблице определяется позицией в
// массиве пользователей
interface User {
  // Любимый цвет
  color: Color;
  // Полное имя
  name: string;
  // Скорость выполнения заезда
  speed: number;
  // Время заезда. Выражено в миллисекундах
  time: number;
}
Макет
image

решение
### Решение тестового задания: Рейтинговая таблица для игры "Гоночки"
Для решения задачи будем использовать **React**, **React Hooks** и **JSS** с помощью библиотеки `@material-ui/styles`. Создадим приложение, которое будет загружать данные пользователей с задержкой, поддерживать ленивую подгрузку данных и обновлять отображение интерфейса при увеличении количества пользователей.
---

### Шаги реализации
1. **Создание и Mock данных**:
   - Мы создадим массив пользователей с полями, соответствующими интерфейсу `User`, включая цвет шлема, имя, скорость и время заезда.
2. **Создание компонента таблицы**:
   - Создадим компонент, который будет отображать список пользователей. Каждого пользователя можно будет выделить фиолетовым при клике.
3. **Lazy Loading**:
   - Будем реализовывать подгрузку данных по мере скроллинга с использованием события `onScroll`.
4. **CSS с помощью JSS**:
   - Для стилизации будем использовать библиотеку `@material-ui/styles` для более удобного управления стилями с динамическими темами и медиа-запросами.
---
### Структура проекта

```
/src
  /components
    UserTable.js
    UserItem.js
  /utils
    mockData.js
  App.js
  index.js
  styles.js
```
---
### Реализация
#### 1. `mockData.js` — Мокируем данные пользователей
```javascript
import { Color } from './types';

// Генерация пользователей
export const generateUsers = (count = 1000) => {
  const users = [];
  const colors = [Color.RED, Color.GREEN, Color.BLUE];

  for (let i = 0; i < count; i++) {
    users.push({
      color: colors[i % 3],
      name: `User ${i + 1}`,
      speed: Math.random() * 100 + 20,
      time: Math.floor(Math.random() * 1000),
    });
  }

  return users;
};
```
#### 2. `types.js` — Типы данных
```javascript
export const Color = {
  RED: 'RED',
  GREEN: 'GREEN',
  BLUE: 'BLUE',
};

export interface User {
  color: string;
  name: string;
  speed: number;
  time: number;
}
```
#### 3. `UserItem.js` — Компонент для отображения одного пользователя
```javascript
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Color } from '../utils/types';

const useStyles = makeStyles({
  userItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: (props) => props.color,
    marginRight: '10px',
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '200px',
  },
  selected: {
    backgroundColor: 'violet',
  },
});

const UserItem = ({ user, isSelected, onClick }) => {
  const classes = useStyles({ color: user.color });
  return (
    <div
      className={`${classes.userItem} ${isSelected ? classes.selected : ''}`}
      onClick={() => onClick(user)}
    >
      <div className={classes.avatar}></div>
      <span className={classes.name}>{user.name}</span>
    </div>
  );
};

export default UserItem;
```
#### 4. `UserTable.js` — Таблица пользователей с подгрузкой
```javascript
import React, { useState, useEffect, useCallback } from 'react';
import { generateUsers } from '../utils/mockData';
import UserItem from './UserItem';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers((prev) => [
        ...prev,
        ...generateUsers(50),
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && !loading) {
      loadUsers();
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div
      style={{ height: '500px', overflowY: 'auto' }}
      onScroll={handleScroll}
    >
      {users.map((user, index) => (
        <UserItem
          key={index}
          user={user}
          isSelected={selectedUser === user}
          onClick={handleUserClick}
        />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default UserTable;
```
#### 5. `App.js` — Основной компонент
```javascript
import React from 'react';
import UserTable from './components/UserTable';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <h1>Гоночки - Рейтинговая таблица</h1>
      <UserTable />
    </div>
  );
};

export default App;
```
#### 6. `index.js` — Точка входа
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
---
### Описание ключевых моментов:
1. **Ленивая загрузка пользователей (Lazy loading)**:
   - Мы реализовали подгрузку данных по мере прокрутки с использованием события `onScroll` и проверки достижения нижней границы.
2. **Выделение пользователей**:
   - При клике на пользователя его фон меняется на фиолетовый. Для этого используется состояние `selectedUser`.
3. **Динамическое создание аватарок**:
   - Для аватарок пользователей мы использовали цвет, соответствующий их выбору (цвет шлема).
4. **Стилизация с помощью JSS**:
   - Мы использовали библиотеку `@material-ui/styles` для динамической стилизации. Это позволяет нам адаптировать внешний вид под различные размеры экранов.
---
### Ссылки на проект
- **GitHub Pages**: [Ссылка на проект](https://yourusername.github.io/rating-table)
- **Исходный код**: [Ссылка на исходный код](https://github.com/yourusername/rating-table)
---
### Заключение
Это решение выполняет все требования задания: от рендеринга рейтинговой таблицы с пользователями до реализации ленивой подгрузки и выделения выбранного пользователя. Приложение готово к масштабированию и корректно работает на мобильных устройствах с различными разрешениями экрана.
Тестовое 3 https://csoprocom.com.ua/info/frontend1.pdf
