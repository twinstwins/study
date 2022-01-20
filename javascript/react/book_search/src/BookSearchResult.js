const BookSearchResult = () => {
    return (
        <div className="item-list">
            <BookSearchFormRadio />
            <div>
                <BookSearchItem />
                <BookSearchItem />
                <BookSearchItem />
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
                <input id="relesaseDate" type="radio" name="sort" value="" /> 発売順
            </label>
        </div>
    );
};

const BookSearchItem = () => {
    return (
        <div className="item">
            <figure>
                <img src="" alt="本の画像" />
            </figure>
            <p>本のタイトル</p>
        </div>
    );
};

export default BookSearchResult