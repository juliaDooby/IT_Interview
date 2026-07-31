Dev & Stuff

Заметки мобильного разработчика

Перейти к содержимому
Главная
iOS разработка
Кроссплатформа
Подготовка к собеседованию
База
Операционные системы
Raspberry Pi
Прочее
iJun в AppStore
Вопросы на собеседованиях по iOS в 2025 году: к чему готовиться
by lexoneОпубликовано15.04.2025
Собеседования на позицию iOS-разработчика в 2025 году существенно изменились по сравнению с предыдущими годами. Сейчас рекрутеры и технические специалисты уделяют особое внимание не только фундаментальным знаниям Swift и архитектуры iOS, но и современным технологиям — SwiftUI, Combine, Swift Concurrency и интеграции с искусственным интеллектом. Понимание этих областей стало критически важным для успешного прохождения технического интервью.


Почему iOS-разработчик провалил собеседование в 2025 году?
Он пытался объяснить Swift Concurrency с помощью... Objective-C
Содержание:
Введение
Фундаментальные вопросы Swift
Базовые концепции языка
Функциональное программирование в Swift
Современные фреймворки и технологии
SwiftUI и декларативный UI
Swift Concurrency
Combine и реактивное программирование
Архитектурные паттерны
MVVM, Clean Architecture и современные подходы
Dependency Injection и тестирование
Интеграция с Core ML и искусственным интеллектом
Практические задачи на собеседованиях
Создание небольшого приложения
Алгоритмические задачи
Вопросы про UIKit vs SwiftUI
Заключение
Список литературы и дополнительных материалов

Введение
В данной статье мы рассмотрим наиболее распространенные вопросы, которые задают на собеседованиях iOS-разработчикам в 2025 году, и дадим рекомендации по подготовке к ним. Независимо от вашего уровня — junior, middle или senior — эта информация поможет вам чувствовать себя увереннее при поиске работы.

В своем приложении я собрал топ 100 вопросов, которые чаще всего задают начинающим iOS разработчикам. Скачать iJun в AppStore

Фундаментальные вопросы Swift
Базовые концепции языка
Несмотря на активное развитие Swift, рекрутеры по-прежнему проверяют понимание базовых концепций языка. Вот ключевые аспекты, которые часто затрагивают на собеседованиях:

Value types vs Reference types

Объясните разницу между типами-значениями (структуры, перечисления) и ссылочными типами (классы) в Swift:

// Пример структуры (value type)
struct Point {
    var x: Int
    var y: Int
}

var point1 = Point(x: 1, y: 2)
var point2 = point1 // Создается копия
point2.x = 10 // Меняется только point2
// point1.x == 1, point2.x == 10

// Пример класса (reference type)
class Rectangle {
    var width: Int
    var height: Int

    init(width: Int, height: Int) {
        self.width = width
        self.height = height
    }
}

let rect1 = Rectangle(width: 5, height: 10)
let rect2 = rect1 // Создается ссылка
rect2.width = 20 // Меняется и rect1, и rect2
// rect1.width == 20, rect2.width == 20
Опциональные типы и их обработка

В 2025 году вопросы про опциональные типы остаются актуальными. Важно уметь объяснить различные способы их безопасной распаковки:

// Разные способы работы с опционалами
let optionalString: String? = "Привет"

// 1. Force unwrapping (не рекомендуется)
let forcedString = optionalString!

// 2. Optional binding (if let)
if let safeString = optionalString {
    print("Значение: \(safeString)")
}

// 3. Guard let (ранний выход)
func processString(_ string: String?) {
    guard let safeString = string else {
        print("Строка пуста")
        return
    }
    print("Обработка: \(safeString)")
}

// 4. Nil coalescing operator
let resultString = optionalString ?? "Значение по умолчанию"

// 5. Optional chaining
let count = optionalString?.count
Протоколы и расширения

На собеседованиях часто спрашивают о преимуществах протокол-ориентированного программирования:

// Определение протокола
protocol Drawable {
    var color: UIColor { get }
    func draw()
}

// Расширение протокола с реализацией по умолчанию
extension Drawable {
    func draw() {
        print("Рисуем объект цветом \(color)")
    }
}

// Структура, реализующая протокол
struct Circle: Drawable {
    var color: UIColor = .red
    var radius: CGFloat

    // Переопределение метода из протокола
    func draw() {
        print("Рисуем круг радиусом \(radius) цветом \(color)")
    }
}
Функциональное программирование в Swift
В 2025 году возросла значимость функционального программирования. На собеседованиях часто проверяют понимание концепций высшего порядка:

// Работа с функциями высшего порядка
let numbers = [1, 2, 3, 4, 5]

// Map - преобразование элементов
let doubled = numbers.map { $0 * 2 } // [2, 4, 6, 8, 10]

// Filter - фильтрация элементов
let evenNumbers = numbers.filter { $0 % 2 == 0 } // [2, 4]

// Reduce - свертка элементов
let sum = numbers.reduce(0, +) // 15

// CompactMap - преобразование с удалением nil
let strings = ["1", "два", "3", "четыре", "5"]
let parsedInts = strings.compactMap { Int($0) } // [1, 3, 5]

// FlatMap - "разглаживание" вложенных коллекций
let nestedArrays = [[1, 2], [3, 4], [5]]
let flattened = nestedArrays.flatMap { $0 } // [1, 2, 3, 4, 5]
Современные фреймворки и технологии
SwiftUI и декларативный UI
К 2025 году SwiftUI стал основным фреймворком для разработки пользовательских интерфейсов в iOS. На собеседованиях часто задают вопросы об архитектуре SwiftUI-приложений:

// Пример простого представления в SwiftUI
struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("Счетчик: \(count)")
                .font(.title)

            Button("Увеличить") {
                count += 1
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
        .padding()
    }
}
Свойства-обертки (Property Wrappers)

Понимание работы свойств-оберток стало обязательным требованием:

@State - внутреннее состояние представления
@Binding - двусторонняя связь с источником данных
@ObservedObject - наблюдение за внешним объектом
@EnvironmentObject - доступ к глобальным данным
@Environment - чтение значений из окружения
@AppStorage - хранение данных в UserDefaults
@SceneStorage - сохранение состояния сцены
На собеседованиях часто нужно объяснить, когда использовать каждую из них.

Swift Concurrency
Вопросы по многопоточности и параллелизму стали еще более актуальными. Основные темы:

// Асинхронные функции и последовательности
func fetchUserData() async throws -> UserData {
    let (data, _) = try await URLSession.shared.data(from: URL(string: "https://api.example.com/user")!)
    return try JSONDecoder().decode(UserData.self, from: data)
}

// Использование async/await
Task {
    do {
        let userData = try await fetchUserData()
        print("Получены данные пользователя: \(userData.name)")
    } catch {
        print("Ошибка: \(error)")
    }
}

// Структурированный параллелизм
async let users = fetchUsers()
async let posts = fetchPosts()
async let settings = fetchSettings()

// Ожидание выполнения всех задач
let (userResult, postsResult, settingsResult) = await (users, posts, settings)
Акторы (Actors)

В 2025 году акторы стали важной частью разработки конкурентных приложений:

// Определение актора для безопасного доступа к общему состоянию
actor UserManager {
    private var users = [String: User]()

    func addUser(_ user: User) {
        users[user.id] = user
    }

    func getUser(id: String) -> User? {
        return users[id]
    }

    func processUsers() async {
        // Асинхронная обработка пользователей
        for user in users.values {
            await processUser(user)
        }
    }

    private func processUser(_ user: User) async {
        // Обработка конкретного пользователя
    }
}

// Использование актора
let manager = UserManager()

Task {
    await manager.addUser(User(id: "123", name: "Иван"))
    let user = await manager.getUser(id: "123")
}
Combine и реактивное программирование
Знание Combine, фреймворка для обработки асинхронных событий с использованием реактивного подхода, также проверяется на современных собеседованиях:

// Пример использования Combine
import Combine

class SearchViewModel {
    @Published var searchText = ""
    private var cancellables = Set<AnyCancellable>()

    init() {
        // Обработка текста поиска с задержкой и фильтрацией пустых запросов
        $searchText
            .debounce(for: .milliseconds(300), scheduler: RunLoop.main)
            .filter { !$0.isEmpty }
            .removeDuplicates()
            .sink { [weak self] text in
                self?.performSearch(text)
            }
            .store(in: &cancellables)
    }

    private func performSearch(_ query: String) {
        print("Поиск по запросу: \(query)")
        // Выполнение поискового запроса
    }
}
Архитектурные паттерны
MVVM, Clean Architecture и современные подходы
В 2025 году рекрутеры уделяют особое внимание архитектурным знаниям. Важно понимать не только классические паттерны, но и современные подходы:

// Пример MVVM архитектуры
// Модель
struct User {
    let id: String
    let name: String
    let email: String
}

// ViewModel
class UserViewModel: ObservableObject {
    @Published var user: User?
    @Published var isLoading = false
    @Published var errorMessage: String?

    private let userService: UserServiceProtocol

    init(userService: UserServiceProtocol) {
        self.userService = userService
    }

    func fetchUser(id: String) {
        isLoading = true
        errorMessage = nil

        Task {
            do {
                let fetchedUser = try await userService.getUser(id: id)

                // Возвращаемся на главный поток для обновления UI
                await MainActor.run {
                    self.user = fetchedUser
                    self.isLoading = false
                }
            } catch {
                await MainActor.run {
                    self.errorMessage = error.localizedDescription
                    self.isLoading = false
                }
            }
        }
    }
}

// View (SwiftUI)
struct UserView: View {
    @ObservedObject var viewModel: UserViewModel

    var body: some View {
        VStack {
            if viewModel.isLoading {
                ProgressView()
            } else if let user = viewModel.user {
                Text("Имя: \(user.name)")
                Text("Email: \(user.email)")
            } else if let error = viewModel.errorMessage {
                Text("Ошибка: \(error)")
                    .foregroundColor(.red)
            }
        }
        .onAppear {
            viewModel.fetchUser(id: "123")
        }
    }
}
Dependency Injection и тестирование
Вопросы о внедрении зависимостей и тестировании кода также часто встречаются на собеседованиях:

// Протокол сервиса
protocol UserServiceProtocol {
    func getUser(id: String) async throws -> User
}

// Реализация сервиса
class UserService: UserServiceProtocol {
    func getUser(id: String) async throws -> User {
        // Настоящая реализация с сетевыми запросами
        return User(id: id, name: "Тестовый пользователь", email: "test@example.com")
    }
}

// Мок для тестирования
class MockUserService: UserServiceProtocol {
    var userToReturn: User?
    var errorToThrow: Error?

    func getUser(id: String) async throws -> User {
        if let error = errorToThrow {
            throw error
        }
        guard let user = userToReturn else {
            throw NSError(domain: "MockError", code: 404)
        }
        return user
    }
}

// Тест ViewModel
import XCTest

class UserViewModelTests: XCTestCase {
    func testSuccessfulFetch() async {
        // Arrange
        let mockService = MockUserService()
        let expectedUser = User(id: "123", name: "Тест", email: "test@example.com")
        mockService.userToReturn = expectedUser

        let viewModel = UserViewModel(userService: mockService)

        // Act
        viewModel.fetchUser(id: "123")

        // Ждем, пока асинхронные операции завершатся
        await fulfillment(of: [expectation(description: "Wait for fetch")], timeout: 1.0)

        // Assert
        XCTAssertEqual(viewModel.user?.id, expectedUser.id)
        XCTAssertEqual(viewModel.user?.name, expectedUser.name)
        XCTAssertEqual(viewModel.user?.email, expectedUser.email)
        XCTAssertFalse(viewModel.isLoading)
        XCTAssertNil(viewModel.errorMessage)
    }
}
Интеграция с Core ML и искусственным интеллектом
Одна из трендовых тем на собеседованиях 2025 года — работа с AI и машинным обучением на устройствах:

// Базовый пример использования Core ML
import CoreML
import Vision

func detectObjects(in image: UIImage) {
    guard let ciImage = CIImage(image: image) else { return }

    // Загрузка модели
    guard let model = try? VNCoreMLModel(for: ObjectDetector().model) else {
        print("Не удалось загрузить модель")
        return
    }

    // Создание запроса
    let request = VNCoreMLRequest(model: model) { request, error in
        guard let results = request.results as? [VNRecognizedObjectObservation],
              error == nil else {
            print("Ошибка обработки: \(error?.localizedDescription ?? "")")
            return
        }

        // Обработка результатов
        for observation in results {
            let topLabel = observation.labels.first
            print("Обнаружен объект: \(topLabel?.identifier ?? "неизвестно") с вероятностью \(topLabel?.confidence ?? 0)")
        }
    }

    // Выполнение запроса
    let handler = VNImageRequestHandler(ciImage: ciImage)
    try? handler.perform([request])
}
Практические задачи на собеседованиях
В 2025 году собеседования часто включают практические задания. Рассмотрим типичные примеры:

Создание небольшого приложения
Часто кандидатам предлагают разработать мини-приложение за ограниченное время (1-2 часа). Ключевые моменты, на которые обращают внимание:

Архитектура приложения (MVVM, Clean, etc.)
Качество кода и следование принципам SOLID
Обработка ошибок и edge cases
Работа с сетью и многопоточностью
UI/UX решения
Алгоритмические задачи
Несмотря на возрастающую роль архитектурных знаний, алгоритмические задачи всё еще актуальны:

// Пример алгоритмической задачи: поиск двух чисел, сумма которых равна целевому значению
func twoSum(_ nums: [Int], _ target: Int) -> [Int]? {
    var numDict = [Int: Int]() // [число: индекс]

    for (index, num) in nums.enumerated() {
        let complement = target - num

        if let complementIndex = numDict[complement] {
            return [complementIndex, index]
        }

        numDict[num] = index
    }

    return nil
}

// Проверка
let result = twoSum([2, 7, 11, 15], 9)
print(result ?? "Решение не найдено") // [0, 1]
Вопросы про UIKit vs SwiftUI
В 2025 году многие компании всё еще поддерживают приложения на UIKit, поэтому знание обоих фреймворков ценится:

Сравнение подходов

// UIKit - императивный подход
class CounterViewController: UIViewController {
    private var count = 0
    private let countLabel = UILabel()
    private let incrementButton = UIButton()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Настройка label
        countLabel.text = "Счетчик: 0"
        countLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(countLabel)

        // Настройка кнопки
        incrementButton.setTitle("Увеличить", for: .normal)
        incrementButton.setTitleColor(.white, for: .normal)
        incrementButton.backgroundColor = .blue
        incrementButton.layer.cornerRadius = 8
        incrementButton.addTarget(self, action: #selector(incrementCount), for: .touchUpInside)
        incrementButton.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(incrementButton)

        // Установка ограничений
        NSLayoutConstraint.activate([
            countLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            countLabel.centerYAnchor.constraint(equalTo: view.centerYAnchor, constant: -50),

            incrementButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            incrementButton.topAnchor.constraint(equalTo: countLabel.bottomAnchor, constant: 20),
            incrementButton.widthAnchor.constraint(equalToConstant: 120),
            incrementButton.heightAnchor.constraint(equalToConstant: 44)
        ])
    }

    @objc private func incrementCount() {
        count += 1
        countLabel.text = "Счетчик: \(count)"
    }
}

// SwiftUI - декларативный подход
struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("Счетчик: \(count)")
                .font(.title)

            Button("Увеличить") {
                count += 1
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
    }
}
Заключение
Собеседования по iOS-разработке в 2025 году стали комплексными и охватывают множество аспектов — от фундаментальных знаний Swift до современных технологий и архитектурных подходов. Для успешного прохождения интервью необходимо:

Глубоко понимать основы Swift и его современные возможности
Уверенно владеть SwiftUI и понимать его взаимодействие с UIKit
Знать принципы многопоточности и конкурентного программирования
Иметь опыт с архитектурными паттернами и тестированием
Следить за новыми технологиями и фреймворками Apple
Важно не только знать теорию, но и уметь применять эти знания на практике, демонстрируя их во время решения задач на собеседовании.

Не забудьте загрузить приложение iJun в AppStore и подписаться на мой YouTube канал для получения дополнительных материалов по iOS-разработке.

Список литературы и дополнительных материалов
Apple Developer Documentation: developer.apple.com
Swift Language Guide: swift.org
WWDC 2024-2025 Sessions: developer.apple.com/videos
Posted in Вопросы и ответы (разбор популярных тем), Подготовка к собеседованиюПомеченные iOS interview

Опубликовано lexone
Смотреть все записи от lexone

Навигация по записям
Назад
Сравнение подходов кроссплатформенной разработки Flutter vs Skip.tools
Далее
Создание адаптивного интерфейса в SwiftUI: подходы и лучшие практики
YouTube
GitHub
Telegram
Email
Email
Поиск по сайту
Поиск
Поиск…
Найти
Рубрики
Выберите рубрику
Свежие записи
Как навести порядок дома и перестать терять вещи? Приложение “Порядочек”
Псевдокод – что это, и как его готовить
Псевдокод на реальной задаче – проектирование экрана авторизации в iOS
Как правильно и нужно ли писать псевдокод в iOS разработке
Математические модели, как набор идей описывающих программу
Dev & Stuff by Alex Krzywicki.
Powered by WordPress
