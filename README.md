# todoapp
ただのTODOアプリではなく、集中力をあげるために、やる気スイッチ入れるために、タスクをさくさくこなすためのアプリ

※ 1サイクル 30分作業、5分休憩
※ 大休憩は○サイクル終わったら、◯分休憩と決めておく。
※ 作業途中、他にしたいこと、やりたくなったことがあればメモをする。（ゲームがしたい、コーヒーブレイクしたいなど）

**使い方**
1. TODOリストを作成する
2. 各タスクがどのくらいのサイクルで終わるのか予想して入力する
3. 30分作業後、振り返りをする。振り返るポイントは、「具体的な数値でどのくらいできたか記載」、「学んだこと」、「改善策」の3点。
4. 5分瞑想または、バービーなどの運動
5. 再び 3. を行う。この時、前回で上がった改善策を実行できるようにする。


## 画面一覧
TODO一覧画面
TODO詳細画面
## 仕様
### TODO一覧画面
#### 表示項目
・TODO入力
・ディレクトリ / TODOリスト / 子リスト

#### 挙動
・各リストはドラッグして親子間、動かせる様にする
・ディレクトリはアコーディオン式で開閉できる様にする
・左の◯でcheckの切り替え
・左にスワイプで削除
・右のリスト文言タップで詳細画面遷移

### TODO詳細画面
#### 表示項目
・タイトル：ディレクトリ名
・TODOリスト/子リスト
・memo(TODOリスト、子リストにつき１つ)

#### 挙動
・各リストはドラッグして親子間、動かせる様にする
・左の◯でcheckの切り替え
・左にスワイプで削除
・親リストのみ、右のリスト文言タップで子の詳細画面遷移
## 実装メモ
### 今後したいこと
・アプリ対応（pc/sp）
・PCにおいてはマークダウンでも書ける様にしたい
・各TODO、目標と成果の点数を付けられる様な項目を作りたい
## その他実装情報
### アイコン実装
アイコン追加する時は、下記で検索し、`mdi-`接頭辞をつけて`<v-icon></v-icon>`タグに内包する形で設定する。
https://materialdesignicons.com/
ex: `<v-icon v-if="newTask" @click="create">mdi-plus</v-icon>`