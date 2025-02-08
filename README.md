# vercel/prisma/supabase 構成で安心したい

## prismaclienterror の原因を解明する

vercel のビルド時、prisma generate && prisma db push コマンドの実行で DB と接続できず以下のエラーに、、

```
Can't reach database server at `aws-0-us-west-1.pooler.supabase.com:5432`
```

デプロイを頻繁に（prisma generate && prisma db push 実行を頻繁に）行うとこのエラーになることから、supabase の接続制限がかけられているのかもしれないと考え、以下の todo で解消できるか試していく

## デプロイ手法に関する todo

・DB 構造に変更がない際は build 時に prisma generate && prisma db push を実行しないようなスクリプトを作る、それで運用問題がないか確認

・prisma
client を理解する（無駄なインスタンスが生成されることの悪影響とは何か、本番環境で無駄なインスタンスが生成されていないか、それをどう確認するのか、が課題）memo: 開発環境用の ベスプラ は公式が出しているのでヒントになるかも(https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help)←fruitsbaseで記述したものと異なっているが、割と最近に変更された？

## マイグレート手法に関する todo

・null 許容変更時  
・カラム追加時（null 許容も確かめる）  
・カラム削除時  
・カラムネーム変更時  
・カラム型変更時（text→string とかはどうなる？）  
・テーブル追加時  
・主キー変更時  
・ユニーク制約変更時

上記の変更をした上で、デプロイ（というか prisma generate && prisma db push を実行）を行うとデータをもつ既存 DB の行末はどうなるか検証

--accept-data-loss の必要な時・不必要な時・使うべきでない時も検証したい
