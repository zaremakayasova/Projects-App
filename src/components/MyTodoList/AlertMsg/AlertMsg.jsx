import './AlertMsg.styles.css';
import { connect } from 'react-redux';
import { hideAlertMsg } from '../../../redux/todo/todo.actions';
import { AiOutlineClose } from "react-icons/ai";

const AlertMsg = ({ msg, alertClass, deleteAlert, hideAlertMsg }) => {

    const handleCloseClick = () => {
        hideAlertMsg();
    };

    return (
        <div className={
            `${deleteAlert ? 'DeleteAlert' : ''}
            ${alertClass}`}
        >
            {msg}
            <AiOutlineClose style={{ marginLeft: '8%' }} onClick={handleCloseClick}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    hideAlertMsg: () => dispatch(hideAlertMsg())
});

export default connect(null, mapDispatchToProps)(AlertMsg);