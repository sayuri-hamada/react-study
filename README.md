# react-study

## :four_leaf_clover:: Features
---
+ [Next.js](https://nextjs.org/)
+ [Sass](https://sass-lang.com/) + CSS Modules
+ [TypeScript](https://www.typescriptlang.org/)
+ [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/)
+ [husky](https://github.com/typicode/husky)
+ [Prettier](https://prettier.io/)

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
git@github.com:ozizo/react-study.git
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


