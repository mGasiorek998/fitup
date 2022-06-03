# FITUP

## Installation & Setup

### MongoDB for Windows

- Download MongoDB:
  - https://www.mongodb.com/try/download/community
- Install it (without changing default options)

### MongoDB for MacOS

- Install **homebrew**:
  - https://brew.sh/
- In Terminal use these three commands:
  - brew tap mongodb/brew
  - brew install mongodb-community
  - brew services start mongodb-community

### Download Project

- Click on **Code**
- Click on **Download ZIP**
- Unzip the file

### Project Setup

- Open **fitup-main** directory in **Visual Studio Code**
- In Terminal use **npm install** command
- Go to **frontend** directory and use **npm install** command
- Go to **backend** directory and use **npm install** command
- In the **backend** directory use **npm run start:dev**
- Open a new instance of Terminal
- Go to **frontend** directory
- Use **npm start**
- Preferable browser is **Google Chrome**

### Workflow:

- To do
  - nowe taski
- In progress
  - Tworzenie brancha: FU:#numer_id_ticketa-nazwa-ticketa
  - Pisanie kodu
  - Nazewnictwo commitów: Nazwa brancha: Commit Message
  - Pisanie testów
  - Stworzenie Pull requresta
  - Podpięcie PR do ticketa
  - Dodanie czasu spędzonego w komentarzu do ticketa
- Code Review
  - Poinformowanie o PR na grupie messenger
  - Przynajmniej 1 approve potrzebny
  - Mergowanie do main (robi to Owner ticketa)
- Testing
  - testy manualne (po mergu)
- Done
  - Zakończone taski
