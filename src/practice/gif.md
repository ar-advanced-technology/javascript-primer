# GIFガチャ

## 問題

### 猫GIFガチャを作ろう

[https://codepen.io/MasahiroHarada/pen/YBqzgQ/](https://codepen.io/MasahiroHarada/pen/YBqzgQ/)

後述する仕様の通りに動作するように JavaScript を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。

今回使用する API（ruddy-mail.glitch.me）は [Glitch](https://glitch.com/) で作成しました。
サーバサイドのコードは以下の URL から閲覧できます。特にヒントというわけでもありませんが、参考までに。
（別の課題で使用する API のコードも含まれています。）

[https://glitch.com/edit/#!/ruddy-mail](https://glitch.com/edit/#!/ruddy-mail)

### 前提条件

- jQuery などのライブラリは使用せずに実装してください。
- 対応ブラウザは Google Chrome 最新版とします。
- 解答例では ES2015 以降の文法も使用します。
- 非同期通信には [Axios](https://github.com/axios/axios) というライブラリを用います。<br />（CodePen には事前に読み込んであります。）

### 仕様

- 「遊ぶ」ボタンをクリックすると、ランダムに選ばれた猫の GIF 画像が表示されます。
- すでに表示されている GIF 画像は消えてから新しい画像が表示されます。
- GIF 画像取得 API（`/api/gacha`）は以下の形式の JSON を返却します。

```json
{
  "url": "画像のURL"
}
```

### Promise

今回はヒントとして Promise オブジェクトについて簡単に説明します。

API との通信における非同期処理には **Promise** オブジェクトを使用しています。Promise は今や JavaScript において非同期処理を扱う一般的な手法ですので覚えておきましょう。

API との通信には **Axios** というライブラリを使っています。そして Axios の通信メソッドは Promise オブジェクトを返却します。

```
const promise = axios.get('/api/abcdefg');
```

Promise という英単語は「約束」という意味です。約束とは、未来の出来事を今決めることですね。Promise オブジェクトも同様に、未来の処理を定義します。

```
const promise = axios.get('/api/abcdefg');
// (1) ここでは通信結果は返ってきていない。
promise.then(response => {
  // (2) ここで通信が返ってきている。
});
// (3) ここでも通信結果は返ってきていない。
```

`axios.get()` が返却するのは通信結果ではなく、Promise オブジェクトです。Promise オブジェクトの `then` メソッドに、非同期処理が終わったときに実行させる関数を渡すことで、通信結果を受け取ることができます。HTTP 通信という非同期処理が終わったとき（つまり未来）に処理してほしいことを「約束」させるわけですね。

```
const promise = axios.get('/api/abcdefg');

promise.then(response => {
  // 通信成功
});

promise.catch(error => {
  // 通信失敗 500など
});
```

`catch` メソッドに関数を渡すことで、非同期処理が失敗したときの挙動を約束させることもできます。

上記のコードはメソッドチェーンで以下のように書くこともできます。

```js
axios.get('/api/abcdefg')
  .then(response => {
    // 通信成功
  })
  .catch(error => {
    // 通信失敗 500など
  });
```

Promise オブジェクトを変数に入れる必要はないので、こちらの書き方の方が一般的です。

Promise は非同期処理を扱うための汎用的な機能ですので、その用途は HTTP 通信に限定されません。ただやはりよく使うのは通信処理でしょう。

## 進め方

[モーダルウィンドウ](/practice/modal)と同様です。

## 解答例

::: details 解答例と解説
[https://www.hypertextcandy.com/javascript-practical-quiz-cat-gif-gacha](https://www.hypertextcandy.com/javascript-practical-quiz-cat-gif-gacha)
:::
