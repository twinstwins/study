import React from "react";
import BookSearchHeader from "./BookSearchHeader";
import BookSearchResult from "./BookSearchResult";
import BookSearchDetails from "./BookSearchDetails";

class BookSearch extends React.Component {

    constructor(props) {
        super(props);
        // Webアプリの初期値を定義
        this.state = {
            keyword: '', // 初期値は空の状態です
            sortType: 'sales', // 初期値は売れている順です（楽天ブックスAPIの仕様です）
            result: [], // 初期値は空の状態です
            isStarted: false, // 初期値はfalseです
            itemDetails: {}, // 初期値は空の状態です
            selectedItem: '', // 初期値は空の状態です
        };
    }

    render() {
        return (
            <div>

                <BookSearchHeader keyword={this.state.keyword} />
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