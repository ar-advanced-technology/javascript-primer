# モーダルウィンドウ

## 問題

今回の問題ではモーダルウィンドウを実装します。

[https://codepen.io/MasahiroHarada/pen/REVmbY/](https://codepen.io/MasahiroHarada/pen/REVmbY/)

後述する仕様の通りに動作するように JavaScript を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。  
ただし重要なヒントですのでよく確認してください。

## 前提条件

- jQuery などのライブラリは使用せずに実装してください。
- 対応ブラウザは Google Chrome 最新版とします。
- 解答例では ES2015 以降の文法も使用します。

## モーダル機能の仕様

### 開く

`data-modal-open` 属性を付与した要素をクリックすると、`data-modal-open`  の属性値を id に持つ要素をモーダルウィンドウとして表示します。

```html
<button data-modal-open="myModal">Open Modal</button>

<div id="myModal"><!-- Content --></div>
```

### 閉じる

モーダル内の `data-modal-close` 属性を持つ要素をクリックすると、その要素を内包するモーダルウィンドウが閉じられます。

```html
<div id="myModal">
  <button data-modal-close>Close Modal</button>
</div>
```

## 進め方

1. 問題で提示された CodePen を Fork して編集する。
2. 課題ができたら URL を提出する。

## ヒント

モーダルが開いている状態と閉じている状態は、どのように切り替えるか？

## 解答例

::: details 解答例と解説
[https://www.hypertextcandy.com/javascript-practical-quiz-modal-window](https://www.hypertextcandy.com/javascript-practical-quiz-modal-window)
:::