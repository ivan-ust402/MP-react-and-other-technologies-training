const compression = require('compression')
const app = express();

// Middleware — связующее программное обеспечение, которое помогает приложению и серверу обмениваться друг с другом запросами. Оно снижает зависимость от API, позволяет не торопиться с обновлением старого бэкенда, снижает нагрузку на мобильный клиент.Промежуточный сервер позволяет не только решить проблемы с API, но и в целом связать воедино разные продукты и системы. Конкретно в мобильной разработке можно использовать простое REST API, которое вы подгоните под логику экранов и ускорите работу клиента. Также вы сможете использовать свои наработки по авторизации, обработкам ошибок и т. д. — то, что без middleware пришлось бы создавать практически с нуля.

// Попробуй использовать сжатие до применения других Мидлвэров
app.use(compression());

app.use(compression({filter: shouldCompress}))

function shouldCompress(req, res) {
  if (req.header['x-no-compression']) {
    // Здесь при получении header содержащим 'x-no-compression' (запрещает сжатие) выходим из тела условия, в противном случае сжимаем файл
    return false
  }

  return compression.filter(req, res)
}