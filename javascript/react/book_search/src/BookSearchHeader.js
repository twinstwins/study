const BookSearchHeader = () => {
    return (
        <header>
            <h1>
                BookSearch! <span>by 楽天ブックス</span>
            </h1>
            <BookSearchFormInput />
            <BookSearchFormButton />
        </header>
    );
};

const BookSearchFormInput = () => {
    return <input type="text" placeholder="キーワード" />;
};

const BookSearchFormButton = () => {
    return <button>検索</button>;
};

export default BookSearchHeader;