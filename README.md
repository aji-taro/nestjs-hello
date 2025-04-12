# NestJS ハローワールド
- Mac と WSL(Windows)で起動確認してます。
    ```

    ・最初に docker desktop を起動しておく

      # ターミナルアプリで、以下コマンドを実行（イメージ取得〜コンテナ起動）
    $ cd 本リポジトリを配置したディレクトリ    # docker-compose.yml のあるディレクトリです
    $ docker compose up

    ※ここから下は、別ウィンドウか別タブで

      # コンテナ起動確認
    $ docker ps
          ※nestjs-hello が Up 状態になれば OK

    # コンテナに入る（というかコンテナのシェルを起動というか）
    $ docker exec -it nestjs-hello ash

    ※以下はコンテナのシェルで実行

    //    # プロジェクト作成
    //  $ nest new hello-world    # これは実行済みなのですが、別名を指定して新たにやってもいいかも

      # 起動
    $ cd hello-world/
    $ npm i
    $ npm run start

    ・少し待ってから、Webブラウザで、
    http://localhost:3000/prefix/hoge
    にアクセス

    ```

