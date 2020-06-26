# もっと見る

## 問題

### もっと見る機能を作ろう

[https://codepen.io/MasahiroHarada/pen/bzpYLL/](https://codepen.io/MasahiroHarada/pen/bzpYLL/)

後述する仕様の通りに動作するように JavaScript を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。

今回使用する API（ruddy-mail.glitch.me）は [Glitch](https://glitch.com/) で作成しました。コードは以下の通りです。  
（前回「GIFガチャ編」で使用した API のコードも含まれています。）

[https://glitch.com/edit/#!/ruddy-mail](https://glitch.com/edit/#!/ruddy-mail)

### 前提条件

- jQuery などのライブラリは使用せずに実装してください。
- 対応ブラウザは Google Chrome 最新版とします。
- 解答例では ES2015 以降の文法も使用します。
- 非同期通信には [Axios](https://github.com/axios/axios) というライブラリを用います。<br />（CodePen には事前に読み込んであります。）

### 仕様

- 最初は「もっと見る」ボタンだけが表示されています。
- 「もっと見る」ボタンをクリックすると、猫のGIFが一行に三枚表示されます。
- 表示できる GIF がなくなったら「もっと見る」ボタンを非表示にします。

GIF 画像取得 API（`/api/list`）は以下の形式の JSON を返却します。  
返却できる GIF がなくなると、`last` が `true` になります。

```json
{
  "items": [
    { "url": string },
    { "url": string },
    { "url": string }
  ],
  "last": boolean
}
```

「もっと見る」をクリックしたあと、このような HTML を構築してください。

```html
<div id="output" class="gifs">
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
</div>
```

「もっと見る」がさらにクリックされたときは、このように要素を追加します。

```html
<div id="output" class="gifs">
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
</div>
```

## 進め方

[モーダルウィンドウ](/practice/modal)と同様です。

## 解答例

::: details 解答例と解説
[https://www.hypertextcandy.com/javascript-practical-quiz-read-more](https://www.hypertextcandy.com/javascript-practical-quiz-read-more)
:::
