import React from "react";
import BookSearchHeader from "./BookSearchHeader";
import BookSearchResult from "./BookSearchResult";
import BookSearchDetails from "./BookSearchDetails";

class BookSearch extends React.Component {
    render() {
        return (
            <div>
                <BookSearchHeader />
                <BookSearchResult />
                <BookSearchDetails />
            </div>
        );
    }
}

export default BookSearch;