import React from "react";
import BookSearchHeader from "./BookSearchHeader";
import BookSearchResult from "./BookSearchResult";
import BookSearchDetails from "./BookSearchDetails";
import OnOffButton from "./OnOffButton";

class BookSearch extends React.Component {

    constructor(props) {
        super(props);
        // Webアプリの初期値を定義
        this.state = {
            keyword: '初期値プロップ', // 初期値は空の状態です
            sortType: 'sales', // 初期値は売れている順です（楽天ブックスAPIの仕様です）
            result: [{},{},{}], // 初期値は空の状態です
            isStarted: false, // 初期値はfalseです
            itemDetails: {foo: 'foo'}, // 初期値は空の状態です
            selectedItem: '', // 初期値は空の状態です
        };
        // コールバック関数としてthisが機能するようにthisをbindする
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    // 引数eventにはイベントオブジェクトが渡されます
    handleInput(event) {
        // イベントオブジュエクトからフォームに入力されたvalue値を取得
        const newKeyword = event.target.value;
        // this.setStateを返し、state.keywordを取得したvalue値で更新し、
        // コンポーネントを再レンダリング
        this.setState({ keyword: newKeyword });
    }

    handleClick() {
        // this.state.keywordが空でなかった場合
        if (this.state.keyword !== '') {
            // this.setFetchedData()メソッドを呼び出す
            this.setFetchedData();

            console.log('検索する');
        }
    }

    fetchData(callback) {
        // リクエストURLのパラメータの定義
        const params = '?'
            + 'formatVersion=2'
            + '&applicationId=1099653992997915194'
            + `&sort=${this.state.sortType}`
            + `&keyword=${this.state.keyword}`;

        // Fecth APIを使った非同期通信
        fetch(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404${params}`, {
            method: 'get',
        }).then((response) => {

            console.log(response);

            // レスポンスのstatusが200だった場合
            if (response.status === 200) {
                // レスポンスの結果をjson形式で返します
                return response.json();
            }
        }).then(
            // レスポンスをコールバック関数の引数に渡し、コールバック関数を返します。
            (response) => { callback(response.Items) }
        ).catch(
            // エラーだった場合
            response => console.error(response)
        );
    }

    setFetchedData() {
        // this.fetchData()メソッドを呼び出す
        this.fetchData(
            // コールバック関数: 引数apiResultを通して検索結果を受け取り、
            // this.setState()メソッドを呼び出す
            apiResult => this.setState({
                result: apiResult,
                isStarted: true,
            }),
        );

        console.log(this.state, 'ステート');
    }


    render() {
        return (
            <div>

                <OnOffButton buttonName="おおお"/>

                <BookSearchHeader
                    keyword={this.state.keyword}
                    handleInput={this.handleInput}
                    handleClick={this.handleClick}
                />

                <BookSearchResult
                    keyword={this.state.keyword}
                    result={this.state.result}
                    isStarted={this.state.isStarted}
                    sortType={this.state.sortType}
                    selectedItem={this.state.selectedItem}
                />
                <BookSearchDetails item={this.state.itemDetails} />

            </div>
        );
    }
}

export default BookSearch;