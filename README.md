# nextjs-starter

## :four_leaf_clover:: Features
---
+ [Next.js](https://nextjs.org/)
+ [Sass](https://sass-lang.com/) + CSS Modules
+ [TypeScript](https://www.typescriptlang.org/)
+ [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/)
+ [husky](https://github.com/typicode/husky)
+ [Prettier](https://prettier.io/)
+ [Storybook](https://storybook.js.org/)

## :dog: Requirements
------
`Node.js`と`yarn`は下記のバージョンで確認済みです。


| 名前 | バージョン    |
| ---- |----------|
| Node.js | 18.7.0   |
| Yarn | v1.22.19 |


## :turtle: Install

First, clone the repo via git:

```bash
git@github.com:ozizo/nextjs-starter.git
```

### Install yarn

`npm script`で`yarn`を使用するので、yarnをインストールしてください。

https://classic.yarnpkg.com/ja/docs/install/


**for mac**

```bash
$ brew install yarn
```

**for windows**

```sh
# for Windows (with Chocolatey)
$ choco install yarn
```

[Use installer](https://yarnpkg.com/lang/en/docs/install/#windows-tab)


### 初期設定
`yarn install`が終わったタイミングで、`.config`フォルダががプロジェクト内に作られます。コミット時に`ESLint` / `stylelint` / `Prettier`を実行させるために必要です。

作られない場合は必ず下記コマンドを実行してください。


```sh
yarn prepare
```



下記のエラーが出た場合は[記事](https://qiita.com/nyamogera/items/9a34a0245c042b6f29c6)
を参考にgitのツールを修正してください。

```sh
.git/hooks/pre-commit: line 49: node: command not found
```


### Install dependencies

Using yarn:

```bash
yarn install
```

## :whale: Command
------

## dev

開発サーバーを立ち上げて、各種ファイルをコンパイルをします。


```bash
yarn dev
```

`why-did-you-update`を使用したい場合は、下記のコマンドで実行をしてください。

```bash
debug=1 yarn dev
```

## ANALYZE
`production build`時のファイル容量を確認します。

```bash
yarn analyze
```

## lint

`Prettier`と`ESLint`を実行します。

```bash
yarn lint
```

`pages`ディレクトリと`Storybook`のファイルのみ、`export default`でLintエラーが出ません。

## export
最終的にサーバーにアップされるファイルを出力します。

```bash
yarn export
```

## start
最終的にサーバーにアップされるファイルローカルで確認します。

[http://localhost:8888](http://localhost:8888)

```bash
yarn start
```

## svgr
SVGをReactコンポーネントに変換にします。

```bash
yarn svgr
```

`src/images/`内にディレクトリを作成してsvg画像を追加します。 追加後`packages.json`の`npm script`に、該当ディレクトリとコンポーネントの書き出し先を記述してください。

```bash
svgr --filename-case kebab ./src/images/ディレクトリ名/**/*.svg --ext tsx --out-dir ./src/components/書き出し先
```

## storybook起動
http://localhost:6006/ で立ち上がります。


```bash
yarn storybook
```

## generator
以下のコマンドで `page` もしくは `features` のコードをgenerateできます。


```bash
yarn generate
```

## :crocodile: Directory
------
src内のディレクトリ構造は下記を参考にしました。

+ [bulletproof-react](https://github.com/alan2207/bulletproof-react)

```text
src
|
+-- assets/            # assetsフォルダは変換して使用するファイルやpublicフォルダに格納しないファイルの置き場
|
+-- components/        # アプリケーション全体で使用される共有コンポーネント
|
+-- config/            # グローバルな設定、環境変数などはすべてここからエクスポート
|
+-- features/          # 機能ベースのモジュール
|
+-- hooks/             # アプリケーション全体で使用される共有フック
|
+-- libs/               # アプリケーション用にあらかじめ設定された異なるライブラリの再エクスポート
|
+-- stores/            # グローバルステートの管理
|
+-- styles/            # 共通で使用する変数やmixin、関数の置き場
|
+-- types/             # 共通で使用するtypes
|
+-- utils/             # 共通で使用するユーティリティ関数
```

`components`内のファイルは並列、`features`内は複数のコンポーネントがある可能性があるのでディレクトリを切ってください。

**components**
```text
index.ts             # indexファイル
component.tsx        # コンポーネントファイル
styles.module.scss   # scssファイル
type.ts              # 型ファイル
```

**features**
```text
index.ts             # indexファイル
components/          # コンポーネントファイルのフォルダ
types/               # 型ファイルのフォルダ
```
