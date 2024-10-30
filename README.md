# Restoran Uygulaması

Bu proje, React Native ve Expo kullanarak geliştirilmiş bir restoran keşif uygulamasıdır. Yelp API'sini kullanarak restoranlar hakkında bilgi sağlar ve kullanıcıların restoranları fiyat kategorilerine göre listelemelerine ve fiyat aralıklarına göre "Ucuz", "Uygun", "Pahalı" ve "Lüks" kategorilerde restoranları görüntülemenize olanak tanır.

 ##📸 Ekran Görüntüleri
 ![Screenshot_1730287518](https://github.com/user-attachments/assets/c810b26f-22a8-4202-8781-35229d847c2f)
![Screenshot_1730287572](https://github.com/user-attachments/assets/315b5c21-c860-406b-8136-8129ea938da9)
![screenshot](https://github.com/user-attachments/assets/e4dd529c-6cce-4514-a9a9-0a5940f65cd4)


## 🛠 Kullanılan Teknolojiler ve Kütüphaneler

- **React Native**: Mobil platformlarda native deneyim sunmak için.
- **Expo**: Platformlar arası uyumluluk ve hızlı geliştirme için.
- **Yelp API**: Restoran bilgilerini almak için.
- **@expo/vector-icons**: Uygulamada kullanılan simgeler için.
- **@react-navigation/native & @react-navigation/native-stack**: Sayfalar arası geçiş ve yönlendirme.
- **axios**: Yelp API ile REST istekleri yapmak için.
- **expo-status-bar**: Durum çubuğunu yönetmek için.
- **react-native-safe-area-context**: Farklı cihazlarda güvenli alan desteği sağlamak için.
- **react-native-screens**: Ekran geçişlerini optimize etmek için.

## 🎯 Özellikler

- Restoranları fiyat kategorilerine göre listeleme (Ucuz, Uygun, Pahalı, Lüks).
- Yelp API kullanarak restoran bilgilerini getirme.
- Kullanıcı dostu arayüz ve sade tasarım.
- Restoran Detayları: Her restoran hakkında detaylı bilgilere erişim.

 ## 🚀 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi forklayın
2. Bağımlılıkları yükleyin:
```bash
npm install
```
3. Expo'yu başlatın:
```bash
expo start
```
4. Uygulamayı Android veya iOS cihazınızda çalıştırın:
   
Android:
```bash
npm run android
```
iOS:
```bash
 npm run ios
```
 ## 📂 Proje Yapısı
 ```graphql
📦 RESTAURANTRNATIVE
├── 📂 .expo              # Expo ile ilgili ayarlar
├── 📂 api
│   └── 📝 yelp.js        # Yelp API ile veri çekmek için kullanılan fonksiyonlar
├── 📂 assets             # Uygulamanın statik dosyaları (görseller vb.)
├── 📂 components         # Tekrar kullanılabilir bileşenler
│   ├── 📝 ResultDetails.js  # Restoran detaylarını gösteren bileşen
│   ├── 📝 ResultsList.js     # Restoran sonuçlarını listeleyen bileşen
│   └── 📝 SearchBar.js       # Arama çubuğu bileşeni
├── 📂 hooks              # Özel React hook'ları
│   └── 📝 useResults.js     # API sonuçlarını yönetmek için özel hook
├── 📂 screens            # Uygulamanın ekranları
│   ├── 📝 ResultsShowScreen.js  # Seçilen restoranın detaylarını gösteren ekran
│   └── 📝 SearchScreen.js       # Arama ve sonuçları gösteren ekran
├── 📝 .gitignore         # Git'te takip edilmeyecek dosyalar
├── 📝 App.js             # Uygulamanın ana bileşeni
├── 📝 app.json           # Expo uygulama yapılandırması
├── 📝 babel.config.js    # Babel konfigürasyon dosyası
├── 📝 package-lock.json  # NPM bağımlılıkları kilit dosyası
└── 📝 package.json       # Proje bağımlılıkları ve betikleri
```

