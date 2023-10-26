# Установка и запуск
## Клонировать репозиторий
   ```shell 
   git clone https://github.com/Information-platform-about-IT-companies/Front-main.git
cd front-main
   ```
## Установить зависимости
   ```shell 
    npm ci
   ```
## Настроить свой IDE для работы с prettier / eslint
## Запустить проект
   ```shell 
npm run start
   ```
# Работа с проектом

1. Мы используем абсолютный импорт
   ```shell 
   import 'Button 'components/Button';
   вместо
   import 'Button '../../components/Button';
      ```