---
tags: [🇵🇱 polish]
---
# Dostępność [accessibility]


## Wprowadzenie - dostępność, inkluzywność, niepełnosprawność

### Czym jest dostępny produkt?

Wiele osób słyszało to pojęcie, natomiast nie jest pewne, co dokładnie znaczy. Często kojarzy się to z przystosowaniem produktu dla osób z niepełnosprawnością lub cierpiących na różne schorzenia (np. niedowidzenie). Realnie jednak dostępność powinniśmy rozumieć nieco szerzej.
Słownikowa definicja „Dostępny” to: łatwy do osiągnięcia, dotarcia, wejścia, rozmowy lub łatwy w użyciu. Dostępne - czyli mogę tego użyć bez względu na moje ograniczenia (czy to związane z jakimś kontekstem, czy trwałe).  
Cokolwiek tworzymy, powinno być zaplanowane, zaprojektowane i zbudowane w taki sposób, aby było dla każdego. Każdy powinien móc i umieć z niego korzystać. 

### Czym jest inkluzywność?
Ogólnie rzecz biorąc, projektowanie włączające dotyczy również tego samego przyimka; że cokolwiek tworzymy, tworzymy to w sposób, który oznacza, że jest dla wszystkich. Kluczowa różnica polega na tym, że projektowanie włączające dotyczy nie logistyki tego, czy każdy może z niego korzystać, ale tego, czy wszyscy rzeczywiście chcą z niego korzystać, i ostatecznie, czy wszyscy czują się bezpiecznie, korzystając z niego.

→ Projektowanie włączające jest mniej logiczne i obiektywne, a znacznie bardziej emocjonalne i subiektywne. Wymaga znacznie większego zrozumienia i empatii oraz prosi o postawienie się na miejscu kogoś innego

### Jak rozumieć niepełnosprawność? 
Tradycyjne ramy rozumienia niepełnosprawności znane są jako „model medyczny”. Zgodnie z modelem medycznym niepełnosprawność rozumiana jest jako upośledzenie zlokalizowane w ciele człowieka.

Zgodnie z modelem społecznym osoba jest niepełnosprawna, gdy napotyka barierę w świecie zewnętrznym, która uniemożliwia jej wykonanie zadania lub uczestniczenie w doświadczeniu. 

Jeśli w modelu medycznym nacisk kładziono na to, jak traktować indywidualne ciało, w modelu społecznym rozmowa poszerzyła się o to, **co możemy zrobić jako twórcy i kształtujący nasze środowisko, aby usunąć bariery i włączyć grupy ludzi, które inaczej nie mogłyby uczestniczyć**.

Kiedy więc spojrzymy na niepełnosprawność szerzej, Można powiedzieć, że jest ona kombinacją:
- różnorodnych możliwości u ludzi;
- barier i funkcji w urządzeniu/platformie/produktu
- zadania, które użytkownik/osoba chce wykonać
- środowiska, w którym starają się je wykonać
- ich obecna sytuacja (i stan emocjonalny) w której się znajdują (niosą siatki; są roztrzęsieni; w euforii itp.)


## Dlaczego warto dbać o dostępność produktów? 

Oczywiście na pierwszy rzut oka widzimy, że przemawiają za tym argumenty etyczne (nie wykluczamy odbiorców), ale warto mieć świadomość, że jest to ważne także z punktu widzenia biznesowego.

**Poniższe kwestie mogą też pomóc nam rozmawiać z klientem i uzasadnić, dlaczego warto dbać o dostępność**.


- Większa grupa potencjalnych odbiorców produktu (produkt nie wyklucza ze względu na sposób, w jaki jest stworzony)
- Produkty, które są dostępne, są często generalnie łatwiejsze, wygodniejsze w używaniu (właśnie dlatego, że niepełnosprawność to spektrum; może być czasowa, sytuacyjna itp.) Branie pod uwagę tej szerszej perspektywy i dostępności wpływa też na użyteczność;
- Korzystając z produktu, użytkownik może zrealizować swój cel, niezależnie od sytuacji, jego stanu zdrowia itp. - co przekłada się na to, że produkt spełnia swoje zadanie dla użytkownika i realizuje cele biznesowe;
- Łatwiejsze rozwijanie produktów i zmiany (np. kiedy kod jest przejrzysty, o odpowiedniej strukturze). Nie tworzymy sobie też długu technologicznego.
- Produkt dostępny jest bardziej ‘future proof’ - urządzenia lub w naszym przypadku serwisy internetowe, stworzone w zgodzie ze standardami, dzięki czemu będą działać lepiej za kilka a nawet kilkanaście lat w nowocześniejszych urządzeniach.
- Pamiętajmy, że społeczeństwa starzeją się - coraz więcej osób starszych osób dłużej zachowuje siły intelektualne, chce i ma potrzebę korzystania z różnych aplikacji, natomiast ograniczenia zdrowotne i poznawcze u nich występują - ta grupa będzie się powiększać procentowo w społeczeństwie i o takich użytkownikach powinniśmy myśleć, tworząc produkty.


## Praktyczne wskazówki i dobre praktyki związane z accessibility


### ASPEKTY WIZUALNE

#### Kolory

- Kontrast tekstu do tła powinien być obliczony matematycznie, na podstawie różnicy jasności danego koloru tekstu do koloru tła. Prawidłowy minimalny kontrast wynosi od 4,5 do 1, jednak zaleca się stosowanie kontrastu na poziomie co najmniej 7 do 1.
- Łatwo możemy sprawdzić go za pomocą narzędzi deweloperskich w przeglądarce lub dodatkowych narzędzi.
- Kolor nie powinien być jedynym wyróżnikiem (np. kiedy chcemy pokazać stany jakichś elementów i nazwy tych aktywnych są oznaczone na zielone, a nieaktywnych na czerwono - może to być nieczytelne dla osób z takimi zaburzeniami)
- Jeśli na danym zdjęciu czy grafice kolory są istotne, zadbajmy o opisanie ich w tekście alternatywnym (znaczniku HTML) + dodanie dodatkowego podpisu widocznego dla użytkownika
- Przy tworzeniu dokumentacji designerskiej, warto dodać informację, jakie kombinacje kolorystyczne w ramach palety kolorów w projekcie spełniają kryteria dostępności odnośnie kontrastu (tło i tekst) 

#### Dobór fontów

Co sprawia, że font jest dostępny?
- prostota,
- znaki są łatwe do odróżnienia pomiędzy sobą (np. zwróćmy uwagę na I, l i 1),
- znaki nie są swoim lustrzanym odbiciem (b,d; p,q)
- odpowiedni spacing pomiędzy znakami (np. r i n obok siebie -rn mogą wyglądać podobnie do m)


O czym jeszcze warto pamiętać?
- unikamy kursywy
- unikamy użycia podkreślenia, jeśli element nie jest linkiem
- ważna jest jasna hierarchia wizualna tekstów

Fonty stworzone z myślą o dostępności
- Hargreaves (Scope)
- FS Me (MenCAP)
- Atkinson hyperlegible

#### Formatowanie tekstu
Poza zrozumiałością, niezwykle ważna dla skutecznego odbioru treści jest czytelność.
Czytelność dotyczy przede wszystkim tego, jak tekst jest sformatowany, jak wygląda, ale nie tylko — np. osoby niewidome także odczytują strukturę i formatowanie tekstu, dzięki czytnikom ekranu. Dlatego formatowanie jest sprzymierzeńcem zrozumiałości.

Podział na akapity
Za przyjazny można uznać tekst, którego akapity nie przekraczają 10 linijek,
Już pierwsze słowa powinny wskazywać na to, o czym dany akapit będzie mówił


**Pogrubienie** - nie nadużywajmy go w tekście
**Kursywa** - Niektórzy użytkownicy z dysleksją nie są w stanie takiego tekstu wcale przeczytać! Nie wolno także traktować kursywy jako jedynego sposobu oznaczenia cytatu. Cytat powinien być zawarty w cudzysłowach lub specjalnych znacznikach.

#### Linki i odnośniki
Treści odnośników nie powinny powtarzać się na jednej stronie. Użytkownicy niewidomi, którzy słyszą odnośniki za pośrednictwem syntezy mowy, nie będą znali wizualnego kontekstu, w jakim odnośnik się znajduje. 
W żadnym wypadku nie powinno się stosować odnośników o nic nieznaczącej treści, całkowicie niezrozumiałej poza kontekstem, jak na przykład: „więcej”, „kliknij tutaj”, „pobierz” czy „tu”. Jest to jeden z najczęściej wskazywanych błędów dostępności. 
Nie wolno tym bardziej, łącząc dwa powyższe zalecenia, tworzyć na jednej stronie wielu odnośników o tej samej, nic nie znaczącej treści. 
Długie odnośniki tekstowe powinny dać się zrozumieć po przeczytaniu pierwszych 70 znaków. W innym wypadku, użytkownicy niewidomi będą zmuszeni wysłuchać całego odnośnika i starać się wywnioskować jego treść. 
Odnośniki kierujące użytkownika do plików PDF, DOC i innych powinny informować o tym, że odnoszą się do plików, które nie są stronami internetowymi oraz zawierać w nawiasach ich objętość w kilobajtach lub megabajtach. 

Użytkownik powinien zostać poinformowany o tym, że odnośnik otworzy się w nowym oknie. 
Unikamy linków, które są tylko jedną cyfrą, w wypadku paginacji warto dać też alternatywę, np. Następna strona

### DOSTĘPNY CONTENT

#### Zrozumiałość tekstu
Jak zadbać o zrozumiałość tekstu?
- Stosujmy krótkie, zrozumiałe powszechnie słowa;
- Unikamy zdań wielokrotnie złożonych
- Unikamy żargonu.  To zalecenie nie zawsze jest łatwe do wdrożenia, zważywszy na to, że niektóre teksty są bardzo specjalistyczne. (Nie należy jednak rezygnować ze starań, by nawet takie teksty, których adresatem jest przecież przeciętny człowiek, były zrozumiałe tak bardzo, jak tylko to możliwe)
- Każdy skrótowiec, nawet pozornie znany, rozwijamy w nawiasie przy jego pierwszym użyciu. 
- Każdy akapit powinien przekazywać jedną myśl, a już pierwsze jego słowa powinny pozwalać na zrozumienie tego, co jest głównym przesłaniem.

#### Grafiki, zdjęcia, wykresy
- Jeśli tekst znajduje się na tle, które nie jest jednolite - to czy tekst jest nadal czytelny? (czy musimy używać takiego tła?)
- Czy tekst umieszczony na grafice wciąż będzie czytelny, jeśli np. powiększymy content o 200%?

#### Atrybut alt
Jest to krótki tekst dodany w znaczniku HTML do danej grafiki/zdjęcia (nie wyświetla się realnie na ekranie), w którym zawarty jest jej opis (co przedstawia). Każda grafika, która nie ma atrybutu alt — jest niedostępna, przede wszystkim dla użytkowników niewidomych.

Niektóre obrazy czy zdjęcia można oznaczyć jako dekoracyjne, wówczas czytniki ekranu będą mogły je pominąć. Dotyczy to obrazów, które:
- nie dodają żadnego dodatkowego znaczenia, wartości w kontekście rozumienia strony;
- są zdjęciami stockowymi

Nie istnieją formalne ani techniczne przeszkody, by tekst alternatywny był bardzo długi, ale w praktyce tego typu alty są nieużyteczne i niewygodne dla osób niepełnosprawnych. Co więcej, niektóre czytniki ekranu dla osób niewidomych „obcinają” część tekstu, pozostawiając do dyspozycji użytkownika jedynie 125 znaków.

#### Bannery i animacje
W Polsce, około 1% populacji to osoby chore na padaczkę, z czego 5% cierpi na jej fotogenną postać. Wynika z tego, że około 20 tys. osób w Polsce może być narażonych na atak padaczki wywołany nieprzemyślanym użyciem animacji na stronie internetowej.
Przed dynamicznymi animacjami (przed ich rozpoczęciem) należy umieścić specjalne ostrzeżenie oraz możliwość wyłączenia/pauzy z poziomu klawiatury.

### NAWIGACJA
Wszelkie rodzaje menu rozwijanych, po kliknięciu lub najechaniu wskaźnikiem myszki, mogą stanowić barierę dla osób niepełnosprawnych. 
Menu nie może się ciągnąć w nieskończoność. Najlepiej, jeśli na jednym poziomie składa się maksymalnie z kilkunastu elementów, dlatego też bardzo ważne jest zaplanowanie zrozumiałej hierarchii. Menu nie może mieć także zbyt wielu poziomów. Optymalnym rozwiązaniem jest struktura dwu, maksymalnie trzypoziomowa. Im więcej poziomów, tym trudniej użytkownikowi odnaleźć się w strukturze nawigacji (niezależnie od niepełnosprawności). 


#### Co jest ważne?
- możliwość przechodzenia przez nawigację używając przycisku Tab, Tab+Shift i strzałek
- odpowiednia wielkość i kontrast elementów
- odpowiednie oznaczenie aktualnie aktywnego elementu

#### Użytkownicy niewidomi a nawigacja:
W przypadku tych użytkowników, najważniejsze jest to, by nawigacja była dostępna dla czytnika ekranu.
Czytnik ekranu musi rozpoznać i odczytać elementy nawigacyjne.

### FORMULARZE
- Pola obowiązkowe/opcjonalne (zależnie od specyfiki formularza) powinny być oznaczone w sposób dostępny dla wszystkich użytkowników. Do oznaczenia nie można używać samego koloru (np. „wymagane pola oznaczone są kolorem pomarańczowym”) i innych wartości wizualnych.
- Wskazanie błędów w wypełnionych polach powinno być zrozumiałe, wizualnie czytelne i dostępne dla wszystkich użytkowników (szczególnie uważamy na kolor i wielkość fontu i komunikatach)
- Formularz nie powinien zawierać ograniczenia czasowego na wprowadzenie informacji. Jeśli tak jest (np. z przyczyn bezpieczeństwa), użytkownik powinien mieć możliwość przedłużenia czasu w bezpieczny i dostępny sposób.