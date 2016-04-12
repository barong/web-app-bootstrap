import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HTML from "../constants/HTML";

export default class ReactComponent<P,S> extends React.Component<P,S>{

    public getState():S {
        return null;
    }

    public getInitialState = ():S => {
        return this.getState();
    };

    /**
     * @see React.createClass
     */
    constructor(props:P, context:any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = this.getInitialState();

        // Nasty trick to avoid warnings.
        this.getInitialState = null;
    }

    static isMounted(component) {
        // exceptions for flow control :(
        try {
            ReactDOM.findDOMNode(component);
            return true;
        } catch (e) {
            // Error: Invariant Violation: Component (with keys: props,context,state,refs,_reactInternalInstance) contains `render` method but is not mounted in the DOM
            return false;
        }
    }

    public formSerializeJSON = (form:JQuery):{} => {
        var formData = form.serializeArray();

        var result = {};

        _.map(formData, function (data) {
            result[data['name']] = data['value'];
        });

        return result;
    };

    public elementOnChange = (e) => {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(<any> nextState);
    };

    public isBlank = (value: string): boolean => {
        if (value) {
            return value.trim().length == 0;
        }
        return true;
    };

    public isNotBlank = (value: string): boolean => {
        return !this.isBlank(value);
    };

    public scrollTo = (top: number = 0, left: number = 0) => {
        this.getContentWrapper().animate({ scrollTop: top, scrollLeft: left });
    };

    public getCurrentScroll = () => {
        var el: JQuery = this.getContentWrapper();
        return { left: el.scrollLeft(), top: el.scrollTop() };
    };

    public getContentWrapper = (): JQuery => {
        return $('#' + HTML.CONTENT_WRAPPER_ID);
    };
}
