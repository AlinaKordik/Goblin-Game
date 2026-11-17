# Игра «Перемещение элемента» (Goblin Game)

![Build and Deploy](https://github.com/AlinaKordik/Goblin-Game.git/actions/workflows/deploy.yml/badge.svg)

Демо-версия проекта доступна на GitHub Pages:  
**[Открыть игру в браузере](https://github.com/AlinaKordik/Goblin-Game.git)**

## Описание
Игровое поле размером 4×4, на котором случайным образом появляется персонаж и каждую секунду перемещается в новую случайную ячейку без использования `removeChild`.

## Запуск проекта локально

1. Установите зависимости:
   ```bash
   yarn install
   ```
2. Запустите сервер для разработки:
   ```bash
   yarn start
   ```
3. Запустите линтер и тесты:
   ```bash
   yarn lint
   yarn test
   ```
