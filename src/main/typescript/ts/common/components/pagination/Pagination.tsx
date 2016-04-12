import * as React from 'react';
import ReactComponent from "../ReactComponent";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    sizePerPage: number;
    itemsCount: number;
    onNextClick: (nextPage:number) => void;
    onPrevClick: (prevPage:number) => void;
}

export default class Pagination extends ReactComponent<PaginationProps, any> {

    public getState() {
        return {
            activeSize: 10
        }
    }

    private _onNextClick = (nextPage) => {
        this.props.onNextClick(nextPage);
    };

    private _onPrevClick = (prevPage) => {
        this.props.onPrevClick(prevPage);
    };

    public render() {

        var current = this.props.currentPage || 0, // first page == 0
            total = this.props.totalPages || 0;

        var nextPageElem = current < total - 1 ? React.createElement('span', {onClick: this._onNextClick.bind(null, current + 1)}, "Next Page") : null;
        var prevPageElem = current > 0 ? React.createElement('span', {onClick: this._onPrevClick.bind(null, current - 1)}, "Prev Page") : null;
        var currentElem = React.createElement('span', null, current + 1); // first page == 0

        return (
            <div className="react-pagination">
                <div className="pagination-inner">
                    <div className="react-pagination-menu">
                        <div className="first-page">
                            {prevPageElem}
                        </div>
                        <div className="current-page">
                            {currentElem}
                        </div>
                        <div className="last-page">
                            {nextPageElem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}