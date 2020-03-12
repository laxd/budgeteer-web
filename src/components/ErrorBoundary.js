import { Component } from 'react'
import handleError from '../services/ErrorHandler';

export default class ErrorBoundary extends Component {

    componentDidCatch(error, errorInfo) {
        handleError(error);
    }

    render() {
        return this.props.children;
    }
}
