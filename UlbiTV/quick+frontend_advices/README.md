# Быстрый фронтенд. Оптимизация. Как писать JavaScript эффективно.

## Метрики оценки производительности:
1. Время до первой отрисовки

>Статистика гласит, что если приложение загружается больше 3 секунд при среднем интернет соединении, то практически половина пользователей покидают приложение.

>Очень важно, чтобы размер бандла был небольшим и мы могли отдать его сразу. 

2. Время до интерактивности

>Время до момента, когда пользователь может полноценно взаимодействовать с фронтендом приложения.

3. FPS (частота кадров)

>Стабильность картинки. При скроллинге и нажатии на функциональные элементы не происходят подтормаживания приложения (подлагивания, дергание экрана).

4. Память/трафик

>Сюда можно отнести вопросы работы с огромными массивами данных, неоптимизированные размеры картинок (несжатые картинки).

5. Другие

## Профайлер - инструмент для отслеживания производительности приложения.

Для приложений в браузере существует вкладка Performance в dev tools.

В данной вкладке можно настроить скорость соединения, мощность процессора и другое. Необходимо это для того, чтобы посмотреть как наше приложение работает на разных устройствах.

Также специфичные и более удобные профайлеры всегда есть в составе dev tools фреймворков. Они позволяют следить за перерисовками приложения, за тем, как часто они происходят, сколько времени они занимают. 

## Советы по оптимизации приложений 
* Совет 1. Используй фреймворк. Фреймворк - детище больших команд, кторые трудятся над сложными алгоритмами работы и оптимизацией функционала. В реакте используются различные фазы согласования, волокна, сравнения, дерево рендера.  

* Совет 2. Не тянуть весь npm к себе в приложение. Не устанавливать различные библиотеки, если можно обойтись без них. Каждая библиотека, которую мы тянем в приложение, увеличивает размер бандла. Что негативно сказывается на первой отрисовке приложения.

>Bundle - вся сборка приложения, файлы выполняемые браузером
>Chunk - отдельные кусочки, которые мы можем подгружать асинхронно. 
>Bundle состоит из chunks.


* Совет 3. Использовать Debounce и Throttling.
>Debounce - механизм, который на ряд каких-либо событий позволяет выполнить некоторый колбэк (некоторую функцию) в самом конце. 
>Throttling - механизм, похожий на debounce, но отличается он тем, что действие выполняется не в самом конце, а раз в какой-то период времени.
>ServerSideRendering - механизм генерирования готового html на стороне сервера и отправка его на клиент. Заранее подготовленной статики нет. Так работали приложения лет 10 назад, затем пришли SPA. У SPA есть ряд минусов, например, SEO оптимизация. Выход: переход к старому подходу, либо к гибридному NextJS или NuxtJS. Но сложность в том, что такие приложения нужно очень много и трудно настраивать, знать очень много тонкостей и нюансов и не использовать готовые решения (они могут только усугубить положение). Сделать свой server-side rendering - очень нетривиальная задача. 
>Допустим у нас очень тяжолое приложение и на разных устройствах время первой отрисовки естественно будет отличаться, причем на слабых устройствах оно будет грузиться очень долго. Так вот фишка server-side rendering заключается в том, что мы можем определить userAgent клиента и на основе этого параметра формировать на бэкенде бандл конкретно под определенный вид устройства. Это же касается и языкового перевода приложения. Узнаем у клиента какой язык нужен и формируем бандл именно на том языке. 

* Совет 4. Сжатие файлов с gzip.

* Совет 5. Минимизация - после выполнения сборки webpack получаем файл без пробелов, комментариев, ненужных символов, переносов строк. В итоге файл бандла весит меньше. 

* Совет 6. Lazy load (ленивая асинхронная загрузка).
>Можно подгружать асинхронно:
>* изображения (jpg),
>* шрифты,
>* библиотеки (npm),
>* тяжелые компоненты (react)
>>const LazyComp = React.lazy(() => import('./Component)) 
>* редюсеры (redux)
>>Используется библиотека redux-dynamic-modules

* Совет 7. Позволить webpack tree shaking работать.
>Webpack - инструмент сборки, позволяющий гибко настраивать сборку бандла, работу с импортами, экспортами, с оптимизацией, с минимизацией. У webpack есть алгоритм, который называется webpack tree shaking - механизм, который перед тем как собрать файлы проверяет их на наличие неиспользуемого кода. Один файл - одна функция.  

* Совет 8. Перерисовки 
> Во избежание лишних перерисовок функциональных компонентов необходимо использовать механизм React.memo(), для классовых extends React.PureComponent
Перерисовка компонента обернутого в memo будет выполняться только если изменился хотя бы один из props и либо в самом компоненте изменился стэйт.
UseState гарантирует, что на каждый рендеринг компонента у нас массив в state остается тем же самым, т.е. ссылак у него не изменяется.
React.useMemo - первый аргумент коллбэк, который должен вернуть какие-то данные, второй аргумент - массив зависимостей по аналогии с useEffect. Стоит использовать практически во всех случаях когда мы работаем с массивами, объектами, вычислениями, но не с функциями. 
Для функций разработчики реакт создали хук useCallback. В отличие от useMemo возвращается мемоизированный коллбэк, а useMemo возвращает мемоизированное значение. UseCallback необходимо использовать во всех случаях, когда мы передаем функцию в дочерний компонент.

>Декомпозиция - хорошая декомпозиция позволяет не только переиспользовать существующий код, но также позволяет избегать лишних перерисовок. 

* Совет 9. Redux.
>Обычно для доступа к определенному полю стейта мы используем следующий хук useSelector(), в который мы пробрасываем, как правило, колбэк с изменением одного поля стейта: const fieldSelector = (state) => state.field.value. 
А что если селектор у нас имеет следующий вид, который обращается в два разных места стейта, достает нужные поля, объединяет их в один объект и возвращает?
const fieldSelector = ({
  key1: state.field.value,
  key2: state.otherField.value.value2,
})
const state = useSelector(fieldSelector)

>Конечно же ссылка на этот объект будет меняться, что будет прпиводить к перезаписыванию всего стейта. Выход опять же в мемоизации.
Для создания мемоизированных селекторов существует библиотека reselect. Она позволяет создавать сложные селекторы, объединять простые селекторы. И мало того позволяет эти объекты мемоизировать. Т.е. если у нас не изменяется какое-то поле в стейте, у нас гаранитровано возвращается один и тот же объект. 