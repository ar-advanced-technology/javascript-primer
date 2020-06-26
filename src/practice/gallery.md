# 画像ギャラリー

## 問題

今回の問題では画像ギャラリーを実装します。

[https://codepen.io/MasahiroHarada/pen/wRRNGr/](https://codepen.io/MasahiroHarada/pen/wRRNGr/)

後述する仕様の通りに動作するように JavaScript を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。  
ただし重要なヒントですのでよく確認してください。

## 前提条件

- jQuery などのライブラリは使用せずに実装してください。
- 対応ブラウザは Google Chrome 最新版とします。
- 解答例では ES2015 以降の文法も使用します。

## 画像ギャラリーの仕様

サムネイル（小さい画像）をクリックすると、メイン画像（大きい画像が）切り替わります。

`initGallery` 関数でギャラリーを初期化します。

```js
const elem = document.getElementById('myGallery');
initGallery(elem);
```

`data-gallery-image` 属性が付与されている要素をクリックすると、その属性の値を `id` 属性に持つ要素が表示されます。

```html
<div id="myGallery">
  <div id="myImage"><img src="..." alt="" /></div>
  <div data-gallery-image="myImage"><img src="..." alt="" /></div>
</div>
```

## 進め方

[モーダルウィンドウ](/practice/modal)と同様です。

## 解答例

::: details 解答例と解説
[https://www.hypertextcandy.com/javascript-practical-quiz-image-gallery](https://www.hypertextcandy.com/javascript-practical-quiz-image-gallery)
:::
