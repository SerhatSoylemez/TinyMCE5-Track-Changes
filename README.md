# TinyMCE5-Track-Changes
TinyMCE 5 WYSIWYG editöründe sayfaya yeni eklenmiş metinler Advanced(Gelişmiş) menüsü altında bulunan Formats(Biçimler) menüsü içerisinden Inserted(Eklenmiş) biçimi seçilerek işaretlenebilir veya silinmeye karar verilmiş metinler Deleted(Silinmiş) biçimi seçilerek işaretlenebilir. İşaretlemeler aktif hale getirildiğinde yada kaydedildiğinde silinmiş metinler gözükmeyecektir. Track Changes(Değişiklikleri İzleme) işlemi için &lt;ins datetime=""&gt; ve &lt;del datetime=""&gt; HTML elementleri kullanılmıştır.

trackchanges.js dosyasını indirip aşağıdaki şekilde kaydedebilirsiniz.

```
<!DOCTYPE html>
<html lang="tr" >
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script src="https://.../tinymce/5/tinymce.min.js" ></script>
  <script src="trackchanges.js"></script> <!-- buraya kaydedin -->

</head>
<body>

  <form method="post">
    <textarea>metin...</textarea>
  </form>

</body>
</html>
```
