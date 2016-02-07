import * as React from 'react';
import ReactComponent from "../ReactComponent";

interface PageSizeProps {
    currentPage: number;
    totalPages: number;
    sizePerPage: number;
    itemsCount: number;
    onNextClick: (nextPage:number) => void;
    onPrevClick: (prevPage:number) => void;
    onSizeClick: (size:number) => void;
}

export default class PageSize extends ReactComponent<PageSizeProps, any> {

    public getState() {
        return {
            sizeModel: [10, 25, 50, 100, 500],
            activeSize: 10
        }
    }

    private _onSizeClick = (size) => {
        this.setState({activeSize: size});
        this.props.onSizeClick(size);
    };

    public render() {

        var current = this.props.currentPage || 0, // first page == 0
            total = this.props.totalPages || 0,
            size = this.props.sizePerPage || 10,
            itemsCount = this.props.itemsCount || 0;

        var sizeItems = this.state.sizeModel;
        var sizeItemsElems = [];
        var self = this;
        _.each(sizeItems, function (item) {
            var _className = item == self.state.activeSize ? 'active' : '';
            sizeItemsElems.push(React.createElement('span', {
                key: item,
                className: _className,
                onClick: self._onSizeClick.bind(null, item)
            }, item));
        });
        var sizeElem = React.createElement('div', null,
            React.createElement('div', {className: 'page-size-block'}, sizeItemsElems)
        );

        return (
            <div className="react-pagination-info">
                <div>Total pages: {total}</div>
                <div>Total items: {itemsCount}</div>
                <div>{sizeElem}</div>
            </div>
        );
    }
}