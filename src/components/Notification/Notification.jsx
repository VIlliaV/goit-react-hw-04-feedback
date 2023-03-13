import PropTypes from 'prop-types';

import { Paragraf } from "./Notification.styled";

export const Notification = ({ message }) => <Paragraf>{message}</Paragraf>;

Notification.prototype = {
    message: PropTypes.string.isRequired,
}