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
