Proje Adı: OpusV2

# Opus Project Structure

## Özellikler
1. Arama ve Filtreleme:
   * Kullanıcılar eğitimleri ve kategorileri arayabilmeli ve filtreleyebilmeli.
   * Arama sonuçları ilgi düzeyine/ puanlamalara göre, en çok satılanlar vs göre sıralanmalı.
2. Değerlendirme ve Geri Bildirim:
   * Öğrenciler tamamladıkları eğitimleri/ürünleri değerlendirebilmeli ve geri bildirim verebilmeli.
   * Eğitmenler bu geri bildirimleri görüntüleyebilmeli ve ya otomatik onaylı veya eğitmen onayından sonra yayınlanmalı.
3. Sertifika:
   * Öğrenciler bir eğitimi tamamladıklarında eğer eğitimde sertifika olacağı belirtilmiş ise, sertifika alabilmeli, 
   * Sertifikalar PDF formatında indirilebilir olmalı. Sertifikalar yüklenebilir olmalı ama aynı zamanda otomatik sertifika oluşturma olacak. Verilen pdf’in isim soyismi ve benzeri bilgileri sistemde doldurularak öğrenciye sunulacak, Notification ile öğrenciye uyarı gidecek. 
4. Bildirimler:
   * Kullanıcılar önemli olaylar hakkında bildirim alabilmeli (örneğin, yeni bir eğitimin başlaması, indirim kampanyaları, mevcut eğitiminin durumu vb.).
   * Bildirimler e-posta ve uygulama içi, sms veya WhatsApp mesajı olarak gönderilebilmeli.
5. Sosyal Medya Entegrasyonu:
   * Kullanıcılar sosyal medya hesaplarını kullanarak giriş yapabilmeli. (Google, Facebook vb)
   * Eğitimler sosyal medyada paylaşılabilir olmalı.
6. Çoklu Dil Desteği:
   * Site birden fazla dili desteklemeli.
   * Kullanıcılar üye oldukları bölge/ülkeye göre dil almalı ama isterse dili değiştirebilmeli.
8. Kupon ve Promosyon Kodları ve İndirimler:
   * Admin kullanıcılar indirim kuponları veya promosyon kodları oluşturabilmeli.
   * Bu kodlar belirli bir süre veya kullanım adedi için geçerli olmalı,
   * Admin seçilmiş eğitimler, ürünler ve kategoriler için süreli veya adet sınırlı site geneli indirimler oluşturabilmeli, indirimli satışlarda kupon kullanımı yapılamamalı, yapılırsada indirim geçerli olmamalı, indirimler/kuponlar belirtilmiş ise mesela sepet toplamı belirli rakam üstüne çıktığında uygulanabilir, belirli rakam altında kullanılamaz olabilirler.
9. Eğitmen-Öğrenci Etkileşimi: 
   * Eğitmenler ve öğrenciler, üyeler, yöneticiler platform üzerinden mesajlaşabilmeli.
   * Eğitmenler veya yöneticiler toplu duyurular gönderebilmeli. Eğitmenler sadece kendi eğitimine satın almış olanlara, yöneticiler ise herkese.
10. Öğrenci İlerleme Takibi:
   * Öğrenciler eğitimlerdeki ilerlemelerini takip edebilmeli.
   * Tamamlama yüzdesi, kalan dersler vb. bilgiler sunulmalı.
   * Eğitmen öğrencinin ilerleme bilgilerini görebilmeli.
11. Eğitim Takvimi:
   * Yaklaşan canlı derslerin takvimi görüntülenebilmeli.
   * Öğrenciler takvimden canlı derse katılabilmeli.
   * Canlı derslerde Eğitim bireysel ise, eğitimin içeriğinde bir seçenek ile belirtilmiş ise eğitmenin boş olarak belirttiği zamanlarmalar için öğrenci kendisi eğitim için rezervasyon yapabilmeli, veya eğitmen yada yönetici bu rezervasyonları oluşturabilmeli
12. Canlı Ders Kayıtları:
   * Canlı dersler otomatik olarak kaydedilmeli.
   * Kayıtlar dersi kaçıran öğrenciler için erişilebilir olmalı.
13. Eğitim İçeriği Önizlemesi: 
   * Kullanıcılar satın almadan önce eğitim içeriğinin tanıtımını izleyebilmeli
   * Önizleme videosu veya ders materyalinin bir kısmı sunulabilir.
14. Eğitim İçeriği İndirme:
   * Öğrenciler satın aldıkları eğitimlerin içeriğini videoları indiremez ama dosyaları indirebilmeli.
   * İndirilen içerik süreli veya kullanıcıya özel olmalı. İndirme yaptığında bu eğitmen veya yönetici tarafındanda görülebilmeli
15. SSS ve Yardım Bölümü:
   * Sıkça Sorulan Sorular (SSS) bölümü olmalı.
   * Kullanıcı kılavuzları, video eğitimleri gibi yardım içerikleri sunulmalı.
16. Eğitmen Kazanç Takibi
- Her eğitmen kendi eğitimlerinden elde edilen gelirden kendi yüzdesine düşen toplam tutarı görebilmeli
- Eğitmen kazançları admin tarafından yüzdelik olarak belirlenmeli
- Her satışta eğitmenin kazanç yüzdesi hesaplanmalı ve toplam kazanca eklenilmeli
- Eğitmenler panel üzerinden kazanç detaylarını ve toplamlarını görebilmeli
17. Eğitimler/ürünler eğitmenler/yöneticiler tarafından girişleri yapılır ve admin onayı ile yayına alınır. Eğitmenler eğitimlerin indirimler, vergi işlemleri uygulandıktan sonra kazançtan belirlenmiş % kazanırlar. Bu rakam eğitmen için belirlenir ve tüm eğitimlerine uygulanır.
18. Eğitmenlerin kazandığı ve siteden aldığı paralar yönetici tarafından işlenir, ve eğitmen kendi hesabında bu rakamları görür.
19. Sitede birkaç farklı satış tipi bulunur. Bunlar A) kaydedilmiş videoların eğitimleri  b) canlı eğitimler c) karma eğitimler hem kaydedilmiş hem canlı d) aylık üyelik modelleri, farklı konu içeriklerinde üyelikler oluşturulabilir. Bu üyelikli sistemlerde içerikler hem kaydedilmiş videolar, canlı eğitimler vs olabilir. E) sitede fiziksel ürün satışıda olabilecek (kitap, aksesuar gibi)  f) Etkinlik biletleride satılabilmeli bu etkinliklerin kendi sayfaları olmalı ve özel hazırlanmalı sitedeki eğitimler benzeri ama düzenleneceği tarih bitiş tarihi, yapılacak yer ve detay bilgi içeren seçenekleride olmalı. Satıldığında kullanıcı hesabından görebilmeli. F) sitede bundle olarak birkaç ürün/eğitim kampanya gibi göstererek toplu olarak satılabilmeli, yani örnek, üç ürün kendileri tek başına x fiyattan satılmakta ama 3 üç için bir gruplandırma yapıldı ve bu gruplandırmaya indirim uygulandı. Ve sitedeki gruplandırılan ürün sepete eklendiğinde 3 üründe sepete eklenmiş olur ve indirimli fiyat uygulanır.
20. Fiziksel ürün satışı olmasından dolayı, ve fatura kesileceğinden dolayı bunun içinde kullanıcı adres bilgisi, fatura bilgisi ve kimlik no gibi bilgiler girebilmeli, ayrıca fiziksel ürünlerin kargo takibi için geliştirme olmalı ve siparişin durumu kullanıcı tarafından takip edilebilmeli
21. Kullanıcı, sepetine her türlü ürünü ekleyebilmeli ve tek seferde oluşacak fatura ile hepsini ödeyebilmeli, alabilmeli.
22. Eğitim/ürün fiyatlandırmaları kullanıcının ülkesine göre değişiklik gösterebilir. Bu yüzden para birimi ile ülkeye veya bölgeye göre fiyat görünebilsin. Ve bu ülkelere göre fiyatlar farklı fiyatlandırma olabilir.
23. Kullanıcı Rolleri
1. Admin (Yönetici):
   * Tüm sistemi yönetme yetkisine sahip olacak.
   * Eğitimler, kategoriler, indirimler, kullanıcılar vb. tüm içerikleri yönetebilecek.
   * Raporlama ve analitikleri görüntüleyebilecek.
2..Yönetici Yardımcısı,
* Hesap işlemlerini göremeyecek, ama eğitmenlerin üstünde olacak ve eğitmen ve öğrenci bilgilerine erişebilecek, ayarlanması gereken takvim işlemlerini rezervasyon işlemlerini yapabilecek. Vb.
3. Instructor (Eğitmen):
   * Eğitim/ürün içeriklerini oluşturma, düzenleme ve yönetme yetkisine sahip olacak., ama son onayı yönetici verdikten sonra yayınlanacak.
   * Kendilerine atanan dersleri yönetebilecek.
   * Öğrencilerin sorularını yanıtlayabilecek.
4. Student (Öğrenci):
   * Eğitimlere kayıt olabilecek ve içeriklere erişebilecek.
   * Eğitimlere katılabilecek ve tamamlayabilecek.
   * Eğitmenlerle iletişim kurabilecek.
5. Guest (Misafir):
   * Siteyi ziyaret edebilecek ancak içeriklere erişemeyecek.
   * Üyelik oluşturabilecek ve giriş yapabilecek.
18. Site içerisinde blog olmalı, bu blogda hem videolu hem yazılı şeklinde içerikler yayınlanmalı. Bu yazılarda seo vs gibi kurallar uygulanabilmeli, blog yazıları eğitmenler tarafından hazırlanmış olmalı ve yine onay ile yayınlanmalı. Her eğitmen blog sayfalarına içerik ekleyebilmeli ve kendi eklediklerini düzenleyebilmeli.
19. Öğrencileri cezbetmek için affialate sistemide eklenebilir. Her kayıt/üye olan kişi/öğrenci kendi linkine sahip olur ve o linkten satış yapıldığında öğrencinin hesabına affiliate panelinde belirlenmiş yüzde rakam veya belirlenmiş rakam öğrencinin hesabına kaydedilir. Hesabında toplanan kazançları öğrenci eğitimlerde indirim şeklinde kullanabilir. Veya büyük affiliate ortakları için site ödeme yapabilir. Bu affiliate siteye yeni birini kazandırmak için, ilk satışta vs gibi olabilir. Affiliate kazançları ayrı şekilde kullanıcılara listelenir ama hesabındaki para sanal paraya eklenir.
20. Ayrıca sitenin kendi static sayfalarıda mevcuttur. Bunları web ve mobil şeklinde uyumlu  edebiliriz. Hem dinamik hem mobil için sitede static drag drop sayfa editor ile yapılabilir. Yine sayfalarda seo uyumluluğu vs gibi girişlerde olur.
21. Tüm ürünler, ana sayfada veya kategori ana sayfasında gösterilirken bunlar yönetici tarafından belirlenir. Hangi ürünlerin kaç tane ve hangi sıralama ile ana sayfada, kategori ana sayfasında gösterileceği. Ayrıca her ürünün sayfasına girildiğinde, alt kısımda bu ürün ile ilgilenenlere başka ürünlerde tavsiye edilmeli, bunlarıda yönetici belirleyebilir.
22. Hizmetin faturası kesildiğinde, fatura numarası girişi yapılabilir. Fatura no girişi resmi fatura kesilip kesilmediğini takip etmemizi sağlar. Fatura kesimi otomatik api bağlantısı ile sağlanabilir. 
23. Kayıtlı bir kullanıcı başka biri için hediye ürün/eğitim satın alıp, ona hediye edebilir. Hediye alınan kişi üye olabilir veya olmayabilir. Üye ise, direk hesabına eklenir üye değilse, iletişim kanallarından bilgi verilerek üye olarak hediyeye erişebilir.
24. Bu yapılan sistem aynı zamanda admin panelle bağlanacak yani admin panele apiden yetki ile yönetim verilecek. Hem api ile web ve mobil uygulamaya uygun olmalı.
25. Öğrenciler için quiz sistemide olmalı, eğitmen quiz oluşturabilmeli. Ve eğitime ekleyebilmeli. Sonuçlarını takip edebilmeli.

Video, Resim vb yükleme ve işleme ayrı bir mikroservis ve hangfire gibi bir background işlevi ile arka planda çalışabilmeli. Yapılan tüm işlemler Monitor
Ödeme işlemleri ayrı bir mikroservis,
Notifications ayrı bir mikroservis üzerinden işlemlerini yapmalı. hangfire gibi bir background işlevi ile arka planda çalışabilmeli. 
Storage mikroservis yine hangfire ile entegre, ve video ve resim yükleme işlemlerinde sonuçları custom s3 ile upload edebilmeli.

Redis ile cache sistemi oturtulmalı, ve read only olacak işlemler cache üzerinden yapılmalı, kayıtlarda yapılacak bir değişiklik, ekleme, silme gibi durumlarda cache yenilenmeli.
Eğitimlerde uyumlama / attunement eğer varsa, uyumlama alındığı tarih itibari ile otomatik sertifika almaya hak kazanabilir.


- .NET Core 9 
- Web API (REST)
- Fluent Validation ile kontrol
- MongoDb ve Linq kütüphaneleri ile veri erişimi
- Kimlik doğrulama ve yetkilendirme için JWT
- Clean Architecture
- Asenkron programlama
- Serilog ile Loglama, Redis caching ve exception handling




## Özel Notlar
Sitede notifications için kanallar olmalı, email, sms, WhatsApp, 
Siteye telefon numarası ilede giriş yapılabilmeli,
Siteye hem telefon no veya email şifre, veya telefon no’ya gönderilecek veya emaile gönderilecek tek şifre ile direk giriş yapılabilmeli.
Proje Clean Architure olarak .net core 9 platformunda hazırlanacak. MangoDb ve Linq ile kullanılacak. .net core 9’daki nullable hatalarına karşı her zaman oluştururken nullable olanları doğru oluştur.
HAzırlanan proje son derece basit bir dille tek programcının müdahale edilebilceği ve geliştirebileceği şekilde olmalı,
Tüm kodlar En hızlı şekilde çalışmalı,
Tüm dokümantasyon her fonksiyona eklenmeli, daha sonra anlaşılması çok kolay olmalı, sadece gerekli yerlerde dokümantasyon olmalı.
Projede async yaygın kullanılmalı
Proje bir enterprise uygulaması değildir. Interface kullanımlarından kaçınılabilir en aza indirgenebilir. 
Loglama çok detaylı ve heryönden akış ve sorunlar izlenebilmeli
Hata yönetimi çok detaylı olmalı
Tüm kullanılan kütüphanelerinin son sürümü tercih edilmeli, ve kullanılan kodlar son sürümün özellikleri ile hazırlanmalı,
Çok fazla kod olmadan daha sade, profesyonel ve hızlı ama anlaşılır ve basit kod yazılmalı.
Proje geliştirirken her zaman test fonksiyonlarınıda yaz.
Proje her zaman aynı standartta olmalı, standartta değişik olması durumunda bunu sormalısın. 
Yapılan bir değişiklik başka yerleride etkileyecek ise, diğer yerlerde kontrol edilmeli, test edilmeli, compile edilerek hata olup olmadığı kontrol edilmeli ve varsa çözülmeli.
Önce mongodb ile uyumlu tablolar oluşturulmalı.

