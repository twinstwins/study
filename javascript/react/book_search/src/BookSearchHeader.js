const BookSearchHeader = (props) => {
    return (
        <header>
            <h1>
                BookSearch! <span>by 楽天ブックス</span>
            </h1>
            <BookSearchFormInput
                keyword={props.keyword}
                handleInput={props.handleInput}
            />
            <BookSearchFormButton />
        </header>
    );
};


const BookSearchFormInput = (props) => {
    return (
        <input type="text" placeholder="キーワード" value={props.keyword} onChange={props.handleInput} />
    )
};


const BookSearchFormButton = () => {
    return <button>検索</button>;
};

export default BookSearchHeader;