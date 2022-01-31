const BookSearchResult = (props) => {

    const displayRadioButton = () => {
        if (props.result.length !== 0) {
            return <BookSearchFormRadio sortType={props.sortType} />;
        }
        return null;
    };

    const displayItemNodes = () => {
        if (props.result.length !== 0) {
            return props.result.map((item) => (
                <BookSearchItem selectedItem={props.selectedItem} />
            ));
        }
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