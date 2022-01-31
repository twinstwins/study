const BookSearchDetails = (props) => {
    const item = props.item;
    const displayItemDetails = () => {
        if (Object.keys(props.item).length !== 0) {
            return (
                <div>
                    <ul className="details-list">
                        <li>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src="" alt="本の画像" />
                            </a>
                        </li>
                        <li><strong>本のタイトル</strong></li>
                        <li>著者: 著者</li>
                        <li>出版社: 出版社</li>
                        <li>発売日: 発売日</li>
                        <li>ISBN: ISBN</li>
                        <li>評価: 評価</li>
                        <li>価格: 価格</li>
                        <li>本の概要</li>
                        <li className="details-link">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                購入する
                            </a>
                        </li>
                    </ul>
                </div>
            );
        }
        return null;
    };
    return (
        <div className="item-details">
            {displayItemDetails()}
        </div>
    );
};


export default BookSearchDetails;