const BookSearchResult = (props) => {

    const displayRadioButton = () => {
        if (props.result.length !== 0) {
            return <BookSearchFormRadio sortType={props.sortType} />;
        }
        return null;
    };
    const displayItemNodes = () => {
        // props.result.lengthが「0」（検索結果がなく）かつ
        // props.isStartedがfalseではない（検索を1回以上行なっている）場合
        if (props.result.length === 0 && props.isStarted !== false) {
            // 検索結果がない旨のメッセージを表示
            return <p className="nonMessage">お探しの書籍はありませんでした</p>;
            // 上記の条件以外の場合だが、props.isStartedはfalseではない場合（検索結果がある場合）
        } else if (props.isStarted !== false) {
            // props.resultをmap()メソッドで展開し、
            // それぞれの要素の数だけBookSearchItemコンポーネントを生成し、
            // 検索結果をitemとkeyという名前をつけて渡す
            return props.result.map((item) => (
                <BookSearchItem
                    item={item}
                    key={item.itemUrl}
                    selectedItem={props.selectedItem}
                />
            ));
        }
        // 最初の状態: 何も表示しない
        return null;
    };

    return (
        <div className="item-list">
            {displayRadioButton()}

            <div>
                {displayItemNodes()}
            </div>
        </div>
    );
};

const BookSearchFormRadio = () => {
    return (
        <div>
            <label htmlFor="sales">
                <input id="sales" type="radio" name="sort" value="" /> 売れている順
            </label>
            <label htmlFor="releaseDate">
                <input id="releaseDate" type="radio" name="sort" value="" /> 発売順
            </label>
        </div>
    );
};

const BookSearchItem = (props) => {
    return (
        <div className="item">
            <figure>
                <img src={props.item.smallImageUrl} alt={props.item.title} />
            </figure>
            <p>{props.item.title}</p>
        </div>
    );
};
export default BookSearchResult