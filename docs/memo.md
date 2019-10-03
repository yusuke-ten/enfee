## URLルーティング

### レビューページのルーティングをどうするか？

①~~ストアの絞り込みをクエリパラメータで表現する~~

reviewsページ内でクエリパラメータを見て条件分岐しなければいけない？

- reviews?store=all&...
- reviews?store=seven&...
- reivews?store=family&...

②ストアの絞り込みを純粋なルーティングで表現する ⇠ ◎こっち

reviewsページの中で更にルーティングするとなったらこっちの方がやりやすそう

- reviews/all?category=...
- reviews/seven-eleven&category=...
- reviews/lawson&category=...
- reviews/family-mart

### custom hooks

- stateをtoggleさせるメソッドを返すカスタムフックスを作成
- stateをtrue, falseに変換するメソッドを返すフックスを作成

### refactor

- headerのメニューアイコンを上のコンポネントから受け渡すように修正する。
